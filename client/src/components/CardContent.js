import React from 'react';
import {Row, Col, Typography, Card} from 'antd';
import {formatRupiah} from '../utils/formatRupiah';

const { Title } = Typography
const App = (props) => {
    const {menus, category, onClick} = props;
    return (
        <Row gutter={16}>
            {menus ? menus.map((e) => {
                if(e.category_name === category) {
                    return (
                        <Col span={6} key={e.id} style={{ marginBottom: "10px" }} onClick={()=> onClick(e)}>
                            <Card
                                hoverable
                                style={{ borderTopLeftRadius: "20px", borderBottomRightRadius: "20px" }}
                                cover={
                                    <img
                                        style={{ height: "150px", borderTopLeftRadius: "20px" }}
                                        alt="example"
                                        src={e.img_url}
                                    />
                                }
                            >
                                <Title level={4} style={{ textAlign: "center", lineHeight: 0 }}>{e.name}</Title>
                                <Title level={5} style={{ textAlign: "center", color: "brown" }}>Rp{formatRupiah(e.price)}</Title>
                            </Card>
                        </Col>
                    )
                }
            }) : ""}
        </Row>
    )
}

export default App
