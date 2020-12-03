import React from 'react';
import Spinner from './Spinner.jsx';

export const Default = (args) => <Spinner {...args} />;

export default {
    title: 'Spinner',
    component: Spinner,
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
