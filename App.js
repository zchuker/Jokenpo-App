import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable ,} from 'react-native';
import React,{useState,useEffect}from 'react';
import { Modal } from 'react-native-web';

export default function App() {

  const[player,setPlayer]=useState(0);
  const[player2,setPlayer2]=useState(0);
  const[valor,setValor]=useState(0);
  const[bot,Setbot] = useState(0);
  const[visivel,SetVisivel] = useState(false);
  const[venc,SetVenc2] = useState(0);
  
  
  useEffect(()=>{ 
    if (player == 10  ) {
      SetVisivel(true);
      SetVenc2(0)
    }if(player2 == 10){ 
      SetVisivel(true);
      SetVenc2(1)
    }
  },[player,player2]);
  
  
  const[apdvc,SetVenc]=useState([
    {
      vencedor:'O vencedor: Player 1', 
    },
    {
      vencedor:' O vencedor: Player 2', 
    },
  ]); 

 const play=(atri)=>{

  


      setValor(atri)

        const sorteio= Math.floor(Math.random()*3+1)

        Setbot(sorteio)
      
        if(atri==sorteio){ 
          
        }
        else if(atri==1&&sorteio==3){
          setPlayer(player+1)
        }
        else if((atri==2)&&sorteio==1){
         setPlayer(player+1)
       }
       else if((atri==3)&&(sorteio==2)){
         setPlayer(player+1)
       }
        else if((atri==3)&&(sorteio==1)){
         setPlayer2(player2+1)
       }
       else if((atri==1)&&(sorteio==2)){
         setPlayer2(player2+1)
       }
       else if((atri==2)&&(sorteio==3)){
         setPlayer2(player2+1)
       }
      
  };

  const exibirImagem=(valor)=>{ 
   
    if(valor==0){
      return(
         <Image style={styles.espera} source={require('../Jokenpo/assets/Time.gif')}></Image>
      )

    }else if(valor==1){
      return(
        <Image style={styles.pedra} source={require('../Jokenpo/assets/pedra.png')}></Image>
      )
    
    }
    else if(valor==2){
      return(
        <Image style={styles.papel} source={require('../Jokenpo/assets/papel.png')}></Image>
      )
    }
       else if(valor==3){
      return(
        <Image style={styles.tesoura} source={require('../Jokenpo/assets/tesoura.png')}></Image>
      )
    }
    
  };

  const imgPlacar=(jg)=>{ 
  if(jg==0){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/0.png')}></Image>
    )
  }
  if(jg==1){ 
    return(
      <Image style={styles.um} source={require('../Jokenpo/assets/1.png')}></Image>
    )
  }
  if(jg==2){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/2.png')}></Image>
    )
   
  }
  if(jg==3){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/3.png')}></Image>
    )
  }
  if(jg==4){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/4.png')}></Image>
    )
  }
  if(jg==5){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/5.png')}></Image>
    )
   
  }
  if(jg==6){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/6.png')}></Image>
    )
  }
  if(jg==7){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/7.png')}></Image>
    )
  }
  if(jg==8){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/8.png')}></Image>
    )
   
  }
  if(jg==9){ 
    return(
      <Image style={styles.num} source={require('../Jokenpo/assets/9.png')}></Image>
    )
  }
  if(jg==10){ 
   
    
   
    return(
      <Image style={styles.dez} source={require('../Jokenpo/assets/10.png')}></Image>
    )
   
  }
  }; 
  
const JogarDnv=()=>{ 
  setPlayer2(0)
  setPlayer(0) 
  setValor(0)
  Setbot(0)
  SetVisivel(false);
};

  

  return (
    <View style={styles.container}>

      <View style={styles.titulo}>
        <Image style={styles.img} source={require('../Jokenpo/assets/Titulo.png')}></Image>
      </View>

      <View style={styles.tPlacar}>
        <Image style={styles.placar} source={require('../Jokenpo/assets/Placar.png')}></Image>
        
        <View style={styles.pontos}>
          {imgPlacar(player)}
          {imgPlacar(player2)}
        </View>
        
      </View>

      <View style={styles.visualizar}>

      {exibirImagem(valor)}


        <Image style={styles.vs} source={require('../Jokenpo/assets/VS.png')}></Image>

        {exibirImagem(bot)}
      </View>

      <View style={styles.nPartida}>
        <Pressable onPress={()=>{JogarDnv()}}><Image style={styles.botao}   source={require('../Jokenpo/assets/Play.png')}></Image></Pressable>
      </View>

      <View style={styles.escolha}>

       <Pressable  onPress={()=>{play(1)}}><Image style={styles.pedra} source={require('../Jokenpo/assets/pedra.png')}></Image></Pressable> 
        
        <Pressable  onPress={()=>{play(2)}}><Image style={styles.papel} source={require('../Jokenpo/assets/papel.png')}></Image></Pressable> 
        
        <Pressable  onPress={()=>{play(3)}}><Image style={styles.tesoura} source={require('../Jokenpo/assets/tesoura.png')}></Image></Pressable> 
       
      </View>

      <Modal visible={visivel} animationType='fade'>

        <View style={styles.mod}>
          <Text style={styles.fi} > Jogo encerrado </Text>
          <Text style={styles.fi} > {apdvc[venc].vencedor} </Text>
          <Pressable onPress={()=>{JogarDnv()}}><Image style={styles.botao2}   source={require('../Jokenpo/assets/Play.png')}></Image></Pressable>
        </View>
     
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },

//Titulo do jokenpo
  titulo: {
    flex: 0.1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  marginBottom:70,
    paddingTop:20,
  },img: {
    width: 300,
    height: 50,
  },

//Placar
  tPlacar: {
    flex: 0.25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 47.5,
  },placar: {
    width: 200,
    height: 40,
    marginTop:70,

  },pontos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    gap: 210,

  },pontoG: {
    fontSize: 40,
  },

//Visualizar
  visualizar: {
    flex: 0.25,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 1,
    marginTop: 20,
  },espera: {
    width: 150,
    height: 120,
    borderRadius: 20,
    marginBottom:25,
  
  },vs:{
    width: 100,
    height: 50,
    marginLeft:14,
  },
  
  
  
//Partida
  nPartida: {
    flex: 0.25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },botao: {
    width: 210,
    height: 100, 
    marginLeft:20, 
    marginTop:30,
  },
  botao2: {
    width: 210,
    height: 100, 
    marginLeft:15, 
    marginTop:40,

  },num:{ 
    width: 70,
    height: 100,
    marginBottom:150,
   
  },
  um:{ 
    width: 28,
    height: 105,
    marginBottom:150,
  },
  dez:{ 
    width: 105,
    height: 105,
    marginBottom:150,
  },

//Escolha
  escolha: {
    flex: 0.25,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    gap: 20,
    paddingTop: 75,
    marginLeft:-100,
    flexDirection: 'row',
    paddingLeft:'13%',
   
  },pedra: {
    width: 100,
    height: 180,
  },papel: {
    width: 100,
    height: 180,
  },tesoura: {
    width: 100,
    height: 180,
  },
fi:{ 
  fontSize:'200%', 
},
mod:{ 
  flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:'100%',
}
});
