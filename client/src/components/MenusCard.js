import React from 'react';
import { Row, Col, Card, Typography } from 'antd';

const App = (props) => {
    return (
        <Row gutter={16}>
            <Col span={24}>
            <Card style={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }} >
                {props.children}
            </Card>
            </Col>
        </Row>
    )
}

export default App
