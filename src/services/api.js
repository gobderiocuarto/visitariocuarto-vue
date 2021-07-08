const API_URL = "https://admin.visitariocuarto.gob.ar/api/v1";

function getEvents({ paginate = 9, query = null } = {}) {
  // const pathUrl = filtered ? "?search=" : "/" + filtered + "/";

  // console.log(pathUrl);
  console.log(query);
  //const apiUrl = `${API_URL}/events?paginate=${paginate}`;

  const apiUrl = query
    ? `${API_URL}/events${query}paginate=${paginate}`
    : `${API_URL}/events?paginate=${paginate}`;

  console.log(apiUrl);
  //console.log(filter);
  // const apiUrl = filter
  //   ? filter === "search"
  //     ? `${API_URL}/events?search=${filter}&paginate=${paginate}`
  //     : `${API_URL}/events?paginate=${paginate}`
  //   : `${API_URL}/events?paginate=${paginate}`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
}
function getEvent(id) {
  console.log(id);
  return fetch(`${API_URL}/events?paginate=9`)
    .then((res) => res.json())
    .then((res) => {
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
  return fetch(`${API_URL}/services?paginate=9`)
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    });
}

export default {
  getEvents,
  getEvent,
  getServices,
  getService,
};
