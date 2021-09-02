import styled from 'styled-components';

export const Container = styled.body`
  background-color: #CCD6DE;
  margin: auto 400px;
  padding: 200px 1px;
  height: 15.5rem;

  border-radius: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  padding-right: 16rem;

  color: #382B8F;
  font-family: cursive, 'Fira Code', sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  height: 30px;
  width: 300px;
  border: 2px solid #543486;
  border-radius: 10px;

  font-family: cursive, 'Fira Code', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #543486;
`;

export const InputButton = styled.input`
  width: 300px;
  border-radius: 10px;
  border: none;

  color: #fff;
  background-color: #0099ff;
  font-family: cursive, 'Fira Code', sans-serif;
  font-weight: bold;
  font-size: 18px;

  padding: 10px;
  margin-top: 30px;
`;

// export const textLowWeight = styled.p`
//   border-radius: 5px;
//   border-color: #ff9900;
//   background-color: #F2EC6D;

//   color: #ff9900;
//   font-family: cursive, 'Fira Code', sans-serif;
//   font-size: 13px;
//   font-weight: 400;
// `;