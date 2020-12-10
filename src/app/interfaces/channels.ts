interface IListProgram {
    time: string;
    name: string;
}

export interface IChannels {
    id: number;
    image: string;
    name: string;
    list: IListProgram[];
    link?: string;
}
