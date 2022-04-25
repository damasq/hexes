import { useState } from 'react/cjs/react.development'
import styles from './Sandbox.module.scss'
import cn from 'classnames/bind'

const Hex = ({ position, order, ...data }) => {
  let hexIsActive = (order === 3);
  let hexOutOfScreen = (position < -2 || position > 2);

  console.log(position, order)
  // console.log(scale)

  let cx = cn.bind(styles);
  let cnHex = cx('hex', {
    'hexActive': hexIsActive,
    'hexPassive': !hexIsActive,
    'isHidden': hexOutOfScreen
  })

  let scale;
  (Math.abs(position) === 2) && (scale = 0.4);
  (Math.abs(position) === 1) && (scale = 0.7);
  (position === 0) && (scale = 1);

  // scale = 1 - Math.sqrt(Math.abs(position)) * 0.4;

  let hexPositionStyle = {

    // "left": `${50 + position * 20 * Math.sqrt(Math.abs(position))}%`,
    "left": `${50 + position * 20}%`,
    "top": `${50 + position * 20}%`,
    "transform": `translate(-50%, -50%) scale(${scale})`

    // "transform": `scale(${1})`,
    // "transform": `translate(${order * 25}%)`
    // "top": `0px`,
    // "top": `${order * 20}px`,
  }

  if (hexIsActive) return (
    <div className={cnHex} style={hexPositionStyle}>
      <p>{data.location}</p>
      <p>{data.date}</p>
      <p>{data.time}</p>
      <button> Купить билет</button>
    </div>
  )

  return (
    <div className={cnHex} style={hexPositionStyle}>
      <p>{data.date}</p>
    </div>
  )
}

export const Sandbox = ({ array }) => {
  const [position, changePosition] = useState(0);
  const [order, changechangeorder] = useState(0);
  // console.log('width: ' + window.innerWidth)
  console.log('height: ' + window.innerHeight)
  // console.log('scroll width: ' + document.documentElement.scrollWidth)
  console.log('scroll height: ' + document.documentElement.scrollHeight)
  // const scale = [0.5, 0.75, 1, 0.75, 0.5];

  const onWheel = (e) => {
    if (e.deltaY > 0) {
      if (position === 2) return;
      setTimeout(changePosition(position + 1))
      setTimeout(() => changechangeorder(position + 1), 200)
    } else {
      if (position === -2) return;
      setTimeout(changePosition(position - 1))
      setTimeout(() => changechangeorder(position - 1), 200)
    }
  }

  return (
    <div onWheel={onWheel} className={styles.main}>
      <div className={styles.wrapper}>
        {array.map((data, i) =>
          <Hex
            key={i}
            position={i + position - 2}
            // scale={scale[i]}
            order={i + order + 1}
            {...data} />)
        }
      </div>
    </div>
  )
}