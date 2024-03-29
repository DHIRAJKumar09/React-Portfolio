import './navbar.css'
import React from 'react'
import { useState,useRef , useEffect } from 'react';
import { FaBars, FaTwitter } from "react-icons/fa";
import {links,social} from '../../data';
const Navbar=({logo})=>{
    const[showLinks,setshowLinks] = useState(false);

    return(
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                   
                    <button className='nav-toggle' onClick={()=>setshowLinks(!showLinks)}>
                    <FaBars />
                    </button>
                </div>
                <div className={`${showLinks ?'links-container  show-container' :
                'links-container'}`}>
                    <ul className ='links'>
                        {
                            links.map((link)=>{
                                const{id,url,text}=link;
                               return (
                                <li key={id}>
                                <a href={url}>{text}</a>
                                </li>
                               )
                            })
                        }
                    </ul>
                </div>
                <ul className='social-icons'>
                {
                    social.map((socialIcon)=>{
                        const{id,url,icon}=socialIcon
                        return(
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })
                }

                {/* <li>
                    <a href='https://www.twitter.com'>
                        <FaTwitter/>
                    </a>
                </li>

                <li>
                    <a href='https://www.twitter.com'>
                        <FaTwitter/>
                    </a>
                </li>

                <li>
                    <a href='https://www.twitter.com'>
                        <FaTwitter/>
                    </a>
                </li>
                
                <li>
                    <a href='https://www.twitter.com'>
                        <FaTwitter/>
                    </a>
                </li> */}

                </ul>
            </div>
        </nav>
    )
}
export default Navbar;