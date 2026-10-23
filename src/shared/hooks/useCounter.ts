import { useState } from 'react'

interface Props {
  init?: number;
  maxQuantity: number;
  minQuantity?: number;
}

export const useCounter = ({ init = 1, maxQuantity, minQuantity = 1 }: Props) => {
  const [counter, setCounter] = useState<number>(init);

  const handleAdd = () => {
    setCounter(
      (prevState) => (prevState < maxQuantity ? prevState + 1 : prevState)
    );
  }

  const handleSubtract = () => {
    setCounter(
      (prevState) => (prevState > minQuantity ? prevState - 1 : prevState)
    );
  }

  const handleReset = () => {
    setCounter(init);
  }

  return {
    // Props
    counter,

    // Methods / Actions
    handleAdd,
    handleSubtract,
    handleReset
  };
}