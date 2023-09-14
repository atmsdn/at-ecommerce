import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBottomOfferComponent } from './banner-bottom-offer.component';

describe('BannerBottonOfferComponent', () => {
  let component: BannerBottomOfferComponent;
  let fixture: ComponentFixture<BannerBottomOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BannerBottomOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBottomOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
