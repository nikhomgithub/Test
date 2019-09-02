import React from 'react';
import SubC1 from './SubC1';
import SubC from './SubC';
import { shallow , mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer' 

Enzyme.configure({ adapter: new Adapter() });


describe('This is Test',()=>{
  //Inject album to component as props
  
  //To find word 'An Album' in h1.text or in page
  it('1 rendes albums',()=>{

    const albums=[
        { id:1, title:"Jazz"},
        { id:2, title:"Rock"}
    ]
      
    const wrapper=shallow(<SubC albums={albums}/>)
    
    albums.forEach(album=>{
      expect(
        wrapper.contains(<SubC1 album={album}/>)
      ).toBe(true)
    })//forEach
  })

  
  it('2 renderer',()=>{

    const albums=[
        { id:1, title:"Jazz"},
        { id:2, title:"Rock"}
    ]
      
    const output=renderer.create(<SubC albums={albums}/>)
    
    expect(output).toMatchSnapshot()
  })
  

})