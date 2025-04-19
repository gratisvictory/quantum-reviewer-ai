'use client';

import { Button } from '@shared/ui/button';
import { ThemeToggle } from '@features/theme-mode';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => (
	<motion.header
		initial={{ opacity: 0, y: -20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className='border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b backdrop-blur'
	>
		<div className='container flex h-16 items-center justify-between'>
			<Link href='/' className='flex items-center gap-2'>
				<span className='text-xl font-bold'>
					<span className='text-cyan-400'>Quantum</span> <span>ReviewerAI</span>
				</span>
			</Link>
			<nav className='hidden items-center gap-6 md:flex'>
				<Link href='#features' className='text-sm font-medium'>
					Возможности
				</Link>
				<Link href='#how-it-works' className='text-sm font-medium'>
					Как работает
				</Link>
				<Link href='#pricing' className='text-sm font-medium'>
					Тарифы
				</Link>
			</nav>
			<div className='flex items-center gap-4'>
				<ThemeToggle />
				<Link href='/review'>
					<Button className='gradient-button rounded-full'>Опробовать</Button>
				</Link>
			</div>
		</div>
	</motion.header>
);

export { Header };
