class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/asset/?orderby=popular`);
  }
}

const api = new Api({
  baseUrl: "https://images-api.nasa.gov",
  headers: {
    Authorizaion: "KNwVoypkMlR1eO8crEcvjgcm2fOaCoejuwIyKQ8b",
    "Content-Type": "application/json",
  },
});

export default api;
