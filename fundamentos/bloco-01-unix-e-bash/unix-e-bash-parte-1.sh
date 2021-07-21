#!/bin/bash

# Parte 1 - Criação de arquivos e diretórios

# Ex. 1
mkdir unix_tests

# Ex. 2
touch trybe.txt

# Ex. 3
cp trybe.txt trybe_backup.txt

# Ex. 4
mv trybe.txt trybe_novo_nome.txt

# Ex. 5
mkdir backup

# Ex. 6
mv trybe_backup.txt backup

# Ex. 7
mkdir backup2

# Ex. 8
mv backup/trybe_backup.txt backup2

# Ex. 9
rmdir backup

# Ex. 10
mv backup2 backup

# Ex. 11
pwd
ls *

# Ex. 12
rm - ra backup

# Ex. 13
clear

# Ex . 14
head -5 skills.txt

# Ex. 15
tail -4 skills.txt

# Ex. 16
rm *txt

# Parte 2 - Manipulação & Busca

# Ex. 1
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Ex. 2
cat countries.txt

# Ex. 3
less countries.txt

# Ex. 4
less countries.txt | grep Zambia

# Ex. 5
grep Brazil countries.txt

# Ex. 6
grep -i brazil countries.txt

# Ex. 7
grep -iv 'fox' phrases.txt

# Ex. 8
wc -w phrases.txt

# Ex. 9
wc -l phrases.txt

# Ex. 10
touch empty.tbt
touch empty.pdf

# Ex. 11
ls *

# Ex. 12
ls *txt

# Ex. 13
ls *txt *tbt

# Ex. 14
man ls
