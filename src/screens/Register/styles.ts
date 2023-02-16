import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import {RFPercentage,RFValue} from 'react-native-responsive-fontsize';

import {DataProps} from '../../data/transactions';

type props = {
  index?:number;
}

export const Container = styled.View`
  flex:1;
  background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color:${(props)=>props.theme.colors.primary};
  height:113px ;
  justify-content: center;
  flex-direction:row;
  align-items: flex-start;
  margin-bottom:10px;
`;

export const UserContainer = styled.View`
width: 100%;
 padding:0 24px;
 margin-top:63px;
 flex-direction:row;
 justify-content: center;
 align-items: center;
`;

export const UserName = styled.Text`
  color:${(props)=>props.theme.colors.shape};
  font-family: ${(props)=>props.theme.fonts.bold};
  font-size:${({theme})=>theme.fontSize.md}px;
`;

export const Title = styled.Text`
  font-size:18px;
  font-family: ${({theme})=>theme.fonts.regular};
  margin-bottom:10px;
`;

export const Input = styled.TextInput`
  padding: 16px 20px;
  font-size:14px;
  background-color: ${({theme})=>theme.colors.shape};
  margin: 5px 20px 5px 20px;
  border-radius: 6px;
`

export const ViewCards = styled.TouchableOpacity`
  padding: 16px 20px;
  border: 1px solid ${({theme})=>theme.colors.text}
  margin-top: 20px;
  width:40%;
  border-radius:6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const TitleCards = styled.Text`
  font-size:14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color:${({ theme }) => theme.colors.text_dark};
  padding:10px 20px;
  text-align:center;
`;

export const Touch = styled.TouchableOpacity`
  padding: 10px 20px;
  background:${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  margin: 10px 20px
`
export const TitleTouch = styled.Text`
  font-size:16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color:${({ theme }) => theme.colors.shape};
  padding:10px 20px;
  text-align:center;
`;