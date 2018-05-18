import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountComponent } from './components/count/count.component';

import { Todos } from './stores/todos.store';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    FooterComponent,
    CountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MobxAngularModule
  ],
  providers: [Todos],
  bootstrap: [AppComponent]
})
export class AppModule { }
