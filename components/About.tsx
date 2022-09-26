import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'
import myImg from '../utils/myProfile.jpg'

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                alt='profile picture image'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#66cd00]/50'>little</span> background</h4>
                <p className='text-base text-justify'>Full stack developer utilizing an IT background to innovate in the software industry. Known to be a dedicated problem solver, natural leader, and flexible team member. Using my passion for leadership and for helping others, I decided to help others pursue their dreams as upcoming developers. I help teach students full stack development skills all across the country. Eventually I would like to take my software career towards what I love most, gaming. Software is only limited by the capabilities of your mind. Unfortunately for software, my mind is not limited by anything.</p>
            </div>
        </motion.div>
    )
}

export default About