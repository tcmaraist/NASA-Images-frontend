class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/asset/?orderby=popular`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  search(search) {
    return fetch(`${this._baseUrl}/search?media_type=image&q=${search}`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  getImage(nasa_id) {
    return fetch(`${this._baseUrl}/asset/${nasa_id}`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  getDetails(nasa_id) {
    return fetch(`${this._baseUrl}/metadata/${nasa_id}`, {
      headers: this._headers,
    })
      .then(this._handleServerResponse)
      .then(({ location }) => fetch(location))
      .then(this._handleServerResponse);
  }
}

const api = new Api({
  baseUrl: "https://images-api.nasa.gov",
  headers: {
    Authorization: "KNwVoypkMlR1eO8crEcvjgcm2fOaCoejuwIyKQ8b",
    "Content-Type": "application/json",
  },
});

export default api;
