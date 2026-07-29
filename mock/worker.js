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
    "method": "GET",
    "path": "/logoncontrol/administrator/listar",
    "pattern": "/logoncontrol/administrator/listar",
    "summary": "Listar usuários",
    "tag": "Administradores",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/administrator/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/administrator/cadastro/1",
    "pattern": "/logoncontrol/administrator/cadastro/1",
    "summary": "Detalhe usuário",
    "tag": "Administradores",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/administrator/cadastro/1",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/administrator/save",
    "pattern": "/logoncontrol/administrator/save",
    "summary": "Salva Edita Usuário",
    "tag": "Administradores",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/administrator/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/list",
    "pattern": "/logoncontrol/overtime/list",
    "summary": "List requests",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/list",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/getCounters",
    "pattern": "/logoncontrol/overtime/getCounters",
    "summary": "GetCounters",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/getCounters",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/list/approvals",
    "pattern": "/logoncontrol/overtime/list/approvals",
    "summary": "List request to approval",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/list/approvals",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/save/date",
    "pattern": "/logoncontrol/overtime/save/date",
    "summary": "Create request",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/save/date",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/approval/3989/2",
    "pattern": "/logoncontrol/overtime/approval/3989/2",
    "summary": "Approve request",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/approval/3989/2",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/overtime/approvals/212108432",
    "pattern": "/logoncontrol/overtime/approvals/212108432",
    "summary": "List approvals",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/overtime/approvals/212108432",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/getOvertimeHideRecurrent",
    "pattern": "/logoncontrol/overtime/getOvertimeHideRecurrent",
    "summary": "Get Overtime Hide Recurrent",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/getOvertimeHideRecurrent",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/cancel/11498",
    "pattern": "/logoncontrol/overtime/cancel/11498",
    "summary": "Cancel request",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/cancel/11498",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/overtime/reproveAll",
    "pattern": "/logoncontrol/overtime/reproveAll",
    "summary": "Reprove all requests",
    "tag": "Horas Extras",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/overtime/reproveAll",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/headedusers/getShownColumns",
    "pattern": "/logoncontrol/headedusers/getShownColumns",
    "summary": "http://localhost:8095/logoncontrol/headedusers/getShownColumns",
    "tag": "Liderados e Gestores",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/headedusers/getShownColumns",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/headedusers/listar",
    "pattern": "/logoncontrol/headedusers/listar",
    "summary": "List",
    "tag": "Liderados e Gestores",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/headedusers/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/users/mark/212108288",
    "pattern": "/logoncontrol/users/mark/212108288",
    "summary": "Mark time",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/users/mark/212108288",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/users/listar/overtime",
    "pattern": "/logoncontrol/users/listar/overtime",
    "summary": "listar/overtime",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/users/listar/overtime",
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
    "method": "POST",
    "path": "/logoncontrol/users/unblock/",
    "pattern": "/logoncontrol/users/unblock/",
    "summary": "users/unblock",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/users/unblock/",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/users/release_journey/212108324",
    "pattern": "/logoncontrol/users/release_journey/212108324",
    "summary": "users/release_journey",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/users/release_journey/212108324",
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
    "method": "GET",
    "path": "/logoncontrol/users/access",
    "pattern": "/logoncontrol/users/access",
    "summary": "users/access",
    "tag": "Usuários (Colaboradores)",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/users/access",
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
    "path": "/logoncontrol/workstation/listar",
    "pattern": "/logoncontrol/workstation/listar",
    "summary": "List Workstation",
    "tag": "Estações de Trabalho",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/workstation/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/",
    "pattern": "/",
    "summary": "Save",
    "tag": "Parâmetros",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /",
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
    "path": "/logoncontrol/usersexceptions/save",
    "pattern": "/logoncontrol/usersexceptions/save",
    "summary": "Save",
    "tag": "Afastamentos e Exceções",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/usersexceptions/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/usersdelegate/update",
    "pattern": "/logoncontrol/usersdelegate/update",
    "summary": "Save / Update",
    "tag": "Delegação",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/usersdelegate/update",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/usersdelegate/list/212108295",
    "pattern": "/logoncontrol/usersdelegate/list/212108295",
    "summary": "List",
    "tag": "Delegação",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/usersdelegate/list/212108295",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/domain/listar",
    "pattern": "/logoncontrol/domain/listar",
    "summary": "List",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/domain/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/domain/details/1",
    "pattern": "/logoncontrol/domain/details/1",
    "summary": "Details",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/domain/details/1",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/domain/domainsync/1",
    "pattern": "/logoncontrol/domain/domainsync/1",
    "summary": "Domain Sync",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/domain/domainsync/1",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/domain/save",
    "pattern": "/logoncontrol/domain/save",
    "summary": "Save",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/domain/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "DELETE",
    "path": "/logoncontrol/domain/delete/12",
    "pattern": "/logoncontrol/domain/delete/12",
    "summary": "Delete",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "DELETE /logoncontrol/domain/delete/12",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/domain/sync",
    "pattern": "/logoncontrol/domain/sync",
    "summary": "Sync User",
    "tag": "Domínios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/domain/sync",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/parameter/listar",
    "pattern": "/logoncontrol/parameter/listar",
    "summary": "List",
    "tag": "Parâmetros",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/parameter/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/parameter/save",
    "pattern": "/logoncontrol/parameter/save",
    "summary": "Get Param",
    "tag": "Parâmetros",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/parameter/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/msgsystem/listar",
    "pattern": "/logoncontrol/msgsystem/listar",
    "summary": "List",
    "tag": "Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/msgsystem/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/msgsystem/save",
    "pattern": "/logoncontrol/msgsystem/save",
    "summary": "Save",
    "tag": "Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/msgsystem/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/msgsystemdelay/listar",
    "pattern": "/logoncontrol/msgsystemdelay/listar",
    "summary": "List",
    "tag": "Atrasos de Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/msgsystemdelay/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/msgsystemdelay/update",
    "pattern": "/logoncontrol/msgsystemdelay/update",
    "summary": "Update",
    "tag": "Atrasos de Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/msgsystemdelay/update",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/msgsystemdelay/delete/48",
    "pattern": "/logoncontrol/msgsystemdelay/delete/48",
    "summary": "Delete",
    "tag": "Atrasos de Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/msgsystemdelay/delete/48",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/msgsystemdelay/listar-tipos",
    "pattern": "/logoncontrol/msgsystemdelay/listar\\-tipos",
    "summary": "Listar Tipos",
    "tag": "Atrasos de Mensagens",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/msgsystemdelay/listar-tipos",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/notificationconfig/list",
    "pattern": "/logoncontrol/notificationconfig/list",
    "summary": "List",
    "tag": "Notificações",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/notificationconfig/list",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "GET",
    "path": "/logoncontrol/notificationconfig/details/1003",
    "pattern": "/logoncontrol/notificationconfig/details/1003",
    "summary": "Details",
    "tag": "Notificações",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "GET /logoncontrol/notificationconfig/details/1003",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/notificationconfig/save",
    "pattern": "/logoncontrol/notificationconfig/save",
    "summary": "Save",
    "tag": "Notificações",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/notificationconfig/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/logon",
    "pattern": "/logoncontrol/report/logon",
    "summary": "Eventos",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/logon",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/logon/xls",
    "pattern": "/logoncontrol/report/logon/xls",
    "summary": "Eventos XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/logon/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/logonsint",
    "pattern": "/logoncontrol/report/logonsint",
    "summary": "Logon Logoff",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/logonsint",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/logonsint/xls",
    "pattern": "/logoncontrol/report/logonsint/xls",
    "summary": "Logon Logoff XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/logonsint/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/blockedallowed",
    "pattern": "/logoncontrol/report/blockedallowed",
    "summary": "Liberações e Bloqueios",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/blockedallowed",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/blockedallowed/xls",
    "pattern": "/logoncontrol/report/blockedallowed/xls",
    "summary": "Liberações e Bloqueios XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/blockedallowed/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/areaallowed",
    "pattern": "/logoncontrol/report/areaallowed",
    "summary": "Liberações por Areas",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/areaallowed",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/areaallowed/xls",
    "pattern": "/logoncontrol/report/areaallowed/xls",
    "summary": "Liberações por Areas XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/areaallowed/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/managerallowed",
    "pattern": "/logoncontrol/report/managerallowed",
    "summary": "Liberações por Gestor",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/managerallowed",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/managerallowed/xls",
    "pattern": "/logoncontrol/report/managerallowed/xls",
    "summary": "Liberações por Getor XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/managerallowed/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/rankingexception",
    "pattern": "/logoncontrol/report/rankingexception",
    "summary": "Ranking por Exceções",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/rankingexception",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/rankingexception/xls",
    "pattern": "/logoncontrol/report/rankingexception/xls",
    "summary": "Ranking por Exceções XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/rankingexception/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/overtime",
    "pattern": "/logoncontrol/report/overtime",
    "summary": "Horas Extras",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/overtime",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/overtime/xls",
    "pattern": "/logoncontrol/report/overtime/xls",
    "summary": "Horas Extras XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/overtime/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/workstation",
    "pattern": "/logoncontrol/report/workstation",
    "summary": "Estações de Trabalho",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/workstation",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/report/workstation/xls",
    "pattern": "/logoncontrol/report/workstation/xls",
    "summary": "Workstation XLS",
    "tag": "Relatórios",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/report/workstation/xls",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/group/listar",
    "pattern": "/logoncontrol/group/listar",
    "summary": "groups/listar",
    "tag": "Grupos",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/group/listar",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/group/save",
    "pattern": "/logoncontrol/group/save",
    "summary": "Save",
    "tag": "Grupos",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/group/save",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/group/action/relatedTo/212108347",
    "pattern": "/logoncontrol/group/action/relatedTo/212108347",
    "summary": "Save actios to groups",
    "tag": "Grupos",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/group/action/relatedTo/212108347",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/group/action/removeFrom/212108347",
    "pattern": "/logoncontrol/group/action/removeFrom/212108347",
    "summary": "Remove actios from groups",
    "tag": "Grupos",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/group/action/removeFrom/212108347",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/group/delete/212108479",
    "pattern": "/logoncontrol/group/delete/212108479",
    "summary": "Remove groups",
    "tag": "Grupos",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/group/delete/212108479",
      "info": "Ver PLANO_EVOLUCAO_DOCUMENTACAO_API.md — Fase 1 em andamento, endpoint por endpoint."
    }
  },
  {
    "method": "POST",
    "path": "/logoncontrol/public/usage",
    "pattern": "/logoncontrol/public/usage",
    "summary": "createFreqUsage",
    "tag": "Frequência de Uso",
    "mocked": false,
    "status": 501,
    "body": {
      "erro": "Endpoint ainda não tem exemplo de mock.",
      "endpoint": "POST /logoncontrol/public/usage",
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
