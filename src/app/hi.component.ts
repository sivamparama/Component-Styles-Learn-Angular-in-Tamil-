import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'hi',
  template: `<h1 class="test">Hi {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  encapsulation:ViewEncapsulation.Emulated
})
export class HiComponent  {
  @Input() name: string;
}
