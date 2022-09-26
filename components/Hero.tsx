import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

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
        <div>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7Ab0A" />
            </h1>
        </div>
    )
}

export default Hero