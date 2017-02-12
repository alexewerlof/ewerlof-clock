'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const motor = require('../motor');
const face = require('./face');
const hourHand = require('./hourHand');
const minuteHand = require('./minuteHand');
const secondHand = require('./secondHand');
const { perc } = require('../util');
const { color } = require('../settings');

function view() {
  const width = document.body.clientWidth;
  const height = document.body.clientHeight;
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) / 2;
  return m('svg', { width, height }, [
    m('defs', [
      m('filter', { id: 'hourShadow', x: '-50%', y: '-50%', width: '200%', height: '200%' }, [
        m('feDropShadow', { dx: '0', dy: perc(r, 1), stdDeviation: '3', 'flood-color': color.shadow, 'flood-opacity': 0.5 })
      ]),
      m('filter', { id: 'minuteShadow', x: '-50%', y: '-50%', width: '200%', height: '200%' }, [
        m('feDropShadow', { dx: '0', dy: perc(r, 2), stdDeviation: '3', 'flood-color': color.shadow, 'flood-opacity': 0.5 })
      ]),
      m('filter', { id: 'secondShadow', x: '-50%', y: '-50%', width: '200%', height: '200%', filterUnits: 'userSpaceOnUse' }, [
        m('feDropShadow', { dx: '0', dy: perc(r, 4), stdDeviation: '3', 'flood-color': color.shadow, 'flood-opacity': 0.5 })
      ])
    ]),
    m(face, { cx, cy, r }),
    m(hourHand, { cx, cy, r, filter: 'url(#hourShadow)' }),
    m(minuteHand, { cx, cy, r, filter: 'url(#minuteShadow)' }),
    m(secondHand, { cx, cy, r, filter: 'url(#secondShadow)' }),
  ]);
}

const oninit = motor.updateTime;

const oncreate = motor.start;

const onremove = motor.stop;

module.exports = { view, oninit, oncreate, onremove };
