import { useEffect, useState } from "react";
import "../App.css"
import { MdOutlineShoppingCart } from "react-icons/md";
export const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
             setScroll(window.scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    const navItems = [
        {name:"Home",  path:"/"},
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
        <header>
                <div className={`navbar ${scroll ? "scrolled": ""} grid navbar-grid`}>
                    <div className="logo">
                        <img src="../../public/img/logo.png"></img>
                    </div>
                    <nav>
                        <ul>

                            {navItems.map((item,index)=>(
                                <li key={index}>
                                    <a href="item.path">{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="nav-btns">
                     <div className="sign-in-btn"><button>Sign In</button></div>
                     <div className="icon"><a href="#"><MdOutlineShoppingCart /></a></div>
                    </div>

                </div>
        </header>
    )
}
