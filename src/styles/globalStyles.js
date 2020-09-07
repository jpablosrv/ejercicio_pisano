import { StyleSheet, Dimensions } from 'react-native';
import { AppColors } from './AppStyles';

const altoPantalla = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: AppColors.colors.green_ole
  },
  btnTouchable: {
    backgroundColor: AppColors.colors.blue,
    borderRadius: 5,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtnTouchable: {
    color: AppColors.colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 22,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 10
  }
});
