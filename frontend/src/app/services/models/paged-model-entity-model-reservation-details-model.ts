/* tslint:disable */
/* eslint-disable */
import { EntityModelReservationDetailsModel } from '../models/entity-model-reservation-details-model';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelReservationDetailsModel {
  '_embedded'?: {
'reservationDetailsModels'?: Array<EntityModelReservationDetailsModel>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
