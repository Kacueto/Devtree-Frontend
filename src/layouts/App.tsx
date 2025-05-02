import { useQuery } from '@tanstack/react-query'
import {Navigate} from 'react-router-dom'
import { getUser } from "../api/DevTree";
import Devtree from "../components/Devtree";

export default function App() {
    const { data, isLoading, isError } = useQuery({
        queryFn: getUser,
        queryKey: ['user'], 
        retry: 1, 
        refetchOnWindowFocus: false
    })
    if (isLoading) return 'Cargando...'
    if (isError) {
        return <Navigate to = {'/auth/login'}/>
    }
    console.log(data)
    if (data) return <Devtree data = {data}/>
}