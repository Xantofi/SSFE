import { FormControl } from '@angular/forms';

export class CustomValidators {
  static noSpecialCharactersAllowed(control: FormControl) {
    const specialCharacters: RegExp = /[@#$%^&*()_+\-=\[\]{};'"\\|<>\/]/;
    if (control.value != null && specialCharacters.test(control.value)) {
      return { noSpecialCharactersAllowed: true };
    }
    return null;
  }
}
