import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ValueSharingService } from '../../service/value-sharing.service';

@Component({
  selector: 'app-submission-information',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './submission-information.component.html',
  styleUrl: './submission-information.component.css'
})
export class SubmissionInformationComponent {
  constructor(public valueSharingService: ValueSharingService) {}
}
