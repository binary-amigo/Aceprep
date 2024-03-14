import {  FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
return (
    <div className='px-4 py-4 '>
        <div className='px-4 py-4'>
            <ul className='flex gap-10 justify-center'>
                <li><a href="/faqs" className='hover:text-slate-400'>FAQs</a></li>
                <li><a href="/support" className='hover:text-slate-400'>Support</a></li>
                <li><a href="/blog" className='hover:text-slate-400'>Blog</a></li>
                <li><a href="/about" className='hover:text-slate-400'>About Us</a></li>
                <li><a href="/contact" className='hover:text-slate-400'>Contact</a></li>
                <li><a href="/pricing" className='hover:text-slate-400'>Pricing</a></li>
            </ul>
        </div>
        <div className='px-4 py-4'>
            <ul className='flex justify-center gap-5 '>
                <li ><a href="https://facebook.com"><FaFacebookSquare size={30}/></a></li>
                <li><a href="https://twitter.com"><FaSquareXTwitter size={30}/></a></li>
                <li><a href="https://instagram.com"><FaInstagramSquare size={30}/></a></li>
            </ul>
        </div>
        <div className='text-center px-4 py-4'>
            &#169; 2024 AcePrep. All rights reserved.
        </div>
    </div>
)
}

export default Footer