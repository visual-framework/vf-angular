import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VfChatbotDialogAngularComponent } from './vf-chatbot-dialog.angular.component';

describe('VfChatbotDialogAngularComponent', () => {
  let component: VfChatbotDialogAngularComponent;
  let fixture: ComponentFixture<VfChatbotDialogAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VfChatbotDialogAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VfChatbotDialogAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
