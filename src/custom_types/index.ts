export type myAction<T> = {
    type: string;
    payload: T;
};

export type TListItem = {
    title: string;
    attributes: Array<string>;
    description: string;
};