import React, { useState, useEffect } from 'react';
import { Layout, Badge, PageHeader } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../redux/action';
import ModalOrder from '../components/ModalOrders';

const { Content } = Layout;

const App = (props) => {
  const { title } = props;
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);
  const [modal, setModal] = useState({ title: "Daftar Orderan", visible: false });

  const openModalOrder = () => {
    setModal({ ...modal, visible: true })
  };

  const handleCloseModalOrder = () => {
    setModal({ ...modal, visible: false })
  };

  const totalChart = orders.reduce((val, e) => {
    return val + e.amount
  }, 0)

  useEffect(()=> {
    dispatch(fetchOrders())
  }, [])

    return (
      <>
        <Layout style={{ paddingTop: "0", paddingRight: "0", paddingLeft: "24px" }}>
            <Content
              className="site-layout-background"
              style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
            >
            <PageHeader
                className="site-page-header"
                title={title || "Order Menu"}
                style={{ backgroundColor: "#61d4b5", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: "flex", justifyContent: "space-between" }}
            >
              <Badge count={totalChart} onClick={openModalOrder}>
                <i className="fas fa-2x fa-cart-plus" style={{ cursor: "pointer" }}></i>
              </Badge>
            </PageHeader>
              {/* CARD CONTENT */}
              {props.children}
            </Content>
          </Layout>
          <ModalOrder 
            title={modal.title} 
            visible={modal.visible} 
            onCancel={handleCloseModalOrder} 
            orders={orders}
          />
      </>
    )
}

export default App
