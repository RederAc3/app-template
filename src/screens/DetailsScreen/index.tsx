import { useEffect, useState } from "react";
import { Text, Image, View, ActivityIndicator, ScrollView } from 'react-native';

import { getData as getAlbumDetails } from "../../functions/index";

import styles from "./DetailsScreen.styles";
import { IDetailsProps, IAlbumDetails } from "../../types";

const DetailsScreen: React.FC<IDetailsProps> = ({ route: { params: { title, url, albumId, id } } }) => {

    const [data, setData] = useState<IAlbumDetails | undefined>({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAlbumDetails(`https://jsonplaceholder.typicode.com/albums/${albumId}`, setData, setIsLoading);
    }, []);

    return (

        <ScrollView>

            {isLoading ? <ActivityIndicator /> : (
                
                <>
                    <Image
                        style={styles.image}
                        source={{ uri: url }}
                    />
                    <View style={styles.textWrapper}>
                        <Text>Zdjęcie nr {id}</Text>
                        <Text style={styles.titleLabel}>Nazwa:</Text>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.titleLabel}>Album:</Text>
                        <Text style={styles.album}>{data.title}</Text>
                    </View>
                </>
            )}
        </ScrollView>
    )
}

export default DetailsScreen;