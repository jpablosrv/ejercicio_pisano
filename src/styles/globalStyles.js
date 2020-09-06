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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
txtBtnTouchable: {
    color: AppColors.colors.white,
    fontSize: 18,
    fontWeight: 'bold'
  }
});
