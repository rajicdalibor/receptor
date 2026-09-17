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
/*  English & Russian — TEMPORARY placeholders (= sr).                 */
/*  Real translations land in the dedicated i18n pass (Faza 4).       */
/* ------------------------------------------------------------------ */

const en: Dict = sr;
const ru: Dict = sr;

export const translations: Record<Lang, Dict> = { sr, en, ru };
