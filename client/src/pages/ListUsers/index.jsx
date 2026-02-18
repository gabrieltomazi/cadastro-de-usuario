import api from '../../services/api'
import { useEffect, useState } from "react"
import TopBackground from "../../components/TopBackground"
import { ContainerList, DivGrid, DivParagraph, DivUser } from "./styles"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title"
import Trash from "../../assets/trash.svg"
import { Button } from "../../components/Button/styles"


function ListUsers() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true); // Começa carregando
    const [error, setError] = useState(null); // Começa sem erro
    const navigate = useNavigate()


    // Função para pegar os usuários da API
    async function getUsers() {
        try {
            setLoading(true)
            const { data } = await api.get('/usuarios')
            setUsers(data)

        } catch (error) {
            setError("Não foi possível conectar ao servidor. Verifique se o backend no Render está online.")
        } finally {
            setLoading(false)
        }

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
        <ContainerList users={users}>
            <TopBackground />

            <Title>Lista de Usuários</Title>



            {/* Método MAP javascript para colocar os usuários na tela */}
            {loading ? (
                <DivParagraph>
                    <p>Carregando dados do servidor... (O Render pode levar até 50s para iniciar)</p>
                </DivParagraph>
            ) : error ? (
                <DivParagraph>
                    <p style={{ color: 'red' }}>{error}</p>
                </DivParagraph>
            ) : users.length > 0 ? (
                users.map((user) => (
                    <DivGrid>
                        <DivUser key={user.id}>
                            <img src={`https://ui-avatars.com/api/?name=${user.name}`} alt="imagem-usuarios" />


                            <div className="divNames">
                                <p className="name">{user.name}</p>
                                <p className="age">{user.age}</p>
                                <p className="email">{user.email}</p>
                            </div>
                            <img onClick={() => deleteUser(user.id)} className="trash" src={Trash} alt="imagem-lixo" />
                        </DivUser>
                    </DivGrid>
                ))
            ) : (
                <DivParagraph>
                    <p> Nenhum usuário encontrado  </p>
                </DivParagraph>)

            }


            <Button style={{ marginBottom: '10px' }} onClick={() => navigate('/')}>Voltar</Button>



        </ContainerList>
    )

}



export default ListUsers