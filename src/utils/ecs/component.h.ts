import { Entity } from "./Entity"

export interface IComponent {
    Entity: Entity | null;
}
