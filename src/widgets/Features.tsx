'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Lightbulb } from 'lucide-react';

const features = [
	{
		icon: <Zap className='h-10 w-10 text-yellow-400' />,
		title: 'Мгновенный анализ',
		description: 'Мгновенный анализ кода и выявление потенциальных проблем',
	},
	{
		icon: <Shield className='h-10 w-10 text-blue-400' />,
		title: 'Безопасность',
		description: 'Проверка безопасности и выявление уязвимостей в коде',
	},
	{
		icon: <Lightbulb className='h-10 w-10 text-pink-400' />,
		title: 'Умные рекомендации',
		description: 'Умные рекомендации по улучшению качества и производительности кода',
	},
];

const Features = () => (
	<section id='features' className='py-20'>
		<div className='container px-4 md:px-6'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='mb-12 text-center'
			>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Возможности</h2>
			</motion.div>
			<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
				{features.map((feature, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true }}
						className='bg-card/50 border-border/50 flex flex-col items-center rounded-xl border p-6 text-center backdrop-blur-sm'
					>
						<div className='bg-primary/10 mb-4 rounded-full p-4'>{feature.icon}</div>
						<h3 className='mb-2 text-xl font-bold'>{feature.title}</h3>
						<p className='text-muted-foreground'>{feature.description}</p>
					</motion.div>
				))}
			</div>
		</div>
	</section>
);

export { Features };
