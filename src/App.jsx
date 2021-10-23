/* eslint-disable */

import React, {useEffect, useState} from 'react';
import MyHeader from './components/header';
import MyMain from './components/main';
import MyFooter from './components/footer';
import {getOptions, getSchedule} from './components/header/methods';

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
            const date = localStorage.getItem('dates');

            if (faculties && departments && courses && groups && date) {
                setSchedule([...await getSchedule({
                    faculties,
                    departments,
                    courses,
                    groups,
                    date
                })]);
            }
            setOptions(await getOptions({faculties, departments, courses}));
        })();
    }, []);

    const buttonClick = async () => {
        setSchedule([]);

        const faculties = localStorage.getItem('faculties');
        const departments = localStorage.getItem('departments');
        const courses = localStorage.getItem('courses');
        const groups = localStorage.getItem('groups');
        const date = localStorage.getItem('dates');

        if (faculties && departments && courses && groups && date) {
            setSchedule([...await getSchedule({
                faculties,
                departments,
                courses,
                groups,
                date
            })]);
        } else {
            alert('Пожалуйста, выберете все значения');
        }
    };

    const selectOptions = async ({faculty, department, course}) => {
        // setSchedule([]);

        const faculties = faculty  || localStorage.getItem('faculties') ;
        const departments = department || localStorage.getItem('departments');
        const courses = course || localStorage.getItem('courses');


        // if (faculties && departments && courses) {
            setOptions(await getOptions({faculties, departments, courses}));
        // }
    };

    return (
        <div>
            <MyHeader
                options={options}
                onSelect={selectOptions}
                onShow={buttonClick}
            />
            <MyMain timeTable={timeTable}/>
            <MyFooter/>
        </div>
    );
}

export default App;
