'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { motion } from 'framer-motion';

interface IPerformanceMetricsChartProps {
	code: string;
}

const PerformanceMetricsChart = ({ code }: IPerformanceMetricsChartProps) => {
	const codeLength = code.length;
	const complexity = Math.min(100, Math.max(10, codeLength / 50));

	const normalizedComplexity = Math.min(100, complexity);
	const executionTime = Math.min(100, Math.max(10, codeLength / 100));
	const memoryUsage = Math.min(100, Math.max(20, codeLength / 80));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Метрики производительности</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-6'>
					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Цикломатическая сложность</span>
							<span>{normalizedComplexity.toFixed(1)}</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className={`h-full ${normalizedComplexity > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
								initial={{ width: 0 }}
								animate={{ width: `${normalizedComplexity}%` }}
								transition={{ duration: 0.5 }}
							/>
						</div>
						<p className='text-muted-foreground mt-1 text-xs'>
							{normalizedComplexity > 50 ?
								'Высокая сложность кода может затруднить тестирование'
							:	'Хорошая сложность кода, легко тестировать'}
						</p>
					</div>

					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Время выполнения (относительно)</span>
							<span>{executionTime.toFixed(1)}мс</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className={`h-full ${executionTime > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
								initial={{ width: 0 }}
								animate={{ width: `${executionTime}%` }}
								transition={{ duration: 0.5, delay: 0.1 }}
							/>
						</div>
					</div>

					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Использование памяти (относительно)</span>
							<span>{memoryUsage.toFixed(1)}МБ</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className={`h-full ${memoryUsage > 60 ? 'bg-yellow-500' : 'bg-green-500'}`}
								initial={{ width: 0 }}
								animate={{ width: `${memoryUsage}%` }}
								transition={{ duration: 0.5, delay: 0.2 }}
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export { PerformanceMetricsChart };
