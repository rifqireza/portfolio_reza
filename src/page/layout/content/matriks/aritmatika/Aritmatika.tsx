import FormBuilder from "antd-form-builder"
import { useForm } from "antd/es/form/Form"

export default function Aritmatika() {
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
        message: 'Username harus diisi',
        initialValue: ""
      },
    ]
  }

  return (
    <div className="aritmatika-page-layout">
      <FormBuilder form={form} meta={meta} />
    </div>
  )
}