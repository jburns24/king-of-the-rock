import { IComponent } from './component.h'

export abstract class Entity {
    protected _components: IComponent[];

    public GetComponents(): IComponent[] {
        return this._components;
    }

    public AddComponent(component: IComponent): void {
        this._components.push(component);
        component.Entity = this;
    }

    public GetComponenet<C extends IComponent>(constr: { new( ...any: any[]): C }): C {
        for (const component of this._components) {
            if (component instanceof constr) {
                return component as C;
            }
        }
    }
}
