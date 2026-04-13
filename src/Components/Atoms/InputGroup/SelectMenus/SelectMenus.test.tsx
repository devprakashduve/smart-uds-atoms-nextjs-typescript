import { render, screen, fireEvent, within } from '@testing-library/react';
import SelectMenus from '.';

const items = [
  { id: '1', name: 'Wade Cooper', avatar: '/images/avatar.jpg' },
  { id: '2', name: 'Arlene Mccoy' },
  { id: '3', name: 'Devon Webb' },
];

describe('SelectMenus', () => {
  const renderComponent = (props = {}) =>
    render(<SelectMenus items={items} {...props} />);

  it('renders default state', () => {
    renderComponent();
    expect(screen.getByText('Wade Cooper')).toBeInTheDocument();
  });

  it('opens the dropdown when button is clicked', () => {
    renderComponent();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('selects an option when clicked', () => {
    const handleChange = jest.fn();
    renderComponent({ onChange: handleChange });
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Arlene Mccoy'));

    expect(handleChange).toHaveBeenCalledWith(items[1]);
    expect(screen.getByText('Arlene Mccoy')).toBeInTheDocument();
  });

  it('updates selected value when value prop changes', () => {
    const { rerender } = render(
      <SelectMenus items={items} value={items[0]} onChange={() => {}} />
    );
    expect(screen.getByText('Wade Cooper')).toBeInTheDocument();

    rerender(
      <SelectMenus items={items} value={items[1]} onChange={() => {}} />
    );
    expect(screen.getByText('Arlene Mccoy')).toBeInTheDocument();
  });

  it('renders correctly with different sizes', () => {
    const { rerender } = render(
      <SelectMenus items={items} size="sm" label="Size Test" />
    );

    rerender(<SelectMenus items={items} size="lg" label="Size Test" />);
    rerender(<SelectMenus items={items} size="md" label="Size Test" />);
  });

  it('handles disabled state', () => {
    const handleChange = jest.fn();
    renderComponent({ disabled: true, onChange: handleChange });
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    // Attempt click - shouldn't open
    // fireEvent.click(button); // Disabled button interaction check
  });

  it('handles empty items', () => {
    render(<SelectMenus items={[]} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('displays error state', () => {
    renderComponent({ error: true });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-error');
  });

  it('displays required error when cleared or empty', () => {
    const placeholderItem = { id: '0', name: 'Select...' };

    render(
      <SelectMenus
        items={[placeholderItem, ...items]}
        defaultSelected={placeholderItem}
        placeholder="Select..."
        required={true}
        onChange={() => {}}
      />
    );

    fireEvent.click(screen.getByRole('button'));
    const list = screen.getByRole('list');
    const option = within(list).getByText('Select...');
    fireEvent.click(option);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders label', () => {
    renderComponent({ label: 'My Label' });
    expect(screen.getByText('My Label')).toBeInTheDocument();
  });
});
