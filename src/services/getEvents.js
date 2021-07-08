import { API_URL } from "./settings";

// const fromApiResponseToEvents = (apiResponse) => {
//   const { data = [] } = apiResponse;
//   return data;
// };

// export default function getEvents({ limit = 9, filter = null, page = 0 } = {}) {
//   const apiUrl = `${API_URL}`;

//   return fetch(apiUrl)
//     .then((res) => res.json())
//     .then(fromApiResponseToEvents);
// }

function getEvents() {
  return fetch(`${API_URL}/events`)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getEvents,
};
