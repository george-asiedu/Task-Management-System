import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [HeaderComponent, NgClass, NgFor],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements AfterViewInit {
  @ViewChildren('input') inputs!: QueryList<ElementRef>;
  buttonActive = false;

  inputsArray: number[] = Array(6).fill(0); // Create an array to hold six input fields

  ngAfterViewInit(): void {
    // Focus the first input on window load
    setTimeout(() => {
      if (this.inputs.first) {
        this.inputs.first.nativeElement.focus();
      }
    }, 0);
  }

  onKeyup(event: KeyboardEvent, index: number): void {
    const inputsArray = this.inputs.toArray();
    const currentInput = inputsArray[index].nativeElement;
    const nextInput = inputsArray[index + 1]?.nativeElement;
    const prevInput = inputsArray[index - 1]?.nativeElement;

    // If the value has more than one character, clear it
    if (currentInput.value.length > 1) {
      currentInput.value = '';
      return;
    }

    // If the next input is disabled and the current value is not empty
    // Enable the next input and focus on it
    if (nextInput && nextInput.hasAttribute('disabled') && currentInput.value !== '') {
      nextInput.removeAttribute('disabled');
      nextInput.focus();
    }

    // If the backspace key is pressed
    if (event.key === 'Backspace') {
      // Iterate over all inputs again
      inputsArray.forEach((input, i) => {
        const inputElement = input.nativeElement;
        // If the index of the current input is less than or equal to the index of the input in the outer loop
        // and the previous element exists, set the disabled attribute on the input and focus on the previous element
        if (index <= i && prevInput) {
          inputElement.setAttribute('disabled', 'true');
          inputElement.value = '';
          prevInput.focus();
        }
      });
    }

    // If the fourth input (index 3) is not empty and has no disabled attribute
    // Add active class, if not, then remove the active class
    if (!inputsArray[3].nativeElement.disabled && inputsArray[3].nativeElement.value !== '') {
      this.buttonActive = true;
      return;
    }
    this.buttonActive = false;
  }
}
