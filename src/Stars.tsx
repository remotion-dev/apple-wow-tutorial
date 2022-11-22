import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Explosion} from './Explosion';
import {Shrinking} from './Shrinking';
import {Star} from './Star';
import {Trail} from './Trail';

export const Stars: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				rotate: '0.3rad',
			}}
		>
			<Explosion>
				<Trail extraOffset={100} amount={4}>
					<Shrinking>
						<Star />
					</Shrinking>
				</Trail>
			</Explosion>
		</AbsoluteFill>
	);
};
