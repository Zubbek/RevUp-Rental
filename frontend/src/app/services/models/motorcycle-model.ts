/* tslint:disable */
/* eslint-disable */
import { FavouritesModel } from '../models/favourites-model';
import { MotorcycleDetailsModel } from '../models/motorcycle-details-model';
import { ReservationModel } from '../models/reservation-model';
export interface MotorcycleModel {
  articleId?: number;
  category?: string;
  company?: string;
  favourites?: Array<FavouritesModel>;
  id?: number;
  image?: string;
  model?: string;
  motorcycleDetails?: MotorcycleDetailsModel;
  price?: number;
  reservations?: Array<ReservationModel>;
  reserved?: boolean;
}
