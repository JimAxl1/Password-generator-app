import { useState } from 'react';
import styles from './App.module.scss'
import Result from './components/Result';
import Options from './components/Options';
import 'jetbrains-mono'

function App() {
  const [password, setPassword] = useState({password:'', strength:0})
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Password Generator</h1>
      <Result password={password.password}/>
      <Options generate={(a) => setPassword(a)} strength={password.strength}/>
    </main>
  )
}

export default App;