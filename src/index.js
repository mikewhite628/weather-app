import './stylesheet.css';
import { renderDom, handleError } from './dom';

async function getWeather() {
  try {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=houston&units=imperial&appid=aa5caca7182a564a6034a314252b6ef1', { mode: 'cors' });
    const weatherData = await response.json();
    renderDom(weatherData);
  } catch (error) {
    handleError();
  }
}

getWeather();

const btn = document.querySelector('.btn');
const searchBar = document.querySelector('.search-bar');

function getSearch() {
  return searchBar.value;
}

function clearSearch() {
  searchBar.value = '';
}

async function searchWeather() {
  const search = getSearch();
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=aa5caca7182a564a6034a314252b6ef1`, { mode: 'cors' });
    const searchResult = await response.json();
    renderDom(searchResult);
    clearSearch();
  } catch (error) {
    handleError();
  }
}

btn.addEventListener('click', searchWeather);
