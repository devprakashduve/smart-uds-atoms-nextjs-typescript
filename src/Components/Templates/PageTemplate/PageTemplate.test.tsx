// src/components/Templates/PageTemplate/PageTemplate.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import PageTemplate from '.';
// Mock dependencies: BaseTemplate and Section
// We only care that PageTemplate *passes props correctly* to them.
// The mocks render children and reflect relevant props for verification.

jest.mock('../BaseTemplate', () => {
  return jest.fn(({ header, footer, children, className }) => (
    <div data-testid="base-template" className={className}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </div>
  ));
});

jest.mock('../../Organisms/Section', () => {
  return jest.fn(
    ({ heading, subheading, children, className, border, textAlign }) => (
      <section
        data-testid="section"
        className={className}
        data-border={border}
        data-text-align={textAlign}
      >
        {heading && <h2>{heading}</h2>}
        {subheading && <h3>{subheading}</h3>}
        <div>{children}</div>
      </section>
    )
  );
});

describe('PageTemplate Component', () => {
  const mockHeader = <div data-testid="mock-header">Mock Header</div>;
  const mockFooter = <div data-testid="mock-footer">Mock Footer</div>;
  const mockChildren = (
    <p data-testid="mock-children">Page Content Goes Here</p>
  );

  // Clear mocks before each test to prevent interference
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // --- Rendering Tests ---

  test('TC-PT-RENDER-01: Renders correctly with minimal props', () => {
    render(
      <PageTemplate header={mockHeader} footer={mockFooter}>
        {mockChildren}
      </PageTemplate>
    );

    // Check if BaseTemplate and Section were rendered (via testids on mocks)
    expect(screen.getByTestId('base-template')).toBeInTheDocument();
    expect(screen.getByTestId('section')).toBeInTheDocument();

    // Check if essential parts are present
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
  });

  test('TC-PT-RENDER-02: Renders correctly with all props', () => {
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        pageTitle="Test Title"
        pageSubTitle="Test Subtitle"
        className="base-class"
        sectionClassName="section-class"
        sectionBorder={true}
        sectionTextAlign="center"
      >
        {mockChildren}
      </PageTemplate>
    );

    // Check content presence
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByTestId('mock-children')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Test Title' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: 'Test Subtitle' })
    ).toBeInTheDocument();

    // Check classes and attributes passed to mocks
    expect(screen.getByTestId('base-template')).toHaveClass('base-class');
    const section = screen.getByTestId('section');
    expect(section).toHaveClass('section-class');
    expect(section).toHaveAttribute('data-border', 'true');
    expect(section).toHaveAttribute('data-text-align', 'center');
  });

  // --- Prop Forwarding & Content Tests ---

  test('TC-PT-PROPS-04: Passes pageTitle correctly to Section heading', () => {
    const title = 'My Specific Page Title';
    render(
      <PageTemplate header={mockHeader} footer={mockFooter} pageTitle={title}>
        {mockChildren}
      </PageTemplate>
    );
    // Check if the heading rendered by the mocked Section contains the title
    expect(
      screen.getByRole('heading', { level: 2, name: title })
    ).toBeInTheDocument();
  });

  test('TC-PT-PROPS-05: Passes pageSubTitle correctly to Section subheading', () => {
    const subtitle = 'A subtitle describing the page';
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        pageSubTitle={subtitle}
      >
        {mockChildren}
      </PageTemplate>
    );
    // Check if the subheading rendered by the mocked Section contains the subtitle
    expect(
      screen.getByRole('heading', { level: 3, name: subtitle })
    ).toBeInTheDocument();
  });

  test('TC-PT-PROPS-06: Passes className to BaseTemplate', () => {
    const testClass = 'custom-base-template-class';
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        className={testClass}
      >
        {mockChildren}
      </PageTemplate>
    );
    expect(screen.getByTestId('base-template')).toHaveClass(testClass);
  });

  test('TC-PT-PROPS-07: Passes sectionClassName to Section', () => {
    const testClass = 'custom-section-class';
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        sectionClassName={testClass}
      >
        {mockChildren}
      </PageTemplate>
    );
    expect(screen.getByTestId('section')).toHaveClass(testClass);
  });

  test('TC-PT-PROPS-08: Passes sectionBorder=true to Section', () => {
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        sectionBorder={true}
      >
        {mockChildren}
      </PageTemplate>
    );
    // Check the data attribute added in the mock
    expect(screen.getByTestId('section')).toHaveAttribute(
      'data-border',
      'true'
    );
  });

  test('TC-PT-PROPS-09: Passes sectionTextAlign="right" to Section', () => {
    render(
      <PageTemplate
        header={mockHeader}
        footer={mockFooter}
        sectionTextAlign="right"
      >
        {mockChildren}
      </PageTemplate>
    );
    // Check the data attribute added in the mock
    expect(screen.getByTestId('section')).toHaveAttribute(
      'data-text-align',
      'right'
    );
  });

  // --- Default Prop Value Tests ---

  test('TC-PT-DEFAULT-01 & 02: Handles default empty pageTitle and pageSubTitle', () => {
    render(
      <PageTemplate header={mockHeader} footer={mockFooter}>
        {mockChildren}
      </PageTemplate>
    );
    // Check that heading/subheading elements are not rendered by the mock if props are empty/default
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
  });

  test('TC-PT-DEFAULT-03 & 04: Handles default empty className and sectionClassName', () => {
    render(
      <PageTemplate header={mockHeader} footer={mockFooter}>
        {mockChildren}
      </PageTemplate>
    );
    // Check that base class list doesn't contain anything other than potentially default classes from mock
    // Checking for empty string directly is hard, checking it doesn't have a specific unexpected class is better
    expect(screen.getByTestId('base-template')).not.toHaveClass(
      'some-unexpected-class'
    );
    expect(screen.getByTestId('section')).not.toHaveClass(
      'some-unexpected-class'
    );
    // Or check if the className property is explicitly empty (if mock structure allows)
    expect(screen.getByTestId('base-template').className).toBe(''); // Assumes mock adds *only* this class
    expect(screen.getByTestId('section').className).toBe(''); // Assumes mock adds *only* this class
  });

  test('TC-PT-DEFAULT-05: Handles default sectionBorder=false', () => {
    render(
      <PageTemplate header={mockHeader} footer={mockFooter}>
        {mockChildren}
      </PageTemplate>
    );
    expect(screen.getByTestId('section')).toHaveAttribute(
      'data-border',
      'false'
    );
  });

  test('TC-PT-DEFAULT-06: Handles default sectionTextAlign="left"', () => {
    render(
      <PageTemplate header={mockHeader} footer={mockFooter}>
        {mockChildren}
      </PageTemplate>
    );
    expect(screen.getByTestId('section')).toHaveAttribute(
      'data-text-align',
      'left'
    );
  });
});
