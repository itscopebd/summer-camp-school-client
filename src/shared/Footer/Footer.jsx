import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#5ab337d6] py-10 md:px-0 px-10'>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 text-white justify-between'>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Office Address</h4>

                        <p>442 5th Avenue</p>
                        <p>Suite 1266</p>
                        <p>Bangladesh, Pabna 10018</p>
                        <p>0158049483</p>
                        <p>info@gmail.com</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Supports</h4>
                        <ul>

                            <li><a href='#'>Search</a></li>
                            <li><a href='#'>About Us</a></li>
                            <li><a href='#'>Contact Us</a></li>
                            <li><a href='#'>Track Your Order</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>Follow Us</h4>
                        <ul>

                            <li><a href='#' className='text-3xl'> <FaFacebook></FaFacebook> </a></li>
                            <li className=' my-3'><a href='#' className='text-3xl'> <FaTwitterSquare></FaTwitterSquare> </a></li>
                            <li className=' mb-3'><a href='#' className='text-3xl'> <FaInstagramSquare></FaInstagramSquare> </a></li>

                        </ul>
                    </div>
                    <div>
                        <h4 className='text-2xl font-Roboto font-semibold mb-5'>SIGN UP</h4>
                        <p>Subscribe to get special offers, <br /> free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="form-control mt-5">
                            <div className="input-group">
                                <input type="text" placeholder="Subscribe…" className="input input-bordered focus:border-none " />
                                <button className="btn btn-square">
                                    <FaArrowRight></FaArrowRight>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
                <p className='md:text-center text-white text-xl mt-16'>&copy;Right Rofiqul Islam. 2023</p>
            </div>
        </div>
    );
};

export default Footer;