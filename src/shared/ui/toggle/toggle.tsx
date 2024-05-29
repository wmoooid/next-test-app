'use client';

import { CheckIcon } from '@radix-ui/react-icons';
import * as Toggle from '@radix-ui/react-toggle';

import styles from './toggle.module.css';

type UIToggleProps = {
    isChecked: boolean;
};

export default function UIToggle({ isChecked }: UIToggleProps) {
    return (
        <Toggle.Root pressed={isChecked} className={styles.root}>
            {isChecked && <CheckIcon style={{ width: '1.25rem', height: '1.25rem' }} />}
        </Toggle.Root>
    );
}
