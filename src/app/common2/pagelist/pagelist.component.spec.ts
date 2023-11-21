import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagelistComponent } from './pagelist.component';

describe('PagelistComponent', () => {
  let component: PagelistComponent;
  let fixture: ComponentFixture<PagelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagelistComponent]
    });
    fixture = TestBed.createComponent(PagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
