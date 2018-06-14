import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  form: FormGroup;
  @Output() search = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({ query: ['', [Validators.required]] });
  }
}
