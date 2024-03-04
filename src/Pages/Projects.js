
// import React from 'react'
// import '../Pages/Projects.css'
// import img2 from '../Assests/img2.jpg'

// const Projects = () => {
//   return (
//     <>
//       <div className='Container-project'> 
//         <h1>Projects</h1>  
//         <h2>TODO APP IN REACT (NO:1)</h2>
//         <p>  To-do lists help you organize your work and keep track of tasks. <br/>
//           A good digital to-do list makes it easier to get work done—and <br/>
//           makes it harder to miss deadlines.
//         </p>
//         <div className='Project-img'>
//         <img src={img2} alt="Project-Image" />
//         </div>
//       </div>   
//     </>
//   )
// }

// export default Projects

import React from 'react';
import '../Pages/Projects.css';
import img2 from '../Assests/img2.jpg';

const Projects = () => {
  return (
    <div className='Container-project'>
      <div className='text-section'>
        
        <h1>Projects</h1>
        <h2>TODO APP IN REACT (NO:1)</h2>
        <p>
          To-do lists help you organize your work and keep track of tasks. <br />
          A good digital to-do list makes it easier to get work done—and <br />
          makes it harder to miss deadlines.
        </p>
      </div>
      <div className='image-section'>
        <img src={img2} alt="Project-Image" />
      </div>
    </div>
  );
}

export default Projects;
