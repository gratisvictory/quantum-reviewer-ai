import { cx } from '@shared/lib';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cx('bg-muted animate-pulse rounded-md', className)} {...props} />;
}

export { Skeleton };
