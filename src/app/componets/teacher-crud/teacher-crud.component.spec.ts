import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCrudComponent } from './teacher-crud.component';

describe('TeacherCrudComponent', () => {
  let component: TeacherCrudComponent;
  let fixture: ComponentFixture<TeacherCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
