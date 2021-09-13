import { useState } from "react"

export const Counter = () => {

  const [count, setCount] = useState(0);

  return(
    <div className="counter-wrapper">
        <div className={'counter'}>{count}</div>
        <button id={'counter-add'} onClick={()=> setCount(count + 1)}>Adicionar</button>
        <button id={'counter-sub'} onClick={()=> setCount(count - 1)}>Remover</button>
        <button id={'counter-reset'} onClick={()=> setCount(0)}>Reiniciar</button>
    </div>
  )
}