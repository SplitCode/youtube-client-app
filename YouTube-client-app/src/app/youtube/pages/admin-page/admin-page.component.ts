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
import { Store } from '@ngrx/store';

import { AuthService } from '../../../auth/services/auth.service';
import { LoggerService } from '../../../core/services/logger.service';
import { createCard } from '../../../redux/actions/card.actions';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { dateValidator } from '../../../shared/validators/validators';
import { CustomCardModel } from '../../models/custom-card-item.model';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  public adminForm: FormGroup;

  authService = inject(AuthService);
  logger = inject(LoggerService);
  store = inject(Store);
  private router = inject(Router);

  constructor() {
    this.adminForm = new FormGroup({
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
  }

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

  createCard() {
    if (this.adminForm.valid) {
      const card: CustomCardModel = this.adminForm.value;
      this.logger.logMessage('Card created');
      this.store.dispatch(createCard({ card }));
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
    while (this.tags.length > 1) {
      this.tags.removeAt(1);
    }
  }
}
