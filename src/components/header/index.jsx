/* eslint-disable */

import React from 'react';
import Input from './components/input';
import Button from './components/button';
import DatePicker from './components/datePicker';

import './index.css';

const Index = ({ onShow, onSelect, options }) => (
  <div className="header">
    <Input
      onSelect={onSelect}
      options={options?.faculties || []}
      label="Факультет"
      name="faculties"
    />
    <Input
      onSelect={onSelect}
      options={options?.departments || []}
      label="Форма обучения"
      name="departments"
    />
    <Input
      onSelect={onSelect}
      options={options?.courses || []}
      label="Курс"
      name="courses"
    />
    <Input
      onSelect={onSelect}
      options={options?.groups || []}
      label="Группа"
      name="groups"
    />
    <DatePicker />
    <Button onShow={onShow} label="Показать" />
  </div>
);

export default Index;
