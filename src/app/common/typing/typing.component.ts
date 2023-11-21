import { Component } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css']
})
export class TypingComponent {
  mytext:string='hii shubham.'
  enteredText:string='';

  oninput(value:string){
    this.enteredText=value;
    console.log(this.enteredText)
  }

  compare(a1:string,a2:string){
    if(! a2) return 'pending'
    return a2===a1 ? 'correct':'incorrect'
  }

}
