import fetch from 'isomorphic-fetch';

export const fetchGeneral = file =>
  fetch(file).then(response => response.json());
