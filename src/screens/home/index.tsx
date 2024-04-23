import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styled";
import { Participante } from "../../components/Participantes";


export function Home() {
  const participantes = [
    {
      name: "Ikaro Montanari",
      id: 2,
    },
    {
      name: "Ana Silva",
      id: 7,
    },
    {
      name: "Pedro Santos",
      id: 14,
    },
    {
      name: "Maria Oliveira",
      id: 21,
    },
    {
      name: "João Pereira",
      id: 30,
    },
    {
      name: "Carla Fernandes",
      id: 38,
    },
    {
      name: "Rafaela Costa",
      id: 45,
    },
    {
      name: "Miguel Almeida",
      id: 53,
    },
    {
      name: "Andreia Sousa",
      id: 60,
    },
    {
      name: "Hugo Martins",
      id: 68,
    },
    // Novos participantes
    {
      name: "Lucas Oliveira",
      id: 75,
    },
    {
      name: "Juliana Santos",
      id: 82,
    },
    {
      name: "Fernando Silva",
      id: 90,
    },
    {
      name: "Amanda Pereira",
      id: 102,
    },
    {
      name: "Ricardo Fernandes",
      id: 115,
    },
    {
      name: "Catarina Costa",
      id: 123,
    },
    {
      name: "Rodrigo Almeida",
      id: 131,
    },
    {
      name: "Beatriz Sousa",
      id: 146,
    },
    {
      name: "Eduardo Martins",
      id: 155,
    },
    {
      name: "Patricia Vieira",
      id: 164,
    }
  ];
  function handleParticipateAdd() {
    return Alert.alert("Participante exite", "ja existe um participante para esses dados informados")
  }

  function handleRemoveParticipate(id: string) {
    const filter = participantes.filter(e => e.id === Number(id))
    if(filter){
      Alert.alert("Remover", `Deseja remover o participant ${filter[0].name} ?`, [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => Alert.alert("Deletado"),
        },
      ])
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome Do evento</Text>
      <Text style={styles.eventData}>Sexta, 4 novembro de 2022</Text>

      <View style={styles.forms}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#7c7c8a"}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipateAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

     
        {/* <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 32}}> */}

 {/* </ScrollView> */}
          <FlatList 
            style={styles.containerParticipant}
            data={participantes}
            keyExtractor={index => String(index.id) + index.name}
            renderItem={(index)=>{
              return (
                <Participante
                  key={index.item.id}
                  name={index.item.name}
                  id={String(index.item.id)}
                  onRemove={handleRemoveParticipate}
                />
              )
            }}
            ListEmptyComponent={() => (
              <Text style={styles.notfound}>Nenhum registro encontrado</Text>
            )}
            
           
          />
        
       
      
    </View>
  );
}
