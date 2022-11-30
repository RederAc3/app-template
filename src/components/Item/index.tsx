
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Item.styles"

import { IItem } from "../../types";

const Item: React.FC<IItem> = props => {

    const { navigate } = useNavigation();
    const { thumbnailUrl } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.image}
                onPress={() => navigate("Details", { ...props })}
            >
                <Image
                    style={styles.image}
                    source={{ uri: thumbnailUrl }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Item;