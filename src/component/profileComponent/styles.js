import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  profilephoto: {
    borderColor: '#C7C7CC',
    borderWidth: 2,
    borderRadius: 70,
    width: 116,
  },
  number: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  details: {
    fontSize: 16,
    fontWeight: '400',
  },
  profilelayout: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingRight: 15,
    width: 230,
    justifyContent: 'space-between',
  },
  editButton: {
    borderColor: '#C8C8C8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: 6,
    marginVertical: 20,
  },
  line:{
    backgroundColor:'grey',
    height:1,
    opacity:0.3,
    marginTop:10,
  }
});
