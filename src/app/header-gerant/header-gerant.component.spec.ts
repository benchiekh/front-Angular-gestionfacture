import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGerantComponent } from './header-gerant.component';

describe('HeaderGerantComponent', () => {
  let component: HeaderGerantComponent;
  let fixture: ComponentFixture<HeaderGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGerantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
