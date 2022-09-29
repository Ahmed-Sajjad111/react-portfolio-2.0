import React from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import { Education } from '../typings';

type Props = {
    educations: Education[];
}

const Educations = ({ educations }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='md:h-screen flex relative overflow-hidden flex-col t-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center mt-20 md:mt-0'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Education
            </h3>
            <h3 className='md:absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Scroll Right to See More
            </h3>

            <div className='w-full flex space-x-5 overflow-x-scroll md:p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#66cd00]/80'>
                {educations?.map((education) => (
                    <EducationCard
                        key={education._id}
                        education={education} />
                ))}
            </div>
        </motion.div>
    )
}

export default Educations