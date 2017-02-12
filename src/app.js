'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const clock = require('./view/clock');
const motor = require('./motor');
const settings = require('./settings');

document.body.style.backgroundColor = settings.color.bg;
motor.ontick(m.redraw);
m.mount(document.body, clock);
