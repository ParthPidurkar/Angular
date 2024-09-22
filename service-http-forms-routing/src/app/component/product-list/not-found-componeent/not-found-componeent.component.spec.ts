import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponeentComponent } from './not-found-componeent.component';

describe('NotFoundComponeentComponent', () => {
  let component: NotFoundComponeentComponent;
  let fixture: ComponentFixture<NotFoundComponeentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponeentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponeentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
