/* eslint-disable no-magic-numbers */

'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const { computeXY, sec2deg } = require('../util');
const motor = require('../motor');
const { color } = require('../settings');

function view(vnode) {
  const { cx, cy, r, filterId } = vnode.attrs;
  const rotation = sec2deg(motor.getSecond());
  const start = computeXY(cx, cy, -r / 5, rotation);
  const end = computeXY(cx, cy, r * 0.7, rotation);
  return m('g', { filter: `url(#${filterId})` }, [
    m('line', { x1: start.x, y1: start.y, x2: end.x, y2: end.y, style: { stroke: color.second, 'stroke-width': r / 40 } }),
    m('circle', { cx: end.x, cy: end.y, r: r / 15, fill: color.second }),
    m('circle', { cx, cy, r: r / 20, fill: color.second })
  ]);
}

module.exports = { view };
