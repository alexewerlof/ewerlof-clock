'use strict';

const toRadians = (angle) => angle * Math.PI / 180;
const toDegrees = (angle) => angle * 180 / Math.PI;

const hour2deg = (hour) => hour * 30;

const min2deg = (min) => min * 6;

const sec2deg = min2deg;

const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

const gray = (g) => rgb(g, g, g);

function computeXY(cx, cy, r, rotation) {
  return {
    x: cx + Math.sin(toRadians(rotation)) * r,
    y: cy - Math.cos(toRadians(rotation)) * r
  };
}

// Calculate percentage on an absolute value
function perc(x, percentage, natural = false) {
  const ret = x * percentage / 100;
  return natural ? Math.round(ret) : ret;
}

module.exports = { toRadians, toDegrees, computeXY, hour2deg, min2deg, sec2deg, perc, rgb, gray };
