import { TestimonialSlider } from "./TestimonialSlider"
import { PiPaperPlaneTilt } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

export const Testimonials = () => {
    return (
        <>
        <div className="testimonial-container">
            <div className="main-testimonial-div">
                <div className="testimonial-head-para">
                <h3 className="slide-head-1">Testimonials</h3>
                <h1 className="slide-head-2">2000+ Happy User</h1>
                <p>Whether you’re tackling complex projects or managing daily tasks, our solution adapts to your unique challenges to help you.</p>
                </div>
                <div className="testimonial-slider-container"><TestimonialSlider/></div>
                <div className="testimonial-button"><button>View All Reviews</button></div>
            </div>
        </div>
        <div className="get-in-touch-container">
            <div className="get-in-touch-card">
                <div className="get-in-touch-head-para">
                        <div>
                            <h1>Get In Touch</h1>
                            <h3 className="get-in-touch-head">We'd love to hear from you</h3>

                        </div>
                        <div className="bottom-logo ">
                             <img src="../../public/img/logo.png"/>
                        </div>
                </div>
                <div className="get-in-touch-details">
                  <div className="details-div">
                        <span className="details-icon"><PiPaperPlaneTilt /></span><p>support@audiomixingmastering.com www.audiomixingmastering.com</p>
                  </div>
                  <div className="details-div">
                        <span className="details-icon"><IoCallOutline /></span><p>Whatsapp: +31634038672  www.audiomixingmastering.com</p>
                  </div>
                  <div className="details-div">
                    <span className="details-icon"><GrLocation /></span><p>Audio Mixing Mastering Tesselschadestraat 27,Leeuwarden, Netherlands</p> 
                  </div>
                </div>
            </div>
        </div>
        <div className="get-in-touch-container">
            <div className="mid-heading">
            <h1>Ready to get started?</h1>
            <p className="get-started-para">If you are struggling to find the best mixing and mastering services for your next music release, then we ’ve got you covered. Give a head start to your music career and let us help you get studio-quality mastered tracks. Our team of real hands-on engineers will fine-tune your songs to a radio-ready quality, so you can impress your listeners and boost your career like never before. Below you can listen to our before and after, mixing and mastering examples. This should give you a decent understanding of what mixing and mastering are and how they may assist you in creating a great song.</p>
            <img className="get-started-image" src="../../public/img/testimonial photo.webp"/>
            <div className="sample-button"><button>Get Started</button></div>
            </div>
            </div>
        </>
    )
}
