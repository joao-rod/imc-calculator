import styled from 'styled-components';

export const Container = styled.body`
  background-color: #CCD6DE;
  margin: auto 400px;
  padding: 50px 1px 300px;
  height: 15rem;

  border-radius: 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  height: 50px;
  margin-bottom: 80px;
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
  background-color: #6272a4;
  font-family: cursive, 'Fira Code', sans-serif;
  font-weight: bold;
  font-size: 18px;

  padding: 10px;
  margin-top: 30px;
`;

export const TextResult = styled.div`
  border-radius: 5px;
  border: 1px solid #41325C;
  color: #41325C;

  width: 290px;
  margin-top: 15px;

  font-family: cursive, 'Fira Code', sans-serif;

  h3{
    font-size: 17px;
    font-weight: 700;
  }

  p{
    font-size: 15px;
    font-weight: 400;
  }
`;

export const TextUnderWeight = styled(TextResult)`
  background-color: #FFFF95;
`;

export const TextIdealWeight = styled(TextResult)`
  background-color: #50fa7b;
`;

export const TextOverweight = styled(TextResult)`
  background-color: #FF6A79;
`;

export const TextExtremeWeight = styled(TextResult)`
  background-color: #FF0067;
`;