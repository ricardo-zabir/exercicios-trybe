#!/bin/bash

# Parte 1 - Comandos de Input e Output

# Ex. 1
cd unix_tests

# Ex. 2
echo > skills2.txt
Internet
Unix
Bash

# Ex. 3
echo >> skills2.txt
skill1
skill2
skill3
skill4
skill5
cat skills2.txt

# Ex. 4
wc -l skills2.txt

# Ex. 5
sort skills2.txt | head -3 > top_skills.txt

# Ex. 6
touch phrases2.txt

# Ex. 7
grep br | wc -l

# Ex. 8
grep -iv br | wc -l

# Ex. 9
cat >> phrases2.txt
Pais1
Pais2

# Ex. 10
cat phrases2.txt >> countries.txt > bunch_of_things.txt

# Ex. 11
sort bunch_of_things.txt

# Parte 2 - Permissões

# Ex. 1
cd unix_tests

# Ex. 2
ls -l 

# Ex. 3
chmod a+rw bunch_of_things.txt

# Ex. 4
chmod a-w bunch_of_things.txt

# Ex. 5
chmod 644 bunch_of_things.txt

# Parte 3 - Processos & Jobs

# Ex. 1
ps

# Ex. 2
sleep 30 &

# Ex. 3
ps
kill PID

# Ex. 4
sleep 30
^Z
bg 

# Ex. 5
sleep 300 &

# Ex. 6
sleep 200
^Z
sleep 100
^Z

# Ex. 7
jobs 
fg
^Z

# Ex. 8
bg 

# Ex. 9
kill PID
kill PID
kill PID