'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { motion } from 'framer-motion';

interface ITestCoverageChartProps {
	code: string;
}

const TestCoverageChart = ({ code }: ITestCoverageChartProps) => {
	const codeLength = code.length;
	const coverage = Math.min(95, Math.max(60, 75 + (Math.random() * 20 - 10)));

	const statementCoverage = Math.min(100, coverage + (Math.random() * 10 - 5));
	const branchCoverage = Math.min(100, coverage + (Math.random() * 15 - 7.5));
	const functionCoverage = Math.min(100, coverage + (Math.random() * 8 - 4));
	const lineCoverage = coverage;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Покрытие тестами</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className='flex items-center justify-between'>
						<span className='text-sm font-medium'>Общее покрытие</span>
						<span className='text-sm font-bold'>{coverage.toFixed(1)}%</span>
					</div>
					<div className='space-y-4'>
						<div className='space-y-2'>
							<div className='flex justify-between text-sm'>
								<span>Операторы</span>
								<span>{statementCoverage.toFixed(1)}%</span>
							</div>
							<div className='bg-muted h-2 overflow-hidden rounded-full'>
								<motion.div
									className='bg-primary h-full'
									initial={{ width: 0 }}
									animate={{ width: `${statementCoverage}%` }}
									transition={{ duration: 0.5 }}
								/>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='flex justify-between text-sm'>
								<span>Ветвления</span>
								<span>{branchCoverage.toFixed(1)}%</span>
							</div>
							<div className='bg-muted h-2 overflow-hidden rounded-full'>
								<motion.div
									className='h-full bg-cyan-500'
									initial={{ width: 0 }}
									animate={{ width: `${branchCoverage}%` }}
									transition={{ duration: 0.5, delay: 0.1 }}
								/>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='flex justify-between text-sm'>
								<span>Функции</span>
								<span>{functionCoverage.toFixed(1)}%</span>
							</div>
							<div className='bg-muted h-2 overflow-hidden rounded-full'>
								<motion.div
									className='h-full bg-purple-500'
									initial={{ width: 0 }}
									animate={{ width: `${functionCoverage}%` }}
									transition={{ duration: 0.5, delay: 0.2 }}
								/>
							</div>
						</div>
						<div className='space-y-2'>
							<div className='flex justify-between text-sm'>
								<span>Строки</span>
								<span>{lineCoverage.toFixed(1)}%</span>
							</div>
							<div className='bg-muted h-2 overflow-hidden rounded-full'>
								<motion.div
									className='h-full bg-pink-500'
									initial={{ width: 0 }}
									animate={{ width: `${lineCoverage}%` }}
									transition={{ duration: 0.5, delay: 0.3 }}
								/>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export { TestCoverageChart };
