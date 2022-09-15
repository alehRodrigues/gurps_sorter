
const grid = new gridjs.Grid(getOptions()).render(document.getElementById("vantagens"));

if (localStorage.getItem("vantagens") === null) {

  fetch("vantagens.json")
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem("vantagens", JSON.stringify(json));
    })
    .then(() => {
      gridUpdate(getOptions(), JSON.parse(localStorage.getItem("vantagens")).vantagens);
    });

}else {
  gridUpdate(getOptions(), JSON.parse(localStorage.getItem("vantagens")).vantagens);
}

// if(localStorage.getItem("vantagens") === null) {
//   setTimeout(() => {
//     gridUpdate(getOptions(), JSON.parse(localStorage.getItem("vantagens")).vantagens);
//   }, 1000);
// }else { 
//   gridUpdate(getOptions(), JSON.parse(localStorage.getItem("vantagens")).vantagens);
// }

function gridUpdate(options, data, filters) {
  options.data = data;
  grid.updateConfig(options).forceRender();
  insertFilters(filters);
  addEventFilters();
  gridCustomization();
}


function saveSelectVantagem(vantagemId, evt) {

  let optionSelected = evt.target.options[evt.target.selectedIndex].value;

  let vantagens = JSON.parse(localStorage.getItem("vantagens")).vantagens;

  let index = vantagens.findIndex((item) => {
    return item.id === vantagemId.toString();
  });

  vantagens[index].permissao = optionSelected;

  localStorage.setItem("vantagens", JSON.stringify({vantagens}));
}

function saveInputObservacao(vantagemId, evt) {

  if (evt.target.value) {
    let vantagens = JSON.parse(localStorage.getItem("vantagens")).vantagens;

    let index = vantagens.findIndex((item) => {
      return item.id === vantagemId.toString();
    });

    vantagens[index].observacao = evt.target.value;

    localStorage.setItem("vantagens", JSON.stringify({ vantagens }));
  }
}

window.addEventListener('resize', () => {

gridUpdate(getOptions(), JSON.parse(localStorage.getItem("vantagens")).vantagens);


});

