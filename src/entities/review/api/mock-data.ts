import type { IReviewResult, IReviewIssue } from '../types';

const getMockReviewResult = (code: string, language: string): IReviewResult => {
	const codeLength = code.length;
	const hasComments = code.includes('//') || code.includes('/*');
	const hasVariables = code.includes('var ') || code.includes('let ') || code.includes('const ');
	const hasFunctions = code.includes('function') || code.includes('=>') || code.includes('def ');

	let score = 70;
	if (codeLength > 500) score -= 5;
	if (hasComments) score += 10;
	if (!hasVariables && codeLength > 100) score -= 10;
	if (hasFunctions) score += 5;

	score = Math.max(0, Math.min(100, score));

	const issues: IReviewIssue[] = [];

	if (!hasComments && codeLength > 100) {
		issues.push({
			id: '1',
			severity: 'info',
			message: 'Отсутствуют комментарии в коде',
			line: 1,
			column: 1,
		});
	}

	if (code.includes('console.log')) {
		issues.push({
			id: '2',
			severity: 'warning',
			message: 'Обнаружены отладочные console.log',
			line: code.indexOf('console.log') + 1,
			column: 1,
			code: code.substring(code.indexOf('console.log'), code.indexOf('console.log') + 'console.log'.length + 20),
		});
	}

	if (code.includes('eval(')) {
		issues.push({
			id: '3',
			severity: 'critical',
			message: 'Использование eval() представляет угрозу безопасности',
			line: code.indexOf('eval(') + 1,
			column: 1,
			code: code.substring(code.indexOf('eval('), code.indexOf('eval(') + 'eval('.length + 15),
		});
	}

	const suggestions = [];

	if (language === 'javascript' || language === 'typescript') {
		suggestions.push({
			id: '1',
			message: 'Используйте современный синтаксис JavaScript',
			code: '// Вместо\nvar x = 5;\n\n// Используйте\nconst x = 5;',
			explanation:
				'const и let имеют блочную область видимости и помогают избежать ошибок, связанных с hoisting.',
		});

		suggestions.push({
			id: '2',
			message: 'Используйте async/await вместо цепочек промисов',
			code: "// Вместо\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data));\n\n// Используйте\nasync function fetchData() {\n  const response = await fetch('/api/data');\n  const data = await response.json();\n  console.log(data);\n}",
			explanation: 'async/await делает асинхронный код более читаемым и упрощает обработку ошибок.',
		});
	} else if (language === 'python') {
		suggestions.push({
			id: '1',
			message: 'Используйте f-строки для форматирования',
			code: "# Вместо\nname = 'World'\nprint('Hello, {}'.format(name))\n\n# Используйте\nprint(f'Hello, {name}')",
			explanation: 'f-строки более читаемы и эффективны для форматирования строк в Python 3.6+.',
		});
	}

	return {
		summary: `Проанализирован ${codeLength > 300 ? 'большой' : 'небольшой'} фрагмент кода на языке ${language}. ${
			issues.length > 0 ? `Найдено ${issues.length} проблем` : 'Серьезных проблем не обнаружено'
		}. ${suggestions.length > 0 ? `Предложено ${suggestions.length} улучшений` : ''}`,
		issues,
		suggestions,
		score,
	};
};

export { getMockReviewResult };
