import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponentComponent } from './map-component.component';

describe('MapComponentComponent', () => {
  let component: MapComponentComponent;
  let fixture: ComponentFixture<MapComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
