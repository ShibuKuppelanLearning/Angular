import { AsyncValidatorFn, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomEmailValidator  {    

    static validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setInterval(() => {
                const forbiddenEmails: string[] = ['test@test.com'];
                if (forbiddenEmails.indexOf(control.value) > -1) {                    
                    return resolve({ 'InvalidEmailId': true });
                } else {
                    return null;
                }
            }, 5000);
        });
    }

}