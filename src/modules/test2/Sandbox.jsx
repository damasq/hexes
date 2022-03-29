import { useState } from 'react/cjs/react.development'
import styles from './Sandbox.module.scss'
import cn from 'classnames/bind'

const Hex = ({ order, ...data }) => {
  let hexIsActive = (order === 2);
  let hexOutOfScreen = (order < 0 || order > 4);

  let cx = cn.bind(styles);
  let cnHex = cx('hex', {
    'hexActive': hexIsActive,
    'hexPassive': !hexIsActive,
    'isHidden': hexOutOfScreen
  })

  let position = {
    "left": `${order * 150}px`,
    "top": `${order * 150}px`,
  }

  if (hexIsActive) return (
    <div className={cnHex} style={position}>
      <p>{data.location}</p>
      <p>{data.date}</p>
      <p>{data.time}</p>
      <button> Купить билет</button>
    </div>
  )

  return (
    <div className={cnHex} style={position}>
      <p>{data.date}</p>
    </div>
  )

  // return (
  //   <div className={cnHex} style={position}>
  //     {order === 2 ? (
  //       <>
  //         <p>{data.location}</p>
  //         <p>{data.date}</p>
  //         <p>{data.time}</p>
  //         <button> Купить билет</button>
  //       </>
  //     ) : (
  //       <p>{data.date}</p>
  //     )}
  //   </div>
  // )
}

export const Sandbox = ({ array }) => {
  const [position, changePosition] = useState(0)

  const onWheel = (e) => {
    // if (order >= -2 || order <= 2) return;
    if (e.deltaY > 0) {
      if (position === 2) return;
      changePosition(position + 1)
    } else {
      if (position === -2) return;
      changePosition(position - 1)
    }
  }

  return (
    <div onWheel={onWheel} className={styles.main}>
      <div className={styles.wrapper}>
        {array.map((data, i) =>
          <Hex key={i} order={i + position} {...data} />)
        }
      </div>
    </div>
  )
}