import React from 'react';
import Button from './Button';

export default  {
    title: 'button',
    component: Button,
}

export const Primary = () => <Button buttonType='primary'>Primary</Button>
export const Secondary = () => <Button buttonType='secondary'>Secondary</Button>