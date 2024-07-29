import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const { value } = control;
  if (!value) {
    return null;
  }

  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumbers = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#?$%^&*()_+[\]{};':"\\|,.<>/?]+/.test(value);
  const isValid = hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
  return isValid ? null : {
    passwordValidator: {
      message: "Your password isn't strong enough. It should include a mixture of both uppercase and lowercase letters, letters and numbers, and at least one special character."
    }
  };
}
