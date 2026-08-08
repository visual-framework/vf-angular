import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotFabAngularComponent } from './vf-chatbot-fab.angular.component';

describe('VfChatbotFabAngularComponent', () => {
  let component: VfChatbotFabAngularComponent;
  let fixture: ComponentFixture<VfChatbotFabAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotFabAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotFabAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
