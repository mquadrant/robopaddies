import React from 'react';
import { shallow,mount} from 'enzyme';
import CardList from './../CardList';
import Card from './../Card';

it('expect to render the Card component', () => {
    const wrapper = shallow(<CardList />);
    expect(wrapper.length).toEqual(1);
  });

it('expect to render Card component with snapshot', () => {
    const mockRobot = [
        {
            id:1,
            name:"John Doe",
            username:"Johnny",
            email:"John@gmail.com"
        }
    ]
    const wrapper = shallow(<CardList robots={mockRobot}/>)
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('expect Card component to have robots prop', () => {
    const mockRobot = [
        {
            id:1,
            name:"John Doe",
            username:"Johnny",
            email:"John@gmail.com"
        }
    ]
    const wrapper = mount(<CardList robots={mockRobot}/>)
    expect(wrapper.props().robots).toEqual(mockRobot);
  });
