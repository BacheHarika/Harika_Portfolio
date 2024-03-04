import React from 'react'
import '../Pages/Home.css'
import hari1 from '../Assests/hari1.jpg'
const Home = () => {
  return (
    <>
      <div className='Container'>
        <div className='Image'>
          <img src={hari1} alt="Harika's Image" />
        </div>
        <div style={{marginLeft:'56px'}}>
          <div className='Text'>
            <div className='Para'>
              <h1 style={{ fontSize: '80px', fontFamily: "cursive" }}>Hello</h1>
              <div className='Bit'><h2>A Bit About Me</h2></div>
              <p>
                Hi, I am Harika and I work as a web developer.<br />
                I am a software engineer who loves to create websites as well as apps for people.<br />
                I think that people should look at the bigger picture when they are building something.<br />
                I love to work in groups where everyone can voice their opinions and ideas..
              </p>
            </div>

          </div>
        </div>
        <div className='Circles'>
          <div className='Content'>
            <a href='/resume'>
              <h3>Resume</h3>
            </a>
          </div>
          <div className='Content'>
            <a href='/projects'>
              <h3>Projects</h3>
            </a>
          </div>
          <div className='Content'>
            <a href='/contact'>
              <h3>Contact</h3>
            </a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home



