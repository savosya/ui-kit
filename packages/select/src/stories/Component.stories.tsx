import * as React from 'react';
import {Select} from '../Component';
import {useState} from "react";

export default {
  title: 'Components/Select',
  component: Select,
};

const canvasStyles = {
  backgroundColor: '#CCCCCC',
  height: 300,
  width: 320,
  padding: 16,
  display: 'flex',
  flexWrap: 'wrap',
  gap: 16
}

export const Default = () => {
  const [value, setValue] = useState<string[] | null>(['apple', 'pear'])


  return (
    //@ts-ignore
    <div style={canvasStyles}>
      <Select
        // value={value}
        // loading
        // open
        label='Фрукты'
        placeholder={'Выберите'}
        // showSearch
        // multiple
        block
        // error
        errorMsg={'FFFFF'}
        optionsSettings={{
          showDivider: true,
          // ellipsisOptions: false,
          wrapOptions: true
        }}
        options={[
          {label: 'ЯблокоЯблокоЯблоко ЯблокоЯблок оЯблокоЯб локоЯблок оЯблоко', value: 'apple'},
          {label: 'Арбуз', value: 'watermelon', disabled: true},
          {label: 'Груша', value: 'pear'},
          {label: 'Агуша', value: 'agusha'},
          {label: 'Цветы', value: 'flowers'},
          {label: 'Ботинки', value: 'boots'},
          {label: 'Шляпа', value: 'hat'},
          {label: 'Дудка', value: 'dudka'},
          {label: 'Кошка', value: 'cat'},
          {label: 'Игра', value: 'game'},
          {label: 'Игрушка', value: 'toy'},
          {label: 'Грушка', value: 'grushka'},
          {label: 'Крушка', value: 'cup'},
          {label: 'Вошка', value: 'bug'},
          {label: 'Мошка', value: 'little-bug'},
          {label: 'Ложка', value: 'spoon'},
          {label: 'Тошка', value: 'Anton'},
          {label: 'Марожка', value: 'ice-cream'},
          {label: 'Якорь', value: 'anchor'},
        ]}
      />
    </div>
  )
};
