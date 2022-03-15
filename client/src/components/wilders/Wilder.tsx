import React from 'react';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { wildersRequest } from '../../api';

interface IWilder {
    id: number;
    name: string;
    city: string;
}

const Wilder = ({ id, name, city }: IWilder) => {
    const handleDelete = async (id: number) => {
        try {
            await wildersRequest.delete(id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Card
            hoverable
            style={{ width: '25%', backgroundColor: 'burlywood', margin: 10 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete" onClick={() => handleDelete(id)} />,
            ]}>
            <Meta title={name} />
            <Meta title={city} />
            <Meta title="Skills" />
        </Card>
    );
};

export default Wilder;
