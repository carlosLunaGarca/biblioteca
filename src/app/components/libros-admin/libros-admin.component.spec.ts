import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosAdminComponent } from './libros-admin.component';

describe('LibrosAdminComponent', () => {
  let component: LibrosAdminComponent;
  let fixture: ComponentFixture<LibrosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
