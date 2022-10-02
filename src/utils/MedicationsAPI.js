const api = process.env.REACT_APP_CONTACTS_API_URL || "http://run.mocky.io";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};

export const getAll = () =>
  fetch(`${api}/v3/a78af611-3af6-481c-98a0-ba04a5f7ce70`, { headers })
    .then((res) => res.json())
    .then((data) => data.problems[0].Diabetes[0].medications[0].medicationsClasses[0]);
