import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentariosComponent } from './list-cometarios.component';

describe('ListCometariosComponent', () => {
  let component: ListComentariosComponent;
  let fixture: ComponentFixture<ListComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
