import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Auth from './layouts/Auth'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Auth/>}>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />



                </Route>
            </Routes>
        </BrowserRouter>
    )
}