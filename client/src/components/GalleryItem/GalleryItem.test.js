import React from 'react';
import { shallow } from 'enzyme';
import GalleryItem from './GalleryItem';

describe('Component GalleryItem', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <GalleryItem 
        category={'category'}
        alt={'alt'}
        img={'img'}
        banner={'small'}
        line1={'line'}
      />
    );
    expect(component).toBeTruthy();
  });
});
