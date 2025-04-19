'use client';

import type { IReviewResult, IReviewIssue, IReviewSuggestion } from '@entities/review/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button, Badge } from '@shared/ui';
import { AlertCircle, AlertTriangle, Info, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReviewStore } from '@entities/review/store';
import { useRouter } from 'next/navigation';

interface ReviewResultProps {
	review: IReviewResult;
}

const severityIcons = {
	critical: <AlertCircle className='text-destructive h-4 w-4' />,
	warning: <AlertTriangle className='h-4 w-4 text-yellow-500' />,
	info: <Info className='h-4 w-4 text-blue-500' />,
};

const severityLabels = {
	critical: 'Критично',
	warning: 'Предупреждение',
	info: 'Информация',
};

const ReviewResult = ({ review }: ReviewResultProps) => {
	const { summary, issues, suggestions, score } = review;
	const { useMockData, code, setTestingData } = useReviewStore();
	const router = useRouter();

	const getScoreColor = (score: number) => {
		if (score >= 80) return 'text-green-500';
		if (score >= 60) return 'text-yellow-500';
		return 'text-red-500';
	};

	const handleViewTestingDashboard = () => {
		setTestingData({ code, review });
		router.push('/testing');
	};

	return (
		<div className='space-y-6'>
			<div className='flex items-center justify-between'>
				<div>
					<h3 className='text-lg font-medium'>Общая оценка</h3>
					<p className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}/100</p>
				</div>
				<div className='text-right'>
					<Badge
						variant={
							score >= 80 ? 'default'
							: score >= 60 ?
								'outline'
							:	'destructive'
						}
					>
						{score >= 80 ?
							'Хороший код'
						: score >= 60 ?
							'Требует улучшений'
						:	'Требует серьезной доработки'}
					</Badge>
				</div>
			</div>

			{useMockData && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					className='bg-primary/10 border-primary/20 rounded-lg border p-4'
				>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-primary font-medium'>Используются тестовые данные</h3>
							<p className='text-muted-foreground text-sm'>
								Анализ выполнен с использованием моковых данных для демонстрации функциональности
							</p>
						</div>
						<Button onClick={handleViewTestingDashboard} variant='outline' className='gap-2'>
							<span>Узнать больше о тестировании</span>
							<ExternalLink className='h-4 w-4' />
						</Button>
					</div>
				</motion.div>
			)}

			<Card>
				<CardHeader>
					<CardTitle>Сводка</CardTitle>
				</CardHeader>
				<CardContent>
					<p>{summary}</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Проблемы ({issues.length})</CardTitle>
					<CardDescription>Выявленные проблемы в коде</CardDescription>
				</CardHeader>
				<CardContent>
					{issues.length > 0 ?
						<div className='space-y-4'>
							{issues.map((issue, index) => (
								<motion.div
									key={issue.id}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<IssueItem issue={issue} />
								</motion.div>
							))}
						</div>
					:	<div className='flex items-center justify-center py-6'>
							<div className='text-muted-foreground flex items-center gap-2'>
								<CheckCircle className='h-5 w-5 text-green-500' />
								<span>Проблем не обнаружено</span>
							</div>
						</div>
					}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Рекомендации ({suggestions.length})</CardTitle>
					<CardDescription>Предложения по улучшению кода</CardDescription>
				</CardHeader>
				<CardContent>
					{suggestions.length > 0 ?
						<div className='space-y-4'>
							{suggestions.map((suggestion, index) => (
								<motion.div
									key={suggestion.id}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
								>
									<SuggestionItem suggestion={suggestion} />
								</motion.div>
							))}
						</div>
					:	<div className='flex items-center justify-center py-6'>
							<p className='text-muted-foreground'>Нет рекомендаций</p>
						</div>
					}
				</CardContent>
			</Card>
		</div>
	);
};

const IssueItem = ({ issue }: { issue: IReviewIssue }) => (
	<div className='rounded-lg border p-4'>
		<div className='flex items-start gap-2'>
			<div className='mt-0.5'>{severityIcons[issue.severity]}</div>
			<div className='flex-1'>
				<div className='flex items-center justify-between'>
					<h4 className='font-medium'>{issue.message}</h4>
					<Badge variant='outline'>{severityLabels[issue.severity]}</Badge>
				</div>
				{issue.line && (
					<p className='text-muted-foreground mt-1 text-sm'>
						Строка: {issue.line}
						{issue.column ? `, Столбец: ${issue.column}` : ''}
					</p>
				)}
				{issue.code && (
					<pre className='bg-muted mt-2 overflow-x-auto rounded p-2 text-sm'>
						<code>{issue.code}</code>
					</pre>
				)}
			</div>
		</div>
	</div>
);

const SuggestionItem = ({ suggestion }: { suggestion: IReviewSuggestion }) => (
	<div className='rounded-lg border p-4'>
		<h4 className='font-medium'>{suggestion.message}</h4>
		{suggestion.code && (
			<pre className='bg-muted mt-2 overflow-x-auto rounded p-2 text-sm'>
				<code>{suggestion.code}</code>
			</pre>
		)}
		<p className='text-muted-foreground mt-2 text-sm'>{suggestion.explanation}</p>
	</div>
);

export { ReviewResult };
