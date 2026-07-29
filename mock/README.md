# Mock server — SCUA Logon API

Mock gerado a partir do `openapi.yml` (Fase 3 do plano de evolução da documentação — ver
`PLANO_EVOLUCAO_DOCUMENTACAO_API.md`, na raiz do workspace interno, não publicado neste repo).

**Custo: R$ 0.** Roda no free tier do Cloudflare Workers — 100 mil requisições/dia, sem cartão de
crédito, sem expiração. Não depende de servidor próprio nem de nenhum serviço pago.

## O que ele faz

- Devolve um exemplo de resposta real (com o status HTTP correto) para os endpoints que já têm
  schema documentado na Fase 1 (hoje: login, `users/listar`, `holiday/delete/{id}`).
- Para os demais ~85 endpoints, devolve **501** com uma mensagem explicando que ainda não têm
  exemplo — de propósito: um mock que finge sucesso em endpoint não verificado engana mais do que
  ajuda. a cobertura cresce junto com a Fase 1 (cada endpoint documentado ganha um exemplo aqui na
  mesma leva).
- CORS liberado (`Access-Control-Allow-Origin: *`) — funciona direto do botão "Test Request" do
  Scalar e de chamadas de qualquer app de parceiro testando a integração.
- **É só um mock.** Nenhuma chamada aqui grava nada de verdade nem precisa de token real — é seguro
  qualquer parceiro externo bater nele à vontade.

## Deploy

Criar conta gratuita em https://dash.cloudflare.com/sign-up (só e-mail, sem cartão) é sempre o
primeiro passo. A partir daí, dois caminhos:

### Opção A — via API (recomendado)

Em 2026 há bugs conhecidos e amplamente reportados na comunidade Cloudflare com o botão "Create
Worker" do dashboard (sumido ou inativo para várias contas). Publicar via API evita esse problema:

1. Gerar um API Token em dash.cloudflare.com → seu perfil → API Tokens (ou usar um token de conta
   com permissão de editar Workers Scripts).
2. Pegar o Account ID (aparece no dashboard, na barra lateral de qualquer domínio/Workers & Pages).
3. Rodar (substituindo `$ACCOUNT_ID` e `$API_TOKEN`):

   ```bash
   curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/scripts/scua-logon-api-mock" \
     -X PUT \
     -H "Authorization: Bearer $API_TOKEN" \
     -F "metadata={\"main_module\":\"worker.js\",\"compatibility_date\":\"2026-07-29\"};type=application/json" \
     -F "worker.js=@worker.js;type=application/javascript+module"
   ```

4. A rota `workers.dev` é habilitada automaticamente na criação. Buscar o subdomínio da conta:
   `curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/workers/subdomain -H "Authorization: Bearer $API_TOKEN"`
5. A URL final é `https://scua-logon-api-mock.<subdominio>.workers.dev`.

Quem tiver acesso ao `mcp-server` deste workspace pode usar a tool `deploy_api_mock()` em vez de
rodar isso manualmente — faz os mesmos passos.

### Opção B — via dashboard (se o botão estiver funcionando na sua conta)

1. **Workers & Pages** → **Create application** → **Create Worker** → **Deploy**.
2. Clicar em **Edit code** → apagar tudo → colar o conteúdo de `mock/worker.js` deste repositório →
   **Deploy**.

### Depois do deploy

**Avisar a URL final** (ou atualizar direto) para entrar em `servers:` no `openapi.yml` — assim o
botão "Test Request" do Scalar já aponta pra ela automaticamente.

## Atualizar depois

Sempre que um novo endpoint ganhar schema real na Fase 1, gerar um novo `worker.js` (o processo que
gerou este arquivo lê `openapi.yml` + uma lista de exemplos conhecidos) e repetir o passo 4 (colar o
arquivo novo, Deploy). Sem isso, o mock fica defasado em relação à doc.
