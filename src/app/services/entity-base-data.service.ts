export class EntityBaseDataService<T> {
    private entity: T = null;
    set = (entity: T) => this.entity = entity;
    get = () => this.entity;
    isNull = () => !!this.entity;
    remove = () => this.entity = null;
}
