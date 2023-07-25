import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '@/src/components/button/button'
import styles from '@/styles/Home.module.css'
import NavBar from '@/src/components/navbar/navbar'

import Container from '@/src/components/container/container';
import CampoUsuario from '@/src/components/campoUsuario.jsx/campoUsuario';
import SigninCard from '@/src/components/signincard/signinCard';
import Search from '@/src/components/search/search';

export default function Home() {



  return (
    <>
       <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexGrow: 1 }}></div>
          <CampoUsuario name="Francisco" />
        </div>
        
        <Search/>
        <NavBar/>


        <div className={styles.content}>
          <div className={styles.espaco}>
            <SigninCard/>
          </div>
          <div className={styles.espaco}>
            <SigninCard/>
          </div>
        </div>
       </Container>
    </>
  )
}
