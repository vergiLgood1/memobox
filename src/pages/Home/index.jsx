import  Navbar  from '../../components/ui/Navbar/Navbar'
import Button from '../Home/index'
import React from 'react'
import Hero from '@/components/ui/Hero/Hero'
import Featured from '@/components/ui/Featured/Featured'


const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Featured/>
        </>
    )
}

export default Home
