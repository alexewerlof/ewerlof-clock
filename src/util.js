'use strict';

const toRadians = (angle) => angle * Math.PI / 180;
const toDegrees = (angle) => angle * 180 / Math.PI;

const hour2deg = (h) => h * 30;

const min2deg = (min) => min * 6;

const sec2deg = min2deg;

function computeXY(cx, cy, r, rotation) {
  return {
    x: cx + Math.sin(toRadians(rotation)) * r,
    y: cy - Math.cos(toRadians(rotation)) * r
  };
}

module.exports = { toRadians, toDegrees, computeXY, hour2deg, min2deg, sec2deg };
