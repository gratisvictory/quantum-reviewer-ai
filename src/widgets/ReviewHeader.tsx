'use client';

import { Button } from '@shared/ui/button';
import { ThemeToggle } from '@features/theme-mode';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ReviewHeader = () => {
	return (
		<motion.header
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur'
		>
			<div className='container flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<span className='text-xl font-bold'>
						<span className='text-cyan-400'>Quantum</span> <span className='text-white'>ReviewerAI</span>
					</span>
				</Link>
				<div className='flex items-center gap-4'>
					<ThemeToggle />
					<Link href='/'>
						<Button variant='outline' className='rounded-full'>
							На главную
						</Button>
					</Link>
				</div>
			</div>
		</motion.header>
	);
};

export { ReviewHeader };
