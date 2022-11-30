import { useEffect, useState } from "react";
import { FlatList } from 'react-native';

import Item from "../../components/Item";
import { getData as getPhotosList } from "../../functions";

import styles from "./HomeScreen.styles";
import { IItem } from "../../types";

const HomeScreen: React.FC = () => {
    const [data, setData] = useState<IItem[]>([]);

    useEffect(() => {
        getPhotosList("https://jsonplaceholder.typicode.com/albums/1/photos", setData);
    }, []);

    return (
        <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={styles.row}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Item {...item} />}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default HomeScreen;