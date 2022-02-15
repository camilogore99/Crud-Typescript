import React from 'react'

interface Props {
	arrayInfo: any[]
	deleteElemet: Function
	setDataEdit: Function
	setFlagModal: Function
}

export const List = ({ arrayInfo, deleteElemet, setDataEdit, setFlagModal }: Props) => {
	return (
		<div>
			<h2>Lista de datos Agregados</h2>
			<table>
				<thead>
					<tr>
						<th>Pais</th>
						<th>Medallas</th>
						<th>Jugadores</th>
						<th>Eliminar</th>
						<th>Actualizar</th>
					</tr>
				</thead>
				<tbody>
					{arrayInfo.map((data, i) => (
						<tr key={i}>
							<td>{data.country}</td>
							<td>{data.medals}</td>
							<td>{data.players}</td>
							<td>
								<button
									onClick={() => {
										setFlagModal(true)
										// deleteElemet(data.id)
									}}
								>
									Eliminar
								</button>
							</td>
							<td>
								<button
									onClick={() => {
										setDataEdit(data)
									}}
								>
									Actualizar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
