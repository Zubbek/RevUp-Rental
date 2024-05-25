/* tslint:disable */
/* eslint-disable */
import { FavouritesModelResponse } from '../models/favourites-model-response';
import { Links } from '../models/links';
export interface CollectionModelFavouritesModel {
  '_embedded'?: {
'favouritesModels'?: Array<FavouritesModelResponse>;
};
  '_links'?: Links;
}
