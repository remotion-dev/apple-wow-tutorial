import React from 'react';
import {AbsoluteFill} from 'remotion';
import {interpolate} from 'remotion';
import {spring} from 'remotion';
import {useCurrentFrame} from 'remotion';
import {useVideoConfig} from 'remotion';

export const Move: React.FC<{
	children: React.ReactNode;
	delay: number;
}> = ({children, delay}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();

	const down = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 200,
		},
		durationInFrames: 120,
	});

	const y = interpolate(down, [0, 1], [0, -400]);

	return (
		<AbsoluteFill
			style={{
				translate: `0 ${y}px`,
			}}
		>
			{children}
		</AbsoluteFill>
	);
};
