import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";


interface ParticipanteProps{
    name: string;
    id:string;
    onRemove: (id:string) => void
}
export function Participante({ id, name, onRemove }:ParticipanteProps){
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} onPress={()=> onRemove(id)}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}