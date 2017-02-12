/* eslint-disable no-magic-numbers */

'use strict';

const { rgb, gray } = require('./util');

const color = {
  bg: gray(227),
  face: gray(240),
  hour: gray(60),
  minute: gray(60),
  second: rgb(213, 74, 62),
  indicator: gray(60),
  shadow: gray(30)
};

module.exports = { color };
