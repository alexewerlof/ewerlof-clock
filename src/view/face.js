/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const indicator = require('./indicator');
const { color } = require('../settings');
const { min2deg } = require('../util');

function view(vnode) {
  const { cx, cy, r } = vnode.attrs;
  const children = [m('circle', { cx, cy, r, fill: color.face })];
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) {
      children.push(m(indicator, {
        cx,
        cy,
        r,
        length: r / 4.5,
        stroke: color.indicator,
        width: r / 18,
        rotation: min2deg(i)
      }));
    } else {
      children.push(m(indicator, {
        cx,
        cy,
        r,
        length: r / 10,
        stroke: color.indicator,
        width: r / 40,
        rotation: min2deg(i)
      }));
    }
  }
  return m('g', children);
}

module.exports = { view };
