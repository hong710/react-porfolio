import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

function SocialMedia({custom}) {
	return (
		<>
			<div className={`social-icon mr-4 ${custom} `}>
				<FaLinkedinIn />
			</div>
			<div className={`social-icon mr-4 ${custom} `}>
				<FaGithub />
			</div>
			<div className={`social-icon mr-4 ${custom} `}>
				<AiOutlineMail />
			</div>
			<div className={`social-icon mr-4 ${custom} `}>
				<BsFillPersonLinesFill />
			</div>
		</>
	)
}

export default SocialMedia