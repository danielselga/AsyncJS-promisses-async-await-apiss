'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const http = new XMLHttpRequest()

http.open('GET', 'https://restcountries.com/v3/name/brazil')
http.send()
