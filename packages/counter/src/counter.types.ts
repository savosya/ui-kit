export interface CounterProps {
  value?: number;
  onAdd?: (newValue: number) => void;
  onSub?: (newValue: number) => void;
  onChange?: (newValue: number) => void;
  min?: number;
  max?: number;
  width?: number;
  /**
   * Отключает таргетирование инпута, но кнопки +/- работают
   * */
  readOnly?: boolean;
  disabled?: boolean;

  className?: string;
  classes?: {
    root?: string;
    input?: string;
    plus?: string;
    minus?: string;
  };
}
