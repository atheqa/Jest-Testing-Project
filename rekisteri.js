"use strict";

const tietokonerekisteri = require("./tietokoneet.json");

class Tietokonerekisteri {
  constructor(tietokoneet) {
    if (tietokoneet === undefined) {
      throw new Error("tietokoneet puuttuvat");
    }

    this.tietokoneet = tietokoneet;
  }

  haeValmistajat() {
    let valmistajat = []; //luodaan tyhjä taulukko usean muuttujan tallennusta varten
    for (let tietokoneen of tietokonerekisteri) {
      //käydään taulukko läpi
      if (!valmistajat.includes(tietokoneen.valmistaja)) {
        //tarkistetaan onko taulukossa sama valmistaja usean kerran
        valmistajat.push(tietokoneen.valmistaja); //siirretään tyhjään taulukkoon valmistajat vain kertaalleen
      }
    }

    return valmistajat; //palautetaan taulukko
  }

  haeNumerolla(numero) {
    if (numero === undefined) {
      throw new Error("numerolla ei löydy konetta"); //tarkistetaan onko parametri annettu
    }
    for (let tietokone of tietokonerekisteri) {
      // käydään taulukko läpi
      if (tietokone.numero === numero) {
        //verrataan annettua numeroa taulukon numeroihin
        return tietokone; //palautetaan tietokone verratulla numerolla
      }
    }
    throw new Error("numerolla ei löydy konetta");
    //jos numerolla ei löydy konetta läpiajon aikana, tullaan lopulta tähän virhelauseeseen
  }

  haeValmistajalla(valmistaja) {
    if (valmistaja === undefined) {
      return [];
    }
    let loydettyNumero = [];
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.valmistaja === valmistaja) {
        loydettyNumero.push(tietokone.numero);
      }
    }
    if (loydettyNumero.length < 1) {
      return [];
    }
    return loydettyNumero;
  }

  haeTyypilla(tyyppi) {
    if (tyyppi === undefined) throw new Error("parametri puuttuu");
    let loydettyKone = [];
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.tyyppi === tyyppi) {
        loydettyKone.push(tietokone);
      }
    }
    if (loydettyKone.length < 1) {
      return [];
    }
    return loydettyKone;
  }

  haeVarusteet(numero) {
    if (numero === undefined) {
      throw new Error("parametri puuttuu");
    }
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.numero === numero) {
        if (tietokone.varusteet.length < 1) {
          return [];
        }
        return tietokone.varusteet;
      }
    }
    throw new Error("numerolla ei löydy konetta");
  }

  tietokoneenHinta(numero) {
    if (numero === undefined) throw new Error("numerolla ei löydy konetta");
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.numero === numero) {
        return tietokone.hinta;
      }
    }
    throw new Error("numerolla ei löydy konetta");
  }

  ohjelmienHinta(numero) {
    if (numero === undefined) throw new Error("numerolla ei löydy konetta");
    let ohjelmienSumma = 0;
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.numero === numero) {
        if (tietokone.ohjelmat.length < 1) {
          ohjelmahaku = 0;
        }
        for (let ohjelmat of tietokone.ohjelmat) {
          ohjelmienSumma = ohjelmienSumma + ohjelmat.hinta;
        }
        return ohjelmienSumma;
      }
    }
    throw new Error("numerolla ei löydy konetta");
  }

  ohjelmahaku(numero) {
    if (numero === undefined) {
      return false;
    }

    for (let tietokone of tietokonerekisteri) {
      if (tietokone.numero === numero) {
        if (tietokone.ohjelmat.length >= 1) {
          return true;
        }
        return false;
      }
    }
    return false; //palauttaa false jos numerolla ei löydy konetta
  }

  varustehaku(numero) {
    if(numero === undefined) {
      return false;
    }
    for (let tietokone of tietokonerekisteri) {
      if (tietokone.numero === numero) {
        if (tietokone.varusteet.length >= 1) {
          return true;
        }
          return false;
      }
    }
    return false; //palauttaa false jos numerolla ei löydy konetta
  }
}

module.exports = Tietokonerekisteri;
