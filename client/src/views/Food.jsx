import React, { useState, useEffect } from "react";
import Content from '../components/Content';
import MenusCard from '../components/MenusCard';
import { useSelector, useDispatch } from "react-redux";
import { fetchMenus, addOrder } from "../redux/action";
import CardContent from '../components/CardContent';

const App = () => {
  const category = "foods"
  const dispatch = useDispatch();
  const menus = useSelector(state => state.menus);

  const handleAddOrder = (e) => {
    dispatch(addOrder(e));  
  };
  
  useEffect(()=> {
    dispatch(fetchMenus())
  }, [])
  
  return (
    <Content handleAddOrder={handleAddOrder} >
        {/* <MenusCard onClick={(e)=> handleAddOrder(e)} menus={menus} category={category} /> */}
        <MenusCard>
          <CardContent onClick={(e)=> handleAddOrder(e)} menus={menus} category={category} />
        </MenusCard>
    </Content>
  );
};

export default App;
