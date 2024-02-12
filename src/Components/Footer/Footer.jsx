import React from 'react'
import './Footer.css'
import { Links } from '../../assests/data/NavLink'
import { NavLink } from 'react-router-dom'
import {FaFacebookF,FaInstagram,FaWhatsapp} from 'react-icons/fa6'
import {VscArrowSmallRight} from 'react-icons/vsc'
import {SiWelcometothejungle} from 'react-icons/si'
import {BsTelephone} from 'react-icons/bs'
import {IoLocationOutline} from 'react-icons/io5'

export default function Footer() {
  return (
        <div className="footer">
        <div className="container">
            <div className="box">
                <h3>Maltimart</h3>
                <ul className="social">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" className="facebook">
                         <FaFacebookF/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" className="twitter">
                            <FaInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+0201286552467?text=" target="_blank" className="youtube">
                            <FaWhatsapp/>
                        </a>
                    </li>
                </ul>
                <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, eveniet quibusdam. Eaque tenetur odio perspiciatis maxime illum, recusandae aspernatur assumenda molestias eveniet exercitationem magnam impedit explicabo minus possimus id consequatur.</p>

            </div>
            <div className="box">
                <ul className="links">
                    {
                      Links.map((link)=>{
                        return(
                          <li key={Math.random()}>
                            <VscArrowSmallRight/>
                            <NavLink to={link.path}>{link.link}</NavLink>
                          </li>
                        )
                      })
                    }
                </ul>
            </div>
            <div className="box">
                <div className="line">
                    <IoLocationOutline/>
                    <div className="info">
                        Egypt,Kafr-Elshiekh,Desouq
                    </div>
                </div>
                <div className="line">
                    <SiWelcometothejungle/>
                    <div className="info">
                        YOU'RE WELCOME
                    </div>
                </div>
                <div className="line">
                    <BsTelephone/>
                    <div className="info">
                        <span>01286552467</span>
                    </div>
                </div>
            </div>
        </div>
        <p className="copyright">
           Maltimart 2023 &#128512; 
        </p>
    </div>
  )
}
