import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotModalAngularComponent } from './vf-chatbot-modal.angular.component';

describe('VfChatbotModalAngularComponent', () => {
  let component: VfChatbotModalAngularComponent;
  let fixture: ComponentFixture<VfChatbotModalAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotModalAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotModalAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
