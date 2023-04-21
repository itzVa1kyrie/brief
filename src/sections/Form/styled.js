import styled from "styled-components";

export const FormStyle = styled.form`
  background: rgba(28, 33, 33, 0.8);
  box-shadow: 0 0 20px rgba(28, 33, 33, 0.8);
  padding: 30px 40px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  border-radius: 10px;

  div {
    width: 100%;
  }
`;

export const Button = styled.button`
  color: rgb(190, 209, 218);
  padding: 12px 16px;
  font-size: 18px;
  font-weight: bold;
  box-shadow: inset 0 0 1px 1px rgb(190, 209, 218);
  border-radius: 5px;
  transition: .3s;

  &:hover {
    color: rgba(28, 33, 33, 0.8);
    background: rgb(190, 209, 218);
    box-shadow: inset 0 0 1px 1px rgb(190, 209, 218);
  }
`;

export const PopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20% auto;
  width: 500px;
  border-radius: 5px;
  padding: 30px 0;
  background: rgba(28, 33, 33, 0.8);
  box-shadow: 0 0 20px rgba(28, 33, 33, 0.8);
`;

export const Text = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
  color: rgb(190, 209, 218);
`;

export const Title = styled.p`
  font-size: 26px;
  font-weight: bold;
  color: rgb(190, 209, 218);
  margin-bottom: 20px;
`;