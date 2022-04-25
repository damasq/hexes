import styles from './Sandbox.module.scss'

export const Sandbox = () => {
  return (
    <div class={styles.wrapper}>
      <header>
        <h1 class={styles.headtext} id={styles.text1}>Original Text</h1>
        <h1 class={styles.headtext} id={styles.text2}>Changed Text</h1>
      </header>
    </div>
  )
}