import axios from 'axios';

const qs = require('qs');

const prefix = 'http://localhost:8080'

export function get (url, query) {
  axios.get(`${prefix}${url}`, {
    params: query
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
}

export function post (url, query) {
  return axios.post(
    `${prefix}${url}`,
    qs.stringify(query),
    { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  ).then((res = {}) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })
}