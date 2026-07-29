/**
 * Mock server do SCUA Logon API (scua-dev/api) — Fase 3 do plano de evolução da documentação.
 *
 * Gerado a partir do openapi.yml em 2026-07-29. Roda 100% no free tier do Cloudflare Workers
 * (100k requisições/dia, sem cartão de crédito, nunca expira — ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md,
 * Fase 3, para o porquê da escolha).
 *
 * Deploy: colar este arquivo inteiro no editor "Quick Edit" de um Worker novo no dashboard da
 * Cloudflare (dash.cloudflare.com -> Workers & Pages -> Create -> Create Worker -> Edit code) e
 * clicar em Deploy. Não precisa de CLI, build, nem conta paga. Ver mock/README.md para o passo a
 * passo completo.
 *
 * Comportamento:
 *  - Endpoint já documentado com schema real (Fase 1) -> devolve um exemplo real, com o status
 *    HTTP correto.
 *  - Endpoint ainda não documentado -> devolve 501 com uma mensagem explicando isso (nunca finge
 *    um 200 vazio — um mock que mente sobre cobertura é pior que não ter mock).
 *  - CORS liberado para qualquer origem, incluindo o preflight OPTIONS, para funcionar direto do
 *    "Test Request" do Scalar e de chamadas de qualquer app de parceiro.
 */

const OPERATIONS = [
  {
    "method": "GET",
    "path": "/logoncontrol/user/logout",
    "pattern": "/logoncontrol/user/logout",
    "summary": "Logout",
    "tag": "Autenticação",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/user/logout",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/public/logon/login",
    "pattern": "/logoncontrol/public/logon/login",
    "summary": "Login",
    "tag": "Autenticação",
    "mocked": true,
    "status": 200,
    "body": {
      "codUsuario": 1001,
      "nomUsuario": "Usuário de Exemplo",
      "txtLogin": "usuario.exemplo",
      "txtEmail": "usuario.exemplo@empresa-exemplo.com.br",
      "codObjeto": 20001,
      "token": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "roles": [
        "ROLE_USER"
      ],
      "acoes": []
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/public/test",
    "pattern": "/logoncontrol/public/test",
    "summary": "Test",
    "tag": "Autenticação",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/public/test",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/list",
    "pattern": "/logoncontrol/holiday/list",
    "summary": "List",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/list",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/list/date/2",
    "pattern": "/logoncontrol/holiday/list/date/2",
    "summary": "List Dates",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/list/date/2",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/save",
    "pattern": "/logoncontrol/holiday/save",
    "summary": "Save",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/save/date",
    "pattern": "/logoncontrol/holiday/save/date",
    "summary": "Save Dates",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/save/date",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/delete/date/19",
    "pattern": "/logoncontrol/holiday/delete/date/19",
    "summary": "Delete Date",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/delete/date/19",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/relatedTo/212108316",
    "pattern": "/logoncontrol/holiday/relatedTo/212108316",
    "summary": "Associa",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/relatedTo/212108316",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/list/holiday/available/212108316",
    "pattern": "/logoncontrol/holiday/list/holiday/available/212108316",
    "summary": "List Disponiveis",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/list/holiday/available/212108316",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/list/holiday/212108316",
    "pattern": "/logoncontrol/holiday/list/holiday/212108316",
    "summary": "List Selecionados",
    "tag": "Feriados",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/holiday/list/holiday/212108316",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/users/listar",
    "pattern": "/logoncontrol/users/listar",
    "summary": "users/listar",
    "tag": "Usuários (Colaboradores)",
    "mocked": true,
    "status": 200,
    "body": {
      "content": [
        {
          "codigo": 1001,
          "login": "usuario.exemplo",
          "name": "Usuário de Exemplo",
          "email": "usuario.exemplo@empresa-exemplo.com.br",
          "dominio": "dominio-exemplo",
          "admin": false,
          "rh": false,
          "producao": false,
          "sustentacao": false,
          "ativo": true,
          "blocked": false,
          "codObjeto": 20001,
          "codHorario": 1,
          "department": "TI",
          "numSessoes": 0
        }
      ],
      "totalElements": 1,
      "totalPages": 1,
      "number": 0,
      "size": 20,
      "first": true,
      "last": true,
      "empty": false
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/users/listar/manager",
    "pattern": "/logoncontrol/users/listar/manager",
    "summary": "users/listar/manager",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/users/listar/manager",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/users/getSuperioresSubstitutos",
    "pattern": "/logoncontrol/users/getSuperioresSubstitutos",
    "summary": "getSuperioresSubstitutos",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/users/getSuperioresSubstitutos",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/list",
    "pattern": "/logoncontrol/workinghours/list",
    "summary": "List working hours",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/list",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/workinghours/list/date/1128",
    "pattern": "/logoncontrol/workinghours/list/date/1128",
    "summary": "List working hours date",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/workinghours/list/date/1128",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/workinghours/availablelist",
    "pattern": "/logoncontrol/workinghours/availablelist",
    "summary": "List available users",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/workinghours/availablelist",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/workinghours/selectedlist/1128",
    "pattern": "/logoncontrol/workinghours/selectedlist/1128",
    "summary": "List selected users",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/workinghours/selectedlist/1128",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/save",
    "pattern": "/logoncontrol/workinghours/save",
    "summary": "Save working hours",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/save/date",
    "pattern": "/logoncontrol/workinghours/save/date",
    "summary": "Save working hours date",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/save/date",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/delete/2073",
    "pattern": "/logoncontrol/workinghours/delete/2073",
    "summary": "Delete working hours",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/delete/2073",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/addTo/212108288/1",
    "pattern": "/logoncontrol/workinghours/addTo/212108288/1",
    "summary": "Add to working hours",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/addTo/212108288/1",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/workinghours/removeFrom/212108288/1",
    "pattern": "/logoncontrol/workinghours/removeFrom/212108288/1",
    "summary": "Remove to working hours",
    "tag": "Jornadas de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/workinghours/removeFrom/212108288/1",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/workinghourtype/list",
    "pattern": "/logoncontrol/workinghourtype/list",
    "summary": "List Workhourstype",
    "tag": "Tipos de Jornada",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/workinghourtype/list",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/holiday/delete/{id}",
    "pattern": "/logoncontrol/holiday/delete/([^/]+)",
    "summary": "Delete",
    "tag": "Feriados",
    "mocked": true,
    "status": 200,
    "body": 8
  },
  {
    "method": "GET",
    "path": "/logoncontrol/usersvacations/list",
    "pattern": "/logoncontrol/usersvacations/list",
    "summary": "Listar férias/afastamentos",
    "tag": "Férias e Afastamentos",
    "mocked": true,
    "status": 200,
    "body": [
      {
        "codFeriasUsuarios": 501,
        "codObjetoSolicitante": 212108288,
        "codObjetoCadastro": 212108288,
        "datInicio": "2026-08-01T00:00:00",
        "datFim": "2026-08-10T00:00:00",
        "datCadastro": "2026-07-29T09:00:00",
        "txtComentario": "Férias",
        "indApagado": false
      }
    ]
  },
  {
    "method": "POST",
    "path": "/logoncontrol/usersvacations/save",
    "pattern": "/logoncontrol/usersvacations/save",
    "summary": "Salvar período de férias/afastamento",
    "tag": "Férias e Afastamentos",
    "mocked": true,
    "status": 200,
    "body": 501
  },
  {
    "method": "POST",
    "path": "/logoncontrol/usersvacations/delete",
    "pattern": "/logoncontrol/usersvacations/delete",
    "summary": "Excluir período de férias/afastamento",
    "tag": "Férias e Afastamentos",
    "mocked": true,
    "status": 200,
    "body": true
  }
];

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
};

function matchOperation(method, pathname) {
  for (const op of OPERATIONS) {
    if (op.method !== method) continue;
    const regex = new RegExp("^" + op.pattern + "$");
    if (regex.test(pathname)) return op;
  }
  return null;
}

async function handleRequest(request) {
  const url = new URL(request.url);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  if (url.pathname === "/" || url.pathname === "") {
    const mockedCount = OPERATIONS.filter((o) => o.mocked).length;
    return new Response(
      JSON.stringify(
        {
          servico: "Mock do SCUA Logon API (scua-dev/api)",
          aviso: "Ambiente de teste — dados fictícios, não aponta para nenhum banco real.",
          endpoints_documentados: OPERATIONS.length,
          endpoints_com_exemplo_real: mockedCount,
          doc: "https://scua-dev.github.io/api/",
        },
        null,
        2
      ),
      { status: 200, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
    );
  }

  const op = matchOperation(request.method, url.pathname);

  if (!op) {
    return new Response(
      JSON.stringify({
        erro: "Rota não encontrada neste mock.",
        dica: "Conferir o path exato em https://scua-dev.github.io/api/",
      }),
      { status: 404, headers: { "Content-Type": "application/json", ...CORS_HEADERS } }
    );
  }

  return new Response(JSON.stringify(op.body, null, 2), {
    status: op.status,
    headers: { "Content-Type": "application/json", "X-Mock": "true", ...CORS_HEADERS },
  });
}

export default {
  async fetch(request) {
    return handleRequest(request);
  },
};
