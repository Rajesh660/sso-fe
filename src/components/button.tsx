import Button, { type ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  text: string;
  func?: () => void;
}

export default function ButtonComponent({
  text,
  func,
  ...props
}: CustomButtonProps) {
  return (
    <Button variant="contained" onClick={func} {...props}>
      {text}
    </Button>
  );
}
