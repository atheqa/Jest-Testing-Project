"use strict";

const Tietokonerekisteri = require("../rekisteri.js");
const tietokoneet = require("../tietokoneet.json")

describe("funktiot määritelty", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });
    
    test("haeValmistajat määritelty", () => {
        expect(tietokonerekisteri.haeValmistajat).toBeDefined();
    });

    test("haeNumerolla määritelty", () => {
        expect(tietokonerekisteri.haeNumerolla).toBeDefined();
    });

    test("haeValmistajalla määritelty", () => {
        expect(tietokonerekisteri.haeValmistajalla).toBeDefined();
    });
    test("haeTyypilla määritelty", () => {
        expect(tietokonerekisteri.haeTyypilla).toBeDefined();
    });
    test("haeVarusteet määritelty", () => {
        expect(tietokonerekisteri.haeVarusteet).toBeDefined();
    });

    test("tietokoneenHinta määritelty", () => {
        expect(tietokonerekisteri.tietokoneenHinta).toBeDefined();
    });

    test("ohjelmienHinta määritelty", () => {
        expect(tietokonerekisteri.ohjelmienHinta).toBeDefined();
    });

    test("ohjelmahaku määritelty", () => {
        expect(tietokonerekisteri.ohjelmahaku).toBeDefined();
    });

    test("varustehaku määritelty", () => {
        expect(tietokonerekisteri.varustehaku).toBeDefined();
    });

});

describe("testataan haeValmistajat", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('palauttaa taulukon ["BMI", "CERA"]', () => {
        expect(tietokonerekisteri.haeValmistajat().sort()).toEqual(
            ["BMI", "CERA"].sort()
        );
    });

    /* test('palauttaa tyhjän taulukon []', () => {
        expect(tietokonerekisteri.haeValmistajat()).toEqual([]);
    });  */
 });

describe("testataan haeNumerolla", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('palauttaa numeroa vastaavan tietokoneolion', () => {
        const tietokone = tietokonerekisteri.haeNumerolla(1);
        expect(tietokone.numero).toEqual(1);
        expect(tietokone.valmistaja).toEqual("BMI");
        expect(tietokone.tyyppi).toEqual("minitorni");
        expect(tietokone.varusteet.sort())
            .toEqual(["näppis", "näyttö", "hiiri"].sort());
        expect(tietokone.hinta).toEqual(250);
        expect(tietokone.ohjelmat[0].nimi).toEqual("Teksturi");
        expect(tietokone.ohjelmat[0].hinta).toEqual(123);
        expect(tietokone.ohjelmat[1].nimi).toEqual("Pasianssi");
        expect(tietokone.ohjelmat[1].hinta).toEqual(10);
    });

    test('palauttaa virheen, jos numerolla ei löydy konetta', () => {
        expect(() => tietokonerekisteri.haeNumerolla(5)).toThrow("numerolla ei löydy konetta");
    });
     
    test('palauttaa virheen, jos parametri puuttuu', () => {
        expect(tietokonerekisteri.haeNumerolla).toThrow("numerolla ei löydy konetta");
    });
});

describe("testataan haeValmistajalla", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });


    test('palauttaa taulukon koneiden numeroista [2]', () => {
        expect(tietokonerekisteri.haeValmistajalla("CERA")).toEqual(
            [2]
        );
    });

    test('palauttaa tyhjän taulukon, jos valmistajalla ei löydy konetta', () => {
        expect(tietokonerekisteri.haeValmistajalla("hp")).toEqual([]);
    });
     
    test('palauttaa tyhjän taulukon, jos parametri puuttuu', () => {
        expect(tietokonerekisteri.haeValmistajalla()).toEqual([]);
    });
});

describe("testataan haeTyypilla", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });
    test('palauttaa taulukon haetun tyyppisiä koneita', () => {
        expect(tietokonerekisteri.haeTyypilla("läppäri").length).toEqual(2);
    })

    test('palauttaa tyhjän taulukon, jos tyypillä ei löydy konetta', () => {
        expect(tietokonerekisteri.haeTyypilla("auto")).toEqual([]);
    });
     
    test('palauttaa virheen, jos parametri puuttuu', () => {
        expect(tietokonerekisteri.haeTyypilla).toThrow("parametri puuttuu");
    });
});

describe("testataan haeVarusteet", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('tarkistetaan, onko käytetty hakuparametria', () => {
        expect(tietokonerekisteri.haeVarusteet).toThrow('parametri puuttuu');
    });

    test('palauttaa tietokoneen varusteet taulukkona', () => {
        expect(tietokonerekisteri.haeVarusteet(2)).toEqual(["hiiri"]);
    });
    
    test('palauttaa tyhjän taulukon, jos varusteita ei ole', () => {
        expect(tietokonerekisteri.haeVarusteet(3)).toEqual([]);
    });

    test('ilmoittaa, jos numerolla ei ole konetta', () => {
        expect(() => tietokonerekisteri.haeVarusteet(5)).toThrow('numerolla ei löydy konetta');
    });
});

describe("testataan tietokoneenHinta", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('tarkistetaan, onko käytetty hakuparametria', () => {
        expect(tietokonerekisteri.tietokoneenHinta).toThrow('numerolla ei löydy konetta');
    });

    test('ilmoittaa, jos numerolla ei ole konetta', () => {
        expect(() => tietokonerekisteri.tietokoneenHinta(5)).toThrow('numerolla ei löydy konetta');
    });

    test('palauttaa tietokoneen hinnan', () => {
        expect(tietokonerekisteri.tietokoneenHinta(2)).toEqual(350);
    });
});

describe("testataan ohjelmienHinta", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('ilmoittaa, jos numerolla ei ole konetta', () => {
        expect(() => tietokonerekisteri.ohjelmienHinta(5)).toThrow('numerolla ei löydy konetta');
    });

    test('palauttaa ohjelmien yhteissumman', () => {
        expect(tietokonerekisteri.ohjelmienHinta(3)).toEqual(123);
    });

    test('tarkistetaan, onko käytetty hakuparametria', () => {
        expect(tietokonerekisteri.ohjelmienHinta).toThrow('numerolla ei löydy konetta');
    });
});

describe("testataan ohjelmahaku", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('palauttaa true, jos tietokoneella on ohjelmia', () => {
        expect(tietokonerekisteri.ohjelmahaku(1)).toEqual(true);
    });
    
    test('ilmoittaa, jos numerolla ei ole konetta', () => {
        expect(tietokonerekisteri.ohjelmahaku(5)).toEqual(false);
    });

    test('tarkistetaan, onko käytetty hakuparametria', () => {
        expect(tietokonerekisteri.ohjelmahaku()).toEqual(false);
    });
});

describe("testataan varustehaku", () => {
    let tietokonerekisteri;

    beforeEach(() => {
        tietokonerekisteri = new Tietokonerekisteri(tietokoneet);
    });

    test('palauttaa true, jos tietokoneella on varusteita', () => {
        expect(tietokonerekisteri.varustehaku(1)).toEqual(true);
    });
    
    test('ilmoittaa, jos numerolla ei ole konetta', () => {
        expect(tietokonerekisteri.varustehaku(5)).toEqual(false);
    });

    test('tarkistetaan, onko käytetty hakuparametria', () => {
        expect(tietokonerekisteri.varustehaku()).toEqual(false);
    });
});