import { Toaster, TooltipProvider } from '@shared/ui';
import { Inter, Outfit } from 'next/font/google';
import { QueryProvider, NextThemesProvider } from '@app/_providers';
import { cx } from '@shared/lib';
import type { Metadata, Viewport } from 'next';
import type { FC, ReactNode } from 'react';
import '@shared/styles/globals.css';

const inter = Inter({
	subsets: [
		'latin',
		'cyrillic',
	],
	variable: '--font-inter',
	display: 'swap',
});

const outfit = Outfit({
	subsets: ['latin'],
	variable: '--font-outfit',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'QuantumReviewerAI - Интеллектуальный анализ и ревью кода',
	description:
		'QuantumReviewerAI — ваш персональный ассистент для автоматического анализа и ревью кода. Экономьте время, находите ошибки и улучшайте проекты с помощью искусственного интеллекта.',
	keywords: [
		'AI code review',
		'code analysis',
		'quantum AI',
		'code quality',
		'automated code review',
		'developer tools',
	],
	authors: [{ name: 'QuantumReviewerAI Team' }],
	creator: 'QuantumReviewerAI',
	publisher: 'QuantumReviewerAI',
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: 'https://quantumreviewerai.com',
		title: 'QuantumReviewerAI - Интеллектуальный анализ и ревью кода',
		description: 'Автоматический анализ и ревью кода с помощью искусственного интеллекта',
		siteName: 'QuantumReviewerAI',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0f172a' },
	],
	width: 'device-width',
	initialScale: 1,
};

interface IRootLayoutProps {
	children: ReactNode;
}

const Layout: FC<Readonly<IRootLayoutProps>> = ({ children }) => {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body
				className={cx(
					inter.variable,
					outfit.variable,
					'bg-slate-50 font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100',
				)}
			>
				<NextThemesProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<QueryProvider>
						<TooltipProvider>
							{children}
							<Toaster />
						</TooltipProvider>
					</QueryProvider>
				</NextThemesProvider>
			</body>
		</html>
	);
};

export default Layout;
