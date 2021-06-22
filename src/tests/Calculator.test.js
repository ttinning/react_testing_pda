import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should be able to add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const addButton = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find ('#running-total');
    button4.simulate('click');
    addButton.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should be able to subtract 4 from 7 and get 3', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const subButton = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subButton.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiplyButton = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button5.simulate('click');
    multiplyButton.simulate('click');
    button3.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should be able to devide 21 by 7 and get 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const divideButton = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divideButton.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

})
