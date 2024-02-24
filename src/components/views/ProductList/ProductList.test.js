import React from 'react';
import { shallow } from 'enzyme';
import ProductList from './ProductList';
import * as reactRedux from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component ProductList', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  //const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    // useDispatchMock.mockClear();
  });

  it('should render without crashing', () => {
    //const dummyDispatch = jest.fn();
    const dummyUseSelector = jest.fn();
    //useDispatchMock.mockReturnValue(dummyDispatch);
    useSelectorMock.mockReturnValue(dummyUseSelector);
    expect(useSelectorMock).not.toHaveBeenCalled();
    //expect(dummyDispatch).not.toHaveBeenCalled();

    const component = shallow(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
