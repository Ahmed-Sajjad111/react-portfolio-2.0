import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import myImg from '../utils/profileImg.png'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Ahmed Sajjad",
            "<Developer />",
            "<Gamer />",
            "<Tech Enthusiast />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-central overflow-hidden'>
            <BackgroundCircles />
            <div className='relative rounded-full h-32 w-32 mx-auto object-cover'>
                <Image
                    src={myImg}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#66cd00" />
            </h1>
        </div>
    )
}

export default Hero