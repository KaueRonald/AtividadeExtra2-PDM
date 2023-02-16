import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Header, UserContainer, UserName, ViewCards, ViewHeader } from './styles';

export function Summary() {

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserName>Resumo por categoria</UserName>
        </UserContainer>
      </Header>

      <View>
        <ViewHeader>
          <AntDesign name="left" size={24} color="black" />
          <Text style={{ fontWeight: 'bold' }}>maio, 2022</Text>
          <AntDesign name="right" size={24} color="black" />
        </ViewHeader>
      </View>

      <View>
        <ViewCards>
          <Text>Casa</Text>
          <Text style={{ fontWeight: 'bold' }}>R$ 1,200</Text>
        </ViewCards>
        <ViewCards>
          <Text>Carro</Text>
          <Text style={{ fontWeight: 'bold' }}>R$ 700,00</Text>
        </ViewCards>
        <ViewCards>
          <Text>Alimentação</Text>
          <Text style={{ fontWeight: 'bold' }}>R$ 500,00</Text>
        </ViewCards>
        <ViewCards>
          <Text>Alimentação</Text>
          <Text style={{ fontWeight: 'bold' }}>R$ 500,00</Text>
        </ViewCards>
      </View>
    </Container>
  );
}