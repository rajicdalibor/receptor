export type Lang = "sr" | "en" | "ru";

/* ------------------------------------------------------------------
   Serbian (default) — full content. The English object is typed to
   match this exact shape, so both languages stay in sync.
------------------------------------------------------------------- */

const sr = {
  brand: {
    name: "Receptor",
    tagline: "Riverside Brasserie",
  },

  nav: {
    pocetna: "Početna",
    meni: "Meni",
    vinska: "Vinska karta",
    pica: "Karta pića",
    business: "Business Lunch",
    proslave: "Proslave",
    galerija: "Galerija",
    kontakt: "Kontakt",
  },

  cta: {
    reserve: "Rezerviši sto",
    viewMenu: "Pogledaj meni",
    businessLunch: "Business lunch",
    sendInquiry: "Pošalji upit",
    callNow: "Pozovi odmah",
    directions: "Otvori mapu",
  },

  common: {
    from: "od",
    perPerson: "po osobi",
    currency: "RSD",
    langLabel: "EN",
  },

  /* ----------------------------- HOME ----------------------------- */
  home: {
    hero: {
      script: "Beogradska riverside brasserie priča.",
      sub: "Večera uz reku, dobra vina, jela za deljenje, poslovni ručkovi i večeri koje se pamte.",
      ctaPrimary: "Rezerviši sto",
      ctaSecondary: "Pogledaj meni",
      ctaCall: "Pozovi odmah",
      info: {
        addr1: "Karađorđeva 21, Beograd",
        addr2: "Na korak od reke i blizu Kalemegdana",
        hoursTitle: "Ponedeljak – Subota",
        hours1: "12:00 – 00:00",
        hours2: "Kuhinja do 22:30",
        reserve: "Za rezervacije za isti dan, pozovite direktno.",
      },
    },
    valuesTitle: "Zašto gosti dolaze u Receptor",
    values: [
      {
        title: "Poslovni ručak",
        text: "Odličan izbor za poslovne ručkove, sastanke i goste kojima želite da ostavite dobar utisak.",
      },
      {
        title: "Večera uz reku",
        text: "Mirne i atmosferične večeri uz pogled na vodu, topao enterijer i jela za deljenje.",
      },
      {
        title: "Vino i kokteli",
        text: "Karta pića i vina napravljena da se lako bira, a još lakše naručuje.",
      },
      {
        title: "Privatne proslave",
        text: "Rođendani, poslovna okupljanja i privatne večere, organizovani sa lakoćom, merom i pažnjom prema detalju.",
      },
    ],
    valuesCta: "Istraži Receptor",
    blocks: {
      food: {
        title: "Jela koja traže još jednu bocu vina.",
        text: "Naš meni je vođen ukusom, ritmom stola i dobrim razlogom da se ostane duže.",
        cta: "Pogledaj kompletan meni",
      },
      drink: {
        title: "Vina i pića birana da se lako naručuju, a još lakše pamte.",
        text: "Kurirana vinska karta i kokteli, bez nepotrebne gužve.",
        ctaWine: "Vinska karta",
        ctaDrinks: "Karta pića",
      },
      business: {
        title: "Poslovni ručak koji ne izgleda kao kompromis.",
        text: "Pametan izbor za sastanke — brzina i kvalitet u istom tanjiru.",
        bullets: ["Brzo i efikasno", "Jasno i kvalitetno", "Prijatno, a opušteno", "Odličan odnos cene"],
        cta: "Pogledaj business lunch",
      },
    },
    proslaveBlock: {
      title: "Privatne i poslovne proslave sa stilom.",
      text: "Od malih privatnih večera do poslovnih okupljanja — pristup koji se prilagođava prilici i ostavlja utisak.",
      chips: ["Rođendani", "Godišnjice", "Poslovne", "Team dinners", "Cocktail večere"],
      cta: "Pošalji upit za događaj",
    },
    eveningBlock: {
      title: "Kada padne veče, Receptor dobija svoj ritam.",
      text: "Petkom, subotom i u posebnim terminima — topla svetlost, dobra muzika i događaji koji ostaju u okviru dobrog ukusa.",
      cta: "Pogledaj šta je aktuelno",
    },
    galleryTeaser: {
      title: "Ambijent koji se ne objašnjava, dolazi se zbog njega.",
      cta: "Pogledaj galeriju",
    },
    location: {
      title: "Na korak od reke. Dovoljno blizu centru.",
      text: "Smešten u Karađorđevoj ulici, Receptor spaja energiju starog Beograda, neposrednu blizinu reke i pristup koji čini dolazak lakim.",
      parking: "Parking je dostupan u blizini, a uz rezervaciju i ograničeni kapacitet može da se organizuje unapred.",
    },
    finalCta: {
      title: "Rezervišite svoj sto. Ili nam recite kakvo veče želite.",
      text: "Za ručak, večeru, poslovni sastanak ili privatno okupljanje — Receptor je spreman da vam ponudi iskustvo koje ima meru, ukus i razlog za povratak.",
      ctaReserve: "Rezerviši sto",
      ctaCall: "Pozovi odmah",
      ctaInquiry: "Pošalji upit",
    },
  },

  /* ----------------------------- MENI ----------------------------- */
  meni: {
    hero: {
      title: "Meni",
      sub: "Pažljivo odabrana jela pripremljena od svežih namirnica, sa fokusom na kvalitet, sezonalnost i autentičan ukus.",
      tagline: "A modern riverside brasserie. Relaxed. Refined. Receptor.",
    },
    note: "Pitajte naš tim za preporuke dana i posebne sezonske specijalitete.",
    smallprint: "Sve cene su izražene u RSD.  ·  Informacije o alergenima dostupne su na zahtev.  ·  Zadržavamo pravo na promenu jelovnika.",
    colLeft: [
      {
        title: "Ordever Receptora",
        items: [
          { name: "Ordever Receptora", desc: "Tost rustični hleb, dimljeni jegerski puter sa sirnim namazom i džem od urnebesa", price: "250", unit: "po stolu", tag: "" },
        ],
      },
      {
        title: "Za otvaranje apetita",
        items: [
          { name: "Grilovani sir sa pečenom crvenom paprikom i origanom", desc: "Sir grilovan, pečena crvena paprika, maslinovo ulje i origano", price: "790", unit: "", tag: "" },
          { name: "Bruskete sa pršutom, buratom, sušenim paradajzom i pestom", desc: "Tostirani hleb, sušeni paradajz, burata, njeguški pršut i domaći pesto", price: "860", unit: "", tag: "" },
        ],
      },
      {
        title: "Predjela & uvodi u obrok",
        items: [
          { name: "Supa / Početak dana", desc: "Dnevni potaž od sezonskog povrća ili domaća supa", price: "590", unit: "", tag: "" },
          { name: "Receptor selekcija sireva & pršuta", desc: "Čvrsti zreli sir, njeguški pršut, dimljeni ovčji sir, aceto balzam sa tucanim grožđem i marinirane masline", price: "790 / 1.490", unit: "", tag: "" },
          { name: "Receptor House Salad", desc: "Mix zelenih salata, rikota, avokado, citrusni dressing i seme nara", price: "890", unit: "", tag: "vegetarijansko" },
          { name: "Dodaci", desc: "Piletina sa žara +390  ·  Burata +490", price: "", unit: "", tag: "" },
          { name: "Pasta sa pečenim paradajzom i buratom", desc: "Domaća pasta sa pečenim paradajzom, buratom, bosiljkom i koricom limuna", price: "1.390", unit: "", tag: "vegetarijansko" },
          { name: "Biftek tartar, puter, kumin & parmezan", desc: "Sočan biftek, kremasti puter sos, blaga aroma kumina i parmezan", price: "1.490", unit: "", tag: "" },
          { name: "Lemon herb rižoto sa mladim povrćem", desc: "Kremasti rižoto sa limunom, šparglama, romanom i seckanim povrćem", price: "1.190", unit: "", tag: "vegetarijansko" },
          { name: "Piletina & kremasti rižoto", desc: "Rižoto sa mladim povrćem, piletinom i blagim puter sosom", price: "1.290", unit: "", tag: "" },
        ],
      },
    ],
    colRight: [
      {
        title: "Glavna jela",
        items: [
          { name: "Piletina sa žara, lemon puter & mladi krompir", desc: "Piletina sa žara, limun puter, brokoli i mladi krompir", price: "1.490", unit: "", tag: "" },
          { name: "Teletina sa mladim krompirom", desc: "Sporo pripremljena teletina, mladi krompir i prirodni sos od pečenja", price: "1.990", unit: "", tag: "" },
          { name: "Receptor pljeskavica", desc: "Pljeskavica od junećeg mesa, house fries, ajvar, kajmak i blago marinirani crveni luk", price: "1.390", unit: "", tag: "" },
          { name: "Receptor butkica", desc: "Dinstana butkica u kajmaku, sote krompir i mladi luk", price: "1.790", unit: "", tag: "" },
          { name: "Glazirana jagnjetina Receptora", desc: "Jagnjeća rebra, mladi krompir i prirodni sos", price: "2.390", unit: "", tag: "" },
        ],
      },
      {
        title: "Za sto / Signature share",
        items: [
          { name: "Glazirana jagnjetina za sto", desc: "Confit jagnjetina, mladi krompir, pečurke i timut jogurt", price: "4.090", unit: "2 osobe", tag: "" },
          { name: "Brasserie steak & frites", desc: "Juneći steak, house fries i demi-glace", price: "4.490", unit: "2 osobe", tag: "" },
          { name: "Receptor pljeskavica za sto", desc: "Pljeskavica za deljenje, house fries, urnebes i kajmak", price: "2.490", unit: "2 osobe", tag: "" },
        ],
      },
      {
        title: "Salate",
        items: [
          { name: "Zelena salata Receptora", desc: "Mix zelenih salata, rukola i kovačević dressing", price: "490", unit: "", tag: "vegetarijansko" },
          { name: "Paradajz salata sa crvenim lukom", desc: "Paradajz, marinirani crveni luk i maslinovo ulje", price: "490", unit: "", tag: "vegan, vegetarijansko" },
          { name: "Paradajz salata sa sirom", desc: "Paradajz, kovačević sir i maslinovo ulje", price: "490", unit: "", tag: "vegetarijansko" },
          { name: "Kupus salata", desc: "Svež kupus i lagani house dressing", price: "300", unit: "", tag: "vegetarijansko" },
        ],
      },
      {
        title: "Slatki završetak",
        items: [
          { name: "Hladan parfe od lešnika", desc: "Kremasti hladni parfe od lešnika sa blagom karamelom i tostiranim lešnikom", price: "690", unit: "", tag: "" },
          { name: "Kolač od maka, vanila, krem & citrus", desc: "Sočan kolač od maka, vanila krem i citrusni finiš", price: "690", unit: "", tag: "vegetarijansko" },
          { name: "Kolač dana / sezonsko voće", desc: "", price: "690", unit: "", tag: "" },
        ],
      },
    ],
  },

  /* -------------------------- VINSKA KARTA ------------------------- */
  vino: {
    hero: {
      title: "Vinska karta",
      sub: "Pažljivo birana selekcija vina. Kompaktna. Elegantna. Sa namerom.",
    },
    philosophyTitle: "Naša vinska filozofija",
    philosophyText:
      "Vinska karta Receptora zamišljena je kao pažljivo vođena i namerno kompaktna selekcija, sa jasnim osloncem na francuski stil, gastronomsku logiku i lakoću uživanja. Umesto širine radi širine, želimo da svako vino na karti ima razlog zašto je tu i kako se uklapa uz naš meni i atmosferu restorana.",
    glassLabel: "Čaša 0,15 l",
    bottleLabel: "Flaša 0,75 l",
    groups: [
      {
        title: "Penušavo",
        wines: [
          { name: "Simonnet-Febvre Blanc de Blanc", house: "", desc: "Elegantan i osvežavajući francuski penušavac, sa finim mehurićima i čistim, svetlim karakterom.", glass: "790", bottle: "3.590" },
        ],
      },
      {
        title: "Belo",
        wines: [
          { name: "Château Marjosse Blanc", house: "House white", desc: "Suvo, jedro i vrlo pitko, sa notama citrusa, belog voća, blagih herbalnih tonova i elegantne mineralnosti. Idealno uz salate, ribu i laganija predjela.", glass: "590", bottle: "2.990" },
          { name: "Domaine L'Ostal Chardonnay", house: "", desc: "Chardonnay sa više prisustva, ali bez hrasta. Srednjeg tela, sa lepim balansom i čistim, osvežavajućim stilom.", glass: "690", bottle: "3.390" },
          { name: "Michel Lynch Réserve Graves Blanc", house: "", desc: "Ozbiljnije belo vino za goste koji traže više sadržaja. Punije teksture, sa lepom zaobljenošću i dubljim profilom.", glass: "", bottle: "4.290" },
        ],
      },
      {
        title: "Roze",
        wines: [
          { name: "LYV Rosé Pays d'Oc", house: "", desc: "Svež, suv i izrazito pitak roze — vino koje se lako naručuje i još lakše ponavlja. Idealno za terasu, aperitiv i lagane početke večeri.", glass: "550", bottle: "2.790" },
        ],
      },
    ],
    red: {
      title: "Crveno",
      wines: [
        { name: "Château Marjosse Rouge", house: "House red", desc: "Naš house red iz privatne domene Bordoa. Pitko, elegantno i vrlo zahvalno crveno vino.", glass: "650", bottle: "3.190" },
        { name: "Domaine Martin Rasteau", house: "Cru Rhône", desc: "Naš glavni gastronomski crveni izbor, sa jačim karakterom. Odlično uz butkicu, ovčetinu i jača crvena jela.", glass: "", bottle: "4.490" },
        { name: "Michel Lynch Bordeaux Rouge", house: "", desc: "Klasičan i elegantan bordoski izraz za goste koji traže više. Finije teksture, sa nešto više sadržaja i dublje strukture.", glass: "850", bottle: "4.290" },
      ],
    },
    cellar: {
      title: "Iz našeg podruma",
      intro: "Mali, pažljivo odabran izbor za više karaktera, dubine i prisustva. Etikete koje posebno cenimo i koje rado izdvajamo u ponudi Receptora.",
      wines: [
        { name: "Triptyque Silex", house: "", desc: "Premium belo vino sa izraženim mineralnim karakterom i preciznošću. Za goste koji traže više karaktera i dubine.", glass: "", bottle: "8.900" },
        { name: "Syrah, Rhône", house: "", desc: "Snažan i strukturisan crveni Syrah — koncentrisan, začinski i dubok. Za večere sa ozbiljnijim jelima i razgovorima koji traju.", glass: "", bottle: "7.900" },
      ],
    },
    smallprint: "Sve cene su izražene u RSD i uključuju PDV.",
  },

  /* --------------------------- KARTA PIĆA -------------------------- */
  pica: {
    hero: {
      title: "Karta pića",
      sub: "Pažljivo birana selekcija pića. Čista, balansirana i u duhu Receptora.",
      intro: "Karta pića osmišljena da deluje prirodno, sigurno i lako za navigaciju — sa fokusiranom selekcijom koja prati ritam restorana, od dnevnog aperitiva do večernjeg servisa.",
    },
    smallprint: "Cene su izražene u RSD i uključuju PDV.",
    groups: [
      { title: "Aperitif / Openers", items: [
        { name: "Aperol Spritz", vol: "", price: "750" },
        { name: "Hugo Spritz", vol: "", price: "750" },
        { name: "Dry Vermouth & Tonic", vol: "", price: "650" },
      ] },
      { title: "Cocktails", items: [
        { name: "Negroni", vol: "", price: "850" },
        { name: "Gin & Tonic", vol: "", price: "750" },
        { name: "Whiskey Sour", vol: "", price: "850" },
        { name: "Espresso Martini", vol: "", price: "950" },
        { name: "French 75", vol: "", price: "950" },
      ] },
      { title: "Pivo", items: [
        { name: "Točeno domaće pivo", vol: "0,33 l", price: "320" },
        { name: "Točeno domaće pivo", vol: "0,50 l", price: "390" },
        { name: "Domaće flaširano pivo", vol: "0,33 l", price: "390" },
        { name: "Premium uvozno flaširano pivo", vol: "0,33 l", price: "450" },
      ] },
      { title: "Whiskey / Whisky", items: [
        { name: "Jameson", vol: "", price: "390" },
        { name: "Johnnie Walker Black Label", vol: "", price: "590" },
        { name: "Jack Daniel's Single Barrel", vol: "", price: "690" },
        { name: "Macallan", vol: "", price: "790" },
      ] },
      { title: "Martini", items: [
        { name: "Martini Bianco", vol: "", price: "390" },
        { name: "Martini Rosso", vol: "", price: "390" },
      ] },
      { title: "Gin", items: [
        { name: "Bombay Sapphire", vol: "", price: "490" },
        { name: "Gin Mare", vol: "", price: "690" },
      ] },
      { title: "Vodka", items: [
        { name: "Finlandia", vol: "", price: "390" },
        { name: "Grey Goose", vol: "", price: "590" },
      ] },
      { title: "Rum", items: [
        { name: "Bacardi Carta Blanca", vol: "", price: "490" },
        { name: "Diplomático Reserva Exclusiva", vol: "", price: "690" },
      ] },
      { title: "Tequila / Agave", items: [
        { name: "Jimador Reposado", vol: "", price: "490" },
      ] },
      { title: "Cognac / Brandy", items: [
        { name: "Rémy Martin VSOP", vol: "", price: "790" },
      ] },
      { title: "Digestifs", items: [
        { name: "Fernet-Branca", vol: "", price: "490" },
        { name: "Amaro Montenegro", vol: "", price: "490" },
      ] },
      { title: "Rakija", items: [
        { name: "Kućna šljivovica", vol: "", price: "360" },
        { name: "Kućna dunja", vol: "", price: "420" },
        { name: "Kućna kruška / kajsija", vol: "", price: "420" },
        { name: "Premium / barrique šljivovica", vol: "", price: "490" },
      ] },
      { title: "Voda Rosa", items: [
        { name: "Negazirana voda", vol: "0,25 l", price: "290" },
        { name: "Negazirana voda", vol: "0,75 l", price: "490" },
        { name: "Gazirana voda", vol: "0,25 l", price: "290" },
        { name: "Gazirana voda", vol: "0,75 l", price: "490" },
      ] },
      { title: "Bezalkoholna pića", items: [
        { name: "Coca-Cola", vol: "0,25 l", price: "350" },
        { name: "Coca-Cola Zero", vol: "0,25 l", price: "350" },
        { name: "Schweppes Bitter Lemon", vol: "0,25 l", price: "350" },
        { name: "Schweppes Tonic Water", vol: "0,25 l", price: "350" },
        { name: "Fanta", vol: "0,25 l", price: "350" },
        { name: "Sprite", vol: "0,25 l", price: "350" },
        { name: "Fuze Tea", vol: "0,25 l", price: "380" },
      ] },
      { title: "Sokovi Next / Fresh", items: [
        { name: "Sok od pomorandže", vol: "0,20 l", price: "350" },
        { name: "Sok od jabuke", vol: "0,20 l", price: "350" },
        { name: "Sok od šumskog voća", vol: "0,20 l", price: "350" },
        { name: "Sok od jagoda", vol: "0,20 l", price: "350" },
        { name: "Sok od breskve", vol: "0,20 l", price: "350" },
        { name: "Sveža limunada", vol: "", price: "420" },
        { name: "Domaći ledeni čaj / sezonska limunada", vol: "", price: "450" },
      ] },
      { title: "Kafa", items: [
        { name: "Espresso", vol: "", price: "270" },
        { name: "Double Espresso", vol: "", price: "350" },
        { name: "Cappuccino", vol: "", price: "320" },
        { name: "Latte", vol: "", price: "350" },
        { name: "Iced Coffee / Iced Latte", vol: "", price: "450" },
      ] },
      { title: "Čaj", items: [
        { name: "Izbor čajeva", vol: "", price: "290" },
      ] },
    ],
  },

  /* ------------------------- BUSINESS LUNCH ------------------------ */
  business: {
    hero: {
      title: "Business Lunch",
      sub: "Pametan izbor za sastanke, timove i goste iz firme.",
      intro: "Moderan, organizaciono jednostavan format koji omogućava kvalitetan ručak, brz i siguran servis i prijatnu atmosferu za svaki poslovni susret.",
      setLabel: "Business lunch set",
      price: "20",
      priceCur: "EUR + PDV",
      perPerson: "po osobi",
      priceNote: "Piće se naručuje iz bara po potrošnji.",
    },
    stepsTitle: "Servira se u tri kratka sleda",
    steps: [
      {
        title: "Uvod za sto",
        desc: "Topli rustični hleb, dimljeni kajmak puter i citrus urnebes",
        items: ["Mala sezonska salata za centar stola — mix zelenih salata, rotkvica, citrus dressing i semenke"],
      },
      {
        title: "Glavni sled",
        desc: "Unapred definisan izbor za grupu ili ograničen izbor na licu mesta",
        items: [
          "Opcija I — Pileći file sa mladim krompirom i blagim puter sosom",
          "Opcija II — Sporo pečena teletina, kremasti pire i prilozi",
          "Opcija III — Pasta sa pečenim paradajzom, buratom i bosiljkom",
          "Opcija IV — Mini Receptor pljeskavice, house fries, ajvar i kajmak",
        ],
      },
      {
        title: "Završetak",
        desc: "Slatki kraj uz toplu kafu ili čaj",
        items: ["Kolač dana ili parfe od lešnika", "Kafa ili čaj"],
      },
    ],
    idealTitle: "Idealan za",
    ideal: [
      "Sastanke sa klijentima",
      "Timske ručkove",
      "Prezentacije",
      "Dnevne poslovne događaje",
      "Neformalne poslovne susrete",
    ],
  },

  /* ---------------------------- PROSLAVE --------------------------- */
  proslave: {
    hero: {
      title: "Proslave",
      script: "Zajedno. Bez brige. Uz Receptor.",
      intro1: "Za privatne događaje preporučujemo zajednički format koji omogućava bolju atmosferu za stolom, prirodni tok servisa i opuštenije domaćinstvo.",
      intro2: "Paketi su osmišljeni tako da zadrže brasserie karakter restorana uz jednostavan i organizaciono efikasan servis.",
    },
    packagesTitle: "Naši paketi",
    packageCta: "Saznajte više",
    packages: [
      {
        name: "Receptor Classic",
        price: "45 EUR + PDV po osobi",
        desc: "Jednostavan i opušten format proslave sa fokusom na dobru atmosferu, sharing koncept i grill.",
        features: ["Piće dobrodošlice", "Bogata selekcija jela sa grilla", "Paket pića do 4 sata", "Kafa / čaj"],
      },
      {
        name: "Receptor Brasserie",
        price: "55 EUR + PDV po osobi",
        desc: "Moderan i opušten format proslave sa naglaskom na sharing koncept, grill i riverside brasserie atmosferu.",
        features: ["Piće dobrodošlice", "Prošireni sharing", "Izbor jela sa grilla i iz peći", "Paket pića do 4 sata", "Kafa / čaj"],
      },
      {
        name: "Receptor Signature",
        price: "65 EUR + PDV po osobi",
        desc: "Elegantniji format sa pažljivo odabranim jelima za sharing, bogatijim uvodnim stolom i proširenim paketom pića.",
        features: ["Aperitiv dobrodošlice", "Premium uvodni sto", "Brasserie selection jela", "Prošireni paket pića do 4 sata", "Kafa / čaj"],
      },
    ],
    custom: {
      title: "Prilagođeni događaji",
      intro: "Kreiramo događaje po meri vaših želja.",
      items: [
        "Korporativne večere",
        "Privatne proslave",
        "Vinske degustacije",
        "Intimne večere",
        "Delimično zakup prostora",
        "Unapređene pakete pića",
        "Posebne menije po zahtevu domaćina",
      ],
    },
    notesTitle: "Važne napomene",
    notes: [
      "Paketi su predviđeni za organizovane grupe i privatne događaje",
      "Standardno trajanje paketa: do 4 sata",
      "Paket pića predviđen je za trajanje događaja do 4 sata",
      "Nakon isteka predviđenog trajanja, usluga se nastavlja prema regularnoj ponudi",
      "Produženje događaja i paketa pića moguće je uz prethodni dogovor",
      "Za potvrdu rezervacije je potrebna avansna uplata",
      "Konačan broj gostiju predstavlja minimalan broj za obračun",
      "Posebni zahtevi i prilagođeni događaji dostupni su na upit",
    ],
    closing: "Biće nam zadovoljstvo da u Receptoru ugostimo vašu proslavu, poslovni ručak ili privatni događaj.",
  },

  /* ---------------------------- GALERIJA --------------------------- */
  galerija: {
    hero: {
      title: "Galerija",
      sub: "Atmosfera, hrana, vino i terasa — večernji ritam Receptora.",
    },
    cta: {
      text: "Uvek ima mesta za još jednu riverside priču.",
      button: "Rezerviši sto",
    },
  },

  /* ----------------------------- KONTAKT --------------------------- */
  kontakt: {
    hero: {
      title: "Kontakt",
      script: "Tu smo za vas. Vidimo se na obali.",
    },
    brandLine: "Receptor Riverside Brasserie",
    address: {
      label: "Adresa",
      value: "Karađorđeva 21, Beograd",
      sub: "Na korak od reke i blizu Kalemegdana",
    },
    phone: { label: "Telefon", value: "+381 61 323 0324" },
    phone2: "",
    email: { label: "E-mail", value: "rezervacije@restoranreceptor.rs" },
    hours: {
      label: "Radno vreme",
      value: ["Ponedeljak – Subota: 12:00 – 00:00", "Kuhinja do 22:30"],
    },
    parking: {
      title: "Parking",
      note: "Uz rezervaciju stola vaše parking mesto je zagarantovano.",
      items: [
        "Obezbeđeno parking mesto za sve goste",
        "Nalazi se odmah pored ulaza u restoran",
        "Rezerviše se uz rezervaciju stola",
      ],
      label: "Receptor Parking",
    },
    form: {
      title: "Pošaljite nam poruku",
      name: "Ime i prezime",
      email: "E-mail",
      phone: "Telefon",
      date: "Datum",
      time: "Vreme",
      persons: "Broj osoba",
      message: "Poruka",
      consent: "Saglasan/na sam da Receptor obrađuje moje podatke radi kontakta.",
      submit: "Pošalji upit",
      sending: "Šalje se…",
      success: "Hvala! Vaš upit je poslat — javićemo se uskoro.",
      error: "Greška pri slanju. Pokušajte ponovo ili nas pozovite.",
    },
    careers: {
      eyebrow: "Karijera u Receptoru",
      title: "Karijera u Receptoru",
      script: "Riverside duh radne porodice.",
      text: "Verujemo u toplinu, smirenost i ozbiljnost u radu. Ako prepoznaješ taj duh i želiš da budeš deo Receptor priče — javi se, rado upoznajemo nove ljude.",
      positionsTitle: "Otvorene pozicije",
      positions: ["Kuvar / Chef", "Barmen / Barista", "Konobar", "Somelier", "Hostesa", "Menadžer restorana"],
      button: "Pošalji prijavu",
      note: "Vaše prijave i poruke razmatramo redovno.",
    },
  },

  /* ------------------------------ FOOTER --------------------------- */
  footer: {
    tagline: "Riverside brasserie u srcu Beograda — večere uz reku, dobra vina i jela za deljenje.",
    reservations: "Rezervacije",
    copy: "© 2026 Receptor Restaurant. Sva prava zadržana.",
  },
};

export type Dict = typeof sr;

/* ------------------------------------------------------------------ */
/*  English                                                            */
/* ------------------------------------------------------------------ */

const en: Dict = {
  brand: { name: "Receptor", tagline: "Riverside Brasserie" },

  nav: {
    pocetna: "Home",
    meni: "Menu",
    vinska: "Wine List",
    pica: "Drinks",
    business: "Business Lunch",
    proslave: "Events",
    galerija: "Gallery",
    kontakt: "Contact",
  },

  cta: {
    reserve: "Reserve a table",
    viewMenu: "View menu",
    businessLunch: "Business lunch",
    sendInquiry: "Send inquiry",
    callNow: "Call now",
    directions: "Open map",
  },

  common: { from: "from", perPerson: "per person", currency: "RSD", langLabel: "SR" },

  home: {
    hero: {
      script: "A Belgrade riverside brasserie story.",
      sub: "Dinner by the river, good wine, plates for sharing, business lunches and evenings worth remembering.",
      ctaPrimary: "Reserve a table",
      ctaSecondary: "View menu",
      ctaCall: "Call now",
      info: {
        addr1: "Karađorđeva 21, Belgrade",
        addr2: "Steps from the river, near Kalemegdan",
        hoursTitle: "Monday – Saturday",
        hours1: "12:00 – 00:00",
        hours2: "Kitchen until 22:30",
        reserve: "For same-day reservations, call us directly.",
      },
    },
    valuesTitle: "Why guests come to Receptor",
    values: [
      { title: "Business lunch", text: "A great choice for business lunches, meetings and guests you want to impress." },
      { title: "Dinner by the river", text: "Calm, atmospheric evenings with a water view, a warm interior and plates for sharing." },
      { title: "Wine & cocktails", text: "A list of drinks and wine made to choose easily and order even more easily." },
      { title: "Private events", text: "Birthdays, business gatherings and private dinners, arranged with ease, measure and attention to detail." },
    ],
    valuesCta: "Explore Receptor",
    blocks: {
      food: {
        title: "Dishes that ask for one more bottle of wine.",
        text: "Our menu is led by taste, the rhythm of the table and a good reason to stay longer.",
        cta: "View the full menu",
      },
      drink: {
        title: "Wines and drinks chosen to order easily and remember even easier.",
        text: "A curated wine list and cocktails, without unnecessary fuss.",
        ctaWine: "Wine list",
        ctaDrinks: "Drinks",
      },
      business: {
        title: "A business lunch that never feels like a compromise.",
        text: "A smart choice for meetings — speed and quality on the same plate.",
        bullets: ["Fast and efficient", "Clear and quality", "Pleasant, yet relaxed", "Great value for money"],
        cta: "See the business lunch",
      },
    },
    proslaveBlock: {
      title: "Private and corporate events with style.",
      text: "From small private dinners to business gatherings — an approach that adapts to the occasion and leaves an impression.",
      chips: ["Birthdays", "Anniversaries", "Corporate", "Team dinners", "Cocktail evenings"],
      cta: "Send an event inquiry",
    },
    eveningBlock: {
      title: "When night falls, Receptor finds its rhythm.",
      text: "On Fridays, Saturdays and special dates — warm light, good music and events that stay in good taste.",
      cta: "See what's on",
    },
    galleryTeaser: {
      title: "An atmosphere you don't explain — you come for it.",
      cta: "View the gallery",
    },
    location: {
      title: "Steps from the river. Close enough to the center.",
      text: "Set on Karađorđeva street, Receptor blends the energy of old Belgrade, the river close by and an approach that makes arriving easy.",
      parking: "Parking is available nearby, and with a reservation a limited number of spaces can be arranged in advance.",
    },
    finalCta: {
      title: "Reserve your table. Or tell us what kind of evening you want.",
      text: "For lunch, dinner, a business meeting or a private gathering — Receptor is ready to offer an experience with measure, taste and a reason to return.",
      ctaReserve: "Reserve a table",
      ctaCall: "Call now",
      ctaInquiry: "Send inquiry",
    },
  },

  meni: {
    hero: {
      title: "Menu",
      sub: "Carefully chosen dishes made from fresh produce, with a focus on quality, seasonality and authentic taste.",
      tagline: "A modern riverside brasserie. Relaxed. Refined. Receptor.",
    },
    note: "Ask our team for the day's recommendations and special seasonal dishes.",
    smallprint: "All prices are in RSD.  ·  Allergen information available on request.  ·  The menu is subject to change.",
    colLeft: [
      {
        title: "Receptor starter",
        items: [
          { name: "Receptor starter", desc: "Rustic toast, smoked compound butter with cheese spread and urnebes jam", price: "250", unit: "per table", tag: "" },
        ],
      },
      {
        title: "To open the appetite",
        items: [
          { name: "Grilled cheese with roasted red pepper and oregano", desc: "Grilled cheese, roasted red pepper, olive oil and oregano", price: "790", unit: "", tag: "" },
          { name: "Bruschetta with prosciutto, burrata, sun-dried tomato and pesto", desc: "Toasted bread, sun-dried tomato, burrata, Njeguši prosciutto and house pesto", price: "860", unit: "", tag: "" },
        ],
      },
      {
        title: "Starters & openers",
        items: [
          { name: "Soup / Start of the day", desc: "Daily potage of seasonal vegetables or house soup", price: "590", unit: "", tag: "" },
          { name: "Receptor cheese & charcuterie selection", desc: "Aged hard cheese, Njeguši prosciutto, smoked sheep cheese, aceto balsamico with crushed grapes and marinated olives", price: "790 / 1.490", unit: "", tag: "" },
          { name: "Receptor House Salad", desc: "Mixed greens, ricotta, avocado, citrus dressing and pomegranate seeds", price: "890", unit: "", tag: "vegetarian" },
          { name: "Add-ons", desc: "Grilled chicken +390  ·  Burrata +490", price: "", unit: "", tag: "" },
          { name: "Pasta with roasted tomato and burrata", desc: "House pasta with roasted tomato, burrata, basil and lemon zest", price: "1.390", unit: "", tag: "vegetarian" },
          { name: "Beef tartare, butter, cumin & parmesan", desc: "Tender beef, creamy butter sauce, a hint of cumin and parmesan", price: "1.490", unit: "", tag: "" },
          { name: "Lemon herb risotto with young vegetables", desc: "Creamy risotto with lemon, asparagus, romaine and chopped vegetables", price: "1.190", unit: "", tag: "vegetarian" },
          { name: "Chicken & creamy risotto", desc: "Risotto with young vegetables, chicken and a mild butter sauce", price: "1.290", unit: "", tag: "" },
        ],
      },
    ],
    colRight: [
      {
        title: "Main courses",
        items: [
          { name: "Grilled chicken, lemon butter & young potato", desc: "Grilled chicken, lemon butter, broccoli and young potato", price: "1.490", unit: "", tag: "" },
          { name: "Veal with young potato", desc: "Slow-cooked veal, young potato and natural roasting jus", price: "1.990", unit: "", tag: "" },
          { name: "Receptor burger", desc: "Beef patty, house fries, ajvar, kajmak and lightly marinated red onion", price: "1.390", unit: "", tag: "" },
          { name: "Receptor shank", desc: "Braised shank in kajmak, sautéed potato and spring onion", price: "1.790", unit: "", tag: "" },
          { name: "Receptor glazed lamb", desc: "Lamb ribs, young potato and natural jus", price: "2.390", unit: "", tag: "" },
        ],
      },
      {
        title: "For the table / Signature share",
        items: [
          { name: "Glazed lamb for the table", desc: "Confit lamb, young potato, mushrooms and timut yogurt", price: "4.090", unit: "2 people", tag: "" },
          { name: "Brasserie steak & frites", desc: "Beef steak, house fries and demi-glace", price: "4.490", unit: "2 people", tag: "" },
          { name: "Receptor burger for the table", desc: "Burger to share, house fries, urnebes and kajmak", price: "2.490", unit: "2 people", tag: "" },
        ],
      },
      {
        title: "Salads",
        items: [
          { name: "Receptor green salad", desc: "Mixed greens, rocket and house dressing", price: "490", unit: "", tag: "vegetarian" },
          { name: "Tomato salad with red onion", desc: "Tomato, marinated red onion and olive oil", price: "490", unit: "", tag: "vegan, vegetarian" },
          { name: "Tomato salad with cheese", desc: "Tomato, local cheese and olive oil", price: "490", unit: "", tag: "vegetarian" },
          { name: "Cabbage salad", desc: "Fresh cabbage and a light house dressing", price: "300", unit: "", tag: "vegetarian" },
        ],
      },
      {
        title: "Sweet finish",
        items: [
          { name: "Cold hazelnut parfait", desc: "Creamy cold hazelnut parfait with mild caramel and toasted hazelnut", price: "690", unit: "", tag: "" },
          { name: "Poppy seed cake, vanilla, cream & citrus", desc: "Moist poppy seed cake, vanilla cream and a citrus finish", price: "690", unit: "", tag: "vegetarian" },
          { name: "Cake of the day / seasonal fruit", desc: "", price: "690", unit: "", tag: "" },
        ],
      },
    ],
  },

  vino: {
    hero: {
      title: "Wine List",
      sub: "A carefully curated wine selection. Compact. Elegant. Intentional.",
    },
    philosophyTitle: "Our wine philosophy",
    philosophyText:
      "Receptor's wine list is conceived as a carefully guided and deliberately compact selection, firmly rooted in the French spirit, gastronomic logic and ease of enjoyment. Rather than breadth for its own sake, we want every wine on the list to have a reason for being there and a place alongside our menu and the room.",
    glassLabel: "Glass 0.15 l",
    bottleLabel: "Bottle 0.75 l",
    groups: [
      {
        title: "Sparkling",
        wines: [
          { name: "Simonnet-Febvre Blanc de Blanc", house: "", desc: "An elegant, refreshing French sparkling wine with fine bubbles and a clean, bright character.", glass: "790", bottle: "3.590" },
        ],
      },
      {
        title: "White",
        wines: [
          { name: "Château Marjosse Blanc", house: "House white", desc: "Dry, firm and very drinkable, with notes of citrus, white fruit, gentle herbal tones and elegant minerality. Great with salads, fish and lighter starters.", glass: "590", bottle: "2.990" },
          { name: "Domaine L'Ostal Chardonnay", house: "", desc: "A Chardonnay with more presence but no oak. Medium-bodied, well balanced and refreshing.", glass: "690", bottle: "3.390" },
          { name: "Michel Lynch Réserve Graves Blanc", house: "", desc: "A more serious white for guests who want more substance. Fuller in texture, with a lovely roundness and a deeper profile.", glass: "", bottle: "4.290" },
        ],
      },
      {
        title: "Rosé",
        wines: [
          { name: "LYV Rosé Pays d'Oc", house: "", desc: "Fresh, dry and thoroughly drinkable rosé — easy to order and even easier to repeat. Ideal for the terrace, an aperitif and easy starts to the evening.", glass: "550", bottle: "2.790" },
        ],
      },
    ],
    red: {
      title: "Red",
      wines: [
        { name: "Château Marjosse Rouge", house: "House red", desc: "Our house red from a private Bordeaux domaine. Drinkable, elegant and very rewarding.", glass: "650", bottle: "3.190" },
        { name: "Domaine Martin Rasteau", house: "Cru Rhône", desc: "Our main gastronomic red with more character. Excellent with shank, lamb and richer red dishes.", glass: "", bottle: "4.490" },
        { name: "Michel Lynch Bordeaux Rouge", house: "", desc: "A classic, elegant Bordeaux expression for guests who want more. Finer in texture, with more substance and deeper structure.", glass: "850", bottle: "4.290" },
      ],
    },
    cellar: {
      title: "From our cellar",
      intro: "A small, carefully chosen selection for more character, depth and presence. Labels we particularly value and gladly set apart in Receptor's offering.",
      wines: [
        { name: "Triptyque Silex", house: "", desc: "A premium white with pronounced mineral character and precision. For guests who seek more character and depth.", glass: "", bottle: "8.900" },
        { name: "Syrah, Rhône", house: "", desc: "A powerful, structured red Syrah — concentrated, spicy and deep. For dinners with richer dishes and conversations that last.", glass: "", bottle: "7.900" },
      ],
    },
    smallprint: "All prices are in RSD and include VAT.",
  },

  pica: {
    hero: {
      title: "Drink Menu",
      sub: "A carefully curated drink selection. Clear, balanced and true to Receptor.",
      intro: "A drink menu designed to feel natural, confident and easy to navigate — with a focused selection that follows the rhythm of the restaurant, from daytime aperitif to evening service.",
    },
    smallprint: "All prices are in RSD and include VAT.",
    groups: [
      { title: "Aperitif / Openers", items: [
        { name: "Aperol Spritz", vol: "", price: "750" },
        { name: "Hugo Spritz", vol: "", price: "750" },
        { name: "Dry Vermouth & Tonic", vol: "", price: "650" },
      ] },
      { title: "Cocktails", items: [
        { name: "Negroni", vol: "", price: "850" },
        { name: "Gin & Tonic", vol: "", price: "750" },
        { name: "Whiskey Sour", vol: "", price: "850" },
        { name: "Espresso Martini", vol: "", price: "950" },
        { name: "French 75", vol: "", price: "950" },
      ] },
      { title: "Beer", items: [
        { name: "House draft", vol: "0.33 l", price: "320" },
        { name: "House draft", vol: "0.50 l", price: "390" },
        { name: "House bottled beer", vol: "0.33 l", price: "390" },
        { name: "Premium imported bottled beer", vol: "0.33 l", price: "450" },
      ] },
      { title: "Whiskey / Whisky", items: [
        { name: "Jameson", vol: "", price: "390" },
        { name: "Johnnie Walker Black Label", vol: "", price: "590" },
        { name: "Jack Daniel's Single Barrel", vol: "", price: "690" },
        { name: "Macallan", vol: "", price: "790" },
      ] },
      { title: "Martini", items: [
        { name: "Martini Bianco", vol: "", price: "390" },
        { name: "Martini Rosso", vol: "", price: "390" },
      ] },
      { title: "Gin", items: [
        { name: "Bombay Sapphire", vol: "", price: "490" },
        { name: "Gin Mare", vol: "", price: "690" },
      ] },
      { title: "Vodka", items: [
        { name: "Finlandia", vol: "", price: "390" },
        { name: "Grey Goose", vol: "", price: "590" },
      ] },
      { title: "Rum", items: [
        { name: "Bacardi Carta Blanca", vol: "", price: "490" },
        { name: "Diplomático Reserva Exclusiva", vol: "", price: "690" },
      ] },
      { title: "Tequila / Agave", items: [
        { name: "Jimador Reposado", vol: "", price: "490" },
      ] },
      { title: "Cognac / Brandy", items: [
        { name: "Rémy Martin VSOP", vol: "", price: "790" },
      ] },
      { title: "Digestifs", items: [
        { name: "Fernet-Branca", vol: "", price: "490" },
        { name: "Amaro Montenegro", vol: "", price: "490" },
      ] },
      { title: "Rakija", items: [
        { name: "House plum rakija", vol: "", price: "360" },
        { name: "House quince", vol: "", price: "420" },
        { name: "House pear / apricot", vol: "", price: "420" },
        { name: "Premium / barrique plum rakija", vol: "", price: "490" },
      ] },
      { title: "Water Rosa", items: [
        { name: "Still water", vol: "0.25 l", price: "290" },
        { name: "Still water", vol: "0.75 l", price: "490" },
        { name: "Sparkling water", vol: "0.25 l", price: "290" },
        { name: "Sparkling water", vol: "0.75 l", price: "490" },
      ] },
      { title: "Soft drinks", items: [
        { name: "Coca-Cola", vol: "0.25 l", price: "350" },
        { name: "Coca-Cola Zero", vol: "0.25 l", price: "350" },
        { name: "Schweppes Bitter Lemon", vol: "0.25 l", price: "350" },
        { name: "Schweppes Tonic Water", vol: "0.25 l", price: "350" },
        { name: "Fanta", vol: "0.25 l", price: "350" },
        { name: "Sprite", vol: "0.25 l", price: "350" },
        { name: "Fuze Tea", vol: "0.25 l", price: "380" },
      ] },
      { title: "Juices Next / Fresh", items: [
        { name: "Orange juice", vol: "0.20 l", price: "350" },
        { name: "Apple juice", vol: "0.20 l", price: "350" },
        { name: "Forest fruits juice", vol: "0.20 l", price: "350" },
        { name: "Strawberry juice", vol: "0.20 l", price: "350" },
        { name: "Peach juice", vol: "0.20 l", price: "350" },
        { name: "Fresh lemonade", vol: "", price: "420" },
        { name: "House iced tea / seasonal lemonade", vol: "", price: "450" },
      ] },
      { title: "Coffee", items: [
        { name: "Espresso", vol: "", price: "270" },
        { name: "Double Espresso", vol: "", price: "350" },
        { name: "Cappuccino", vol: "", price: "320" },
        { name: "Latte", vol: "", price: "350" },
        { name: "Iced Coffee / Iced Latte", vol: "", price: "450" },
      ] },
      { title: "Tea", items: [
        { name: "Tea selection", vol: "", price: "290" },
      ] },
    ],
  },

  business: {
    hero: {
      title: "Business Lunch",
      sub: "A smart choice for meetings, teams and company guests.",
      intro: "A modern, organizationally simple format that delivers a quality lunch, fast and reliable service and a pleasant atmosphere for every business meeting.",
      setLabel: "Business lunch set",
      price: "20",
      priceCur: "EUR + PDV",
      perPerson: "per person",
      priceNote: "Drinks ordered at the bar as consumed.",
    },
    stepsTitle: "Served in three short courses",
    steps: [
      {
        title: "For the table",
        desc: "Warm rustic bread, smoked kajmak butter and citrus urnebes",
        items: ["Small seasonal salad for the table — mixed greens, radish, citrus dressing and seeds"],
      },
      {
        title: "Main course",
        desc: "A pre-set choice for the group or a limited choice on the spot",
        items: [
          "Option I — Chicken fillet with young potato and a mild butter sauce",
          "Option II — Slow-cooked veal, creamy purée and sides",
          "Option III — Pasta with roasted tomato, burrata and basil",
          "Option IV — Mini Receptor burgers, house fries, ajvar and kajmak",
        ],
      },
      {
        title: "Finish",
        desc: "A sweet end with a warm coffee or tea",
        items: ["Cake of the day or hazelnut parfait", "Coffee or tea"],
      },
    ],
    idealTitle: "Ideal for",
    ideal: [
      "Client meetings",
      "Team lunches",
      "Presentations",
      "Daily business events",
      "Informal business meetings",
    ],
  },

  proslave: {
    hero: {
      title: "Events",
      script: "Together. Carefree. With Receptor.",
      intro1: "For private events we recommend a shared format that allows a better atmosphere at the table, a natural flow of service and more relaxed hosting.",
      intro2: "The packages are designed to keep the brasserie character of the restaurant with simple, organizationally efficient service.",
    },
    packagesTitle: "Our packages",
    packageCta: "Learn more",
    packages: [
      {
        name: "Receptor Classic",
        price: "45 EUR + VAT per person",
        desc: "A simple, relaxed event format focused on a good atmosphere, the sharing concept and the grill.",
        features: ["Welcome drink", "Rich selection of grilled dishes", "Drinks package up to 4 hours", "Coffee / tea"],
      },
      {
        name: "Receptor Brasserie",
        price: "55 EUR + VAT per person",
        desc: "A modern, relaxed event format emphasizing the sharing concept, the grill and the riverside brasserie atmosphere.",
        features: ["Welcome drink", "Extended sharing", "Dishes from the grill and the oven", "Drinks package up to 4 hours", "Coffee / tea"],
      },
      {
        name: "Receptor Signature",
        price: "65 EUR + VAT per person",
        desc: "A more elegant format with carefully chosen dishes for sharing, a richer opening table and an extended drinks package.",
        features: ["Welcome aperitif", "Premium opening table", "Brasserie selection dishes", "Extended drinks package up to 4 hours", "Coffee / tea"],
      },
    ],
    custom: {
      title: "Tailored events",
      intro: "We create events to match your wishes.",
      items: [
        "Corporate dinners",
        "Private celebrations",
        "Wine tastings",
        "Intimate dinners",
        "Partial venue hire",
        "Upgraded drinks packages",
        "Custom menus on the host's request",
      ],
    },
    notesTitle: "Good to know",
    notes: [
      "Packages are intended for organized groups and private events",
      "Standard package duration: up to 4 hours",
      "The drinks package covers an event of up to 4 hours",
      "After the planned time, service continues per the regular offering",
      "Extending the event and drinks package is possible by prior arrangement",
      "An advance payment is required to confirm the reservation",
      "The final number of guests is the minimum used for billing",
      "Special requests and tailored events are available on request",
    ],
    closing: "It will be our pleasure to host your celebration, business lunch or private event at Receptor.",
  },

  galerija: {
    hero: {
      title: "Gallery",
      sub: "Atmosphere, food, wine and the terrace — Receptor's evening rhythm.",
    },
    cta: {
      text: "There's always room for one more riverside story.",
      button: "Reserve a table",
    },
  },

  kontakt: {
    hero: {
      title: "Contact",
      script: "We're here for you. See you by the river.",
    },
    brandLine: "Receptor Riverside Brasserie",
    address: {
      label: "Address",
      value: "Karađorđeva 21, Belgrade",
      sub: "Steps from the river, near Kalemegdan",
    },
    phone: { label: "Phone", value: "+381 61 323 0324" },
    phone2: "",
    email: { label: "E-mail", value: "rezervacije@restoranreceptor.rs" },
    hours: {
      label: "Opening hours",
      value: ["Monday – Saturday: 12:00 – 00:00", "Kitchen until 22:30"],
    },
    parking: {
      title: "Parking",
      note: "With a table reservation, your parking space is guaranteed.",
      items: [
        "A parking space secured for every guest",
        "Located right by the restaurant entrance",
        "Reserved together with your table",
      ],
      label: "Receptor Parking",
    },
    form: {
      title: "Send us a message",
      name: "Full name",
      email: "E-mail",
      phone: "Phone",
      date: "Date",
      time: "Time",
      persons: "Number of guests",
      message: "Message",
      consent: "I agree that Receptor may process my data to contact me.",
      submit: "Send inquiry",
      sending: "Sending…",
      success: "Thank you! Your inquiry has been sent — we'll be in touch shortly.",
      error: "Error sending. Please try again or call us.",
    },
    careers: {
      eyebrow: "Careers at Receptor",
      title: "Careers at Receptor",
      script: "The riverside spirit of a working family.",
      text: "We believe in warmth, calm and seriousness in our work. If you recognise that spirit and want to be part of the Receptor story — get in touch, we love meeting new people.",
      positionsTitle: "Open positions",
      positions: ["Chef / Cook", "Bartender / Barista", "Waiter", "Sommelier", "Host", "Restaurant manager"],
      button: "Send application",
      note: "We review applications and messages regularly.",
    },
  },

  footer: {
    tagline: "A riverside brasserie in the heart of Belgrade — dinners by the river, good wine and plates for sharing.",
    reservations: "Reservations",
    copy: "© 2026 Receptor Restaurant. All rights reserved.",
  },
};

/* ------------------------------------------------------------------ */
/*  Russian                                                            */
/* ------------------------------------------------------------------ */

const ru: Dict = {
  brand: { name: "Receptor", tagline: "Riverside Brasserie" },

  nav: {
    pocetna: "Главная",
    meni: "Меню",
    vinska: "Карта вин",
    pica: "Напитки",
    business: "Бизнес-ланч",
    proslave: "Мероприятия",
    galerija: "Галерея",
    kontakt: "Контакт",
  },

  cta: {
    reserve: "Забронировать стол",
    viewMenu: "Смотреть меню",
    businessLunch: "Бизнес-ланч",
    sendInquiry: "Отправить запрос",
    callNow: "Позвонить",
    directions: "Открыть карту",
  },

  common: { from: "от", perPerson: "на человека", currency: "RSD", langLabel: "SR" },

  home: {
    hero: {
      script: "Белградская история риверсайд-брассери.",
      sub: "Ужин у реки, хорошее вино, блюда для компании, бизнес-ланчи и вечера, которые запоминаются.",
      ctaPrimary: "Забронировать стол",
      ctaSecondary: "Смотреть меню",
      ctaCall: "Позвонить",
      info: {
        addr1: "Карагеоргиева 21, Белград",
        addr2: "В двух шагах от реки и Калемегдана",
        hoursTitle: "Понедельник – суббота",
        hours1: "12:00 – 00:00",
        hours2: "Кухня до 22:30",
        reserve: "Для брони на сегодня позвоните напрямую.",
      },
    },
    valuesTitle: "Почему гости приходят в Receptor",
    values: [
      { title: "Бизнес-ланч", text: "Отличный выбор для деловых обедов, встреч и гостей, на которых хотите произвести впечатление." },
      { title: "Ужин у реки", text: "Спокойные, атмосферные вечера с видом на воду, тёплый интерьер и блюда для компании." },
      { title: "Вино и коктейли", text: "Карта напитков и вин, которую легко выбрать и ещё легче заказать." },
      { title: "Частные мероприятия", text: "Дни рождения, деловые встречи и приватные ужины, организованные легко, в меру и с вниманием к деталям." },
    ],
    valuesCta: "Узнать о Receptor",
    blocks: {
      food: {
        title: "Блюда, ради которых хочется ещё бутылку вина.",
        text: "Наше меню ведёт вкус, ритм стола и хороший повод остаться подольше.",
        cta: "Смотреть всё меню",
      },
      drink: {
        title: "Вина и напитки, которые легко заказать и ещё легче запомнить.",
        text: "Кураторская карта вин и коктейли, без лишней суеты.",
        ctaWine: "Карта вин",
        ctaDrinks: "Напитки",
      },
      business: {
        title: "Бизнес-ланч, который не выглядит как компромисс.",
        text: "Умный выбор для встреч — скорость и качество на одной тарелке.",
        bullets: ["Быстро и чётко", "Чисто и качественно", "Приятно, но по-деловому", "Отличное соотношение цены"],
        cta: "Смотреть бизнес-ланч",
      },
    },
    proslaveBlock: {
      title: "Частные и корпоративные мероприятия со вкусом.",
      text: "От небольших приватных ужинов до деловых встреч — подход, который подстраивается под повод и оставляет впечатление.",
      chips: ["Дни рождения", "Годовщины", "Корпоративы", "Командные ужины", "Коктейльные вечера"],
      cta: "Отправить запрос на мероприятие",
    },
    eveningBlock: {
      title: "Когда наступает вечер, Receptor находит свой ритм.",
      text: "По пятницам, субботам и в особые даты — тёплый свет, хорошая музыка и события, которые остаются в рамках хорошего вкуса.",
      cta: "Что у нас происходит",
    },
    galleryTeaser: {
      title: "Атмосфера, которую не объясняют — ради неё приходят.",
      cta: "Смотреть галерею",
    },
    location: {
      title: "В двух шагах от реки. Достаточно близко к центру.",
      text: "Receptor на Карагеоргиевой улице объединяет энергию старого Белграда, близость реки и подход, который делает визит лёгким.",
      parking: "Парковка доступна рядом, а при бронировании ограниченное число мест можно организовать заранее.",
    },
    finalCta: {
      title: "Забронируйте стол. Или расскажите, какой вечер хотите.",
      text: "Для обеда, ужина, деловой встречи или частного события — Receptor готов предложить опыт с мерой, вкусом и поводом вернуться.",
      ctaReserve: "Забронировать стол",
      ctaCall: "Позвонить",
      ctaInquiry: "Отправить запрос",
    },
  },

  meni: {
    hero: {
      title: "Меню",
      sub: "Тщательно отобранные блюда из свежих продуктов, с акцентом на качество, сезонность и подлинный вкус.",
      tagline: "A modern riverside brasserie. Relaxed. Refined. Receptor.",
    },
    note: "Спросите нашу команду о рекомендациях дня и особых сезонных блюдах.",
    smallprint: "Все цены указаны в RSD.  ·  Информация об аллергенах по запросу.  ·  Меню может меняться.",
    colLeft: [
      {
        title: "Закуска Receptor",
        items: [
          { name: "Закуска Receptor", desc: "Деревенский хлеб тост, копчёное масло с сырной намазкой и джем урнебес", price: "250", unit: "на стол", tag: "" },
        ],
      },
      {
        title: "Для аппетита",
        items: [
          { name: "Сыр на гриле с печёным красным перцем и орегано", desc: "Сыр на гриле, печёный красный перец, оливковое масло и орегано", price: "790", unit: "", tag: "" },
          { name: "Брускетты с пршутом, бурратой, вяленым томатом и песто", desc: "Тост, вяленый томат, буррата, негушский пршут и домашнее песто", price: "860", unit: "", tag: "" },
        ],
      },
      {
        title: "Закуски и начало трапезы",
        items: [
          { name: "Суп / Начало дня", desc: "Дневной потаж из сезонных овощей или домашний суп", price: "590", unit: "", tag: "" },
          { name: "Подбор сыров и пршута Receptor", desc: "Выдержанный твёрдый сыр, негушский пршут, копчёный овечий сыр, бальзамик с дроблёным виноградом и маринованные оливки", price: "790 / 1.490", unit: "", tag: "" },
          { name: "Receptor House Salad", desc: "Микс зелёных салатов, рикотта, авокадо, цитрусовая заправка и зёрна граната", price: "890", unit: "", tag: "вегетарианское" },
          { name: "Дополнения", desc: "Курица на гриле +390  ·  Буррата +490", price: "", unit: "", tag: "" },
          { name: "Паста с печёным томатом и бурратой", desc: "Домашняя паста с печёным томатом, бурратой, базиликом и цедрой лимона", price: "1.390", unit: "", tag: "вегетарианское" },
          { name: "Тартар из говядины, масло, кумин и пармезан", desc: "Сочная говядина, сливочно-масляный соус, лёгкая нотка кумина и пармезан", price: "1.490", unit: "", tag: "" },
          { name: "Лимонно-травяной ризотто с молодыми овощами", desc: "Кремовый ризотто с лимоном, спаржей, романо и нарезанными овощами", price: "1.190", unit: "", tag: "вегетарианское" },
          { name: "Курица и кремовый ризотто", desc: "Ризотто с молодыми овощами, курицей и лёгким масляным соусом", price: "1.290", unit: "", tag: "" },
        ],
      },
    ],
    colRight: [
      {
        title: "Основные блюда",
        items: [
          { name: "Курица на гриле, лимонное масло и молодой картофель", desc: "Курица на гриле, лимонное масло, брокколи и молодой картофель", price: "1.490", unit: "", tag: "" },
          { name: "Телятина с молодым картофелем", desc: "Медленно приготовленная телятина, молодой картофель и натуральный соус из жаркого", price: "1.990", unit: "", tag: "" },
          { name: "Плескавица Receptor", desc: "Котлета из говядины, домашний картофель фри, айвар, каймак и слегка маринованный красный лук", price: "1.390", unit: "", tag: "" },
          { name: "Голень Receptor", desc: "Тушёная голень в каймаке, обжаренный картофель и зелёный лук", price: "1.790", unit: "", tag: "" },
          { name: "Глазированная ягнятина Receptor", desc: "Рёбрышки ягнёнка, молодой картофель и натуральный соус", price: "2.390", unit: "", tag: "" },
        ],
      },
      {
        title: "Для стола / Signature share",
        items: [
          { name: "Глазированная ягнятина на стол", desc: "Конфи из ягнёнка, молодой картофель, грибы и йогурт тимут", price: "4.090", unit: "2 человека", tag: "" },
          { name: "Brasserie steak & frites", desc: "Говяжий стейк, домашний фри и деми-глясе", price: "4.490", unit: "2 человека", tag: "" },
          { name: "Плескавица Receptor на стол", desc: "Плескавица на компанию, домашний фри, урнебес и каймак", price: "2.490", unit: "2 человека", tag: "" },
        ],
      },
      {
        title: "Салаты",
        items: [
          { name: "Зелёный салат Receptor", desc: "Микс зелёных салатов, руккола и домашняя заправка", price: "490", unit: "", tag: "вегетарианское" },
          { name: "Томатный салат с красным луком", desc: "Томат, маринованный красный лук и оливковое масло", price: "490", unit: "", tag: "веган, вегетарианское" },
          { name: "Томатный салат с сыром", desc: "Томат, местный сыр и оливковое масло", price: "490", unit: "", tag: "вегетарианское" },
          { name: "Капустный салат", desc: "Свежая капуста и лёгкая домашняя заправка", price: "300", unit: "", tag: "вегетарианское" },
        ],
      },
      {
        title: "Сладкий финал",
        items: [
          { name: "Холодный фундучный парфе", desc: "Кремовый холодный парфе из фундука с лёгкой карамелью и обжаренным фундуком", price: "690", unit: "", tag: "" },
          { name: "Маковый торт, ваниль, крем и цитрус", desc: "Сочный маковый торт, ванильный крем и цитрусовый финал", price: "690", unit: "", tag: "вегетарианское" },
          { name: "Торт дня / сезонные фрукты", desc: "", price: "690", unit: "", tag: "" },
        ],
      },
    ],
  },

  vino: {
    hero: {
      title: "Карта вин",
      sub: "Тщательно отобранная винная карта. Компактная. Элегантная. С намерением.",
    },
    philosophyTitle: "Наша винная философия",
    philosophyText:
      "Карта вин Receptor задумана как тщательно отобранная и намеренно компактная подборка, с опорой на французский стиль, гастрономическую логику и лёгкость удовольствия. Вместо широты ради широты, мы хотим, чтобы у каждого вина был повод быть здесь и место рядом с нашим меню и атмосферой зала.",
    glassLabel: "Бокал 0,15 л",
    bottleLabel: "Бутылка 0,75 л",
    groups: [
      {
        title: "Игристое",
        wines: [
          { name: "Simonnet-Febvre Blanc de Blanc", house: "", desc: "Элегантное и освежающее французское игристое с тонким перляжем и чистым, светлым характером.", glass: "790", bottle: "3.590" },
        ],
      },
      {
        title: "Белое",
        wines: [
          { name: "Château Marjosse Blanc", house: "House white", desc: "Сухое, плотное и очень питкое, с нотами цитруса, белых фруктов, лёгких трав и элегантной минеральности. Идеально к салатам, рыбе и лёгким закускам.", glass: "590", bottle: "2.990" },
          { name: "Domaine L'Ostal Chardonnay", house: "", desc: "Шардоне с большим телом, но без дуба. Среднего тела, сбалансированное и освежающее.", glass: "690", bottle: "3.390" },
          { name: "Michel Lynch Réserve Graves Blanc", house: "", desc: "Более серьёзное белое для гостей, которым нужно больше содержания. Полнее по текстуре, с приятной округлостью и глубоким профилем.", glass: "", bottle: "4.290" },
        ],
      },
      {
        title: "Розе",
        wines: [
          { name: "LYV Rosé Pays d'Oc", house: "", desc: "Свежее, сухое и очень питкое розе — легко заказать и ещё легче повторить. Идеально для террасы, аперитива и лёгкого начала вечера.", glass: "550", bottle: "2.790" },
        ],
      },
    ],
    red: {
      title: "Красное",
      wines: [
        { name: "Château Marjosse Rouge", house: "House red", desc: "Наше домашнее красное из частного бордоского хозяйства. Питкое, элегантное и очень благодарное.", glass: "650", bottle: "3.190" },
        { name: "Domaine Martin Rasteau", house: "Cru Rhône", desc: "Наш основной гастрономический красный с более выраженным характером. Отлично к голени, баранине и насыщенным красным блюдам.", glass: "", bottle: "4.490" },
        { name: "Michel Lynch Bordeaux Rouge", house: "", desc: "Классическое и элегантное бордоское выражение для тех, кто хочет больше. Тоньше по текстуре, с большим содержанием и глубиной.", glass: "850", bottle: "4.290" },
      ],
    },
    cellar: {
      title: "Из нашего погреба",
      intro: "Небольшая, тщательно отобранная подборка для большего характера, глубины и присутствия. Этикетки, которые мы особенно ценим и с радостью выделяем в карте Receptor.",
      wines: [
        { name: "Triptyque Silex", house: "", desc: "Премиальное белое с выраженным минеральным характером и точностью. Для тех, кто ищет больше характера и глубины.", glass: "", bottle: "8.900" },
        { name: "Syrah, Rhône", house: "", desc: "Мощный, структурный красный Syrah — концентрированный, пряный и глубокий. Для ужинов с насыщенными блюдами и долгими беседами.", glass: "", bottle: "7.900" },
      ],
    },
    smallprint: "Все цены указаны в RSD и включают НДС.",
  },

  pica: {
    hero: {
      title: "Карта напитков",
      sub: "Тщательно подобранная карта напитков. Чистая, сбалансированная и в духе Receptor-a.",
      intro: "Карта напитков, созданная, чтобы быть естественной, уверенной и понятной — с продуманной подборкой, которая следует ритму ресторана, от дневного аперитива до вечернего сервиса.",
    },
    smallprint: "Цены указаны в RSD и включают НДС.",
    groups: [
      { title: "Aperitif / Openers", items: [
        { name: "Aperol Spritz", vol: "", price: "750" },
        { name: "Hugo Spritz", vol: "", price: "750" },
        { name: "Dry Vermouth & Tonic", vol: "", price: "650" },
      ] },
      { title: "Cocktails", items: [
        { name: "Negroni", vol: "", price: "850" },
        { name: "Gin & Tonic", vol: "", price: "750" },
        { name: "Whiskey Sour", vol: "", price: "850" },
        { name: "Espresso Martini", vol: "", price: "950" },
        { name: "French 75", vol: "", price: "950" },
      ] },
      { title: "Пиво", items: [
        { name: "Разливное домашнее", vol: "0,33 л", price: "320" },
        { name: "Разливное домашнее", vol: "0,50 л", price: "390" },
        { name: "Домашнее бутылочное пиво", vol: "0,33 л", price: "390" },
        { name: "Премиум импортное бутылочное пиво", vol: "0,33 л", price: "450" },
      ] },
      { title: "Whiskey / Whisky", items: [
        { name: "Jameson", vol: "", price: "390" },
        { name: "Johnnie Walker Black Label", vol: "", price: "590" },
        { name: "Jack Daniel's Single Barrel", vol: "", price: "690" },
        { name: "Macallan", vol: "", price: "790" },
      ] },
      { title: "Martini", items: [
        { name: "Martini Bianco", vol: "", price: "390" },
        { name: "Martini Rosso", vol: "", price: "390" },
      ] },
      { title: "Gin", items: [
        { name: "Bombay Sapphire", vol: "", price: "490" },
        { name: "Gin Mare", vol: "", price: "690" },
      ] },
      { title: "Vodka", items: [
        { name: "Finlandia", vol: "", price: "390" },
        { name: "Grey Goose", vol: "", price: "590" },
      ] },
      { title: "Rum", items: [
        { name: "Bacardi Carta Blanca", vol: "", price: "490" },
        { name: "Diplomático Reserva Exclusiva", vol: "", price: "690" },
      ] },
      { title: "Tequila / Agave", items: [
        { name: "Jimador Reposado", vol: "", price: "490" },
      ] },
      { title: "Cognac / Brandy", items: [
        { name: "Rémy Martin VSOP", vol: "", price: "790" },
      ] },
      { title: "Digestifs", items: [
        { name: "Fernet-Branca", vol: "", price: "490" },
        { name: "Amaro Montenegro", vol: "", price: "490" },
      ] },
      { title: "Ракия", items: [
        { name: "Домашняя сливовая", vol: "", price: "360" },
        { name: "Домашняя айвовая", vol: "", price: "420" },
        { name: "Домашняя грушевая / абрикосовая", vol: "", price: "420" },
        { name: "Премиум / barrique сливовая", vol: "", price: "490" },
      ] },
      { title: "Вода Rosa", items: [
        { name: "Негазированная вода", vol: "0,25 л", price: "290" },
        { name: "Негазированная вода", vol: "0,75 л", price: "490" },
        { name: "Газированная вода", vol: "0,25 л", price: "290" },
        { name: "Газированная вода", vol: "0,75 л", price: "490" },
      ] },
      { title: "Безалкогольные напитки", items: [
        { name: "Coca-Cola", vol: "0,25 л", price: "350" },
        { name: "Coca-Cola Zero", vol: "0,25 л", price: "350" },
        { name: "Schweppes Bitter Lemon", vol: "0,25 л", price: "350" },
        { name: "Schweppes Tonic Water", vol: "0,25 л", price: "350" },
        { name: "Fanta", vol: "0,25 л", price: "350" },
        { name: "Sprite", vol: "0,25 л", price: "350" },
        { name: "Fuze Tea", vol: "0,25 л", price: "380" },
      ] },
      { title: "Соки Next / Fresh", items: [
        { name: "Апельсиновый сок", vol: "0,20 л", price: "350" },
        { name: "Яблочный сок", vol: "0,20 л", price: "350" },
        { name: "Сок из лесных ягод", vol: "0,20 л", price: "350" },
        { name: "Клубничный сок", vol: "0,20 л", price: "350" },
        { name: "Персиковый сок", vol: "0,20 л", price: "350" },
        { name: "Свежий лимонад", vol: "", price: "420" },
        { name: "Домашний холодный чай / сезонный лимонад", vol: "", price: "450" },
      ] },
      { title: "Кофе", items: [
        { name: "Espresso", vol: "", price: "270" },
        { name: "Double Espresso", vol: "", price: "350" },
        { name: "Cappuccino", vol: "", price: "320" },
        { name: "Latte", vol: "", price: "350" },
        { name: "Iced Coffee / Iced Latte", vol: "", price: "450" },
      ] },
      { title: "Чай", items: [
        { name: "Подборка чаёв", vol: "", price: "290" },
      ] },
    ],
  },

  business: {
    hero: {
      title: "Business Lunch",
      sub: "Умный выбор для встреч, команд и гостей компании.",
      intro: "Современный, организационно простой формат, который обеспечивает качественный обед, быстрый и надёжный сервис и приятную атмосферу для любой деловой встречи.",
      setLabel: "Business lunch set",
      price: "20",
      priceCur: "EUR + PDV",
      perPerson: "на человека",
      priceNote: "Напитки заказываются у бара по мере потребления.",
    },
    stepsTitle: "Подаётся в три коротких подачи",
    steps: [
      {
        title: "Для стола",
        desc: "Тёплый деревенский хлеб, копчёное масло каймак и цитрусовый урнебес",
        items: ["Небольшой сезонный салат на стол — микс зелёных салатов, редис, цитрусовая заправка и семена"],
      },
      {
        title: "Основная подача",
        desc: "Заранее выбранный вариант для группы или ограниченный выбор на месте",
        items: [
          "Вариант I — Куриное филе с молодым картофелем и лёгким масляным соусом",
          "Вариант II — Медленно приготовленная телятина, кремовое пюре и гарниры",
          "Вариант III — Паста с печёным томатом, бурратой и базиликом",
          "Вариант IV — Мини-плескавицы Receptor, домашний фри, айвар и каймак",
        ],
      },
      {
        title: "Финал",
        desc: "Сладкое завершение с тёплым кофе или чаем",
        items: ["Торт дня или фундучный парфе", "Кофе или чай"],
      },
    ],
    idealTitle: "Идеально для",
    ideal: [
      "Встреч с клиентами",
      "Командных обедов",
      "Презентаций",
      "Ежедневных деловых событий",
      "Неформальных деловых встреч",
    ],
  },

  proslave: {
    hero: {
      title: "Мероприятия",
      script: "Вместе. Без забот. С Receptor.",
      intro1: "Для частных мероприятий мы рекомендуем общий формат, который создаёт лучшую атмосферу за столом, естественный ход сервиса и более расслабленное гостеприимство.",
      intro2: "Пакеты составлены так, чтобы сохранить характер брассери при простом и организационно эффективном сервисе.",
    },
    packagesTitle: "Наши пакеты",
    packageCta: "Узнать больше",
    packages: [
      {
        name: "Receptor Classic",
        price: "45 EUR + НДС с человека",
        desc: "Простой и расслабленный формат с акцентом на хорошую атмосферу, концепцию share и гриль.",
        features: ["Приветственный напиток", "Богатый выбор блюд с гриля", "Пакет напитков до 4 часов", "Кофе / чай"],
      },
      {
        name: "Receptor Brasserie",
        price: "55 EUR + НДС с человека",
        desc: "Современный и расслабленный формат с акцентом на share, гриль и риверсайд-атмосферу брассери.",
        features: ["Приветственный напиток", "Расширенный share", "Блюда с гриля и из печи", "Пакет напитков до 4 часов", "Кофе / чай"],
      },
      {
        name: "Receptor Signature",
        price: "65 EUR + НДС с человека",
        desc: "Более элегантный формат с тщательно отобранными блюдами для share, богаче вступительным столом и расширенным пакетом напитков.",
        features: ["Приветственный аперитив", "Премиальный вступительный стол", "Блюда brasserie selection", "Расширенный пакет напитков до 4 часов", "Кофе / чай"],
      },
    ],
    custom: {
      title: "Индивидуальные мероприятия",
      intro: "Создаём мероприятия по вашим пожеланиям.",
      items: [
        "Корпоративные ужины",
        "Частные торжества",
        "Винные дегустации",
        "Камерные ужины",
        "Частичная аренда зала",
        "Расширенные пакеты напитков",
        "Особые меню по запросу хозяина",
      ],
    },
    notesTitle: "Важные примечания",
    notes: [
      "Пакеты рассчитаны на организованные группы и частные мероприятия",
      "Стандартная продолжительность пакета: до 4 часов",
      "Пакет напитков рассчитан на мероприятие до 4 часов",
      "После окончания запланированного времени сервис продолжается по обычному предложению",
      "Продление мероприятия и пакета напитков возможно по предварительной договорённости",
      "Для подтверждения брони требуется предоплата",
      "Окончательное число гостей — минимум для расчёта",
      "Особые запросы и индивидуальные мероприятия доступны по запросу",
    ],
    closing: "Будем рады принять ваше торжество, деловой обед или частное мероприятие в Receptor.",
  },

  galerija: {
    hero: {
      title: "Галерея",
      sub: "Атмосфера, еда, вино и терраса — вечерний ритм Receptor.",
    },
    cta: {
      text: "Всегда найдётся место для ещё одной риверсайд-истории.",
      button: "Забронировать стол",
    },
  },

  kontakt: {
    hero: {
      title: "Контакт",
      script: "Мы здесь для вас. Увидимся на берегу.",
    },
    brandLine: "Receptor Riverside Brasserie",
    address: {
      label: "Адрес",
      value: "Карагеоргиева 21, Белград",
      sub: "В двух шагах от реки и Калемегдана",
    },
    phone: { label: "Телефон", value: "+381 61 323 0324" },
    phone2: "",
    email: { label: "E-mail", value: "rezervacije@restoranreceptor.rs" },
    hours: {
      label: "Часы работы",
      value: ["Понедельник – суббота: 12:00 – 00:00", "Кухня до 22:30"],
    },
    parking: {
      title: "Парковка",
      note: "При бронировании стола парковочное место для вас гарантировано.",
      items: [
        "Парковочное место для каждого гостя",
        "Расположена прямо у входа в ресторан",
        "Бронируется вместе со столом",
      ],
      label: "Receptor Parking",
    },
    form: {
      title: "Напишите нам сообщение",
      name: "Имя и фамилия",
      email: "E-mail",
      phone: "Телефон",
      date: "Дата",
      time: "Время",
      persons: "Число гостей",
      message: "Сообщение",
      consent: "Согласен(на) на обработку моих данных компанией Receptor для связи.",
      submit: "Отправить запрос",
      sending: "Отправка…",
      success: "Спасибо! Ваш запрос отправлен — мы свяжемся с вами в ближайшее время.",
      error: "Ошибка при отправке. Попробуйте снова или позвоните нам.",
    },
    careers: {
      eyebrow: "Карьера в Receptor",
      title: "Карьера в Receptor",
      script: "Риверсайд-дух рабочей семьи.",
      text: "Мы верим в тепло, спокойствие и серьёзность в работе. Если вы узнаёте этот дух и хотите стать частью истории Receptor — напишите нам, мы рады новым людям.",
      positionsTitle: "Открытые позиции",
      positions: ["Повар / Chef", "Бармен / Бариста", "Официант", "Сомелье", "Хостес", "Менеджер ресторана"],
      button: "Отправить заявку",
      note: "Мы регулярно рассматриваем заявки и сообщения.",
    },
  },

  footer: {
    tagline: "Риверсайд-брассери в сердце Белграда — ужины у реки, хорошее вино и блюда для компании.",
    reservations: "Бронирование",
    copy: "© 2026 Receptor Restaurant. Все права защищены.",
  },
};

export const translations: Record<Lang, Dict> = { sr, en, ru };
