import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L15 12l-2.293-2.293a1 1 0 010-1.414L15 6zm-5 8l2.293 2.293a1 1 0 010 1.414L10 21l-2.293-2.293a1 1 0 010-1.414L10 14zm10-4l2.293 2.293a1 1 0 010 1.414L17 21l-2.293-2.293a1 1 0 010-1.414L17 14z" />
    </svg>
);
