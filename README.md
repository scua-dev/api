# API de Integração — Scua Logon

Documentação de referência das APIs REST do **Scua Logon**, publicada via GitHub Pages em:

https://scua-dev.github.io/api/

## O que é este repositório

Dois artefatos apenas:

- `openapi.yml` — especificação OpenAPI 3.0, gerada a partir da coleção Postman `Scua Logoncontrol.postman_collection.json` (via [`postman-to-openapi`](https://github.com/joolfe/postman-to-openapi)).
- `index.html` — carrega o [Scalar](https://github.com/scalar/scalar) apontando para `openapi.yml`.

Não há build, CI ou dependências — o GitHub Pages serve os dois arquivos da raiz da branch `main` diretamente.

## Limitações atuais (leia antes de divulgar para cliente/parceiro)

- **Os `servers` listados no `openapi.yml` são apenas exemplos de desenvolvimento** (`localhost`). O botão "Test Request" do Scalar não funciona contra um ambiente real — não há hoje um sandbox público para teste ao vivo. Se for divulgar este link para Apsen, Senior ou outro parceiro, deixe claro que é referência de contrato, não ambiente de testes.
- **As respostas dos endpoints não estão documentadas** — todo endpoint mostra apenas `200 / application/json: {}`, sem schema de campos nem catálogo de erros (400/401/404/500). Quem for integrar precisa validar o formato de retorno na prática.
- Vários `summary` vieram direto do nome do request no Postman (`List`, `Save`, `Update...`) e podem se repetir entre módulos diferentes — não confiar neles como identificador único.

## Como atualizar

Hoje o processo é manual:

1. Exportar a coleção Postman atualizada (`Scua Logoncontrol.postman_collection.json`).
2. Rodar `p2o` (`postman-to-openapi`) para regerar `openapi.yml`.
3. Conferir que nenhum dado real (nome, e-mail, IP, hostname, domínio, SID de cliente/colaborador) ficou dentro dos exemplos de request/response — a coleção Postman é alimentada com testes reais e isso vaza fácil.
4. Commit + push direto na `main` (o Pages publica automaticamente a partir dela).

**Nunca commitar dados reais de cliente ou colaborador aqui — este repositório é público.** Antes de qualquer atualização, rode uma checagem por PII (nomes, e-mails, IPs internos, SIDs, hostnames) nos exemplos do YAML.

## Próximos passos sugeridos

- Automatizar a regeneração + publicação via GitHub Action, disparada por commit na coleção Postman de origem (elimina o passo manual de PAT).
- Documentar schemas de resposta e catálogo de erros por endpoint.
- Escrever um guia de autenticação (obtenção/expiração do bearer token, permissões).
- Avaliar um mock server (ex: Scalar mock, Prism) para permitir teste real sem expor infraestrutura interna.

## Progresso da Fase 1 (contrato confiável)

Iniciado em 2026-07-29 — ver plano completo em `PLANO_EVOLUCAO_DOCUMENTACAO_API.md` no workspace interno do projeto (não publicado neste repo público).

Endpoints já com schema real (extraído do código do backend, não do Postman) e status HTTP reais documentados:
- `POST /logoncontrol/public/logon/login`
- `POST /logoncontrol/users/listar`
- `POST /logoncontrol/holiday/delete/{id}` (path corrigido — antes tinha um ID fixo de teste)

Os demais ~85 endpoints ainda mostram apenas `200 / application/json: {}` — seguem o mesmo método, priorizados por uso em integrações reais.

## Progresso da Fase 2 (autenticação e segurança do contrato)

Adicionado guia de autenticação completo no início da doc publicada (`info.description` do `openapi.yml`, renderizado pelo Scalar): como obter e usar o token, por que ele não expira automaticamente, e o que cada permissão (`admin`/`rh`/`producao`/`sustentacao`) habilita. Auditoria confirmada contra o `SpringSecurityConfig` real do backend — só `/public/**` dispensa token, e isso já estava corretamente refletido nas 3 rotas marcadas `security: []`.
