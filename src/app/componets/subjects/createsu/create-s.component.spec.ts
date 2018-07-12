import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSComponent } from './create-s.component';

describe('CreateSComponent', () => {
  let component: CreateSComponent;
  let fixture: ComponentFixture<CreateSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
