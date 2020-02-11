import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';

export interface IButton extends ButtonProps {
}

export const SuperButton: React.FC<IButton>
    = (props) => (<Button {...props} />);
