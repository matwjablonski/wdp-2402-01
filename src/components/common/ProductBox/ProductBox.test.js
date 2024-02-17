import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';
import * as reactRedux from 'react-redux';

describe('Component ProductBox', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  it('should render without crashing', () => {
    const dummyDispatch = jest.fn();
    const dummyUseSelector = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(dummyUseSelector);
    expect(useSelectorMock).not.toHaveBeenCalled();
    expect(dummyDispatch).not.toHaveBeenCalled();

    const component = shallow(<ProductBox />);
    expect(component).toBeTruthy();
  });
});
