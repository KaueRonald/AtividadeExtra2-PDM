import { StatusBar, SafeAreaView, Image} from 'react-native';
import { Container, ViewContainer, Title, Touch, TitleTouch } from './styles';
import Logo from '../../../assets/images/logo.png';

export function Login({ navigation }) {


    return (
        <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }} >
            <Container>
                <ViewContainer >
                    <Image source={Logo} />
                    <Title>Controle suas finanças de forma muito simples</Title>
                    <Touch onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }], }) }}>
                        <TitleTouch >Clica aqui para entrar</TitleTouch>
                    </Touch>
                </ViewContainer>
            </Container>
        </SafeAreaView>
    );
}