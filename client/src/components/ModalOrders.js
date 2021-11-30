import React from "react";
import { Modal, Card, Row, Col, Typography, Button, notification } from "antd";
import { MinusSquareOutlined, PlusSquareOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { addOrder, deleteOrder, fetchOrders, getOneOrder, handleBayar } from '../redux/action';
import { useDispatch } from 'react-redux';
import { formatRupiah } from '../utils/formatRupiah';
import swal from 'sweetalert';
import "./style/modal-style.css";

const { Title, Text } = Typography;

const App = ({ title, visible, onCancel, orders }) => {
  const dispatch = useDispatch();

  const handleAddOrder = async (e) => {
    const {data} = await getOneOrder(e.product_id);

    const payload = {
      ...data[0],
      amount: data[0].amount + 1,
      total_price: data[0].total_price + data[0].price,
    };

    dispatch(addOrder(e, payload))
  };

  const handleMinOrder = async (e) => {
    const {data} = await getOneOrder(e.product_id);

    const payload = {
      ...data[0],
      amount: data[0].amount - 1,
      total_price: data[0].total_price - data[0].price,
    };

    if(data[0].amount <= 1) {
      swal("Maaf jumlah order tidak boleh kurang dari 1", "", "info");
    } else {
      dispatch(addOrder(e, payload))
    }
  };

  const handleDeleteOrder = (e) => {
    Modal.confirm({
      title: 'Delete Order',
      icon: <ExclamationCircleOutlined />,
      content: 'Apakah yakin akan menghapus Orderan ini?',
      onOk() {
        return new Promise(async (resolve, reject) => {
          try {
            dispatch(deleteOrder(e.id));
            notification.success({
              message: "Success",
              description: "Data berhasil di hapus"
            })
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          } catch (error) {
            console.log(error.message);
          }
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

  const handleBayarOrder = async () => {
    dispatch(handleBayar());
  };

  return (
    <>
      <Modal
        title={title}
        visible={visible}
        // onOk={onOk}
        onCancel={onCancel}
        width="1024px"
        footer={[
          <Button key="cancel" onClick={onCancel} style={{ borderRadius: "5px" }}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleBayarOrder} style={{ borderRadius: "5px" }}>
            Bayar
          </Button>,
        ]}
      >
        <div className="site-card-border-less-wrapper">
          <Row>
            <Col style={{ textAlign: "center" }} span={2}><Text strong>No</Text></Col>
            <Col span={7}><Text strong>Gambar</Text></Col>
            <Col span={5}><Text strong>Nama</Text></Col>
            <Col span={5}><Text strong>Keterangan</Text></Col>
            <Col style={{ textAlign: "center" }} span={5}><Text strong>Aksi</Text></Col>
          </Row>
          <hr />
          {orders ? orders.map((e, idx) => {
              return (
                <>
                <Row style={{ marginTop: "3px" }} key={idx}>
                  <Col style={{ textAlign: "center" }} span={2}>{idx + 1}</Col>
                  <Col style={{ textAlign: "center" }} span={7}>
                    <Card
                      size="small"
                      style={{
                        width: "200px",
                        maxHeight: "100px",
                        borderRadius: "20px",
                      }}
                      cover={
                        <img
                          style={{ height: "100px", borderRadius: "20px" }}
                          alt="example"
                          src={e.img_url}
                        />
                      }
                    />
                  </Col>
                  <Col span={5}><Title level={3}>{e.name}</Title></Col>
                  <Col span={5}>
                    <Text>Jumlah : {e.amount}</Text> <br />
                    <Text>Harga : Rp{formatRupiah(e.price)}</Text> <br /> <br />
                    {/* <Text>Harga : Rp{e.price}</Text> <br /> <br /> */}
                    <Title level={5}>Total Harga : Rp{formatRupiah(e.total_price)}</Title>
                  </Col>
                  <Col style={{ textAlign: "center" }} span={5}>
                    <Row justify="center">
                      <Col>
                        <MinusSquareOutlined onClick={()=>handleMinOrder(e)} style={{ fontSize: "24px", marginRight: "10px" }} />
                      </Col>
                      <Col>
                        <Title level={5}>{e.amount}</Title> 
                      </Col>
                      <Col>
                        <PlusSquareOutlined onClick={()=>handleAddOrder(e)} style={{ fontSize: "24px", marginLeft: "10px", marginRight: "5px" }} />
                      </Col> ||
                      <Col>
                        <DeleteOutlined onClick={()=>handleDeleteOrder(e)} style={{ fontSize: "24px", marginLeft: "10px" }} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                </>
              );
            })
          : null}
        </div>
      </Modal>
    </>
  );
};

export default App;
