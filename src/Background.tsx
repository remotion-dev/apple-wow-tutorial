import {AbsoluteFill} from 'remotion';
import React from 'react';

export const Background: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(to bottom, #000021, #110024)',
			}}
		/>
	);
};
