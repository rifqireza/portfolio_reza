import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { collapsed } from "../sidebar-item/SidebarItem";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import "./HeaderItem.css"
import { useNavigate } from "react-router-dom";

export default function HeaderItem() {
  const navigate = useNavigate()

  return (
    <Header className="header-item">
      <Button
        type="text"
        icon={collapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => collapsed.value = !collapsed.value}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />

      <Button
        type="text"
        icon={<LogoutOutlined />}
        onClick={() => navigate("/login")}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}