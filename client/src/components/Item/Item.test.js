import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Component Item', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Item />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
