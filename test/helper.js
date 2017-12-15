require('ignore-styles');
require('jsdom-global/register');
require('babel-polyfill');

global.requestAnimationFrame = () => {};
global.sessionStorage = {setItem: () => null, getItem: () => null};
global.history = {push: () => null};
