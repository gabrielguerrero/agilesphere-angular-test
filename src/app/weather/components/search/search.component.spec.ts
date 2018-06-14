import { async, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { createWrapper, WrapperComponent, WrapperFixture } from '../../../components/testing/wrapper.component';
import { reset, spy, verify } from 'ts-mockito';

describe('SearchComponent', () => {
  let wrapperFixture: WrapperFixture;
  const data: any = {
       fakeCall: (query) => {}
     };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent , WrapperComponent],
      imports: [ReactiveFormsModule, CommonModule],
    });
    wrapperFixture = createWrapper('<app-search (search)="data.fakeCall($event)"></app-search>', data);
  }));

  it('ensure search component event on gets fired on buttton press', () => {
    const dataSpy = spy(data);
    const searchComponent = wrapperFixture.getComponent(SearchComponent);
    searchComponent.form.setValue({query: 'Caracas'});
    wrapperFixture.click('[data-test="searchButton"]');
    wrapperFixture.detectChanges();
    verify(dataSpy.fakeCall('Caracas')).once();
    /** the following line is to make jasmine happy and not show a warning,
     the test is done by verify but jasmine cant detect that*/
    expect().nothing();
  });

  it('ensure search component event on submit', () => {
    const dataSpy = spy(data);
    const searchComponent = wrapperFixture.getComponent(SearchComponent);
    searchComponent.form.setValue({query: 'Caracas'});
    wrapperFixture.element('form').triggerEventHandler('submit', {});
    wrapperFixture.detectChanges();
    verify(dataSpy.fakeCall('Caracas')).once();
    /** the following line is to make jasmine happy and not show a warning,
     the test is done by verify but jasmine cant detect that*/
    expect().nothing();
  });
});
