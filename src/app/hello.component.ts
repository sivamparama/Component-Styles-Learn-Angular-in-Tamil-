import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 class="test">Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }
  .test{
    background:pink
  }
  :host=context(.show){
    backcolor: orenge;
  }`],
  encapsulation:ViewEncapsulation.Emulated
})
export class HelloComponent  {
  @Input() name: string;
}
