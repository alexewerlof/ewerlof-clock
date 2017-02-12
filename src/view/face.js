/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const indicator = require('./indicator');
const { color } = require('../settings');
const { min2deg, perc } = require('../util');

function view(vnode) {
  const { cx, cy, r } = vnode.attrs;
  const children = [m('circle', { cx, cy, r, fill: color.face })];
  for (let i = 0; i < 60; i++) {
    if (i % 5) {
      // the little ones
      children.push(m(indicator, {
        cx,
        cy,
        r,
        length: perc(r, 12),
        width: perc(r, 2.7),
        rotation: min2deg(i)
      }));
    } else {
      // the big ones
      children.push(m(indicator, {
        cx,
        cy,
        r,
        length: perc(r, 25),
        width: perc(r, 6),
        rotation: min2deg(i)
      }));
    }
  }
  return m('g', children);
}

module.exports = { view };
