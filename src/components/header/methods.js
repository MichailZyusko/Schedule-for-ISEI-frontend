/* eslint-disable */

const scheduleURL = 'https://schedule-for-isei.herokuapp.com/api/schedule?';
const optionsURL = 'https://schedule-for-isei.herokuapp.com/api/metainfo?';

const getSchedule = async ({faculties,departments, courses, groups, date}) => {
  try {
    const response = await fetch(`${scheduleURL}faculties=${faculties}&departments=${departments}&courses=${courses}&groups=${groups}&dates=${date}`);

    return response.ok ? response.json() : null;
  } catch (e) {
    console.log(e);
  }
};

const getOptions = async ({ faculties, departments, courses }) => {
  try {
    const response = await fetch(`${optionsURL}faculty=${faculties || 2}&department=${departments || 2}&course=${courses || 3}`);

    return response.ok ? response.json() : null;
  } catch (e) {
    console.log(e);
  }
};

export { getOptions, getSchedule };
