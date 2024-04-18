import { Component, computed, effect, input, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {


  constructor() {
    effect(() => {
      console.log(this.clicks);
    });
  console.log("----",this.clickEffect);

  }



  // optional
  clicks = 0;
  updatedValue = 2;
  firstName = input<string>();         // InputSignal<string|undefined>
  //  age = input(0);    

  // required
  lastName = input<string>(); // InputSignal<string>

  getOutput(event: any) {

    console.log("event--", event)

  }
  eventReceived() {
    this.clicks++;
  }

  clickEffect = effect( ()=> 
  {
    console.log(this.clicks,"this.clickss")
  });


  updateValue(){
    this.updatedValue++;

  }
  

  

}
