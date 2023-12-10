import React from 'react'
import '../style/style.css'

function About() {
  return (
    <div>
      <div id="about" className="about px-4 bg-white py-5">
                <div className="titie-row row mb-3">
                    <h2 className="fw-bolder">About Me</h2>
                </div>
                <div className="column" style={{display : 'flex', flexDirection : 'column'}}>
                    <div className="col-md-12">
                        <p><b>I am, Aayush Gupta</b></p>
                        <p className="pt-2 fs-6 text-justify">Hi my name is Aayush Gupta . I am graduated in B.Tech computer science from samrat ashok technological institiute vidisha. I've got 8.16 cgpa . I did my schooling from a cbse board school jawahar navodaya vidyalaya umaria . there in 12th i got 88.8% and in 10th i got 9.6/10.</p> 
                        <h4 className=" fs-5 my-3 mt-4 fw-bolder">Educational Details</h4>
                        <div style={{display: 'flex'}} className='edu'>
                          <div className='wi'>
                            <div className='wk'>
                              10th
                            </div>
                            <div className='wt'>
                              <div className='hv'>JNV Umaria</div>
                              <div className='hi' style={{display: 'flex'}}>
                                <div className='whi'>Cbse(2016)</div>
                                <div className='whj'>9.6/10</div>
                              </div>
                            </div>
                          </div>
                          <div className='wi'>
                            <div className='wk'>
                              12th
                            </div>
                            <div className='wt'>
                              <div className='hv'>JNV Umaria</div>
                              <div className='hi' style={{display: 'flex'}}>
                                <div className='whi'>Cbse(2018)</div>
                                <div className='whj'>88.8%</div>
                              </div>
                            </div>
                          </div>
                          <div className='wi'>
                            <div className='wk'>
                              B.tech
                            </div>
                            <div className='wt'>
                              <div className='hv' style={{fontSize : '12px', lineHeight : 1.2, color : '#ff9900ee'}}>Samrat Ashok Technological Institute Vidisha</div>
                              <div className='hi' style={{display: 'flex'}}>
                                <div className='whi'>Cse(2023)</div>
                                <div className='whj'>8.16/10</div>
                              </div>
                            </div>
                          </div>
                        </div>   
                    </div> 
                </div>  
            </div>
            
    </div>
  )
}

export default About
