/* tslint:disable */
/* eslint-disable */
import { MotorcycleModel } from '../models/motorcycle-model';
import { UserModel } from '../models/user-model';
export interface FavouritesModel {
  id?: number;
  motorcycle?: MotorcycleModel;
  user?: UserModel;
}
