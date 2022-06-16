import React from 'react';
// import "./Sidemenuebar.css"
import profilepic from "../../src/asset/pp.png"
import { FaGlobe, FaDollarSign,FaHeart,FaSyncAlt,FaShoppingCart,FaRegBuilding,FaPhoneAlt,FaHeadphones,FaQuestionCircle,FaUndoAlt,FaStar,FaAngleRight,FaBars } from 'react-icons/fa';


const Sidemenuebar = () => {
    return (
        <div>
            <div class="drawer drawer-start">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="p-4 overflow-y-auto w-[306px] bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='flex justify-start px-5 items-center'>
                            <img className='w-12 h-12' src={profilepic} alt="" />
                            
                            <p className='p-4'><span className='text-2xl'>Kevin Gilbert</span> <br/> kevin.gilbert@gmail.com</p>
                            
                            
                        </li>
                        
                        <li class="relative"> 
                        <hr/>
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"> <span className='text-[20px] pr-[15px]' ><FaGlobe/></span> Language: <b className='p-1'>English</b> <span className='pl-[80px]'><FaAngleRight/></span></a> 
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaDollarSign/></span>Currency: <b className='p-1'>USD</b> <span className='pl-[105px]'><FaAngleRight/></span></a>

                            <hr/>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaBars/></span>Dashboard</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaHeart/></span> Wishlist</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaSyncAlt/></span>Compare</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaShoppingCart/></span>Shopping Cart</a>
                            <hr/>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaRegBuilding/></span>About Us</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaPhoneAlt/></span>Contact with us</a>
                            <hr/>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaHeadphones/></span>Customer Support</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaQuestionCircle/></span>FAQs</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaSyncAlt/></span>App Updates</a>
                        </li>
                        <li class="relative">
                            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark"><span className='text-[20px] pr-[15px]'><FaStar/></span>   Review our app</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidemenuebar;