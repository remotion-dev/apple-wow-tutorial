import {Background} from './Background';
import {AbsoluteFill} from 'remotion';
import {Dot} from './Dot';
import {Shrinking} from './Shrinking';
import {Move} from './Move';
import {Trail} from './Trail';
import {Explosion} from './Explosion';
import {Dots} from './Dots';
import {RedHearts} from './RedHearts';
import {YellowHearts} from './YellowHearts';
import {Stars} from './Stars';
import {Slowed} from './SlowedTrail';
import {Memoji} from './Animoji';

export const MyComposition = () => {
	return (
		<AbsoluteFill>
			<Background />
			<Slowed>
				<Dots />
				<RedHearts />
				<YellowHearts />
				<Stars />
			</Slowed>
			<Memoji />
		</AbsoluteFill>
	);
};
