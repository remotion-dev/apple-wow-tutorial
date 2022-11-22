import {Freeze} from 'remotion';
import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import React from 'react';

// RemapSpeed is a helper function for the component [Slowed] that takes a frame number and a speed
const remapSpeed = ({
	frame,
	speed,
}: {
	frame: number;
	speed: (fr: number) => number;
}) => {
	let framesPassed = 0;
	for (let i = 0; i <= frame; i++) {
		framesPassed += speed(i);
	}

	return framesPassed;
};

export const Slowed: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const frame = useCurrentFrame();
	const remappedFrame = remapSpeed({
		frame,
		speed: (f) =>
			interpolate(f, [0, 20, 21], [1.5, 1.5, 0.5], {
				extrapolateRight: 'clamp',
			}),
	});

	return <Freeze frame={remappedFrame}>{children}</Freeze>;
};
