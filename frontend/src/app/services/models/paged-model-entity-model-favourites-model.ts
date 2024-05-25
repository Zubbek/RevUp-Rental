/* tslint:disable */
/* eslint-disable */
import { EntityModelFavouritesModel } from '../models/entity-model-favourites-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelFavouritesModel {
  '_embedded'?: {
'favouritesModels'?: Array<EntityModelFavouritesModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
