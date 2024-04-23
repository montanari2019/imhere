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
import { useState } from "react";


interface ParticipanteListProps{
  name: string,
  id:number,
}

export function Home() {

  const [participantes, setParticipantes] = useState<ParticipanteListProps[]>([])
  const [inputValue, setInputValue] = useState("")


  function handleParticipateAdd() {

    const data = {
      id: new Date().getTime(),
      name: inputValue
    }

   const verify = verifyParticipante(inputValue)

   if(verify === true){
    setParticipantes(prevState => [...prevState, data])
    setInputValue("")
   }


    
  }

  function verifyParticipante(name:string){
    const filter = participantes.filter(e => e.name === name)
    if(filter.length > 0){
        return Alert.alert("Participante exitente", "ja existe um participante para esses dados informados")
    }else{
      return true
    }
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
          onPress: () => revomeParticipante(id),
        },
      ])
    }
  }


  function revomeParticipante(id:string){
    const filter = participantes.filter(e => e.id !== Number(id))
    setParticipantes(filter)
    Alert.alert("Deletado")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome Do evento</Text>
      <Text style={styles.eventData}>Sexta, 4 novembro de 2022</Text>

      <View style={styles.forms}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={(e) => setInputValue(e)}
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
