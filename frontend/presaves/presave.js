const unidadesPrePreenchidas = {
    "01": {
        "CNES":"5767970",
        "Nome fantasia do Estabelecimento":"UBS Albert Sabin"
    },
    "02": {
        "CNES":"4858484",
        "Nome fantasia do Estabelecimento":"UBS Beira Rio"
    },
    "03": {
        "CNES":"2497417",
        "Nome fantasia do Estabelecimento":"UBS Boa Esperanca Policlinica"
    },
    "04": {
        "CNES":"2497409",
        "Nome fantasia do Estabelecimento":"UBS Eni Correia da Silva Nova Estrela"
    },
    "05": {
        "CNES":"3459411",
        "Nome fantasia do Estabelecimento":"UBS Jardim Tropical"
    }, 
    "06": {
        "CNES":"7437064",
        "Nome fantasia do Estabelecimento":"UBS Jose Ferreira Martins Planalto"
    },
    "07": {
        "CNES":"2495198",
        "Nome fantasia do Estabelecimento":"UBS Maria de Lurdes Ferreira Rocha Cidade Alta"
    },
    "08": {
        "CNES":"0797499",
        "Nome fantasia do Estabelecimento":"Unidade de Pronto Atendimento Dra Luci Emiko Kitamura"
    },
    "09": {
        "CNES":"2497395",
        "Nome fantasia do Estabelecimento":"Unidade de Saude Albert Sabin Ref Hanseniase"
    }
}


const perfisPrePreenchidos = {
    "p1": { // Perfil 1 - Pessoa Jurídica
        "Observações": "Perfil pré-preenchido para pessoa jurídica",
        "contratacaoEstabelecimento": "autonomo",
        "contratacaoEmpregador": "Pessoa Juridica",
        "detalhamentoContratacao": "Não se aplica"
    },
    "p2": { // Perfil 2 - Celetista
        "Observações": "Perfil pré-preenchido para Celetista",
        "contratacaoEstabelecimento": "empregaticio",
        "contratacaoEmpregador": "Celetista",
        "detalhamentoContratacao": "Não se aplica"
    },
    "p3": { // Perfil 3 - Residente
        "Observações": "Perfil pré-preenchido para residente",
        "contratacaoEstabelecimento": "residencia",
        "contratacaoEmpregador": "Residente",
        "detalhamentoContratacao": "Subsidiado por outro Ente/Entidade"
    }
};

const dataContratacao = {
        empregaticio: {
            "Estatuario Efetivo": ["Servidor Próprio", "Servidor Cedido"],
            "Empregado Publico Celetista": ["Próprio", "Cedido"],
            "Contratado Temporário ou por prazo/tempo determinado": ["Público", "Privado"],
            "Cargo Comissionado": ["Servidor Publico Próprio", "Servidor Publico Cedido", "Sem vinculo com o setor Publico"],
            "Celetista": ["Não se aplica"]
        },
        autonomo: {
            "Pessoa Juridica": ["Não se aplica"],
            "Pessoa Fisica": ["Não se aplica"],
            "Cooperado": ["Não se aplica"]
        },
        residencia: {
            "Residente": ["Próprio", "Subsidiado por outro Ente/Entidade"]
        },
        estagio: {
            "Estagiario": ["Próprio", "Subsidiado por outro Ente/Entidade"]
        },
        bolsa: {
            "Bolsista":["Próprio", "Subsidiado por outro Ente/Entidade"]
        },
        intermediado: {
            "Empregado Publico Celetista": ["Não se aplica"],
            "Contratado temporário ou por prazo/tempo determinado": ["Não se aplica"],
            "Cargo Comissionado":["Não se aplica"],
            "Celetista": ["Não se aplica"],
            "Autonomo": ["Pessoa Juridica", "Pessoa Fisica"],
            "Cooperado": ["Não se aplica"]
        },
        informal: {
            "Contratado verbalmente": ["Não se aplica"],
            "Voluntariado": ["Não se aplica"]
        }
    };

    // Voltar ao menu

