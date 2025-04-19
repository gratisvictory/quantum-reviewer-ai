'use client';

import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import type { IReviewRequest, IReviewResult } from '../types';
import { useReviewStore } from '@entities/review/store';
import { getMockReviewResult } from '@entities/review/api';

const useReviewCode = (): UseMutationResult<IReviewResult, Error, IReviewRequest> => {
	const { useMockData } = useReviewStore();

	return useMutation({
		mutationFn: async (data: IReviewRequest): Promise<IReviewResult> => {
			if (useMockData) {
				await new Promise(resolve => setTimeout(resolve, 1500));
				return getMockReviewResult(data.code, data.language);
			}

			try {
				const response = await fetch('/api/review', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					const errorData = await response.json();
					throw new Error(errorData.error || 'Failed to review code');
				}

				return response.json();
			} catch (error) {
				console.error('Error in useReviewCode:', error);
				return getMockReviewResult(data.code, data.language);
			}
		},
	});
};

export { useReviewCode };
