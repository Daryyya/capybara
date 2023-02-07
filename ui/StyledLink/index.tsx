import Link from 'next/link';
import React, { FC, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    path: string;
}

const StyledLink:FC<Props> = ({children, path}) => {
  return (
    <Link href={path}>{children}</Link>
  )
}

export default StyledLink