"use client";

import { useState, useEffect } from "react";

/**
 * A hook that syncs state to localStorage.
 * Falls back to `initialValue` when localStorage is unavailable (SSR).
 *
 * @example
 * const [name, setName] = useLocalStorage<string>("username", "");
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Read from localStorage on client mount
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch (error) {
      console.warn(`useLocalStorage: error reading key "${key}"`, error);
    }
  }, [key]);

  // Write to localStorage when value changes
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(`useLocalStorage: error writing key "${key}"`, error);
    }
  };

  return [storedValue, setValue] as const;
}
