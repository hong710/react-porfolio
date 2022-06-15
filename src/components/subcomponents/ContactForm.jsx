import React,{useRef,useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Modal from './Modal';
function ContactForm() {

    const [sent, setSent]= useState("");
    const form = useRef();
    const formik = useFormik({
        initialValues:{
            name: "",
            email:"",
            message:""
        },
        validationSchema: Yup.object({
            name: Yup.string().max(30, "must be 30 characters or less!").min(2,"name is too short!").required( "name is required!"),
            email: Yup.string().required( "email is required!").email("please enter a valid email address!"),
            message: Yup.string().required( "message is required!")
        }),

        onSubmit: function() {
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                setSent(result.text);
            })
            formik.resetForm();
        }

    })


    return (
        <div className="block p-6 rounded-lg shadow-lg bg-slate-100 dark:bg-neutral-800">
             {sent==="OK" ?<Modal setSent={setSent}/>:null} 
            <form ref={form} onSubmit={formik.handleSubmit}>
                <div className="form-group mb-4">
                    <p className="mb-1">Your name</p>                    
                    <input type="text" className="form-control block w-full px-3
                        py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding
                        border-2 border-solid border-gray-300 rounded transition ease-in-out
                         m-0 focus:border-2 focus:border-blue-600 focus:outline-none" 
                        id="name"
                        placeholder="Name" 
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name? <p className="text-sm text-red-500">{formik.errors.name}</p>:null}
                </div>
                <div className="form-group mb-4">
                    <p className="mb-1">Your Email </p>
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:border-2 focus:border-blue-600 focus:outline-none" id="Email"
                        placeholder="Email address"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                    {formik.touched.email && formik.errors.email? <p className="text-sm text-red-500">{formik.errors.email}</p>:null}
                </div>
                <div className="form-group mb-6">
                <p className="mb-1">Message</p>
                    <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:border-2 focus:border-blue-600 focus:outline-none
                        "
                        id="Body"
                        rows="3"
                        placeholder="Message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    ></textarea>
                    {formik.touched.message && formik.errors.message? <p className="text-sm text-red-500">{formik.errors.message}</p>:null}
                </div>
                <button type="submit" className="
                    w-full px-6 py-2.5 button text-sm transition duration-150 ease-in-out
                    mt-4
                    "
                    >Send</button>
            </form>
        </div>
    )
}

export default ContactForm