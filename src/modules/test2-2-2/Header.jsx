import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <a href="/">БИЛЕТЫ И АБОНЕМЕНТЫ</a>
      {/* <div className={styles.centerNav}> */}
      <a href="/">Как купить?</a>
      <a href="/">Правила</a>
      <a href="/">Возврат билетов</a>
      {/* </div> */}
      <a href="/">Войти</a>
    </div>
  )
}