import { Message } from '../components/Message';
import * as S from './styles';

type ResultProps = {
  value: number;
}

export function Result({ value }: ResultProps) {
  return (
    <div>
      { value <= 18.5 && 
        <S.TextUnderWeight>
          <Message message="Você está abaixo do peso" value={value} />
        </S.TextUnderWeight>
      } 

      {value > 18.5 && value <= 24.9 && 
        <S.TextIdealWeight>
          <Message message="Seu peso é ideal para você" value={value} />
        </S.TextIdealWeight> 
      }

      {value > 24.9 && value <= 29.9 &&
        <S.TextOverweight>
          <Message message="Você está acima do peso" value={value} />
        </S.TextOverweight>
      }

      {value > 30 && 
        <S.TextExtremeWeight>
          <Message message="Você apresenta quadro de obesidade" value={value} />
        </S.TextExtremeWeight>
      }
      
    </div>
  );
}
