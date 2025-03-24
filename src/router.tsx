import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Register from './views/Register'
import Auth from './layouts/Auth'
import App from './layouts/App'
import LinkTree from './views/LinkTree'
import Profile from './views/Profile'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Auth />}>
                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                </Route>
                <Route path='/admin' element={<App />}>
                    <Route index={true} element={<LinkTree />} />
                    <Route path='profile' element={<Profile />} />


                </Route>
            </Routes>
        </BrowserRouter>
    )
}