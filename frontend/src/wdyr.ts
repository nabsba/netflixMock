import React from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render';

//Do not forget to use it in production as it's slow down the app.
if (process.env.REACT_APP_DEVELOPMENT === 'true') {
	whyDidYouRender(React, {
		trackAllPureComponents: true,
		// trackExtraHooks: [[ReactRedux, 'useSelector']],
	});
}

// Write in the bottom of the component before export:
// (YourComponentName as any).whyDidYouRender = true;
