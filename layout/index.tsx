import { FC, ReactNode } from "react"
import Header from "./Header"
import style from './style.module.scss'

interface Props {
    children: ReactNode;
}

const Layout:FC<Props> = ({children}) => {
    return (
        <>
        <Header></Header>
        <main className={style.main}>{children}</main> 
        </>   
    )
}

export default Layout
