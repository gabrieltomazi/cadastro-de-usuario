import { Container, DivTwo, DivForm, DivSpan, Input } from "./styles"
import DefaultButton from '../../components/Button/'
import Trash from "../../assets/trash.svg"
import { useRef } from "react"
import api from "../../services/api"
import TopBackground from "../../components/TopBackground"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/styles"
import Title from "../../components/Title"

function Home() {

  // Referências para capturar os dados dos inputs sem causar re-renderizações desnecessárias
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  // Função assíncrona que envia os dados do formulário para o Backend
  async function registerNewUser() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

    // Após registrar o usuário os campos são limpos
    inputName.current.value = ''
    inputAge.current.value = ''
    inputEmail.current.value = ''
  }

  return (

    <Container>
      <TopBackground />

      <DivForm>
        <Title>Cadastrar Usuário</Title>
        <form>

          <DivTwo>
            <DivSpan>
              <label>Nome<span>*</span></label>
              <Input className="name" placeholder="Nome do usuário" type="text" ref={inputName} />
            </DivSpan>
            <DivSpan>
              <label>Idade<span>*</span></label>
              <Input placeholder="Idade do usuário" type="number" ref={inputAge} />
            </DivSpan>

          </DivTwo>

          <DivSpan>
            <label>E-mail<span>*</span></label>
            <Input placeholder="E-mail do usuário" className="email" ref={inputEmail} type="email" />
          </DivSpan>

        </form>
        <DefaultButton theme="primary" onClick={registerNewUser}>Cadastrar usuário</DefaultButton>
        <DefaultButton onClick={() => navigate('/lista-de-usuarios')} >Ver Lista de Usuários</DefaultButton>

      </DivForm>




    </Container>

  )
}

export default Home
