import type { NativeStackScreenProps } from '@react-navigation/native-stack';


export interface IItem {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface IDetailsProps {
    route: {
        params: IItem
    }
}

export interface IAlbumDetails {
    userId: number,
    id: number,
    title: string
}

export type RootStackParamList = {
    Images: undefined;
    Details: IDetailsProps;
};