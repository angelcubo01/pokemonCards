import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCartasComponent } from './tabla-cartas.component';

describe('TablaCartasComponent', () => {
  let component: TablaCartasComponent;
  let fixture: ComponentFixture<TablaCartasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCartasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
