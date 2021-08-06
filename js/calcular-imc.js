var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];
	
	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent; 

	var tdAltura = paciente.querySelector(".info-altura")
	var altura = tdAltura.textContent;

	var tdIMC = paciente.querySelector(".info-imc");
	var imc = peso / (altura * 2);
	tdIMC.textContent = imc;

	pesoEsValido = validarPeso(peso);
	alturaEsValida = validarAltura(altura);
	
	if (!pesoEsValido){
		console.log("Peso es incorrecto");
		tdIMC.textContent = "Peso incorrecto";
		pesoEsValido = false;
		paciente.classList.add("paciente-incorrecto");
	}

	if (!alturaEsValida){
		console.log("Altura es incorrecto");
		tdAltura.textContent = "Altura Incorrecta";
		alturaEsValida = false;
		paciente.classList.add("paciente-incorrecto");
	}

	if (pesoEsValido && alturaEsValida){
		var imc = peso / (altura * 2);
		tdIMC.textContent = calcularIMC(peso,altura);
	}

}

function calcularIMC(peso,altura){
	var imc = peso / (altura * 2);
	return imc.toFixed(2);
}

function validarPeso(peso){
	if (peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	} 
}

function validarAltura(altura){
	if (altura >= 0 && altura < 3.00){
		return true;
	}else{
		return false;
	} 
}