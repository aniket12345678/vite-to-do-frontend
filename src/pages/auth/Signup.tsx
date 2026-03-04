import { Button, Card, Col, Form, Row, Typography, Divider } from 'antd';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import * as Yup from 'yup';

const { Title, Text } = Typography;

const Signup = () => {
    const navigate = useNavigate();

    const validate_fields = Yup.object().shape({
        first_name: Yup.string().required('Enter first name'),
        last_name: Yup.string().required('Enter last name'),
        email: Yup.string().email('Invalid email').required('Enter email'),
        password: Yup.string().min(7, 'min 7 characters').max(15, 'max 15 characters').required('Enter password'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm your password'),
    });

    const {
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            password: '',
            confirm_password: '',
        },
        validationSchema: validate_fields,
        onSubmit: (data) => {
            console.log(data);
        },
    });

    return (
        <Row
            justify="center"
            align="middle"
            style={{ minHeight: '100vh', background: '#f5f7fa' }}
        >
            <Col xs={22} sm={18} md={14} lg={10}>
                <Card style={{ borderRadius: 12 }}>
                    <Title level={3} style={{ textAlign: 'center' }}>
                        Create Account
                    </Title>
                    <Text type="secondary" style={{ display: 'block', textAlign: 'center' }}>
                        Sign up to get started
                    </Text>

                    <Divider />

                    <Form layout="vertical" onSubmitCapture={handleSubmit}>
                        <Row
                            gutter={12}
                        >
                            <Col md={12}>
                                <FormInput
                                    placeholder="First Name"
                                    name="first_name"
                                    value={values}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Col>
                            <Col md={12}>
                                <FormInput
                                    placeholder="Last Name"
                                    name="last_name"
                                    value={values}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Col>
                        </Row>

                        <Row gutter={12}>
                            <Col span={12}>
                                <FormInput
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={values}
                                    onChange={handleChange}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    placeholder="Phone Number"
                                    validateStatus={errors.phone_number ? 'error' : ''}
                                    help={errors.phone_number}
                                >
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={values.phone_number}
                                        onChange={(val) =>
                                            setFieldValue('phone_number', val ?? '')
                                        }
                                        className="phone-input"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <FormInput
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={values}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />

                        <FormInput
                            placeholder="Confirm Password"
                            type="password"
                            name="confirm_password"
                            value={values}
                            onChange={handleChange}
                            errors={errors}
                            touched={touched}
                        />

                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            style={{ marginTop: 16 }}
                        >
                            Sign Up
                        </Button>

                        <Text style={{ display: 'block', textAlign: 'center', marginTop: 12 }}>
                            Already have an account?{' '}
                            <Button type="link" onClick={() => navigate('/auth')}>
                                Sign in
                            </Button>
                        </Text>
                    </Form>
                </Card>
            </Col>
        </Row>
    );
};

export default Signup;