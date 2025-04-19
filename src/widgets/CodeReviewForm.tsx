'use client';

import type React from 'react';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, Button } from '@shared/ui';
import { useReviewStore } from '@entities/review/store';
import { CodeEditor } from '@features/code-editor';
import { MockDataToggle } from '@features/mock-data-toggle';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useReviewCode } from '@entities/review/viewmodel';

const CodeReviewForm = () => {
	const { code, setCode, setReview, isLoading, setIsLoading } = useReviewStore();
	const [
		language,
		setLanguage,
	] = useState('javascript');

	const { mutateAsync: reviewCode } = useReviewCode();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!code.trim()) return;

		setIsLoading(true);
		try {
			const result = await reviewCode({ code, language });
			setReview(result);
		} catch (error) {
			console.error('Error reviewing code:', error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
			<Card className='h-full'>
				<CardHeader className='flex flex-row items-center justify-between'>
					<CardTitle>Вставьте ваш код для ревью</CardTitle>
					<MockDataToggle />
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='h-[500px] overflow-hidden rounded-md border'>
							<CodeEditor
								value={code}
								onChange={setCode}
								language={language}
								onLanguageChange={setLanguage}
							/>
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<Button
						onClick={handleSubmit}
						className='gradient-button w-full'
						disabled={isLoading || !code.trim()}
					>
						{isLoading ?
							<>
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
								Анализируем...
							</>
						:	'Отправить'}
					</Button>
				</CardFooter>
			</Card>
		</motion.div>
	);
};

export { CodeReviewForm };
