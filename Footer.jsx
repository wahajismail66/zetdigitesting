import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { PiSoundcloudLogoBold } from "react-icons/pi";

export const Footer = () => {
    const icon = [FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, PiSoundcloudLogoBold]
    const footItems = [
        {name:"Upload",  path:"/upload"},
        {name:"Services",  path:"/services"},
        {name:"Samples",  path:"/samples"},
        {name:"About",  path:"/about"},
        {name:"FAQ",  path:"/faq"},
        {name:"Reviews",  path:"/reviews"},
        {name: "Contact",  path:"/contact"},
        {name: "Blog",  path:"/blog"},
    ]
    return (
        <div className="testimonial-container">
            <div className="footer-container">
                <div className="footer-logo main-slider"><img src="../../public/img/logo.png"/></div>
                <div className="main-slider"><h1>AUDIO MIXING MASTERING</h1></div>
            <div className="main-slider"><p>#1 Online Mixing and Mastering Services. Get high-end professional, speedy Online Mixing and Mastering Services</p></div>
            <div className="main-slider"><img src="../../public/img/footerimage.webp"/></div>
            </div>
            <div>
                    <nav>
                        <ul>

                            {footItems.map((item,index)=>(
                                <li key={index}>
                                    <a href="item.path">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
            </div>
            <div>
                <nav className="footer-icons">
                    <ul>
                        {icon.map((Icon, index)=>(
                            <Icon className="footer-icon-images" key={index}/>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="payment-methods"><img src="../../public/img/payment-methods-4d201448.webp"/></div>
            <div className="final-footer">
                <div className="final-footer-left">
                    <div className="privacy"><a>Tesselschadestraat 27, Leeuwarden, Netherlands</a></div>
                    <div className="privacy"><a>Privacy Policy | Refund Policy |Terms & Conditions</a></div>
                </div>
                <div className="final-footer-right">
                    <div className="privacy"><a>E-Mail: support@audiomixingmastering.com | Cell: +31 (63) 403-8672</a></div>
                    <div className="privacy"><a>Audio Mixing Mastering LLC - ©2024 All Rights Reserved</a></div>
                </div>
            </div>
        </div>
        
    )
}
