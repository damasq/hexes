import { useState } from 'react/cjs/react.development'
import styles from './Sandbox.module.scss'
import cn from 'classnames/bind'

const Hex = ({ order, content, ...data }) => {
  let hexIsActive = (content === 2);
  let hexOutOfScreen = (order < 0 || order > 4);

  let cx = cn.bind(styles);
  let cnHex = cx('hex', {
    'hexActive': hexIsActive,
    'hexPassive': !hexIsActive,
    'isHidden': hexOutOfScreen
  })

  // let scale = 13;

  let hexPositionStyle = {
    // "left": `${order * window.innerWidth / 5}px`,
    // "top": `${order * window.innerHeight / 5}px`,
    // "scale": scale,
    // "left": `${60 + order * 1080 / 5}px`,
    // "top": `${10 + order * 800 / 5}px`,

    // "left": `${(order) * 20}%`,
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
  const [content, changeContent] = useState(0);
  console.log('width: ' + window.innerWidth)
  console.log('height: ' + window.innerHeight)
  console.log('scroll width: ' + document.documentElement.scrollWidth)
  console.log('scroll height: ' + document.documentElement.scrollHeight)

  const onWheel = (e) => {
    if (e.deltaY > 0) {
      if (position === 2) return;
      changePosition(position + 1)
      setTimeout(() => changeContent(position + 1), 200)
    } else {
      if (position === -2) return;
      changePosition(position - 1)
      setTimeout(() => changeContent(position - 1), 200)
    }
  }

  return (
    <div onWheel={onWheel} className={styles.main}>
      <div className={styles.wrapper}>
        {array.map((data, i) =>
          <Hex key={i} order={i + position} content={i + content}  {...data} />)
        }
      </div>
    </div>
  )
}