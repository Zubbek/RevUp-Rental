/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Links } from '../models/links';
export interface EntityModelUserModel {
  '_links'?: Links;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  lastModifiedDate?: string;
  locked?: boolean;
  name?: string;
  password?: string;
  username?: string;
}
