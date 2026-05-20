import Link from "next/link";

export const metadata = {
  title: "The Beckford Journal",
  description:
    "Browse all issues of The Beckford Journal, the Society's annual peer-reviewed publication.",
};

const volumes: { vol: number; contents: string[] }[] = [
  {
    vol: 1,
    contents: [
      "KENNETH W GRAHAM: Beckford Round Table: William Beckford and Avant-gardisme",
      "GILLIAN SLADEN: Beckford's Tower Garden",
      "KENNETH W GRAHAM: Davenda Varma",
      "BRIAN NORTH LEE: Peter Summers",
      "PHILIPPA BISHOP: Settees from Fonthill Splendens",
      "A Letter to Emma Hamilton from Beckford in 1805",
      "ELINOR SHAFFER: Vathek and The Episodes of Vathek – separately, but not together",
      "ERIC DARTON: William Beckford's Most Popular Literary Work: Vathek",
      "JON MILLINGTON: Beckford's Pictures now in the National Gallery",
      "JON MILLINGTON: Beckford and Byron",
      "William Bankes' Account of his Surreptitious Visit to Fonthill",
      "An Early Beckford Story: The State of Innosence",
      "JON MILLINGTON: Popular Tales of the Germans",
      "JON MILLINGTON: Beckford's Lighting",
    ],
  },
  {
    vol: 2,
    contents: [
      "ELIZABETH HILLIARD: Marquise de Santa Cruz: Love-Letters to William Beckford. Transcribed and Annotated by Roger Kann",
      "PHILIP HEWAT-JABOOR: An Early Nineteenth Century Dihl and Guerhard Porcelain Cup and Saucer made for William Beckford",
      "GERLOF JANZEN: Beckford's Manuscript Notes in Two Travel Books from his Own Library",
      "LAURENT CHÂTEL: Back Where it Belongs or Vathek's French Womb",
      "JON MILLINGTON: Cyrus Redding: Beckford's First Biographer",
      "MALCOLM JACK: Westphalian Delights",
      "ERIC DARTON: William Beckford and Music 5. The Fonthill Abbey Organ?",
      "JOHN WHITEHEAD: Some French Purchases of William Beckford",
      "MALCOLM JACK: A Response to 'Vathek and The Episodes of Vathek – separately but not together' by Elinor Shaffer",
      "JON MILLINGTON: Fonthill after Beckford",
      "JOHN HARDY: A Beckford Bookcase",
      "JOHN HARDY: Candlesticks from Fonthill Abbey",
      "JON MILLINGTON: The Beckford Tower Trust Newsletter; Contents 1980-1994",
      "E. W. CAPPELOW: Beckford's Tomb and Tower",
    ],
  },
  {
    vol: 3,
    contents: [
      "PHILIPPA BISHOP: Leslie Theodore Hilliard (1905-1997)",
      "DAVID LONGBOURNE: A Painting of Fonthill Abbey Discovered",
      "J. C. M. NOLAN: 'Ah Dear Comet …': Beckford and the Apocalyptic Art of West and Danby",
      "MALCOLM JACK: Ramalhão: Beckford's First Sintra House",
      "MARIN LEVY: A Coffer from Lansdown Tower",
      "ADRIAN CRAFT: Subterranean Enlightenment at Fonthill",
      "JON MILLINGTON: Keszthely",
      "PAT MILLINGTON: Rice Pudding à la Vathek",
      "ERIC DARTON: William Beckford and Music: 6 Beckford and Mozart",
      "JON MILLINGTON: Editions of William Beckford's Works Published since 1967",
    ],
  },
  {
    vol: 4,
    contents: [
      "SIDNEY BLACKMORE: James Lees-Milne 1908-1997",
      "JAMES LEES-MILNE: Blake and Beckford: A Television Script",
      "JOÃO DE ALMEIDA FLOR: William Beckford: A Portuguese Milord",
      "DICK CLAÉSSON: At a Crossroads: Assessing and Redefining the Beckford Agenda",
      "ERIC DARTON: William Beckford and Religion",
      "J. C. M. NOLAN: The Devotee Glances at the Glorious One",
      "MALCOLM JACK: Monserrate: Beckford's Second Sintra House",
      "LAURENT CHÂTEL: Grottoes and Grotesques: The Art of Portraiture in Beckford's Writing",
      "JON MILLINGTON: A Transient Glean",
      "ANDRÉE RUSHTON: The Fonthill Barrier",
      "JON MILLINGTON: A Reissue of Storer's Fonthill",
    ],
  },
  {
    vol: 5,
    contents: [
      "MALCOLM JACK: Composing for Mozart",
      "ROBERT DRAKE: An English Fidalgo. William Beckford: An English Fidalgo. By Malcolm Jack. New York, 1997",
      "DICK CLAÉSSON: 'Sinking Apace into the Bosom of Delusions' William Beckford's Earliest Narrative of Travel – An introduction to Fragments of an English Tour",
      "WILLIAM BECKFORD: Fragments of an English Tour",
      "J. C. M. NOLAN: Beckford's Excursion to the Grande Chartreuse Revised",
      "ERIC DARTON: William Beckford and Music. 7. The Singers",
      "JON MILLINGTON: Beckford's Marginalia",
      "LAURENT CHÂTEL: The Mole, the Bat and the Fairy or the Sublime Grottoes of 'Fonthill Splendens'",
    ],
  },
  {
    vol: 6,
    contents: [
      "HELEN CLIFFORD: Clive Wainwright (1942-1999)",
      "MALCOLM JACK: Portuguese Pilgrims and Irish Seminarians",
      "THEO WILLIAMS: The Restoration of Beckford's Tower",
      "GERLOF JANZEN: Strange Bedfellows or the Ambivalent Feelings and Attitudes of William Beckford toward Holland and the Dutch",
      "ERIC DARTON: William Beckford and Music. 8. Publication and Performance of His Own Works",
      "JERRY NOLAN: William, Elizabeth & William or Female Impersonation and Radical Satire",
      "FRANK JULIAN GELLI: Borges on Beckford's Hell",
      "JONATHAN WEIGHTMAN: Staging Beckford: The Theatre of Place and The Theatre of Self",
      "STEPHEN CLARKE: The Troubled Gestation of Britton's Illustrations of Fonthill",
      "JON MILLINGTON: Nichols' Historical Notices of Fonthill Abbey",
    ],
  },
  {
    vol: 7,
    contents: [
      "JERRY NOLAN: Liber Veritatis or Why Has the Child been so Abused?",
      "KENNETH W. GRAHAM: An Introduction to the Broadview edition of Vathek with the Episodes of Vathek",
      "DICK CLAÉSSON: Introduction to 'Beckford's letter from Geneva to Lord Thurlow, 22 May 1778'",
      "WILLIAM BECKFORD: Beckford's letter from Geneva to Lord Thurlow, 22 May 1778",
      "ERIC DARTON: William Beckford: Composing for Mozart by Timothy Mowl",
      "JOHN MILLINGTON: Dramatisations of Vathek: Genlis and After",
      "STEPHEN CLARKE: No More Green Cloth Boardings: The Fastidious Book Collecting of William Beckford",
      "MALCOLM JACK: The Professor of Paederasty",
      "JON MILLINGTON: Engravings of Fonthill",
    ],
  },
  {
    vol: 8,
    contents: [
      "PHILIPPA BISHOP: Doris Elizabeth Hilliard (1903-2001)",
      "MIRELLA BILLI: Dreams, Walking Thoughts and Incidents: Beckford's Grand Tour as personal and cultural rite of passage",
      "ALEXANDER MARR: Enchanting Paths of Paradise",
      "PHILIP HEWAT-JABOOR: Creating a Beckford Exhibition",
      "JOHN WILTON-ELY: William Beckford 1760-1844: An Eye for the Magnificent",
      "ARNOLD WILSON: The William Beckford Exhibition at Dulwich",
      "MALCOLM JACK: Deconstructing the Caliph",
      "JON MILLINGTON: When Nelson went in Fonthill Abbey",
      "DIDIER GIRARD: William Beckford and the Gothic Charivari",
      "JERRY NOLAN: Brief Encounter of Beckford and Disraeli, or The Radical Pair of 'Oriental Voluptuaries'",
    ],
  },
  {
    vol: 9,
    contents: [
      "SIDNEY BLACKMORE: Sintra: A Glorious Eden. A Review",
      "MICHAEL BRIGGS: Beckford's Tower: A Reflection on the Past Ten Years",
      "ERIC DARTON: William Beckford and Music. 9. Music in Portugal – 1787",
      "KIRSTEN ELLIOTT: The Missing Islamic Summerhouse",
      "ROBERT J. GEMMETT: An Architect's View of Fonthill Abbey",
      "WILLIAM HAUPTMAN: Beckford, Brandoin, and the Gassner Monument in Zurich",
      "ROBERT IRWIN: An Incident at the Monastery of Alcobaça",
      "JON MILLINGTON: William Gregory's The Beckford Family",
      "JERRY NOLAN: Fatma Moussa-Mahmoud: Brief Encounter with an Egyptian Beckfordian",
      "STEPHANIE SMITH: Ill-favoured by the Sun: The Orientation of Slavery in William Beckford's Imagination",
      "LISA WHITE: Sir William Holburne and William Beckford",
    ],
  },
  {
    vol: 10,
    contents: [
      "RICHARD ALLEN: 'So who is William… ?'",
      "STEPHEN CLARKE: Beckford in Los Angeles",
      "MIKE C. FRASER, DANAË E. BECKFORD STANTON, & JOHN W. FOX: William Beckford's Paternal Half-siblings and Their Descendants",
      "ROBERT J. GEMMETT: Fonthill and its Abbey: 'The Haunt of Eager Curiosity'",
      "MALCOLM JACK: Magnificence in Eighteenth-Century Portugal",
      "JON MILLINGTON: Commemorative Medals of Alderman Beckford",
      "STEVE MOORE: Completing the Episode: Clarke Ashton-Smith and The Story of the Princess Zulkaïs and Prince Kalilah",
      "JERRY NOLAN: Redding's Alps and Beckford's Pencillings",
      "JOHN WILTON-ELY: A Mind of Fire",
    ],
  },
  {
    vol: 11,
    contents: [
      "JERRY NOLAN: The Myriad-Minded Book Collector",
      "NORMAN KITZ: The Search for a Lost 'Greek' Statue",
      "JON MILLINGTON: Henry Venn Lansdown, 1804-1860",
      "AMY FROST: Continuing the Art of Collecting at Beckford's Tower, Bath",
      "ANDRÉE RUSHTON: The Ballad of Fonthill Abbey",
      "LAURENT CHÂTEL: Orientalist Translation, Grafts and Outgrowths: New Perspectives on Beckford's 'Complete Works'",
      "JOSEPH FARINGTON: William Beckford in Farington's Diary",
    ],
  },
  {
    vol: 12,
    contents: [
      "STEPHEN CLARKE: Fonthill Abbey: A View and a Poem",
      "JERRY NOLAN: Redding's Recollections of Beckford 1844-1866",
      "KEVIN L. COPE: A Cultural Eruption in the East, Or, The Caliph of Wörlitz's Volcano Re-Commissioned",
      "SIDNEY BLACKMORE: A Swiss Excursion",
      "MIRELLA BILLI: An Eye for the Beautiful and the Sublime: Beckford and the Eighteenth-Century Aesthetic",
      "ANDREW FLETCHER: Beckford's Final Resting Place",
      "BET MCLEOD: Post Mortem – Some Notes",
      "MALCOLM JACK: Millennium Beckford",
    ],
  },
  {
    vol: 13,
    contents: [
      "STEPHEN CLARKE: The Dispersal of the Collection as Public Spectacle: The Fonthill Abbey Sale of 1822-23 and the Strawberry Hill Sale of 1842",
      "AMY FROST: Big Spender: The Impact on William Beckford of the 1807 Abolition of the Slave Trade",
      "SAMEH SHEHATA: William Beckford's Debt to Islam: An Orientalist Perspective on Beckford's Vathek",
      "RICHARD ALLEN: Dreams Revisited",
      "JOHN MILLINGTON: John Rutter's A Description of Fonthill Abbey and Demesne, 1822",
      "JERRY NOLAN: Beckford in Bath According to 'H'",
      "Eric Darton (1917-2006)",
      "Horace Walpole on Alderman Beckford",
    ],
  },
  {
    vol: 14,
    contents: [
      "AMY FROST: 'Oh what a scene of desolation!' A Further Insight into the ruins of Fonthill Abbey",
      "MICHAEL RANSON: Peter Beckford Esquire of Stepleton, Dorset",
      "JON MILLINGTON: The Railings for Beckford's Tomb",
      "MIKE C. FRASER, DANAË E. BECKFORD STANTON, & JOHN W. FOX: The Rise and Fall of the Beckford Name from the Seventeenth to the Nineteenth Century",
      "JERRY NOLAN: Three Journeys into the Islamic Orient",
      "JOÃO DE ALMEIDA FLOR: Lisbon History: A Reappraisal",
      "AMY FROST: Theodore Gethyn Williams, MBE, FRICS, 1924-2008",
    ],
  },
  {
    vol: 15,
    contents: [
      "JERRY NOLAN: Alderman Beckford, Famous Londoner: (On the 300th Anniversary of his Birth)",
      "DICK CLAÉSSON: The ABC of Beckfordiana: A Review",
      "JON MILLINGTON: Compiling the Beckford Bibliography",
      "MALCOLM JACK: Johnson and Beckford: Contrasting Orientalists",
      "AMY FROST: 'This sham university': Beckford, Goodridge and Queen's College, Bath",
      "JON MILLINGTON: Beckford, William Jay and Goodridge: Religious Beliefs",
      "TONY SEATON: Beckford and the Tourists: Gothic Performances at Lansdown Tower, Bath",
    ],
  },
  {
    vol: 16,
    contents: [
      "STEPHEN CLARKE: The Wormsley Beckfords: William Beckford's Books at the Wormsley Library",
      "JERRY NOLAN: Beckford & Jamaica Not Through Cruickshank's Telescope",
      "BRYAN WELCH: Beckford's Visit to the Escorial Palace and Archangel Gabriel's Feather",
      "JOHN COATES: The 'Double-Bind' in Vathek",
      "MIRELLA BILLI: Italian Beckfordiana: William Beckford in Italy",
      "TONY COOMBES: A Fonthill Childhood: How I became interested in William Beckford",
      "AMY FROST: Beckford's House of Card: An Analysis of the Fonthill Abbey Model",
      "MIN WOOD: Landscape as Biography: William Beckford's Fonthill",
    ],
  },
  {
    vol: 17,
    contents: [
      "DICK CLAÉSSON: Jerry Nolan, Beckford of Lansdown. A Homage for the 250th anniversary of his birth, London: The Agathopolis Company, 2010",
      "ROBERT J GEMMETT: The 'Fonthill Splendens' Demolition Sale of 1807",
      "MARIA-JOÃO DE NOGUEIRA FERRÃO VIEIRA CRAIGIE: Gregório Filipe Francisco Franchi (1770-1828) and his Family: Genealogical Notes",
      "MICHAEL RANSON: Fonthill Gifford Church and the Beckford Family",
      "KAZUHIKO YAMAGUCHI: The Poetic Sensibility of an Enfant Terrible: Beckford and the Esemplastic Power of His Imagination",
      "STEPHEN CLARKE: Some New Yet Familiar Views of Fonthill Abbey",
      "JOHN MILES: The Beckford Tower in 1940: A Schoolboy Remembers",
      "MALCOLM JACK: Octávio dos Santos, Espíritos das Luzes, Lisbon: Mundos, 2009",
    ],
  },
  {
    vol: 18,
    contents: [
      "ERIC RATCLIFF: Beckford, Batsford, and the View from Afar: The Twentieth-Century Rediscovery of Fonthill Abbey and Lansdown Tower",
      "ROBERT J. GEMMETT: The Two Faces of William Beckford",
      "HARRY FORD: Beckford Collected, or How Disraeli Borrowed a Destiny",
      "GERALD LUCKHURST: Here didst thou dwell … William Beckford at Monserrate",
    ],
  },
  {
    vol: 19,
    contents: [
      "CAROLINE DAKERS: After Beckford: An examination of the connections between James Morrison and Alfred Morrison, two collectors who once owned the Fonthill estate, and their infamous predecessor, William Beckford",
      "MALCOLM JACK: William Beckford, Vathek (Ed. with an intro. & notes by Thomas Keymer, Oxford: Oxford World Classics, 2013) A Review",
      "ROBERT J GEMMETT: Stage and Musical Adaptations of William Beckford's Vathek",
      "BRYAN WELCH: Why did William Beckford buy Edward Gibbon's Library?",
      "ERIC RATCLIFF: Henry Goodridge: An Antipodean Footnote",
    ],
  },
  {
    vol: 20,
    contents: [
      "CHARLES SEBAG-MONTEFIORE: The British as Art Collectors",
      "GEOFFREY BLUM: Chapman's Caliph, or 'I Think My Hero Was a Sod'",
      "STEPHEN CLARKE: 'The Almost Innumerable Descents of the Owner and His Late Wife': William Beckford's Use of Heraldry at Fonthill Abbey",
      "PIERRE DEGOTT: Beckford's Tales: Or, the Power of Musick",
      "BET MCLEOD: A Collectors' Corner: aspects of the Beckford Legacy at Hamilton Palace",
    ],
  },
  {
    vol: 21,
    contents: [
      "MALCOLM JACK: There formed thy Paradise: William Beckford in Portugal",
      "GERLOF JANZEN: Founding or finding the Beckford Society: Some Reminiscences of a Vice-President",
      "STEPHEN CLARKE: John Martin Robinson. James Wyatt (1746-1813) Architect to George III",
      "STEPHEN LLOYD: Portraits of William Beckford",
      "BET MCLEOD: A Commentary on William Beckford",
      "DIANA BERRY: Anthony Hobson: A Memoir",
    ],
  },
];

const availableVols = new Set([1, 2, 3, 4, 5, 12, 13, 14]);

function pdfFilename(vol: number) {
  return `beckfordjournalvol${vol}.pdf`;
}

export default function JournalPage() {
  const sorted = [...volumes].sort((a, b) => b.vol - a.vol);

  return (
    <div className="container-wide py-16">
      <div className="max-w-2xl mb-12">
        <p className="eyebrow mb-2">The Beckford Society</p>
        <h1 className="heading-display text-4xl mb-4">The Beckford Journal</h1>
        <hr className="rule-gilt my-6" />
        <p className="text-ink-soft leading-relaxed mb-4">
          <em>The Beckford Journal</em> has been published since 1995 to fulfil
          the Society's aim of supporting Beckford studies and scholarship.
          Volumes available for download are marked below. Volumes not yet
          digitised are listed with their full contents for reference.
        </p>
        <p className="text-ink-soft leading-relaxed">
          The Honorary Editor is Dr Kim Sloan. Email:{" "}
          <a href="mailto:ksloan2003@yahoo.co.uk" className="text-oxblood">
            ksloan2003@yahoo.co.uk
          </a>
        </p>
      </div>

      <div className="space-y-2">
        {sorted.map(({ vol, contents }) => {
          const available = availableVols.has(vol);
          return (
            <details
              key={vol}
              className="group border border-parchment-dim bg-parchment open:border-gilt"
            >
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none select-none hover:bg-parchment-dim transition-colors">
                <div className="flex items-center gap-4">
                  <span className="font-[family-name:var(--font-display)] text-xl text-ink">
                    Volume {vol}
                  </span>
                  {available && (
                    <span className="eyebrow text-gilt text-xs">
                      PDF available
                    </span>
                  )}
                </div>
                <span className="text-fog text-sm group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <ul className="px-6 pt-4 border-t border-parchment-dim space-y-2">
                {contents.map((item, i) => (
                  <li key={i} className="text-sm text-ink-soft leading-snug">
                    {item}
                  </li>
                ))}
              </ul>
              {available && (
                <div className="px-6 py-4">
                  <a
                    href={`/pdfs/journal/${pdfFilename(vol)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
                  >
                    Download PDF ↓
                  </a>
                </div>
              )}
            </details>
          );
        })}
      </div>

      <div className="mt-10 p-6 bg-parchment-dim border-l-2 border-gilt max-w-2xl">
        <p className="text-sm text-ink-soft leading-relaxed">
          Further volumes will be added as digitalisation continues. Copies are
          still available of many past volumes. Please contact the Secretary via
          email:{" "}
          <a href="mailto:sidney.blackmore@btinternet.com" className="text-oxblood">
            sidney.blackmore@btinternet.com
          </a>
        </p>
      </div>
    </div>
  );
}
