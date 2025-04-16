import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteRight,FaQuoteLeft  } from "react-icons/fa6";
export const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
      };
    
    const testimonials = [
        {
            text: "They have been an awesome group of professional audio engineers, very helpful and collaborative! It was my first experience on mixing &amp; mastering services and I choosed do it online with great success! A special mention to the cheap price that is really low compared to the achieved quality! It worthed the pain!",
            name:"Ostara Richards",
        },
        {
            text: "This is a great place to send a demo and get it polished for the radio. The ability to get a tight mix and a nice filled out master is here. I recommend this studio and appreciate the communication and timely turn a round i have experienced.",
            name:"Cindy Sladek",
        },
        {
            text: "Audio Mixing Mastering surprised me more than a little! It was like working with a top notch studio but never leaving your house! Being able to communicate back and forth with these guys put me at ease with getting my desired results! My single is radio ready and it’s all thanks to these guys!",
            name:"Michael Jones",
        },
        {
            text: "Was great working with Audio Mixing Mastering! The final product was exactly what I was looking for and they were very patient and understanding making all the little changes I asked for. The EQ and overall treatment of the vocals is also of very high quality. If you want your track to sound radio ready I highly highly recommend these guy!",
            name:"Luca Robin",
        },
        {
            text: "Every song I have sent Audio Mixing and Mastering they have nailed it Everytime 100%. They have a great team that responds quickly if you ever have any questions. If you need a revision? They will fix anything to make it exactly how your project sounds in your head. They bring that to life! Totally recommend them! I will be using them again in the future.",
            name:"Josh Swaringin",
        },
    ]

    return (
        <div>
            <Slider {...settings}>
                {testimonials.map(({text, name, index})=>(
                    <div key={index}>
                       <p className="testimonial-text"><FaQuoteLeft /> {text} <FaQuoteRight /></p>
                        <span className="five-stars"><img src="https://static.vecteezy.com/system/resources/thumbnails/013/743/771/small/five-stars-rating-icon-png.png"/></span>
                        <span className="google-logo five-stars"><img src="https://music.zetdigi.com/backend/public/img/google-logo.png"/></span>
                        <h3 className="testimonial-name">{name}</h3>
                        
                        
                        
                    </div>
                ))}
            </Slider>
        </div>
    )
}
