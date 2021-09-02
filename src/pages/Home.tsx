import React from 'react';
import { useState } from 'react';
import { Result } from '../components/Result';
import { Container, Form, Text, Input, InputButton } from '../components/styles';

export function Home() {
  const [altura, setNewAltura] = useState('');
  const [peso, setNewPeso] = useState('');
  const [clicked, setOnClicked] = useState(false);
  const onClicked = () => setOnClicked(true);
  // const onClicked = stateClicked();

  function calculateImc() {
    let a = parseFloat(altura);
    let p = parseFloat(peso);
    let imc = p / (a*a);
    
    return imc;
  }


  // function stateClicked() {
  //   if(altura !== '' && peso !== '') {
  //     return () => setOnClicked(true);
  //   } else {
  //     return () => setOnClicked(false);
  //   }
  // }


  return (
    <>
    <Container>
      <div>
        <Form onSubmit={(event: { preventDefault: () => any; }) => event.preventDefault()}>
          <Text>Altura</Text>
          <Input type="text" onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setNewAltura(event.target.value) } value={altura}/>
          <Text>Peso</Text>
          <Input type="text" onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setNewPeso(event.target.value) } value={peso} />
          <InputButton type="submit" value="Calcular" onClick={onClicked}/>
          
          { clicked ? <Result value={calculateImc()}/> : null }
          {console.log(clicked + " essa função")}
        </Form>
      </div>
    </Container>
    </>
  )
}