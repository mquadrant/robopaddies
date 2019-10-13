import React from 'react';
import { shallow,mount} from 'enzyme';
import MainPage from '../containers/MainPage';
import SearchBar from '../components/SearchBar'

let wrapper;

beforeEach(()=>{
    const mockProps = {
        requestForRobots: jest.fn(),
        robots:[]
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
})

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('renders one <SearchBar /> components', () => {
    const wrapper = shallow(<MainPage />);
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
  
it('run inner function components', () => {
  const prop = {
    requestForRobots:jest.fn().mockResolvedValue(),
    robots:[{name:"john",email:"jemail@hmail.com"}]
  }
    const wrapper = shallow(<MainPage {...prop}/>);

    expect(wrapper.find(SearchBar)).toHaveLength(1);
    expect(wrapper.find(SearchBar).prop('searchChange')({
          target: {
            value: 'e',
          },
        })).toBeUndefined();
  });
