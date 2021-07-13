const API_URL = "https://admin.visitariocuarto.gob.ar/api/v1";

function getEvents({ paginate = 9, query = null, page = null } = {}) {
  //console.log(page);
  const apiUrl = query
    ? `${API_URL}${query}paginate=${paginate}${page}`
    : `${API_URL}/events?paginate=${paginate}${page}`;

  //console.log(apiUrl);

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
function getEventsHighlights({ url = null } = {}) {
  console.log(url);
  return fetch(`${API_URL}/events/highlights/slider_hero`)
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.data);
      return res.data;
    });
}
function getServices() {
  return fetch(`${API_URL}/services?paginate=9`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
}
function getService(id) {
  console.log(id);
  return fetch(`${API_URL}/services/${id}`)
    .then((res) => res.json())
    .then((res) => {
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
