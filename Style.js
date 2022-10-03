import {StyleSheet} from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
  button: {
    color: '#3f1818',
  },

  container: {
    backgroundColor: '#2f363c',
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 3,
    // borderStyle: 'solid',
  },
  safeArea: {
    height: 30,
  },
  searchView: {
    paddingRight: 15,
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: Colors.redAccent,
    height: 64,
    borderRadius: 35,
    alignItems: 'center',
  },
  listArea: {
    flex: 3,
    // borderWidth: 4,
    // borderColor: 'white',
  },
  ListItemText: {color: '#c85c5c'},
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    padding: 10,
    color: 'white',
  },
  defaultText: {
    textAlign: 'center',
    color: '#a5a0a0',
    fontSize: 25,
    margin: '20%',
    letterSpacing: 1.2,
    lineHeight: 40,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Styles;
