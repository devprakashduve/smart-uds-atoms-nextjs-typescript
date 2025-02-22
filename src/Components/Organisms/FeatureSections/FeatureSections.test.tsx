import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FeatureSections from '.';

describe('FeatureSections Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<FeatureSections />);
  });

  it('should render without errors', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a specific class name', () => {
    expect(wrapper.hasClass('feature-sections')).toBe(true);
  });

  it('should render child components', () => {
    expect(wrapper.find('ChildComponent').length).toBeGreaterThan(0);
  });

  // Add more tests as needed
});
