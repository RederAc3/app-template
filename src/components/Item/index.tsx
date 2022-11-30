
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Item.styles"

import { IItem } from "../../types";

const Item: React.FC<IItem> = props => {

    const { navigate } = useNavigation();
    const { thumbnailUrl, title } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touch}
                onPress={() => navigate("Details", { ...props })}
            >
                <Image
                    style={styles.image}
                    source={{ uri: thumbnailUrl }}
                />
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Item;