import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    education: Education;
}

const ExperienceCard = ({ education }: Props) => {
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
            src={urlFor(education?.schoolImage).url()}
            alt='experience logo'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>{education?.degree}</h4>
            <p className='font-bold text-2xl mt-1'>{education?.school}</p>
            <p className='uppercase text-gray-300'>{new Date(education?.dateStarted).toDateString()} - {education?.isCurrentlyLearningHere ? "Present" : new Date(education.dateEnded).toDateString()}</p>
            <p className='uppercase py-5 text-gray-300'>GPA: {education.gpa}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg flex flex-col h-[300px] overflow-y-auto snap-y snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#66cd00]/80'>
                {education?.points?.map((point, i) => (
                    <li key={i} className='snap-center'>{point}</li>
                ))}
            </ul>
        </div>
    </article>
    )
}

export default ExperienceCard