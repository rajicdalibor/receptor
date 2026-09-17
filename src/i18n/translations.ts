export type Lang = "sr" | "en" | "ru";

/* ------------------------------------------------------------------
   Serbian (default) — full content, 1:1 with the BBQ & Brasserie
   presentation. The English and Russian objects are typed to match
   this exact shape, so all languages stay in sync.

   NOTE: en/ru are temporary aliases of sr while the redesign is being
   built and visually verified. Real EN/RU translations land in a
   dedicated pass once the SR layout is approved.
------------------------------------------------------------------- */

const sr = {
  brand: {
    name: "Receptor",
    tagline: "BBQ & Brasserie",
  },

  nav: {
    pocetna: "Home",
    meni: "Jelovnik",
    vinska: "Vinska karta",
    pica: "Karta pića",
    business: "Business Lunch",
    proslave: "Proslave",
    galerija: "Galerija",
    kontakt: "Kontakt",
  },

  cta: {
    reserve: "Rezerviši sto",
    viewMenu: "Pogledaj jelovnik",
    sendInquiry: "Pošalji upit",
    callNow: "Pozovi",
    directions: "Otvori mapu",
    contact: "Kontakt",
    events: "Proslave",
    map: "Mapa",
    learnMore: "Saznaj više",
  },

  common: {
    currency: "din",
    perTable: "po stolu",
    langLabel: "EN",
  },

  /* Brand strip under the hero */
  strip: ["Grill", "Smoke", "Wine", "Beer", "Sharing"],

  /* ----------------------------- HOME ----------------------------- */
  home: {
    hero: {
      eyebrow: "Karađorđeva 21 · Beograd",
      title: "Receptor.",
      brandline: "BBQ & Brasserie",
      text: "Grill, Low & Slow jela i tanjiri za deljenje, uz dobru vinsku kartu, pivo i klasične koktele.",
      ctaMenu: "Pogledaj jelovnik",
      ctaReserve: "Rezerviši sto",
    },
    intro: {
      eyebrow: "Receptor BBQ & Brasserie",
      title: "Grill je u centru naše kuhinje.",
      p1: "Čevapi, domaće kobasice, punjena vešalica i sous-vide piletina čine osnovu ponude sa roštilja, uz Low & Slow jela, priloge i plate za deljenje.",
      p2: "Receptor je podjednako dobar izbor za ručak, večeru sa društvom i organizovane privatne ili poslovne događaje.",
    },
    offer: {
      eyebrow: "Ponuda",
      title: "Pogledajte šta nudimo.",
      cards: [
        { num: "01", label: "Jelovnik", title: "Hrana", text: "Aktuelni meni sa jelima sa grila, Low & Slow ponudom, prilozima, salatama i jelima za deljenje.", to: "/meni" },
        { num: "02", label: "Vinska karta", title: "Vino", text: "Vina na čašu i bocu, izabrana tako da dobro prate jelovnik.", to: "/vinska-karta" },
        { num: "03", label: "Karta pića", title: "Bar", text: "Kokteli, rakije, pivo, bezalkoholna pića i kafa.", to: "/karta-pica" },
        { num: "04", label: "Proslave", title: "Događaji", text: "Ponude za privatne večere, jubileje i poslovna okupljanja.", to: "/proslave" },
      ],
    },
    events: {
      eyebrow: "Privatni i poslovni događaji",
      title: "Večere, jubileji i okupljanja.",
      text: "Za privatne i poslovne događaje nudimo set menije, bife i koktel format. Ponude su definisane po osobi i mogu se prilagoditi tipu događaja i broju gostiju.",
      prices: [
        { label: "Koktel", value: "45 EUR" },
        { label: "Set meni I", value: "55 EUR" },
        { label: "Set meni II", value: "75 EUR" },
      ],
    },
    cta: {
      eyebrow: "Rezervacije i kontakt",
      title: "Rezervišite sto ili pošaljite upit za događaj.",
      text: "Za rezervaciju i organizaciju događaja kontaktirajte nas direktno.",
      ctaReserve: "Rezerviši sto",
      ctaContact: "Kontakt",
    },
  },

  /* --------------------------- JELOVNIK --------------------------- */
  meni: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Grill · Smoke · Wine · Beer",
      title: "Jelovnik",
      sub: "Grill, Low & Slow, jela za deljenje, prilozi i deserti.",
    },
    columns: [
      [
        {
          title: "Za početak",
          items: [
            { name: "Namaz od čvaraka i domaći kajmak", desc: "", price: "340" },
          ],
        },
        {
          title: "Topla predjela",
          items: [
            { name: "Pohovana paprika", desc: "Punjena domaćim sirom i špinatom, uz Receptor tartar", price: "590" },
            { name: "Grilovani rtanjski škripavac", desc: "Rtanjski sir sa grila, uz pečenu crvenu papriku", price: "620" },
            { name: "Grilovane šljive u pančeti", desc: "Punjene orasima, uz sos od plavog sira", price: "690" },
          ],
        },
        {
          title: "Sa roštilja",
          items: [
            { name: "Ćevapi · 5 komada", desc: "Ćevapi od junećeg mesa, po receptu kuće", price: "630" },
            { name: "Ćevapi · 10 komada", desc: "Ćevapi od junećeg mesa, po receptu kuće", price: "990" },
            { name: "Domaće kobasice", desc: "Selekcija domaćih kobasica sa grila", price: "1.390" },
            { name: "Pljeskavica", desc: "Juneća pljeskavica sa crnim lukom", price: "1.390" },
            { name: "Receptor pljeskavica", desc: "Gurmanska pljeskavica po receptu kuće", price: "1.550" },
            { name: "Steakhouse punjena vešalica", desc: "Punjena vešalica obavijena pančetom i zapečena na grilu", price: "1.790" },
            { name: "Buffalo Wings & Receptor BBQ", desc: "Pileća krilca uz Buffalo sos i Receptor BBQ dip", price: "620 / 1.190" },
          ],
        },
      ],
      [
        {
          title: "Low & Slow",
          items: [
            { name: "Sous-vide piletina", desc: "Pileći file pripremljen sous-vide tehnikom i završen na grilu", price: "1.290" },
            { name: "Drpana buttica", desc: "Sporo pečena svinjska buttica sa kajmakom i hrskavim lukom", price: "1.490" },
            { name: "Juneći gulaš sa sušenim vrganjima", desc: "Juneće meso sporo kuvano sa sušenim vrganjima", price: "1.690" },
            { name: "Sporo pečena teletina", desc: "Mlada teletina sa krompirom i cveklom", price: "2.390" },
          ],
        },
        {
          title: "Plate za deljenje",
          items: [
            { name: "Receptor Grill plata", desc: "Za 2–3 osobe: ćevapi, kobasice i Buffalo Wings, uz priloge i sosove", price: "4.490" },
            { name: "Receptor Signature", desc: "Za 2 osobe: pohovana paprika, punjena vešalica, teletina i drpana buttica", price: "4.990" },
          ],
        },
        {
          title: "Salate",
          items: [
            { name: "Moravska salata", desc: "Pečena paprika, paradajz, crni i beli luk i sir", price: "410" },
            { name: "Receptor crvena", desc: "Cvekla, pečena paprika, kiseli krastavac, ljubičasti luk i orasi", price: "350" },
            { name: "Sezonska salata", desc: "Sveža salata od sezonskog povrća", price: "350" },
          ],
        },
      ],
      [
        {
          title: "Prilozi",
          items: [
            { name: "Pečeni krompir", desc: "", price: "390" },
            { name: "Pire krompir", desc: "", price: "390" },
            { name: "Aromatizovani zapečeni pasulj", desc: "", price: "490" },
            { name: "Lepinja sa roštilja", desc: "", price: "220" },
            { name: "Domaći kajmak", desc: "", price: "190" },
          ],
        },
        {
          title: "Sosovi",
          items: [
            { name: "Receptor BBQ", desc: "", price: "190" },
            { name: "Buffalo", desc: "", price: "190" },
            { name: "Med, senf i đumbir", desc: "", price: "190" },
            { name: "Receptor tartar", desc: "", price: "190" },
          ],
        },
        {
          title: "Deserti",
          items: [
            { name: "Sladoled", desc: "Izbor sladoleda sa sezonskim voćem i prelivom od vanile", price: "390" },
            { name: "Parfe od lešnika", desc: "Kremasti parfe od lešnika sa čokoladnim kramblom", price: "490" },
          ],
        },
      ],
    ],
    note: {
      title: "Napomena",
      text: "Informacije o sastavu jela i alergenima dostupne su kod osoblja. Sve cene su u dinarima i uključuju PDV.",
    },
  },

  /* -------------------------- VINSKA KARTA ------------------------- */
  vino: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Wine",
      title: "Vinska karta",
      sub: "Izbor vina na čašu i bocu.",
    },
    glassLabel: "Čaša · 0,15 l",
    bottleLabel: "Flaša · 0,75 l",
    columns: [
      [
        {
          title: "Penušavo vino",
          wines: [
            { name: "Simonnet-Febvre Blanc de Blancs", glass: "720", bottle: "3.600" },
          ],
        },
        {
          title: "Bela vina",
          wines: [
            { name: "Aleksić Sevdah", glass: "470", bottle: "2.350" },
            { name: "Lastar Tamjanika", glass: "650", bottle: "3.250" },
            { name: "Karić Adria", glass: "", bottle: "3.900" },
          ],
        },
      ],
      [
        {
          title: "Crvena vina",
          wines: [
            { name: "Aleksić Kardaš", glass: "520", bottle: "2.600" },
            { name: "Karić Adria", glass: "690", bottle: "3.450" },
            { name: "Deurić Probus", glass: "", bottle: "4.250" },
          ],
        },
        {
          title: "Roze vina",
          wines: [
            { name: "Aleksić Mozaik", glass: "470", bottle: "2.350" },
            { name: "LYV Rosé Pays d'Oc", glass: "580", bottle: "2.900" },
          ],
        },
      ],
    ],
    info: {
      eyebrow: "Vino u Receptoru",
      title: "Kratka karta, napravljena da prati hranu.",
      text: "Vina su dostupna na čašu ili bocu, u zavisnosti od etikete.",
    },
    smallprint: "Cene uključuju PDV. Alkoholna pića služe se isključivo punoletnim gostima.",
  },

  /* --------------------------- KARTA PIĆA -------------------------- */
  pica: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Drinks",
      title: "Karta pića",
      sub: "Aperitivi, kokteli, pivo, jaka pića, bezalkoholna pića, kafa i čaj.",
    },
    columns: [
      [
        {
          title: "Aperitivi",
          items: [
            { name: "Aperol Spritz", price: "750" },
            { name: "Hugo Spritz", price: "750" },
            { name: "Dry Vermouth & Tonic", price: "650" },
            { name: "Martini Bianco · 0,03 l", price: "390" },
            { name: "Martini Rosso · 0,03 l", price: "390" },
          ],
        },
        {
          title: "Kokteli",
          items: [
            { name: "Negroni", price: "850" },
            { name: "Tom Collins", price: "750" },
            { name: "Whiskey Sour", price: "850" },
            { name: "Espresso Martini", price: "850" },
            { name: "French 75", price: "850" },
          ],
        },
        {
          title: "Pivo",
          items: [
            { name: "Zaječarsko točeno · 0,33 l", price: "320" },
            { name: "Zaječarsko točeno · 0,50 l", price: "390" },
            { name: "Krušovice tamno · 0,33 l", price: "390" },
            { name: "Kapuziner pšenično · 0,50 l", price: "550" },
          ],
        },
        {
          title: "Viski · 0,03 l",
          items: [
            { name: "Jameson", price: "390" },
            { name: "Johnnie Walker Black Label", price: "590" },
            { name: "Jack Daniel's Single Barrel", price: "690" },
            { name: "The Macallan 12 Y.O.", price: "990" },
          ],
        },
      ],
      [
        {
          title: "Džin · 0,03 l",
          items: [
            { name: "Bombay", price: "390" },
            { name: "Gin Mare", price: "690" },
          ],
        },
        {
          title: "Vodka · 0,03 l",
          items: [
            { name: "Finlandia", price: "390" },
            { name: "Grey Goose", price: "790" },
          ],
        },
        {
          title: "Rum · 0,03 l",
          items: [
            { name: "Bacardi Carta Blanca", price: "390" },
            { name: "Diplomático Reserva Exclusiva", price: "890" },
          ],
        },
        {
          title: "Tekila / Agava · 0,03 l",
          items: [
            { name: "El Jimador Blanco", price: "490" },
            { name: "El Jimador Reposado", price: "590" },
          ],
        },
        {
          title: "Konjak i brendi · 0,03 l",
          items: [
            { name: "Courvoisier V.S.", price: "690" },
            { name: "Rémy Martin V.S.O.P.", price: "990" },
          ],
        },
        {
          title: "Dižestivi · 0,03 l",
          items: [
            { name: "Gorki List", price: "390" },
            { name: "Amaro Montenegro", price: "490" },
          ],
        },
        {
          title: "Rakija · 0,03 l",
          items: [
            { name: "Rtanjska šljivovica", price: "420" },
            { name: "Rtanjska dunja", price: "420" },
            { name: "Rtanjska kajsija", price: "420" },
            { name: "Gorda šljivovica", price: "520" },
            { name: "Gorda kruška", price: "520" },
          ],
        },
      ],
      [
        {
          title: "Voda",
          items: [
            { name: "Rosa negazirana · 0,33 l", price: "290" },
            { name: "Rosa negazirana · 0,70 l", price: "490" },
            { name: "Rosa gazirana · 0,33 l", price: "290" },
            { name: "Rosa gazirana · 0,70 l", price: "490" },
          ],
        },
        {
          title: "Bezalkoholna pića",
          items: [
            { name: "Coca-Cola / Coca-Cola Zero · 0,25 l", price: "350" },
            { name: "Fanta / Sprite · 0,25 l", price: "350" },
            { name: "Schweppes Bitter Lemon · 0,25 l", price: "350" },
            { name: "Schweppes Tonic Water · 0,25 l", price: "350" },
          ],
        },
        {
          title: "Sokovi",
          items: [
            { name: "Next · 0,20 l", price: "350" },
            { name: "Limunada", price: "420" },
            { name: "FuzeTea breskva · 0,25 l", price: "350" },
          ],
        },
        {
          title: "Kafa",
          items: [
            { name: "Espresso", price: "270" },
            { name: "Dupli espresso", price: "350" },
            { name: "Cappuccino", price: "320" },
            { name: "Latte", price: "350" },
            { name: "Ledena kafa ili ledeni latte", price: "450" },
          ],
        },
        {
          title: "Čaj",
          items: [
            { name: "Izbor čajeva", price: "290" },
          ],
        },
      ],
    ],
    smallprint: "Cene su izražene u dinarima i uključuju PDV. Alkoholna pića služe se isključivo punoletnim gostima.",
  },

  /* ------------------------- BUSINESS LUNCH ------------------------ */
  business: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Daytime dining",
      title: "Business Lunch",
      sub: "Poslovni ručak bez komplikovanja.",
    },
    intro: {
      eyebrow: "Za poslovni ručak",
      title: "Dobar sto, brz dogovor i efikasan servis.",
      text: "Receptor može da bude jednostavno mesto za sastanak uz ručak — bez posebnog protokola i bez fiksnog paketa. Rezervišite sto, a za grupu možemo unapred dogovoriti uži izbor jela radi bržeg servisa.",
    },
    cards: [
      { num: "01", title: "Brži servis", text: "Za poslovni ručak možemo unapred dogovoriti izbor jela za sto ili grupu, kako bi servis bio jednostavniji i brži." },
      { num: "02", title: "Rezervacija unapred", text: "Sto se može rezervisati za sastanak, ručak sa klijentom ili timom, uz dogovor oko broja gostiju i načina serviranja." },
      { num: "03", title: "Fleksibilno", text: "Nema obaveznog Business Lunch paketa. Gosti mogu birati iz regularnog jelovnika ili unapred dogovorenog užeg izbora." },
    ],
    practical: {
      eyebrow: "Praktično za poslovni dan",
      title: "Kratko zadržavanje ili duži sastanak.",
    },
    mini: [
      { title: "Ručak sa klijentom", text: "Rezervacija stola i regularan à la carte izbor." },
      { title: "Timski ručak", text: "Mogućnost unapred dogovorenog izbora jela za grupu." },
      { title: "Manji sastanak", text: "Diskretan dnevni termin uz kafu, ručak ili čašu vina." },
      { title: "Veća grupa", text: "Za organizovanje grupe pripremamo predlog formata na upit." },
    ],
    note: {
      eyebrow: "Dolazak i organizacija",
      title: "Dogovor pre dolaska štedi vreme.",
      text: "Ako dolazite poslovno, preporučujemo rezervaciju unapred. Po potrebi možemo pomoći oko organizacije stola, tempa serviranja i praktičnih informacija o dolasku i parkingu u okolini.",
    },
    band: {
      eyebrow: "Business Lunch",
      title: "Rezervišite sto ili pošaljite upit.",
      text: "Za veće grupe i privatne događaje pogledajte ponude za proslave.",
      ctaInquiry: "Pošalji upit",
      ctaEvents: "Proslave",
    },
  },

  /* ---------------------------- PROSLAVE --------------------------- */
  proslave: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Private & business events",
      title: "Proslave i događaji",
      sub: "Privatne večere, jubileji i poslovna okupljanja.",
    },
    intro: {
      eyebrow: "Organizovane grupe",
      title: "Tri jasna formata, uz mogućnost prilagođavanja.",
      text: "Za privatne i poslovne događaje nudimo unapred definisane pakete hrane i pića. Za posebne zahteve, korporativne večere ili drugačiji format pripremamo ponudu na upit.",
    },
    packages: [
      {
        label: "Opušteniji format",
        name: "Receptor Classic",
        price: "45 EUR + PDV",
        items: [
          "Piće dobrodošlice",
          "Selekcija sireva i suhomesnatih proizvoda",
          "Juneći ćevapi, kobasice, grilovana piletina i uštipci",
          "Pekarski krompir i salate",
          "Kolač dana",
          "Paket pića do 4 sata",
        ],
      },
      {
        label: "Bogatiji sharing format",
        name: "Receptor Brasserie",
        price: "55 EUR + PDV",
        items: [
          "Piće dobrodošlice",
          "Receptor selekcija predjela",
          "Ćevapi, Receptor pljeskavica i grilovana piletina",
          "Sporo pečena svinjska buttica",
          "Prilozi i salate",
          "Desert i paket pića do 4 sata",
        ],
      },
      {
        label: "Elegantniji format",
        name: "Receptor Signature",
        price: "65 EUR + PDV",
        items: [
          "Aperitiv dobrodošlice",
          "Pršute, sirevi, masline i topli rustični hleb",
          "Sporo pečena teletina i glazirana mlada jaretina",
          "Ramstek u sosu od vrganja i piletina sa četiri vrste sira",
          "Dva priloga i salate",
          "Desert i prošireni paket pića do 4 sata",
        ],
      },
    ],
    custom: {
      eyebrow: "Prilagođeni događaji",
      title: "Ako vam standardni paket ne odgovara — dogovaramo posebno.",
      text: "Korporativne večere, intimne proslave, vinske degustacije, delimični zakup prostora, posebni meniji i prošireni paketi pića dostupni su na upit.",
      cta: "Pošalji upit",
    },
    important: {
      eyebrow: "Važno",
      notes: [
        "Paketi su namenjeni organizovanim grupama i privatnim događajima.",
        "Standardno trajanje paketa je do 4 sata.",
        "Za potvrdu rezervacije potrebna je avansna uplata.",
        "Konačan broj gostiju predstavlja minimalan broj za obračun.",
      ],
    },
    band: {
      eyebrow: "Proslave i događaji",
      title: "Pošaljite upit za svoj događaj.",
      text: "Navedite datum, broj gostiju i tip događaja — odgovorićemo sa predlogom.",
      ctaInquiry: "Pošalji upit",
      ctaContact: "Kontakt",
    },
  },

  /* ---------------------------- GALERIJA --------------------------- */
  galerija: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Gallery",
      title: "Galerija",
      sub: "Atmosfera, roštilj i sto za deljenje — ritam Receptora.",
    },
    cta: {
      text: "Uvek ima mesta za još jedan sto oko roštilja.",
      button: "Rezerviši sto",
    },
  },

  /* ----------------------------- KONTAKT --------------------------- */
  kontakt: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Belgrade · Karađorđeva 21",
      title: "Kontakt",
      sub: "Rezervacije, upiti za događaje i sve što treba da dogovorimo pre dolaska.",
    },
    info: {
      left: {
        eyebrow: "Receptor",
        title: "Karađorđeva 21, Beograd",
        text: "U starom delu grada, uz reku i na pešačkoj udaljenosti od Kalemegdana.",
      },
      right: {
        eyebrow: "Rezervacije",
        phone: "+381 61 323 03 24",
        email: "rezervacije@restoranreceptor.rs",
        mapCta: "Otvori mapu",
      },
    },
    pre: {
      eyebrow: "Pre dolaska",
      title: "Kratko i praktično.",
      cards: [
        { title: "Rezervacija stola", text: "Pozovite nas ili pošaljite upit sa datumom i brojem gostiju." },
        { title: "Događaji", text: "Za privatne i poslovne događaje pošaljite datum, broj gostiju i okvirni format." },
        { title: "Dolazak i parking", text: "Za praktične informacije o dolasku i parkingu u okolini, kontaktirajte nas pre dolaska." },
      ],
    },
    form: {
      eyebrow: "Pošaljite upit",
      title: "Javite nam šta vam je potrebno.",
      text: "Za rezervaciju ili događaj ostavite osnovne podatke. Odgovorićemo sa potvrdom ili dodatnim informacijama.",
      name: "Ime i prezime",
      email: "E-mail",
      phone: "Telefon",
      date: "Datum",
      persons: "Broj gostiju",
      message: "Poruka",
      placeholder: "Upišite podatak",
      messagePlaceholder: "Napišite kratak upit…",
      submit: "Pošalji upit",
      sending: "Šalje se…",
      success: "Hvala! Vaš upit je poslat — javićemo se uskoro.",
      error: "Greška pri slanju. Pokušajte ponovo ili nas pozovite.",
    },
    note: {
      eyebrow: "Za grupe i događaje",
      title: "Ako već znate datum i broj gostiju, napišite ih odmah.",
      text: "To je dovoljno da vam brzo odgovorimo sa predlogom daljeg dogovora.",
    },
    footerCta: {
      eyebrow: "Receptor",
      title: "Vidimo se u Karađorđevoj 21.",
      text: "Za rezervaciju pozovite nas ili pošaljite upit.",
    },
  },

  /* ------------------------------ FOOTER --------------------------- */
  footer: {
    reserveBand: {
      eyebrow: "Rezervacije",
      title: "Rezervišite sto.",
      text: "Za grupne večere i događaje pogledajte ponude za proslave.",
      ctaReserve: "Rezerviši sto",
      ctaEvents: "Proslave",
    },
    brandLines: ["Grill · Smoke · Wine · Beer", "Beograd"],
    colOffer: {
      title: "Ponuda",
      links: [
        { label: "Jelovnik", to: "/meni" },
        { label: "Vinska karta", to: "/vinska-karta" },
        { label: "Karta pića", to: "/karta-pica" },
        { label: "Galerija", to: "/galerija" },
      ],
    },
    colEvents: {
      title: "Događaji",
      links: [
        { label: "Privatne proslave", to: "/proslave" },
        { label: "Poslovna okupljanja", to: "/proslave" },
      ],
    },
    colContact: {
      title: "Kontakt",
      address: "Karađorđeva 21, Beograd",
      phone: "+381 61 323 03 24",
    },
    copy: "© 2026 Receptor. Sva prava zadržana.",
  },
};

export type Dict = typeof sr;

/* ------------------------------------------------------------------ */
/*  English                                                            */
/* ------------------------------------------------------------------ */

const en: Dict = {
  brand: { name: "Receptor", tagline: "BBQ & Brasserie" },

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
    sendInquiry: "Send inquiry",
    callNow: "Call",
    directions: "Open map",
    contact: "Contact",
    events: "Events",
    map: "Map",
    learnMore: "Learn more",
  },

  common: { currency: "din", perTable: "per table", langLabel: "EN" },

  strip: ["Grill", "Smoke", "Wine", "Beer", "Sharing"],

  home: {
    hero: {
      eyebrow: "Karađorđeva 21 · Belgrade",
      title: "Receptor.",
      brandline: "BBQ & Brasserie",
      text: "Grilled and Low & Slow dishes and plates for sharing, with a good wine list, beer and classic cocktails.",
      ctaMenu: "View menu",
      ctaReserve: "Reserve a table",
    },
    intro: {
      eyebrow: "Receptor BBQ & Brasserie",
      title: "The grill is at the heart of our kitchen.",
      p1: "Ćevapi, house sausages, stuffed skirt steak and sous-vide chicken form the core of our grill offering, alongside Low & Slow dishes, sides and plates for sharing.",
      p2: "Receptor is an equally good choice for lunch, dinner with friends and organized private or business events.",
    },
    offer: {
      eyebrow: "Offering",
      title: "See what we offer.",
      cards: [
        { num: "01", label: "Menu", title: "Food", text: "A current menu of grilled dishes, Low & Slow offerings, sides, salads and plates for sharing.", to: "/meni" },
        { num: "02", label: "Wine List", title: "Wine", text: "Wines by the glass and bottle, chosen to pair well with the menu.", to: "/vinska-karta" },
        { num: "03", label: "Drinks", title: "Bar", text: "Cocktails, rakija, beer, soft drinks and coffee.", to: "/karta-pica" },
        { num: "04", label: "Events", title: "Events", text: "Offers for private dinners, anniversaries and business gatherings.", to: "/proslave" },
      ],
    },
    events: {
      eyebrow: "Private & business events",
      title: "Dinners, anniversaries and gatherings.",
      text: "For private and business events we offer set menus, buffet and cocktail formats. Offers are defined per person and can be adapted to the type of event and number of guests.",
      prices: [
        { label: "Cocktail", value: "45 EUR" },
        { label: "Set menu I", value: "55 EUR" },
        { label: "Set menu II", value: "75 EUR" },
      ],
    },
    cta: {
      eyebrow: "Reservations & contact",
      title: "Reserve a table or send an event inquiry.",
      text: "For reservations and event planning, contact us directly.",
      ctaReserve: "Reserve a table",
      ctaContact: "Contact",
    },
  },

  meni: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Grill · Smoke · Wine · Beer",
      title: "Menu",
      sub: "Grill, Low & Slow, plates for sharing, sides and desserts.",
    },
    columns: [
      [
        {
          title: "Starters",
          items: [
            { name: "Pork cracklings spread & homemade kajmak", desc: "", price: "340" },
          ],
        },
        {
          title: "Warm starters",
          items: [
            { name: "Breaded pepper", desc: "Filled with local cheese and spinach, with Receptor tartar", price: "590" },
            { name: "Grilled Rtanj škripavac cheese", desc: "Rtanj cheese from the grill, with roasted red pepper", price: "620" },
            { name: "Grilled plums in pancetta", desc: "Stuffed with walnuts, with a blue cheese sauce", price: "690" },
          ],
        },
        {
          title: "From the grill",
          items: [
            { name: "Ćevapi · 5 pieces", desc: "Beef ćevapi, house recipe", price: "630" },
            { name: "Ćevapi · 10 pieces", desc: "Beef ćevapi, house recipe", price: "990" },
            { name: "House sausages", desc: "A selection of house sausages from the grill", price: "1.390" },
            { name: "Pljeskavica", desc: "Beef pljeskavica with onion", price: "1.390" },
            { name: "Receptor pljeskavica", desc: "Gourmet pljeskavica, house recipe", price: "1.550" },
            { name: "Steakhouse stuffed skirt steak", desc: "Stuffed skirt steak wrapped in pancetta, finished on the grill", price: "1.790" },
            { name: "Buffalo Wings & Receptor BBQ", desc: "Chicken wings with Buffalo sauce and Receptor BBQ dip", price: "620 / 1.190" },
          ],
        },
      ],
      [
        {
          title: "Low & Slow",
          items: [
            { name: "Sous-vide chicken", desc: "Chicken fillet prepared sous-vide and finished on the grill", price: "1.290" },
            { name: "Pulled pork shoulder", desc: "Slow-roasted pork shoulder with kajmak and crispy onion", price: "1.490" },
            { name: "Beef goulash with dried porcini", desc: "Beef slow-cooked with dried porcini mushrooms", price: "1.690" },
            { name: "Slow-roasted veal", desc: "Young veal with potato and beetroot", price: "2.390" },
          ],
        },
        {
          title: "Sharing plates",
          items: [
            { name: "Receptor Grill platter", desc: "For 2–3: ćevapi, sausages and Buffalo Wings, with sides and sauces", price: "4.490" },
            { name: "Receptor Signature", desc: "For 2: breaded pepper, stuffed skirt steak, veal and pulled pork", price: "4.990" },
          ],
        },
        {
          title: "Salads",
          items: [
            { name: "Morava salad", desc: "Roasted pepper, tomato, onion, garlic and cheese", price: "410" },
            { name: "Receptor red", desc: "Beetroot, roasted pepper, pickle, red onion and walnuts", price: "350" },
            { name: "Seasonal salad", desc: "A fresh salad of seasonal vegetables", price: "350" },
          ],
        },
      ],
      [
        {
          title: "Sides",
          items: [
            { name: "Roast potato", desc: "", price: "390" },
            { name: "Mashed potato", desc: "", price: "390" },
            { name: "Aromatic baked beans", desc: "", price: "490" },
            { name: "Grilled lepinja flatbread", desc: "", price: "220" },
            { name: "Homemade kajmak", desc: "", price: "190" },
          ],
        },
        {
          title: "Sauces",
          items: [
            { name: "Receptor BBQ", desc: "", price: "190" },
            { name: "Buffalo", desc: "", price: "190" },
            { name: "Honey, mustard & ginger", desc: "", price: "190" },
            { name: "Receptor tartar", desc: "", price: "190" },
          ],
        },
        {
          title: "Desserts",
          items: [
            { name: "Ice cream", desc: "A selection of ice cream with seasonal fruit and vanilla sauce", price: "390" },
            { name: "Hazelnut parfait", desc: "Creamy hazelnut parfait with chocolate crumble", price: "490" },
          ],
        },
      ],
    ],
    note: {
      title: "Note",
      text: "Information on ingredients and allergens is available from our staff. All prices are in dinars and include VAT.",
    },
  },

  vino: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Wine",
      title: "Wine List",
      sub: "A selection of wines by the glass and bottle.",
    },
    glassLabel: "Glass · 0.15 l",
    bottleLabel: "Bottle · 0.75 l",
    columns: [
      [
        {
          title: "Sparkling wine",
          wines: [
            { name: "Simonnet-Febvre Blanc de Blancs", glass: "720", bottle: "3.600" },
          ],
        },
        {
          title: "White wines",
          wines: [
            { name: "Aleksić Sevdah", glass: "470", bottle: "2.350" },
            { name: "Lastar Tamjanika", glass: "650", bottle: "3.250" },
            { name: "Karić Adria", glass: "", bottle: "3.900" },
          ],
        },
      ],
      [
        {
          title: "Red wines",
          wines: [
            { name: "Aleksić Kardaš", glass: "520", bottle: "2.600" },
            { name: "Karić Adria", glass: "690", bottle: "3.450" },
            { name: "Deurić Probus", glass: "", bottle: "4.250" },
          ],
        },
        {
          title: "Rosé wines",
          wines: [
            { name: "Aleksić Mozaik", glass: "470", bottle: "2.350" },
            { name: "LYV Rosé Pays d'Oc", glass: "580", bottle: "2.900" },
          ],
        },
      ],
    ],
    info: {
      eyebrow: "Wine at Receptor",
      title: "A short list, made to follow the food.",
      text: "Wines are available by the glass or bottle, depending on the label.",
    },
    smallprint: "Prices include VAT. Alcohol is served to guests of legal age only.",
  },

  pica: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Drinks",
      title: "Drinks",
      sub: "Aperitifs, cocktails, beer, spirits, soft drinks, coffee and tea.",
    },
    columns: [
      [
        {
          title: "Aperitifs",
          items: [
            { name: "Aperol Spritz", price: "750" },
            { name: "Hugo Spritz", price: "750" },
            { name: "Dry Vermouth & Tonic", price: "650" },
            { name: "Martini Bianco · 0.03 l", price: "390" },
            { name: "Martini Rosso · 0.03 l", price: "390" },
          ],
        },
        {
          title: "Cocktails",
          items: [
            { name: "Negroni", price: "850" },
            { name: "Tom Collins", price: "750" },
            { name: "Whiskey Sour", price: "850" },
            { name: "Espresso Martini", price: "850" },
            { name: "French 75", price: "850" },
          ],
        },
        {
          title: "Beer",
          items: [
            { name: "Zaječarsko draught · 0.33 l", price: "320" },
            { name: "Zaječarsko draught · 0.50 l", price: "390" },
            { name: "Krušovice dark · 0.33 l", price: "390" },
            { name: "Kapuziner wheat · 0.50 l", price: "550" },
          ],
        },
        {
          title: "Whisky · 0.03 l",
          items: [
            { name: "Jameson", price: "390" },
            { name: "Johnnie Walker Black Label", price: "590" },
            { name: "Jack Daniel's Single Barrel", price: "690" },
            { name: "The Macallan 12 Y.O.", price: "990" },
          ],
        },
      ],
      [
        {
          title: "Gin · 0.03 l",
          items: [
            { name: "Bombay", price: "390" },
            { name: "Gin Mare", price: "690" },
          ],
        },
        {
          title: "Vodka · 0.03 l",
          items: [
            { name: "Finlandia", price: "390" },
            { name: "Grey Goose", price: "790" },
          ],
        },
        {
          title: "Rum · 0.03 l",
          items: [
            { name: "Bacardi Carta Blanca", price: "390" },
            { name: "Diplomático Reserva Exclusiva", price: "890" },
          ],
        },
        {
          title: "Tequila / Agave · 0.03 l",
          items: [
            { name: "El Jimador Blanco", price: "490" },
            { name: "El Jimador Reposado", price: "590" },
          ],
        },
        {
          title: "Cognac & brandy · 0.03 l",
          items: [
            { name: "Courvoisier V.S.", price: "690" },
            { name: "Rémy Martin V.S.O.P.", price: "990" },
          ],
        },
        {
          title: "Digestifs · 0.03 l",
          items: [
            { name: "Gorki List", price: "390" },
            { name: "Amaro Montenegro", price: "490" },
          ],
        },
        {
          title: "Rakija · 0.03 l",
          items: [
            { name: "Rtanjska plum", price: "420" },
            { name: "Rtanjska quince", price: "420" },
            { name: "Rtanjska apricot", price: "420" },
            { name: "Gorda plum", price: "520" },
            { name: "Gorda pear", price: "520" },
          ],
        },
      ],
      [
        {
          title: "Water",
          items: [
            { name: "Rosa still · 0.33 l", price: "290" },
            { name: "Rosa still · 0.70 l", price: "490" },
            { name: "Rosa sparkling · 0.33 l", price: "290" },
            { name: "Rosa sparkling · 0.70 l", price: "490" },
          ],
        },
        {
          title: "Soft drinks",
          items: [
            { name: "Coca-Cola / Coca-Cola Zero · 0.25 l", price: "350" },
            { name: "Fanta / Sprite · 0.25 l", price: "350" },
            { name: "Schweppes Bitter Lemon · 0.25 l", price: "350" },
            { name: "Schweppes Tonic Water · 0.25 l", price: "350" },
          ],
        },
        {
          title: "Juices",
          items: [
            { name: "Next · 0.20 l", price: "350" },
            { name: "Lemonade", price: "420" },
            { name: "FuzeTea peach · 0.25 l", price: "350" },
          ],
        },
        {
          title: "Coffee",
          items: [
            { name: "Espresso", price: "270" },
            { name: "Double espresso", price: "350" },
            { name: "Cappuccino", price: "320" },
            { name: "Latte", price: "350" },
            { name: "Iced coffee or iced latte", price: "450" },
          ],
        },
        {
          title: "Tea",
          items: [
            { name: "Tea selection", price: "290" },
          ],
        },
      ],
    ],
    smallprint: "Prices are in dinars and include VAT. Alcohol is served to guests of legal age only.",
  },

  business: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Daytime dining",
      title: "Business Lunch",
      sub: "A business lunch without the fuss.",
    },
    intro: {
      eyebrow: "For a business lunch",
      title: "A good table, a quick agreement and efficient service.",
      text: "Receptor can be a simple place to meet over lunch — without special protocol or a fixed package. Reserve a table, and for a group we can agree on a narrower dish selection in advance for faster service.",
    },
    cards: [
      { num: "01", title: "Faster service", text: "For a business lunch we can agree in advance on the dish selection for the table or group, so service is simpler and faster." },
      { num: "02", title: "Reserve in advance", text: "A table can be reserved for a meeting, a client or team lunch, with agreement on the number of guests and the way of serving." },
      { num: "03", title: "Flexible", text: "There is no mandatory Business Lunch package. Guests can choose from the regular menu or a pre-agreed narrower selection." },
    ],
    practical: {
      eyebrow: "Practical for the working day",
      title: "A short stop or a longer meeting.",
    },
    mini: [
      { title: "Client lunch", text: "Table reservation and the regular à la carte selection." },
      { title: "Team lunch", text: "The option of a pre-agreed dish selection for a group." },
      { title: "Smaller meeting", text: "A discreet daytime slot over coffee, lunch or a glass of wine." },
      { title: "Larger group", text: "For organizing a group we prepare a format proposal on request." },
    ],
    note: {
      eyebrow: "Arrival & organization",
      title: "Agreeing before arrival saves time.",
      text: "If you're coming for business, we recommend booking in advance. If needed, we can help with organizing the table, the pace of service and practical information on arrival and parking nearby.",
    },
    band: {
      eyebrow: "Business Lunch",
      title: "Reserve a table or send an inquiry.",
      text: "For larger groups and private events, see our event offers.",
      ctaInquiry: "Send inquiry",
      ctaEvents: "Events",
    },
  },

  proslave: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Private & business events",
      title: "Events",
      sub: "Private dinners, anniversaries and business gatherings.",
    },
    intro: {
      eyebrow: "Organized groups",
      title: "Three clear formats, with room to adapt.",
      text: "For private and business events we offer pre-defined food and drink packages. For special requests, corporate dinners or a different format, we prepare an offer on request.",
    },
    packages: [
      {
        label: "More relaxed format",
        name: "Receptor Classic",
        price: "45 EUR + VAT",
        items: [
          "Welcome drink",
          "A selection of cheeses and cured meats",
          "Beef ćevapi, sausages, grilled chicken and uštipci",
          "Bakery potatoes and salads",
          "Cake of the day",
          "Drinks package up to 4 hours",
        ],
      },
      {
        label: "Richer sharing format",
        name: "Receptor Brasserie",
        price: "55 EUR + VAT",
        items: [
          "Welcome drink",
          "Receptor starter selection",
          "Ćevapi, Receptor pljeskavica and grilled chicken",
          "Slow-roasted pork shoulder",
          "Sides and salads",
          "Dessert and a drinks package up to 4 hours",
        ],
      },
      {
        label: "More elegant format",
        name: "Receptor Signature",
        price: "65 EUR + VAT",
        items: [
          "Welcome aperitif",
          "Prosciutto, cheeses, olives and warm rustic bread",
          "Slow-roasted veal and glazed young goat",
          "Rump steak in porcini sauce and chicken with four cheeses",
          "Two sides and salads",
          "Dessert and an extended drinks package up to 4 hours",
        ],
      },
    ],
    custom: {
      eyebrow: "Tailored events",
      title: "If a standard package doesn't fit — we arrange something special.",
      text: "Corporate dinners, intimate celebrations, wine tastings, partial venue hire, custom menus and extended drinks packages are available on request.",
      cta: "Send inquiry",
    },
    important: {
      eyebrow: "Important",
      notes: [
        "Packages are intended for organized groups and private events.",
        "Standard package duration is up to 4 hours.",
        "An advance payment is required to confirm the reservation.",
        "The final number of guests is the minimum used for billing.",
      ],
    },
    band: {
      eyebrow: "Events",
      title: "Send an inquiry for your event.",
      text: "Tell us the date, number of guests and type of event — we'll reply with a proposal.",
      ctaInquiry: "Send inquiry",
      ctaContact: "Contact",
    },
  },

  galerija: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Gallery",
      title: "Gallery",
      sub: "Atmosphere, the grill and the sharing table — the rhythm of Receptor.",
    },
    cta: {
      text: "There's always room for one more table around the grill.",
      button: "Reserve a table",
    },
  },

  kontakt: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Belgrade · Karađorđeva 21",
      title: "Contact",
      sub: "Reservations, event inquiries and everything to arrange before you arrive.",
    },
    info: {
      left: {
        eyebrow: "Receptor",
        title: "Karađorđeva 21, Belgrade",
        text: "In the old part of the city, by the river and within walking distance of Kalemegdan.",
      },
      right: {
        eyebrow: "Reservations",
        phone: "+381 61 323 03 24",
        email: "rezervacije@restoranreceptor.rs",
        mapCta: "Open map",
      },
    },
    pre: {
      eyebrow: "Before you arrive",
      title: "Short and practical.",
      cards: [
        { title: "Table reservation", text: "Call us or send an inquiry with the date and number of guests." },
        { title: "Events", text: "For private and business events, send the date, number of guests and an outline format." },
        { title: "Arrival & parking", text: "For practical information on arrival and parking nearby, contact us before you come." },
      ],
    },
    form: {
      eyebrow: "Send an inquiry",
      title: "Tell us what you need.",
      text: "For a reservation or event, leave your basic details. We'll reply with a confirmation or more information.",
      name: "Full name",
      email: "E-mail",
      phone: "Phone",
      date: "Date",
      persons: "Number of guests",
      message: "Message",
      placeholder: "Enter details",
      messagePlaceholder: "Write a short inquiry…",
      submit: "Send inquiry",
      sending: "Sending…",
      success: "Thank you! Your inquiry has been sent — we'll be in touch soon.",
      error: "Error sending. Please try again or call us.",
    },
    note: {
      eyebrow: "For groups & events",
      title: "If you already know the date and number of guests, write them right away.",
      text: "That's enough for us to reply quickly with a proposal for the next steps.",
    },
    footerCta: {
      eyebrow: "Receptor",
      title: "See you at Karađorđeva 21.",
      text: "For a reservation, call us or send an inquiry.",
    },
  },

  footer: {
    reserveBand: {
      eyebrow: "Reservations",
      title: "Reserve a table.",
      text: "For group dinners and events, see our event offers.",
      ctaReserve: "Reserve a table",
      ctaEvents: "Events",
    },
    brandLines: ["Grill · Smoke · Wine · Beer", "Belgrade"],
    colOffer: {
      title: "Offering",
      links: [
        { label: "Menu", to: "/meni" },
        { label: "Wine List", to: "/vinska-karta" },
        { label: "Drinks", to: "/karta-pica" },
        { label: "Gallery", to: "/galerija" },
      ],
    },
    colEvents: {
      title: "Events",
      links: [
        { label: "Private events", to: "/proslave" },
        { label: "Business gatherings", to: "/proslave" },
      ],
    },
    colContact: {
      title: "Contact",
      address: "Karađorđeva 21, Belgrade",
      phone: "+381 61 323 03 24",
    },
    copy: "© 2026 Receptor. All rights reserved.",
  },
};

/* ------------------------------------------------------------------ */
/*  Russian                                                            */
/* ------------------------------------------------------------------ */

const ru: Dict = {
  brand: { name: "Receptor", tagline: "BBQ & Brasserie" },

  nav: {
    pocetna: "Главная",
    meni: "Меню",
    vinska: "Карта вин",
    pica: "Напитки",
    business: "Business Lunch",
    proslave: "Мероприятия",
    galerija: "Галерея",
    kontakt: "Контакт",
  },

  cta: {
    reserve: "Забронировать стол",
    viewMenu: "Смотреть меню",
    sendInquiry: "Отправить запрос",
    callNow: "Позвонить",
    directions: "Открыть карту",
    contact: "Контакт",
    events: "Мероприятия",
    map: "Карта",
    learnMore: "Подробнее",
  },

  common: { currency: "дин", perTable: "за стол", langLabel: "SR" },

  strip: ["Grill", "Smoke", "Wine", "Beer", "Sharing"],

  home: {
    hero: {
      eyebrow: "Карагеоргиева 21 · Белград",
      title: "Receptor.",
      brandline: "BBQ & Brasserie",
      text: "Блюда с гриля и Low & Slow, тарелки для компании, хорошая карта вин, пиво и классические коктейли.",
      ctaMenu: "Смотреть меню",
      ctaReserve: "Забронировать стол",
    },
    intro: {
      eyebrow: "Receptor BBQ & Brasserie",
      title: "Гриль — в сердце нашей кухни.",
      p1: "Чевапи, домашние колбаски, фаршированная вешалица и курица sous-vide составляют основу предложения с гриля, вместе с блюдами Low & Slow, гарнирами и тарелками для компании.",
      p2: "Receptor одинаково хорош для обеда, ужина в компании и организованных частных или деловых мероприятий.",
    },
    offer: {
      eyebrow: "Предложение",
      title: "Посмотрите, что мы предлагаем.",
      cards: [
        { num: "01", label: "Меню", title: "Еда", text: "Актуальное меню с блюдами с гриля, предложением Low & Slow, гарнирами, салатами и блюдами для компании.", to: "/meni" },
        { num: "02", label: "Карта вин", title: "Вино", text: "Вина по бокалам и бутылкам, подобранные под меню.", to: "/vinska-karta" },
        { num: "03", label: "Напитки", title: "Бар", text: "Коктейли, ракия, пиво, безалкогольные напитки и кофе.", to: "/karta-pica" },
        { num: "04", label: "Мероприятия", title: "События", text: "Предложения для частных ужинов, юбилеев и деловых встреч.", to: "/proslave" },
      ],
    },
    events: {
      eyebrow: "Частные и корпоративные события",
      title: "Ужины, юбилеи и встречи.",
      text: "Для частных и деловых событий предлагаем сет-меню, фуршет и коктейльный формат. Предложения рассчитываются на человека и подстраиваются под тип события и число гостей.",
      prices: [
        { label: "Коктейль", value: "45 EUR" },
        { label: "Сет-меню I", value: "55 EUR" },
        { label: "Сет-меню II", value: "75 EUR" },
      ],
    },
    cta: {
      eyebrow: "Брони и контакт",
      title: "Забронируйте стол или отправьте запрос на событие.",
      text: "Для брони и организации события свяжитесь с нами напрямую.",
      ctaReserve: "Забронировать стол",
      ctaContact: "Контакт",
    },
  },

  meni: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Grill · Smoke · Wine · Beer",
      title: "Меню",
      sub: "Гриль, Low & Slow, блюда для компании, гарниры и десерты.",
    },
    columns: [
      [
        {
          title: "Закуски",
          items: [
            { name: "Намаз из чварков и домашний каймак", desc: "", price: "340" },
          ],
        },
        {
          title: "Тёплые закуски",
          items: [
            { name: "Панированный перец", desc: "Фаршированный домашним сыром и шпинатом, с соусом тартар Receptor", price: "590" },
            { name: "Ртаньский сыр «шкрипавац» на гриле", desc: "Ртаньский сыр на гриле, с печёным красным перцем", price: "620" },
            { name: "Сливы в панчете на гриле", desc: "Фаршированные орехами, с соусом из голубого сыра", price: "690" },
          ],
        },
        {
          title: "С гриля",
          items: [
            { name: "Чевапи · 5 штук", desc: "Чевапи из говядины, по рецепту заведения", price: "630" },
            { name: "Чевапи · 10 штук", desc: "Чевапи из говядины, по рецепту заведения", price: "990" },
            { name: "Домашние колбаски", desc: "Подборка домашних колбасок с гриля", price: "1.390" },
            { name: "Плескавица", desc: "Говяжья плескавица с луком", price: "1.390" },
            { name: "Плескавица Receptor", desc: "Гурманская плескавица по рецепту заведения", price: "1.550" },
            { name: "Фаршированная вешалица Steakhouse", desc: "Фаршированная вешалица в панчете, запечённая на гриле", price: "1.790" },
            { name: "Buffalo Wings & Receptor BBQ", desc: "Куриные крылышки с соусом Buffalo и дипом Receptor BBQ", price: "620 / 1.190" },
          ],
        },
      ],
      [
        {
          title: "Low & Slow",
          items: [
            { name: "Курица sous-vide", desc: "Куриное филе по технологии sous-vide, доведённое на гриле", price: "1.290" },
            { name: "Томлёная свиная лопатка", desc: "Медленно запечённая свиная лопатка с каймаком и хрустящим луком", price: "1.490" },
            { name: "Говяжий гуляш с белыми грибами", desc: "Говядина, медленно тушённая с сушёными белыми грибами", price: "1.690" },
            { name: "Медленно запечённая телятина", desc: "Молодая телятина с картофелем и свёклой", price: "2.390" },
          ],
        },
        {
          title: "Блюда для компании",
          items: [
            { name: "Гриль-плато Receptor", desc: "На 2–3 персоны: чевапи, колбаски и Buffalo Wings, с гарнирами и соусами", price: "4.490" },
            { name: "Receptor Signature", desc: "На 2 персоны: панированный перец, фаршированная вешалица, телятина и томлёная лопатка", price: "4.990" },
          ],
        },
        {
          title: "Салаты",
          items: [
            { name: "Моравский салат", desc: "Печёный перец, помидор, лук, чеснок и сыр", price: "410" },
            { name: "Receptor красный", desc: "Свёкла, печёный перец, солёный огурец, красный лук и орехи", price: "350" },
            { name: "Сезонный салат", desc: "Свежий салат из сезонных овощей", price: "350" },
          ],
        },
      ],
      [
        {
          title: "Гарниры",
          items: [
            { name: "Печёный картофель", desc: "", price: "390" },
            { name: "Картофельное пюре", desc: "", price: "390" },
            { name: "Ароматная запечённая фасоль", desc: "", price: "490" },
            { name: "Лепинья с гриля", desc: "", price: "220" },
            { name: "Домашний каймак", desc: "", price: "190" },
          ],
        },
        {
          title: "Соусы",
          items: [
            { name: "Receptor BBQ", desc: "", price: "190" },
            { name: "Buffalo", desc: "", price: "190" },
            { name: "Мёд, горчица и имбирь", desc: "", price: "190" },
            { name: "Тартар Receptor", desc: "", price: "190" },
          ],
        },
        {
          title: "Десерты",
          items: [
            { name: "Мороженое", desc: "Подборка мороженого с сезонными фруктами и ванильным соусом", price: "390" },
            { name: "Парфе из фундука", desc: "Кремовое парфе из фундука с шоколадным крамблом", price: "490" },
          ],
        },
      ],
    ],
    note: {
      title: "Примечание",
      text: "Информацию о составе блюд и аллергенах можно получить у персонала. Все цены указаны в динарах и включают НДС.",
    },
  },

  vino: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Вино",
      title: "Карта вин",
      sub: "Выбор вин по бокалам и бутылкам.",
    },
    glassLabel: "Бокал · 0,15 л",
    bottleLabel: "Бутылка · 0,75 л",
    columns: [
      [
        {
          title: "Игристое вино",
          wines: [
            { name: "Simonnet-Febvre Blanc de Blancs", glass: "720", bottle: "3.600" },
          ],
        },
        {
          title: "Белые вина",
          wines: [
            { name: "Aleksić Sevdah", glass: "470", bottle: "2.350" },
            { name: "Lastar Tamjanika", glass: "650", bottle: "3.250" },
            { name: "Karić Adria", glass: "", bottle: "3.900" },
          ],
        },
      ],
      [
        {
          title: "Красные вина",
          wines: [
            { name: "Aleksić Kardaš", glass: "520", bottle: "2.600" },
            { name: "Karić Adria", glass: "690", bottle: "3.450" },
            { name: "Deurić Probus", glass: "", bottle: "4.250" },
          ],
        },
        {
          title: "Розовые вина",
          wines: [
            { name: "Aleksić Mozaik", glass: "470", bottle: "2.350" },
            { name: "LYV Rosé Pays d'Oc", glass: "580", bottle: "2.900" },
          ],
        },
      ],
    ],
    info: {
      eyebrow: "Вино в Receptor",
      title: "Короткая карта, созданная под кухню.",
      text: "Вина доступны по бокалу или бутылке, в зависимости от этикетки.",
    },
    smallprint: "Цены включают НДС. Алкоголь подаётся только совершеннолетним гостям.",
  },

  pica: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Напитки",
      title: "Карта напитков",
      sub: "Аперитивы, коктейли, пиво, крепкие напитки, безалкогольные напитки, кофе и чай.",
    },
    columns: [
      [
        {
          title: "Аперитивы",
          items: [
            { name: "Aperol Spritz", price: "750" },
            { name: "Hugo Spritz", price: "750" },
            { name: "Dry Vermouth & Tonic", price: "650" },
            { name: "Martini Bianco · 0,03 л", price: "390" },
            { name: "Martini Rosso · 0,03 л", price: "390" },
          ],
        },
        {
          title: "Коктейли",
          items: [
            { name: "Negroni", price: "850" },
            { name: "Tom Collins", price: "750" },
            { name: "Whiskey Sour", price: "850" },
            { name: "Espresso Martini", price: "850" },
            { name: "French 75", price: "850" },
          ],
        },
        {
          title: "Пиво",
          items: [
            { name: "Zaječarsko разливное · 0,33 л", price: "320" },
            { name: "Zaječarsko разливное · 0,50 л", price: "390" },
            { name: "Krušovice тёмное · 0,33 л", price: "390" },
            { name: "Kapuziner пшеничное · 0,50 л", price: "550" },
          ],
        },
        {
          title: "Виски · 0,03 л",
          items: [
            { name: "Jameson", price: "390" },
            { name: "Johnnie Walker Black Label", price: "590" },
            { name: "Jack Daniel's Single Barrel", price: "690" },
            { name: "The Macallan 12 Y.O.", price: "990" },
          ],
        },
      ],
      [
        {
          title: "Джин · 0,03 л",
          items: [
            { name: "Bombay", price: "390" },
            { name: "Gin Mare", price: "690" },
          ],
        },
        {
          title: "Водка · 0,03 л",
          items: [
            { name: "Finlandia", price: "390" },
            { name: "Grey Goose", price: "790" },
          ],
        },
        {
          title: "Ром · 0,03 л",
          items: [
            { name: "Bacardi Carta Blanca", price: "390" },
            { name: "Diplomático Reserva Exclusiva", price: "890" },
          ],
        },
        {
          title: "Текила / Агава · 0,03 л",
          items: [
            { name: "El Jimador Blanco", price: "490" },
            { name: "El Jimador Reposado", price: "590" },
          ],
        },
        {
          title: "Коньяк и бренди · 0,03 л",
          items: [
            { name: "Courvoisier V.S.", price: "690" },
            { name: "Rémy Martin V.S.O.P.", price: "990" },
          ],
        },
        {
          title: "Дижестивы · 0,03 л",
          items: [
            { name: "Gorki List", price: "390" },
            { name: "Amaro Montenegro", price: "490" },
          ],
        },
        {
          title: "Ракия · 0,03 л",
          items: [
            { name: "Ртаньская сливовица", price: "420" },
            { name: "Ртаньская айва", price: "420" },
            { name: "Ртаньская абрикос", price: "420" },
            { name: "Горда сливовица", price: "520" },
            { name: "Горда груша", price: "520" },
          ],
        },
      ],
      [
        {
          title: "Вода",
          items: [
            { name: "Rosa негазированная · 0,33 л", price: "290" },
            { name: "Rosa негазированная · 0,70 л", price: "490" },
            { name: "Rosa газированная · 0,33 л", price: "290" },
            { name: "Rosa газированная · 0,70 л", price: "490" },
          ],
        },
        {
          title: "Безалкогольные напитки",
          items: [
            { name: "Coca-Cola / Coca-Cola Zero · 0,25 л", price: "350" },
            { name: "Fanta / Sprite · 0,25 л", price: "350" },
            { name: "Schweppes Bitter Lemon · 0,25 л", price: "350" },
            { name: "Schweppes Tonic Water · 0,25 л", price: "350" },
          ],
        },
        {
          title: "Соки",
          items: [
            { name: "Next · 0,20 л", price: "350" },
            { name: "Лимонад", price: "420" },
            { name: "FuzeTea персик · 0,25 л", price: "350" },
          ],
        },
        {
          title: "Кофе",
          items: [
            { name: "Espresso", price: "270" },
            { name: "Двойной espresso", price: "350" },
            { name: "Cappuccino", price: "320" },
            { name: "Latte", price: "350" },
            { name: "Холодный кофе или холодный латте", price: "450" },
          ],
        },
        {
          title: "Чай",
          items: [
            { name: "Выбор чая", price: "290" },
          ],
        },
      ],
    ],
    smallprint: "Цены указаны в динарах и включают НДС. Алкоголь подаётся только совершеннолетним гостям.",
  },

  business: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Дневное меню",
      title: "Business Lunch",
      sub: "Бизнес-обед без лишних сложностей.",
    },
    intro: {
      eyebrow: "Для бизнес-обеда",
      title: "Хороший стол, быстрая договорённость и эффективный сервис.",
      text: "Receptor может быть простым местом для встречи за обедом — без особого протокола и фиксированного пакета. Забронируйте стол, а для группы можно заранее согласовать узкий выбор блюд для более быстрого сервиса.",
    },
    cards: [
      { num: "01", title: "Быстрый сервис", text: "Для бизнес-обеда можно заранее согласовать выбор блюд для стола или группы, чтобы сервис был проще и быстрее." },
      { num: "02", title: "Бронь заранее", text: "Стол можно забронировать для встречи, обеда с клиентом или командой, согласовав число гостей и способ подачи." },
      { num: "03", title: "Гибко", text: "Обязательного пакета Business Lunch нет. Гости могут выбирать из обычного меню или заранее согласованного узкого набора." },
    ],
    practical: {
      eyebrow: "Практично для рабочего дня",
      title: "Короткий визит или более долгая встреча.",
    },
    mini: [
      { title: "Обед с клиентом", text: "Бронь стола и обычный выбор à la carte." },
      { title: "Командный обед", text: "Возможность заранее согласованного выбора блюд для группы." },
      { title: "Небольшая встреча", text: "Дискретное дневное время за кофе, обедом или бокалом вина." },
      { title: "Большая группа", text: "Для организации группы готовим предложение по формату по запросу." },
    ],
    note: {
      eyebrow: "Прибытие и организация",
      title: "Договорённость до прихода экономит время.",
      text: "Если вы приходите по делу, рекомендуем бронировать заранее. При необходимости поможем с организацией стола, темпом подачи и практической информацией о прибытии и парковке рядом.",
    },
    band: {
      eyebrow: "Business Lunch",
      title: "Забронируйте стол или отправьте запрос.",
      text: "Для больших групп и частных мероприятий смотрите предложения для событий.",
      ctaInquiry: "Отправить запрос",
      ctaEvents: "Мероприятия",
    },
  },

  proslave: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Частные и корпоративные события",
      title: "Мероприятия и события",
      sub: "Частные ужины, юбилеи и деловые встречи.",
    },
    intro: {
      eyebrow: "Организованные группы",
      title: "Три ясных формата с возможностью адаптации.",
      text: "Для частных и деловых событий предлагаем заранее определённые пакеты еды и напитков. Для особых запросов, корпоративных ужинов или другого формата готовим предложение по запросу.",
    },
    packages: [
      {
        label: "Более непринуждённый формат",
        name: "Receptor Classic",
        price: "45 EUR + НДС",
        items: [
          "Приветственный напиток",
          "Подборка сыров и мясных деликатесов",
          "Говяжьи чевапи, колбаски, курица на гриле и уштипцы",
          "Картофель по-пекарски и салаты",
          "Торт дня",
          "Пакет напитков до 4 часов",
        ],
      },
      {
        label: "Более богатый формат share",
        name: "Receptor Brasserie",
        price: "55 EUR + НДС",
        items: [
          "Приветственный напиток",
          "Подборка закусок Receptor",
          "Чевапи, плескавица Receptor и курица на гриле",
          "Медленно запечённая свиная лопатка",
          "Гарниры и салаты",
          "Десерт и пакет напитков до 4 часов",
        ],
      },
      {
        label: "Более элегантный формат",
        name: "Receptor Signature",
        price: "65 EUR + НДС",
        items: [
          "Приветственный аперитив",
          "Пршут, сыры, оливки и тёплый деревенский хлеб",
          "Медленно запечённая телятина и глазированный молодой козлёнок",
          "Рамстек в соусе из белых грибов и курица с четырьмя сырами",
          "Два гарнира и салаты",
          "Десерт и расширенный пакет напитков до 4 часов",
        ],
      },
    ],
    custom: {
      eyebrow: "Индивидуальные мероприятия",
      title: "Если стандартный пакет не подходит — договоримся отдельно.",
      text: "Корпоративные ужины, камерные торжества, винные дегустации, частичная аренда зала, особые меню и расширенные пакеты напитков доступны по запросу.",
      cta: "Отправить запрос",
    },
    important: {
      eyebrow: "Важно",
      notes: [
        "Пакеты предназначены для организованных групп и частных мероприятий.",
        "Стандартная продолжительность пакета — до 4 часов.",
        "Для подтверждения брони требуется предоплата.",
        "Окончательное число гостей — минимум для расчёта.",
      ],
    },
    band: {
      eyebrow: "Мероприятия",
      title: "Отправьте запрос на своё событие.",
      text: "Укажите дату, число гостей и тип события — ответим с предложением.",
      ctaInquiry: "Отправить запрос",
      ctaContact: "Контакт",
    },
  },

  galerija: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Галерея",
      title: "Галерея",
      sub: "Атмосфера, гриль и стол для компании — ритм Receptor.",
    },
    cta: {
      text: "Всегда найдётся место ещё для одного стола у гриля.",
      button: "Забронировать стол",
    },
  },

  kontakt: {
    hero: {
      eyebrow: "Receptor BBQ & Brasserie",
      tag: "Белград · Карагеоргиева 21",
      title: "Контакт",
      sub: "Брони, запросы на события и всё, что нужно согласовать до прихода.",
    },
    info: {
      left: {
        eyebrow: "Receptor",
        title: "Карагеоргиева 21, Белград",
        text: "В старой части города, у реки и в пешей доступности от Калемегдана.",
      },
      right: {
        eyebrow: "Брони",
        phone: "+381 61 323 03 24",
        email: "rezervacije@restoranreceptor.rs",
        mapCta: "Открыть карту",
      },
    },
    pre: {
      eyebrow: "Перед приходом",
      title: "Коротко и по делу.",
      cards: [
        { title: "Бронь стола", text: "Позвоните нам или отправьте запрос с датой и числом гостей." },
        { title: "Мероприятия", text: "Для частных и деловых событий отправьте дату, число гостей и примерный формат." },
        { title: "Прибытие и парковка", text: "За практической информацией о прибытии и парковке рядом свяжитесь с нами заранее." },
      ],
    },
    form: {
      eyebrow: "Отправить запрос",
      title: "Расскажите, что вам нужно.",
      text: "Для брони или события оставьте основные данные. Ответим подтверждением или дополнительной информацией.",
      name: "Имя и фамилия",
      email: "E-mail",
      phone: "Телефон",
      date: "Дата",
      persons: "Число гостей",
      message: "Сообщение",
      placeholder: "Введите данные",
      messagePlaceholder: "Напишите короткий запрос…",
      submit: "Отправить запрос",
      sending: "Отправка…",
      success: "Спасибо! Ваш запрос отправлен — мы скоро свяжемся с вами.",
      error: "Ошибка при отправке. Попробуйте снова или позвоните нам.",
    },
    note: {
      eyebrow: "Для групп и событий",
      title: "Если вы уже знаете дату и число гостей, напишите их сразу.",
      text: "Этого достаточно, чтобы мы быстро ответили с предложением о дальнейших шагах.",
    },
    footerCta: {
      eyebrow: "Receptor",
      title: "Увидимся на Карагеоргиевой 21.",
      text: "Для брони позвоните нам или отправьте запрос.",
    },
  },

  footer: {
    reserveBand: {
      eyebrow: "Брони",
      title: "Забронируйте стол.",
      text: "Для групповых ужинов и событий смотрите предложения для мероприятий.",
      ctaReserve: "Забронировать стол",
      ctaEvents: "Мероприятия",
    },
    brandLines: ["Grill · Smoke · Wine · Beer", "Белград"],
    colOffer: {
      title: "Предложение",
      links: [
        { label: "Меню", to: "/meni" },
        { label: "Карта вин", to: "/vinska-karta" },
        { label: "Напитки", to: "/karta-pica" },
        { label: "Галерея", to: "/galerija" },
      ],
    },
    colEvents: {
      title: "Мероприятия",
      links: [
        { label: "Частные мероприятия", to: "/proslave" },
        { label: "Деловые встречи", to: "/proslave" },
      ],
    },
    colContact: {
      title: "Контакт",
      address: "Карагеоргиева 21, Белград",
      phone: "+381 61 323 03 24",
    },
    copy: "© 2026 Receptor. Все права защищены.",
  },
};

export const translations: Record<Lang, Dict> = { sr, en, ru };
