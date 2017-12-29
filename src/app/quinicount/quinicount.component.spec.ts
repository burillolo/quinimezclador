import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinicountComponent } from './quinicount.component';

describe('QuinicountComponent', () => {
  let component: QuinicountComponent;
  let fixture: ComponentFixture<QuinicountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuinicountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinicountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
