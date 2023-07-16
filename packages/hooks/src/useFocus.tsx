import * as React from 'react'
import type {MutableRefObject, RefObject} from 'react'
export type InputMethod = "keyboard" | "mouse";


let prevInputMethod: any = undefined;
function handleKeyDown(event: any) {
  if (event.key === 'Tab') {
    prevInputMethod = 'keyboard';
  }
}
function handleMouseDown() {
  prevInputMethod = 'mouse';
}
function handleTouchStart() {
  prevInputMethod = 'mouse';
}

/**
 * Навешивает несколько глобальных обработчиков и отслеживает метод ввода - мышь или клавиатура.
 * Note: Повторный вызов функции не дублирует обработчики
 */
function addGlobalListeners() {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('touchstart', handleTouchStart);
}

export const useFocus = <T extends HTMLElement>(ref: MutableRefObject<T> | RefObject<T>, inputMethod?: InputMethod) => {
  const [focus, setFocus] = React.useState(false);

  const handleFocus = React.useCallback(function () {
    if (!inputMethod || inputMethod === prevInputMethod) {
      setFocus(true);
    }
  }, [inputMethod]);

  const handleBlur = React.useCallback(function () {
    setFocus(false);
  }, []);

  React.useEffect(function () {
    const node = ref.current;
    if (node) {
      node.addEventListener('focusin', handleFocus);
      node.addEventListener('focusout', handleBlur);
    }
    return function () {
      if (node) {
        node.removeEventListener('focusin', handleFocus);
        node.removeEventListener('focusout', handleBlur);
      }
    };
  }, [handleBlur, handleFocus, ref]);

  React.useEffect(addGlobalListeners, []);

  return [focus];
}