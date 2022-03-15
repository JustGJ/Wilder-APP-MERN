import { Button } from 'antd';
import React from 'react';

interface IProps {
    text: string;
    click: () => void;
}

const ButtonBack = ({ text, click }: IProps) => {
    return (
        <Button className="backButton" type="primary" danger onClick={click}>
            {text}
        </Button>
    );
};

export default ButtonBack;
