import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './header.component';

// Declare the window interface extension
declare global {
  interface Window {
    vfMegaMenu: () => void;
  }
}

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async () => {
    // Create spy for window.vfMegaMenu
    window.vfMegaMenu = jasmine.createSpy('vfMegaMenu');

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call vfMegaMenu on init', () => {
    fixture.detectChanges(); // This will trigger ngOnInit
    expect(window.vfMegaMenu).toHaveBeenCalled();
  });
});