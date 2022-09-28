import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-40'
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={urlFor(experience?.companyImage).url()}
                alt='experience logo'
            />

            <div className='px-0 md:px-10 flex flex-col items-center md:items-start'>
                <h4 className='w-[200px] md:w-full text-2xl md:text-4xl font-light text-center md:text-left'>{experience?.jobTitle}</h4>
                <p className='w-[200px] md:w-full font-bold text-xl md:text-2xl mt-1 text-center md:text-left'>{experience?.company}</p>
                <div className='mt-2 grid grid-cols-5 gap-2 md:flex md:flex-wrap'>
                    {experience?.technologies?.map((technology) => (
                        <img
                            key={technology._id}
                            className='h-8 w-8 md:h-10 md:w-10 rounded-full'
                            src={urlFor(technology?.image).url()}
                            alt='tech logo'
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300 text-center md:text-left'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}</p>
                {/* w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory */}
                <ul className='list-disc space-y-4 ml-5 text-lg flex flex-col h-full overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#66cd00]/80 '>
                    {experience?.points?.map((point, i) => (
                        <li key={i} className='snap-center'>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard