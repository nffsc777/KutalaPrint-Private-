# Livro de Actas — Kutala Print

Este directório contém todas as actas oficiais da sociedade **Kutala Print — Comércio e Serviços, Lda.**  

## Estrutura

- `KP_ACTA_YYYY_NNN_Minuta.md` → **Rascunho** da acta, em formato Markdown.  
  - Criado antes ou logo após a reunião.  
  - Sujeito a revisão, edição e comentários.  
  - **Não é documento oficial**.  

- `KP_ACTA_YYYY_NNN.md` → **Versão oficial** aprovada em reunião.  
  - Substitui a minuta.  
  - Assinada digitalmente/fisicamente pelos sócios presentes.  
  - É a versão **juridicamente vinculativa**.  

- `KP_ACTA_YYYY_NNN.pdf` → Versão final em PDF, gerada automaticamente via GitHub Actions.  
- `KP_ACTA_YYYY_NNN.docx` → Versão editável em Word, também gerada automaticamente.  

## Fluxo de Trabalho

1. **Redigir Minuta**
   - Criar ficheiro `KP_ACTA_YYYY_NNN_Minuta.md` com base no modelo.  
   - Guardar no GitHub e abrir *Pull Request* para revisão.  

2. **Revisão e Aprovação**
   - Sócios analisam a minuta no GitHub.  
   - Após aprovação, a reunião formal valida a acta.  

3. **Publicação Oficial**
   - Renomear ou criar `KP_ACTA_YYYY_NNN.md`.  
   - Remover a minuta com `git rm`.  
   - O *workflow* automático gera `PDF` e `DOCX` em `docs/outputs/`.  

4. **Arquivo**
   - Apenas a versão oficial (`.md`, `.pdf`, `.docx`) permanece no repositório.  
   - A minuta antiga é apagada para evitar ambiguidades.  

## Exemplo

- Reunião de 05.08.2025 →  
  - Criada minuta: `KP_ACTA_2025_002_Minuta.md`.  
  - Após aprovação → `KP_ACTA_2025_002.md`.  
  - Minuta removida do GitHub.  
  - GitHub Actions gera automaticamente:  
    - `KP_ACTA_2025_002.pdf`  
    - `KP_ACTA_2025_002.docx`  

## Notas

- Todas as actas devem ser numeradas sequencialmente (001, 002, 003, …).  
- Datas sempre no formato **YYYY-MM-DD** para facilitar ordenação.  
- Não alterar actas antigas após aprovação, exceto para corrigir erros ortográficos/formatos.  

---
✍️ **Regra de Ouro:** *A minuta é temporária, a Acta em `.md` é oficial, e os outputs em `.pdf`/`.docx` são os formatos de circulação.*

## Estado — Conversão Automática
![MD to PDF & DOCX](https://github.com/nffsc777/KutalaPrint-Private-/actions/workflows/md-to-docs.yml/badge.svg)
