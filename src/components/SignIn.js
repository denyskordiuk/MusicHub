import {Button, Col, Form, Input, Row, Typography} from "antd";
import {Link} from "react-router-dom";

const SignIn = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Row>
            <Col span={8} offset={8} style={{backgroundColor: "rgba(103, 149, 121, 0.4)"}}>
                <Typography.Title>Sign In</Typography.Title>
                <Form
                    name="formSignIn"
                    wrapperCol={{span: 18, offset: 4}}
                    labelCol={{span: 18, offset: 4}}
                    layout={"vertical"}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Login"
                        name="login"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your login!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Row justify={"space-around"}>
                            <Button>
                                <Link to={'/signUp'}>Sign Up</Link>
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Row>
                    </Form.Item>
                </Form>
            </Col>

        </Row>
    )
}

export default SignIn;