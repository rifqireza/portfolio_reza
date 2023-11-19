import { Spin } from "antd";

export default function LoadingComponent(props: any) {
  return props.isLoading ? (
    <div>
      <Spin spinning={true} fullscreen />
    </div>
  ) : null
}