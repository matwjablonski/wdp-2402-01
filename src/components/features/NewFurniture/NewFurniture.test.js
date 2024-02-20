import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Component NewFurniture', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      products: {
        data: [
          {
            id: '1',
            name: 'Table',
            price: 100,
            image: 'table.jpg',
            category: 'table',
          },
          {
            id: '2',
            name: 'Chair',
            price: 50,
            image: 'chair.jpg',
            category: 'chair',
          },
        ],
      },
      rwdMode: {
        rwdMode: 'desktop',
      },
    });
  });

  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <NewFurniture />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
