import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  FormHelperText,
} from "@mui/material";
import type { SelectProps, TextFieldProps } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";

type FieldType = "select" | "text";

interface Option {
  value: string | number;
  label: string;
}

interface DynamicFieldProps {
  type: FieldType;
  label: string;
  value: unknown;
  onChange?:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | ((event: SelectChangeEvent<unknown>) => void);
  options?: Option[];
  helperText?: string;
  selectProps?: Omit<SelectProps, "label" | "value" | "onChange">;
  textFieldProps?: Omit<TextFieldProps, "label" | "value" | "onChange">;
}

export default function DynamicField({
  type,
  label,
  value,
  onChange,
  options = [],
  helperText,
  selectProps,
  textFieldProps,
}: DynamicFieldProps) {
  return (
    <FormControl fullWidth margin="normal">
      {type === "select" ? (
        <>
          <InputLabel>{label}</InputLabel>
          <Select
            label={label}
            value={value}
            onChange={onChange as SelectProps["onChange"]}
            {...selectProps}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </>
      ) : (
        <TextField
          label={label}
          value={value}
          onChange={onChange as TextFieldProps["onChange"]}
          {...textFieldProps}
        />
      )}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}
  