import React, { useState } from "react";
import * as api from "../services/Endpoints";
import swal from "sweetalert2";
import { Link } from "react-router-dom";
import estilo from '../css/style.module.css'


const NovoCliente = () => {
  const estadoInicialCliente = {
    id: null,
    nome: "",
    telefone: "",
  };
  const [cliente, setCliente] = useState(estadoInicialCliente);
  const [submitted, setSubmitted] = useState(false);

  // const trataCampoNome = (event) =>{
  //   const { name, value } = event.target;
  //   setCliente({ ...cliente, [name]: value });
  //   console.log("")
  // }
  const trataCampoTelefone = (event) => {
    const tel = document.getElementById("telefone");
    tel.addEventListener("keypress", (e) => mascaraTelefone(e.target.value));
    tel.addEventListener("change", (e) => mascaraTelefone(e.target.value));

    const mascaraTelefone = (valor) => {
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
      valor = valor.replace(/(\d)(\d{4})$/, "$1$2");
      tel.value = valor;
    };
    // const tel = document.getElementById("telefone").value;
    // var valor = tel.addEventListener("change", (e) => e.target.value.replace(/^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/));
    // const { telefone, value } = event.target.value;
    // setCliente({ ...cliente, [telefone]: value });
    console.log("aqui")
    const { name, value } = event.target;
    setCliente({ ...cliente, [name]: value });
  };

  const novo = () => {
    setCliente(estadoInicialCliente);
    setSubmitted(false);
  };

  const enviarCliente = () => {
    if (cliente.nome.length < 2) {
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "O campo nome precisa ter mais de 3 letras, favor preenche-lo corretamente!",
        confirmButtonColor: "#ffa600e6",
      });
    }else if (!document.getElementById("chekbox").checked) {
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "Você precisa aceitar os termos e condições para envio do formulário!",
        confirmButtonColor: "#ffa600e6",
      });
   }else if((cliente.telefone.length < 11) || (cliente.telefone.length > 12)){
      swal.fire({
        title: "Algo deu errado",
        icon: "error",
        text: "O campo telefone precisa ser assim (XX) XXXXX-XXXX ou (XX) XXXXX-XXXX",
        confirmButtonColor: "#ffa600e6",
      });
      var data = {
        nome: cliente.nome,
        telefone: cliente.telefone.replace(/[^0-9]+/g, '')
      };
      console.log(submitted);
      api
        .create(data)
        .then((response) => {
          setCliente({
            nome: response.data.nome,
            telefone: response.data.telefone,
          });
          setSubmitted(true);
          console.log(submitted);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <div>
      {submitted ? (
        <div className={`{estilo.clienteCadstrado} mt-3 mt-sm-4`}>
          <h4>Cliente cadastrado com sucesso!</h4>
          <button className={estilo.botaoNovo} onClick={novo}>
            Novo cadastro
          </button>
        </div>
      ) : (
        <div className={estilo.forms}>
          <div className={`${estilo.textinput} mt-3 mt-sm-4`}>
            <input
              type="text"
              className="border-0 border-bottom mx-3 p-1"
              id="nome"
              required
              value={cliente.nome}
              onChange={trataCampoTelefone}
              name="nome"
              placeholder="Nome"
            />
            <input
              type="telephone"
              className="border-0 border-bottom mx-3 p-1"
              id="telefone"
              required
              value={cliente.telefone}
              maxlength="14"
              onChange={trataCampoTelefone}
              name="telefone"
              placeholder="Telefone"
            />
          </div>
          <div>
            <div className={`${estilo.check}`}>
              <input className={estilo.termo} type="checkbox" id="chekbox"></input>
               <p className={`${estilo.ptermo}`}>Li e concordo com os termos de uso, para saber mais faça o download do mesmo através desse <Link to="/termo" target="_blank" class="linkTermo">link</Link></p>
            </div>
            <button onClick={enviarCliente} className={`${estilo.botao}`}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NovoCliente;

