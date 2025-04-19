'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Editor, { type OnMount } from '@monaco-editor/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/ui';

interface ICodeEditorProps {
	value: string;
	onChange: (value: string) => void;
	language: string;
	onLanguageChange: (language: string) => void;
}

const languageOptions = [
	{ value: 'javascript', label: 'JavaScript' },
	{ value: 'typescript', label: 'TypeScript' },
	{ value: 'python', label: 'Python' },
	{ value: 'java', label: 'Java' },
	{ value: 'csharp', label: 'C#' },
	{ value: 'cpp', label: 'C++' },
	{ value: 'go', label: 'Go' },
	{ value: 'rust', label: 'Rust' },
	{ value: 'php', label: 'PHP' },
	{ value: 'ruby', label: 'Ruby' },
];

const CodeEditor = ({ value, onChange, language, onLanguageChange }: ICodeEditorProps) => {
	const { resolvedTheme } = useTheme();
	const [
		mounted,
		setMounted,
	] = useState(false);

	useEffect(() => setMounted(true), []);

	const handleEditorDidMount: OnMount = editor => editor.focus();

	if (!mounted) return <div className='bg-muted h-full w-full' />;

	return (
		<div className='flex h-full flex-col'>
			<div className='bg-muted/50 flex items-center justify-between border-b p-2'>
				<Select value={language} onValueChange={onLanguageChange}>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Выберите язык' />
					</SelectTrigger>
					<SelectContent>
						{languageOptions.map(option => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className='flex-grow'>
				<Editor
					height='100%'
					language={language}
					value={value}
					onChange={value => onChange(value || '')}
					theme={resolvedTheme === 'dark' ? 'vs-dark' : 'light'}
					options={{
						minimap: { enabled: false },
						fontSize: 14,
						wordWrap: 'on',
						scrollBeyondLastLine: false,
						lineNumbers: 'on',
						automaticLayout: true,
					}}
					onMount={handleEditorDidMount}
				/>
			</div>
		</div>
	);
};

export { CodeEditor };
