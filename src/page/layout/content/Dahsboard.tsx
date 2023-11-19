import { Content } from "antd/es/layout/layout";

export default function Dashboard(props: any) {
  return (
    <Content
      className="bg-blue-500 flex justify-center items-center"
    >
      <div>{props.name}</div>
    </Content>
  )
}