/* tslint:disable */
/* eslint-disable */
import { ReservationModel } from '../models/reservation-model';
export interface ReservationDetailsModel {
  customerName?: string;
  customerPhone?: string;
  customerSurname?: string;
  endDate?: string;
  id?: number;
  reservation?: ReservationModel;
  startDate?: string;
  totalPrice?: number;
}
