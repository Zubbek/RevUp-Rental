/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { ReservationModelResponse } from '../models/reservation-model-response';
export interface CollectionModelReservationModel {
  '_embedded'?: {
'reservationModels'?: Array<ReservationModelResponse>;
};
  '_links'?: Links;
}
