import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.textPrimary,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    color: colors.textPrimary,
    fontSize: 16,
  },
  icon: {
    fontSize: 30,
    color: colors.bgPrimary,
  },
});

export default styles;
