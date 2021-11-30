import React from 'react';
import { Table } from 'antd';

const App = () => {
    return (
        <>
        <Table dataSource={dataSource} columns={columns} />
        </>
    )
}

export default App
