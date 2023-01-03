import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { usersFetch } from "../../../slices/usersSlice";
import { useEffect } from "react";
import { ordersFetch } from "../../../slices/ordersSlice";

const AllTimeData = () => {
  const { items } = useSelector(state => state.products)
  const { list } = useSelector((state) => state.users);
  const { list: ordersList } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersFetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(ordersFetch());
  }, [dispatch]);

  return (
    <Main>
        <h3>All Time</h3>

        <Info>
            <Title>Total Registered Users</Title>
            <Data>{list.length}</Data>
        </Info>
        <Info>
            <Title>Total Products in Store</Title>
            <Data>{items.length}</Data>
        </Info>
        <Info>
            <Title>Orders</Title>
            <Data>{ordersList.length}</Data>
        </Info>
        <Info>
            <Title>Earnings</Title>
            <Data>$200</Data>
        </Info>
    </Main>
  )
}

export default AllTimeData

const Main = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  margin-top: 1.5rem;
  border-radius: 5px;
  padding: 1rem;
  font-size: 14px
`;

const Info = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.3rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);
  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`;

const Title = styled.div`
    flex: 1;  
`;

const Data = styled.div`
    flex: 1;  
    font-weight: 700;
`;