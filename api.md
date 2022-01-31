# Tietokoneet API

## Toiminnot

### **konstruktori**
 - parametrina annetaan tietokoneet sisältävä json-olio (tietokoneet.json)
 - jos parametri puuttuu, aiheutuu poikkeus 'tietokoneet puuttuvat'

 ### **metodit**
- **haeValmistajat()**
 - palauttaa tietokoneiden valmistajat taulukkona
 - valmistaja on taulukossa vain kertaalleen
 - jos valmistajia ei löydy, palauttaa tyhjän taulukon

- **haeNumerolla()**
 - parametrina annetaan tietokoneen numero
 - palauttaa numeroa vastaavan tietokoneolion
 - jos numerolla ei ole tietokonetta tai parametri puuttuu,
  aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

- **haeValmistajalla()**
 - parametrina annetaan tietokoneen valmistaja
 - palauttaa taulukon, jossa on löytyneiden koneiden numerot
 - jos valmistajalla ei ole tietokonetta, palauttaa tyhjän taulukon
 - jos parametri puuttuu, palauttaa tyhjän taulukon

- **haeTyypilla()**
 - tyyppi annetaan parametrina
 - palauttaa taulukon koneita
 - palauttaa tyhjän taulukon, jos mitään ei löydy
 - aiheuttaa poikkeuksen 'parametri puuttuu', jos parametria ai anneta

- **haeVarusteet()**
 - parametrina annetaan tietokoneen numero
 - palauttaa tietokoneen varusteet taulukkona
 - jos varusteita ei ole, palauttaa tyhjän taulukon
 - aiheuttaa poikkeuksen ' parametri puuttuu', jos parametria ei anneta
 - jos numerolla ei ole tietokonetta, aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

- **tietokoneenHinta()**
 - parametrina annetaan tietokoneen numero
 - palauttaa hinnan
 - jos numerolla ei ole tietokonetta tai parametri puuttuu,
   aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

- **ohjelmienHinta()**
 - parametrina annetaan tietokoneen numero
 - palauttaa ohjelmien yhteishinnan
 - jos tietokoneella ei ole ohjelmia, palauttaa nollan
 - jos numerolla ei ole tietokonetta tai parametri puuttuu,
   aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

- **ohjelmahaku()**
 - parametrina annetaan tietokoneen numero
 - palauttaa true, jos tietokoneella on ohjelmia, muuten false
 - jos numerolla ei ole tietokonetta, palauttaa false
 - jos parametri puuttuu, palauttaa false

- **varustehaku()**
 - parametrina annetaan tietokoneen numero
 - palauttaa true, jos tietokoneella on varusteita, muuten false
 - jos numerolla ei ole tietokonetta, palauttaa false
 - jos parametri puuttuu, palauttaa false



