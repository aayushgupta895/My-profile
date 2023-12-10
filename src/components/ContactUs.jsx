import React from 'react'

function ContactUs() {
  return (
    <div id='contact'>
      <div className="service px-4 py-5">
                 <div className="titie-row row mb-3">
                    <br />
                    <h2 className="fw-bolder wh">Contact Details</h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p> */}
                </div>
                <br />
                <div className="contact-row m-0 mt-5 row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="shadow-md row p-4 m-0 rounded blur">
                            <div className="col-md-3 text-center align-self-center">
                                <i className="bi fs-1 bi-headphones wh"></i>
                            </div>
                            <div className="col-md-9">
                                <h6 className="fs-7 fw-bolder wh">Phone</h6>
                                <ul>
                                    <li className='wh'>+91 8103470943</li>
                                    {/* <li>+91 889 1287 978</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="shadow-md row p-4 m-0 rounded blur">
                            <div className="col-md-3 text-center align-self-center">
                                <i className="bi fs-1 bi-headphones wh"></i>
                            </div>
                            <div className="col-md-9">
                                <h6 className="fs-7 fw-bolder wh">Email</h6>
                                <ul>
                                    <li className='wh'>guptaaayush895@gmail.com</li>
                                    {/* <li>app@maildeaci.com</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="shadow-md row p-4 m-0  rounded blur">
                            <div className="col-md-3 text-center align-self-center">
                                <i className="bi fs-1 bi-headphones wh"></i>
                            </div>
                            <div className="col-md-9">
                                <h6 className="fs-7 fw-bolder wh">Address</h6>
                                <ul>
                                    <li className='wh'>Manpur Distt. Umaria</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* <div id="contact" className="contact-row m-0 row">
                    <div className="col-md-6">
                        <div className="shadow-md p-4 rounded bg-white">
                            <h4 className="fs-6 fw-bolder mb-3">Contact Form</h4>
                            <form action="">
                                <div className="mb-3">
                                  <label for="exampleFormControlInput1" className="form-label fw-bolder fs-8">Email address</label>
                                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"/>
                                </div>
                                 <div className="mb-3">
                                  <label for="exampleFormControlInput1" className="form-label fw-bolder fs-8">Enter Subject</label>
                                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Subject"/>
                                </div>
                                <div className="mb-3">
                                  <label for="exampleFormControlTextarea1" className="form-label fw-bolder fs-8">Example textarea</label>
                                  <textarea className="form-control" placeholder="Enter Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="shadow-md p-4 rounded bg-white">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15659.16664494769!2d77.32095495000002!3d11.1288885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1660839868672!5m2!1sen!2sin"  height="340" style={{border:"0", width:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div> */}
            </div>
    </div>
  )
}

export default ContactUs
