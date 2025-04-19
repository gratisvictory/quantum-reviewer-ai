import { type NextRequest, NextResponse } from 'next/server';
import type { IReviewRequest, IReviewResult } from '@entities/review/types';
import OpenAI from 'openai';
import { getMockReviewResult } from '@entities/review/api';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(request: Request | NextRequest) {
	try {
		if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.trim() === '') {
			console.log('No API key available, using mock data');
			const { code, language } = (await request.json()) as IReviewRequest;
			return NextResponse.json(getMockReviewResult(code, language), { status: 200 });
		}

		const { code, language } = (await request.json()) as IReviewRequest;
		if (!code) {
			return NextResponse.json({ error: 'Code is required' }, { status: 400 });
		}

		try {
			const completion = await openai.chat.completions.create({
				model: 'gpt-4o-mini',
				messages: [
					{
						role: 'system',
						content:
							"You are a helpful code review assistant. Analyze the provided code and provide feedback on issues, potential bugs, and suggestions for improvement. Format your response as JSON with the following structure: { summary: string, issues: Array<{ id: string, severity: 'critical' | 'warning' | 'info', message: string, line?: number, column?: number, code?: string }>, suggestions: Array<{ id: string, message: string, code?: string, explanation: string }>, score: number }",
					},
					{
						role: 'user',
						content: `Please review this ${language} code:\n\n${code}`,
					},
				],
				response_format: { type: 'json_object' },
			});

			const result = completion?.choices[0]?.message?.content;

			if (!result) throw new Error('Failed to get response from OpenAI');

			const parsedResult = JSON.parse(result) as IReviewResult;

			return NextResponse.json(parsedResult, { status: 200 });
		} catch (error) {
			console.error('OpenAI API error:', error);
			return NextResponse.json(getMockReviewResult(code, language), { status: 200 });
		}
	} catch (error) {
		console.error('Error in review API:', error);
		return NextResponse.json({ error: 'Failed to review code' }, { status: 500 });
	}
}
