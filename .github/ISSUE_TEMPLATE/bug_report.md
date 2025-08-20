name: Bug report
description: Reportar um problema
labels: ["bug"]
body:
  - type: textarea
    id: descricao
    attributes:
      label: Descrição
      description: O que aconteceu? O que esperavas que acontecesse?
    validations:
      required: true
  - type: textarea
    id: passos
    attributes:
      label: Passos para reproduzir
      description: Liste os passos
  - type: input
    id: ambiente
    attributes:
      label: Ambiente
      placeholder: ex. macOS 14, Node 22, pnpm 10
