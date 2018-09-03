import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMainMenuComponent } from './stock-main-menu.component';

describe('StockMainMenuComponent', () => {
  let component: StockMainMenuComponent;
  let fixture: ComponentFixture<StockMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
