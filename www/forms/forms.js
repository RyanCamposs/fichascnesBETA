function abrirFormulario(tipo) {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("formulario").classList.remove("hidden");

    const formTitle = document.getElementById("formTitle");
    const formConteudo = document.getElementById("formConteudo");

    formConteudo.innerHTML = "";

    

    // DESIGN FICHAS NAVEGADOR 
    
     if (tipo === "ficha1") {
        document.getElementById("btn-copy").classList.add("hidden");
        document.getElementById("btn-remove").classList.remove("hidden");
        formTitle.textContent = "Ficha 1";
        formConteudo.innerHTML = `
            <section class="ficha" id="fichaSection">
                <h2>DADOS DO ESTABELECIMENTO - 1</h2>
                <div class="linha">
                    <div class="campo">
                        <span>CNPJ da Empresa</span>
                        <input type="text" name="CNPJ da Empresa" required />
                    </div>
                    <div class="campo">
                        <span>CNES da Empresa</span>
                        <input type="text" name="CNES da Empresa" required />
                    </div>
                    <div class="campo">
                        <span>Situacao</span>
                          <input type="text" name="Situacao" required placeholder="Individual ou Mantido"/>
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Tipo de Estabelecimento:</span>
                        <input type="text" name="Tipo de Estabelecimento" required />
                    </div>
                    <div class="campo">
                        <span>Razão Social</span>
                        <input type="text" name="Razão Social" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome Fantasia</span>
                        <input type="text" name="Nome Fantasia" />
                    </div>
                    <div class="campo">
                        <span>Logradouro</span>
                        <input type="text" name="Logradouro" />
                    </div>
                    <div class="campo">
                        <span>Numero</span>
                        <input type="text" name="Numero" maxlength="5" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Bairro</span>
                        <input type="tel" name="Bairro" />
                    </div>
                    <div class="campo">
                        <span>Municipio</span>
                        <input type="text" name="Municipio" />
                    </div>
                </div>
            
                <br>
                <h2>DADOS DO ESTABELECIMENTO - 2</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>Diretor da Empresa</span>
                        <input type="text" name="Diretor da Empresa" />
                    </div>
                </div>
                
                
                    <div class="campo">
                        <span>Registro Conselho de Classe</span>
                        <input type="text" name="Registro Conselho de Classe" />
                    </div class="linha">
                    <div>
                    <br>
                    <h2>Vigilância Sanitária</h2>
                    </div>
                    <div class="campo">
                        <span>Numero do Alvara</span>
                        <input type="number" name="Numero do Alvara" />
                    </div>
                    <div class="campo">
                        <span>Data de Expedição</span>
                        <input type="date" name="Data de Expedição" />
                    </div>
                    <div class="campo">
                        <span>Órgão Expedidor</span>
                        <input type="text" name="Órgão Expedidor" />
                    </div>
                  </section>`
    
    }  
    else if (tipo === "ficha31") {
        document.getElementById("btn-copy").classList.add("hidden");
        document.getElementById("btn-remove").classList.remove("hidden")
        formTitle.textContent = "Ficha 31";
        formConteudo.innerHTML = `
            <section class="ficha" id="fichaSection">
                <h2>DADOS DO PROFISSIONAL</h2>
                <div class="linha">
                    <div class="campo">
                        <span>Nome completo:</span>
                        <input type="text" name="Nome completo" required />
                    </div>
                    <div class="campo">
                        <span>CPF:</span>
                        <input type="text" name="CPF" required/>
                    </div>
                    <div class="campo">
                        <span>CNS:</span>
                        <input type="text" name="CNS" required />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome da Mãe:</span>
                        <input type="text" name="Nome da Mãe" />
                    </div>
                    <div class="campo">
                        <span>Nome do Pai:</span>
                        <input type="text" name="Nome do Pai" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Data de Nascimento:</span>
                        <input type="date" name="Nascimento" />
                    </div>
                    <div class="campo">
                        <span>Municipio:</span>
                        <input type="text" name="Municipio" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Telefone:</span>
                        <input type="tel" name="Telefone"  />
                    </div>
                    <div class="campo">
                        <span>Email:</span>
                        <input type="email" name="Email" />
                    </div>
                </div>
            </section>
            <section class="ficha">  
                <h2>DADOS DO ESTABELECIMENTO</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>CNES:</span>
                        <input type="text" name="CNES" />
                    </div>
                    <div class="campo">
                        <span >Nome fantasia do Estabelecimento:</span>
                        <input type="text" name="Nome fantasia do Estabelecimento" required/>
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CBO/Especialidade:</span>
                        <input type="text" name="CBO/Especialidade" required/>
                    </div>
                    <div class="campo">
                        <span>Atend.SUS:</span>
                        <input type="text" name="Atend.SUS" required/>
                    </div>
                    <div class="campo">
                        <span>CH Amb.:</span>
                        <input type="text" name="Amb" />
                    </div>
                    <div class="campo">
                        <span>CH Hosp:</span>
                        <input type="text" name="Hosp" />
                    </div>
                    <div class="campo">
                        <span>CH Outros:</span>
                        <input type="text" name="Outros" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Registro no Conselho de Classe:</span>
                        <input type="text" name="Registro no Conselho de Classe" required/>
                    </div>
                    <div class="campo">
                        <span>Órgão Emissor:</span>
                        <input type="text" name="Órgão Emissor" required/>
                    </div>
                    <div class="campo">
                        <span>UF Conselho:</span>
                        <input type="text" name="UF Conselho" maxlength="2" required/>
                        
                    </div>
                </div>
                <div class="linha">
                <div class="campo">
                <span>Forma de Contratação com o Estabelecimento:</span>
                <select id="contratacaoEstabelecimento" required>
                    <option value="">Selecione</option>
                    <option value="empregaticio">Vinculo Empregaticio</option>
                    <option value="autonomo">Autonomo</option>
                    <option value="residencia">Residencia</option>
                    <option value="estagio">Estagio</option>
                    <option value="bolsa">Bolsa</option>
                    <option value="intermediado">Intermediado</option>
                    <option value="informal">Informal</option>
                </select>
                </div>

                <div class="campo">
                <span>Forma de Contratação com o Empregador:</span>
                <select id="contratacaoEmpregador" disabled>
                    <option value="">Selecione primeiro o Estabelecimento</option>
                </select>
                </div>

                <div class="campo">
                <span>Detalhamento da Forma de Contratação:</span>
                <select id="detalhamentoContratacao" disabled>
                    <option value="">Selecione primeiro o Empregador</option>
                </select>
                </div>       
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CNPJ:</span>
                        <input type="text" name="CNPJ"/>
                    </div>
                </div>
            </section>
            <section class="ficha">
                <h2>OBSERVAÇÕES</h2>
                <textarea name="Observações" rows="4" style="width:100%"></textarea>
            </section>
        `;

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

    const selectEstabelecimento = document.getElementById("contratacaoEstabelecimento");
    const selectEmpregador = document.getElementById("contratacaoEmpregador");
    const selectDetalhamento = document.getElementById("detalhamentoContratacao");

    // Primeiro select
    selectEstabelecimento.addEventListener("change", function() {
        const valor = this.value;
        selectEmpregador.innerHTML = '<option value="">Selecione</option>';
        selectDetalhamento.innerHTML = '<option value="">Selecione primeiro o Empregador</option>';
        selectDetalhamento.disabled = true;

        if (valor && dataContratacao[valor]) {
            Object.keys(dataContratacao[valor]).forEach(key => {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                selectEmpregador.appendChild(opt);
            });
            selectEmpregador.disabled = false;
        } else {
            selectEmpregador.disabled = true;
        }
    });

    // Segundo select
    selectEmpregador.addEventListener("change", function() {
        const valor1 = selectEstabelecimento.value;
        const valor2 = this.value;

        selectDetalhamento.innerHTML = '<option value="">Selecione</option>';
        if (valor1 && valor2 && dataContratacao[valor1][valor2]) {
            dataContratacao[valor1][valor2].forEach(item => {
                const opt = document.createElement("option");
                opt.value = item;
                opt.textContent = item;
                selectDetalhamento.appendChild(opt);
            });
            selectDetalhamento.disabled = false;
        } else {
            selectDetalhamento.disabled = true;
        }
    });
    }
    else if (tipo === "ficha32") {
    document.getElementById("btn-copy").classList.add("hidden");
    document.getElementById("btn-remove").classList.remove("hidden");
    formTitle.textContent = "Ficha 32";
    formConteudo.innerHTML = `<section class="ficha" id="fichaSection">
                <h2>DADOS DO PROFISSIONAL</h2>
                <div class="linha">
                    <div class="campo">
                        <span>Nome completo:</span>
                        <input type="text" name="Nome completo" required />
                    </div>
                    <div class="campo">
                        <span>CPF:</span>
                        <input type="text" name="CPF" />
                    </div>
                    <div class="campo">
                        <span>CNS:</span>
                        <input type="text" name="CNS" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Nome da Mãe:</span>
                        <input type="text" name="Nome da Mãe" />
                    </div>
                    <div class="campo">
                        <span>Nome do Pai:</span>
                        <input type="text" name="Nome do Pai" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Data de Nascimento:</span>
                        <input type="date" name="Nascimento" />
                    </div>
                    <div class="campo">
                        <span>Municipio:</span>
                        <input type="text" name="Municipio" />
                    </div>
                    <div class="campo">
                        <span>UF:</span>
                        <input type="text" name="UF" maxlength="2" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Telefone:</span>
                        <input type="tel" name="Telefone" />
                    </div>
                    <div class="campo">
                        <span>Email:</span>
                        <input type="email" name="Email" />
                    </div>
                </div>
            </section>
            <section class="ficha">  
                <h2>DADOS DO ESTABELECIMENTO</h2>  
                <div class="linha">
                    <div class="campo">
                        <span>CNES:</span>
                        <input type="text" name="CNES" />
                    </div>
                    <div class="campo">
                        <span>Nome fantasia do Estabelecimento:</span>
                        <input type="text" name="Nome fantasia do Estabelecimento" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>CBO/Especialidade:</span>
                        <input type="text" name="CBO/Especialidade" />
                    </div>
                    <div class="campo">
                        <span>Atend.SUS:</span>
                        <input type="text" name="Atend.SUS" />
                    </div>
                    <div class="campo">
                        <span>CH Amb.:</span>
                        <input type="text" name="Amb" />
                    </div>
                    <div class="campo">
                        <span>CH Hosp:</span>
                        <input type="text" name="Hosp" />
                    </div>
                    <div class="campo">
                        <span>CH Outros:</span>
                        <input type="text" name="Outros" />
                    </div>
                </div>
                <div class="linha">
                    <div class="campo">
                        <span>Registro no Conselho de Classe:</span>
                        <input type="text" name="Registro no Conselho de Classe" />
                    </div>
                    <div class="campo">
                        <span>Órgão Emissor:</span>
                        <input type="text" name="Órgão Emissor" />
                    </div>
                    <div class="campo">
                        <span>UF Conselho:</span>
                        <input type="text" name="UF Conselho" maxlength="2" />
                    </div>
                </div>
            <div class="linha">
                <div class="campo">
                <span>Forma de Contratação com o Estabelecimento:</span>
                <select id="contratacaoEstabelecimento">
                    <option value="">Selecione</option>
                    <option value="empregaticio">Vinculo Empregaticio</option>
                    <option value="autonomo">Autonomo</option>
                    <option value="residencia">Residencia</option>
                    <option value="estagio">Estagio</option>
                    <option value="bolsa">Bolsa</option>
                    <option value="intermediado">Intermediado</option>
                    <option value="informal">Informal</option>
                </select>
                </div>

                <div class="campo">
                <span>Forma de Contratação com o Empregador:</span>
                <select id="contratacaoEmpregador" disabled>
                    <option value="">Selecione primeiro o Estabelecimento</option>
                </select>
                </div>

                <div class="campo">
                <span>Detalhamento da Forma de Contratação:</span>
                <select id="detalhamentoContratacao" disabled>
                    <option value="">Selecione primeiro o Empregador</option>
                </select>
                </div>       
                </div>


                <div class="linha">
                    <div class="campo">
                        <span>CNPJ:</span>
                        <input type="text" name="CNPJ"/>
                    </div>
                </div>
            </section>

            <section class="ficha"> 
                <div class="linha">
                    <div class="campo">
                        <span>INE da Equipe</span>
                        <input type="text" name="INE da Equipe"/>
                    </div>
                    <div class="campo">
                        <span>Tipificação da Equipe</span>
                        <input type="text" name="Tipificação da Equipe"/>
                    </div>
                    </div>
                    <div class="linha">
                        <div class="campo"> 
                            <span>Pertencente a equipe minima?</span>
                            <input type="text" name="Pertencente a equipe minima?"/>
                        </div>    
                </div>
            </section>
            <section class="ficha">
                <h2>OBSERVAÇÕES</h2>
                <textarea name="Observações" rows="4" style="width:100%"></textarea>
            </section> 
            `;

    // --- Depois que o HTML foi inserido no DOM, acessamos os selects ---
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

    const selectEstabelecimento = document.getElementById("contratacaoEstabelecimento");
    const selectEmpregador = document.getElementById("contratacaoEmpregador");
    const selectDetalhamento = document.getElementById("detalhamentoContratacao");

    // Primeiro select
    selectEstabelecimento.addEventListener("change", function() {
        const valor = this.value;
        selectEmpregador.innerHTML = '<option value="">Selecione</option>';
        selectDetalhamento.innerHTML = '<option value="">Selecione primeiro o Empregador</option>';
        selectDetalhamento.disabled = true;

        if (valor && dataContratacao[valor]) {
            Object.keys(dataContratacao[valor]).forEach(key => {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = key;
                selectEmpregador.appendChild(opt);
            });
            selectEmpregador.disabled = false;
        } else {
            selectEmpregador.disabled = true;
        }
    });

    // Segundo select
    selectEmpregador.addEventListener("change", function() {
        const valor1 = selectEstabelecimento.value;
        const valor2 = this.value;

        selectDetalhamento.innerHTML = '<option value="">Selecione</option>';
        if (valor1 && valor2 && dataContratacao[valor1][valor2]) {
            dataContratacao[valor1][valor2].forEach(item => {
                const opt = document.createElement("option");
                opt.value = item;
                opt.textContent = item;
                selectDetalhamento.appendChild(opt);
            });
            selectDetalhamento.disabled = false;
        } else {
            selectDetalhamento.disabled = true;
        }
    });
       

        

    }
   else if (tipo === "ficha33") {
    document.getElementById("btn-remove").classList.remove("hidden");
    document.getElementById("btn-copy").classList.add("hidden");
    formTitle.textContent = "Ficha 33";
    formConteudo.innerHTML = `
        <section class="ficha" id="fichaSection">
            <h2>DADOS DO PROFISSIONAL</h2>
            <div class="linha">
                <div class="campo">
                    <span>Nome completo:</span>
                    <input type="text" name="Nome completo" required />
                </div>
                <div class="campo">
                    <span>CPF:</span>
                    <input type="text" name="CPF" required/>
                </div>
                <div class="campo">
                    <span>CNS:</span>
                    <input type="text" name="CNS" required />
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>Telefone:</span>
                    <input type="tel" name="Telefone" />
                </div>
                <div class="campo">
                    <span>Email:</span>
                    <input type="email" name="Email" />
                </div>
            </div>
        </section>

        <!-- Estabelecimento Cedente -->
        <section class="ficha">  
            <h2>Estabelecimento Cedente</h2>  
            <div class="linha">
                <div class="campo">
                    <span>CNES:</span>
                    <input type="text" name="CNES Cedente" />
                </div>
                <div class="campo">
                    <span>Nome Fantasia:</span>
                    <input type="text" name="Nome Fantasia Cedente" required/>
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>CBO/Especialidade:</span>
                    <input type="text" name="CBO Cedente" required/>
                </div>
                <div class="campo">
                    <span>Atend. SUS:</span>
                    <input type="text" name="Atend SUS Cedente" required/>
                </div>
                <div class="campo">
                    <span>CH Amb.:</span>
                    <input type="text" name="CH Amb Cedente" />
                </div>
                <div class="campo">
                    <span>CH Hosp:</span>
                    <input type="text" name="CH Hosp Cedente" />
                </div>
                <div class="campo">
                    <span>CH Outros:</span>
                    <input type="text" name="CH Outros Cedente" />
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>Registro no Conselho:</span>
                    <input type="text" name="Registro Conselho Cedente" required/>
                </div>
                <div class="campo">
                    <span>Órgão Emissor:</span>
                    <input type="text" name="Órgão Emissor Cedente" required/>
                </div>
                <div class="campo">
                    <span>UF Conselho:</span>
                    <input type="text" name="UF Conselho Cedente" maxlength="2" required/>
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>Forma de Contratação (Estab.):</span>
                    <select id="contratacaoEstabelecimentoCedente" name="Contratação Estabelecimento Cedente" required>
                        <option value="">Selecione</option>
                        <option value="empregaticio">Vínculo Empregatício</option>
                        <option value="autonomo">Autônomo</option>
                        <option value="residencia">Residência</option>
                        <option value="estagio">Estágio</option>
                        <option value="bolsa">Bolsa</option>
                        <option value="intermediado">Intermediado</option>
                        <option value="informal">Informal</option>
                    </select>
                </div>
                <div class="campo">
                    <span>Forma de Contratação (Empregador):</span>
                    <select id="contratacaoEmpregadorCedente" name="Contratação Empregador Cedente" disabled>
                        <option value="">Selecione primeiro o Estabelecimento</option>
                    </select>
                </div>
                <div class="campo">
                    <span>Detalhamento da Contratação:</span>
                    <select id="detalhamentoContratacaoCedente" name="Detalhamento Cedente" disabled>
                        <option value="">Selecione primeiro o Empregador</option>
                    </select>
                </div>       
            </div>
            <div class="linha">
                <div class="campo">
                    <span>CNPJ:</span>
                    <input type="text" name="CNPJ Cedente"/>
                </div>
            </div>
        </section>

        <!-- Estabelecimento Receptor -->
        <section class="ficha">  
            <h2>Estabelecimento Receptor</h2>  
            <div class="linha">
                <div class="campo">
                    <span>CNES:</span>
                    <input type="text" name="CNES Receptor" />
                </div>
                <div class="campo">
                    <span>Nome Fantasia:</span>
                    <input type="text" name="Nome Fantasia Receptor" required/>
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>CBO/Especialidade:</span>
                    <input type="text" name="CBO Receptor" required/>
                </div>
                <div class="campo">
                    <span>Atend. SUS:</span>
                    <input type="text" name="Atend SUS Receptor" required/>
                </div>
                <div class="campo">
                    <span>CH Amb.:</span>
                    <input type="text" name="CH Amb Receptor" />
                </div>
                <div class="campo">
                    <span>CH Hosp:</span>
                    <input type="text" name="CH Hosp Receptor" />
                </div>
                <div class="campo">
                    <span>CH Outros:</span>
                    <input type="text" name="CH Outros Receptor" />
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>Registro no Conselho:</span>
                    <input type="text" name="Registro Conselho Receptor" required/>
                </div>
                <div class="campo">
                    <span>Órgão Emissor:</span>
                    <input type="text" name="Órgão Emissor Receptor" required/>
                </div>
                <div class="campo">
                    <span>UF Conselho:</span>
                    <input type="text" name="UF Conselho Receptor" maxlength="2" required/>
                </div>
            </div>
            <div class="linha">
                <div class="campo">
                    <span>Forma de Contratação (Estab.):</span>
                    <select id="contratacaoEstabelecimentoReceptor" name="Contratação Estabelecimento Receptor" required>
                        <option value="">Selecione</option>
                        <option value="empregaticio">Vínculo Empregatício</option>
                        <option value="autonomo">Autônomo</option>
                        <option value="residencia">Residência</option>
                        <option value="estagio">Estágio</option>
                        <option value="bolsa">Bolsa</option>
                        <option value="intermediado">Intermediado</option>
                        <option value="informal">Informal</option>
                    </select>
                </div>
                <div class="campo">
                    <span>Forma de Contratação (Empregador):</span>
                    <select id="contratacaoEmpregadorReceptor" name="Contratação Empregador Receptor" disabled>
                        <option value="">Selecione primeiro o Estabelecimento</option>
                    </select>
                </div>
                <div class="campo">
                    <span>Detalhamento da Contratação:</span>
                    <select id="detalhamentoContratacaoReceptor" name="Detalhamento Receptor" disabled>
                        <option value="">Selecione primeiro o Empregador</option>
                    </select>
                </div>       
            </div>
            <div class="linha">
                <div class="campo">
                    <span>CNPJ:</span>
                    <input type="text" name="CNPJ Receptor"/>
                </div>
            </div>
        </section>

        <!-- Observações -->
        <section class="ficha">
            <h2>OBSERVAÇÕES</h2>
            <textarea name="Observações" rows="4" style="width:100%"></textarea>
        </section>
    `;
}

    else if (tipo === "listacbo") {
        document.getElementById("btn-remove").classList.add("hidden");
        document.getElementById("btn-copy").classList.remove("hidden");      
        formTitle.textContent = "Lista de CBO";
        formConteudo.innerHTML = `
          <section class="ficha" id="fichaSection">
             <h2>Procure seu CBO</h2>
        <div class="linha">
            <div class="campo" style="width:100%">
            <input id="cboSearch" type="text" placeholder="Digite parte da ocupação ou código" autofocus />
            </div>
        </div>
        <ul id="cboResults" class="cbo-results"></ul>
        </section>
    `;

    // carrega o json
    fetch('cbo.json')
        .then(res => res.json()) // procura resposta no json
        .then(cbos => {
        const input = document.getElementById('cboSearch');
        const results = document.getElementById('cboResults');

        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            results.innerHTML = '';
            if (!term) return;

            // filtra por código ou por nome
            const matches = cbos.filter(item =>
            item.codigo.includes(term) || item.nome.toLowerCase().includes(term)
            ).slice(0, 15); // limita a 20 resultados

            matches.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} — ${item.codigo}`;
            li.onclick = () => {
                input.value = `${item.nome} - ${item.codigo}` ;
                results.innerHTML = '';
            };
        
            // Evento para copiar o cbo (botão) 
            let result = document.getElementById("result")    
            let btn = document.getElementById("btn-copy");
            btn.addEventListener('click', function() {
            navigator.clipboard.writeText(input.value).then(() => {
                btn.dataset.tooltip = "CBO copiado!";
                setTimeout(() => btn.dataset.tooltip = "Copiar CBO", 2000)
            });               
            });
        
            results.appendChild(li);
            });
        });
        })
        .catch(err => {
        console.error('Erro ao carregar lista de CBO', err);
        formConteudo.innerHTML += `<p style="color:red">Não foi possível carregar a lista de CBO.</p>`;
        });
    }if (tipo === "futuro") {
        document.getElementById("btn-remove").classList.remove("hidden");
        document.getElementById("btn-copy").classList.add("hidden");
        document.getElementById("btn-copy").classList.add("hidden");
        document.getElementById("btn-remove").classList.add("hidden");
        formTitle.textContent = "Preenchimento da Assinatura";
        formConteudo.innerHTML = `
        <p>Ainda não há nada aqui... 🎈 </p>
        
        `;
        }
        }
