import { NavLink } from "react-router-dom";
import { Mail } from 'lucide-react';


function Footer() {
    const footLinks = [
        { lable: "About Us", href: "/about" },
        { lable: "Features", href: "#" },
        { lable: "Pricing & Plans", href: "#" },
        { lable: "Contact Us", href: "/contact" },
    ]

    return (
        <div className='my-10 mx-5 p-10 space-y-6 flex flex-col text-white bg-black rounded-md lg:flex-row lg:justify-around '>
            <div className='mx-5 md:mx-16 lg:mx-20 text-center space-y-1'>
                <div className='text-2xl'>NEXTZONE</div>
                <div className='text-sm'>Your One-Stop IT Partner: Branding, Web Development, and Tailored Solutions for Every Need</div>
            </div>
            <div className='mx-5 space-y-2 md:mx-16 lg:mx-20 '>
                <div className='flex w-full justify-center border border-white rounded-md p-2 gap-2'>  
                    <Mail />
                    agencyfolio@gmail.com
                </div>
                <ul className='flex flex-col space-y-4 sm:flex-row sm:justify-evenly items-center'>
                    {footLinks.map((el, index) => (
                        <li key={index}>
                            <NavLink to={el.href}>
                                {el.lable}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
