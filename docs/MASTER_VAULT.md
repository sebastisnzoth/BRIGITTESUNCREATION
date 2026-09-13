# BRI TSUN — Cofre Mestre Lógico

## Objetivo
Preservar a referência dos originais e provar integridade sem colocar arquivos protegidos no site público.

## Regra central
O original não é sobrescrito. Cada recebimento gera um registro independente.

## Registro mínimo
- `asset_id`: identificador interno.
- `work_id`: obra relacionada.
- `filename_original`: nome recebido.
- `sha256`: hash SHA-256 do arquivo.
- `received_at`: data/hora de recebimento.
- `source`: origem declarada.
- `rights_status`: estado documental conhecido.
- `publication_authorized`: `true` ou `false`.
- `notes`: observações sem conteúdo da obra.

## Separação
1. Original protegido: armazenamento privado escolhido posteriormente.
2. Registro de integridade: pode existir no inventário privado.
3. Derivados técnicos: nunca substituem o original.
4. Catálogo público: recebe somente metadados explicitamente autorizados.

## Fluxo
receber → calcular hash → registrar → preservar original → validar documentação → preparar cópia técnica → aprovação → publicação.

## Segurança
- Não commitar originais no repositório público.
- Não registrar credenciais.
- Não publicar links privados.
- Não alterar arquivo para fazer o hash “bater”.
- Nova versão = novo hash e novo registro.

## Estado atual
A estrutura lógica está definida. A escolha do armazenamento privado gratuito fica separada e deverá preservar portabilidade e controle.