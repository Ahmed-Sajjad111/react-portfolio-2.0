import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import myImg from '../utils/profileImg.png'
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${pageInfo?.name}`,
            "<Tech Enthusiast />",
            "<Gamer />",
            "<Dog Dad />",
        ],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='relative rounded-full h-32 w-32 mx-auto object-cover'>
                <Image
                    priority
                    src={urlFor(pageInfo?.heroImage).url()}
                    style={{ position: 'relative', borderRadius: '99999px', objectFit: 'cover' }}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            {/* <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()}
                alt='cover image'
            /> */}
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo.role}
                </h2>
                <h1 className='text-5xl lg:6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#66cd00" />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#experience'>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
                <a
                    target="_blank"
                    href='https://drive.google.com/file/d/17LixP_RQfmOQBJG82e4PokWgprK_2Ul6/view?usp=sharing'>
                    <button
                        className='heroButton mt-3 items-center justify-center text-center'>
                        Resume
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Hero