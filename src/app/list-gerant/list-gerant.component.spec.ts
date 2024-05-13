import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGerantComponent } from './list-gerant.component';

describe('ListGerantComponent', () => {
  let component: ListGerantComponent;
  let fixture: ComponentFixture<ListGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGerantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
