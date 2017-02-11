'use strict';

// eslint-disable-next-line id-length
const m = require('mithril');
const timer = require('./view/timer');
const motor = require('./motor');
motor.ontick(m.redraw);
m.mount(document.querySelector('#app'), timer);
