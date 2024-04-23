/* tslint:disable */
/* eslint-disable */
import { AbstractJsonSchemaPropertyObject } from '../models/abstract-json-schema-property-object';
export interface Item {
  properties?: {
[key: string]: AbstractJsonSchemaPropertyObject;
};
  requiredProperties?: Array<string>;
  type?: string;
}
