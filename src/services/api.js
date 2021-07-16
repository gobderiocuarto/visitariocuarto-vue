const API_URL = "https://admin.visitariocuarto.gob.ar/api/v1";

function getEvents({ paginate = 9, query = null, page = null } = {}) {
  //console.log(query);
  const apiUrl = query
    ? `${API_URL}${query}paginate=${paginate}${page}`
    : `${API_URL}/events?paginate=${paginate}${page}`;

  console.log(apiUrl);

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
function getEvent(id) {
  console.log(id);
  return fetch(`${API_URL}/events/${id}`)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.data);
      return res.data;
    });
}
function getEventsHighlights({ paginate = 4, url = null } = {}) {
  //console.log(url);
  const path = url ? url : "slider_hero";
  const apiUrl = `${API_URL}/events/highlights/${path}?paginate=${paginate}`;
  //console.log(apiUrl);
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.data);
      return res.data;
    });
}
function getServices({ paginate = 4, query = null, page = "" } = {}) {
  //console.log(page);
  const apiUrl = query
    ? `${API_URL}${query}paginate=${paginate}${page}`
    : `${API_URL}/services?paginate=${paginate}${page}`;

  //console.log(apiUrl);

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
function getService(id) {
  //console.log(id);
  return fetch(`${API_URL}/services/${id}`)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.data);
      return res.data;
    });
}

export default {
  getEvents,
  getEvent,
  getEventsHighlights,
  getServices,
  getService,
};
