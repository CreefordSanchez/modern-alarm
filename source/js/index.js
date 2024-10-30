'use strict';

function listener (selector, event, callBack) {
  return selector.addEventListener(event, callBack);
}

function selector(selector) {
  return document.querySelector(selector);
}

const timeNow = selector('.current-time');
let isEmpty = true;

setInterval (() => {
  let time = new Date();
  time = time.toTimeString().slice(0,5);
  timeNow.innerText = time;
  checkAlarm(time);
})

const alarmSound = selector('.alarm-sound');
function checkAlarm(time) {
  let alarmValue = alarm.innerText;
  
  if (alarmValue === time) {
    console.log('playing it');
    alarmSound.play();
  }
}

const hour = selector('.set-hour');
const min = selector('.set-minutes');
function checkEmpty() {
  let hourValue = hour.value;
  let minValue = min.value;

  if (hourValue === '' || minValue === '') return true;
  return false;
}

const alarmHour = selector('.set-hour');
const alarmminutes = selector('.set-minutes');
const alarm = selector('.display-alarm');
function submits() {
  if (!checkEmpty()) {
    printAlarm();
    clear();
  }
}

function printAlarm() {
  if (!findLetters() && isInRange()) {
    addZero();
    alarm.innerText = `${alarmHour.value}:${alarmminutes.value}`;
  }
}

function addZero() {
  let hourValue = alarmHour.value;
  let minValue = alarmminutes.value
  
  if (hourValue < 10) {
    alarmHour.value = `0${hourValue}`;
  }
  if (minValue < 10) {
    alarmminutes.value = `0${minValue}`;
  }
}

function isInRange() {
  let hourValue = hour.value;
  let minValue = min.value;

  if (checkRange(hourValue, 25) && checkRange(minValue, 60)) return true;
  return false;
}

function checkRange(selector, max) {
  if (selector > 0 && selector < max) return true;
  return false;
}

function findLetters() {
  let isHourNum = isNaN(hour.value);
  let isMinNum = isNaN(min.value);
  
  if (isHourNum || isMinNum) return true;
  return false;
}

function clear() {
  alarmHour.value = '';
  alarmminutes.value = '';
}