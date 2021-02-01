import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme)=>({
    app:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        height:"100vh",
    },
footer:{
    textAlign:"center",
    position:"fixed",
    left:0,
    bottom:0,
    color:"black",
    width:"100%",
    display:'align-items',
    justifyContent:'center',
    height:120,
    [theme.breakpoints.down('sm')]:{
        display:"none",
    },
},
link:{
    textDecoration:'none',
    color:'rgba(21,101,192)',        
},
image:{
    marginLeft:20,
},
card:{
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    width:"50%",
    padding:"3%",
    borderRadius:10,
    color:"white",
    backgroundColor:'rgba(21,101,192)',
    margin:"0 112px",
    textAlign:"center",
    height:"25vmin",
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column-reverse",
        textAlign:"center",
        width:'100%',
        height:'initial',
        '&:nth-of-type(1)':{
            marginBottom:'12px'
        }
    }
},
infoContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
    },
},
logoContainer:{
    padding:"0 5%",
    display:"flex",
    justifyContent:'space-around',
    alignItems:'center',
    width:"100%",
        height:"15vmin",
    [theme.breakpoints.down('sm')]:{
        flexDirection:"column",
    },
},
    alanLogo:{
    width:"30%",
    minWidth:"220px",
        objectFit:"contain",
        borderRadius:'15%',
        padding:'0 5%',
        margin:"3% 0",
    [theme.breakpoints.down('sm')]:{
    height:"35vmin"
    },
    }


}))