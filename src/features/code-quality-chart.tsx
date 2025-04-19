'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { motion } from 'framer-motion';

interface ICodeQualityChartProps {
	score: number;
	maxScore: number;
}

const CodeQualityChart = ({ score, maxScore }: ICodeQualityChartProps) => {
	const percentage = (score / maxScore) * 100;
	const getColor = () => {
		if (percentage >= 80) return 'bg-green-500';
		if (percentage >= 60) return 'bg-yellow-500';
		return 'bg-red-500';
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Качество кода</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex flex-col items-center'>
					<div className='relative h-40 w-40'>
						<svg className='h-full w-full' viewBox='0 0 100 100'>
							<circle
								className='text-muted stroke-current'
								strokeWidth='10'
								stroke='currentColor'
								fill='transparent'
								r='40'
								cx='50'
								cy='50'
							/>
							<motion.circle
								className={`${getColor()} stroke-current`}
								strokeWidth='10'
								strokeLinecap='round'
								stroke='currentColor'
								fill='transparent'
								r='40'
								cx='50'
								cy='50'
								initial={{ strokeDasharray: '251.2, 251.2', strokeDashoffset: 251.2 }}
								animate={{
									strokeDashoffset: 251.2 - (percentage * 251.2) / 100,
								}}
								transition={{ duration: 1, ease: 'easeOut' }}
							/>
						</svg>
						<div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
							<div className='text-3xl font-bold'>{score}</div>
						</div>
					</div>
					<div className='mt-4 text-center'>
						<p className='text-muted-foreground text-sm'>Оценка качества кода из 100</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export { CodeQualityChart };
