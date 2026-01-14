#!/bin/bash

shopt -s nullglob

for arquivo in *_*.jpg; do
    # Extrai o prefixo (antes do _)
    prefixo="${arquivo%%_*}"

    # Extrai o nome após o _
    sufixo="${arquivo#*_}"

    # Cria o diretório se não existir
    mkdir -p "$prefixo"

    # Move o arquivo
    mv "$arquivo" "$prefixo/$sufixo"
done

echo "Organização concluída."