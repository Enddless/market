type TButtonProps = {
  text: string;
  cls?: string;
  onClick?: () => void | undefined;
};

function Button({ text, cls, onClick }: TButtonProps) {
  return (
    <button type='button' className={`button ${cls}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
