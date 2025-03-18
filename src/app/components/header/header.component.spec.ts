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

  it('should initialize with correct nav items', () => {
    expect(component.navItems).toBeDefined();
    expect(component.navItems.length).toBe(5);
    expect(component.navItems[0]).toEqual(jasmine.objectContaining({ 
      label: 'About', 
      hasDropdown: true 
    }));
    expect(component.navItems[1]).toEqual(jasmine.objectContaining({ 
      label: 'Components', 
      hasDropdown: true 
    }));
    expect(component.navItems[2]).toEqual(jasmine.objectContaining({ 
      label: 'GitHub', 
      hasDropdown: false 
    }));
    expect(component.navItems[3]).toEqual(jasmine.objectContaining({ 
      label: 'Slack', 
      hasDropdown: false 
    }));
    expect(component.navItems[4]).toEqual(jasmine.objectContaining({ 
      label: 'Search', 
      hasDropdown: true 
    }));
  });

  xit('should call vfMegaMenu on init', () => {
    fixture.detectChanges(); // This will trigger ngOnInit
    expect(window.vfMegaMenu).toHaveBeenCalled();
  });

  // Additional test cases for error scenarios
  it('should handle null nav items gracefully', () => {
    component.navItems = null as any;
    fixture.detectChanges();
  });

  it('should handle undefined nav items gracefully', () => {
    component.navItems = undefined as any;
    fixture.detectChanges();
  });
});