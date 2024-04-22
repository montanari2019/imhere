import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#202024',
        color: '#efefef',
        padding: 30
    
    },

    eventName:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#efefef',
        marginTop: 24
    },
    eventData:{
        color: '#7c7c8a',
        fontSize: 16,
    },

    forms:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:24,
        gap: 8

    },

    input:{
        backgroundColor: '#323238',
        color: '#efefef',
        flex: 1,
        height: 56,
        fontSize: 16,
        padding: 8,
        borderRadius: 5,
        
    },
    button:{
        backgroundColor: "#03b8aa",
        color: "#fff",
        height: 56,
        width: 56,
        padding: 8,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    

    },
    buttonText:{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    

    },

    containerParticipant:{
        marginTop: 24,
        gap: 16,
    },

    notfound:{
        fontSize: 16,
        color: "#7c7c8a",
        textAlign: 'center',
        
    }
})