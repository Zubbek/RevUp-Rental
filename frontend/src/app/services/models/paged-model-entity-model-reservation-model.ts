/* tslint:disable */
/* eslint-disable */
import { EntityModelReservationModel } from '../models/entity-model-reservation-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelReservationModel {
  '_embedded'?: {
'reservationModels'?: Array<EntityModelReservationModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
