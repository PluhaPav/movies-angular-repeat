interface IListProgram {
    time: string;
    name: string;
}

export interface IChannels {
    image: string;
    name: string;
    list: IListProgram[];
    link?: string;
}
