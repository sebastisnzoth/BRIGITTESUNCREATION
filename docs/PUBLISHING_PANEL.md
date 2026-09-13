# BRI TSUN — Publishing Panel

## Missão
Ser o centro operacional para preparar catálogo e lançamentos sem modificar nem publicar automaticamente a obra.

## Módulos MVP
### Dashboard
Resumo de obras, estados, pendências e autorizações.

### Obras
Cadastro de metadados, estado e relação com ativos protegidos.

### Versões
Histórico de versões técnicas e hashes. O original permanece imutável.

### Direitos e registros
Checklist documental e estado informado. Não substitui validação jurídica.

### Publicação
Fila de preparação com estados:
`DRAFT` → `READY_FOR_REVIEW` → `APPROVED` → `READY_TO_RELEASE` → `RELEASED`.

### Canais
Registro de onde cada obra foi ou poderá ser disponibilizada. Integrações externas são complementares.

### Auditoria
Histórico de mudanças operacionais importantes.

## Autoridade
Somente uma aprovação humana autorizada pode mover conteúdo para `APPROVED` ou autorizar release público.

## Contrato de dados inicial
Cada obra deve ter `id`, `title`, `type`, `language`, `status`, `publication_authorized`, `public_metadata`, `assets` e `rights`.

## Implementação incremental
1. Painel local/estático com dados de demonstração estrutural.
2. Persistência privada gratuita quando necessária.
3. Autenticação antes de dados reais protegidos.
4. Integrações externas somente após validação de necessidade e disponibilidade oficial.