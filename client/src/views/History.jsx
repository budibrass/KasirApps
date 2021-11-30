import React, { useEffect } from 'react';
import Content from '../components/Content';
import MenusCard from '../components/MenusCard';
import { Table } from 'antd';
import { columns } from './indexHistory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from '../redux/action';

const App = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history);

    useEffect(()=> {
        dispatch(fetchHistory());
    }, [])
    return (
        <>
        <Content title="Riwayat Pemesanan">
            <MenusCard>
                <Table columns={columns} dataSource={history}/>
            </MenusCard>
        </Content>
        </>
    )
}

export default App
