import { Outlet } from "react-router-dom"
import {Toaster} from "sonner"
export default function Auth() {
    return (
        <>
            <div className="bg-slate-800 min-h-screen">
                <div className="max-w-lg mx-auto pt-10" >
                    <img src="/logo.svg" alt="Logotipo Devtree" />
                    <div className="py-10">
                        <div className="">
                            <Outlet/>   
                        </div>
                    </div>
                </div>


            </div>
            <Toaster/>
        </>
    )
}
