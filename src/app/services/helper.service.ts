// import { PrimeNgDtRowSelectEvent } from '../interfaces/primeng-dt-row-select-event.interface';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { appVariables, validationMessages } from '../app.constants';

function getWindow(): any {
  return window;
}

@Injectable()
export class HelperService {
  addContentTypeHeader: boolean | string = true;
  constructor(public slimLoadingBarService: SlimLoadingBarService) {
  }

  // return the global window object
  get nativeWindow(): any {
    return getWindow();
  }

  /**
   * Use this method to create logs to the server
   * Pass info like error stack (if error), user info, user brower and other details
   */
  serverLogger(log: any) {
    // tslint:disable-next-line:no-console

  }

  secondsTicksCounter(): object {
    let seconds: number = 0;
    // tslint:disable-next-line:prefer-const
    let interval;
    return {
      start: () => {
        return setInterval(function () {
          seconds++;
        }, 1000);
      },
      stop: (intervalInstance: any) => {
        clearInterval(intervalInstance);
        return seconds;
      },
      intervalInstance: null,
    };
  }

  initFormControls(self: object, formGroup: FormGroup, controlNames: string[]): void {
    for (const controlName of controlNames) {
      self[controlName] = formGroup.controls[controlName];
    }
  }

  getInputValidationClass(formGroup: FormGroup, formControlName: string): string {
    if (formGroup) {
      const formControl: AbstractControl = formGroup.controls[formControlName];
      if (formControl && formControl.touched) {
        return formControl.valid ? appVariables.successInputClass : appVariables.errorInputClass;
      }
    }

    return '';
  }

  getConfirmInputValidationClass(compareFromGroup: FormGroup,
    formControl: AbstractControl, confirmFormControl: AbstractControl, test: FormGroup): string {
    if ((formControl && formControl.touched) || (confirmFormControl && confirmFormControl.touched)) {
      return compareFromGroup.valid ? appVariables.successInputClass : appVariables.errorInputClass;
    }
    if (formControl && formControl.touched) {
      return formControl.valid ? appVariables.successInputClass : appVariables.errorInputClass;
    } else {
      return '';
    }
  }

  showCompareCtrlsValidationMsg(frmGroup: FormGroup, ctrl1: AbstractControl, ctrl2: AbstractControl): boolean {
    return (frmGroup && !frmGroup.valid && (ctrl1.touched || ctrl1.touched)) ? true : false;
  }

  showCtrlValidationMsg(formControl: AbstractControl): boolean {
    return (formControl && !formControl.valid && formControl.touched && formControl.errors) ? true : false;
  }

  getCtrlValidationMsg(formGroup: FormGroup, ctrlName: string): string {
    if (formGroup) {
      const formControl: AbstractControl = formGroup.controls[ctrlName];
      if (formControl && formControl.errors) {
        const errors = formControl.errors;
        if (errors.required) {
          return validationMessages[ctrlName].required;
        } else if (errors.minlength && errors.minlength.requiredLength) {
          return validationMessages[ctrlName].minLength(errors.minlength.requiredLength);
        } else if (errors.maxlength && errors.maxlength.requiredLength) {
          return validationMessages[ctrlName].maxLength(errors.maxlength.requiredLength);
        } else if (errors.digitsOnly && !errors.digitsOnly.valid) {
          return validationMessages[ctrlName].digitsOnly();
        } else if (errors.validateEmail && !errors.validateEmail.valid) {
          return validationMessages[ctrlName].invalid();
        }
      }
    }

    return null;
  }

  getFormGroupCtrlValidationMsg(frmGroup: FormGroup, ctrlName: string): string {
    if (frmGroup && frmGroup.errors) {
      const errors = frmGroup.errors;
      if (errors.equal && !errors.equal.valid) {
        return validationMessages[ctrlName].equal;
      }
    }
  }

  startLoader(delay?: number): void {
    delay = delay || typeof delay === 'number' ? delay : 0;
    setTimeout(() => {
      this.slimLoadingBarService.start(() => {
        // Loading Completed;
      });
    }, delay);
  }

  stopLoader(delay?: number): void {
    delay = delay || typeof delay === 'number' ? delay : 0;
    setTimeout(() => {
      this.slimLoadingBarService.complete();
    }, delay);
  }

  getObjectKeys(object: {}): string[] {
    if (!object || typeof object !== 'object') {
      throw new Error('Only objects can be passed to retrieve its own enumerable properties(keys).');
    }
    return Object.keys(object);
  }

  searchInArray(inputArray, lookUpArray, caseSensitiveSearch): any[] {
    const result: any[] = [];
    outer:
    for (let index = 0; index < inputArray.length; index++) {
      const item = inputArray[index];
      for (let i = 0; i < lookUpArray.length; i++) {
        const lookUpItem = lookUpArray[i];
        if (item[lookUpItem.key] !== lookUpItem.value) {
          continue outer;
        }
      }
      result.push(item);
    }
    return result;
  }

  searchInArrayTest(inputArray: any[], lookUpArray: any[], caseSensitiveSearch?: boolean, exactMatch?: boolean): any[] {
    const result: any[] = [];
    outer:
    for (const item of inputArray) {
      for (const lookUpItem of lookUpArray) {
        const sourceString: string = caseSensitiveSearch ? item[lookUpItem.key].toString() :
          item[lookUpItem.key].toString().toLocaleLowerCase();
        const searchForString: string = caseSensitiveSearch ? lookUpItem.value.toString() :
          lookUpItem.value.toString().toLocaleLowerCase();
        if (exactMatch) {
          if (sourceString === searchForString) {
            continue outer;
          }
        } else {
          if (sourceString.indexOf(searchForString) === -1) {
            continue outer;
          }
        }
      }
      result.push(item);
    }
    return result;
  }

  // togglePrimeNgDtRowsSelection(event: PrimeNgDtRowSelectEvent, lookupObject: object,
  //   selectedItems: any[]): any[] {
  //   if (!event.originalEvent.checked) {
  //     return _.remove(selectedItems, lookupObject);
  //   } else {
  //     selectedItems.push(event.data);
  //     return selectedItems;
  //   }
  // }
}
