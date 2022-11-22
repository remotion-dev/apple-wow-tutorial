import {interpolate, useCurrentFrame} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';

export const Shrinking: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill
			style={{
				scale: String(
					interpolate(frame, [60, 90], [1, 0], {
						extrapolateLeft: 'clamp',
						extrapolateRight: 'clamp',
					})
				),
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
