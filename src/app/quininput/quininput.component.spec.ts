import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuininputComponent } from './quininput.component';

describe('QuininputComponent', () => {
  let component: QuininputComponent;
  let fixture: ComponentFixture<QuininputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuininputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuininputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
