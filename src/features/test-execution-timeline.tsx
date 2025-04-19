'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { motion } from 'framer-motion';

interface ITestExecutionTimelineProps {
	code: string;
}

const TestExecutionTimeline = ({ code }: ITestExecutionTimelineProps) => {
	const codeLength = code.length;
	const testCount = Math.max(5, Math.min(20, Math.floor(codeLength / 100)));

	const tests = Array.from({ length: testCount }, (_, i) => {
		const duration = Math.random() * 500 + 50;
		const status = Math.random() > 0.2 ? 'passed' : 'failed';
		return {
			id: i + 1,
			name: `Test ${i + 1}`,
			duration,
			status,
		};
	});

	const sortedTests = [...tests].sort((a, b) => b.duration - a.duration);

	const maxDuration = Math.max(...tests.map(t => t.duration));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Выполнение тестов</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className='flex justify-between text-sm font-medium'>
						<span>Тест</span>
						<span>Длительность (мс)</span>
					</div>
					<div className='space-y-3'>
						{sortedTests.slice(0, 8).map(test => (
							<div key={test.id} className='space-y-1'>
								<div className='flex justify-between text-sm'>
									<span className='flex items-center gap-2'>
										<span
											className={`h-2 w-2 rounded-full ${test.status === 'passed' ? 'bg-green-500' : 'bg-red-500'}`}
										></span>
										<span>{test.name}</span>
									</span>
									<span>{test.duration.toFixed(0)} мс</span>
								</div>
								<div className='bg-muted h-2 overflow-hidden rounded-full'>
									<motion.div
										className={`h-full ${test.status === 'passed' ? 'bg-green-500' : 'bg-red-500'}`}
										initial={{ width: 0 }}
										animate={{ width: `${(test.duration / maxDuration) * 100}%` }}
										transition={{ duration: 0.5, delay: test.id * 0.05 }}
									/>
								</div>
							</div>
						))}
					</div>
					{testCount > 8 && (
						<p className='text-muted-foreground mt-2 text-center text-xs'>
							Показаны 8 из {testCount} тестов
						</p>
					)}
				</div>
			</CardContent>
		</Card>
	);
};

export { TestExecutionTimeline };
