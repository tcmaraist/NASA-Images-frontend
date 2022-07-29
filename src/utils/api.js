class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
}

const api = new Api({
  baseUrl: "https://images-api.nasa.gov/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
