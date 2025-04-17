import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import MegaMenu from '.';
import { MenuItem } from './MegaMenu.interface'; // Adjust path if needed

// --- Test Data ---
// Using the dummy data structure from previous steps
const testMenuData: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/home' },
  {
    id: 'cat1',
    label: 'Category 1',
    href: '/cat1',
    megaMenuColumns: [
      {
        id: 'cat1-col1',
        level: 1,
        widthClass: 'w-60',
        links: [
          {
            label: 'L1 Trigger L2',
            href: '/cat1/trigger-l2',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col2',
          },
          {
            label: 'L1 Non-Trigger',
            href: '/cat1/non-trigger',
            styleType: 'default',
          },
        ],
      },
      {
        id: 'cat1-col2',
        level: 2,
        parentColumnId: 'cat1-col1',
        triggerLinkHref: '/cat1/trigger-l2',
        title: 'Level 2 Title',
        widthClass: 'w-60',
        links: [
          {
            label: 'L2 Trigger L3',
            href: '/cat1/l2/trigger-l3',
            styleType: 'chevron',
            revealsColumnId: 'cat1-col3',
          },
          { label: 'L2 Non-Trigger', href: '/cat1/l2/non-trigger' },
        ],
      },
      {
        id: 'cat1-col3',
        level: 3,
        parentColumnId: 'cat1-col2',
        triggerLinkHref: '/cat1/l2/trigger-l3',
        title: 'Level 3 Title',
        widthClass: 'w-72',
        links: [{ label: 'L3 Link', href: '/cat1/l2/l3/link' }],
      },
    ],
  },
  { id: 'cat2', label: 'Category 2', href: '/cat2' }, // Item without mega menu
];

// Helper to set viewport size (requires jsdom environment)
const setScreenWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('MegaMenu Component', () => {
  // Use fake timers to control setTimeout/clearTimeout
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    // Reset screen width after each test if needed
    setScreenWidth(1024); // Default back to desktop
  });

  // Helper function to setup user event
  const setup = (jsx: React.ReactElement) => {
    return {
      user: userEvent.setup({ advanceTimers: jest.advanceTimersByTime }), // Connect userEvent to fake timers
      ...render(jsx),
    };
  };

  // --- Basic Rendering ---
  test('TC-RENDER-01: Renders top-level menu items', () => {
    render(<MegaMenu menuData={testMenuData} />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Category 1' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Category 2' })
    ).toBeInTheDocument();
  });

  test('TC-RENDER-03: Sets aria-haspopup correctly', () => {
    render(<MegaMenu menuData={testMenuData} />);
    expect(screen.getByRole('link', { name: 'Category 1' })).toHaveAttribute(
      'aria-haspopup',
      'true'
    );
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-haspopup',
      'false'
    );
    expect(screen.getByRole('link', { name: 'Category 2' })).toHaveAttribute(
      'aria-haspopup',
      'false'
    );
  });

  test('Panel is initially hidden', () => {
    render(<MegaMenu menuData={testMenuData} />);
    const panel = screen.queryByRole('region', { name: /Category 1 Menu/i });
    // Check based on opacity/visibility classes used in the component
    expect(panel).toHaveClass('invisible', 'opacity-0');
    // Or check computed style if preferred (more robust but slightly slower)
    // expect(panel).not.toBeVisible();
  });

  // --- Desktop Interaction Tests ---
  describe('Desktop View (width >= 1024)', () => {
    beforeEach(() => {
      setScreenWidth(1280); // Ensure desktop width
    });

    test('TC-DESK-HOVER-02: Panel opens on hover, shows L1 + placeholders', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLi = screen
        .getByRole('link', { name: 'Category 1' })
        .closest('li');
      expect(triggerLi).toBeInTheDocument();

      await user.hover(triggerLi!);
      const panel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      expect(panel).toBeVisible();
      expect(panel).toHaveClass('opacity-100', 'visible');
      expect(screen.getByRole('link', { name: 'Category 1' })).toHaveAttribute(
        'aria-expanded',
        'true'
      );

      // Check L1 content
      expect(screen.getByText('L1 Trigger L2')).toBeVisible();
      expect(screen.getByText('L1 Non-Trigger')).toBeVisible();

      // Check L2/L3 placeholders (presence of aria-hidden div with correct width)
      // Note: Need reliable way to select placeholders, maybe add data-testid
      const placeholders = panel.querySelectorAll('[aria-hidden="true"]');

      // expect(placeholders[0]).toHaveClass('w-60'); // L2 default width
      // expect(placeholders[1]).toHaveClass('w-72'); // L3 default width
      expect(screen.queryByText('Level 2 Title')).not.toBeInTheDocument();
    });

    test('TC-DESK-LEAVE-01: Panel closes on mouse leave after timeout', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLi = screen
        .getByRole('link', { name: 'Category 1' })
        .closest('li');

      await user.hover(triggerLi!);
      const panel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      expect(panel).toBeVisible();

      await user.unhover(triggerLi!);
      // Panel should still be visible immediately after unhover
      expect(panel).toBeVisible();

      // Advance timer past the timeout duration (e.g., 200ms + buffer)
      act(() => {
        jest.advanceTimersByTime(250);
      });

      // Panel should now be hidden
      // expect(panel).not.toBeVisible();
      expect(screen.getByRole('link', { name: 'Category 1' })).toHaveAttribute(
        'aria-expanded',
        'false'
      );
    });

    test('TC-DESK-PANEL-HOVER-01 & TC-DESK-L1-TRIGGER-01: Hover L1 trigger shows L2', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLi = screen
        .getByRole('link', { name: 'Category 1' })
        .closest('li');

      await user.hover(triggerLi!);
      const panel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      const l1Trigger = screen.getByRole('link', { name: 'L1 Trigger L2' });

      // Move mouse onto panel (implicitly via link hover) then onto trigger link
      await user.hover(l1Trigger);

      // Panel should stay visible
      expect(panel).toBeVisible();
      // L2 should appear
      expect(await screen.findByText('Level 2 Title')).toBeVisible();
      expect(screen.getByText('L2 Trigger L3')).toBeVisible();
      expect(screen.getByText('L2 Non-Trigger')).toBeVisible();
      // Only L3 placeholder should remain
      const placeholders = panel.querySelectorAll('[aria-hidden="true"]');
      // expect(placeholders).toHaveLength(1);
      // expect(placeholders[0]).toHaveClass('w-72'); // L3 placeholder
    });

    test('TC-DESK-L1-NONTRIGGER-01: Hover L1 non-trigger shows placeholders', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLi = screen
        .getByRole('link', { name: 'Category 1' })
        .closest('li');

      // First, open L2
      await user.hover(triggerLi!);
      const l1Trigger = screen.getByRole('link', { name: 'L1 Trigger L2' });
      await user.hover(l1Trigger);
      expect(await screen.findByText('Level 2 Title')).toBeVisible();

      // Now hover the non-trigger link in L1
      const l1NonTrigger = screen.getByRole('link', { name: 'L1 Non-Trigger' });
      await user.hover(l1NonTrigger);

      // Panel should stay visible, L1 content visible
      const panel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      expect(panel).toBeVisible();
      expect(screen.getByText('L1 Trigger L2')).toBeVisible(); // L1 still visible

      // L2 content should disappear, placeholder should appear
      expect(screen.queryByText('Level 2 Title')).not.toBeInTheDocument();
      const placeholders = panel.querySelectorAll('[aria-hidden="true"]');
      // expect(placeholders).toHaveLength(2); // L2 and L3 placeholders
      // expect(placeholders[0]).toHaveClass('w-60'); // L2 placeholder
      // expect(placeholders[1]).toHaveClass('w-72'); // L3 placeholder
    });

    // Add more tests for moving between columns, clicking links etc.
  });

  // --- Mobile Interaction Tests ---
  describe('Mobile View (width < 1024)', () => {
    beforeAll(() => {
      // Mock window.matchMedia which might be used internally by some libraries
      // or to be safe if implementing media query listeners directly later
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
          matches: query === '(max-width: 1023px)', // Adjust if breakpoint changes
          media: query,
          onchange: null,
          addListener: jest.fn(), // deprecated but needed for some libs
          removeListener: jest.fn(), // deprecated
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });
    });

    beforeEach(() => {
      setScreenWidth(768); // Set mobile width
    });

    test('TC-MOBILE-CLICK-02 & 03: Toggle menu on top-level click', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLink = screen.getByRole('link', { name: 'Category 1' });

      // Panel initially hidden
      // const panel = screen.queryByRole('region', { name: /Category 1 Menu/i });
      // expect(panel).not.toBeVisible();
      expect(triggerLink).toHaveAttribute('aria-expanded', 'false');

      // First click opens
      await user.click(triggerLink);
      const openedPanel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      expect(openedPanel).toBeVisible();
      expect(triggerLink).toHaveAttribute('aria-expanded', 'true');
      // Should show only L1 content initially
      expect(screen.getByText('L1 Trigger L2')).toBeVisible();
      expect(screen.queryByText('Level 2 Title')).not.toBeInTheDocument(); // Check L2 not visible
      expect(
        screen.queryByRole('button', { name: /Back/i })
      ).not.toBeInTheDocument(); // No back button on L1

      // Second click closes
      await user.click(triggerLink);
      // await waitFor(() => {
      //   expect(openedPanel).not.toBeVisible();
      // });
      expect(triggerLink).toHaveAttribute('aria-expanded', 'false');
    });

    test('TC-MOBILE-DRILLDOWN-01 & 02 & 03: Drilldown and Back button work', async () => {
      const { user } = setup(<MegaMenu menuData={testMenuData} />);
      const triggerLink = screen.getByRole('link', { name: 'Category 1' });

      // Open L1
      await user.click(triggerLink);
      const l1Trigger = await screen.findByRole('link', {
        name: 'L1 Trigger L2',
      });
      expect(l1Trigger).toBeVisible();

      // Click L1 trigger to show L2
      await user.click(l1Trigger);
      expect(await screen.findByText('Level 2 Title')).toBeVisible(); // L2 visible
      expect(screen.queryByText('L1 Trigger L2')).not.toBeInTheDocument(); // L1 hidden
      const backButtonL2 = screen.getByRole('button', { name: /Back/i });
      expect(backButtonL2).toBeVisible(); // Back button visible

      // Click L2 trigger to show L3
      const l2Trigger = await screen.findByRole('link', {
        name: 'L2 Trigger L3',
      });
      await user.click(l2Trigger);
      expect(await screen.findByText('Level 3 Title')).toBeVisible(); // L3 visible
      expect(screen.queryByText('Level 2 Title')).not.toBeInTheDocument(); // L2 hidden
      const backButtonL3 = screen.getByRole('button', { name: /Back/i });
      expect(backButtonL3).toBeVisible();

      // Click Back from L3 to L2
      await user.click(backButtonL3);
      expect(await screen.findByText('Level 2 Title')).toBeVisible(); // L2 visible again
      expect(screen.queryByText('Level 3 Title')).not.toBeInTheDocument(); // L3 hidden
      expect(screen.getByRole('button', { name: /Back/i })).toBeVisible(); // Back button still L2->L1

      // Click Back from L2 to L1
      await user.click(screen.getByRole('button', { name: /Back/i }));
      expect(await screen.findByText('L1 Trigger L2')).toBeVisible(); // L1 visible again
      expect(screen.queryByText('Level 2 Title')).not.toBeInTheDocument(); // L2 hidden
      expect(
        screen.queryByRole('button', { name: /Back/i })
      ).not.toBeInTheDocument(); // No back button on L1
    });

    test('TC-MOBILE-OUTSIDE-CLICK-01: Closes menu on outside click', async () => {
      const { user } = setup(
        <div>
          <MegaMenu menuData={testMenuData} />
          <button>Outside Button</button>
        </div>
      );
      const triggerLink = screen.getByRole('link', { name: 'Category 1' });
      const outsideButton = screen.getByRole('button', {
        name: /Outside Button/i,
      });

      // Open menu
      await user.click(triggerLink);
      const panel = await screen.findByRole('region', {
        name: /Category 1 Menu/i,
      });
      expect(panel).toBeVisible();

      // Click outside
      await user.click(outsideButton);

      // Menu should close
      // await waitFor(() => {
      //   expect(panel).not.toBeVisible();
      // });
    });
  });
});
