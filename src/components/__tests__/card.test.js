import React from 'react';
import { shallow} from 'enzyme';
import Card from '../Card';

it('expect to render the Card component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.length).toEqual(1);
  });

it('expect to render Card component with snapshot', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
  });


// it('expect to render Card component with snapshot', () => {
//     const wrapper = shallow(<Card />);
//     wrapper.find('[id="counter"]').simulate('click');
//     expect(wrapper.state()).toEqual({count:1});
//   });

