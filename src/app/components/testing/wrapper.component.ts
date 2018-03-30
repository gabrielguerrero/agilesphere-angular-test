import { Component, DebugElement, Inject, InjectionToken, Type } from '@angular/core';
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const TEST_DATA = new InjectionToken<any>('test.data');

@Component({
  selector: 'mc-wrapper',
  template: '',
  providers: [{ provide: TEST_DATA, useValue: null }]
})
export class WrapperComponent {
  constructor(@Inject(TEST_DATA) public data: any) {}
}

export class WrapperFixture {
  public debugElement: DebugElement;
  constructor(public fixture: ComponentFixture<WrapperComponent>) {
    this.debugElement = this.fixture.debugElement;
  }

  getComponent<T>(clazz: Type<T>): T {
    return this.fixture.debugElement.query(By.directive(clazz)).componentInstance as T;
  }
  getComponents<T>(clazz: Type<T>): T[] {
    return this.fixture.debugElement
      .queryAll(By.directive(clazz))
      .map(de => de.componentInstance as T);
  }
  getService<T>(clazz: Type<T>): T {
    return TestBed.get(clazz) as T;
  }
  detectChanges() {
    this.fixture.detectChanges();
  }
  click(css: string): number {
    const result = this.elements(css);
    result && result.forEach(de => de.triggerEventHandler('click', {}));
    return result.length;
  }

  elements(css: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(css));
  }

  element(css: string): DebugElement {
    return this.fixture.debugElement.query(By.css(css));
  }

  elementsInnerText(css: string): string[] {
    return this.elements(css).map(de => de.nativeElement.innerText);
  }

  elementInnerText(css: string): string {
    const e = this.element(css);
    return e && e.nativeElement.innerText;
  }
}

export function configureTestingModule(moduleDef: TestModuleMetadata): typeof TestBed {
  moduleDef.declarations = [...(moduleDef.declarations || []), WrapperComponent];
  return TestBed.configureTestingModule(moduleDef);
}
export function createWrapper(template: string, data?: any): WrapperFixture {
  const fixture = TestBed.overrideComponent(WrapperComponent, {
    set: {
      template: template,
      providers: [{ provide: TEST_DATA, useFactory: () => data }]
    }
  }).createComponent(WrapperComponent);
  fixture.detectChanges();
  return new WrapperFixture(fixture);
}
