import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDetalladaComponent } from './carta-detallada.component';

describe('CartaDetalladaComponent', () => {
  let component: CartaDetalladaComponent;
  let fixture: ComponentFixture<CartaDetalladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaDetalladaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
