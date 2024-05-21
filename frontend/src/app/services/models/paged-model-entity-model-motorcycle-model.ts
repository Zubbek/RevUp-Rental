/* tslint:disable */
/* eslint-disable */
import { EntityModelMotorcycleModel } from '../models/entity-model-motorcycle-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelMotorcycleModel {
  '_embedded'?: {
'motorcycleModels'?: Array<EntityModelMotorcycleModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
