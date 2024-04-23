/* tslint:disable */
/* eslint-disable */
import { AbstractJsonSchemaPropertyObject } from '../models/abstract-json-schema-property-object';
import { Item } from '../models/item';
export interface JsonSchema {
  '$schema'?: string;
  definitions?: {
[key: string]: Item;
};
  description?: string;
  properties?: {
[key: string]: AbstractJsonSchemaPropertyObject;
};
  requiredProperties?: Array<string>;
  title?: string;
  type?: string;
}
