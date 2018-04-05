jest.mock('../AboutRepository');

import React from 'react';
import { mount } from 'enzyme';

import About from '../index';
import AboutPageObject from '../AboutPageObject';

const NUMBER_OF_TEACHERS_IN_COURSE = 3;

describe('About', () => {
  let wrapper;
  let aboutPageObject;
  
  beforeEach(async () => {
    wrapper = mount(<About />);
    aboutPageObject = new AboutPageObject(wrapper);
  });

  it('should present wellcome information', async () => {
    let appTitle = aboutPageObject.obtainTitle();
    expect(appTitle).toEqual('This is ReactWars app!!');
  });

  it('should show associated teachers', async () => {
    let teachers = aboutPageObject.obtainTeachers();
    expect(teachers).toHaveLength(NUMBER_OF_TEACHERS_IN_COURSE);
  });
});
