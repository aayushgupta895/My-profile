import React, { useEffect } from 'react'
// import '../style/style.css'


function Header({scrollTo}) {
  // const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    
    window.addEventListener('resize', function() {
      // Update the screenWidth variable when the window is resized
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if(screenWidth > 1515){
        var navbarNavElement = document.getElementById('navbarNav');
        navbarNavElement.classList.remove('d-none');
        navbarNavElement.classList.add('d-block');
      }
      // Log the updated width to the console
      console.log("Screen Width (after resize): " + screenWidth);
  });  
  
  function toggleNav(){
    var navbarNavElement = document.getElementById('navbarNav');
    console.log('idhar');
  // Check if the element exists before toggling the class
  if (navbarNavElement) {
    // Check if the 'show' class is present
    if (navbarNavElement.classList.contains('d-block')) {
      // If 'show' is present, remove it
      navbarNavElement.classList.remove('d-block');
      navbarNavElement.classList.add('d-none');

    } else {
      // If 'show' is not present, add it
      navbarNavElement.classList.remove('d-none');
      navbarNavElement.classList.add('d-block');
      
    }
  } else {
    console.error("Element with id 'navbarNav' not found");
}
  }
  return (
    <div>
      <header className="head">
            <div className="logo border-bottom">
                <p style={{width : '230px', height : '51px', fontSize : '30px', fontWeight : '400'}}> <span style={{color : '#4e4e8a'}}>Aayush</span> Gupta</p>
                 <a className="navbar-toggler d-block d-lg-none" onClick={toggleNav} type="button" >
                    <i className="bi bi-list"></i>
                </a>
            </div>
            <div id="navbarNav" className="navcol d-block">
                <ul>
                    <li><a href="#"><i className="bi bi-house-door fs-5 me-2"></i> Home</a></li>
                    <li><a href="#about"><i className="bi fs-5 bi-info-square me-2"></i> About</a></li>
                    <li onClick={()=> scrollTo('skill')}><a href="#service"><i className="bi fs-5 bi-gear me-2"></i> Skill</a></li>
                    <li onClick={()=> scrollTo('achievement')}><a href="#portfolio"><i className="bi fs-5 bi-columns-gap me-2"></i> Achievement</a></li>
                    <li onClick={()=> scrollTo('projects')}><a href="#testimonial"><i className="bi fs-5 bi-people me-2"></i> Projects</a></li>
                    <li onClick={()=> scrollTo('experience')}><a href="#blog"><i className="bi fs-5 bi-newspaper me-2"></i> Experience</a></li>
                    <li onClick={()=> scrollTo('contact')}><a href="#contact"><i className="bifs-5  bi-envelope me-2"></i> Contact</a></li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header
