// import React from 'react';
// import { Redirect, Route, useParams } from 'react-router-dom';
// import { course } from '../../../service/pages/data/course/data';
// import { TCourse } from '../../tree/organism';
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const PrivateRouteCourse = ({ children, ...rest }: any): any => {

// 	// take all key of 'course' object that will represent our ids to check if the course name is valid.

// 	const ids = (() => {
// 		const result: string[] = [];
// 		course.map((element: TCourse) => result.push(element.title));
// 		return result;
// 	})();
// 	const { id } = useParams<Record<string, string | undefined>>();

// 	return (
// 		<Route
// 			{...rest}
// 			render={({ location }): React.ReactNode => {
// 				// Extract ':id' from the location path
// 				// const id = location.pathname.match(/[^course\/](\w+|\d|.*)/g);
// 				let isIdValid = false;
// 				if (id && id.length > 0) {
// 					isIdValid = ids.includes(id[0]);
// 				}

// 				return isIdValid ? (
// 					children
// 				) : (
// 					<Redirect
// 						to={{
// 							pathname: '/404',
// 							state: { from: location },
// 						}}
// 					/>
// 				);
// 			}}
// 		/>
// 	);
// };

// export default PrivateRouteCourse;
export {};
