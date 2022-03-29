import { useState } from 'react/cjs/react.development'
import styles from './Sandbox.module.scss'

const Hex = ({ index, i, ...data }) => {

  let visible = (index < 0 || index > 4) && {
    "visibility": "hidden",
    "opacity": "0",
  }

  let style = {
    "left": `${index * 150}px`,
    "top": `${index * 150}px`,
    ...visible
  }

  if (index === 2) return (
    <div className={`${styles.hex} ${styles.hexActive}`} style={style}>
      <p>{data.location}</p>
      <p>{data.date}</p>
      <p>{data.time}</p>
      <button> Купить билет</button>
    </div>
  )

  return (
    <div className={`${styles.hex} ${styles.hexPassive}`} style={style}>
      <p>{data.date}</p>
    </div>
  )
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
          <Hex key={i} index={i + position} i={i} {...data} />)
        }
      </div>
    </div>
  )
}