import {
    View,
    Text,
    Image
} from "react-native";

import styles from "../../styles";

const loc = require("../../assets/location.png");

export default function (data) {
    return (
        <>
        <View
        style={styles.container}
        >
            <Image
            source={data.image}
            style={styles.containerImg}
            />
            <View
            style={styles.containerHeader}
            >
                <Image
                source={loc}
                style={styles.headerImg}
                />
            <Text
            style={styles.contentHeaders}
            >
                {data.country}
            </Text>
            <Text
            style={styles.headerLinks}
            >
                View on Google Maps
            </Text>
            </View>
            <Text
            style={styles.locationText}
            >
                {data.destination}
            </Text>
            <Text
            style={styles.dateText}
            >
                {data.date}
            </Text>
            <Text
            style={styles.traveInfo}
            >
                {data.info}
            </Text>
        </View>
        </>
    )
}