'use client';
import * as React from 'react';
import { ThemeProvider } from 'next-themes';

import type { FC, ReactNode } from 'react';

interface INextThemesProviderProps {
	children: ReactNode;
}

const NextThemesProvider: FC<INextThemesProviderProps & React.ComponentProps<typeof ThemeProvider>> = ({
	children,
	...props
}) => <ThemeProvider {...props}>{children}</ThemeProvider>;

export { NextThemesProvider };
