
import Footer from '../components/Footer'
import Nav from './Navbar'


export default function Layout({ preview, color, children }) {
  return (
    <>
   
      <Nav color={color}/>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
