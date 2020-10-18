// create map
const map = L.map('mapid').setView([-19.9236035,-43.9419782], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
})

let marker;

// create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng

  // remove icon
  marker && map.removeLayer(marker)
  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map)
})


// adicionar campo de fotos
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector('#images')
  // pegar container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar o clone da última imagem adicionada.
  const newFieldContainer = fieldsContainer[--fieldsContainer.length].cloneNode(true)

  // verificar se o campo esta vazio, se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0]

  if(input.value == "") {
    return
  }
  // limpar o campo antes de adicionar ao container de imagens
  input.value=""
  // adicionar o clone ao container de #imagens
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length < 2) {
    // limpar o campo
    span.parentNode.children[0].value=""
    return
  }

  // deletar o campo
  span.parentNode.remove()
}

// seleção do Sim e Não
function toggleSelect(event) {
  // pegar o botão clicado
  const button = event.currentTarget

  // remover a classe .active (dos botões)
  document.querySelectorAll('.button-select button').forEach((button) => {
    button.classList.remove('active')
  })
  // adicionar a classe . active nesse botão clicado
  button.classList.add('active')

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]')

input.value = button.dataset.value
}

function validate(event) {
  // validar se lat e lng estão preechidos
  const lat = document.querySelector('[name=lat]')
  const lng = document.querySelector('[name=lng]')
  if(lat.value ==="" && lng.value ===""){
    event.preventDefault()
    alert('Selecione um ponto no mapa')
  } else {
    return
  }
  
}
