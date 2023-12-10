import React, { useState } from 'react'
import '../style/style.css'

function Achievement() {
          const [isHovered, setHovered] = useState(false);
        
          const handleMouseOver = () => {
            setHovered(true);
          };
        
          const handleMouseOut = () => {
            setHovered(false);
          };
  return (
    <div >
          <div id="achievement" className="achievement px-4 py-5">
               <div className="titie-row row mb-3">
                    <h2 className="fw-bolder">Achievements</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p> */}
               </div>
               <div className="row mt-5 ach">
                    <div className="col-lg-4 col-md-6 mb-4 ach2">
                       <button className="text-center p-4 ai" 
                         style={{border: 'none',
                         display : 'block'}}
                         onMouseOver={handleMouseOver}
                         onMouseOut={handleMouseOut}
                        >
                         <a href="https://www.elitmus.com/users/5104012/scores" target='blank' style={{display : 'flex' }}>
                              {isHovered ? 
                                   <div >
                                        elitmus is India's hardest aptitute exam
                                   </div> :
                                   <>
                                        <div className='ap'>Elitmus</div>
                                        <div className='ad'>95.5%</div>
                                   </>
                              }
                         </a>
                       </button>
                    </div>
                     <div className="col-lg-4 col-md-6 mb-4">
                       <button className="ai text-center p-4" style={{border: 'none', display : 'block'}}>
                         <a href="https://leetcode.com/guptaaayush895/" target='blank' style={{display : 'flex'}}>
                              <div className='ap'>Leetcode</div>
                              <div className='ad'>300+</div>
                         </a>
                       </button>
                    </div>
               </div>
          </div>
    </div>
  )
}

export default Achievement
