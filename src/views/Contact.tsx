import React, { useRef, useState, FormEvent } from 'react';
import { useLoaderData } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Hero from '../components/Hero.js';
import Error from './Error.jsx';
import Loading from './Loading.jsx';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import framerAnimations from '../utils/framer-anims.js';
import { ContactDetailsData, Image, Entry } from '../utils/types.js';

interface ContactEntry extends Entry {
    heroImage: Image[];
}

interface ContactPageData {
    contactEntries: ContactEntry[],
    globalSet: ContactDetailsData;
}

interface ContactLoaderData {
    contactData: ContactPageData;
}

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const contactPageLoaderData = useLoaderData() as ContactLoaderData;

    const { contactData } = contactPageLoaderData;
    const [ emailSent, setEmailSent ] = useState(false);
    const [ emailLoading, setEmailLoading ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);

    const sendEmail = async (e : FormEvent) => {
        e.preventDefault();
        setEmailLoading(true);

        if (!form.current) return;

        try {
            await emailjs.sendForm('contact_form_service', 'template_6ku2azn', form.current,{ publicKey: 'GsRrK0jMcTebFw0Jp' });
            setEmailSent(true);
            form.current.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            setEmailError(true);
        } finally {
            setEmailLoading(false);
        }
    };

    return (
        <>
            <Hero image={contactData.contactEntries[0].heroImage[0]} title={contactData.contactEntries[0].title} />
            <motion.section className='py-8 md:py-16 xl:pt-20 xl:pb-28' {...framerAnimations.slideRightFadeIn}>
                <div className="container flex flex-col lg:flex-row justify-between items-top pt-8 pb-12">
                    <div className="lg:w-1/2 lg:pr-12">
                        <div className="w-full max-w-screen-md">
                            <p className="text-2xl xl:text-4xl mb-6 xl:mb-10">Let's Talk</p>
                            <p className="mb-8 xl:text-lg xl:mb-12">Fill in the form below and we will contact you as soon as we can.</p>
                        </div>
                        <form className="flex flex-col  max-w-screen-md w-full text-lg xl:text-xl" ref={form} onSubmit={sendEmail}>
                            <label className='mb-2'>Name:</label>
                            <input className="bg-neutral-100 rounded h-8 xl:h-9 max-w-sm px-1" type="text" name="from_name" />
                            <label className='mt-8 mb-2'>Email:</label>
                            <input className="bg-neutral-100 rounded h-8 xl:h-9 max-w-md px-1" type="email" name="reply_to" />
                            <label className='mt-8 mb-2'>Subject:</label>
                            <textarea className="bg-neutral-100 rounded h-32 px-1 lg:mb-2" name="message" />
                            <Button disabled = {emailSent ? true : false} onClick={sendEmail} className="max-w-28 xl:mt-10 xl:text-base" loading={emailLoading ? true : false} >Send</Button>
                        </form>
                        {emailSent && <motion.div {...framerAnimations.slideRightFadeIn}>
                            <p className="text-green-400 text-center mt-4 md:text-lg xl:text-xl xl:mt-8 absolute">Thank you. Your message has been sent.</p>
                        </motion.div>}
                        {emailError && <motion.div {...framerAnimations.slideRightFadeIn}>
                            <p className="text-red-400 text-center text-lg xl:text-2xl">An error occurred. Please try again.</p>
                        </motion.div>}
                    </div>
                    <div className="hidden lg:block mt-8 lg:border-l-2 lg:pl-12 lg:w-1/2 space-y-3">
                        <p className="mb-8 xl:text-xl 2xl:text-2xl xl:mb-16">You can also contact us directly through the following channels:</p>
                        <p className="text-xl">{contactData.globalSet.streetAddress}</p>
                        <p className="text-xl">{contactData.globalSet.email}</p>
                        <p className="text-xl">{contactData.globalSet.phoneNumber}</p>
                    </div>
                </div>
            </motion.section>
        </>
    );
};