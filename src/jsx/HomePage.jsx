import React from 'react'
import { useState } from 'react'
import './Styles/homePage.css'




function HomePage() {




  let imageArr = [1,2,3,4,5]
  let [count,setCount]=useState(0)

  const add = ()=>{

    if(count >=4 ){
      setCount(count = 1)
      setCount(count + 1)
    }else{
      setCount(count + 1)
    }
   
    console.log(count);
    
    
    
    // setCount(count + 1)
  }
  const less = ()=>{
    if(count <= 0 ){
      setCount(count = 5)
      setCount(count - 1)
    }else{
      setCount(count - 1)
    }
    
    console.log(count);
     
    
    // setCount(count - 1)
  }
  return (
    <div className='mainContainerHomePage'>
    <div className='imgBG'>
       <img src={`./Images/${imageArr[count]}.jpg`} />
        <button onClick={add}>add</button>
        <button onClick={less}>less</button>
    </div>
      <div className="logoContainer">
      <img src={`./Images/logo.png`} />
      </div>
    </div>
  )
}

export default HomePage