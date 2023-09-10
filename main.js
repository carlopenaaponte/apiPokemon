const listaPokemon = document.querySelector('#listaPokemon');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i=1; i<=151; i++){
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => mostarDatos(data))
}

function mostarDatos(data){

    let tipos = data.types.map( (type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    let habilidades = data.abilities.map((abilities) => `<p>${abilities.ability.name}</p>`)
    console.log(habilidades);


    const div = document.createElement('div');
    div.classList.add('caja-principal');
    div.innerHTML = `
        <div class="caja1">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" height="300px" width="300px">
        </div>

        <div class="caja2">
            <div class="pokemon-info">
                <div class="nombre-id">
                    <h2 class="pokemon-nombre nombre-id-estilos">${data.name}</h2>
                    <p class="pokemon-id nombre-id-estilos">#${data.id}</p>
                </div>   

                <div class="pokemon-tipos">
                    <p class="titulo-tipo">Tipo</p>
                    <div class="tipos">
                        ${tipos}
                    </div>     
                </div>

                <div class="pokemon-habilidad">
                    <p>Habilidad</p>
                    <div class="habilidades">
                       ${habilidades}
                    </div>
                </div>

            </div>
        </div>    
    
    `;
    listaPokemon.appendChild(div);
}




