import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
      const slides = [
        "https://zetdigitesting.online/assets/artist-1-14f45814.webp",
        "https://zetdigitesting.online/assets/artist-6-c13c3aaa.webp",
        "https://zetdigitesting.online/assets/artist-8-7745f927.webp",
        "https://zetdigitesting.online/assets/artist-3-58767c21.webp",
        "https://zetdigitesting.online/assets/artist-7-2a8e0fb8.webp",
      ];

      return(
        <div>
            <Slider className="main-slider" {...settings}>
                {slides.map((url, index)=>(
                    <div className="slider-div" key={index}>
                        <img src={url} alt={`Slide ${index + 1}`} className="slider-image"></img>
                    </div>
                ))}
            </Slider>
        </div>
      )
}
