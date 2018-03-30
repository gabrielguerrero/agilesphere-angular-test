import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinct, map, takeWhile, tap, distinctUntilChanged } from 'rxjs/operators';

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
