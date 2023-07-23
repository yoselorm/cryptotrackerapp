import React from 'react';
import ThemeToggle from './ThemeToggle';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='rounded-div mt-8 text-primary'>
            <div className='grid md:grid-cols-2'>
                <div className='flex justify-evenly w-full md:max-w-[280px] uppercase'>
                    <div>
                        <h2 className='font-bold'>Support</h2>
                        <ul>
                            <li className='text-sm py-2'>Help center</li>
                            <li className='text-sm py-2'>Contact Us</li>
                            <li className='text-sm py-2'>Updates</li>
                            <li className='text-sm py-2'>Docs</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold'>Info</h2>
                        <ul>
                            <li className='text-sm py-2'>About Us</li>
                            <li className='text-sm py-2'>Careers</li>
                            <li className='text-sm py-2'>Invest</li>
                            <li className='text-sm py-2'>Team</li>
                        </ul>
                    </div>
                </div>
                <div className='text-right'>
                    <div className='w-full flex justify-end'>
                        <div className='w-full md:w-[300px] py-4 relative'>
                            <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'><ThemeToggle /></div>
                            <p className='text-center md:text-right'>Subscribe to our Newsletter</p>
                            <div className='py-4'>
                                <form>
                                    <input className='bg-rimary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto' type='email' placeholder='enter your email' />
                                    <button className='bg-button text-btnText px- p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2'>Subscribe</button>
                                </form>
                            </div>
                            <div className='flex py-4 justify-between text-teal-700'>
                                <AiOutlineInstagram />
                                <FaTwitter />
                                <FaFacebookF />
                                <FaGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-4'>Powered by coin gecko & GraceGraphix multi @2023</p>
        </div>
    );
}

export default Footer;
