import * as React from "react";

export function useInput(validate) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);

  const onChange = (e) => setValue(e.target.value);

  const onBlur = () => (setDirty(true), setFocus(false));

  const onFocus = () => setFocus(true);

  React.useEffect(() => {
    const shouldValidate = dirty && !focus && validate;
    if (shouldValidate && !validate(value)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [value, focus]);

  const reset = () => {
    setError(false);
    setDirty(false);
    setFocus(false);
    setValue("");
  };

  return [error, { value, onChange, onBlur, onFocus }, reset];
}
