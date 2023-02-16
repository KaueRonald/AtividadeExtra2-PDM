import styled from 'styled-components/native';

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
  margin-bottom: 5px;
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

export const ViewCards = styled.View`
  padding: 26px 30px;
  background-color:${({theme})=>theme.colors.shape}
  margin: 5px 20px 5px 20px;
  border-radius: 6px;
  justify-content: space-between;
  flex-direction: row;
`
export const ViewHeader = styled.View`
  padding: 26px 30px;
  margin: 5px 20px 5px 20px;
  border-radius: 6px;
  justify-content: space-between;
  flex-direction: row;
`