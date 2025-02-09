import { useCallback } from 'react';

import { Button, Flex, Form, Input, Layout, Typography } from 'antd';

import { IFormFields, TAuth } from './types';

import cl from './auth.module.scss';

interface props {
    auth: TAuth;
}

const AuthPage = ({ auth }: props) => {
    const isRegister = auth === 'register';

    const finishHandler = useCallback(async () => {
        if (isRegister) {
        }
    }, []);

    return (
        <Layout.Content className={cl.wrapper}>
            <Form name="auth" className={cl.form} layout="vertical" onFinish={finishHandler}>
                <Flex align="center" vertical>
                    <Typography.Title level={2}>{isRegister ? 'Создать профиль' : 'Авторизоваться'}</Typography.Title>
                    <Form.Item<IFormFields>
                        name="email"
                        rules={[{ required: true, message: 'Введите email' }]}
                        className={cl.formItem}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item<IFormFields>
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль' }]}
                        className={cl.formItem}
                    >
                        <Input placeholder="Пароль" />
                    </Form.Item>
                    {isRegister && (
                        <Form.Item<IFormFields>
                            name="copyPassword"
                            rules={[
                                { required: true, message: 'Подтвердите пароль' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Пароли не совпадают'));
                                    },
                                }),
                            ]}
                            className={cl.formItem}
                        >
                            <Input placeholder="Повтор пароля" />
                        </Form.Item>
                    )}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" className={cl.next}>
                            {isRegister ? 'Зарегистрироваться' : 'Войти'}
                        </Button>
                    </Form.Item>
                </Flex>
            </Form>
        </Layout.Content>
    );
};

export default AuthPage;
