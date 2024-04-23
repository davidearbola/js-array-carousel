MILESTONE 1
Per prima cosa, creiamo il markup statico come visto in mattinata. Costruiamo il container e inseriamo le immagini.
Solo una sarà visibile grazie a una sua classe, avremo così la struttura base. Condite con un pò di CSS per dare stile (senza esagerare).
Vi consiglio di rispolvere object-fit.

<!--
- creo un div che contiene le immagini che voglio usare
- assegno un classe active che avrà la proprietà display:block all'immagine che voglio rendere l'unica visibile all'inizio, alle altre darò la proprietà display none
- con il CSS dò un minimo di stile agli elementi e ridimensiono le immagini se necessario con object fit per renderle tutte uguali in - rapporto con la grandezza del loro contenitore
-->

MILESTONE 2
Ora dobbiamo scrivere del codice che al caricamento della pagina sposti la slide attiva da quella corrente alla successiva, non pensate al click.
Ragionate prima sul necessario. Devo recuperare un elemento specifico? Devo recuperare più elementi?
Aiutandovi anche e soprattutto con la console dell'ispettore recuperate tutti gli elementi necessari.
Scrivete poi il codice che all'avvio della pagina in automatico sposti la slide attiva dalla prima alla seconda.

<!--
- creo un array che conterrà tutte le mie immagini con lo scopo di ottenere il loro indice nell'array così da lavorare sui numeri
- creo una variabile con valore iniziale 0 chiamata slideAttiva identificandola con la classe active(display:block)
- creo un ciclo for che mi permette di creare un contatore che assegnerò alla slide attiva che corrisponde alla lunghezza dell'array
- creo if con il quale controllo se la slide attiva ha la classe active a quel punto gliela tolgo così diventa invisibile, ed assegno la classe active all'immagine successiva
 -->

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
Se abbiamo lavorato correttamente in milestone 2 dovrebbe bastarci poco. Creiamo un event listener per gestire il click sul pulsante.
All'interno spostiamo il codice scritto in milestone 2 per far si che la slide non venga cambia al caricamento della pagina, ma al nostro click sul pulsante.
Se superate l'ultima slide si spacca tutto e non fa nulla: è un bonus.

<!--
- creo su html un bottone
- inserisco il codice che ho scritto in un eventlistener 'click' che mi permette di far funzionare il tutto solo quando viene cliccato sul bottone
 -->

MILESTONE 4
Create un ulteriore pulsante che vi permetta di fare il lavoro inverso: la slide attiva invece di andare avanti torna indietro.
Potete partire copiando il codice ma cosa dovete cambiare? In questa milestone vi assicurerete di aver davvero capito la precedente

<!--
- creo su html il bottone
- ricopio il codice di M3 ma farò il calcolo inverso quindi nel for partirò da una variabile con valore iniziale che corrisponda alla lunghezza dell'array e diminuisco 1 invece di incrementare
 -->

BONUS 1
Gestiamo il ciclo infinito del carosello. Dall'ultima immagine andare avanti ci porta alla prima e viceversa.

BONUS 2
Aggiungere delle piccole miniature (thumbnails) sulla destra, come nel secondo screenshot. Tutte le miniature saranno leggermente più scure, tranne quella che corrisponde all'immagine attiva in carosello. Questa avrà anche un bordo colorato.
Non impazzite sullo scurire le thumbnail, potete usare: un div nero con opacity sopra le immagini, immagini che hanno un'opacity bassa, i filter o tanto altro.
La cosa importante è che quando clicco sulle frecce per cambiare slide, venga cambiata anche la miniatura attiva.
