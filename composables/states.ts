export const useColor = () => {
  const color = useState<string>('color', () => 'pink');

  const setColor = (value: string) => {
    color.value = value;
  };

  return { color, setColor };
};
