import type { SelectMenuOption } from './select.types';

export const getOptionsMap = (options: SelectMenuOption[]) => {
  const initialValue = {};
  return options.reduce((acc, curr) => {
    return Object.assign(acc, { [curr.value]: curr.label });
  }, initialValue);
};

export const getInputValue = (value: string | string[] | null, valueMap: ReturnType<typeof getOptionsMap>, separator = ', ') => {
  if (!value) return '';

  if (Array.isArray(value)) {
    return value.map(e => (valueMap as any)[e]).join(separator);
  } else {
    return (valueMap as any)[value];
  }
};

export const showCleanIcon = (multiple: boolean, value: null | string | string[]) => {
  if (!value) return false;

  if (multiple) {
    return Boolean(value.length);
  } else {
    return Boolean(value);
  }
};

export const getFilteredOptions = (query: string, items: SelectMenuOption[]) => {
  if (!query) return items;
  return items.filter(item => item.label.toLowerCase().trim().includes(query.toLowerCase().trim()));
};
