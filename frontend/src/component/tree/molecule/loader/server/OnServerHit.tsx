import React from 'react';
import { Navigate } from 'react-router-dom';
// import ERROR_MESSAGE from '../../../../../Common/error/constant';
import getIcon from '../../../../factory/icon/Icon';

import './onServerHit.css';
import TOnServerHit from './type';

type Props = {
	data: TOnServerHit;
};

const IconSuccess = getIcon('Check');
const OnServerHit: React.FC<Props> = ({ data }) => {
	const PendingHTML = (
		<div id="loader">
			{/* <Mask click={click}/> */}
			<div className="lds-roller">
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
	const PendingV2HTML = (
		<div className="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
	const SuccessHTML = <div id="success"> {IconSuccess} </div>;
	// const MessageToUser = (type: string) => {
	// 	return <div id="message-to-user"> {ERROR_MESSAGE[data]} </div>;
	// };
	const ErrorHTML = (
		<Navigate
			to={{
				pathname: '/500',
			}}
		/>
	);
	const ContentHTML = () => {
		switch (data) {
			case 'pending':
				return PendingHTML;
			case 'pendingV2':
				return PendingV2HTML;
			case 'success':
				return SuccessHTML;
			case 'error':
				return ErrorHTML;
			default:
				return 'default';
		}
	};
	return <div className="server_on_hit">{ContentHTML()}</div>;
};
export default OnServerHit;
