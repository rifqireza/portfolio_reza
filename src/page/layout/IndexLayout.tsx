import { Layout, Space } from "antd";
import SidebarItem from "./sidebar-item/SidebarItem";
import HeaderItem from "./header-item/HeaderItem";
import { Outlet } from "react-router-dom";

export default function IndexLayout() {
  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
        height: '100vh'
      }}
    >
      <Layout>
        <SidebarItem />
        <Layout>
          <HeaderItem />
          <Outlet />
        </Layout>
      </Layout>
    </Space>
  )
}