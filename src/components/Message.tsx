type ResultProps = {
  message: string;
  value: number;
}

export function Message({ value, message }: ResultProps){
  return(
    <div>
      <h3>Seu IMC é de: {value.toFixed(2)}</h3>
      <p>{message}</p>
    </div>
  );
}