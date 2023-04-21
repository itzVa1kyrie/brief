import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15% auto;
  width: 40%;
  border-radius: 5px;
  padding: 20px;
  background: rgba(28, 33, 33, 0.8);
  box-shadow: 0 0 20px rgba(28, 33, 33, 0.8);
  
  div {
    width: 100%;
  }
`;

export const Error = styled.div`
  font-size: 16px;
  color: #b25656;
  margin-bottom: 15px;
  text-align: center;
  margin-top: -10px;
`;

export const Data = styled.div`
  padding: 40px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Item = styled.div`
  width: 100%;
  background: rgba(28, 33, 33, 0.8);
  box-shadow: 0 0 20px rgba(28, 33, 33, 0.8);
  border-radius: 10px;
  padding: 10px 30px;
  
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const Header = styled.div`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #fff;
`;

export const Row = styled.div`
  display: flex;
  justify-items: start;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.div`
  font-size: 20px;
  color: rgb(190, 209, 218);
`;

export const Info = styled.div`
  margin-left: 10px;
  font-size: 20px;
  color: #fff;
`;