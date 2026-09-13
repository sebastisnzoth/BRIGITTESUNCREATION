# BRI TSUN — Arquitetura MVP zero custo

## Objetivo
Construir a Casa Digital BRI TSUN com custo inicial zero, preservando integralmente a obra e mantendo a marca como centro do ecossistema.

## Princípios
1. A obra original é imutável.
2. Brigitte decide o que pode ser publicado.
3. Nenhum serviço pago entra no caminho crítico do MVP.
4. Toda ferramenta deve ser substituível sem perda de dados.
5. O repositório é a fonte de verdade técnica.

## Stack inicial
- Frontend: HTML, CSS e JavaScript sem dependências obrigatórias.
- Hospedagem inicial: camada gratuita compatível com site estático.
- Conteúdo público: arquivos versionados no GitHub.
- Catálogo MVP: JSON versionado no repositório.
- Originais: nunca dentro do site público; apenas referências e metadados autorizados.
- Painel administrativo: fase seguinte, separado do frontend público.

## Estrutura
- `apps/web/` — Casa Digital pública.
- `data/catalog.json` — catálogo público autorizado.
- `docs/` — arquitetura, processos e contratos.
- `.agents/skills/` — equipe digital.

## Fluxo de publicação
original protegido → registro no inventário → validação do Guardião → metadados aprovados → catálogo público → site → QA → release autorizado.

## P0 técnico
- Site público funcional sem backend.
- Catálogo renderizado por JavaScript.
- Layout responsivo.
- Nenhum conteúdo artístico fictício.
- Placeholders claramente identificados até autorização.

## Próxima evolução
Depois do MVP público: autenticação, publishing panel, cofre lógico, CRM/newsletter, analytics e distribuição externa.