import styled from 'styled-components'

export const ModalErrorStyle = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	.card {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: gray;
		width: 30%;
		height: 50%;
	}
`
