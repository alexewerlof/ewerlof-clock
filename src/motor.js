'use strict';

let intervalId, updateTimeCallback;
let hour = 0;
let minute = 0;
let second = 0;

function updateTime() {
  const now = new Date();
  second = now.getSeconds() + now.getMilliseconds() / 1000;
  minute = now.getMinutes() + second / 60;
  hour = now.getHours() + minute / 60;
}

function tick() {
  intervalId = requestAnimationFrame(() => {
    updateTime();
    tick();
    if (typeof updateTimeCallback === 'function') {
      updateTimeCallback();
    }
  });
}

function ontick(eventListener) {
  if (typeof eventListener === 'function') {
    updateTimeCallback = eventListener;
  } else {
    throw new Error('motor event listener must be a function');
  }
}

function start() {
  tick();
}

function stop() {
  clearInterval(intervalId);
}

const getHour = () => hour;
const getMinute = () => minute;
const getSecond = () => second;

module.exports = { updateTime, getHour, getMinute, getSecond, start, stop, ontick };
