'use client';

import { Skeleton, Card } from '@shared/ui';

const MinimalDashboardSkeleton = () => (
	<div className='animate-pulse space-y-4'>
		<div className='space-y-2'>
			<Skeleton className='bg-muted h-8 w-48 rounded-md' />
			<Skeleton className='bg-muted h-5 w-64 rounded-md' />
		</div>

		<div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
			{[
				'Качество',
				'Покрытие',
				'Производительность',
			].map(item => (
				<Card key={item} className='border-muted p-4'>
					<div className='space-y-3'>
						<Skeleton className='bg-muted h-5 w-24 rounded-md' />
						<Skeleton className='bg-muted mx-auto h-10 w-16 rounded-md' />
						<Skeleton className='bg-muted h-4 w-full rounded-md' />
					</div>
				</Card>
			))}
		</div>

		<Card className='border-muted p-4'>
			<div className='space-y-4'>
				<Skeleton className='bg-muted h-6 w-32 rounded-md' />
				<div className='space-y-2'>
					{[...Array(3)].map((_, i) => (
						<div key={i} className='flex justify-between'>
							<Skeleton className='bg-muted h-4 w-20 rounded-md' />
							<Skeleton className='bg-muted h-4 w-12 rounded-md' />
						</div>
					))}
				</div>
			</div>
		</Card>
	</div>
);

export { MinimalDashboardSkeleton };
