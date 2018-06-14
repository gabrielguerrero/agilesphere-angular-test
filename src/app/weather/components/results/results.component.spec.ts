import { CommonModule } from '@angular/common';
import { async, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { spy } from 'ts-mockito';
import { createWrapper, WrapperComponent, WrapperFixture } from '../../../components/testing/wrapper.component';
import { cityWeatherMock } from '../../store/mocks/index';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let wrapperFixture: WrapperFixture;
  const data: any = {
       results: cityWeatherMock
     };
  const dataSpy = spy(data);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent , WrapperComponent],
      imports: [ReactiveFormsModule, CommonModule],
    });
    wrapperFixture = createWrapper('<app-results [weather]="data.results"></app-results>', data);
  }));

  it('ensure results are rendered', () => {
    const headers = wrapperFixture.elementsInnerText('th');
    const dataColumns = wrapperFixture.elementsInnerText('td');
    expect(headers).toEqual(['City', '12 PM', '6 PM', '12 AM', '6 AM']);
    expect(dataColumns).toEqual(['Caracas', '286.67 °', '277.05 °', '273.341 °', '276.478 °']);
  });
});
