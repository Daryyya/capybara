import React, { FC } from 'react'
import style from './style.module.scss';

interface Props {
  content: string;
}

const Button: FC<Props> = ({content}) => {
  return (
    <button className={style.button}>{content}</button>
  )
}

export default Button