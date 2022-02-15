import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export const initialState = {
	id: 0,
	country: '',
	medals: 0,
	players: 0
}

export interface TypeData {
	id: number
	country: string
	medals: number
	players: number
}
//
interface Props {
	arrayInfo: object[]
	setArrayInfo: Function
	dataEdit: null | TypeData
	editElemt: Function
	setDataEdit: Function
}

export const Form = ({ arrayInfo, setArrayInfo, dataEdit, editElemt, setDataEdit }: Props) => {
	const [data, setData] = useState<TypeData>(initialState)
	//

	useEffect(() => {
		if (dataEdit) {
			setData(dataEdit)
		} else {
			setData(initialState)
		}
	}, [dataEdit])

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (!data.id) {
			setArrayInfo([
				...arrayInfo,
				{
					...data,
					id: Math.random()
				}
			])
		} else {
			editElemt(data)
		}
		handleReset()
	}
	//
	const handleChange = (name: string) => (event: ChangeEvent<HTMLInputElement>) => {
		setData((state) => ({ ...state, [name]: event.target.value }))
	}

	const handleReset = () => {
		setData(initialState)
		setDataEdit(null)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input placeholder='Ciudad' value={data.country} onChange={handleChange('country')} type='text' />
			<input placeholder='Medallas' value={data.medals} onChange={handleChange('medals')} type='number' />
			<input placeholder='Jugadores' value={data.players} onChange={handleChange('players')} type='number' />
			<button type='submit'>{dataEdit ? 'Actualizar' : 'crear'}</button>
		</form>
	)
}
