/* tslint:disable */
/* eslint-disable */
import { EntityModelMotorcycleDetailsModel } from '../models/entity-model-motorcycle-details-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelMotorcycleDetailsModel {
  '_embedded'?: {
'motorcycleDetailsModels'?: Array<EntityModelMotorcycleDetailsModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
