import React from 'react';
import { shallow } from 'enzyme';

import { Button } from './Button';

const title = 'title';
const onClick = jest.fn(() => {});

describe('Button', () => {
  it('should render component', () => {
    expect(
      shallow(<Button title={title} onClick={onClick} />)
    ).toMatchSnapshot();
  });

  it('should invoke onClick props function after buttons was pressed', () => {
    const wrapper = shallow(<Button title={title} onClick={onClick} />);
    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
