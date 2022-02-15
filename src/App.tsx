import { useState } from 'react'
import { AppStyle } from './appstyle'
import { Form, TypeData } from './Components/Form'
import { List } from './Components/List'
import { ModalError } from './Components/ModalError'

function App() {
	const [arrayInfo, setArrayInfo] = useState<TypeData[]>([])
	const [dataEdit, setDataEdit] = useState<null | TypeData>(null)
	const [flagModal, setFlagModal] = useState<boolean>(false)

	const deleteElemet = (id: number) => {
		const newArrayInfo = arrayInfo.filter((data) => id !== data.id)
		setArrayInfo(newArrayInfo)
	}

	const editElemt = (data: TypeData) => {
		const newData = arrayInfo.map((element) => (element.id === data.id ? data : element))
		setArrayInfo(newData)
	}

	return (
		<AppStyle>
			{flagModal && (
				<ModalError>
					<div>
						<div>
							<p>Estas seguro que deseas eliminar a el amigo </p>
						</div>
						<div>
							<button>eliminar</button>
							<button>cancelar</button>
						</div>
					</div>
				</ModalError>
			)}
			<h2>Crud</h2>
			<Form
				arrayInfo={arrayInfo}
				setArrayInfo={setArrayInfo}
				dataEdit={dataEdit}
				editElemt={editElemt}
				setDataEdit={setDataEdit}
			/>
			<List arrayInfo={arrayInfo} deleteElemet={deleteElemet} setDataEdit={setDataEdit} setFlagModal={setFlagModal} />
		</AppStyle>
	)
}

export default App
