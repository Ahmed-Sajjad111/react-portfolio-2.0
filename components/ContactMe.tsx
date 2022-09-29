import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

const ContactMe = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:uasajjad11198@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
    }

    return (
        <div className='md:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-20 md:mt-0'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10 mt-10 md:mt-0'>
                <h4 className='text-3xl md:text-4xl font-semibold text-center underline decoration-[#66cd00]/50'>
                    Lets Talk.
                </h4>

                <div className='space-y-10'>
                    <div className='flex flex-col md:flex-row items-center md:space-x-5 justify-center'>
                        <PhoneIcon
                            className='text-[#66cd00] h-7 w-7 animate-pulse'
                        />
                        <p className='text-xl md:text-2xl mt-3 md:mt-0'>+1234567890</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:space-x-5 justify-center'>
                        <EnvelopeIcon
                            className='text-[#66cd00] h-7 w-7 animate-pulse'
                        />
                        <p className='text-xl md:text-2xl mt-3 md:mt-0'>uasajjad11198@outlook.com</p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:space-x-5 justify-center'>
                        <MapPinIcon
                            className='text-[#66cd00] h-7 w-7 animate-pulse'
                        />
                        <p className='text-xl md:text-2xl mt-3 md:mt-0'>Union, New Jersey, United States</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row'>
                        <input
                            {...register('name')}
                            placeholder='Name'
                            className='contactInput'
                            type="text" />
                        <input
                            {...register('email')}
                            placeholder='Email'
                            className='contactInput'
                            type="email" />
                    </div>

                    <input
                        {...register('subject')}
                        placeholder='Subject'
                        className='contactInput'
                        type="text" />

                    <textarea
                        {...register('message')}
                        placeholder='Message'
                        className='contactInput' />
                    <button
                        type='submit'
                        className='bg-[#66cd00] py-5 px-10 rounded-md text-black font-bold text-lg'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe