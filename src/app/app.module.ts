import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ColorSelectorComponent} from './components/color-selector/color-selector.component';
import {ColorSelectOptionsComponent} from './components/color-select-options/color-select-options.component';
import {TriedColorComponent} from './components/tried-color/tried-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorSelectorComponent,
    ColorSelectOptionsComponent,
    TriedColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
