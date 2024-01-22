import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredcardComponent } from './boredcard.component';

describe('BoredcardComponent', () => {
  let component: BoredcardComponent;
  let fixture: ComponentFixture<BoredcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoredcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoredcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
