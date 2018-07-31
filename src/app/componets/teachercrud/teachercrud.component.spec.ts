import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercrudComponent } from './teachercrud.component';

describe('TeachercrudComponent', () => {
  let component: TeachercrudComponent;
  let fixture: ComponentFixture<TeachercrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachercrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
