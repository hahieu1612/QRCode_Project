import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// color
export const Colors = {
    primary : '#ffffff',
    secondary : '#E5E7EB',
    tertiary : '#1F2937',
    darklight : '#9CA3AF',
    brand: '#6D28D9',
    green: '#q0B981',
    red: '#EF4444',
};

const {primary, secondary, tertiary, darklight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
flex: 1;
padding : 25px;
padding-top: ${StatusBarHeight + 10}px;
background-color : ${primary};
`

export const InnerContainer = styled.View`
   flex : 1;
   width : 100% ; 
   align-items: center ;

`;

export const PageLogo = styled.Image`
width: 400px;
height: 200px;
`;

export const PageTitle = styled.Text`
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${red};
padding: 10px;
`;

export const SubTitle = styled.Text`
  font-size : 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const StyledFormArea = styled.View`
  width :  90%;
`;

export const StyledTextInput = styled.TextInput`
  background-color : ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLable = styled.Text`
  color: ${tertiary};
  font-size : 13px ;
  text-align: left; 
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;   
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;

`;

export const ScrollView = styled.ScrollView`
  marginHorizontal: 20;
`;

export const MsgBox = styled.View`
  text-align: center;
  font-size: 13px; 
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darklight}
  margin-vertical: 10px;
`;