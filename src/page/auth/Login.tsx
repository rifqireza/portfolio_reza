import { Card, Form } from "antd";
import FormBuilder from "antd-form-builder";
import { useForm } from "antd/es/form/Form";
import "./Auth.css"
import AuthLogin from "../../interaction/auth/AuthLogin";
import CookiesService from "../../interaction/service/Cookies";
import LoadingComponent from "../component/Loading";
import { useState } from "react";
import NotificationService from "../../interaction/service/NotificationService";
import { useNavigate } from "react-router-dom";

const cookiesService = new CookiesService()
const notificationService = new NotificationService()

export default function Login() {
  const [form] = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

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

  const onFinish = (e: any) => {
    setIsLoading(true)
    AuthLogin(e.username, e.password).then(
      (res: any) => {
        let inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
        cookiesService.set('portfolio', res.accessToken, { expires: inFifteenMinutes })
        cookiesService.set('userId', res.uid, { expires: inFifteenMinutes })
        notificationService.SuccessNotif("Berhasil Login")
        setTimeout(() => {
          navigate("/web/dashboard")
        }, 1500)
      }).catch(err => {
        notificationService.ErrorNotif(err.message)
        setIsLoading(false)
      })
  }

  return (
    <div className="my-login">
      <Card className="text-center" style={{ width: '400px' }}>
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
          <span>Belum memiliki akun? <a className="text-blue-500" href="/portfolio_reza/register">daftar disini</a></span>
        </Form>
      </Card>
      <LoadingComponent isLoading={isLoading} />
    </div>
  )
}