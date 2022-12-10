import React from 'react'
import fb from '../../../assets/img/social/fb.png'
import ig from '../../../assets/img/social/ig.png'
import tw from '../../../assets/img/social/tw.png'
import yt from '../../../assets/img/social/yt.png'
import './Footer.css'

const icon_links = [
    {
        'logo': <img src={fb} alt="" />,
        'link': ''
    },
    {
        'logo': <img src={ig} alt="" />,
        'link': ''
    },
    {
        'logo': <img src={tw} alt="" />,
        'link': ''
    },
    {
        'logo': <img src={yt} alt="" />,
        'link': ''
    },
]


const blogs = [
    {
        'date': '27 May',
        'content': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eos at aliquam.',
        'comment': 5,
        'link': ''
    },
    {
        'date': '27 May',
        'content': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi eos at aliquam.',
        'comment': 5,
        'link': ''
    },
]

export const Footer = () => {
    return (
        <>
            <div className='details-foot'>
                <div className="foot-section-1 cs-foot">
                    <div className="footer-desc">
                        <div className="tittle-foot">
                            <span>PEERCT</span>
                        </div>
                    </div>
                    <div className="foot-desc-text">
                        <div className="text-foot">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste error temporibus eos modi tempora, excepturi nisi. Iure, obcaecati reiciendis.</span>
                        </div>
                    </div>
                    <div className="foot-desc-addr foot-same-text">
                        <span>121 King Street. Melbourne 3000</span>
                    </div>
                    <div className="foot-desc-contact foot-same-text">
                        <a href='tel:+91'>+91 9753564260</a>
                    </div>
                    <div className="foot-desc-email foot-same-text">
                        <a href='mailto:'>contact@peerct.com</a>
                    </div>
                    <div className="social-icons">
                        {
                            icon_links.map((social) => {
                                return (
                                    <div className="icon-box">
                                        <a href={social.link}>
                                            {social.logo}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="foot-section-2 cs-foot">
                    <div className="shopping-foot">
                        <span>Shopping</span>
                    </div>
                    <div className="options-f">
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                    </div>
                </div>
                <div className="foot-section-3 cs-foot">
                    <div className="morelink-foot">
                        <span>Shopping</span>
                    </div>
                    <div className="options-f">
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                        <a href="#0">Your Cart</a>
                    </div>
                </div>
                <div className="foot-secion-4 cs-foot">
                    <div className="head-blog-tittle">
                        <span>College Blogs</span>
                    </div>
                    {
                        blogs.map((blog, index) => {
                            if (index === 1) {
                                return (
                                    <>
                                        <div className="blog-line">

                                        </div>
                                        <a href={blog.link} className="foot-blog">
                                            <div className="date-blog">
                                                <span>{blog.date}</span>
                                            </div>
                                            <div className="content-blog">
                                                <span>{blog.content}</span>
                                            </div>
                                            <div className="comments-blog">
                                                <span>{blog.comment} comments</span>
                                            </div>
                                        </a>
                                    </>
                                )
                            } else {
                                return (
                                    <a href={blog.link} className="foot-blog">
                                        <div className="date-blog">
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="content-blog">
                                            <span>{blog.content}</span>
                                        </div>
                                        <div className="comments-blog">
                                            <span>{blog.comment} comments</span>
                                        </div>
                                    </a>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="copyright-foot">
                <div className="text-copyright">
                    <span>PEERCT &#169; - All right reserved</span>
                </div>
            </div>
        </>
    )
}