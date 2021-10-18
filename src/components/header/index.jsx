/* eslint-disable */

import React from 'react';
import Input from './components/input';
import Button from './components/button';
import DatePicker from './components/datePicker';

import './index.css';

const Index = ({ onShow, options }) => (
  <div className="header">
    <Input
      options={options?.faculties || []}
      label="Факультет"
      name="faculties"
    />
    <Input
      options={options?.departments || []}
      label="Форма обучения"
      name="departments"
    />
    <Input
      options={options?.courses || []}
      label="Курс"
      name="courses"
    />
    <Input
      options={options?.groups || []}
      label="Группа"
      name="groups"
    />
    <DatePicker />
    <Button onShow={onShow} label="Показать" />
  </div>
);

export default Index;
