import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  UploadOutlined,
  UserOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { signal } from "@preact/signals-react";
import { useNavigate } from "react-router-dom";

export const collapsed = signal<boolean>(false)

export default function SidebarItem() {
  const navigate = useNavigate()

  return (
    <Sider trigger={null} collapsible collapsed={collapsed.value}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Profile',
          },
          {
            key: 'matriks',
            icon: <TableOutlined />,
            label: 'Matriks',
            children: [
              {
                key: 'aritmatika',
                label: 'Aritmatika',
                onClick: () => navigate("/web/matrix/aritmethics")
              }
            ]
          },
          {
            key: 'user',
            icon: <UploadOutlined />,
            label: 'User',
            children: [
              {
                key: 'create',
                label: 'Create',
                onClick: () => navigate("/web/users/create")
              }
            ]
          },
        ]}
      />
    </Sider>
  )
}