import { Input } from 'antd'

interface FormProps {
    type: string,
    name: string,
    value: Record<string, any>,
    touched: Record<string, any>,
    onChange: (e: React.ChangeEvent) => void,
    placeholder: string,
    errors: Record<string, any>
}

const FormInput = ({ type, name, value, onChange, placeholder, errors, touched }: FormProps) => {
    return (
        <>
            <Input
                type={type}
                value={value[name]}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
            />
            {touched[name] && errors[name] && <div style={{ textAlign: 'justify' }}>{errors[name]}</div>}
        </>
    )
}

export default FormInput
