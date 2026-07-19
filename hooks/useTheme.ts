"use client";

import { useTheme } from "next-themes";

export default function useAppTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return {
    theme,
    setTheme,
    resolvedTheme,
  };
}