import { Component } from '@angular/core';
import { PediaService } from 'src/app/pedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent {

  title='wikipedia';
  pages:any=[];

  constructor(private ps:PediaService){}


  Onemit(event:string){
    this.ps.getData(event).subscribe((res:any)=>{
      this.pages=res.query.search;
      console.log(this.pages);
  })

  }
}

