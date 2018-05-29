import { trigger, style, animate, transition, state } from '@angular/animations';
import {GlobalConstants} from '../constants/global.constants';

export const fade = [
  trigger('fade', [
    state('in', style({ 'opacity': '1' })),
    state('out', style({ 'opacity': '0' })),
    transition('* <=> *', [
      animate(GlobalConstants.ANIMATIONS.DEFAULT_TIME)
    ])
  ])
];
