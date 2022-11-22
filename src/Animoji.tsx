import {staticFile, useCurrentFrame} from 'remotion';
import {Img} from 'remotion';
import {AbsoluteFill} from 'remotion';
import React from 'react';

export const Memoji: React.FC = () => {
	const frame = useCurrentFrame();

	const src = `frame${(frame * 2).toString().padStart(3, '0')}.png`;

	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 80,
			}}
		>
			<Img
				style={{
					height: 800,
				}}
				src={staticFile(src)}
			/>
		</AbsoluteFill>
	);
};
