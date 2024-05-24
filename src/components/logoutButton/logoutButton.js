import {Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin} from '../../redux/actions/Actions';
import {useNavigation} from '@react-navigation/native';

const LogoutButton = () => {
  const {loggedIn} = useSelector(state => state.authReducer);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logOut = () => {
    dispatch(authLogin(false));
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <Pressable onPress={() => logOut()}>
      <FontAwesome5 name={'logout'} size={24} color={'white'} />
    </Pressable>
  );
};

export default LogoutButton;
