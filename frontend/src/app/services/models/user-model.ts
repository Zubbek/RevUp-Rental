/* tslint:disable */
/* eslint-disable */
import { FavouritesModel } from '../models/favourites-model';
import { GrantedAuthority } from '../models/granted-authority';
import { ReservationModel } from '../models/reservation-model';
import { Role } from '../models/role';
export interface UserModel {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  favourites?: Array<FavouritesModel>;
  id?: number;
  lastModifiedDate?: string;
  locked?: boolean;
  name?: string;
  password?: string;
  reservations?: Array<ReservationModel>;
  roles?: Array<Role>;
  username?: string;
}
