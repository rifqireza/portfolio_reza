import { Form } from "antd"
import FormBuilder from "antd-form-builder"
import { useForm } from "antd/es/form/Form"
import { useEffect, useState } from "react"
import LoadingComponent from "../../../component/Loading"
import { AddDataUser, GetDataUser } from "../../../../config/database/Database"

export default function CreateUser() {
  const [form] = useForm()
  const [isLoading] = useState(false)

  useEffect(() => {
    GetDataUser()
  }, [])

  const meta = {
    columns: 1,
    colon: false,
    fields: [
      {
        key: 'name',
        label: 'Nama',
        required: true,
        message: 'Nama harus diisi',
        initialValue: ""
      },
      {
        key: 'age',
        label: 'Umur',
        required: true,
        widget: 'number',
        message: 'Umur harus diisi',
        initialValue: ""
      },
    ]
  }

  const onFinish = (e: any) => {
    const { name, age } = e
    AddDataUser(name, age)
  }

  return (
    <div className="w-72">
      <Form
        form={form}
        labelAlign="left"
        onFinish={onFinish}
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
      <LoadingComponent isLoading={isLoading} />
    </div>
  )
}