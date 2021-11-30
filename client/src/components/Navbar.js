import React from 'react';
import { Layout, Row, Col, Typography, Button } from 'antd';
import { LogoutOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Header } = Layout;

const App = () => {
    return (
        <Header className="header" style={{ backgroundColor: "#61d4b5" }}>
          <div className="logo" />
          <div>
            <Row justify="space-between">
              <Col>
                <Title
                  strong
                  style={{
                    marginTop: "10px",
                    fontFamily: "'Mochiy Pop One', sans-serif",
                  }}
                  level={2}
                >
                  Kasir Apps
                </Title>
              </Col>
              <Col>
                <Button type="primary" danger style={{marginLeft: "10px"}}>Logout<LogoutOutlined /> </Button>
              </Col>
            </Row>
          </div>
        </Header>
    )
}

export default App
