'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@shared/ui';
import { useReviewStore } from '@entities/review/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { ReviewResult } from '@entities/review';

const ReviewResults = () => {
	const { review, isLoading } = useReviewStore();

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<Card className='h-full'>
				<CardHeader>
					<CardTitle>Результаты ревью</CardTitle>
				</CardHeader>
				<CardContent className='min-h-[500px]'>
					<AnimatePresence mode='wait'>
						{isLoading ?
							<motion.div
								key='loading'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='flex h-[500px] items-center justify-center'
							>
								<div className='flex flex-col items-center gap-2'>
									<Loader2 className='text-primary h-8 w-8 animate-spin' />
									<p className='text-muted-foreground text-sm'>Анализируем ваш код...</p>
								</div>
							</motion.div>
						: review ?
							<motion.div
								key='results'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<ReviewResult review={review} />
							</motion.div>
						:	<motion.div
								key='empty'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className='flex h-[500px] items-center justify-center'
							>
								<p className='text-muted-foreground text-center'>
									Отправьте ваш код для получения ревью от AI ассистента
								</p>
							</motion.div>
						}
					</AnimatePresence>
				</CardContent>
			</Card>
		</motion.div>
	);
};

export { ReviewResults };
