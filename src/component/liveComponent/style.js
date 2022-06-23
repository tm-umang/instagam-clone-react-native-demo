import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backimg: {
    height: '99%',
    backgroundColor: '#000',
  },
  flexheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 7,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userimg: {
    height: 45,
    width: 45,
  },
  closeicon: {
    height: 23,
    width: 23,
    marginLeft: 9,
    resizeMode: 'contain',
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginLeft: 8,
  },
  reaction: {
    color: '#fff',
    fontSize: 25,
    borderRadius: 20,
  },
  comment: {
    backgroundColor: 'black',
    height: '7%',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  reactionBox: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.2);',
    marginHorizontal: 8,
    height: 50,
    padding: 10,
    borderRadius: 30,
    marginVertical: 18,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    color: 'white',
    borderRadius: 30,
    width: '60%',
  },
});
