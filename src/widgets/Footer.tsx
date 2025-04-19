const Footer = () => (
	<footer className='border-border/40 border-t py-6 md:py-8'>
		<div className='container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between'>
			<p className='text-muted-foreground text-center text-sm md:text-left'>
				&copy; {new Date().getFullYear()} QuantumReviewerAI. All rights reserved.
			</p>
			<div className='flex gap-4'>
				<a href='#' className='text-muted-foreground text-sm hover:underline'>
					Terms of Use
				</a>
				<a href='#' className='text-muted-foreground text-sm hover:underline'>
					Privacy Policy
				</a>
			</div>
		</div>
	</footer>
);

export { Footer };
