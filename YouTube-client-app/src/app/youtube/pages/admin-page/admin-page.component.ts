import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { LoggerService } from '../../../core/services/logger.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { dateValidator } from '../../../shared/validators/validators';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  adminForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    img: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required, dateValidator]),
    tags: new FormArray([new FormControl('', Validators.required)]),
  });

  authService = inject(AuthService);
  logger = inject(LoggerService);
  private router = inject(Router);

  get title() {
    return this.adminForm.get('title');
  }

  get description() {
    return this.adminForm.get('description');
  }

  get img() {
    return this.adminForm.get('img');
  }

  get link() {
    return this.adminForm.get('link');
  }

  get date() {
    return this.adminForm.get('date');
  }

  get tags() {
    return this.adminForm.get('tags') as FormArray;
  }

  onSubmit() {
    if (this.adminForm.valid) {
      this.logger.logMessage('Card created');
      this.router.navigate(['/main']);
    }
  }

  addTag() {
    if (this.tags.length < 5) {
      this.tags.push(new FormControl('', [Validators.required]));
    }
  }

  removeTag(index: number) {
    if (this.tags.length > 1) {
      this.tags.removeAt(index);
    }
  }

  resetForm() {
    this.adminForm.reset();
    // Reset tags to only one empty input
    while (this.tags.length > 1) {
      this.tags.removeAt(1);
    }
  }
}
