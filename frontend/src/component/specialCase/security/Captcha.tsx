import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type Props = {
	callFunction: any;
};
const Captcha: React.FC<Props> = ({ callFunction }) => {
	return (
		<ReCAPTCHA
			sitekey={`${process.env.REACT_APP_PUBLIC_CATCHA}`}
			onChange={callFunction}
			size="invisible"
		/>
	);
};
export default Captcha;
