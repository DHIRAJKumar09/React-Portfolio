import React from 'react'
import {links,social} from '../../data';
export const Sidebar = () => {
  return (
  
        <div className='links-containers show-container'>
                    <ul className ='links'>
                       {
                        links.map((link)=>{
                            const{id,url,text} = link
                            return(
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        })
                       }
                    </ul>
                </div>
 
  )
}
