import { Input } from 'antd'

interface FormProps {
    type: string,
    name: string,
    value: Record<string, any>
    onChange: () => void,
    placeholder: string,
    errors: Record<string, any>
}

const FormInput = ({ type, name, value, onChange, placeholder, errors }: FormProps) => {
    return (
        <>
            <Input
                type={type}
                value={value[name]}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
            <div style={{ textAlign: 'justify' }}>{errors[name]}</div>
        </>
    )
}

export default FormInput
