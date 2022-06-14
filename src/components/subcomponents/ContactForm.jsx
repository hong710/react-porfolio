import React from 'react'

function ContactForm() {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-slate-100 dark:bg-neutral-800">
            <form>
                <div className="form-group mb-6">
                    <input type="text" className="form-control block w-full px-3
                        py-1.5 text-base font-normaltext-gray-700  bg-white bg-clip-padding
                        border border-solid border-gray-300 rounded transition ease-in-out
                        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="NameInput"
                        placeholder="Name" />
                </div>
                <div className="form-group mb-6">
                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="Email"
                        placeholder="Email address"/>
                </div>
                <div className="form-group mb-6">
                    <textarea
                        className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            "
                        id="Body"
                        rows="3"
                        placeholder="Message"
                    ></textarea>
                </div>
                <div className="form-group form-check text-center mb-6">
                    <input type="checkbox"
                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                        id="checkBox" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="checkBox">Send me a copy of this message</label>
                </div>
                <button type="submit" className="
                    w-full px-6 py-2.5 button text-sm transition duration-150 ease-in-out
                   
                    ">Send</button>
            </form>
        </div>
    )
}

export default ContactForm