'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const timer = require('./view/timer');
const motor = require('./motor');
const settings = require('./settings');
document.body.style.backgroundColor = settings.color.bg;
motor.ontick(m.redraw);
m.mount(document.querySelector('#app'), timer);
