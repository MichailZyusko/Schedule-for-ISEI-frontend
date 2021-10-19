/* eslint-disable */

const scheduleURL = 'https://schedule-for-isei.herokuapp.com/api/schedule?';
const optionsURL = 'https://schedule-for-isei.herokuapp.com/api/metainfo?faculty=2&department=2&course=3';

const getSchedule = async ({faculties,departments, courses, groups, date}) => {
  try {
    const response = await fetch(`${scheduleURL}
    faculties=${faculties}&
    departments=${departments}&
    courses=${courses}&
    groups=${groups}&
    dates=${date}`);

    return response.ok ? response.json() : null;
  } catch (e) {
    console.log(e);
  }
};

const getOptions = async () => {
  try {
    const response = await fetch(optionsURL);

    return response.ok ? response.json() : null;
  } catch (e) {
    console.log(e);
  }
};

export { getOptions, getSchedule };
