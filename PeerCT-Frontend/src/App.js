import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Product } from './Components/Product/Product'
import { Cart } from './Components/Cart/Cart'
import { ProductDetail } from './Components/ProductDetail/ProductDetail'
import { PostAd } from './Components/PostAds/PostAd'
import { SpecificAd } from './Components/PostAds/SpecificAd'
import { UserDetails } from './Components/UserDetail/UserDetails'
import { Chat } from './Components/Chat/Chat'
import { Mentor } from './Components/mentor/home/Home'
import { Mentors } from './Components/mentor/Mentors/Mentors'
import { Blog } from './Components/mentor/blog/blog'
import { Singleblog } from './Components/mentor/blog/singleblog'
import { Mentorprofile } from './Components/mentor/profile/profile'
import { Booking } from './Components/mentor/booking/sessionbook'
import { Booking2 } from './Components/mentor/booking/conformbooking'
import { Registermentor1 } from './Components/mentor/Register/mentorReg1'
import { Registermentor2 } from './Components/mentor/Register/mentorReg2'
import { Registermentor3 } from './Components/mentor/Register/mentorReg3'
import { Registermentor4 } from './Components/mentor/Register/mentorReg4'
import { Registermentor5 } from './Components/mentor/Register/mentorReg5'
import { Dashboard } from './Components/mentor/dashboardmentor/dashborad'
import { Dashboard as UserDashboard } from './Components/mentor/dashboarduser/dashboard'

import { Createsession } from './Components/mentor/dashboardmentor/creategroupsession/createsession1'
import { Createsession2 } from './Components/mentor/dashboardmentor/creategroupsession/createsession2'

const routes = {
    '/': <Home />,
    '/product/': <Product />,
    '/product/detail/': <ProductDetail />,
    '/cart': <Cart />,
    '/post-ads': <PostAd />,
    '/post-ads/:id': <SpecificAd />,
    '/user-detail': <UserDetails />,
    '/chat': <Chat />,
    '/mentor':<Mentor />,
    '/mentor/mentors': <Mentors />,
    '/mentor/blog':<Blog/>,
    '/mentor/singleblog/:id':<Singleblog/>,
    '/mentor/mentorprofile/:id': <Mentorprofile/>,
    '/mentor/booking/:serviceID/:id': <Booking/>,
    '/mentor/booking2': <Booking2/>,
    '/mentor/registermentor1':<Registermentor1/>,
    '/mentor/registermentor2':<Registermentor2/>,
    '/mentor/registermentor3':<Registermentor3/>,
    '/mentor/registermentor4':<Registermentor4/>,
    '/mentor/registermentor5':<Registermentor5/>,
    '/mentor/dashboard':<Dashboard/>,
    '/user/dashboard':<UserDashboard/>,
    'mentor/dashboard/createsession1': <Createsession />,
    'mentor/dashboard/createsession2': <Createsession2 />
}

const App = () => {
    caches.keys().then((names) => {
        names.forEach((name) => {
            caches.delete(name);
        });
    });
    return (
        <BrowserRouter>
            <Routes>
                {
                    Object.keys(routes).map((route, index) => {
                        return (<Route key={index} path={route} element={routes[route]} />);
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default App