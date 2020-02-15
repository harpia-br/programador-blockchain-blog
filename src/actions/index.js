export const PEGAR_TUTORIAIS = 'PEGAR_TUTORIAIS'

export function pegarTutoriais(elementos) {
	return {
		type: PEGAR_TUTORIAIS,
		elementos,
	}
}
