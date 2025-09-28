# **_Campo minato_**

Stack in uso

- HTML
- CSS
- JavaScript

Approccio mobile-first

## Progetto

Creazione del classico Campo minato

Obiettivo: creazione di una griglia di celle che, quando aperte, mostrano il loro contenuto. La singola cella può essere vuota (se non ci sono bombe in prossimità), contenere un numero che indica le bombe in prossimità o contenere una bomba, in quest'ultimo caso la partita viene conclusa con la sconfitta del giocatore. Sarà possibile aggiungere un segnalino sulle celle ancora chiuse per segnalare quelle sospette.

## Svolgimento

Definizione dei livelli di difficoltà
**difficultyLevels** in base ad esso cambia il _numero di celle_ della griglia **gridDimensions**

Creazione di una griglia contenente 49 celle disposte su 7 righe e 7 colonne
**createGrid** crea una griglia a partire dalla _difficoltà_ e dalla _posizione delle bombe_

Generazione di 16 bombe disposte in 16 celle casuali
**generateBombPositions** crea un set di indici in relazione al _numero di bombe_ e al _numero di celle_ nella griglia
