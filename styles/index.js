import {
    StyleSheet
} from "react-native";

const styles = StyleSheet.create({
    navbar:{
        height:50,
        width:'100%',
        backgroundColor:"#ED4723",
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },
    navImg:{
        height:40,
        width:40,
        borderRadius:75,
    },
    navHeaders:{
        fontSize:15,
        color:'white'
    },
    container:{
        margin:20,
        height:250,
        alignItems:"flex-start",
        flexWrap:'wrap'
    },
    containerImg:{
        height:250,
        width:150,
        margin:5,
        borderRadius:10
    },
    contentHeaders:{
        fontSize:15,
        fontWeight:'100'
    },
    headerImg:{
        height:15,
        width:15
    },
    containerHeader:{
        flexDirection:'row',
        alignItems:"center"
    },
    headerLinks:{
        marginLeft:10,
        color:"grey",
        textDecorationLine:"underline"
    },
    locationText:{
        fontSize:30,
        fontWeight:'900'
    },
    dateText:{
        marginTop:10,
        marginBottom:5
    },
    traveInfo:{
        width:220,
    }
});

export default styles;