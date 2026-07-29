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

## Deploy (2 minutos, sem CLI, sem cartão de crédito)

1. Criar conta gratuita em https://dash.cloudflare.com/sign-up (só e-mail, sem cartão).
2. No dashboard: **Workers & Pages** → **Create** → **Create Worker**.
3. Dar um nome ao Worker (ex: `scua-logon-api-mock`) → **Deploy** (cria com o "Hello World" padrão).
4. Clicar em **Edit code** (Quick Edit) → apagar tudo → colar o conteúdo de `mock/worker.js` deste
   repositório → **Deploy**.
5. A URL fica em algo como `https://scua-logon-api-mock.<seu-subdominio>.workers.dev`.
6. **Me avisar essa URL** (ou atualizar direto) para eu adicionar em `servers:` no `openapi.yml` —
   assim o botão "Test Request" do Scalar já aponta pra ela automaticamente.

## Atualizar depois

Sempre que um novo endpoint ganhar schema real na Fase 1, gerar um novo `worker.js` (o processo que
gerou este arquivo lê `openapi.yml` + uma lista de exemplos conhecidos) e repetir o passo 4 (colar o
arquivo novo, Deploy). Sem isso, o mock fica defasado em relação à doc.
