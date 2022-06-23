import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        height:30

      },
      cancle: {
        fontSize: 17,
        fontWeight: '400',
      },
      editText: {
        fontSize: 20,
        fontWeight: '500',color:'black'
      },
      done: {
        fontSize: 17,
        fontWeight: '400',
        color: '#3897F0',
      },
      searchbar:{
        width: '94%',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 10,
        paddingLeft: 40,
      },
      searchBarView:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
      },
      searchIcon:{
        width: 20,
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 25,
        tintColor:'black'
      }

});