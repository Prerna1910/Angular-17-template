import { Component, OutputEmitterRef, SimpleChange, computed, effect, input, output } from '@angular/core';
import { outputToObservable } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {




  // constructor() {
  //   effect(() => {
  //     console.log(this.counter,"counterValueeee----");
  //   });}


  //   ngOnChanges(changes : SimpleChange){

  //   console.log("changes---",changes)

  //   }

  age = input(0, { alias: 'studentAge' });                  // InputSignal<number>

  // greetingClicked$ = outputToObservable(this.greetingClicked);

  greeting: any = computed(() => 1 + this.age());

  greetingOutput = output();

  greetingClicked = output<string>();

  greetingClicked$ = outputToObservable(this.greetingClicked);


  counter = input(0, { alias : "counterValue"} )


  hello = effect(() => {
    console.log(this.counter(),"counterValueeee----");
  });


  

}


  // getFromChild(){
  //   this.greetingOutput.emit(this.greeting)
  // }





