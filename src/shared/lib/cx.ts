import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cx = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cx };
