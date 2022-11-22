import React from 'react';
import {AbsoluteFill} from 'remotion';
import {Explosion} from './Explosion';
import {Move} from './Move';
import {RedHeart} from './RedHeart';
import {Shrinking} from './Shrinking';

export const RedHearts: React.FC = () => {
	return (
		<Explosion>
			<Move delay={5}>
				<AbsoluteFill style={{transform: `translateY(-100px)`}}>
					<Shrinking>
						<RedHeart />
					</Shrinking>
				</AbsoluteFill>
			</Move>
		</Explosion>
	);
};
