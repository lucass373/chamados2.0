// Importando os hooks useEffect e useState. Por definição, um Hook é um componente que te permite utilizar 
// recursos do React
import { useEffect, useState, BackHandler } from 'react';

// Importando os componentes utilizados nessa página
import { ActivityIndicator, StyleSheet, FlatList, StatusBar, Text, View, TouchableOpacity} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

// Importando a função que descreve como foi definida a navegação da aplicação
import { useNavigation } from '@react-navigation/native';

// Lodash (acessado usando-se o underscore) nos dá uma série de funções utilitárias para manipulação
// de: Array,Collection, Date, Function, String, entre outras classes.
import _ from 'lodash';

function Home() {
  // Recuperando o componente de navegação da aplicação
  const navigation = useNavigation();
  // O hook useState define um componente Wrapper com o atributo interno 'state'. Ele nos traz uma série de
  // vantagens: (1) a referência para o componente é 'const', mas o objeto internamente é mutável através do
  // uso da função associada na declaração. 
  // (2) Se o componente é utilizado em algum ponto da página e se ele troca o seu 'state', automaticamente
  // as partes que a página referenciam o componente são alteradas, funcionando como se fosse uma callback. 
  const [carregarPagina,setCarregarPagina] = useState(true);
  // Hook para colocar o ícone animado de carga na página (quando se busca os dados de aluno com fetch)
  const [isLoading, setLoading] = useState(false);
  // Hook para guardar os alunos a serem apresentados. 
  const [alunos, setAlunos] = useState([]);
  // Hook para indicar as colunas da FlatList (tabela)
  const [ colunas ] = useState([
    {nome:" ",tam:'10%'},
    {nome:"Id",tam:'15%'},
    {nome:"Nome",tam:'40%'},
    {nome:"Idade",tam:'15%'},
    {nome:"Cidade",tam:'20%'}]);
  // Hook para indicar qual é o sentido de ordenação a ser empregado
  const [ direcao, setDirecao ] = useState('desc');
  // Hook para indicar qual é a coluna selecionada como padrão de ordenação
  const [ colunaSelecionada, setColunaSelecionada ] = useState("Id");
  // Hook para indicar qual é o registro que está selecionado
  const [ regSelecionado, setRegSelecionado ] = useState(null);

  //-------------------------------------------------------------------------
  // ObterAlunos: função para efetuar a carga dos alunos através do servidor
  //-------------------------------------------------------------------------
  const obterAlunos = async () => {
    
  }

  //------------------------------------------------------------------------
  // ExcluirAluno: função para efetuar a exclusão do registro selecionado 
  //------------------------------------------------------------------------
  const excluirAluno = async () => {
    
  }

  useEffect(() => {
   
  }, []);

  //-------------------------------------------------------------
  // tableHeader
  //-------------------------------------------------------------


//-------------------------------------------------------------
// RETORNO DA PÁGINA
//-------------------------------------------------------------
return (
 <View>
    <Text>Login com google</Text>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf : 'center'
  },
  tableHeader: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50
  },
  tableBottom: {
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    height: 20,
    alignSelf: 'stretch',
    paddingTop:10
  },
  columnHeader: {
    textAlign: "center",
    alignItems:"center"
  },
  columnHeaderTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  tableRowBlue: {
    textAlign: "center",
    backgroundColor: "#F0FBFC",
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  tableRow: {
    textAlign: "center",
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  columnRowTxt: {
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 5,
    height: 30,
    width: 250,
    backgroundColor: "#37C2D0",
    borderRadius: 5,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  }
});
export default Home;

