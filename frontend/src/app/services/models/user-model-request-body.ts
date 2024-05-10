/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface UserModelRequestBody {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  favourites?: Array<string>;
  id?: number;
  lastModifiedDate?: string;
  locked?: boolean;
  name?: string;
  password?: string;
  reservations?: Array<string>;
  roles?: Array<string>;
  username?: string;
}
