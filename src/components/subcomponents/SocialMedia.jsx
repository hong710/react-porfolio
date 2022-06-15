import React from 'react'
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';


function SocialMedia({custom}) {
	return (
		<>
			<a href="https://www.linkedin.com/in/anthony-d-hong/" target='_blank' rel='noreferrer'>
				<div className={`social-icon mr-4 ${custom} `}>
					<FaLinkedinIn />
				</div>
			</a>
			<a href="https://github.com/hong710" target="_blank" rel='noreferrer' >
				<div className={`social-icon mr-4 ${custom} `}>
					<FaGithub />
				</div>
			</a>

			<a href = "mailto: anthonyhong.d@gmail.com">
				<div className={`social-icon mr-4 ${custom} `}>
					<AiOutlineMail />
				</div>
			</a>

			<a href = "https://api.whatsapp.com/send?phone=19177692518" target="_blank" rel='noreferrer'>
			<div className={`social-icon mr-4 ${custom} `}>
				<BsWhatsapp />
			</div>
			</a>	
		</>
	)
}

export default SocialMedia