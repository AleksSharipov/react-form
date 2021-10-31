import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

mock.onGet('/change1').reply(200, {
  temperature: [
    { item: 'gasTemperature1', value: 27 },
    { item: 'gasTemperature2', value: 31 },
    { item: 'gasTemperature3', value: 26 },
    { item: 'gasTemperature4', value: 26 },
    { item: 'gasTemperature5', value: 28 },
    { item: 'gasTemperature6', value: 0 },
  ],
  gasPressure1: [
    { item: 'gasPressure1', value: 27 },
    { item: 'gasPressure2', value: 31 },
  ],
  gasPressure2: [
    { item: 'gasPressure3', value: 7 },
    { item: 'gasPressure4', value: 1 },
  ],
  resistance1: [
    { item: 'resistance1', value: 75 },
    { item: 'resistance2', value: 75 },
  ],
  resistance2: [
    { item: 'resistance1', value: 15 },
    { item: 'resistance2', value: 5 },
  ],
});

mock.onGet('/change2').reply(200, {
  temperature: [
    { item: 'gasTemperature1', value: 72 },
    { item: 'gasTemperature2', value: 11 },
    { item: 'gasTemperature3', value: 63 },
    { item: 'gasTemperature4', value: 326 },
    { item: 'gasTemperature5', value: 821 },
    { item: 'gasTemperature6', value: 12 },
  ],
  gasPressure1: [
    { item: 'gasPressure1', value: 7 },
    { item: 'gasPressure2', value: 1 },
  ],
  gasPressure2: [
    { item: 'gasPressure3', value: 17 },
    { item: 'gasPressure4', value: 13 },
  ],
  resistance1: [
    { item: 'resistance1', value: 542 },
    { item: 'resistance2', value: 112 },
  ],
  resistance2: [
    { item: 'resistance1', value: 5 },
    { item: 'resistance2', value: 95 },
  ],
});

export const fetchData = (change) => (dispatch) => {
  // axios.get(`/report`)
  axios.get(`/${change}`)
    .then(function (response) {
      // console.log(response.data);
      dispatch(setData(response.data))
    });
}

export const setData = (items) => ({
  type: 'SET_DATA',
  payload: items,
})