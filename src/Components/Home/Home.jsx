import { useAuth } from "../../authContext"
import Button from 'react-bootstrap/Button';


export function Home() {
    const {user, logout, loading} = useAuth()
    console.log(user);

 

    const handleLogout =async () => {
        await logout();
    };

    if (loading) return <h1>Cargando</h1>
    
  return (
    <div>
        <h1>Bienvenido {user.email}</h1>
        <Button onClick={handleLogout} variant="danger">Salir</Button>{' '}
    </div>
  )
}


