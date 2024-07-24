import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className='relative  max-w-[95%] mx-auto '>
                <div className="navbar bg-[#EEEEEE] rounded-full  my-5 absolute z-20 shadow-xl">
                    <div className="flex-1 pl-1 ">
                        <Link href={"/home"}>
                            <Image src={"/icon.png"} height={50} width={50} alt='header' className='cursor-pointer' />
                        </Link>
                    </div>

                    <div className="flex-none lg:gap-5">
                        <Link href={"/product"}>
                            <Image src={"https://img.icons8.com/ios-filled/50/sneakers.png"} height={40} width={40} alt='product' />
                        </Link>
                        
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link href={"/"}>Logout</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar