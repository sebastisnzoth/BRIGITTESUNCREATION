# BRI TSUN — Inventário Mestre

Cada obra deve ser registrada sem colocar o original no site público.

## Campos mínimos
- `work_id`
- `title`
- `author`
- `type`
- `language_original`
- `status`
- `original_file_reference`
- `sha256`
- `registration_status`
- `registration_reference`
- `rights_notes`
- `cover_status`
- `public_synopsis_status`
- `publication_authorized`
- `authorized_channels`
- `last_verified_at`

## Estados recomendados
`RECEIVED` · `HASHED` · `DOCUMENTED` · `RIGHTS_CHECK` · `READY_FOR_APPROVAL` · `APPROVED` · `PUBLISHED` · `BLOCKED`

## Regra
O inventário descreve a obra; não altera a obra. Originais protegidos nunca devem ser publicados automaticamente ou armazenados no diretório público da aplicação.