'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { motion } from 'framer-motion';
import type { IReviewIssue } from '@entities/review/types';

interface IssuesBySeverityChartPropsInterface {
	issues: IReviewIssue[];
}

const IssuesBySeverityChart = ({ issues }: IssuesBySeverityChartPropsInterface) => {
	const criticalCount = issues.filter(issue => issue.severity === 'critical').length;
	const warningCount = issues.filter(issue => issue.severity === 'warning').length;
	const infoCount = issues.filter(issue => issue.severity === 'info').length;

	const total = criticalCount + warningCount + infoCount;
	const criticalPercentage = total > 0 ? (criticalCount / total) * 100 : 0;
	const warningPercentage = total > 0 ? (warningCount / total) * 100 : 0;
	const infoPercentage = total > 0 ? (infoCount / total) * 100 : 0;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Распределение проблем по серьезности</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Критичные</span>
							<span>{criticalCount}</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className='h-full bg-red-500'
								initial={{ width: 0 }}
								animate={{ width: `${criticalPercentage}%` }}
								transition={{ duration: 0.5 }}
							/>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Предупреждения</span>
							<span>{warningCount}</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className='h-full bg-yellow-500'
								initial={{ width: 0 }}
								animate={{ width: `${warningPercentage}%` }}
								transition={{ duration: 0.5, delay: 0.1 }}
							/>
						</div>
					</div>
					<div className='space-y-2'>
						<div className='flex justify-between text-sm'>
							<span className='font-medium'>Информационные</span>
							<span>{infoCount}</span>
						</div>
						<div className='bg-muted h-2 overflow-hidden rounded-full'>
							<motion.div
								className='h-full bg-blue-500'
								initial={{ width: 0 }}
								animate={{ width: `${infoPercentage}%` }}
								transition={{ duration: 0.5, delay: 0.2 }}
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export { IssuesBySeverityChart };
