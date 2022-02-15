import { useState } from 'react'
import { AppStyle } from './appstyle'
import { Form, initialState, TypeData } from './Components/Form'
import { List } from './Components/List'

function App() {
	const [arrayInfo, setArrayInfo] = useState<TypeData[]>([])
	const [dataEdit, setDataEdit] = useState<null | TypeData>(null)

	const deleteElemet = (id: number) => {
		const newArrayInfo = arrayInfo.filter((data) => id !== data.id)
		setArrayInfo(newArrayInfo)
	}

	const editElemt = (data: TypeData) => {
		const newData = arrayInfo.map((element) =>
			element.id === data.id ? data : element
		)
		setArrayInfo(newData)
	}

	return (
		<AppStyle>
			<h2>Crud</h2>
			<Form
				arrayInfo={arrayInfo}
				setArrayInfo={setArrayInfo}
				dataEdit={dataEdit}
				editElemt={editElemt}
				setDataEdit={setDataEdit}
			/>
			<List
				arrayInfo={arrayInfo}
				deleteElemet={deleteElemet}
				setDataEdit={setDataEdit}
			/>
		</AppStyle>
	)
}

export default App
