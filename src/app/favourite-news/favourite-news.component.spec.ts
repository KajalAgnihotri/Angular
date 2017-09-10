import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteNewsComponent } from './favourite-news.component';

describe('FavouriteNewsComponent', () => {
  let component: FavouriteNewsComponent;
  let fixture: ComponentFixture<FavouriteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
