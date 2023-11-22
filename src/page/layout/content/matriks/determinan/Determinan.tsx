import { Button, Form } from "antd";
import FormBuilder from "antd-form-builder";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { Matrix } from "../aritmatika/Aritmatika.interface";
import MatriksField from "../components/MatriksField";
import MatrixDisplay from "../components/MatriksDisplayComponent";
import "./../Matrix.css"

export default function DeterminanMatrix() {
  const [form] = useForm()
  const [format, setFormat] = useState([2, 2])
  const [result, setResult] = useState<Matrix>([])

  const meta = {
    columns: 1,
    colon: false,
    fields: [
      {
        key: 'dimension',
        label: 'Dimensi',
        widget: 'select',
        options: ["1 x 2", "2 x 2", "3 x 3"],
        initialValue: "2 x 2",
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 4 }
        },
      },
      {
        key: 'matriks_a',
        label: 'Matriks A',
        required: true,
        message: 'Matriks harus diisi',
        initialValue: "",
        widget: MatriksField,
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 12 }
        },
        widgetProps: {
          format: format
        }
      }
    ]
  }

  function setDimension(value: string, format: number[]) {
    switch (value) {
      case "1 x 2":
        return [1, 2]
      case "2 x 2":
        return [2, 2]
      case "3 x 3":
        return [3, 3]
      default:
        return format
    }
  }

  const onFieldsChange = (e: any) => {
    const value = form.getFieldValue("dimension")

    if (value !== format) {
      setFormat(setDimension(value, format))
    }
  }

  const onFinish = (e: any) => {
    
  }

  return (
    <div className="determinan-matrix p-10">
      <Form
        name="basic"
        style={{ width: '1000px' }}
        layout="horizontal"
        size="large"
        labelAlign="left"
        form={form}
        // onFinish={onFinish}
        onFieldsChange={onFieldsChange}
      >
        <FormBuilder form={form} meta={meta} />
        <Form.Item>
          <Button
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
        <div className="flex">
          <h1 className="text-2xl mr-10">Hasil :</h1>
          {result?.length ? <MatrixDisplay matrix={result} /> : null}
        </div>
      </Form>
    </div>
  )
}