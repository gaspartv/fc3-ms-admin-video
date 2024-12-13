import { ValueObject } from "./value-objec";

export abstract class Entity {
  abstract get entity_id(): ValueObject;
  abstract toJSON(): any;
}
