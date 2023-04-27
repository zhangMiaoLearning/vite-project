import React from 'react';
import Mouse from './Mouse';
import Heart from './Heart';

const RenderPropModule: React.FC = () => {
	return <Mouse render={(mouse) => <Heart mouse={mouse} />} />;
};
export default RenderPropModule;
