import React from 'react'
import "../Pages/Resume.css";

const Resume = () => {
  return (
    <>
       <div className='Parent'>
        <div className='Resume'><h1>RESUME</h1></div>
 <div>
 <div className='Education'>
   <div className='Education_content'><h2>Education</h2></div>
   <div className='Content-1'>
     <p className='Year'>2020-2023</p>
     <div>
       <h2 className='Main'>CMR University | <br/>Bachelor's Degree<br/>Banglore</h2>
     </div>

   </div>
 </div>
 </div>
   <div className='Content-1'>
     <p className='Year'>2018-2020</p>
     <div>
       <h2 className='Main'>NRI Junior Collage | <br/>Board of intermediate Education<br/>AP</h2>
     </div>
   </div>
   <div className='Content-1'>
       <p className='Year'>2018-2020</p>
     <div>
       <h2 className='Main'>Gloabal Gen High School | <br/>Board of Secondary Education<br/>AP</h2>
     </div>
   </div>
 </div>
 <div className='HorizontalLine'></div>
 <div className='Skills'>
   <div className='Skills_content'><h2>
Skills<br/>
& Expertise</h2></div>
   <div className='Content-1'>
     <ul>
      <li>Html</li>
      <li>Css</li>
      <li>Java Script</li>
      <li>React js</li>
      <li>React Native(Basics)</li>
      <li>Git Hub</li>
      <li>Bootstrap</li>
      <li>Tailwind Css</li>
     </ul>

   </div>
 </div>
    </>
 
  
  )
}

export default Resume