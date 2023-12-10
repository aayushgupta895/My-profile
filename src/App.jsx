import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './style/style.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Achievement from './components/Achievement'
// import Portfolio from './components/Portfolio'
import ContactUs from './components/ContactUs'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'

function App() {
  // const [count, setCount] = useState(0)
  const scrollTo = (componentId) => {
    const element = document.getElementById(componentId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div  className='main'>
        <div className='sec1'>
          <Header scrollTo={scrollTo}/>
        </div>
        <div style={{marginLeft: '25px'}} className='sec'>
          <Profile/>
          <About/>
          <div className='vector1'></div>
          <Skill/>
            <Achievement/>
            <Projects/>
          <div className='layer'>
            <Experience/>
            {/* <Portfolio/> */}
            <ContactUs/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
