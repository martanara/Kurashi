import React from 'react';
import { shallow } from 'enzyme';
import CategoryProduct from './CategoryProduct';


describe('Component CategoryProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <CategoryProduct id={'123'} name={'product'} price={12} img={['img']} />
    );
    expect(component).toBeTruthy();
  });
});
