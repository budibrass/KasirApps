import React from 'react';
import { Layout, Menu } from 'antd';
import { HistoryOutlined } from "@ant-design/icons";
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const location = useLocation();
  
    return (
        <Sider
            width={230}
            className="site-layout-background"
            style={{
              backgroundColor: "#61d4b5",
              fontFamily: "'Mochiy Pop One', sans-serif",
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={location.pathname}
              // defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <Menu.Item key="/">
                <Link to="/"> <i className="fas fa-utensils" style={{ marginRight: "10px" }}></i>Makanan </Link>
              </Menu.Item>
              <Menu.Item key="/drinks">
                <Link to="/drinks"> <i className="fas fa-coffee" style={{ marginRight: "10px" }}></i>Minuman </Link>
              </Menu.Item>
              <Menu.Item key="/snacks">
                <Link to="/snacks"> <i className="fas fa-hamburger" style={{ marginRight: "10px" }}></i>Cemilan </Link>
              </Menu.Item>
              <Menu.Item icon={<HistoryOutlined />} key="/history">
                <Link to="/history">History Pemesanan</Link>
              </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default App
