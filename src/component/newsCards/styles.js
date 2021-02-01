import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Alata',
        'cursive',
      ].join(','),
    },});

export default makeStyles({
    container:{
        display:"felx",
    flexDirection:"column",
    alignItems:"center",
    padding:"0 5%",
    color:"#dfdfdf",
    width:"100% !important",
    margin:" 0px !important"
},
    cardsContainer:{
        padding:"0",
        width:"100% !important",
        margin:" 0px !important"
    },
    creatorCard:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"25vh",
        padding:"5%",
        margin:"2% 0",
        borderRadius:10,
    },
    creatorInfoCard:{
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
    },
    card:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        minHeight:"400px",
        height:"45vh",
        padding:"10%",
        borderRadius:10,
    },
    infoCard:{
        fontFamily: 'Chilanka',


        display:"flex",
        flexDirection:"column",
        textAlign:"center",

    }
})