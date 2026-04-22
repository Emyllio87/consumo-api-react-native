import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },

  subtitulo: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666'
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center'
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },

  erro: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10
  },

  resultado: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10
  }
});