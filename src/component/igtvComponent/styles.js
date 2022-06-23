import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        position:'absolute',top:20,width:'100%'
      },
      cancle: {
        fontSize: 17,
        fontWeight: '400',
      },
      editText: {
        fontSize: 20,
        fontWeight: '500',
        color:'white',
        marginLeft:60
      },
      done: {
        fontSize: 17,
        fontWeight: '400',
        color: '#3897F0',
      },
      icons:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:60
      },
      time:{
        color:'white',
        textAlign:'right',
        padding:10

      },
      contant:{
        color:'white',
        marginTop:220,paddingHorizontal:10
      },
      txt:{
        color:'white'
      }
});