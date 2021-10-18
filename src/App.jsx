import React, { useState, useEffect } from 'react';
import MyHeader from './components/header';
import MyMain from './components/main';
import MyFooter from './components/footer';
import { getOptions, getSchedule } from './components/header/methods';

function App() {
  const [timeTable, setSchedule] = useState([]);
  const [options, setOptions] = useState({});

  useEffect(() => {
    (async () => {
      const now = new Date();
      localStorage.setItem('dates', `"${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}"`);

      const faculties = localStorage.getItem('faculties');
      const departments = localStorage.getItem('departments');
      const courses = localStorage.getItem('courses');
      const groups = localStorage.getItem('groups');

      if (faculties && departments && courses && groups) {
        setSchedule([...await getSchedule({
          faculties,
          departments,
          courses,
          groups,
        })]);
      }
      setOptions(await getOptions());
    })();
  }, []);

  const buttonClick = async () => {
    const faculties = localStorage.getItem('faculties');
    const departments = localStorage.getItem('departments');
    const courses = localStorage.getItem('courses');
    const groups = localStorage.getItem('groups');

    if (faculties && departments && courses && groups) {
      setSchedule([...await getSchedule({
        faculties,
        departments,
        courses,
        groups,
      })]);
    } else {
      alert('Пожалуйста, выберете все значения');
    }
  };

  return (
    <div>
      <MyHeader
        options={options}
        onShow={buttonClick}
      />
      <MyMain timeTable={timeTable} />
      <MyFooter />
    </div>
  );
}

export default App;
