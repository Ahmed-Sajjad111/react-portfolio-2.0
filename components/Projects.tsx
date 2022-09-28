import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='md:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-20 md:mt-0'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#66cd00]/80'>
                {projects?.map((project, i) => (
                    <div
                        key={project._id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 md:h-screen'>
                        <motion.img
                            initial={{ opacity: 0, y: -300 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt="project image"
                            className='h-2/5 w-auto md:h-3/5 md:w-auto mx-auto object-scale-down rounded-lg'
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#66cd00]/50'>
                                    Case Study {i + 1} of {projects.length}: {' '}
                                </span>
                                {project?.title}
                            </h4>
                            <div className='mt-2 grid grid-cols-5 gap-2 md:flex md:flex-wrap items-center justify-center'>
                                {project.technologies.map(technology => (
                                    <img
                                        className='rounded-full h-10 w-10'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                    />
                                ))}
                            </div>

                            <p className='text-lg text-center md:text-left'>{project?.summary}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#66cd00]/10 left-0 h-[500px] -skew-y-12' />

        </motion.div>
    )
}

export default Projects