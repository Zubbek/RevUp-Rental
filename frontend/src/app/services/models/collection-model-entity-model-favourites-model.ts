/* tslint:disable */
/* eslint-disable */
import { EntityModelFavouritesModel } from '../models/entity-model-favourites-model';
import { Links } from '../models/links';
export interface CollectionModelEntityModelFavouritesModel {
  '_embedded'?: {
'favouritesModels'?: Array<EntityModelFavouritesModel>;
};
  '_links'?: Links;
}
