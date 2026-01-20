# Organização e Verificação de Imagens

Este repositório contém dois scripts em Bash para organizar e validar conjuntos de imagens com o padrão de nome:

XX_SX.jpg

Exemplo:
```
01_S0.jpg
01_S1.jpg
02_S0.jpg
```

Eles são úteis para datasets, frames de vídeo, imagens por sequência, ou qualquer estrutura onde cada grupo de imagens pertence a um mesmo identificador.

---

## Script 1 — Organização das imagens

### O que ele faz

O script `move_to_dirs.sh` percorre todas as imagens no formato PREFIXO_SX.jpg, cria um diretório com o nome do prefixo, move a imagem para dentro do diretório correspondente e remove o prefixo do nome do arquivo.

### Exemplo

Antes:
```
01_S0.jpg
01_S1.jpg
01_S2.jpg
02_S0.jpg
```

Depois:
```
01/S0.jpg
01/S1.jpg
01/S2.jpg
02/S0.jpg
```
---

### Como usar

1. Coloque o script na pasta onde estão as imagens  
2. Dê permissão de execução:
```
chmod +x move_to_dirs.sh
```
3. Execute:
```
./move_to_dirs.sh  
```
Observações:
- O script cria diretórios automaticamente (mkdir -p)
- Os arquivos são movidos, não copiados
- Funciona em Linux e macOS

---

## Script 2 — Verificação de imagens obrigatórias

### O que ele faz

O script `verify_non_complete_steps.sh` percorre todos os diretórios da pasta atual e verifica se cada diretório contém os arquivos:
```
S0.jpg
S1.jpg
S2.jpg
S3.jpg
S4.jpg
```
Caso algum arquivo esteja faltando, o script exibe no console qual diretório está com erro e lista exatamente quais arquivos estão faltando.

---

### Como usar

1. Execute o script na pasta que contém os diretórios organizados:
```
chmod +x verify_non_complete_steps.sh  
./verify_non_complete_steps.sh  
```
---

### Exemplo de saída

Com erros:
```
❌ Diretório com erro: 01  
Faltando: S3.jpg S4.jpg  

❌ Diretório com erro: 02  
Faltando: S1.jpg  
```
Sem erros:
```
✅ Todos os diretórios possuem S0.jpg até S4.jpg
```
---

## Estrutura esperada após organização
```
.
├── 01
│   ├── S0.jpg
│   ├── S1.jpg
│   ├── S2.jpg
│   ├── S3.jpg
│   └── S4.jpg
├── 02
│   ├── S0.jpg
│   ├── S1.jpg
│   ├── S2.jpg
│   ├── S3.jpg
│   └── S4.jpg
```
---

## Requisitos

- Bash (Linux, macOS ou WSL)
- Nenhuma dependência externa

---

## Possíveis extensões

- Alterar o range de imagens (S0 a S9, por exemplo)
- Suporte a PNG
- Verificar apenas diretórios numéricos
- Retornar código de erro para pipelines CI/CD

---

## Licença

Uso livre para projetos pessoais ou comerciais.
