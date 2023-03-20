import AnimaNumeros from "./anima-numeros.js";
export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  //puxa info de arquivo json
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animanumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animanumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  // Cria a Div com informações
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  return criarAnimais();
}
