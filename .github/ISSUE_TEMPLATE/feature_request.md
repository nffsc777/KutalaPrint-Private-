name: Feature request
description: Propor uma melhoria
labels: ["enhancement"]
body:
  - type: textarea
    id: motivacao
    attributes:
      label: Motivação
      description: Qual o problema que esta feature resolve?
    validations:
      required: true
  - type: textarea
    id: proposta
    attributes:
      label: Proposta
      description: Descreve a solução desejada
  - type: textarea
    id: impacto
    attributes:
      label: Impacto
      description: Áreas afectadas (web/admin/api/docs)
