// Word Memorizer · İspanyolca gramer dersleri (A1)
// Örneklerde {…} işaretli kısım vurgulanır. Her örnek: [ispanyolca, türkçe]
// Her yerde: [kök] mavi, {ek / değişen kısım} kırmızı.
// kiyas: Türkçe ile yan yana gösterim, her satır [türkçe, ispanyolca]
window.GRAMER_PAKET = {
  dil: 'es',
  dersler: [
    {
      id: 'es-a1-01', seviye: 'A1', sure: 5,
      baslik: 'İsimlerin cinsiyeti ve artikeller',
      kisa: 'el, la, un, una',
      bolumler: [
        { t: 'metin', m: 'İspanyolcada her isim ya <b>eril</b> (masculino) ya da <b>dişil</b> (femenino) olur. Türkçede böyle bir ayrım olmadığı için en kolay yol, kelimeyi artikeliyle birlikte ezberlemektir: sadece <i>casa</i> değil, <b>la casa</b>.' },
        { t: 'tablo', h: 'Artikeller', bas: ['', 'Eril', 'Dişil'], s: [
          ['Belirli (İngilizcedeki the)', 'el libro', 'la casa'],
          ['Belirsiz (bir)', 'un libro', 'una casa']
        ] },
        { t: 'metin', h: 'Kelimenin sonu ipucu verir', m: '<b>-o</b> ile biten isimler çoğunlukla eril, <b>-a</b> ile bitenler çoğunlukla dişildir. <b>-ción, -sión, -dad, -tad</b> ile bitenler dişildir: <i>la canción, la ciudad</i>. <b>-or</b> ve <b>-aje</b> ile bitenler erildir: <i>el color, el viaje</i>.' },
        { t: 'ipucu', h: 'Dikkat: istisnalar', m: '<b>el</b> día, <b>el</b> mapa, <b>el</b> problema, <b>el</b> programa, <b>el</b> idioma -a ile bittiği halde eril; <b>la</b> mano, <b>la</b> foto, <b>la</b> radio -o ile bittiği halde dişildir.' },
        { t: 'ipucu', h: 'el agua', m: 'Vurgulu <b>a-</b> ile başlayan dişil isimler tekilde, okunuş kolaylığı için <b>el</b> alır: <i>el agua</i>. Ama kelime yine dişildir: <i>el agua fría</i> (soğuk su).' },
        { t: 'metin', h: 'Artikel Türkçeden çok daha sık kullanılır', m: 'Genel bir şeyden söz ederken de artikel gelir: <i>Me gusta <b>el</b> café</i> (Kahveyi severim). Türkçede artikel olmadığı için bu, başta en çok unutulan noktadır.' },
        { t: 'ornek', l: [
          ['{El} libro es nuevo.', 'Kitap yeni.'],
          ['{La} ciudad es muy grande.', 'Şehir çok büyük.'],
          ['Tengo {un} perro y {una} gata.', 'Bir köpeğim ve bir dişi kedim var.'],
          ['{El} problema es difícil.', 'Sorun zor.']
        ] }
      ],
      test: [
        { s: '___ casa (ev)', o: ['el', 'la', 'un'], d: 1, a: 'casa -a ile biter ve dişildir: la casa.' },
        { s: '"problema" hangi artikeli alır?', o: ['la problema', 'el problema'], d: 1, a: 'problema -a ile bittiği halde eril bir istisnadır: el problema.' },
        { s: '___ canción (şarkı)', o: ['el', 'la'], d: 1, a: '-ción ile biten isimler dişildir: la canción.' },
        { s: '"Bir kitap"', o: ['una libro', 'un libro', 'el libro'], d: 1, a: 'libro eril; belirsiz eril artikel un: un libro.' },
        { s: '"Su soğuk."', o: ['La agua está fría.', 'El agua está fría.', 'El agua está frío.'], d: 1, a: 'agua dişildir ama tekilde el alır; sıfat yine dişil kalır: el agua fría.' }
      ]
    },
    {
      id: 'es-a1-02', seviye: 'A1', sure: 5,
      baslik: 'Çoğul ve sıfat uyumu',
      kisa: 'casas, ciudades · coche rojo, casa roja',
      bolumler: [
        { t: 'metin', h: 'Çoğul yapmak', m: 'Ünlüyle biten isme <b>-s</b>, ünsüzle bitene <b>-es</b> eklenir. <b>-z</b> ile bitenlerde z, c olur: <b>-ces</b>.' },
        { t: 'tablo', bas: ['Tekil', 'Çoğul'], s: [
          ['el libro', 'los [libro]{s}'],
          ['la casa', 'las [casa]{s}'],
          ['la ciudad', 'las [ciudad]{es}'],
          ['el lápiz', 'los [lápi]{ces}'],
          ['un amigo', 'unos [amigo]{s} (birkaç arkadaş)']
        ] },
        { t: 'metin', h: 'Sıfat isme uyar', m: 'Sıfatlar genellikle isimden <b>sonra</b> gelir ve isme hem cinsiyet hem sayı bakımından uyar: <i>el coche rojo, la casa roja, los coches rojos, las casas rojas</i>.' },
        { t: 'tablo', bas: ['Sıfat türü', 'Eril', 'Dişil', 'Çoğul'], s: [
          ['-o ile biten', '[roj]{o}', '[roj]{a}', '[roj]{os} / [roj]{as}'],
          ['-e ile biten', 'grande', 'grande', '[grande]{s}'],
          ['Ünsüzle biten', 'fácil', 'fácil', '[fácil]{es}']
        ] },
        { t: 'ipucu', h: 'Karışık grup', m: 'İçinde en az bir erkek olan grupta eril çoğul kullanılır: <i>mis padres</i> (annem ve babam), <i>los niños</i> (çocuklar, kız ve erkek).' },
        { t: 'ipucu', h: 'İsimden önce gelen sıfatlar', m: '<b>bueno</b> isimden önce <b>buen</b> olur: <i>un buen libro</i>. <b>grande</b> isimden önce <b>gran</b> olur ve "büyük, önemli" anlamı kazanır: <i>una gran ciudad</i>.' },
        { t: 'ornek', l: [
          ['Tengo dos [hermano]{s}.', 'İki kardeşim var.'],
          ['Las [casa]{s} son [blanc]{as}.', '[Ev]{ler} beyaz.'],
          ['Es un chico [alt]{o}.', 'Uzun boylu bir çocuk.'],
          ['Son unas [chica]{s} muy [simpátic]{as}.', 'Çok sevimli [kız]{lar}.']
        ] }
      ],
      test: [
        { s: '"la ciudad" çoğulu', o: ['las ciudads', 'las ciudades', 'los ciudades'], d: 1, a: 'Ünsüzle biten isme -es eklenir; artikel de çoğul dişil olur: las ciudades.' },
        { s: '"el lápiz" çoğulu', o: ['los lápizs', 'los lápices', 'los lápizes'], d: 1, a: '-z ile biten isimlerde z, c olur: los lápices.' },
        { s: '"Kırmızı arabalar"', o: ['los coches rojos', 'los coches roja', 'las coches rojos'], d: 0, a: 'coche eril; sıfat da eril çoğul olur: los coches rojos.' },
        { s: 'una casa ___ (büyük)', o: ['grande', 'granda', 'grandes'], d: 0, a: '-e ile biten sıfatlar dişilde değişmez: una casa grande.' },
        { s: '"Annem ve babam" = mis ___', o: ['madres', 'padres', 'padras'], d: 1, a: 'Karışık grupta eril çoğul kullanılır: mis padres.' }
      ]
    },
    {
      id: 'es-a1-03', seviye: 'A1', sure: 6,
      baslik: 'Şahıs zamirleri ve ser',
      kisa: 'yo soy, tú eres · tú mu usted mı?',
      bolumler: [
        { t: 'tablo', h: 'Şahıs zamirleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['yo', 'ben'],
          ['tú', 'sen (samimi)'],
          ['él / ella / usted', 'o (erkek / kadın) / siz (resmî, tek kişi)'],
          ['nosotros / nosotras', 'biz'],
          ['vosotros / vosotras', 'siz (samimi, çoğul; İspanya)'],
          ['ellos / ellas / ustedes', 'onlar / siz (resmî, çoğul)']
        ] },
        { t: 'metin', h: 'tú mu, usted mı?', m: 'Arkadaş, aile ve yaşıtlarla <b>tú</b>; yaşça büyüklerle, resmî ortamda ve müşteriyle <b>usted</b> kullanılır. Türkçedeki "sen / siz" ayrımına benzer. Dikkat: <b>usted</b> fiili "o" biçiminde çekilir: <i>¿Cómo está usted?</i> (Nasılsınız?)' },
        { t: 'ipucu', h: 'Latin Amerika farkı', m: '<b>vosotros</b> yalnızca İspanya\'da kullanılır. Latin Amerika\'da kalabalığa hitap ederken samimi de olsa hep <b>ustedes</b> denir.' },
        { t: 'tablo', h: 'ser (olmak) fiilinin çekimi', bas: ['Kişi', 'ser'], s: [
          ['yo', 'soy'],
          ['tú', 'eres'],
          ['él / ella / usted', 'es'],
          ['nosotros / nosotras', 'somos'],
          ['vosotros / vosotras', 'sois'],
          ['ellos / ellas / ustedes', 'son']
        ] },
        { t: 'metin', h: 'Zamir çoğu zaman söylenmez', m: 'Fiilin eki kişiyi zaten gösterdiği için zamir genellikle düşer: <i>Soy Deniz</i> (Ben Deniz\'im). Zamir, vurgu ya da karşılaştırma için söylenir: <i><b>Yo</b> soy turco y <b>ella</b> es española.</i> Türkçede de "Ben geldim" yerine "Geldim" dediğimiz gibi.' },
        { t: 'ornek', l: [
          ['{Soy} de Turquía.', 'Türkiyeliyim.'],
          ['¿De dónde {eres}?', 'Nerelisin?'],
          ['{Somos} amigos.', 'Biz arkadaşız.'],
          ['¿Usted {es} el profesor?', 'Siz öğretmen misiniz?']
        ] }
      ],
      test: [
        { s: '"biz" İspanyolcada', o: ['vosotros', 'nosotros', 'ellos'], d: 1, a: 'nosotros (kadınlardan oluşan grupta nosotras) "biz" demektir.' },
        { s: 'Ellos ___ estudiantes.', o: ['somos', 'es', 'son'], d: 2, a: 'ellos (onlar) için ser fiili son olur.' },
        { s: 'tú ___', o: ['eres', 'es', 'soy'], d: 0, a: 'tú için ser fiili eres olur.' },
        { s: 'Yaşlı ve tanımadığın birine nasıl hitap edersin?', o: ['tú', 'usted'], d: 1, a: 'Resmî ve saygılı hitap usted\'dir.' },
        { s: '"Soy médico." Kim doktor?', o: ['ben', 'o', 'sen'], d: 0, a: 'soy, yo (ben) için ser fiilidir: "Doktorum."' }
      ]
    },
    {
      id: 'es-a1-04', seviye: 'A1', sure: 6,
      baslik: 'ser mi, estar mı?',
      kisa: 'İki farklı "olmak"',
      bolumler: [
        { t: 'metin', m: 'İspanyolcada "olmak" için iki fiil vardır. <b>ser</b> bir şeyin <b>ne olduğunu</b>, kalıcı özelliğini anlatır. <b>estar</b> ise <b>nerede</b> olduğunu ve <b>nasıl</b> (geçici durumu) olduğunu anlatır.' },
        { t: 'tablo', h: 'estar fiilinin çekimi', bas: ['Kişi', 'estar'], s: [
          ['yo', '[est]{oy}'],
          ['tú', '[est]{ás}'],
          ['él / ella / usted', '[est]{á}'],
          ['nosotros / nosotras', '[est]{amos}'],
          ['vosotros / vosotras', '[est]{áis}'],
          ['ellos / ellas / ustedes', '[est]{án}']
        ] },
        { t: 'tablo', h: 'Hangisi ne zaman?', bas: ['ser', 'estar'], s: [
          ['Kimlik: Soy Ana.', 'Konum: Estoy en casa.'],
          ['Meslek: Es médico.', 'Duygu: Está contento.'],
          ['Köken: Somos de Turquía.', 'Sağlık: Estoy enfermo.'],
          ['Karakter: Es simpática.', 'Geçici durum: La sopa está fría.'],
          ['Saat, tarih: Son las tres.', 'Süren eylem: Estoy comiendo.']
        ] },
        { t: 'ipucu', h: 'Anlamı değişen sıfatlar', m: '<b>ser aburrido</b> sıkıcı biri olmak, <b>estar aburrido</b> sıkılmış olmak · <b>ser listo</b> zeki olmak, <b>estar listo</b> hazır olmak · <b>ser rico</b> zengin olmak, <b>estar rico</b> lezzetli olmak.' },
        { t: 'ipucu', h: 'Konum her zaman estar', m: 'Şehir ya da bina gibi kalıcı yerlerde bile konum <b>estar</b> ile söylenir: <i>Madrid está en España.</i> Ama bir etkinliğin nerede yapılacağı <b>ser</b> ile: <i>La fiesta es en mi casa.</i>' },
        { t: 'ornek', l: [
          ['Mi madre {es} profesora.', 'Annem öğretmen.'],
          ['Hoy {estoy} muy cansado.', 'Bugün çok yorgunum.'],
          ['El hotel {está} cerca de la playa.', 'Otel plaja yakın.'],
          ['{Es} la una.', 'Saat bir.']
        ] }
      ],
      test: [
        { s: 'Madrid ___ en España.', o: ['es', 'está'], d: 1, a: 'Konum her zaman estar ile söylenir.' },
        { s: 'Yo ___ turco.', o: ['soy', 'estoy'], d: 0, a: 'Köken ve uyruk kalıcı özelliktir: ser.' },
        { s: 'Hoy ___ triste.', o: ['soy', 'estoy'], d: 1, a: 'Bugünkü ruh hali geçicidir: estar.' },
        { s: '"Çorba lezzetli." La sopa ___ rica.', o: ['es', 'está'], d: 1, a: 'estar rico "lezzetli olmak" demektir; ser rico "zengin olmak".' },
        { s: 'Mi hermano ___ médico.', o: ['es', 'está'], d: 0, a: 'Meslek ser ile söylenir.' }
      ]
    },
    {
      id: 'es-a1-05', seviye: 'A1', sure: 7,
      baslik: 'Şimdiki zaman: düzenli fiiller',
      kisa: 'hablar, comer, vivir · olumsuz ve soru',
      bolumler: [
        { t: 'metin', m: 'İspanyolca fiiller mastar halinde <b>-ar</b>, <b>-er</b> ya da <b>-ir</b> ile biter. Şimdiki zaman için bu son atılır ve kişiye göre ek gelir.' },
        { t: 'tablo', bas: ['Kişi', 'hablar (konuşmak)', 'comer (yemek)', 'vivir (yaşamak)'], s: [
          ['yo', '[habl]{o}', '[com]{o}', '[viv]{o}'],
          ['tú', '[habl]{as}', '[com]{es}', '[viv]{es}'],
          ['él / ella / usted', '[habl]{a}', '[com]{e}', '[viv]{e}'],
          ['nosotros', '[habl]{amos}', '[com]{emos}', '[viv]{imos}'],
          ['vosotros', '[habl]{áis}', '[com]{éis}', '[viv]{ís}'],
          ['ellos / ustedes', '[habl]{an}', '[com]{en}', '[viv]{en}']
        ] },
        { t: 'metin', h: 'İki zamanı birden karşılar', m: 'Bu zaman Türkçedeki hem şimdiki hem geniş zamanı karşılar: <i>Hablo español</i> = İspanyolca konuşuyorum / konuşurum.' },
        { t: 'metin', h: 'Olumsuz ve soru', m: 'Olumsuz için fiilin hemen önüne <b>no</b> gelir: <i>No hablo alemán.</i> Soru için cümle aynı kalır, ses yükselir ve yazıda başa ters soru işareti konur: <i>¿Hablas inglés?</i> Soru kelimesi başa gelir: <i>¿Dónde vives?</i>' },
        { t: 'ipucu', h: '-er ve -ir fiilleri', m: '-er ve -ir fiillerinin çekimi yalnızca <b>nosotros</b> ve <b>vosotros</b>\'ta ayrılır: <i>comemos / vivimos</i>. Gerisi aynıdır.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'İki dilde de kişi, fiilin sonundaki ekten anlaşılır. Fark: İspanyolcada "-iyor" gibi ayrı bir zaman eki yoktur; tek ek hem zamanı hem kişiyi taşır.', l: [
          ['[konuş]{uyorum}', '[habl]{o}'],
          ['[konuş]{uyorsun}', '[habl]{as}'],
          ['[konuş]{uyor}', '[habl]{a}'],
          ['[konuş]{uyoruz}', '[habl]{amos}']
        ] },
        { t: 'ornek', l: [
          ['[Habl]{o} un poco de español.', 'Biraz İspanyolca [konuş]{uyorum}.'],
          ['¿Dónde [viv]{es}?', 'Nerede [otur]{uyorsun}?'],
          ['Nosotros [com]{emos} a las dos.', 'Saat ikide yemek [ye]{riz}.'],
          ['Mis padres no [trabaj]{an} hoy.', 'Annemle babam bugün [çalış]{mıyor}.']
        ] }
      ],
      test: [
        { s: 'yo + hablar', o: ['hablo', 'habla', 'hablas'], d: 0, a: '"ben" için -o eki gelir: hablo.' },
        { s: 'nosotros + vivir', o: ['vivemos', 'vivimos', 'viven'], d: 1, a: '-ir fiillerinde nosotros eki -imos: vivimos.' },
        { s: 'ellos + comer', o: ['comen', 'coman', 'comemos'], d: 0, a: '-er fiillerinde "onlar" eki -en: comen.' },
        { s: '"İngilizce konuşmuyorum."', o: ['No hablo inglés.', 'Hablo no inglés.', 'No hablas inglés.'], d: 0, a: 'no fiilin hemen önüne gelir; "ben" için hablo.' },
        { s: 'tú + trabajar', o: ['trabajo', 'trabajas', 'trabaja'], d: 1, a: '-ar fiillerinde "sen" eki -as: trabajas.' }
      ]
    },
    {
      id: 'es-a1-06', seviye: 'A1', sure: 6,
      baslik: 'Olumsuzluk ve soru kelimeleri',
      kisa: 'no, nada, nunca · qué, dónde, cuándo',
      bolumler: [
        { t: 'metin', m: 'Olumsuz cümle kurmak çok kolaydır: fiilin hemen önüne <b>no</b> gelir. "Hayır" da aynı kelimedir, bu yüzden cevaplarda iki kez duyulur: <i>No, no hablo francés.</i> (Hayır, Fransızca konuşmuyorum.)' },
        { t: 'metin', h: 'Çifte olumsuzluk doğrudur', m: 'Türkçedeki "Hiçbir şey <b>yok</b>" gibi, İspanyolcada da olumsuz kelime fiilden sonra gelirse fiilin önünde <b>no</b> kalır: <i>No tengo nada.</i> Olumsuz kelime fiilin önüne geçerse <b>no</b> düşer: <i>Nunca como carne.</i>' },
        { t: 'tablo', bas: ['Kelime', 'Anlamı', 'Örnek'], s: [
          ['nada', 'hiçbir şey', '[No] quiero {nada}.'],
          ['nadie', 'hiç kimse', '[No] viene {nadie}.'],
          ['nunca', 'asla, hiç', '[No] fumo {nunca}.'],
          ['tampoco', 'o da değil', 'Yo {tampoco}.']
        ] },
        { t: 'tablo', h: 'Soru kelimeleri', bas: ['İspanyolca', 'Türkçe', 'Örnek'], s: [
          ['qué', 'ne', '¿Qué es esto?'],
          ['quién / quiénes', 'kim / kimler', '¿Quién es ella?'],
          ['dónde', 'nerede', '¿Dónde está el baño?'],
          ['cuándo', 'ne zaman', '¿Cuándo llegas?'],
          ['cómo', 'nasıl', '¿Cómo te llamas?'],
          ['por qué', 'neden', '¿Por qué estudias español?'],
          ['cuánto / cuánta', 'ne kadar', '¿Cuánto cuesta?'],
          ['cuántos / cuántas', 'kaç', '¿Cuántos años tienes?'],
          ['cuál / cuáles', 'hangisi / hangileri', '¿Cuál es tu número?']
        ] },
        { t: 'ipucu', h: 'Aksan işareti ve ters soru işareti', m: 'Soru kelimeleri her zaman aksan işareti taşır: <b>qué, dónde, cómo</b>. Yazıda soru <b>¿</b> ile başlar, <b>?</b> ile biter.' },
        { t: 'ipucu', h: 'por qué ve porque', m: '<b>¿Por qué?</b> (iki kelime, aksanlı) "neden?" demektir. Cevaptaki <b>porque</b> (tek kelime, aksansız) "çünkü" demektir: <i>Porque me gusta.</i>' },
        { t: 'ornek', l: [
          ['{No} entiendo.', 'Anlamıyorum.'],
          ['{No} tengo {nada}.', 'Hiçbir şeyim yok.'],
          ['¿{Dónde} vives?', 'Nerede oturuyorsun?'],
          ['¿{Cuánto} cuesta este libro?', 'Bu kitap ne kadar?'],
          ['¿{Por qué} no vienes? — {Porque} estoy cansado.', 'Neden gelmiyorsun? — Çünkü yorgunum.']
        ] }
      ],
      test: [
        { s: '"Kahve içmiyorum."', o: ['Bebo no café.', 'No bebo café.', 'No café bebo.'], d: 1, a: 'no her zaman fiilin hemen önüne gelir.' },
        { s: '"Hiçbir şey istemiyorum."', o: ['No quiero nada.', 'Quiero nada.', 'No quiero algo.'], d: 0, a: 'nada fiilden sonra gelince fiilin önünde no kalır: No quiero nada.' },
        { s: '¿___ te llamas? (Adın ne?)', o: ['Qué', 'Cómo', 'Quién'], d: 1, a: 'İspanyolcada ad "nasıl" ile sorulur: ¿Cómo te llamas?' },
        { s: '¿___ años tienes?', o: ['Cuánto', 'Cuántas', 'Cuántos'], d: 2, a: 'años eril çoğuldur, soru kelimesi de ona uyar: cuántos.' },
        { s: '"Çünkü" hangisi?', o: ['por qué', 'porque'], d: 1, a: 'porque (bitişik, aksansız) "çünkü"; por qué "neden" demektir.' }
      ]
    },
    {
      id: 'es-a1-07', seviye: 'A1', sure: 6,
      baslik: 'tener ve hay',
      kisa: 'Sahiplik, yaş, tener que · var / yok',
      bolumler: [
        { t: 'metin', m: '<b>tener</b> "sahip olmak" demektir ve düzensizdir. Türkçede "Arabam <b>var</b>" deriz; İspanyolcada "Bir arabaya sahibim" denir: <i>Tengo un coche.</i>' },
        { t: 'tablo', bas: ['Kişi', 'tener'], s: [
          ['yo', '[ten]{go}'],
          ['tú', '[t]{ie}[n]{es}'],
          ['él / ella / usted', '[t]{ie}[n]{e}'],
          ['nosotros', '[ten]{emos}'],
          ['vosotros', '[ten]{éis}'],
          ['ellos / ustedes', '[t]{ie}[n]{en}']
        ] },
        { t: 'metin', h: 'Yaş ve duyumlar tener ile söylenir', m: 'İspanyolcada yaş "olunmaz", yaşa "sahip olunur": <i>Tengo veinte años.</i> Açlık, susuzluk gibi duyumlar da böyledir.' },
        { t: 'tablo', bas: ['Kalıp', 'Anlamı'], s: [
          ['tener … años', '… yaşında olmak'],
          ['tener hambre / sed', 'aç / susamış olmak'],
          ['tener frío / calor', 'üşümek / sıcaklamak'],
          ['tener sueño', 'uykusu olmak'],
          ['tener prisa', 'acelesi olmak'],
          ['tener que + mastar', '-mek zorunda olmak']
        ] },
        { t: 'metin', h: 'hay: var', m: '<b>hay</b> bir şeyin var olduğunu söyler ve hiç değişmez: tekilde de çoğulda da <b>hay</b>. Olumsuzu <b>no hay</b> (yok). <i>Hay un banco.</i> · <i>Hay dos bancos.</i> · <i>No hay leche.</i>' },
        { t: 'ipucu', h: 'hay mı, está mı?', m: 'Bilinmeyen, ilk kez söz edilen şey için <b>hay</b> (un, una, sayı ile): <i>Hay un hotel cerca.</i> Bilinen, belirli şeyin yeri için <b>estar</b> (el, la, mi ile): <i>El hotel está cerca.</i>' },
        { t: 'ornek', l: [
          ['{Tengo} dos hermanos.', 'İki kardeşim var.'],
          ['¿Cuántos años {tienes}?', 'Kaç yaşındasın?'],
          ['{Tengo que} trabajar mañana.', 'Yarın çalışmak zorundayım.'],
          ['¿{Hay} un supermercado por aquí?', 'Buralarda bir süpermarket var mı?'],
          ['{No hay} problema.', 'Sorun yok.']
        ] }
      ],
      test: [
        { s: 'yo + tener', o: ['teno', 'tengo', 'tiene'], d: 1, a: 'tener fiilinin "ben" hali düzensizdir: tengo.' },
        { s: '"Yirmi yaşındayım."', o: ['Soy veinte años.', 'Estoy veinte años.', 'Tengo veinte años.'], d: 2, a: 'Yaş tener ile söylenir: Tengo veinte años.' },
        { s: '___ dos sillas en la cocina.', o: ['Hay', 'Están', 'Son'], d: 0, a: 'İlk kez söz edilen şeyin varlığı hay ile söylenir; çoğulda da değişmez.' },
        { s: 'El museo ___ en el centro.', o: ['hay', 'está'], d: 1, a: 'Belirli (el museo) bir şeyin yeri estar ile söylenir.' },
        { s: '"Açım."', o: ['Estoy hambre.', 'Tengo hambre.', 'Soy hambre.'], d: 1, a: 'Açlık tener ile söylenir: Tengo hambre.' }
      ]
    },
    {
      id: 'es-a1-08', seviye: 'A1', sure: 5,
      baslik: 'İyelik sıfatları',
      kisa: 'mi, tu, su, nuestro, vuestro',
      bolumler: [
        { t: 'metin', m: 'Türkçede iyelik bir ektir: ev<b>im</b>. İspanyolcada ismin önüne gelen ayrı bir kelimedir: <b>mi</b> casa. Bu kelime artikelin yerini alır; <i>la mi casa</i> denmez.' },
        { t: 'tablo', bas: ['Sahip', 'Tekil', 'Çoğul'], s: [
          ['benim', 'mi', 'mi{s}'],
          ['senin', 'tu', 'tu{s}'],
          ['onun / sizin (usted)', 'su', 'su{s}'],
          ['bizim', 'nuestr{o} / nuestr{a}', 'nuestr{os} / nuestr{as}'],
          ['sizin (vosotros)', 'vuestr{o} / vuestr{a}', 'vuestr{os} / vuestr{as}'],
          ['onların / sizin (ustedes)', 'su', 'su{s}']
        ] },
        { t: 'metin', h: 'Sahibe değil, sahip olunana uyar', m: 'İyelik sıfatı <b>sahip olunan şeyin</b> sayısına (nuestro ve vuestro\'da cinsiyetine de) uyar: <i>mi libro → mis libros</i>, <i>nuestra casa → nuestras casas</i>. Sahibin kadın ya da erkek olması bir şey değiştirmez.' },
        { t: 'ipucu', h: 'su çok anlamlıdır', m: '<b>su</b> "onun, onların, sizin" anlamlarına gelebilir. Karışıklık olursa <b>de</b> ile açılır: <i>el coche <b>de él</b></i> (onun arabası, erkek), <i>el coche <b>de ella</b></i> (onun arabası, kadın), <i>el coche <b>de usted</b></i> (sizin arabanız).' },
        { t: 'ipucu', h: 'tu ve tú', m: 'Aksansız <b>tu</b> "senin", aksanlı <b>tú</b> "sen" demektir: <i>Tú tienes tu libro.</i>' },
        { t: 'ornek', l: [
          ['{Mi} madre es médica.', 'Annem doktor.'],
          ['¿Dónde están {tus} llaves?', 'Anahtarların nerede?'],
          ['{Nuestra} casa es pequeña.', 'Evimiz küçük.'],
          ['Ana y {su} hermano viven aquí.', 'Ana ve erkek kardeşi burada oturuyor.'],
          ['{Mis} padres son de Ankara.', 'Annemle babam Ankaralı.']
        ] }
      ],
      test: [
        { s: '"Kitaplarım"', o: ['mi libros', 'mis libros', 'mis libro'], d: 1, a: 'İsim çoğul olunca iyelik sıfatı da çoğul olur: mis libros.' },
        { s: '"Evimiz" (casa dişil)', o: ['nuestro casa', 'nuestra casa', 'nuestras casa'], d: 1, a: 'nuestro, sahip olunan ismin cinsiyetine uyar: nuestra casa.' },
        { s: '"Senin araban"', o: ['tú coche', 'tu coche', 'el tu coche'], d: 1, a: 'Aksansız tu "senin" demektir; artikel kullanılmaz.' },
        { s: 'María y ___ hijos (onun çocukları)', o: ['su', 'sus', 'suyos'], d: 1, a: 'hijos çoğul olduğu için sus gelir.' },
        { s: '"su libro" hangisi olamaz?', o: ['onun kitabı', 'sizin kitabınız', 'benim kitabım'], d: 2, a: 'su "onun, onların, sizin" olabilir; "benim" için mi kullanılır.' }
      ]
    },
    {
      id: 'es-a1-09', seviye: 'A1', sure: 5,
      baslik: 'İşaret sıfatları: bu, şu, o',
      kisa: 'este, ese, aquel · esto, eso',
      bolumler: [
        { t: 'metin', m: 'Güzel haber: İspanyolcada da Türkçedeki gibi <b>üç uzaklık</b> vardır. <b>este</b> (bu) konuşana yakın, <b>ese</b> (şu) dinleyene yakın ya da biraz uzakta, <b>aquel</b> (o) ikisinden de uzakta olanı gösterir.' },
        { t: 'tablo', bas: ['', 'Eril tekil', 'Dişil tekil', 'Eril çoğul', 'Dişil çoğul'], s: [
          ['bu', 'est{e}', 'est{a}', 'est{os}', 'est{as}'],
          ['şu', 'es{e}', 'es{a}', 'es{os}', 'es{as}'],
          ['o (uzak)', 'aquel', 'aquell{a}', 'aquell{os}', 'aquell{as}']
        ] },
        { t: 'metin', h: 'İsme uyar', m: 'İşaret sıfatı ismin önüne gelir ve cinsiyetine, sayısına uyar: <i>este libro, esta casa, estos libros, estas casas</i>.' },
        { t: 'tablo', h: 'Yer zarflarıyla eşleşir', bas: ['İşaret', 'Yer zarfı', 'Anlamı'], s: [
          ['este', 'aquí', 'burada'],
          ['ese', 'ahí', 'şurada'],
          ['aquel', 'allí', 'orada']
        ] },
        { t: 'ipucu', h: 'Nötr biçimler: esto, eso, aquello', m: 'Adını bilmediğin bir şeyi ya da bir durumu gösterirken nötr biçim kullanılır; bunlar isimle birlikte kullanılmaz: <i>¿Qué es <b>esto</b>?</i> (Bu ne?), <i><b>Eso</b> es verdad.</i> (Bu doğru.)' },
        { t: 'ipucu', h: 'Dikkat: este, esto değil', m: 'Eril tekil biçim <b>este</b>\'dir: <i>este libro</i>. <i>Esto libro</i> yanlıştır; <b>esto</b> yalnızca tek başına kullanılır.' },
        { t: 'ornek', l: [
          ['{Este} café está muy bueno.', 'Bu kahve çok güzel.'],
          ['¿Cuánto cuesta {esa} camisa?', 'Şu gömlek ne kadar?'],
          ['{Aquella} casa es de mi abuelo.', 'O (uzaktaki) ev dedemin.'],
          ['¿Qué es {esto}?', 'Bu ne?'],
          ['{Estos} zapatos son nuevos.', 'Bu ayakkabılar yeni.']
        ] }
      ],
      test: [
        { s: '___ casa (bu ev)', o: ['este', 'esta', 'esto'], d: 1, a: 'casa dişil tekil: esta casa.' },
        { s: '___ libros (şu kitaplar)', o: ['esos', 'esas', 'eses'], d: 0, a: 'libros eril çoğul: esos libros.' },
        { s: '"Bu ne?"', o: ['¿Qué es este?', '¿Qué es esto?', '¿Qué es esta?'], d: 1, a: 'Adı bilinmeyen şey için nötr biçim kullanılır: esto.' },
        { s: '___ libro (bu kitap)', o: ['esto', 'este', 'esta'], d: 1, a: 'Eril tekil biçim este\'dir; esto isimle kullanılmaz.' },
        { s: '"allí" (orada) hangisiyle eşleşir?', o: ['este', 'ese', 'aquel'], d: 2, a: 'aquí – este, ahí – ese, allí – aquel.' }
      ]
    },
    {
      id: 'es-a1-10', seviye: 'A1', sure: 8,
      baslik: 'Düzensiz ve kök değiştiren fiiller',
      kisa: 'quiero, puedo, pido · hago, voy',
      bolumler: [
        { t: 'metin', m: 'En çok kullanılan fiillerin bir kısmı şimdiki zamanda düzenli kalıba tam uymaz. Neyse ki değişiklikler belli kalıplara göre olur ve ekler yine aynıdır.' },
        { t: 'metin', h: 'Kök değiştiren fiiller', m: 'Bu fiillerde kökteki ünlü vurgulu olduğunda değişir: <b>e → ie</b>, <b>o → ue</b> ya da <b>e → i</b>. <b>nosotros</b> ve <b>vosotros</b> biçimlerinde değişiklik <b>olmaz</b>.' },
        { t: 'tablo', bas: ['Kişi', 'querer (e→ie)', 'poder (o→ue)', 'pedir (e→i)'], s: [
          ['yo', '[qu]{ie}[ro]', '[p]{ue}[do]', '[p]{i}[do]'],
          ['tú', '[qu]{ie}[res]', '[p]{ue}[des]', '[p]{i}[des]'],
          ['él / ella / usted', '[qu]{ie}[re]', '[p]{ue}[de]', '[p]{i}[de]'],
          ['nosotros', '[queremos]', '[podemos]', '[pedimos]'],
          ['vosotros', '[queréis]', '[podéis]', '[pedís]'],
          ['ellos / ustedes', '[qu]{ie}[ren]', '[p]{ue}[den]', '[p]{i}[den]']
        ] },
        { t: 'ipucu', h: 'Aynı kalıptaki fiiller', m: '<b>e → ie:</b> pensar, empezar, entender, preferir, cerrar · <b>o → ue:</b> dormir, volver, encontrar, costar; jugar (u → ue) · <b>e → i:</b> servir, repetir, seguir.' },
        { t: 'tablo', h: 'Yalnızca "yo" biçimi düzensiz olanlar', bas: ['Mastar', 'yo', 'Anlamı'], s: [
          ['hacer', 'ha{go}', 'yapmak'],
          ['poner', 'pon{go}', 'koymak'],
          ['salir', 'sal{go}', 'çıkmak'],
          ['saber', '{sé}', 'bilmek'],
          ['ver', 'v{eo}', 'görmek'],
          ['dar', 'd{oy}', 'vermek'],
          ['conocer', 'cono{zco}', 'tanımak']
        ] },
        { t: 'tablo', h: 'ir (gitmek): tamamen düzensiz', bas: ['yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'], s: [
          ['voy', 'vas', 'va', 'vamos', 'vais', 'van']
        ] },
        { t: 'ornek', l: [
          ['[Qu]{ie}[ro] un café, por favor.', 'Bir kahve [isti]{yorum}, lütfen.'],
          ['¿[P]{ue}[des] ayudarme?', 'Bana yardım [ed]{ebilir misin}?'],
          ['No [ent]{ie}[ndo] la pregunta.', 'Soruyu [anla]{mıyorum}.'],
          ['¿Qué [hac]{es} los domingos?', 'Pazar günleri ne [yap]{arsın}?'],
          ['{Voy} al trabajo en metro.', 'İşe metroyla [gid]{iyorum}.']
        ] }
      ],
      test: [
        { s: 'yo + querer', o: ['quero', 'quiero', 'queiro'], d: 1, a: 'querer fiilinde e → ie olur: quiero.' },
        { s: 'nosotros + poder', o: ['puedemos', 'podemos', 'puedamos'], d: 1, a: 'nosotros biçiminde kök değişmez: podemos.' },
        { s: 'yo + hacer', o: ['haco', 'hago', 'hazo'], d: 1, a: 'hacer fiilinin "ben" hali düzensizdir: hago.' },
        { s: 'ellos + dormir', o: ['dormen', 'duermen', 'dormin'], d: 1, a: 'dormir fiilinde o → ue olur: duermen.' },
        { s: 'yo + ir', o: ['io', 'voy', 'vo'], d: 1, a: 'ir tamamen düzensizdir: voy, vas, va, vamos, vais, van.' }
      ]
    },
    {
      id: 'es-a1-11', seviye: 'A1', sure: 6,
      baslik: 'gustar: hoşuma gidiyor',
      kisa: 'me gusta, te gustan · también, tampoco',
      bolumler: [
        { t: 'metin', m: 'İspanyolcada "Kahveyi severim" denmez; "Kahve <b>hoşuma gider</b>" denir. Yani cümlenin öznesi <b>sevilen şeydir</b>, seven kişi ise başa gelen küçük bir zamirle gösterilir: <i>{Me} [gusta] el café.</i>' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Yapı Türkçedeki "hoşuma gidiyor" ile birebir aynıdır: Türkçede kişiyi sondaki ek, İspanyolcada baştaki zamir gösterir.', l: [
          ['Kahve [hoşu]{ma} gidiyor.', '{Me} [gusta] el café.'],
          ['Kahve [hoşu]{na} gidiyor.', '{Te} [gusta] el café.'],
          ['Kediler [hoşu]{muza} gidiyor.', '{Nos} [gustan] los gatos.']
        ] },
        { t: 'tablo', bas: ['Kimin hoşuna?', 'Zamir', 'Örnek'], s: [
          ['(a mí) benim', '{me}', '{Me} gusta el té.'],
          ['(a ti) senin', '{te}', '¿{Te} gusta?'],
          ['(a él / ella / usted)', '{le}', '{Le} gusta bailar.'],
          ['(a nosotros) bizim', '{nos}', '{Nos} gusta Madrid.'],
          ['(a vosotros) sizin', '{os}', '¿{Os} gusta?'],
          ['(a ellos / ustedes)', '{les}', '{Les} gusta el fútbol.']
        ] },
        { t: 'tablo', h: 'gusta mı, gustan mı?', bas: ['Sevilen şey', 'Fiil', 'Örnek'], s: [
          ['Tekil isim', '[gust]{a}', 'Me [gust]{a} el café.'],
          ['Fiil (mastar)', '[gust]{a}', 'Me [gust]{a} leer.'],
          ['Çoğul isim', '[gust]{an}', 'Me [gust]{an} los gatos.']
        ] },
        { t: 'ipucu', h: 'Artikel unutulmaz', m: 'Sevilen isim artikelle söylenir: <i>Me gusta <b>el</b> café.</i> <i>Me gusta café</i> yanlıştır.' },
        { t: 'ipucu', h: 'Olumsuz ve derece', m: '<b>no</b> zamirin önüne gelir: <i>No me gusta.</i> Dereceyi <b>mucho</b> (çok) ve <b>nada</b> (hiç) belirtir: <i>Me gusta mucho.</i> · <i>No me gusta nada.</i>' },
        { t: 'ipucu', h: 'Ben de / ben de sevmem', m: 'gustar ile "ben de" derken <b>A mí también</b>, olumsuza katılırken <b>A mí tampoco</b> denir. <b>encantar</b> (bayılmak) da aynı yapıyla çalışır: <i>Me encanta el chocolate.</i>' },
        { t: 'ornek', l: [
          ['{Me} [gust]{a} la música.', 'Müzik [hoşu]{ma} gidiyor.'],
          ['¿{Te} [gust]{an} los perros?', 'Köpekler [hoşu]{na} gidiyor mu?'],
          ['No {me} [gust]{a} el pescado.', 'Balık [hoşu]{ma} gitmiyor.'],
          ['A mi madre {le} [gust]{a} cocinar.', 'Annem yemek yapmayı sever.'],
          ['{Nos} [gust]{a} mucho viajar.', 'Seyahat etmek çok [hoşu]{muza} gidiyor.']
        ] }
      ],
      test: [
        { s: 'Me ___ los perros.', o: ['gusta', 'gustan'], d: 1, a: 'Sevilen şey çoğul (los perros) olduğu için gustan.' },
        { s: '"Okumayı severim."', o: ['Me gusta leer.', 'Yo gusto leer.', 'Me gustan leer.'], d: 0, a: 'Fiil (mastar) seviliyorsa gusta kullanılır: Me gusta leer.' },
        { s: 'A ella ___ gusta el cine.', o: ['me', 'le', 'la'], d: 1, a: '"Onun hoşuna" için zamir le\'dir.' },
        { s: '"Hoşuma gitmiyor."', o: ['Me no gusta.', 'No me gusta.'], d: 1, a: 'no zamirin önüne gelir: No me gusta.' },
        { s: '— Me gusta el té. — ___ (Ben de.)', o: ['A mí también.', 'Yo también.', 'A mí tampoco.'], d: 0, a: 'gustar ile "ben de" A mí también diye söylenir.' }
      ]
    },
    {
      id: 'es-a1-12', seviye: 'A1', sure: 5,
      baslik: 'Gelecek: ir a + mastar',
      kisa: 'voy a comer, vamos a viajar',
      bolumler: [
        { t: 'metin', m: 'Yakın gelecek ve planlar için en kolay yol: <b>ir</b> fiilinin şimdiki zamanı + <b>a</b> + fiilin <b>mastar</b> hali. Yalnızca <b>ir</b> çekilir, asıl fiil hiç değişmez.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede gelecek zaman eki fiilin <b>sonuna</b> gelir. İspanyolcada aynı işi fiilin <b>önüne</b> gelen "ir a" yapar.', l: [
          ['[Çalış]{acağım}.', '{Voy a} [trabajar].'],
          ['[Yi]{yeceksin}.', '{Vas a} [comer].'],
          ['[Gid]{eceğiz}.', '{Vamos a} [ir].']
        ] },
        { t: 'tablo', bas: ['Kişi', 'ir + a', 'Mastar'], s: [
          ['yo', '{voy a}', '[hablar]'],
          ['tú', '{vas a}', '[comer]'],
          ['él / ella / usted', '{va a}', '[salir]'],
          ['nosotros', '{vamos a}', '[viajar]'],
          ['vosotros', '{vais a}', '[estudiar]'],
          ['ellos / ustedes', '{van a}', '[venir]']
        ] },
        { t: 'tablo', h: 'Sık kullanılan zaman kelimeleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['mañana', 'yarın'],
          ['esta noche', 'bu gece'],
          ['el fin de semana', 'hafta sonu'],
          ['la semana que viene', 'gelecek hafta'],
          ['el año que viene', 'gelecek yıl']
        ] },
        { t: 'ipucu', h: 'a unutulmaz', m: '<i>Voy comer</i> yanlıştır; araya mutlaka <b>a</b> girer: <i>Voy <b>a</b> comer.</i> Olumsuzda <b>no</b> en başa gelir: <i>No voy a salir.</i>' },
        { t: 'ipucu', h: 'Vamos a …: Hadi …', m: '<b>Vamos a + mastar</b> "…-eceğiz" anlamının yanında teklif de bildirir: <i>¡Vamos a comer!</i> (Hadi yiyelim!)' },
        { t: 'ipucu', h: 'a + el = al', m: 'Bir yere gitmekten söz ederken <b>a</b> ile <b>el</b> birleşir: <i>Voy <b>al</b> cine.</i> Dişilde birleşmez: <i>Voy <b>a la</b> playa.</i>' },
        { t: 'ornek', l: [
          ['Mañana {voy a} [estudiar].', 'Yarın ders [çalış]{acağım}.'],
          ['¿Qué {vas a} [hacer] esta noche?', 'Bu gece ne [yap]{acaksın}?'],
          ['{Vamos a} [viajar] a España.', 'İspanya\'ya [gid]{eceğiz}.'],
          ['No {voy a} [salir] hoy.', 'Bugün dışarı [çık]{mayacağım}.'],
          ['{Va a} [llover].', 'Yağmur [yağ]{acak}.']
        ] }
      ],
      test: [
        { s: 'Yo ___ a comer.', o: ['voy', 'va', 'vamos'], d: 0, a: '"ben" için ir fiili voy olur.' },
        { s: '"Yarın çalışacağım."', o: ['Mañana voy trabajar.', 'Mañana voy a trabajar.', 'Mañana voy a trabajo.'], d: 1, a: 'ir + a + mastar: voy a trabajar.' },
        { s: 'Nosotros ___ a viajar.', o: ['vamos', 'van', 'vais'], d: 0, a: 'nosotros için ir fiili vamos olur.' },
        { s: 'Voy ___ cine.', o: ['a el', 'al', 'a la'], d: 1, a: 'a + el birleşir: al.' },
        { s: '"¡Vamos a comer!" ne demek?', o: ['Hadi yiyelim!', 'Yemek yedik.', 'Yemek yiyorlar.'], d: 0, a: 'Vamos a + mastar teklif bildirir: Hadi yiyelim!' }
      ]
    },
    {
      id: 'es-a1-13', seviye: 'A1', sure: 6,
      baslik: 'Karşılaştırma',
      kisa: 'más … que, tan … como · mejor, peor',
      bolumler: [
        { t: 'metin', m: 'İki şeyi karşılaştırırken sıfatın önüne <b>más</b> (daha) ya da <b>menos</b> (daha az), arkasına <b>que</b> gelir. Eşitlik için <b>tan … como</b> (… kadar) kullanılır.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki "-den daha" İspanyolcada <b>más … que</b>, "kadar" ise <b>tan … como</b> olur. Sıra terstir: önce sıfat, sonra karşılaştırılan şey.', l: [
          ['[Ankara]{\'dan daha} soğuk', '{más} frío {que} [Ankara]'],
          ['[uçak]{tan daha az} pahalı', '{menos} caro {que} [el avión]'],
          ['[senin] {kadar} uzun', '{tan} alto {como} [tú]']
        ] },
        { t: 'tablo', bas: ['Anlam', 'Kalıp', 'Örnek'], s: [
          ['daha …', '{más} … {que}', 'Ana es {más} alta {que} Luis.'],
          ['daha az …', '{menos} … {que}', 'Es {menos} caro {que} ese.'],
          ['… kadar', '{tan} … {como}', 'Soy {tan} alto {como} tú.']
        ] },
        { t: 'tablo', h: 'Düzensiz karşılaştırmalar', bas: ['Sıfat', 'Daha …', 'Anlamı'], s: [
          ['bueno (iyi)', '{mejor}', 'daha iyi'],
          ['malo (kötü)', '{peor}', 'daha kötü'],
          ['grande (yaşça büyük)', '{mayor}', 'yaşça daha büyük'],
          ['pequeño (yaşça küçük)', '{menor}', 'yaşça daha küçük']
        ] },
        { t: 'ipucu', h: 'más bueno denmez', m: '"Daha iyi" için <b>mejor</b>, "daha kötü" için <b>peor</b> kullanılır. Kardeşlerde <b>mayor</b> ve <b>menor</b>: <i>mi hermano mayor</i> (ağabeyim), <i>mi hermana menor</i> (küçük kız kardeşim).' },
        { t: 'metin', h: 'En …', m: '"En" demek için artikel + <b>más</b> + sıfat + <b>de</b> kullanılır: <i>Es <b>la</b> ciudad <b>más</b> grande <b>de</b> España.</i> (İspanya\'nın en büyük şehri.) Düzensizlerde: <i>el mejor, la peor</i>.' },
        { t: 'ipucu', h: 'Sıfat yine uyar', m: 'Karşılaştırmada da sıfat isme uyar: <i>Ana es más alt<b>a</b>.</i> · <i>Ellos son más alt<b>os</b>.</i>' },
        { t: 'ornek', l: [
          ['Madrid es {más} grande {que} Sevilla.', 'Madrid, [Sevilla]{\'dan daha} büyük.'],
          ['El tren es {menos} caro {que} el avión.', 'Tren, [uçak]{tan daha az} pahalı.'],
          ['Mi hermana es {tan} alta {como} yo.', 'Kız kardeşim [benim] {kadar} uzun.'],
          ['Este café es {mejor}.', 'Bu kahve {daha iyi}.'],
          ['Es {el más} alto {de} la clase.', 'Sınıfın {en} uzunu.']
        ] }
      ],
      test: [
        { s: 'Juan es más alto ___ Pedro.', o: ['que', 'como', 'de'], d: 0, a: 'más … que: Juan es más alto que Pedro.' },
        { s: 'Soy tan alto ___ tú.', o: ['que', 'como'], d: 1, a: 'Eşitlikte tan … como kullanılır.' },
        { s: '"Daha iyi"', o: ['más bueno', 'mejor', 'más bien'], d: 1, a: 'bueno düzensizdir: mejor.' },
        { s: 'Es la ciudad más bonita ___ país.', o: ['que el', 'del', 'como el'], d: 1, a: '"En" yapısında de kullanılır; de + el = del.' },
        { s: 'mi hermano ___ (ağabeyim)', o: ['mayor', 'más grande', 'mejor'], d: 0, a: 'Yaşça büyüklük mayor ile söylenir.' }
      ]
    },
    {
      id: 'es-a1-14', seviye: 'A1', sure: 7,
      baslik: 'Edatlar: a, de, en, con, por, para',
      kisa: 'Türkçedeki hâl eklerinin karşılığı',
      bolumler: [
        { t: 'metin', m: 'Türkçede "-e, -de, -den, ile" gibi anlamlar kelimenin <b>sonuna</b> eklenir. İspanyolcada aynı işi kelimenin <b>önüne</b> gelen küçük kelimeler, yani edatlar yapar.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', l: [
          ['[Madrid]{\'e}', '{a} [Madrid]'],
          ['[Madrid]{\'den}', '{de} [Madrid]'],
          ['[Madrid]{\'de}', '{en} [Madrid]'],
          ['[Ana]{\'yla}', '{con} [Ana]'],
          ['[şeker]{siz}', '{sin} [azúcar]']
        ] },
        { t: 'tablo', bas: ['Edat', 'Türkçe karşılığı', 'Örnek'], s: [
          ['{a}', '-e (yön) · saatte', 'Voy {a} casa. · {a} las tres'],
          ['{de}', '-den · -in (sahiplik)', 'Soy {de} Turquía. · el libro {de} Ana'],
          ['{en}', '-de · taşıtla', 'Estoy {en} casa. · {en} tren'],
          ['{con}', 'ile', 'café {con} leche'],
          ['{sin}', '-siz', 'café {sin} azúcar'],
          ['{para}', 'için · amaç', 'Es {para} ti.'],
          ['{por}', 'yüzünden · boyunca · karşılığında', 'gracias {por} todo']
        ] },
        { t: 'ipucu', h: 'Birleşmeler', m: '<b>a + el = al</b>, <b>de + el = del</b>: <i>Voy al banco.</i> · <i>Vengo del trabajo.</i> Dişilde birleşme olmaz: <i>a la, de la</i>. Ayrıca <b>con + mí = conmigo</b> (benimle), <b>con + ti = contigo</b> (seninle).' },
        { t: 'metin', h: 'para mı, por mu?', m: '<b>para</b> ileriye bakar: amaç, hedef, alıcı. <i>Estudio para aprender.</i> · <i>un regalo para ti</i>. <b>por</b> geriye ya da çevreye bakar: sebep, süre, araç. <i>gracias por tu ayuda</i> · <i>por la mañana</i> (sabahleyin) · <i>por teléfono</i> (telefonla).' },
        { t: 'ipucu', h: 'Sahiplikte sıra terstir', m: 'Türkçede "babamın arabası" deriz; İspanyolcada önce sahip olunan söylenir: <i>el coche <b>de</b> mi padre</i>.' },
        { t: 'ipucu', h: 'Kişiden önce a', m: 'Fiilin nesnesi belirli bir kişiyse önüne <b>a</b> gelir: <i>Veo <b>a</b> María.</i> (María\'yı görüyorum.) Eşyada gelmez: <i>Veo la casa.</i>' },
        { t: 'ornek', l: [
          ['Vivo {en} Estambul.', '[İstanbul]{\'da} yaşıyorum.'],
          ['Voy {al} trabajo {en} metro.', '[İş]{e} [metro]{yla} gidiyorum.'],
          ['Es el libro {de} mi hermano.', '[Kardeşim]{in} kitabı.'],
          ['Este regalo es {para} ti.', 'Bu hediye [senin] {için}.'],
          ['¿Vienes {conmigo}?', '[Benim]{le} geliyor musun?']
        ] }
      ],
      test: [
        { s: 'Soy ___ Turquía.', o: ['de', 'en', 'a'], d: 0, a: 'Köken de ile söylenir: Soy de Turquía.' },
        { s: 'Voy ___ supermercado.', o: ['a el', 'al', 'en'], d: 1, a: 'a + el birleşir: al supermercado.' },
        { s: '"Benimle"', o: ['con mí', 'conmigo', 'con yo'], d: 1, a: 'con + mí birleşerek conmigo olur.' },
        { s: 'Gracias ___ tu ayuda.', o: ['para', 'por'], d: 1, a: 'Teşekkürün sebebi por ile söylenir.' },
        { s: 'Este café es ___ ti.', o: ['por', 'para'], d: 1, a: 'Alıcı para ile gösterilir: para ti.' }
      ]
    }
  ],
  // Sıradaki dersler (listede "yakında" olarak görünür)
  plan: []
};
