import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  
  svg {
    cursor: pointer;
    position: absolute;
    right: 20px;
  }
`;

export const Label = styled.label`
  color: rgb(190, 209, 218);
  font-size: 20px;
  text-align: center;

  @media (max-width: 960px) {
    font-size: 18px;
  }
`;

export const WrapperField = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid ${({ error }) => (error ? '#b25656' : 'rgb(190, 209, 218)')};
  ${({ error }) => (error && 'box-shadow: 0 0 5px #b25656')};
  background: transparent;
  border-radius: 5px;
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 1.33;
  margin-top: 5px;
`;

export const Input = styled.input`
  margin-left: 5px;
  width: ${({isPrefix}) => (isPrefix ? '90%' : '100%')};
  text-align: center;
  font-size: 16px;
  background: transparent;
  color: rgb(255, 255, 255);

  &:-webkit-autofill {
    -webkit-box-shadow: inset 0 0 0 50px #fff;
    -webkit-text-fill-color: #000;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #b25656;
  text-align: center;
`;
