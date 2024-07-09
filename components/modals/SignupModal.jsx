'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import axios from 'axios';


export default function SignupModal({ isOpen, closeModal }) {


    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setError('Please enter your email address');
            return;
        }


        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    firstName
                }),
            });

            const data = await response.json();

            console.log(data);

            if (data.status === 'SUBSCRIBED') {
                setMessage('Thanks for joining, I will be in touch!');
            } else {
                setMessage('Something went wrong! Please try again.');
            }

            setFirstName('');
            setEmail('');

        } catch (error) {
            setMessage('Something went wrong!');
        }
    };







    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl main-bg p-7 lg:p-20 text-left align-middle shadow-xl transition-all">

                                    {/* MODAL CONTENT */}

                                    <div className="flex flex-col lg:flex-row gap-10 relative">
                                        <div className='w-full lg:w-[50%]'>
                                            <h1 className='text-2xl lg:text-4xl font-semibold pb-10 text-orange'>
                                                Get in the mix!
                                            </h1>
                                            <p className=' text-zinc-300'>
                                                Stay informed about the course launch for Original Composition
                                            </p>

                                            <form
                                                onSubmit={handleSubmit}
                                                className='mt-10'>
                                                <input
                                                    onChange={handleFirstName}
                                                    type="text"
                                                    placeholder='your first name (optional)'
                                                    className='w-full p-3 mb-5 rounded-lg'
                                                />
                                                <input
                                                    onChange={handleEmail}
                                                    name="field_0" id="field_0"
                                                    type="email"
                                                    placeholder='your email address (required)'
                                                    className='w-full p-3 mb-1 rounded-lg'
                                                />
                                                {error && <p className='text-red-500'>{error}</p>}
                                                <button
                                                    type='submit'
                                                    className='mt-5 w-[100px] bg-[#5771FF] text-white p-3 rounded-lg'>
                                                    Ok!
                                                </button>
                                            </form>

                                            <h3 className='text-white pt-5'>
                                                {
                                                    message && message
                                                }
                                            </h3>


                                            <p className='text-[#868686] bottom-[-50px] absolute hidden lg:block'>
                                                *We will never spam, sell or share your information!
                                            </p>

                                        </div>
                                        <div className='w-full lg:w-[50%]'>
                                            <img src="/dual.png" alt="signup" className='w-full' />

                                            <p className='text-[#868686] lg:hidden pt-7'>
                                                *We will never spam, sell or share your information!
                                            </p>
                                        </div>
                                    </div>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
