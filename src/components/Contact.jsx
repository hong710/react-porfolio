import React from 'react'
import ContactForm from './subcomponents/ContactForm'
import TitleSection from './subcomponents/TitleSection'
import mailBox from '../assets/mailbox.png';
import SocialMedia from './subcomponents/SocialMedia';
import Footer from './Footer';

function Contact() {
  return (
    <div id='contact' className=' relative w-full h-screen  dark:hero'>
        <div className='my-container px-2 pt-20 w-full items-center'>
        <TitleSection title ={'Contact'} text={'Get In Touch'}/>     

            <p className='pb-4 pt-16'>I am available for contract or full-time positions. Contact me and let&apos;s talk.</p>           

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div>
                    <ContactForm />
                </div>
                <div className='justify-self-center'>
                <img src={mailBox} width='300' height='350' alt='mailbox'   />
                </div>
            </div>
            <div className='flex justify-center py-8'>
                <SocialMedia />
            </div>             
        </div>
        <Footer />
    </div>
  )
}

export default Contact