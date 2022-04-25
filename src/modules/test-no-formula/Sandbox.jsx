import { useState } from 'react/cjs/react.development'
import styles from './Sandbox.module.scss'
import cn from 'classnames/bind'
import { Header } from './Header';

const Hex = ({ i, position, order, onChangeOrder, ...data }) => {
  let hexIsActive = (order === 3);
  let hexOutOfScreen = (position < -2 || position > 2);
  console.log("HEX position, order: ", position, order, data.time)
  // console.log(data.time)
  let cx = cn.bind(styles);
  let cnHex = cx('hex', {
    'hexActive': hexIsActive,
    'hexPassive': !hexIsActive,
    'isHidden': hexOutOfScreen
  })

  let hexPositionStyle = {
    "right": `${50 - (2.4 - 0.35 * Math.abs(position)) * position * 12}%`,
    "top": `${50 - (2.5 - 0.35 * Math.abs(position)) * position * 7}%`,
    "transform": `translate(50%, -50%) scale(${Math.pow(0.6, Math.abs(position))})`
  }

  if (hexIsActive) return (
    <div onClick={() => console.log('center')} className={cnHex} style={hexPositionStyle}>
      <p className={styles.location}>{data.location}</p>
      <p className={styles.date}>{data.date.day} {data.date.month}</p>
      <p className={styles.time}>{data.time}</p>
      <button> Купить билет</button>
    </div>
  )

  return (
    <div onClick={() => onChangeOrder(position - i + 1)} className={cnHex} style={hexPositionStyle}>
      <p>{data.date.day} <br /> {data.date.month}</p>
    </div>
  )
}

export const Sandbox = ({ array }) => {
  const [position, setPosition] = useState(-2);
  const [order, setOrder] = useState(-2);
  // console.log('width: ' + window.innerWidth)
  // console.log('height: ' + window.innerHeight)
  // console.log('scroll width: ' + document.documentElement.scrollWidth)
  // console.log('scroll height: ' + document.documentElement.scrollHeight)

  console.log('POSITION: ', position)

  const changeOrder = (pos) => {
    setPosition(pos)
    setTimeout(() => setOrder(pos), 200)
  }

  const onWheel = (e) => {
    if (e.deltaY > 0) {
      if (position === 0) return;
      setPosition(position + 1)
      setTimeout(() => setOrder(position + 1), 200)
    } else {
      if (position === -4) return;
      setPosition(position - 1)
      setTimeout(() => setOrder(position - 1), 200)
    }
  }

  // console.log(array)
  // console.log("SANDBOX position, order: ", position, order)

  return (
    <div onWheel={onWheel} className={styles.main}>
      <div className={styles.background}>
        <div className={styles.innerCircle}></div>
        <div className={styles.outerCircle}></div>
      </div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.firstRival}>
          <p className={styles.firstRivalName}>{array[Math.abs(order)].rival_1}</p>
        </div>
        <div className={styles.secondRival}>
          <p className={styles.secondRivalName}>{array[Math.abs(order)].rival_2}</p>
        </div>
        {array.map((data, i) =>
          <Hex
            key={i}
            i={i}
            position={position + i}
            order={order + 3 + i}
            onChangeOrder={changeOrder}
            // onClick={() => console.log('clicked')}
            {...data} />)
        }
      </div>
    </div>
  )
}