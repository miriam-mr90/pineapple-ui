import React from 'react';
import Button from './Button.jsx';

export const defaultButton = (args) => <Button {...args} children='Button'/>;

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        buttonType: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['default', 'small', 'large'],
            },
        },
    },
};
