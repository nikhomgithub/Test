import React from 'react';
import ReactDOM from 'react-dom';
import SubApp from './SubApp';
import SubB from './SubB'
import { shallow , mount } from 'enzyme';
import td from 'testdouble'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 

Enzyme.configure({ adapter: new Adapter() });


describe('This is Test',()=>{
  //Inject album to component as props
  const album={
    title:'An Album',
    artist:['Jordan','Michael'],
    coverUrl:'album.jpg',
    score:'Like'
  }
  
  //To find word 'An Album' in h1.text or in page
  it('1 display title',()=>{
    const wrapper=shallow(<SubApp album={album}/>)
    //expect(wrapper.find('h1').text()).toEqual("An Album")
    expect(wrapper.contains('An Album')).toBe(true)
  })

  it('2 display artist',()=>{
    const wrapper=shallow(<SubApp album={album}/>)
    expect(wrapper.find('h2').text()).toEqual("Jordan-Michael")
  })

  it('3 display cover',()=>{
    const wrapper=shallow(<SubApp album={album}/>)
    expect(
      wrapper.containsMatchingElement(
        <img src="album.jpg"/>
      )
    ).toBe(true)
  })
  
  //user custom attribute, but wee need to change our SubApp.js
  it('4 display custom-attri',()=>{
    const wrapper=shallow(<SubApp album={album}/>)
    expect(wrapper.find('[data-test="title"]').text()).toEqual("An Album")
  })
  
  it('5 click an album',()=>{
    const on_Rate_X=()=>{}
    const wrapper=shallow (<SubApp album={album} onRate={on_Rate_X}/>)
    expect(wrapper.containsMatchingElement(
      <button onClick={on_Rate_X}/>
    )).toBe(true)
  })

  it('6 click an album',()=>{
    const quack = td.function() //set quack as td.function
    quack() //someone start functin quack() 
    td.verify(quack())  // we found function quack()
  })
  
  it('7 click an album',()=>{
    const quack = td.function('Arg') //set quack as td.function
    quack(5) //someone start functin quack() 
    td.verify(quack(5))  // we found function quack()
  })

  it('8 td.when',()=>{
    const quack = td.function() //set quack as td.fucntion
    td.when(quack()).thenReturn('some return value') //when quack call return 'some return value'
    quack() //some return value
  })
  
  it('9 click an album',()=>{
    const on_Rate_XY=()=>{}
    const wrapper=shallow (<SubApp album={album} onRateX={on_Rate_XY}/>)
    expect(wrapper.containsMatchingElement(
      <SubB onRateX={on_Rate_XY}/>
    )).toBe(true)
  })
    
  //Integrate Test
  it('10 td.verify',()=>{
    const onrate_Z=td.function('arg') //set quack as td.fucntion
    const wrapper= mount (<SubApp album={album} onRateX={onrate_Z}/>) //mount mean run sub component as real
    wrapper.find('[btn-test="thumb-up"]').simulate('click') //mean just click button in SubB which activate function onRate()
    td.verify(onrate_Z(5)) //mean someone activate function onRateX()
  })
  

})