import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Dot: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					height: 14,
					width: 14,
					borderRadius: 14 / 2,
					backgroundColor: '#ccc',
				}}
			/>
		</AbsoluteFill>
	);
};
