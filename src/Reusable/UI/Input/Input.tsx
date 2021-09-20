import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack";
import { ILabelStyles, ILabelStyleProps } from "@fluentui/react/lib/Label";
import {
  ITextFieldStyleProps,
  ITextFieldStyles,
} from "@fluentui/react/lib/TextField";
const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: "Calendar" };
const stackStyles: Partial<IStackStyles> = {
  root: { width: 300 },
};
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 300 } },
};
interface InputProps {
  label: string;
  onChange: (e: any) => void;
  value: string;
  type: string;
}
function getStyles(props: ITextFieldStyleProps): Partial<ITextFieldStyles> {
  const { required } = props;
  return {
    fieldGroup: [{ width: 300 }],
    subComponentStyles: {
      label: getLabelStyles,
    },
  };
}

function getLabelStyles(props: ILabelStyleProps): ILabelStyles {
  const { required } = props;
  return {
    root: required && {
      color: "white",
    },
  };
}

const Input = (props: InputProps) => {
  const { label, onChange, value, type } = props;
  return (
    <Stack horizontal tokens={stackTokens} styles={stackStyles}>
      <Stack {...columnProps}>
        <TextField
          required
          styles={getStyles}
          type={type}
          label={label}
          name={label}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </Stack>
    </Stack>
  );
};
export default Input;
