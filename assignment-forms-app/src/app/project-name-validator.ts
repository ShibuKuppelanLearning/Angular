import { AsyncValidator, ValidationErrors, AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class ProjectNameValidator {

    static validateProjectName(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const validationResult: Promise<ValidationErrors | null> = new Promise((resolve, reject) => {
            setInterval(() => {
                if ((control as FormControl).value === "Test") {
                    return resolve({ 'InvalidProjectName': true });
                }
                return resolve(null);
            }, 2000);
        });
        return validationResult;
    }
}