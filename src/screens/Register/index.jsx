import { View, Image } from 'react-native';
import { Container, Header, UserContainer, UserName, Input, ViewCards, TitleCards, Touch, TitleTouch} from './styles';
import Income from '../../../assets/images/income.png'
import Outcome from '../../../assets/images/outcome.png'

export function Register({ navigation }) {

    return (
        <Container>
            <Header>
                <UserContainer>
                    <UserName>Cadastro</UserName>
                </UserContainer>
            </Header>

            <View>
                <Input placeholder='Nome' placeholderTextColor='black'/>
                <Input placeholder='Preço' placeholderTextColor='black'/>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 200 }}>
                <ViewCards>
                    <Image source={Income} />
                    <TitleCards>Income</TitleCards>
                </ViewCards>

                <ViewCards>
                    <Image source={Outcome} />
                    <TitleCards>Outcome</TitleCards>
                </ViewCards>
            </View>

            <Touch onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }], }) }}>
                <TitleTouch >Enviar</TitleTouch>
            </Touch>

        </Container>
    );
}