import {Background} from './Background';
import {AbsoluteFill} from 'remotion';
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
