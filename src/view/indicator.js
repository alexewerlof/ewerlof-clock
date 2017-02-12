/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const { computeXY, perc } = require('../util');
const { color } = require('../settings');

function view(vnode) {
  const { cx, cy, rotation, r, width, length } = vnode.attrs;
  const start = computeXY(cx, cy, r - length, rotation);
  const end = computeXY(cx, cy, perc(r, 95), rotation);
  return m('line', { x1: start.x, y1: start.y, x2: end.x, y2: end.y, style: { stroke: color.indicator, 'stroke-width': width } });
}

module.exports = { view };
