
const resultado = document.querySelector(`#resultado`)
const peso = document.querySelector(`#Peso`)
const altura = document.querySelector(`#Altura`)
const calcular = ()=> {
    if (altura.value !== `` && peso.value !== ``) {
        const imc = (peso.value/ (altura.value*altura.value)).toFixed(2)
        let classification;
        if (imc <18.5) {
            classification = `abaixo do peso`
        }
       else if (imc <25) {
            classification = `peso normal`
        }
       else if (imc <30) {
            classification = `acima do peso`
        }
        else if (imc <35) {
            classification = `obesidade grau I`
        }  
        else if (imc <41) {
            classification = `obesidade grau II`
        }
        else {
            classification = `obesidade grau III`
        }

        let resp = document.getElementById("minhaResposta");
  resp.innerText = `IMC: ${imc} (${classification})`;
    }
    else {
        resultado.innerHTML = `preencha os campos corretamente`
                let resp = document.getElementById("minhaResposta");
  resp.innerText = `preencha os campos corretamente`;
    }
}