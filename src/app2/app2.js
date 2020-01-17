import 'zone.js';
import 'reflect-metadata';
import { NgZone } from '@angular/core';
import singleSpaAngular from 'single-spa-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import MainModule from './main-module.ts';
import { Router } from '@angular/router';

const lifecycles = singleSpaAngular({
    bootstrapFunction: singleSPaProps => {
        return platformBrowserDynamic().bootstrapModule(MainModule);
    },
    template: `<app2 />`,
    Router,
    NgZone: NgZone,
    domElementGetter,
})

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app2');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app2';
    document.body.appendChild(el);
  }

  return el;
}