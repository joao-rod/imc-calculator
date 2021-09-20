import { FormEvent, useEffect, useState } from 'react';
import { Result } from '../components/Result';
import { Container, Form, Img, Text, Input, InputButton } from '../components/styles';
import logoImg from '../assets/images/logo.svg';

export function Home() {
  const [altura, setNewAltura] = useState('');
  const [peso, setNewPeso] = useState('');
  const [imc, setImc] = useState(0);

  function calculateImc(e: FormEvent) {
    e.preventDefault();

    const a = parseFloat(altura);
    const p = parseFloat(peso);
    const imc = p / (a*a);

    setImc(imc)
  }

  useEffect(() => {
    if(!altura || !peso) {
      setImc(0);
    }
  }, [altura, peso]);

  return (
    <>
    <Container>
      <main>
        <Form onSubmit={calculateImc}>
          <Img src={logoImg} alt="Logotipo" />
          <Text>Altura</Text>
          <Input type="text" onChange={({target}) => setNewAltura(target.value)} value={altura}/>
          <Text>Peso</Text>
          <Input type="text" onChange={({target}) => setNewPeso(target.value) } value={peso} />

          <InputButton type="submit" value="Calcular" />

         {!!imc && <Result value={imc}/>}
        </Form>
      </main>
    </Container>
    </>
  )
}