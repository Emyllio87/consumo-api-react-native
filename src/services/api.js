export async function buscarCep(cep) {

  // validação simples
  if (!cep || cep.length !== 8) return null;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) return null;

    return data;

  } catch {
    return null;
  }
}