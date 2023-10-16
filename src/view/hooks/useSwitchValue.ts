import {useState, useCallback, useMemo} from 'react';

interface SwitchValue {
  value: boolean;
  on: () => void;
  off: () => void;
  toggle: () => void;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function useSwitchValue(initial: boolean): SwitchValue {
  const [value, setValue] = useState<boolean>(initial);

  const on = useCallback(() => {
    setValue(true);
  }, []);

  const off = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);

  return useMemo(
    () => ({
      value,
      on,
      off,
      toggle,
      set: setValue,
    }),
    [off, on, toggle, value],
  );
}

export default useSwitchValue;
