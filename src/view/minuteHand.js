/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const { computeXY, min2deg } = require('../util');
const { color } = require('../settings');
const motor = require('../motor');

function view(vnode) {
  const { cx, cy, r } = vnode.attrs;
  const rotation = min2deg(motor.getMinute());
  const start = computeXY(cx, cy, -r / 5, rotation);
  const end = computeXY(cx, cy, r * 0.9, rotation);
  return m('line', { x1: start.x, y1: start.y, x2: end.x, y2: end.y, style: { stroke: color.minute, 'stroke-width': r / 16 } });
}

module.exports = { view };
