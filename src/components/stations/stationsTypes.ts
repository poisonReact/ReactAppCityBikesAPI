import * as actions from 'components/stations/stationsActions'
export interface IStation {
    id: string;
    name: string;
    free_bikes: string;
    empty_slots: string;
}

type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;