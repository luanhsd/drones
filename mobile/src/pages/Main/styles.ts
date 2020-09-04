import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },
  droneList: {
    marginTop: 32
  },
  drone: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  droneProperty: {
    fontSize: 14,
    color: '#41414d',
    fontFamily: 'Roboto_700Bold'
  },
  droneValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    fontFamily: 'Roboto_700Bold',
    color: '#007bff',
    fontSize: 15
  }
});

export default styles;
