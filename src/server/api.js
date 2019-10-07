import axios from 'axios';

const qs = require('qs');

const prefix = 'http://localhost:8081'

export function get (url, query) {
  axios.get(`${prefix}${url}`, {
    params: query
  }).then((res) => {
    return res;
  }).catch((err) => {
    console.log(err);
  });
}

export function post (url, query, upload) {
  const data = upload ? query : qs.stringify(query);
  return axios.post(
    `${prefix}${url}`,
    data,
    // { headers: { 'Content-type': 'application/x-www-form-urlencoded' } },
  ).then((res = {}) => {
    return res.data;
  }).catch((err) => {
    console.log(err);
  })
}

export const HTTP_ORIGIN = 'http://localhost:8088/static/upload/';