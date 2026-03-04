import { Button, Card, Col, Form, Typography, Row, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const { Title, Text } = Typography;

const Signin = () => {
    const navigate = useNavigate();

    const validate_fields = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Enter email'),
        password: Yup.string().required('Enter password'),
    });

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validate_fields,
        onSubmit: (data) => {
            console.log(data);
        },
    });

    return (
        <div>
            <Row
                justify="center"
                align="middle"
                style={{ minHeight: '100vh', background: '#f5f7fa' }}
            >
                <Col
                    xs={22} sm={18} md={14} lg={10}
                >
                    <Card style={{ borderRadius: 12 }}>
                        <Title level={3} style={{ textAlign: 'center' }}>
                            Sign in
                        </Title>

                        <Divider />
                        <Form onSubmitCapture={handleSubmit}>
                            <Row gutter={6}>
                                <Col md={24}>
                                    <FormInput
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        value={values}
                                        onChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                    />
                                    {/* <Input type={'text'} placeholder='Email' /> */}
                                </Col>
                                <Col md={24}>
                                    {/* <Input type={'text'} placeholder='Password' /> */}
                                    <FormInput
                                        placeholder="Password"
                                        type="password"
                                        name="password"
                                        value={values}
                                        onChange={handleChange}
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Col>
                            </Row>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                size="large"
                                style={{ marginTop: 16 }}
                            >
                                Sign in
                            </Button>

                            <Text style={{ display: 'block', textAlign: 'center', marginTop: 12 }}>
                                Don't have an account?{' '}
                                <Button type="link" onClick={() => navigate('/auth/signup')}>
                                    Sign up
                                </Button>
                            </Text>
                        </Form>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Signin