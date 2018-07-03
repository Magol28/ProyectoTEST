import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTeachersComponent } from './grid-teachers.component';

describe('GridTeachersComponent', () => {
  let component: GridTeachersComponent;
  let fixture: ComponentFixture<GridTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
