/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const { computeXY } = require('../util');
const { color } = require('../settings');

function view(vnode) {
  const { cx, cy, rotation, r, stroke, width, length } = vnode.attrs;
  const start = computeXY(cx, cy, r - length, rotation);
  const end = computeXY(cx, cy, r * 0.95, rotation);
  return m('line', { x1: start.x, y1: start.y, x2: end.x, y2: end.y, style: { stroke, 'stroke-width': width } });
}

module.exports = { view };
