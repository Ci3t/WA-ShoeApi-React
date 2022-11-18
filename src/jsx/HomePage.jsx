import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Styles/homePage.css'
import Typewriter from 'typewriter-effect'




function HomePage() {




  let imageArr = [1,2,3,4,5]
  let [count,setCount]=useState(0)

  // const add = ()=>{

  //   if(count >=4 ){
  //     setCount(count = 1)
  //     setCount(count + 1)
  //   }else{
  //     setCount(count + 1)
  //   }


  // }
  // const less = ()=>{
  //   if(count <= 0 ){
  //     setCount(count = 5)
  //     setCount(count - 1)
  //   }else{
  //     setCount(count - 1)
  //   }
    
  //   console.log(count);


  // }
  return (
    <div className='mainContainerHomePage'>
      <div className="overlay"></div>

    {/* <div className='imgBG'>
       <img src={`./Images/${imageArr[count]}.jpg`} />
        <button onClick={add}>add</button>
        <button onClick={less}>less</button>
    </div> */}
      <div className="logoContainer">
      <img src={`./Images/logo.png`} />
      </div>
     
      <div className="info-text-Container">
        <h2><span>
        <Typewriter 
       options={{
        strings: ['NEW WINTER COLLECTION', 'NEW SUMMER COLLECTION','BEST QUALITY','AMAZING PRICES'],
        autoStart: true,
        loop: true,
      }}
      /></span> OF COMFORTABLE SHOES </h2>
        <h2>comfort is the new luxury</h2>
        <p>
          
          PICK A SHOE, your Comfort-Store presents its new Fall / Winter 2022 2023 collection of comfortable shoes. Our mission : offering a distinctive selection of stylish leather shoes to embrace this essential need for well-being, without neglecting aesthetics. Our familial team unearth iconic styles from the best shoe brands such as Nike, Puma, New Balance, and many more... 100% made in Europe with superior craftsmanship.

          Committed to ethical fashion, we aspire to a new sustainable luxury with conscious footwear, investment pieces designed to be comfortable and to last</p>
        {/* <h3>THE ULTIMATE SELECTION YOU WON’T SEE IN MOST PLACES</h3> */}
      </div>
      <div className="homeLinkCss">

      <Link  to={`/ShoesList`} style={{ margin: '1rem' }}>
       SHOP NOW
      </Link>
      </div>
    </div>
  )
}

export default HomePage