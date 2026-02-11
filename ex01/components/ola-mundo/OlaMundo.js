import { Text, View } from "react-native";

export function OlaMundo(props) {
    return (
        <View>
            <Text>{props.text}</Text>
        </View>
    );
}