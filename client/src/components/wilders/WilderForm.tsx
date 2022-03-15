import React, { useEffect } from 'react';
import { Button, Form, Input, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { wildersRequest } from '../../api';
import { useNavigate } from 'react-router-dom';

interface IWilderForm {
    name: string;
    city: string;
    title: string;
    votes: number;
}

const WilderForm = () => {
    const navigate = useNavigate();
    const onFinish = async ({ name, city, title, votes }: IWilderForm) => {
        // setLoading(true);
        try {
            await wildersRequest.create({ name, city, skills: { title, votes } });
            navigate('/');
        } catch (err) {
            console.log(err);
        } finally {
            // setLoading(false);
        }
    };

    // useEffect(() => {
    //     const editWilderCard = async (id) => {
    //         let wilderData = await wildersRequest.find(id);
    //         console.log('data ' + wilderData);
    //     };

    // }, []);

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off">
            <Form.Item label="Name" name="name">
                <Input />
            </Form.Item>
            <Form.Item label="City" name="city">
                <Input />
            </Form.Item>
            <Form.Item label="skills" name="skills">
                <Tag className="site-tag-plus">
                    <PlusOutlined /> New Tag
                </Tag>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default WilderForm;
