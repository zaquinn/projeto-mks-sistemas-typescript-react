import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 10px;
`;

export const LabelInput = styled.h3`
  font-size: 16px;
  color: var(--gray-5);
  font-weight: 600;
  padding-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  height: 40px;
  width: 300px;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--gray-3);

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue);
  height: 100%;
  width: 40px;
  font-size: 20px;
  color: var(--white);
  border-radius: 8px 0px 0px 8px;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 14px;
  margin-left: 10px;
  color: var(--gray-4);
`;
