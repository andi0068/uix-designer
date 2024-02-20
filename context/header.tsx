'use client';
import { useState, useMemo, useContext, createContext } from 'react';

type ColorMode = 'light' | 'dark';

type ContextType = {
  mode: ColorMode;
  setMode: React.Dispatch<React.SetStateAction<ColorMode>>;
};

interface ProviderProps {
  children?: React.ReactNode;
}

const Context = createContext<ContextType>({
  mode: 'dark',
  setMode() {},
});

export function useHeaderContext() {
  return useContext(Context);
}

export function Provider({ children }: ProviderProps) {
  const [mode, setMode] = useState<ColorMode>('dark');

  const value: ContextType = useMemo(() => ({ mode, setMode }), [mode]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { useHeaderContext as useContext };
