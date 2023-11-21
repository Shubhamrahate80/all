import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
   @Output() emitter=new EventEmitter<string>();
  term:string=''

  onFormSubmit(event:any){
    event.preventDefault()
    // /console.log(this.term)
    this.emitter.emit(this.term);
  }

}
