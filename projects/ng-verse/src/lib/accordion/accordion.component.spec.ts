import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AccordionHeaderComponent } from './accordion-header.component';
import { AccordionBodyComponent } from './accordion-body.component';

@Component({
  selector: 'app-host',
  imports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
  ],
  template: `
    <app-accordion>
      <app-accordion-item>
        <app-accordion-header>Header 1</app-accordion-header>
        <app-accordion-body>Body 1</app-accordion-body>
      </app-accordion-item>
      <app-accordion-item>
        <app-accordion-header>Header 2</app-accordion-header>
        <app-accordion-body>Body 2</app-accordion-body>
      </app-accordion-item>
    </app-accordion>
  `,
})
class HostComponent {}

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  });

  it('should render multiple accordion items', () => {
    const accordionItems = fixture.debugElement.queryAll(
      By.directive(AccordionItemComponent)
    );
    expect(accordionItems.length).toBe(2);
  });
});
