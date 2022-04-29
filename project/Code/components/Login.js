   import { View, Text, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

//icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea,
LeftIcon , StyledInputLable, StyledTextInput,RightIcon, Colors, StyledButton, ButtonText,
MsgBox,Line,
} from './styles';  
import { StatusBar } from 'expo-status-bar';
import { login } from '../api/api';

const {brand, darkLight, black}= Colors;
const Login = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] =useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password
    }
    await login(data).then(res => {
      // navigation.navigate('Home')
      console.log(res);
    })
  }
  return (
    <ScrollView >
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
         <PageLogo resizeMode ="cover" source={require('./../assets/images/Logo1.jpg')} />
         <PageTitle >Welcome</PageTitle>
         <SubTitle>Account Login</SubTitle>  
         <Formik
      initialValues={{email:'', password: ''}}
      onSubmit={(values) => {
        handleLogin()
      }}
      >{({handleChange, handleBlur, handleSubmit, values})=>(
        <StyledFormArea>
          <MyTextInput 
             label="Username"
             icon="user"
             placeholder="GCC123456"
             placeholderTextColor={darkLight}
             onChangeText={handleChange('email')}
             onBlur={handleBlur('email')}
             value={values.email}
             keyboardType="email-address"
          />
          <MyTextInput
             label="Password"
             icon="lock"
             placeholder="* * * * * *"
             placeholderTextColor={darkLight}
             onChangeText={handleChange('password')}
             onBlur={handleBlur('password')}
             value={values.password}
             secureTextEntry={hidePassword}
             hidePassword={hidePassword}
             setHidePassword={setHidePassword}
             isPassword={true}
          />
          <StyledButton onPress={handleSubmit}>
            {/* <ButtonText onPress={() => navigation.navigate('Home')}>
              Login
            </ButtonText> */}
            <ButtonText onPress={() => {handleLogin()}}>
              Login
            </ButtonText>
          </StyledButton>
          <Line/>
        </StyledFormArea>
      )}
      </Formik>
      </InnerContainer>
    </StyledContainer>
    </ScrollView>
  );
}

const MyTextInput = ({label,icon,isPassword,hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                {/* <Octicons name={icon} size={30} color={brand} /> */}
                 <Entypo name={icon} size={24} color={black}/> 
            </LeftIcon>
            <StyledInputLable>{label}</StyledInputLable>
            <StyledTextInput {...props}/>
            {isPassword&& (
              <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={brand}/>
              </RightIcon>
            )}
        </View>
    );
}
 
export default Login