import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MessagesComponent],
  declarations: [MessagesComponent]
})
export class MessagingModule { }
