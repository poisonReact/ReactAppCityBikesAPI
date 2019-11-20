import * as actions from 'components/networks/networksActions'

export interface INetwork {
    company: string[];
    id: string
}

type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U
    : never;

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;