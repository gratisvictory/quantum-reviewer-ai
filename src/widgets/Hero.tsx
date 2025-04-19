'use client';

import { Button } from '@shared/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => (
	<section className='py-20 md:py-32'>
		<div className='container px-4 md:px-6'>
			<div className='flex flex-col items-center space-y-10 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='space-y-2'
				>
					<h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl'>
						<span className='gradient-text'>Meet your AI Reviewer</span>
					</h1>
					<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl'>
						Streamline your code quality
					</h2>
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className='text-muted-foreground max-w-[700px] md:text-xl'
				>
					QuantumReviewerAI — ваш персональный ассистент для автоматического анализа и ревью кода. Экономьте
					время, находите ошибки и улучшайте проекты с помощью искусственного интеллекта.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className='flex flex-col gap-4 sm:flex-row'
				>
					<Link href='/review'>
						<Button className='gradient-button rounded-full px-8 py-6 text-lg'>
							<span className='flex items-center gap-2'>
								<span className='text-xl'>✨</span>
								Новый AI для ревью кода
							</span>
						</Button>
					</Link>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className='mt-12 flex flex-col gap-4 sm:flex-row'
				>
					<Link href='/review'>
						<Button className='gradient-button rounded-full px-8 py-6 text-lg'>Опробовать бесплатно</Button>
					</Link>
					<Link href='/'>
						<Button variant='outline' className='rounded-full px-8 py-6 text-lg'>
							Войти
						</Button>
					</Link>
				</motion.div>
			</div>
		</div>
	</section>
);

export { Hero };
