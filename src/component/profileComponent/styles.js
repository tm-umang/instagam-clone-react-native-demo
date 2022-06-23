import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  profilephoto: {
    height: 95,
    width: 95,
    alignSelf: 'center',
    borderColor: '#C7C7CC',
    // borderWidth: 3,
    borderRadius: 70,
  },
  number: {
    fontSize: 18,
    color:'#262626',
    textAlign: 'center',
    fontWeight: '600',
  },
  details: {
    fontSize: 17,
    color:'#262626',
    fontWeight: '400',
  },
  profilelayout: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingRight: 15,
    width: 252,
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
