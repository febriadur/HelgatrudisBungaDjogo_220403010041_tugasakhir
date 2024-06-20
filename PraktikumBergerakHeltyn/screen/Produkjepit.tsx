import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'       
           
        }}>
        <Text style={{
            fontSize:25,
            fontWeight:'bold',
            textAlign:"center",
            color : 'black'
        }}>TOKOH JEPIT BAGUS</Text>
        <Text style={{
            fontSize:10,
            fontWeight:'bold',
            color : 'blue',
        }}>Produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://www.grosirimpor.com/wp-content/uploads/SFT5751-IDR.11.500-MATERIAL-PEARL-WEIGHT-15GR-COLOR-SCALLOPED.jpg")
        }}style={{width:200,height:200,margin:5}} /> 
         <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.29.999,00,*    .stok terbatas</Text>
         <Button title="Tambahkan ke Troli" color="grey" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://img.lazcdn.com/g/ff/kf/Sbd8d74972ab34b69bef2dfa585a77469z.jpg_720x720q80.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.49.999,00*     .stok tersedia</Text>
          <Button title="Tambahkan ke Troli" color="grey" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image  source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/96/MTA-101467705/no_brand_jepit_rambut_korea_bahan_besi_jedai_logam_jepitan_rambut_import_jumbo_big_size_dewasa_warna_emas_gold_mewah_classic_full13_pu8ux5nv.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.27.699,00*    .stok tersedia</Text>
          <Button title="Tambahkan ke Troli" color="grey" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://img.lazcdn.com/g/p/152821280e7fee670fe2f64a1eec8193.jpg_720x720q80.jpg")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.22.500,00*    .stok tersedia</Text>
          <Button title="Tambahlan ke Troli" color="grey" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://sampurasun.co.id/wp-content/uploads/2022/07/Jepit-Rambut-Hairclip-Mutiara-Set-Jepitan-Wanita-Gaya-Korea-Style-Pearl.jpg")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.15.999,00*    .stok terbatas</Text>
          <Button title="Tambahkan ke Troli" color="grey"onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/103/MTA-166084085/brd-44261_-semar-aj005-jepit-rambut-korea-wanita-import-murah-jedai-kupu-kupu-matte_full01-891104d1.jpg")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
             textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.10.000,00*    .stok tersedia</Text>
          <Button title="Tambahkan ke Troli" color="grey"onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/700/VqbcmM/2022/8/7/c8ae46dd-615d-4dc6-b775-381e67fb441d.jpg")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            fontSize:13,
            textAlign:"center",
            fontWeight:'bold',
            color : 'green',
        }}>Rp.35.899,00*    .stok tersedia</Text>
          <Button title="Tambahkan ke Troli" color="grey"onPress={() => Alert.alert ('Ditambahkan')} />
        </ScrollView>
        <Button title="troli"color="green" onPress={() => Alert.alert ('Ditambahkan')} />
        </View>
    )
}