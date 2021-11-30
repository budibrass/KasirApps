import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../components/Content';
import MenusCard from '../components/MenusCard';
import { fetchMenus, addOrder } from '../redux/action';
import CardContent from '../components/CardContent';

const App = () => {
    const category = "snacks";
    const dispatch = useDispatch();
    const menus = useSelector (state => state.menus);

    const handleAddOrder = (e) => {
        dispatch(addOrder(e));  
    };

    useEffect(()=> {
        dispatch(fetchMenus()); 
    }, [])

    return (
        <Content>
            {/* <MenusCard menus={menus} category={category} /> */}
            <MenusCard>
                <CardContent onClick={(e) => handleAddOrder(e)} menus={menus} category={category} />
            </MenusCard>
        </Content>
    )
}

export default App
