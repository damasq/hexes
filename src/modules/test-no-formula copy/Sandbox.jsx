import { useState } from 'react'
import styles from './Sandbox.module.scss'
// import cn from 'classnames/bind'
// import { Header } from './Header';

const Hex = ({ centerIndex, order, onClick, ...data }) => {
  const thisHexPosition = 'hexPosition' + order
  console.log(order)
  // console.log('centerIndex: ', centerIndex)
  if (order === 4) return (
    <div
      className={`${styles.hex} ${styles.hexActive} ${styles[thisHexPosition]}`}
      onClick={() => onClick(centerIndex)}
    >
      <p className={styles.location}>{data.location}</p>
      <p className={styles.date}>{data.date.day} {data.date.month}</p>
      <p className={styles.time}>{data.time}</p>
      <button> Купить билет</button>
    </div>
  )

  if (order >= 0 && order <= 8) return (
    <div
      className={`${styles.hex} ${styles.hexPassive} ${styles[thisHexPosition]}`}
      onClick={() => onClick(centerIndex)}
    >
      <p>{data.date.day} <br /> {data.date.month}</p>
    </div>
  )
}

export const Sandbox = ({ array }) => {
  const [order, setOrder] = useState(2)

  console.log('sandbox: ', order)

  const onWheel = (e) => {
    console.log('e.deltaY: ', e.deltaY)
    const mathSign = Math.sign(e.deltaY)
    const extremeHex = order + mathSign === 5 || order + mathSign === -1
    // console.log(extremeHex)
    if (extremeHex) return;

    setOrder(prevOrder => prevOrder + mathSign)
  }

  const onClick = (index) => {
    // setOrder(index - 1);
    // setOrder((prev) => prev + 1);
    setOrder(index);
  }

  return (
    <>
      <div className={styles.main} onWheel={onWheel}>
        <div className={styles.background}>
          <div className={styles.innerCircle}></div>
          <div className={styles.outerCircle}></div>
        </div>
        {/* <Header /> */}
        <div className={styles.wrapper}>
          <div className={styles.firstRival}>
            <p className={styles.firstRivalName}>test</p>
          </div>
          <div className={styles.secondRival}>
            <p className={styles.secondRivalName}>test</p>
          </div>
          {array.map((data, i) =>
            <Hex
              key={i}
              centerIndex={4 - i}
              order={order + i}
              onClick={onClick}
              {...data} />)
          }
        </div>
      </div>
    </>
  )
}