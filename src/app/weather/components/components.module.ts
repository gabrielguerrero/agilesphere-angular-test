import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  exports: [SearchComponent, ResultsComponent],
  declarations: [SearchComponent, ResultsComponent]
})
export class ComponentsModule {}
