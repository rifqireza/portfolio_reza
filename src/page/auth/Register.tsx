import { Card, Form } from "antd";
import FormBuilder from "antd-form-builder";
import { useForm } from "antd/es/form/Form";
import "./Auth.css"

export default function Register() {
  const [form] = useForm()

  const meta = {
    columns: 1,
    colon: false,
    fields: [
      {
        key: 'username',
        label: 'Username',
        required: true,
        message: 'Username harus diisi',
        initialValue: ""
      },
      {
        key: 'password',
        label: 'Pasword',
        required: true,
        message: 'Password harus diisi',
        initialValue: ""
      },
    ]
  }

  return (
    <div className="my-login">
      <Card className="text-center" style={{ width: '400px' }}>
        <Form
          form={form}
          labelAlign="left"
          onFinish={(e) => {
            console.log(e);
            
            window.location.href = "/portfolio_reza/web/dashboard"
          }}
        >
          <FormBuilder form={form} meta={meta} />
          <Form.Item className="form-footer">
            <button 
              type="submit"
              className="login-button"
              style={{ backgroundColor: '#007bff' }}
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}