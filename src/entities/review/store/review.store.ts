'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IReviewResult } from '@entities/review/types';

interface ITestingData {
	code: string;
	review: IReviewResult;
}

interface IReviewState {
	code: string;
	review: IReviewResult | null;
	isLoading: boolean;
	useMockData: boolean;
	testingData: ITestingData | null;
	setCode: (code: string) => void;
	setReview: (review: IReviewResult) => void;
	setIsLoading: (isLoading: boolean) => void;
	setUseMockData: (useMockData: boolean) => void;
	setTestingData: (data: ITestingData) => void;
}

const useReviewStore = create<IReviewState>()(
	persist(
		set => ({
			code: '',
			review: null,
			isLoading: false,
			useMockData: true,
			testingData: null,
			setCode: code => set({ code }),
			setReview: review => set({ review }),
			setIsLoading: isLoading => set({ isLoading }),
			setUseMockData: useMockData => set({ useMockData }),
			setTestingData: testingData => set({ testingData }),
		}),
		{
			name: 'review-store',
		},
	),
);

export { useReviewStore };
