'use client';

import { useReviewStore } from '@entities/review/store';
import { Switch, Label } from '@shared/ui';

const MockDataToggle = () => {
	const { useMockData, setUseMockData } = useReviewStore();

	return (
		<div className='flex items-center space-x-2'>
			<Switch id='mock-data' checked={useMockData} onCheckedChange={setUseMockData} />
			<Label htmlFor='mock-data' className='text-sm'>
				Использовать тестовые данные
			</Label>
		</div>
	);
};

export { MockDataToggle };
