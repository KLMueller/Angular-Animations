import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations: [
    // Change Div Size and Color Trigger
    trigger('changeDivSize', [
      state(
        'initial',
        style({
          backgroundColor: 'purple',
          width: '100px',
          height: '100px',
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'green',
          width: '200px',
          height: '200px',
        })
      ),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms')),
    ]),
    // Change Ballon Size and Color Trigger

    trigger('balloonEffect', [
      state(
        'initial',
        style({
          backgroundColor: 'green',
          transform: 'scale(1)',
        })
      ),
      state(
        'final',
        style({
          backgroundColor: 'yellow',
          transform: 'scale(1.5)',
        })
      ),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms')),
    ]),
    // Fade In and Out Trigger
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)),
    ]),
    // Appear/disappear Trigger
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in'),
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class AnimationdemoComponent {
  currentState = 'initial';
  listItem = [];
  list_order: number = 1;

  addItem() {
    var listitem = 'ListItem ' + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
