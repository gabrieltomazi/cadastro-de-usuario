import { Container } from "../Home/styles"
import api from '../../services/api'
import { useEffect, useState } from "react"
import TopBackground from "../../components/TopBackground"
import { DivGrid, DivUser } from "./styles"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"
import Trash from "../../assets/trash.svg"
import { Button } from "../../components/Button/styles"

function ListUsers() {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()


    // Função para pegar os usuários da API
    async function getUsers() {
        const { data } = await api.get('/usuarios')
        setUsers(data)
    }

    
    // useEffect para carregar a lista de usuários assim que a página é montada
    useEffect(() => {

        getUsers()

    }, [])


    // Função para deletar usuários pelo ID 
    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)
        getUsers()
        alert("Usuário deletado com sucesso!")
    }





    return (
        <Container style={{ height: '100%' }}>
            <TopBackground />

            <Title>Lista de Usuários</Title>

            <DivGrid>

                {/* Método MAP javascript para colocar os usuários na tela */}
                {users.map((user) => (
                    <DivUser key={user.id}>
                        <img src={`https://ui-avatars.com/api/?name=${user.name}`} alt="imagem-usuarios" />


                        <div className="divNames">
                            <p className="name">{user.name}</p>
                            <p className="age">{user.age}</p>
                            <p className="email">{user.email}</p>
                        </div>
                        <img onClick={() => deleteUser(user.id)} className="trash" src={Trash} alt="imagem-lixo" />
                    </DivUser>
                ))}
            </DivGrid>

            <Button style={{ marginBottom: '10px' }} onClick={() => navigate('/')}>Voltar</Button>



        </Container>
    )

}



export default ListUsers