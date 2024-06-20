import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function Home(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'grey',
        alignItems:'center'
      }}>
      <Text style={{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color :'blue',
        margin:30,
      }}>Welcome To Our Shop, We Hope Our Products Make You Very Satisfied</Text> 
      <Image source={{
        uri:'https://png.pngtree.com/png-vector/20210728/ourmid/pngtree-welcome-to-our-shop-neon-sign-design-vector-light-art-png-image_3744158.jpg'}} style={{width:400,height:200,margin:70}}/>
        <Text style={{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color : 'blue',
        margin:40}}>Happy Shopping, I Hope Our Product Doesn't Disappoint, Thank you</Text>
      </View>
    )
}