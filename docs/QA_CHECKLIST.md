# BRI TSUN — QA Checklist MVP

## Portal público
- [ ] Mobile 320px sem overflow horizontal.
- [ ] Desktop sem quebra de layout.
- [ ] Navegação por teclado funcional.
- [ ] Contraste e foco visível.
- [ ] Catálogo vazio não inventa conteúdo.
- [ ] Falha ao carregar catálogo tem fallback seguro.
- [ ] Nenhum original, segredo ou link privado exposto.

## Publishing Panel
- [ ] Dados reais não são carregados no modo estrutural.
- [ ] Contadores funcionam com dataset vazio.
- [ ] Máquina de estados rejeita transições inválidas.
- [ ] `APPROVED` exige aprovação humana.
- [ ] `RELEASED` exige autorização de release.
- [ ] Estados `BLOCKED`, `REJECTED` e `ARCHIVED` não pulam gates críticos.

## Segurança
- [ ] Originais fora do repositório público.
- [ ] Credenciais fora do código.
- [ ] Nenhum serviço pago no caminho crítico.
- [ ] Logs não contêm conteúdo protegido.

## Release
- [ ] Direção visual aprovada.
- [ ] Conteúdo público autorizado.
- [ ] QA PASS registrado.
- [ ] Autorização de release registrada.
- [ ] Rollback definido.

## Resultado
Usar `PASS`, `FAIL` ou `BLOCKED`. Nenhum `FAIL` crítico pode seguir para release.