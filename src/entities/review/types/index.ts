export interface IReviewResult {
	summary: string;
	issues: IReviewIssue[];
	suggestions: IReviewSuggestion[];
	score: number;
}

export interface IReviewIssue {
	id: string;
	severity: 'critical' | 'warning' | 'info';
	message: string;
	line?: number;
	column?: number;
	code?: string;
}

export interface IReviewSuggestion {
	id: string;
	message: string;
	code?: string;
	explanation: string;
}

export interface IReviewRequest {
	code: string;
	language: string;
}
