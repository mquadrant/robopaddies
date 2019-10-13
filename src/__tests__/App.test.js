import React from 'react';
import {Provider} from 'react-redux';
import { mount} from 'enzyme';
import App from '../App';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const defaultStore = {requestRobots:{robots: [] }};
const mockedStore = configureMockStore([thunk])(defaultStore);

export const mountWithProvider = children => (store = mockedStore) =>
  mount(<Provider store={store}>{children}</Provider>);



it('renders app without crashing', () => {
    const props = {};
    // const myCustomState = {
        
    //   };
const wrapper = mountWithProvider(<App {...props} />)();
expect(wrapper.exists()).toBe(true);
  expect(wrapper).toMatchSnapshot();
});
