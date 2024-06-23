import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
        <div >
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
            <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, et cumque beatae laudantium temporibus aliquam eum vel ullam sint, ad, cum repellat obcaecati magnam? Expedita dignissimos ad fuga corporis tempora?</p>
            <div className='flex justify-between md:w-[75%] my-6'>
            <FaGithub size={30}/>
            <SlSocialLinkedin size={30}/>
            <TiSocialFacebook size={30}/>
            <TiSocialTwitter size={30}/>
            <SlSocialInstagram size={30}/>
            
            
            </div>
        </div>
        <div className='cols-span-3 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
                <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blogs</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Supports</h6>
                <ul>
                <li className='py-2 text-sm'>pricings</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>terms</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer
