import dispatcher from "../dispatcher";

export function mostrar(text) {
	dispatcher.dispatch({
		type: "MOSTRAR_USUARIO",
		text
	})
}