
const optionsMobile = {
  columns: [
    {
      id: "id",
      title: "ID",
      hidden: true,
    },
    {
      id: "nome_pt_br",
      name: "Vantagem",
      width: "150px",
    },
    {
      id: "pag_pt_br",
      hidden: true,
    },
    {
      id: "tipo_principal",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: true,
    },
    {
      id: "tipo_secundario",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: true,
    },
    {
      id: "custo",
      hidden: true,
    },
    {
      id: "permissao",
      name: "Permissão",
      width: "150px",
      sort: true,
      formatter: (cell, row) =>
        gridjs.html(`
            <select  class="form-select" onchange="saveSelectVantagem(${row.cells[0].data}, event)">
              <option value="-" ${cell === "-" ? "selected" : ""}>Selecione</option>
              <option value="Obrigatório" ${cell === "Obrigatório" ? "selected" : ""}>Obrigatório</option>
              <option value="Recomendado" ${cell === "Recomendado" ? "selected" : ""}>Recomendado</option>
              <option value="Permitido" ${cell === "Permitido" ? "selected" : ""}>Permitido</option>
              <option value="Não Recomendado" ${cell === "Não Recomendado" ? "selected" : ""}>Não Recomendado</option>
              <option value="Proibido" ${cell === "Proibido" ? "selected" : ""}>Proibido</option>
            </select>`),
    },
    {
      id: "observacao",
      name: "Observação",
      sort: false,
      formatter: (cell, row) =>
        gridjs.html(
          `<textarea class="form-control" onblur="saveInputObservacao(${row.cells[0].data}, event)">${cell}</textarea>`
        ),
      hidden: true,
    },
  ],
  sort: true,
  data: [],
  search: true,
  pagination: {
    enable: true,
    limit: 8,
    nextButton: false,
    prevButton: false,
  },
  language: {
    search: {
      placeholder: "Informe uma vantagem",
    },
    sort: {
      sortAsc: "Ordenar ascendente",
      sortDesc: "Ordenar descendente",
    },
    pagination: {
      previous: "<<",
      next: ">>",
      navigate: (page, pages) => `Página ${page} de ${pages}`,
      page: (page) => `Página ${page}`,
      showing: "Mostrando",
      of: "de",
      to: "para",
      results: "resultados",
    },
    loading: "Carregando...",
    noRecordsFound: "Nenhum dado encontrado",
    error: "Ops um erro ocorreu!",
  },
};

const optionsTablet = {
  columns: [
    {
      id: "id",
      title: "ID",
      hidden: true,
    },
    {
      id: "nome_pt_br",
      name: "Vantagem",
      width: "150px",
    },
    {
      id: "pag_pt_br",
      hidden: true,
    },
    {
      id: "tipo_principal",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: true,
    },
    {
      id: "tipo_secundario",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: true,
    },
    {
      id: "custo",
      hidden: true,
    },
    {
      id: "permissao",
      name: "Permissão",
      width: "200px",
      sort: true,
      formatter: (cell, row) =>
        gridjs.html(`
            <select  class="form-select" onchange="saveSelectVantagem(${row.cells[0].data}, event)">
              <option value="-" ${cell === "-" ? "selected" : ""}>Selecione</option>
              <option value="Obrigatório" ${cell === "Obrigatório" ? "selected" : ""}>Obrigatório</option>
              <option value="Recomendado" ${cell === "Recomendado" ? "selected" : ""}>Recomendado</option>
              <option value="Permitido" ${cell === "Permitido" ? "selected" : ""}>Permitido</option>
              <option value="Não Recomendado" ${cell === "Não Recomendado" ? "selected" : ""}>Não Recomendado</option>
              <option value="Proibido" ${cell === "Proibido" ? "selected" : ""}>Proibido</option>
            </select>`),
    },
    {
      id: "observacao",
      name: "Observação",
      sort: false,
      formatter: (cell, row) =>
        gridjs.html(
          `<textarea class="form-control" onblur="saveInputObservacao(${row.cells[0].data}, event)">${cell}</textarea>`
        ),
      hidden: false,
    },
  ],
  sort: true,
  data: [],
  search: true,
  pagination: {
    enable: true,
    limit: 8,
    nextButton: false,
    prevButton: false,
  },
  language: {
    search: {
      placeholder: "Informe uma vantagem",
    },
    sort: {
      sortAsc: "Ordenar ascendente",
      sortDesc: "Ordenar descendente",
    },
    pagination: {
      previous: "<<",
      next: ">>",
      navigate: (page, pages) => `Página ${page} de ${pages}`,
      page: (page) => `Página ${page}`,
      showing: "Mostrando",
      of: "de",
      to: "para",
      results: "resultados",
    },
    loading: "Carregando...",
    noRecordsFound: "Nenhum dado encontrado",
    error: "Ops um erro ocorreu!",
  },
};


const optionsDesktop = {
  columns: [
    {
      id: "id",
      title: "ID",
      hidden: true,
    },
    {
      id: "nome_pt_br",
      name: "Vantagem",
      width: "150px",
    },
    {
      id: "pag_pt_br",
      hidden: true,
    },
    {
      id: "tipo_principal",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: false,
    },
    {
      id: "tipo_secundario",
      formatter: (cell) => gridjs.html(`<span style="font-family:gurpsIcon;">${cell}</span>`),
      hidden: false,
    },
    {
      id: "custo",
      hidden: true,
    },
    {
      id: "permissao",
      name: "Permissão",
      width: "200px",
      sort: true,
      formatter: (cell, row) =>
        gridjs.html(`
            <select  class="form-select" onchange="saveSelectVantagem(${row.cells[0].data}, event)">
              <option value="-" ${cell === "-" ? "selected" : ""}>Selecione</option>
              <option value="Obrigatório" ${cell === "Obrigatório" ? "selected" : ""}>Obrigatório</option>
              <option value="Recomendado" ${cell === "Recomendado" ? "selected" : ""}>Recomendado</option>
              <option value="Permitido" ${cell === "Permitido" ? "selected" : ""}>Permitido</option>
              <option value="Não Recomendado" ${cell === "Não Recomendado" ? "selected" : ""}>Não Recomendado</option>
              <option value="Proibido" ${cell === "Proibido" ? "selected" : ""}>Proibido</option>
            </select>`),
    },
    {
      id: "observacao",
      name: "Observação",
      sort: false,
      width: "200px",
      formatter: (cell, row) =>
        gridjs.html(
          `<textarea class="form-control" onblur="saveInputObservacao(${row.cells[0].data}, event)">${cell}</textarea>`
        ),
      hidden: false,
    },
  ],
  sort: true,
  data: [],
  search: true,
  pagination: {
    enable: true,
    limit: 8,
    nextButton: false,
    prevButton: false,
  },
  language: {
    search: {
      placeholder: "Informe uma vantagem",
    },
    sort: {
      sortAsc: "Ordenar ascendente",
      sortDesc: "Ordenar descendente",
    },
    pagination: {
      previous: "<<",
      next: ">>",
      navigate: (page, pages) => `Página ${page} de ${pages}`,
      page: (page) => `Página ${page}`,
      showing: "Mostrando",
      of: "de",
      to: "para",
      results: "resultados",
    },
    loading: "Carregando...",
    noRecordsFound: "Nenhum dado encontrado",
    error: "Ops um erro ocorreu!",
  },
};


const optionsExtraDesktop = {
  columns: [
    {
      id: "id",
      title: "ID",
      hidden: true,
    },
    {
      id: "nome_pt_br",
      name: "Vantagem",
      width: "250px",
    },
    {
      id: "pag_pt_br",
      name: "Página MB",
      width: "150px",
      hidden: false,
      formatter: (cell) => gridjs.html(`<div style="text-align:center; width:100%">${cell}</div>`),
    },
    {
      id: "tipo_principal",
      formatter: (cell) =>
        gridjs.html(`<div style="font-family:gurpsIcon; text-align:center; width:100%">${cell}</div>`),
      hidden: false,
    },
    {
      id: "tipo_secundario",
      formatter: (cell) =>
        gridjs.html(`<div style="font-family:gurpsIcon; text-align:center; width:100%">${cell}</div>`),
      hidden: false,
    },
    {
      id: "custo",
      name: "Custo",
      width: "150px",
      hidden: false,
      formatter: (cell) => gridjs.html(`<div style="text-align:center; width:100%">${cell}</div>`),
    },
    {
      id: "permissao",
      name: "Permissão",
      width: "220px",
      sort: true,
      formatter: (cell, row) =>
        gridjs.html(`
            <select  class="form-select" onchange="saveSelectVantagem(${row.cells[0].data}, event)">
              <option value="-" ${cell === "-" ? "selected" : ""}>Selecione</option>
              <option value="Obrigatório" ${cell === "Obrigatório" ? "selected" : ""}>Obrigatório</option>
              <option value="Recomendado" ${cell === "Recomendado" ? "selected" : ""}>Recomendado</option>
              <option value="Permitido" ${cell === "Permitido" ? "selected" : ""}>Permitido</option>
              <option value="Não Recomendado" ${cell === "Não Recomendado" ? "selected" : ""}>Não Recomendado</option>
              <option value="Proibido" ${cell === "Proibido" ? "selected" : ""}>Proibido</option>
            </select>`),
    },
    {
      id: "observacao",
      name: "Observação",
      sort: false,
      width: "200px",
      formatter: (cell, row) =>
        gridjs.html(
          `<textarea class="form-control" onblur="saveInputObservacao(${row.cells[0].data}, event)">${cell}</textarea>`
        ),
      hidden: false,
    },
  ],
  sort: true,
  data: [],
  search: true,
  pagination: {
    enable: true,
    limit: 8,
    nextButton: false,
    prevButton: false,
  },
  language: {
    search: {
      placeholder: "Informe uma vantagem",
    },
    sort: {
      sortAsc: "Ordenar ascendente",
      sortDesc: "Ordenar descendente",
    },
    pagination: {
      previous: "<<",
      next: ">>",
      navigate: (page, pages) => `Página ${page} de ${pages}`,
      page: (page) => `Página ${page}`,
      showing: "Mostrando",
      of: "de",
      to: "para",
      results: "resultados",
    },
    loading: "Carregando...",
    noRecordsFound: "Nenhum dado encontrado",
    error: "Ops um erro ocorreu!",
  },
};

function getOptions() {
  switch (true) {
    case window.innerWidth <= 450:
      return optionsMobile;
    case window.innerWidth > 450 && window.innerWidth <= 650:
      return optionsTablet;
    case window.innerWidth > 650 && window.innerWidth <= 1200:
      return optionsDesktop;
    case window.innerWidth > 1200:
      return optionsExtraDesktop;
  }
}