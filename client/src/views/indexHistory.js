import { List, Typography, Divider } from 'antd';
const { Title } = Typography;

export const columns = [
    {
        title: 'Tanggal',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (value) => (
            <Title level={5}>{value}</Title>
        )
    },
    {
        title: 'Food',
        dataIndex: 'orders',
        key: 'orders',
        render: orders => {
            let data = orders.map((e) => {
                if(e.category_name === "foods")
                return (
                    <List.Item key={e.id}>{e.name}</List.Item>
                )
            })
            return data
        }
    },
    {
        title: 'Drink',
        dataIndex: 'orders',
        key: 'orders',
        render: orders => {
            let data = orders.map((e) => {
                if(e.category_name === "drinks")
                return (
                    <List.Item key={e.id}>{e.name}</List.Item>
                )
            })
            return data
        }
    },
    {
        title: 'Snack',
        dataIndex: 'orders',
        key: 'orders',
        render: orders => {
            let data = orders.map((e) => {
                if(e.category_name === "snacks")
                return (
                    <List.Item key={e.id}>{e.name}</List.Item>
                )
            })
            return data
        }
    },
    {
        title: 'Jumlah',
        dataIndex: 'orders',
        key: 'orders',
        width: 100,
        render: orders => {
            let data = orders.map((e) => {
                return (
                    <List.Item key={e.id}>{e.amount}</List.Item>
                )
            })
            return data
        }
    },
]