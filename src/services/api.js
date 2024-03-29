const API_URL = process.env.VUE_APP_API;

function getEvents({ paginate = 9, query = null, page = null } = {}) {
  const apiUrl = query
    ? `${API_URL}${query}paginate=${paginate}${page}`
    : `${API_URL}/events?paginate=${paginate}${page}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
function getEvent(id) {
  return fetch(`${API_URL}/events/${id}`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
}
function getEventsHighlights({ paginate = 4, url = null } = {}) {
  const path = url ? url : "slider_hero";
  const apiUrl = `${API_URL}/events/highlights/${path}?paginate=${paginate}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
}
function getServices({
  paginate = 4,
  query = null,
  page = "",
  order_by = "name",
} = {}) {
  const apiUrl = query
    ? `${API_URL}${query}paginate=${paginate}${page}&order_by=${order_by}`
    : `${API_URL}/services?paginate=${paginate}${page}&order_by=${order_by}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
function getService(id) {
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
