'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { ReviewHeader, MinimalDashboardSkeleton } from '@widgets';

const TestingDashboard = dynamic(() => import('@widgets/TestingDashboard').then(mod => mod.TestingDashboard), {
	ssr: false,
	loading: () => <MinimalDashboardSkeleton />,
});

const Testing = () => (
	<main className='from-background to-background/95 dark:from-background dark:to-background/95 min-h-screen bg-gradient-to-br'>
		<ReviewHeader />
		<Suspense fallback={<MinimalDashboardSkeleton />}>
			<TestingDashboard />
		</Suspense>
	</main>
);

export default Testing;
