'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const motor = require('../motor');
const face = require('./face');
const minuteHand = require('./minuteHand');
const secondHand = require('./secondHand');

function view() {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) / 2;
  return m('svg', { width, height }, [
    m('defs', [
      m('filter', { id: 'shadow' }, [
        m('feDropShadow', { dx: '0', dy: '0', stdDeviation: '2' })
      ])
    ]),
    m(face, { cx, cy, r }),
    m(minuteHand, { cx, cy, r }),
    m(secondHand, { cx, cy, r, filterId: 'shadow' }),
  ]);
}

const oninit = motor.updateTime;

const oncreate = motor.start;

const onremove = motor.stop;

module.exports = { view, oninit, oncreate, onremove };
