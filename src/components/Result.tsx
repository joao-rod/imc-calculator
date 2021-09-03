// import { textLowWeight } from './styles';

type ResultProps = {
  value: number;
}

export function Result(props: ResultProps) {
  function getResult(){
    const value = props.value;
    if (value <= 18.5) {
      return (
        <p>Você está abaixo do peso</p>
      );
    } else if(value > 18.5 && value <= 24.9){
      return (
        <p>Seu peso é ideal para você</p>
      );
    } else if(value > 24.9 && value <= 29.9){
      return (
        <p>Você está acima do peso</p>
      );
    } else {
      return (
        <p>Você apresenta qudro de obesidade</p>
      );
    }
  }

  return (
    <>
    <div>
      <h3>Seu IMC é de: {props.value.toFixed(2)}</h3>
      {getResult()}
    </div>
    </>
  );
}