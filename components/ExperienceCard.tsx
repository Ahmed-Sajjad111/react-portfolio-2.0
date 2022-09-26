import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

const ExperienceCard = (props: Props) => {
    return (<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
            alt='experience logo'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Instructional Staff</h4>
            <p className='font-bold text-2xl mt-1'>2u at Columbia University</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
                    alt='tech logo'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
                    alt='tech logo'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://cdn.sanity.io/images/zp7mbokg/production/G3i4emG6B8JnTmGoN0UjgAp8-300x450.jpg'
                    alt='tech logo'
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>Started Work... - Ended...</p>
            {/* w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory */}
            <ul className='list-disc space-y-4 ml-5 text-lg flex flex-col h-[300px] overflow-y-auto snap-y snap-mandatory'>
                <li className='snap-center'>Summary Points Summary Points Summary Points</li>
                <li className='snap-center'>Summary Points Summary Points Summary Points</li>
                <li className='snap-center'>Summary Points Summary Points Summary Points</li>
                <li className='snap-center'>Summary Points Summary Points Summary Points</li>
                <li className='snap-center'>Summary Points Summary Points Summary Points</li>
            </ul>
        </div>
    </article>
    )
}

export default ExperienceCard