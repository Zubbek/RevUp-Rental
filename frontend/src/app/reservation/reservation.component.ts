import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import { range } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrService } from 'ngx-toastr';
import { ReservationControllerService } from '../services/services/reservation-controller.service';
import { ReservationRequest } from '../services/models/reservation-request';
import { GetAvailableDates$Params } from '../services/fn/reservation-controller/get-available-dates';
import {MatList, MatListItem} from "@angular/material/list";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatList, MatListItem],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  id: string | null | undefined;
  availableDates: Date[] = [];
  reservationForm: FormGroup;
  private price: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private reservationService: ReservationControllerService,
    private snackBar: MatSnackBar
  ) {
    this.reservationForm = this.fb.group({
      customerEmail: ['', [Validators.required, Validators.email]],
      customerName: ['', Validators.required],
      customerSurname: ['', Validators.required],
      customerPhone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      motorcycleId: [null, Validators.required],
      totalPrice: [0, Validators.required]
    }, { validators: [this.dateRangeValidator.bind(this)] });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Route param id:', this.id);
    console.log("daty: ", this.availableDates);

    if (this.id) {
      const motorcycleId = Number(this.id);
      console.log("motorcycleId w inicie: ", motorcycleId);
      this.reservationForm.patchValue({ motorcycleId: motorcycleId });
      this.loadAvailableDates(motorcycleId);
    }
    const state = window.history.state;

    // Sprawdź, czy stan zawiera price
    if (state && state.price) {
      this.price = state.price;
      console.log('Received price:', this.price);
    } else {
      console.log('Price not available in state');
    }

    this.reservationForm.get('startDate')?.valueChanges.subscribe(() => this.calculateTotalPrice());
    this.reservationForm.get('endDate')?.valueChanges.subscribe(() => this.calculateTotalPrice());
  }

  loadAvailableDates(motorcycleId: number): void {
    const params: GetAvailableDates$Params = { motorcycleId }; // Create params object
    this.reservationService.getAvailableDates(params).subscribe(
      (dates: string[]) => {
        this.availableDates = dates.map(date => this.parseDateString(date));
        console.log("Available dates: ", this.availableDates);
      },
      (error) => {
        console.error('Error fetching available dates', error);
      }
    );
  }

  dateRangeValidator(control: AbstractControl): ValidationErrors | null {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;

    if (!startDate || !endDate) {
      return null;
    }

    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();

    // Sprawdź, czy jakakolwiek data z availableDates znajduje się w zakresie startDate - endDate
    const isRangeValid = this.availableDates.every(date => {
      const unavailableDate = new Date(date).getTime();
      return unavailableDate >= start || unavailableDate <= end;
    });

    return isRangeValid ? null : { dateRangeInvalid: true };
  }

  // dateRangeValidator(control: AbstractControl): ValidationErrors | null {
  //   const startDate = control.get('startDate')?.value;
  //   const endDate = control.get('endDate')?.value;
  //   console.log("startDate: ", startDate);
  //   console.log("endDate: ", endDate);
  //
  //   if (!startDate || !endDate) {
  //     return null;
  //   }
  //
  //   const start = new Date(startDate).getTime();
  //   const end = new Date(endDate).getTime();
  //   console.log("start: ", start);
  //   console.log("end: ", end);
  //
  //   for (let date of this.availableDates) {
  //     const unavailableDate = new Date(date).getTime();
  //     if (unavailableDate >= start && unavailableDate <= end) {
  //       return {dateRangeInvalid: true};
  //     }
  //   }
  //
  //   return null;
  // }

  myFilter = (d: Date | null): boolean => {
    const date = (d || new Date());
    return this.availableDates.some(availableDate =>
      availableDate.getDate() === date.getDate() &&
      availableDate.getMonth() === date.getMonth() &&
      availableDate.getFullYear() === date.getFullYear()
    );
  }

  // onSubmit(): void {
  //   if (this.reservationForm.valid) {
  //     const reservationRequest: ReservationRequest = this.reservationForm.value;
  //
  //     reservationRequest.startDate = this.convertToIsoDate(this.reservationForm.get('startDate')?.value);
  //     reservationRequest.endDate = this.convertToIsoDate(this.reservationForm.get('endDate')?.value);
  //
  //     this.reservationService.createReservation({ body: reservationRequest }).subscribe(response => {
  //         if (response === 'Wrong email address') {
  //           this.toastr.error('Given email is incorrect, please give email from your account');
  //         } else {
  //           this.toastr.success('You have successfully made a reservation :)');
  //           this.loadAvailableDates(Number(this.id));
  //         }
  //     }, error => {
  //       console.error('There was an error creating the reservation!', error);
  //       this.toastr.error('Failed to create reservation. Please try again.');
  //     });
  //   } else {
  //     console.log('Form is invalid');
  //     console.log(this.reservationForm);
  //     Object.keys(this.reservationForm.controls).forEach(key => {
  //       const controlErrors = this.reservationForm.get(key)?.errors;
  //       if (controlErrors) {
  //         console.log('Key control: ' + key + ', Errors: ', controlErrors);
  //       }
  //     });
  //   }
  //}
  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservationRequest: ReservationRequest = this.reservationForm.value;

      // Konwersja dat na format ISO bez strefy czasowej
      reservationRequest.startDate = this.convertToIsoDate(this.reservationForm.get('startDate')?.value);
      reservationRequest.endDate = this.convertToIsoDate(this.reservationForm.get('endDate')?.value);

      this.reservationService.createReservation({ body: reservationRequest }).subscribe(
        (response: any) => {
          if (response && response.message === 'Reservation created successfully') {
            this.toastr.success('Reservation created successfully.');
            this.loadAvailableDates(Number(this.id));
          } else {
            this.toastr.error('Failed to create a reservation. Please try again');
            console.error('No correct answer received - reservation has not been created', response);
          }
        },
        error => {
          if (error.status === 400 && error.error.error === 'Wrong email address') {
            this.toastr.error('Wrong email address, please use emial from your account');
          } else if (error.status === 409 && error.error.error === 'Motorcycle is already reserved for the requested period') {
            this.toastr.error('Motorcycle is already reserved for the requested period.');
          } else {
            this.toastr.error('Failed to create a reservation. Please try again.');
          }
          console.error('Error occurred while creating reservation!', error);
        }
      );
    } else {
      console.log('Form is invalid');
      console.log(this.reservationForm);
      Object.keys(this.reservationForm.controls).forEach(key => {
        const controlErrors = this.reservationForm.get(key)?.errors;
        if (controlErrors) {
          console.log('Klucz kontrolny: ' + key + ', Błędy: ', controlErrors);
        }
      });
    }
  }



  private convertToIsoDate(date: any): string {
    if (date instanceof Date) {
      return date.toISOString().split('T')[0];
    }
    return date;
  }

  calculateTotalPrice(): void {
    const startDate = this.reservationForm.get('startDate')?.value;
    const endDate = this.reservationForm.get('endDate')?.value;

    if (startDate && endDate && this.price) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const days = (end - start) / (1000 * 60 * 60 * 24) + 1;
      const totalPrice = days * this.price;
      this.reservationForm.patchValue({ totalPrice: totalPrice });
    } else {
      this.reservationForm.patchValue({ totalPrice: 0 });
    }
  }

  parseDateString(dateString: string): Date {
    return new Date(dateString);
  }
  protected readonly Number = Number;
  protected readonly range = range;
}
