
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    import React from 'react'
    import "./contact.scss"
    
    function Contact() {
      return (<>
        <section className="contact">
        <div className="content">
            <h2>Contact us </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam corrupti provident, quos placeat suscipit maxime!             
            </p>
        </div>

        <div className="container">
            <div className="contactInfo">

                <div className="box">
                    <div className="icon">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                        <h2>Address</h2>
                        <p>hello world hello,<br/>hellodddd  world,<br/>550055</p>
                    </div>
                </div>
                
                <div className="box">
                    <div className="icon">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div className="text">
                        <h2>Phone</h2>
                        <p>0009990000</p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon">
                        <i className="fa fa-envelope" aria-hidden="true"></i>

                    </div>
                    <div className="text">
                        <h2>Email</h2>
                        <p>helloworld@gmail.com</p>

                    </div>
                </div>




            </div>


            <div className="contactForm">
                <form action="#">
                    <h2>Send Message</h2>

                    <div className="inputBox">
                        <input type="text" required="required"/>
                        <span>Full Name</span>
                    </div>

                    <div className="inputBox">
                        <input type="email" required="required"/>
                        <span>Email</span>
                    </div>
                    
                    <div className="inputBox">
                        <textarea name="" required="required"></textarea>
                        <span>Type Your Message </span>
                    </div>
                    
                    <div className="inputBox">
                        <input type="submit"  name="" value="Send"/>
                        <span> </span>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </> )
    }
    
    export default Contact