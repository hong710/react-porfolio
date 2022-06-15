import React from 'react'
import {HiOutlineX} from 'react-icons/hi';

function Modal({setSent}) {
    return (
        <div
        className="p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
        role="alert"
      >
        <div className="w-full flex justify-end">
            <HiOutlineX className="cursor-pointer" onClick={()=>setSent(false)}/>
        </div>
        <strong className="text-sm font-medium"> The message has sent! </strong>
      
        <p className="mt-1 text-xs">
          Thank you for contacting me. I will get back to you shortly.
        </p>
      </div>

    )
}

export default Modal