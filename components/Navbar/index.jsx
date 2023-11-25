import {
    View,
    Text,
    Image
} from "react-native";

import styles from "../../styles";

const navicon = require("../../assets/globe.png");

export default function () {
    return (
        <>
        <View
        style={styles.navbar}
        >
            <Image
            source={navicon}
            style={styles.navImg}
            />
            <Text
            style={styles.navHeaders}
            >
                My Travel Journal App
            </Text>
        </View>
        </>
    )
}