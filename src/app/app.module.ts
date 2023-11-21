import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypingComponent } from './common/typing/typing.component';
import { PwgComponent } from './common/pwg/pwg.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BothComponent } from './both/both.component';
import { WikipediaComponent } from './common2/wikipedia/wikipedia.component';
import { SearchbarComponent } from './common2/searchbar/searchbar.component';
import { PagelistComponent } from './common2/pagelist/pagelist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    PwgComponent,
    NavBarComponent,
    BothComponent,
    WikipediaComponent,
    SearchbarComponent,
    PagelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
