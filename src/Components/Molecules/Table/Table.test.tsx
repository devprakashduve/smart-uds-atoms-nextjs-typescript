import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Table from './index';

interface Person {
  name: string;
  age: number;
  city: string;
}

const data: Person[] = [
  { name: 'Charlie', age: 30, city: 'New York' },
  { name: 'Alice', age: 25, city: 'San Francisco' },
  { name: 'Bob', age: 35, city: 'Chicago' },
];

const columns = [
  { key: 'name' as keyof Person, header: 'Name', sortable: true },
  { key: 'age' as keyof Person, header: 'Age', sortable: true },
  { key: 'city' as keyof Person, header: 'City', sortable: false },
];

const defaultProps = {
  data,
  columns,
  currentPage: 1,
  pageSize: 10,
  onPageChange: jest.fn(),
};

describe('Table', () => {
  describe('rendering', () => {
    it('renders a table element', () => {
      render(<Table {...defaultProps} />);
      expect(screen.getByRole('table')).toBeInTheDocument();
    });

    it('renders column headers', () => {
      render(<Table {...defaultProps} />);
      expect(
        screen.getByRole('columnheader', { name: /name/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /age/i })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('columnheader', { name: /city/i })
      ).toBeInTheDocument();
    });

    it('renders all data rows', () => {
      render(<Table {...defaultProps} />);
      expect(screen.getByText('Charlie')).toBeInTheDocument();
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });

    it('renders cell values correctly', () => {
      render(<Table {...defaultProps} />);
      expect(screen.getByText('25')).toBeInTheDocument();
      expect(screen.getByText('San Francisco')).toBeInTheDocument();
    });

    it('applies custom className to the container', () => {
      const { container } = render(
        <Table {...defaultProps} className="custom-table" />
      );
      expect(container.firstChild).toHaveClass('custom-table');
    });
  });

  describe('sorting', () => {
    it('renders sort icons on sortable columns', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      // Unsorted state shows the ↕ icon
      expect(nameHeader.textContent).toContain('↕');
    });

    it('does not render sort icon on non-sortable columns', () => {
      render(<Table {...defaultProps} />);
      const cityHeader = screen.getByRole('columnheader', { name: /city/i });
      expect(cityHeader.textContent).not.toContain('↕');
      expect(cityHeader.textContent).not.toContain('↑');
    });

    it('sorts data ascending on first click of a sortable column header', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader);

      const rows = screen.getAllByRole('row');
      // rows[0] is the header row; rows[1..] are data rows
      expect(rows[1]).toHaveTextContent('Alice');
      expect(rows[2]).toHaveTextContent('Bob');
      expect(rows[3]).toHaveTextContent('Charlie');
    });

    it('sorts data descending on second click', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader); // asc
      fireEvent.click(nameHeader); // desc

      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Charlie');
      expect(rows[2]).toHaveTextContent('Bob');
      expect(rows[3]).toHaveTextContent('Alice');
    });

    it('clears sort on third click', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader); // asc
      fireEvent.click(nameHeader); // desc
      fireEvent.click(nameHeader); // clear

      const rows = screen.getAllByRole('row');
      // Back to original order: Charlie, Alice, Bob
      expect(rows[1]).toHaveTextContent('Charlie');
    });

    it('sets aria-sort="ascending" on the sorted column (asc)', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader);
      expect(nameHeader).toHaveAttribute('aria-sort', 'ascending');
    });

    it('sets aria-sort="descending" on the sorted column (desc)', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader); // asc
      fireEvent.click(nameHeader); // desc
      expect(nameHeader).toHaveAttribute('aria-sort', 'descending');
    });

    it('shows ↑ icon when sorted ascending', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader);
      expect(nameHeader.textContent).toContain('↑');
    });

    it('shows ↓ icon when sorted descending', () => {
      render(<Table {...defaultProps} />);
      const nameHeader = screen.getByRole('columnheader', { name: /name/i });
      fireEvent.click(nameHeader);
      fireEvent.click(nameHeader);
      expect(nameHeader.textContent).toContain('↓');
    });

    it('applies defaultSort prop correctly', () => {
      render(
        <Table
          {...defaultProps}
          defaultSort={{ key: 'name', direction: 'asc' }}
        />
      );
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Alice');
    });

    it('sorts numeric values correctly', () => {
      render(<Table {...defaultProps} />);
      const ageHeader = screen.getByRole('columnheader', { name: /age/i });
      fireEvent.click(ageHeader); // asc by age

      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('25'); // Alice (25)
      expect(rows[2]).toHaveTextContent('30'); // Charlie (30)
      expect(rows[3]).toHaveTextContent('35'); // Bob (35)
    });

    it('does not sort when clicking a non-sortable column', () => {
      render(<Table {...defaultProps} />);
      const cityHeader = screen.getByRole('columnheader', { name: /city/i });
      fireEvent.click(cityHeader);
      // Order should remain original
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Charlie');
    });
  });

  describe('row interaction', () => {
    it('calls onRowClick when a row is clicked', () => {
      const onRowClick = jest.fn();
      render(<Table {...defaultProps} onRowClick={onRowClick} />);
      fireEvent.click(screen.getByText('Charlie'));
      expect(onRowClick).toHaveBeenCalledWith(data[0]);
    });
  });

  describe('pagination', () => {
    it('only shows rows for the current page', () => {
      const manyRows: Person[] = Array.from({ length: 15 }, (_, i) => ({
        name: `Person ${i + 1}`,
        age: 20 + i,
        city: 'City',
      }));
      render(
        <Table
          data={manyRows}
          columns={columns}
          currentPage={1}
          pageSize={5}
          onPageChange={jest.fn()}
        />
      );
      expect(screen.getByText('Person 1')).toBeInTheDocument();
      expect(screen.getByText('Person 5')).toBeInTheDocument();
      expect(screen.queryByText('Person 6')).not.toBeInTheDocument();
    });

    it('shows correct rows for page 2', () => {
      const manyRows: Person[] = Array.from({ length: 15 }, (_, i) => ({
        name: `Person ${i + 1}`,
        age: 20 + i,
        city: 'City',
      }));
      render(
        <Table
          data={manyRows}
          columns={columns}
          currentPage={2}
          pageSize={5}
          onPageChange={jest.fn()}
        />
      );
      expect(screen.getByText('Person 6')).toBeInTheDocument();
      expect(screen.getByText('Person 10')).toBeInTheDocument();
      expect(screen.queryByText('Person 1')).not.toBeInTheDocument();
    });
  });

  describe('custom render', () => {
    it('calls render function for a column cell', () => {
      const columnsWithRender = [
        {
          key: 'name' as keyof Person,
          header: 'Name',
          render: (value: Person[keyof Person]) => (
            <strong data-testid="custom-cell">{String(value)}</strong>
          ),
        },
        { key: 'age' as keyof Person, header: 'Age' },
      ];
      render(
        <Table
          data={data}
          columns={columnsWithRender}
          currentPage={1}
          pageSize={10}
          onPageChange={jest.fn()}
        />
      );
      const customCells = screen.getAllByTestId('custom-cell');
      expect(customCells).toHaveLength(3); // One per row
    });
  });
});
