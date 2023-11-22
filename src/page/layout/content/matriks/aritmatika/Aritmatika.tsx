import FormBuilder from "antd-form-builder"
import { useForm } from "antd/es/form/Form"
import MatriksField from "../components/MatriksField"
import { Button, Form } from "antd"
import { useState } from "react"
import { AritmethicsMatrixResp, Matrix } from "./Aritmatika.interface"
import MatrixDisplay from "../components/MatriksDisplayComponent"
import NotificationService from "../../../../../interaction/service/NotificationService"
import "./../Matrix.css"
import { AritmatikaMatrixUsecase } from "./Aritmatika.usecase"

const usecase = new AritmatikaMatrixUsecase()
const notificationService = new NotificationService()

export default function AritmatikaMatrix() {
  const [form] = useForm()
  const [formatA, setFormatA] = useState([2, 2])
  const [formatB, setFormatB] = useState([2, 2])
  const [result, setResult] = useState<Matrix>([])

  const meta = {
    columns: 1,
    colon: false,
    fields: [
      {
        key: 'dimension_a',
        label: 'Dimensi A',
        widget: 'select',
        options: ["1 x 2", "2 x 2", "3 x 3"],
        initialValue: "2 x 2",
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 3 }
        },
      },
      {
        key: 'dimension_b',
        label: 'Dimensi B',
        widget: 'select',
        options: ["1 x 2", "2 x 2", "3 x 3"],
        initialValue: "2 x 2",
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 3 }
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
          format: formatA
        }
      },
      {
        key: 'operator',
        label: ' ',
        widget: 'select',
        options: ["+", "x"],
        initialValue: "+",
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 2 }
        },
      },
      {
        key: 'matriks_b',
        label: 'Matriks B',
        required: true,
        message: 'Matriks harus diisi',
        initialValue: "",
        widget: MatriksField,
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 12 }
        },
        widgetProps: {
          format: formatB
        }
      },
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

  const onFieldsChange = (_: any) => {
    const valueA = form.getFieldValue("dimension_a")
    const valueB = form.getFieldValue("dimension_b")

    if (valueA !== formatA) {
      setFormatA(setDimension(valueA, formatA))
    }

    if (valueB !== formatB) {
      setFormatB(setDimension(valueB, formatB))
    }
  }

  const onFinish = (e: any) => {
    const MatrixA: Matrix = usecase.objectToMatrix(e.matriks_a)
    const MatrixB: Matrix = usecase.objectToMatrix(e.matriks_b)

    let response: AritmethicsMatrixResp
    switch(e.operator) {
      default:
        response = usecase.addMatrices(MatrixA, MatrixB)
        break
      case 'x':
        response = usecase.multiplyMatrices(MatrixA, MatrixB)
        break
    }

    if (response.isError) {
      notificationService.ErrorNotif(response.message)
    }

    setResult(response.matrix)
  }

  return (
    <div className="aritmatika-page-layout">
      <Form
        name="basic"
        style={{ width: '1000px' }}
        layout="horizontal"
        size="large"
        labelAlign="left"
        form={form}
        onFinish={onFinish}
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