
function insertFilters(filtersState) {
  const searchHead = document.querySelector(".gridjs-head");

  searchHead.classList.add("d-flex", "justify-content-center", "align-items-center", "flex-column", "my-3");

  const filterBox = document.createElement("div");
  const filterBoxSecundario = document.createElement("div");

  const filter_Fisico = document.createElement("div");
  const check_Fisico = document.createElement("input");
  const label_Fisico = document.createElement("label");

  const filter_Social = document.createElement("div");
  const check_Social = document.createElement("input");
  const label_Social = document.createElement("label");

  const filter_Mental = document.createElement("div");
  const check_Mental = document.createElement("input");
  const label_Mental = document.createElement("label");

  const filter_Mental_Fisico = document.createElement("div");
  const check_Mental_Fisico = document.createElement("input");
  const label_Mental_Fisico = document.createElement("label");

  const filter_Exotico = document.createElement("div");
  const check_Exotico = document.createElement("input");
  const label_Exotico = document.createElement("label");

  const filter_Sobrenatural = document.createElement("div");
  const check_Sobrenatural = document.createElement("input");
  const label_Sobrenatural = document.createElement("label");

  const filter_Comum = document.createElement("div");
  const check_Comum = document.createElement("input");
  const label_Comum = document.createElement("label");

  check_Fisico.setAttribute("type", "checkbox");
  check_Fisico.setAttribute("id", "check_Fisico");
  check_Fisico.checked = filtersState === undefined ? false : filtersState[0].checked;
  check_Fisico.classList.add("form-check-input");

  check_Social.setAttribute("type", "checkbox");
  check_Social.setAttribute("id", "check_Social");
  check_Social.checked = filtersState === undefined ? false : filtersState[1].checked;
  check_Social.classList.add("form-check-input");

  check_Mental.setAttribute("type", "checkbox");
  check_Mental.setAttribute("id", "check_Mental");
  check_Mental.checked = filtersState === undefined ? false : filtersState[2].checked;
  check_Mental.classList.add("form-check-input");

  check_Mental_Fisico.setAttribute("type", "checkbox");
  check_Mental_Fisico.setAttribute("id", "check_Mental_Fisico");
  check_Mental_Fisico.checked = filtersState === undefined ? false : filtersState[3].checked;
  check_Mental_Fisico.classList.add("form-check-input");

  check_Exotico.setAttribute("type", "checkbox");
  check_Exotico.setAttribute("id", "check_Exotico");
  check_Exotico.checked = filtersState === undefined ? false : filtersState[4].checked;
  check_Exotico.classList.add("form-check-input");

  check_Sobrenatural.setAttribute("type", "checkbox");
  check_Sobrenatural.setAttribute("id", "check_Sobrenatural");
  check_Sobrenatural.checked = filtersState === undefined ? false : filtersState[5].checked;
  check_Sobrenatural.classList.add("form-check-input");

  check_Comum.setAttribute("type", "checkbox");
  check_Comum.setAttribute("id", "check_Comum");
  check_Comum.checked = filtersState === undefined ? false : filtersState[6].checked;
  check_Comum.classList.add("form-check-input");

  label_Fisico.setAttribute("for", "check_Fisico");
  label_Fisico.textContent = "3";
  label_Fisico.style.fontFamily = "gurpsIcon";
  label_Fisico.classList.add("form-check-label");

  label_Social.setAttribute("for", "check_Social");
  label_Social.textContent = "4";
  label_Social.style.fontFamily = "gurpsIcon";
  label_Social.classList.add("form-check-label");

  label_Mental.setAttribute("for", "check_Mental");
  label_Mental.textContent = "2";
  label_Mental.style.fontFamily = "gurpsIcon";
  label_Mental.classList.add("form-check-label");

  label_Mental_Fisico.setAttribute("for", "check_Mental_Fisico");
  label_Mental_Fisico.textContent = "2/3";
  label_Mental_Fisico.style.fontFamily = "gurpsIcon";
  label_Mental_Fisico.classList.add("form-check-label");

  label_Exotico.setAttribute("for", "check_Exotico");
  label_Exotico.textContent = "1";
  label_Exotico.style.fontFamily = "gurpsIcon";
  label_Exotico.classList.add("form-check-label");

  label_Sobrenatural.setAttribute("for", "check_Sobrenatural");
  label_Sobrenatural.textContent = "5";
  label_Sobrenatural.style.fontFamily = "gurpsIcon";
  label_Sobrenatural.classList.add("form-check-label");

  label_Comum.setAttribute("for", "check_Comum");
  label_Comum.textContent = "Comum";
  label_Comum.style.fontFamily = "gurpsIcon";
  label_Comum.classList.add("form-check-label");

  filter_Fisico.classList.add("form-check", "form-check-inline");
  filter_Fisico.appendChild(check_Fisico);
  filter_Fisico.appendChild(label_Fisico);

  filter_Social.classList.add("form-check", "form-check-inline");
  filter_Social.appendChild(check_Social);
  filter_Social.appendChild(label_Social);

  filter_Mental.classList.add("form-check", "form-check-inline");
  filter_Mental.appendChild(check_Mental);
  filter_Mental.appendChild(label_Mental);

  filter_Mental_Fisico.classList.add("form-check", "form-check-inline");
  filter_Mental_Fisico.appendChild(check_Mental_Fisico);
  filter_Mental_Fisico.appendChild(label_Mental_Fisico);

  filter_Exotico.classList.add("form-check", "form-check-inline");
  filter_Exotico.appendChild(check_Exotico);
  filter_Exotico.appendChild(label_Exotico);

  filter_Sobrenatural.classList.add("form-check", "form-check-inline");
  filter_Sobrenatural.appendChild(check_Sobrenatural);
  filter_Sobrenatural.appendChild(label_Sobrenatural);

  filter_Comum.classList.add("form-check", "form-check-inline");
  filter_Comum.appendChild(check_Comum);
  filter_Comum.appendChild(label_Comum);

  filterBox.appendChild(filter_Fisico);
  filterBox.appendChild(filter_Social);
  filterBox.appendChild(filter_Mental);
  filterBox.appendChild(filter_Mental_Fisico);

  filterBoxSecundario.appendChild(filter_Exotico);
  filterBoxSecundario.appendChild(filter_Sobrenatural);
  filterBoxSecundario.appendChild(filter_Comum);

  filterBox.classList.add("d-flex", "justify-content-center", "my-2", "ps-3");
  filterBoxSecundario.classList.add("d-flex", "justify-content-center", "mb-2", "ps-3");

  searchHead.appendChild(filterBox);
  searchHead.appendChild(filterBoxSecundario);
}

function addEventFilters() {
  const searchHead = document.querySelector(".gridjs-head");
  const filters = searchHead.querySelectorAll(".form-check-input");

  searchHead.addEventListener("change", () => {
    let data = JSON.parse(localStorage.getItem("vantagens"));

    let filterFisico = [];
    let filterSocial = [];
    let filterMental = [];
    let filterMentalFisico = [];
    let filterExotico = [];
    let filterSobrenatural = [];
    let filterComum = [];

    if (
      !filters[0].checked &&
      !filters[1].checked &&
      !filters[2].checked &&
      !filters[3].checked &&
      !filters[4].checked &&
      !filters[5].checked &&
      !filters[6].checked
    ) {
      getOptions().data = data.vantagens;
      grid.updateConfig(getOptions()).forceRender();
      insertFilters(filters);
      addEventFilters();
      return;
    }

    if (filters[0].checked) {
      filterFisico = data.vantagens.filter((item) => {
        return item.tipo_principal === "3";
      });
    }

    if (filters[1].checked) {
      filterSocial = data.vantagens.filter((item) => {
        return item.tipo_principal === "4";
      });
    }

    if (filters[2].checked) {
      filterMental = data.vantagens.filter((item) => {
        return item.tipo_principal === "2";
      });
    }

    if (filters[3].checked) {
      filterMentalFisico = data.vantagens.filter((item) => {
        return item.tipo_principal === "2/3";
      });
    }

    if (filters[4].checked) {
      filterExotico = data.vantagens.filter((item) => {
        return item.tipo_secundario === "1";
      });
    }

    if (filters[5].checked) {
      filterSobrenatural = data.vantagens.filter((item) => {
        return item.tipo_secundario === "5";
      });
    }

    if (filters[6].checked) {
      filterComum = data.vantagens.filter((item) => {
        return item.tipo_secundario === "-";
      });
    }

    let primeiroFiltro = [...new Set([...filterFisico, ...filterSocial, ...filterMental, ...filterMentalFisico])];

    let segundoFiltro = [...new Set([...filterExotico, ...filterSobrenatural, ...filterComum])];

    let resultado = [];

    if (primeiroFiltro.length > 0 && segundoFiltro.length > 0) {
      resultado = primeiroFiltro.filter((item) => {
        return segundoFiltro.some((item2) => {
          return item.tipo_secundario === item2.tipo_secundario;
        });
      });
    } else if (primeiroFiltro.length > 0 && segundoFiltro.length === 0) {
      resultado = primeiroFiltro;
    } else {
      resultado = segundoFiltro;
    }

    gridUpdate(getOptions, resultado, filters);
  });
}

function gridCustomization() {
  setTimeout(() => {
    document
      .getElementsByClassName("gridjs-pagination")[0]
      .classList.add("d-flex", "flex-column", "justify-content-center", "align-items-center");
    document.getElementsByClassName("gridjs-summary")[0].classList.add("mx-auto");

    document.getElementsByClassName("gridjs-pages")[0].classList.add("mx-auto");
  }, 0);
}




