import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import { buscarCep } from '../../services/api';

export default function Formulario() {

  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState("");

  async function consultar() {
    const resultado = await buscarCep(cep);

    if (!resultado) {
      setErro("CEP inválido ou não encontrado");
      setEndereco(null);
    } else {
      setErro("");
      setEndereco(resultado);
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Consultar CEP</Text>
      <Text style={styles.subtitulo}>
        Digite um CEP para buscar o endereço
      </Text>

      <View style={styles.card}>

        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          keyboardType="numeric"
          value={cep}
          onChangeText={setCep}
        />

        <TouchableOpacity style={styles.botao} onPress={consultar}>
          <Text style={styles.botaoTexto}>Buscar</Text>
        </TouchableOpacity>

      </View>

      {erro !== "" && <Text style={styles.erro}>{erro}</Text>}

      {endereco && (
        <View style={styles.resultado}>
          <Text>Rua: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>UF: {endereco.uf}</Text>
        </View>
      )}

    </View>
  );
}