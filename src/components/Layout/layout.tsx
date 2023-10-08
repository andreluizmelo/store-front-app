import { Header } from '../Header/header'
 
export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}