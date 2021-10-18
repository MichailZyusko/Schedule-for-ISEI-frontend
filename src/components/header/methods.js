/* eslint-disable */

const scheduleURL = 'https://schedule-for-isei.herokuapp.com/api/schedule?faculties=2&departments=2&courses=3&groups=133&dates=2021-W40';
const optionsURL = 'https://schedule-for-isei.herokuapp.com/api/metainfo?faculty=2&department=2&course=3';

const getSchedule = async () => {
  try {
    const response = await fetch(scheduleURL);

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
