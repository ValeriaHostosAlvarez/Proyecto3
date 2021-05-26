
botonCarta.addEventListener('click',e=>{
	e.preventDefault()
	 debugger

let opcion=document.getElementById('opcion').value
	opcion=parseInt(opcion)

	if((opcion==1) || (opcion==5) || (opcion==9)){
		texto=`<p> Signo de Fuego: Son líderes por naturaleza, llenos de vida, dinámicos, apasionados, impulsivos, confían en sí mismos, se hacen notar; son sinceros, optimistas y dominantes. </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
		return;
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

		if((opcion==2) || (opcion==6) || (opcion==10)){
		texto=`<p> Signo de Tierra: Son constantes, prácticos, realistas, trabajadores y responsables; tienden a proteger y conservar lo que consiguen. </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
		return;
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

		if((opcion==4) || (opcion==8) || (opcion==12)){
		texto=`<p> Signo de Agua: Son constantes, prácticos, realistas, trabajadores y responsables; tienden a proteger y conservar lo que consiguen. </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
		return;
		}

		else ((opcion==3) || (opcion==7) || (opcion==11)){
		texto=`<p> Signo de Aire: Les gusta razonar, debatir, planificar. Son comunicadores, analíticos y tienen cierta dificultad para demostrar lo que sienten.  </p>`
		eleccion.innerHTML=texto
		eleccion.style.setProperty("visibility", "visible")
		eleccion.style.setProperty("opacity", "1")
		eleccion.style.setProperty("transition","all 1s ease 1s")
/*  aplicará a todo con all, tiempo de duración 3s y ease es el efecto de animación */
		}

	})