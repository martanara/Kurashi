import React from 'react';
import { shallow } from 'enzyme';
import Highlights from './Highlights';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('Component Highlights', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Highlights />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
