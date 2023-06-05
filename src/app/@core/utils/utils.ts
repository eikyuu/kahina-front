import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

export const handleError = (error: HttpErrorResponse) => {
    if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
            `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
};

export const trackByFn = (index: number): number => {
    return index;
}


export class Login {

    _formBuilder = inject(FormBuilder);
  
    submitted = false;
    loading = false;
  
    formGroup: { email: any, password: any} = {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    };
  
    loginForm = this._formBuilder.group(this.formGroup);
  
    get form() {
      return this.loginForm.controls;
    }
  
    submit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
      this.loading = true;
      console.log(this.loginForm.value);
    }
  
    
  }
  