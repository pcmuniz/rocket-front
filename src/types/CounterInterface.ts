export interface CounterProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    title?: string | number;
  }