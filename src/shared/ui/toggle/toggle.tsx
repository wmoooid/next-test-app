'use client';

import * as Toggle from '@radix-ui/react-toggle';

import styles from './toggle.module.css';

type UIToggleProps = {
    children: React.ReactNode;
    isPressed: boolean;
    withHighlight?: boolean;
};

export default function UIToggle({ children, isPressed, withHighlight }: UIToggleProps) {
    return (
        <Toggle.Root pressed={isPressed} className={`${styles.root} ${withHighlight ? styles.highlight : ''}`}>
            {children}
        </Toggle.Root>
    );
}
