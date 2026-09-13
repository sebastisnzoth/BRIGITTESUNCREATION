# BRI TSUN — Workflow de Aprovação e Release

## Objetivo
Separar preparação técnica de autorização artística e publicação pública.

## Estados
`RECEIVED` → `INTEGRITY_CHECKED` → `METADATA_READY` → `READY_FOR_REVIEW` → `APPROVED` → `READY_TO_RELEASE` → `RELEASED`.

Estados auxiliares: `BLOCKED`, `REJECTED`, `ARCHIVED`.

## Gates
### Gate 1 — Integridade
Guardião confirma registro, hash e preservação do original. Nenhum conteúdo é alterado.

### Gate 2 — Metadados
Publisher prepara apenas metadados e derivados técnicos permitidos.

### Gate 3 — Revisão
QA verifica consistência técnica. Direitos/Registros verifica pendências documentais conhecidas.

### Gate 4 — Aprovação humana
Somente Brigitte ou pessoa formalmente autorizada pode aprovar conteúdo artístico para publicação.

### Gate 5 — Release
DevOps pode executar release somente após autorização aplicável e validações técnicas.

## Auditoria mínima
Registrar obra, versão, estado anterior, novo estado, responsável, data/hora e observação operacional.

## Rollback
Um release pode ser retirado do canal quando tecnicamente possível sem apagar o registro histórico. O original e seu histórico permanecem preservados.

## Proibições
- Aprovação automática de obra.
- Publicação por tendência ou recomendação de agente.
- Alteração silenciosa de original.
- Ativação de serviço pago para concluir release sem autorização.