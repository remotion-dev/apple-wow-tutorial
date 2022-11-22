import {AbsoluteFill} from 'remotion';
import React from 'react';

const AMOUNT = 10;

export const Explosion: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	return (
		<AbsoluteFill>
			{new Array(AMOUNT).fill(true).map((_, i) => {
				return (
					<AbsoluteFill
						style={{
							rotate: (i / AMOUNT) * Math.PI * 2 + 'rad',
						}}
					>
						{children}
					</AbsoluteFill>
				);
			})}
		</AbsoluteFill>
	);
};
