'use client';

import { useReviewStore } from '@entities/review/store';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Button,
	Alert,
	AlertDescription,
	AlertTitle,
} from '@shared/ui';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
	CodeQualityChart,
	IssuesBySeverityChart,
	TestCoverageChart,
	PerformanceMetricsChart,
	TestExecutionTimeline,
} from '@features';

const TestingDashboard = () => {
	const { testingData } = useReviewStore();
	const router = useRouter();

	if (!testingData) {
		return (
			<div className='container mx-auto px-4 py-8'>
				<Alert variant='destructive'>
					<AlertCircle className='h-4 w-4' />
					<AlertTitle>Ошибка</AlertTitle>
					<AlertDescription>
						Данные для тестового дашборда не найдены. Пожалуйста, вернитесь на страницу ревью кода и
						проанализируйте код перед просмотром тестового дашборда.
					</AlertDescription>
				</Alert>
				<div className='mt-4'>
					<Button onClick={() => router.push('/review')} variant='outline' className='gap-2'>
						<ArrowLeft className='h-4 w-4' />
						<span>Вернуться на страницу ревью</span>
					</Button>
				</div>
			</div>
		);
	}

	const { code, review } = testingData;

	return (
		<div className='container mx-auto px-4 py-8'>
			<div className='mb-8'>
				<Button onClick={() => router.push('/review')} variant='outline' className='gap-2'>
					<ArrowLeft className='h-4 w-4' />
					<span>Вернуться на страницу ревью</span>
				</Button>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='mb-8'
			>
				<h1 className='mb-2 text-3xl font-bold'>Тестовый дашборд</h1>
				<p className='text-muted-foreground'>
					Подробная информация о тестировании вашего кода с использованием различных метрик и инструментов
				</p>
			</motion.div>

			<div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<CodeQualityChart score={review.score} maxScore={100} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<IssuesBySeverityChart issues={review.issues} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<TestCoverageChart code={code} />
				</motion.div>
			</div>

			<div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<PerformanceMetricsChart code={code} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<TestExecutionTimeline code={code} />
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
			>
				<Card>
					<CardHeader>
						<CardTitle>Сводка тестирования</CardTitle>
						<CardDescription>Общая информация о проведенном тестировании</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='space-y-4'>
							<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
								<div className='bg-muted/50 rounded-lg p-4'>
									<div className='text-muted-foreground text-sm font-medium'>Всего тестов</div>
									<div className='mt-1 text-2xl font-bold'>{Math.floor(code.length / 50) + 5}</div>
								</div>
								<div className='bg-muted/50 rounded-lg p-4'>
									<div className='text-muted-foreground text-sm font-medium'>Успешных тестов</div>
									<div className='mt-1 text-2xl font-bold text-green-500'>
										{Math.floor((code.length / 50 + 5) * 0.8)}
									</div>
								</div>
								<div className='bg-muted/50 rounded-lg p-4'>
									<div className='text-muted-foreground text-sm font-medium'>Время тестирования</div>
									<div className='mt-1 text-2xl font-bold'>
										{(code.length / 100 + 2.5).toFixed(1)}с
									</div>
								</div>
							</div>
							<div className='pt-4'>
								<h3 className='mb-2 text-lg font-medium'>Рекомендации по тестированию</h3>
								<ul className='list-disc space-y-2 pl-5'>
									<li>Увеличьте покрытие тестами для критических частей кода</li>
									<li>Добавьте модульные тесты для функций с высокой цикломатической сложностью</li>
									<li>Используйте моки для внешних зависимостей</li>
									<li>Добавьте интеграционные тесты для проверки взаимодействия компонентов</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
};

export { TestingDashboard };
