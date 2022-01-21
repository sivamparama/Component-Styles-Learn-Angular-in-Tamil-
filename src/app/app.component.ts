import { Component, VERSION, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ], 
 // styles: [`
 //     .test{
 //       color:red;
 //     }
 //  `,
 //`p{
 //  background:aqua;
 //}`]

})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  show:any;
  showClass:any;
}
