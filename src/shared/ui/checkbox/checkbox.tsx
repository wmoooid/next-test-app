'use client';

import { CheckIcon } from '@radix-ui/react-icons';
import * as Toggle from '@radix-ui/react-toggle';

import styles from './checkbox.module.css';

type UICheckboxProps = {
    isChecked: boolean;
};

export default function UICheckbox({ isChecked }: UICheckboxProps) {
    return (
        <Toggle.Root pressed={isChecked} className={styles.root}>
            {isChecked && <CheckIcon />}
        </Toggle.Root>
    );
}
