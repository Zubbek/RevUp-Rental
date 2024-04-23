/* tslint:disable */
/* eslint-disable */
import { EntityModelUserModel } from '../models/entity-model-user-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelUserModel {
  '_embedded'?: {
'userModels'?: Array<EntityModelUserModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
