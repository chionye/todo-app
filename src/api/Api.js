const API_URL = "http://localhost:8080";

export const Api = (endpoint, payload, method, accessToken) => {
  return fetch(`${API_URL}${endpoint}`, {
    method: method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-access-token": accessToken,
    },
    body: JSON.stringify(payload),
  });
};
