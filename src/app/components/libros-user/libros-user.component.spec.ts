import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosUserComponent } from './libros-user.component';

describe('LibrosUserComponent', () => {
  let component: LibrosUserComponent;
  let fixture: ComponentFixture<LibrosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
