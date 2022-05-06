import React from 'react';

export default function Footer() {
	return (
		<React.Fragment>
			<div className='hidden xl:flex justify-start ml-[3vw] space-x-[13vw] text-[#686868] text-base mt-[5vw] mb-[.3vw]  '>
				<ul className='space-y-1 '>
					<li>
						<a href='#'>Help Center</a>
					</li>
					<li>
						<a href='#'>Audio Description</a>
					</li>
					<li>
						<a href='#'>Audio and Subtitles</a>
					</li>
				</ul>

				<ul className='space-y-1 '>
					<li>
						<a href='#'>Gift Cards</a>
					</li>
					<li>
						<a href='#'>Media Center</a>
					</li>
					<li>
						<a href='#'>Investor Relations</a>
					</li>
				</ul>
				<ul className='space-y-1 '>
					<li>
						<a href='#'>Jobs</a>
					</li>
					<li>
						<a href='#'>Privacy</a>
					</li>
					<li>
						<a href='#'>Terms of Use</a>
					</li>
				</ul>
				<ul className='space-y-1 '>
					<li>
						<a href='#'>Contact Us</a>
					</li>
					<li>
						<a href='#'>Legal Notices</a>
					</li>
					<li>
						<a href='#'>Corporate Information</a>
					</li>
				</ul>
			</div>
			<div className='flex justify-center xl:justify-start text-[#686868] text-sm  ml-[3vw] mb-[.5vw] xl:mt-[1.5vw] mt-16 '>
				<p> 1997-2022 Netflix, Inc. | Yusuf Akbulut 2022 </p>
			</div>
		</React.Fragment>
	);
}
