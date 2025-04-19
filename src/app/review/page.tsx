import { ReviewHeader, CodeReviewForm, ReviewResults } from '@widgets';

const Review = () => (
	<main className='from-background to-background/95 dark:from-background dark:to-background/95 min-h-screen bg-gradient-to-br'>
		<ReviewHeader />
		<div className='container mx-auto px-4 py-8'>
			<h1 className='mb-8 text-center text-3xl font-bold'>Code Review</h1>
			<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
				<CodeReviewForm />
				<ReviewResults />
			</div>
		</div>
	</main>
);

export default Review;
