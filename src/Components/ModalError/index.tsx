import React from 'react'
import { ModalErrorStyle } from './style'

interface Props {
	children: object
}

export const ModalError = ({ children }: Props) => {
	return (
		<ModalErrorStyle>
			<div className='card'>{children}</div>
		</ModalErrorStyle>
	)
}
