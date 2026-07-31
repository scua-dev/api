# API de Integração — Scua Logon

Documentação de referência das APIs REST do **Scua Logon**, publicada via GitHub Pages em:

https://scua-dev.github.io/api/

## O que é este repositório

Dois artefatos principais:

- `openapi.yml` — especificação OpenAPI 3.0. **Fonte de verdade é o código do backend** (`scua-logon-backend`), não mais a coleção Postman original — todo endpoint aqui foi escrito/revisado lendo o controller e o DTO/entidade real correspondente.
- `index.html` — carrega o [Scalar](https://github.com/scalar/scalar) apontando para `openapi.yml`.

Há também `mock/` (Worker Cloudflare que serve exemplo de resposta real para testar sem credencial — ver `mock/README.md`).

Não há build, CI ou dependências — o GitHub Pages serve os arquivos da raiz da branch `main` diretamente.

**Escopo:** só os 28 endpoints relevantes para quem integra um sistema próprio ao Scua Logon — autenticação, feriados, férias e afastamentos, jornada de trabalho (cadastro + associação usuário↔jornada), tipos de jornada, e a parte de usuários/gestor usada em integração (listagem, hierarquia gestor↔subordinado). Endpoints de uso exclusivo do portal administrativo Scua (relatórios, hora extra, grupos/RBAC, domínio AD, mensagens, notificações, delegação, estações de trabalho, parâmetros, administradores) vivem num repositório interno separado, de acesso restrito à equipe Scua — ver `CLASSIFICACAO_API_CLIENTE_VS_INTERNO.md` no workspace interno do projeto para o critério completo de corte, endpoint por endpoint.

**Gap de produto conhecido, ainda sem endpoint** (não é corte de escopo — é funcionalidade que o backend hoje não expõe): associação gestor↔usuário fora do fluxo de sincronização com Active Directory. Ver achado correspondente no vault do `scua-logon-expert` para detalhe técnico.

## Estado atual da documentação

- Todos os 28 endpoints têm descrição em prosa (o que fazem, quando usar, limitações conhecidas), schema de campos tipado e exemplo real de corpo de resposta — nenhum mostra mais `200: {}` genérico.
- Path parameters usam o nome real do `@PathVariable` do controller (`{codObjeto}`, `{codHour}`, `{codJourney}` etc.) — não há mais id de teste cravado direto na URL.
- 401 (token ausente/inválido) e 403 (sem permissão) documentados de forma reutilizável (`components.responses`) em todos os endpoints protegidos, além dos erros específicos de cada rota.
- O botão "Test Request" do Scalar funciona de verdade contra o mock gratuito listado em `servers:` (`https://scua-logon-api-mock.scua-logon-dev.workers.dev`) — não precisa de credencial real nem grava nada.
- Vários `summary` ainda vêm do nome original do request no Postman (`List`, `Save`, `Update...`) e podem se repetir entre módulos diferentes — não usar como identificador único, usar o path.

## Como atualizar

**Não regenerar este arquivo via `postman-to-openapi` a partir da coleção Postman.** Isso descarta todo o schema, descrição e exemplo escritos à mão a partir do código real do backend — seria um retrocesso, não uma atualização.

O processo correto:

1. Ao alterar um controller/DTO já documentado aqui, abrir o `openapi.yml` e atualizar o trecho correspondente no mesmo commit/PR da mudança de código.
2. Endpoint novo: decidir primeiro se é escopo cliente (vai aqui) ou interno (vai em `scua-dev/api-interno`) — critério em `CLASSIFICACAO_API_CLIENTE_VS_INTERNO.md`.
3. Conferir que nenhum dado real (nome, e-mail, IP, hostname, domínio, SID de cliente/colaborador) ficou dentro de exemplos de request/response.
4. Se o endpoint tiver resposta com corpo, adicionar um exemplo real em `content.application/json.example` — reaproveitar o mesmo exemplo já usado em `mock/worker.js` quando existir, para não divergir.
5. Validar o YAML (`openapi-spec-validator` ou equivalente) antes de commitar.
6. Commit + push direto na `main` (o Pages publica automaticamente a partir dela).

**Nunca commitar dados reais de cliente ou colaborador aqui — este repositório é público.**

## Próximos passos (não implementados ainda)

- Automação: GitHub Action com gate de PII antes de qualquer push, e versão do `openapi.yml` amarrada à versão real do backend/banco (`lgn_versao`).
- Branding Scua no Scalar e changelog público entre versões da API.

Ver `PLANO_EVOLUCAO_DOCUMENTACAO_API.md` (workspace interno do projeto) para o plano completo, decisões e histórico de cada rodada de revisão.
