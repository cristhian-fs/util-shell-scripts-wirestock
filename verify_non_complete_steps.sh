#!/bin/bash

ERRO=0

for dir in */; do
    # Remove a barra final
    dir="${dir%/}"

    faltando=()

    for i in {0..4}; do
        if [[ ! -f "$dir/S$i.jpg" ]]; then
            faltando+=("S$i.jpg")
        fi
    done

    if [[ ${#faltando[@]} -ne 0 ]]; then
        echo "❌ Diretório com erro: $dir"
        echo "   Faltando: ${faltando[*]}"
        ERRO=1
    fi
done

if [[ $ERRO -eq 0 ]]; then
    echo "✅ Todos os diretórios possuem S0.jpg até S4.jpg"
fi
