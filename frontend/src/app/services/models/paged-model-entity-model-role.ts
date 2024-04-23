/* tslint:disable */
/* eslint-disable */
import { EntityModelRole } from '../models/entity-model-role';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelRole {
  '_embedded'?: {
'roles'?: Array<EntityModelRole>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
