// Word Memorizer · İspanyolca gramer dersleri (A1 + A2 + B1)
// Örneklerde {…} işaretli kısım vurgulanır. Her örnek: [ispanyolca, türkçe]
// Her yerde: [kök] mavi, {ek / değişen kısım} kırmızı.
// kiyas: Türkçe ile yan yana gösterim, her satır [türkçe, ispanyolca]
// diyalog: kısa konuşma, her satır [konuşan, ispanyolca, türkçe]
// ozet: ders sonu özeti, l: [madde, madde, …]
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
    },
    {
      id: 'es-a2-01', seviye: 'A2', sure: 9,
      baslik: 'Dönüşlü fiiller',
      kisa: 'me levanto, te duchas, se llama',
      bolumler: [
        { t: 'metin', m: 'Bazı fiiller mastarda <b>-se</b> ile biter: <i>levantarse</i> (kalkmak), <i>ducharse</i> (duş almak), <i>llamarse</i> (adı … olmak). Bu <b>-se</b>, eylemin öznenin <b>kendisine</b> yapıldığını gösterir. Fiil çekilirken bu parça kişiye göre değişir ve fiilin <b>önüne</b> geçer: <i>Me levanto</i> (Kalkıyorum).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede dönüşlülük fiile giren bir ekle yapılır: yıka-mak → yıka-<b>n</b>-mak. İspanyolcada aynı işi fiilin önündeki küçük zamir yapar.', l: [
          ['[yıka]{n}ıyorum', '{me} [lavo]'],
          ['[giy]{in}iyorsun', '{te} [vistes]'],
          ['[tara]{n}ıyor', '{se} [peina]'],
          ['[hazırla]{n}ıyoruz', '{nos} [preparamos]']
        ] },
        { t: 'tablo', h: 'Çekim: levantarse (kalkmak)', bas: ['Kişi', 'Zamir', 'Fiil', 'Türkçe'], s: [
          ['yo', '{me}', '[levant]o', 'kalkıyorum'],
          ['tú', '{te}', '[levant]as', 'kalkıyorsun'],
          ['él / ella / usted', '{se}', '[levant]a', 'kalkıyor'],
          ['nosotros', '{nos}', '[levant]amos', 'kalkıyoruz'],
          ['vosotros', '{os}', '[levant]áis', 'kalkıyorsunuz'],
          ['ellos / ustedes', '{se}', '[levant]an', 'kalkıyorlar']
        ] },
        { t: 'tablo', h: 'Günlük rutin fiilleri', bas: ['Fiil', 'Türkçe', 'Ben…'], s: [
          ['despertarse (e→ie)', 'uyanmak', '{me} [despierto]'],
          ['levantarse', 'kalkmak', '{me} [levanto]'],
          ['ducharse', 'duş almak', '{me} [ducho]'],
          ['lavarse', 'yıkanmak', '{me} [lavo]'],
          ['vestirse (e→i)', 'giyinmek', '{me} [visto]'],
          ['peinarse', 'saçını taramak', '{me} [peino]'],
          ['acostarse (o→ue)', 'yatmak', '{me} [acuesto]'],
          ['dormirse (o→ue)', 'uykuya dalmak', '{me} [duermo]'],
          ['sentarse (e→ie)', 'oturmak', '{me} [siento]'],
          ['llamarse', 'adı … olmak', '{me} [llamo]']
        ] },
        { t: 'metin', h: 'Zamirin yeri', m: 'Zamir <b>çekimli fiilin önüne</b> gelir: <i>Me ducho.</i> Cümlede mastar ya da -ndo ile biten biçim varsa zamir onun sonuna da yapışabilir: <i>Voy a ducharme</i> = <i>Me voy a duchar</i>. İkisi de doğrudur. Olumsuzda <b>no</b> zamirden önce gelir: <i>No me levanto temprano.</i>' },
        { t: 'ipucu', h: 'Mastardaki zamir de kişiye uyar', m: '<i>Quiero levantar<b>me</b></i> (Kalkmak istiyorum) ama <i>¿Quieres levantar<b>te</b>?</i> (Kalkmak istiyor musun?). Mastarın sonundaki zamir her zaman <i>-se</i> kalmaz, özneye göre değişir.' },
        { t: 'ipucu', h: 'Vücut ve giysi için iyelik yok', m: '<i>Me lavo <b>las</b> manos</i> (Ellerimi yıkıyorum). İspanyolcada <i>mis manos</i> denmez; zamir zaten elin kimin olduğunu söyler. Aynısı giysilerde: <i>Me pongo <b>la</b> chaqueta</i> (Ceketimi giyiyorum).' },
        { t: 'ipucu', h: 'Anlamı değişen çiftler', m: '<i>ir</i> gitmek → <i>irse</i> çekip gitmek; <i>dormir</i> uyumak → <i>dormirse</i> uyuyakalmak; <i>llamar</i> aramak → <i>llamarse</i> adı … olmak; <i>poner</i> koymak → <i>ponerse</i> giymek; <i>quedar</i> buluşmak → <i>quedarse</i> kalmak.' },
        { t: 'metin', h: 'Birbirine: nos, os, se', m: 'Çoğulda bu zamirler "birbirini" anlamı da verir: <i>Nos vemos mañana</i> (Yarın görüşürüz), <i>Se quieren mucho</i> (Birbirlerini çok seviyorlar). Türkçedeki işteşlik eki <b>-ş-</b> gibi: gör-<b>ü</b>-ş-mek.' },
        { t: 'diyalog', h: 'Sabah rutini', l: [
          ['Ana', '¿A qué hora {te} [levantas]?', 'Kaçta kalkıyorsun?'],
          ['Luis', '{Me} [levanto] a las siete y {me} [ducho].', 'Yedide kalkıp duş alıyorum.'],
          ['Ana', '¿Y {te} [acuestas] tarde?', 'Peki geç mi yatıyorsun?'],
          ['Luis', 'No, {me} [acuesto] a las once. ¿Y tú?', 'Hayır, on birde yatıyorum. Ya sen?'],
          ['Ana', 'Yo {me} [duermo] siempre en el sofá.', 'Ben hep kanepede uyuyakalıyorum.']
        ] },
        { t: 'ornek', l: [
          ['¿Cómo {te} [llamas]?', 'Adın ne?'],
          ['{Me} [llamo] Deniz.', 'Adım Deniz.'],
          ['{Me} [despierto] a las siete.', 'Saat yedide {uyanırım}.'],
          ['Los niños {se} [visten] solos.', 'Çocuklar kendi kendine {giyiniyor}.'],
          ['{Me} [lavo] las manos antes de comer.', 'Yemekten önce ellerimi {yıkıyorum}.'],
          ['Voy a [duchar]{me} ahora.', 'Şimdi {duş alacağım}.'],
          ['{Nos} [vemos] el lunes.', 'Pazartesi {görüşürüz}.'],
          ['¿{Te} [pones] el abrigo?', 'Montunu {giyiyor} musun?']
        ] },
        { t: 'ozet', l: [
          'Dönüşlü fiiller mastarda <b>-se</b> ile biter: levantar<b>se</b>.',
          'Zamirler: <b>me, te, se, nos, os, se</b>; çekimli fiilin önüne gelir.',
          'Mastar ya da -ndo varsa zamir sona da yapışabilir: <i>voy a ducharme</i>.',
          'Vücut ve giysi için iyelik değil <b>el / la</b>: <i>me lavo las manos</i>.',
          'Çoğulda "birbirini" anlamı da verir: <i>nos vemos</i>.'
        ] }
      ],
      test: [
        { s: 'Yo ___ levanto a las siete.', o: ['me', 'te', 'se'], d: 0, a: 'yo için dönüşlü zamir me olur.' },
        { s: '¿Cómo ___ llamas?', o: ['me', 'te', 'se'], d: 1, a: 'tú için te: ¿Cómo te llamas?' },
        { s: 'Ellos ___ acuestan tarde.', o: ['se', 'nos', 'os'], d: 0, a: 'ellos için se.' },
        { s: '"Ellerimi yıkıyorum."', o: ['Lavo mis manos.', 'Me lavo las manos.', 'Me lavo mis manos.'], d: 1, a: 'Vücut için iyelik yerine el / la kullanılır; kimin eli olduğunu zamir söyler.' },
        { s: '"Duş alacağım." Hangisi doğru?', o: ['Voy a ducharme.', 'Voy a ducharse.', 'Voy me a duchar.'], d: 0, a: 'Mastardaki zamir kişiye uyar: ducharme. (Me voy a duchar da doğrudur.)' },
        { s: '"Nos vemos mañana." ne demek?', o: ['Yarın görüşürüz.', 'Yarın kendimizi görürüz.', 'Yarın gördük.'], d: 0, a: 'nos burada "birbirimizi" anlamı verir: görüşürüz.' },
        { s: 'Nosotros ___ duchamos por la mañana.', o: ['nos', 'se', 'me'], d: 0, a: 'nosotros için nos.' },
        { s: '"dormirse" ne demek?', o: ['uyumak', 'uyuyakalmak', 'uyandırmak'], d: 1, a: 'dormir uyumak; dormirse uykuya dalmak, uyuyakalmak.' }
      ]
    },
    {
      id: 'es-a2-02', seviye: 'A2', sure: 8,
      baslik: 'Şu anda: estar + -ndo',
      kisa: 'estoy comiendo, estás leyendo',
      bolumler: [
        { t: 'metin', m: 'Tam şu anda olan bir şeyi anlatmak için <b>estar</b> + fiilin <b>-ndo</b> ile biten biçimi (gerundio) kullanılır: <i>Estoy comiendo</i> (Yemek yiyorum, şu an). Yalnızca <b>estar</b> çekilir; -ndo biçimi hiç değişmez.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana: -iyor', m: 'Türkçedeki <b>-iyor</b> ekiyle aynı işi görür. Türkçede ek fiilin sonuna gelir; İspanyolcada önde <b>estar</b>, fiilin sonunda <b>-ndo</b> olur.', l: [
          ['[konuş]{uyor}um', '{estoy} [habl]{ando}'],
          ['[yaz]{ıyor}sun', '{estás} [escrib]{iendo}'],
          ['[oku]{yor}', '{está} [le]{yendo}'],
          ['[çalış]{ıyor}uz', '{estamos} [trabaj]{ando}']
        ] },
        { t: 'tablo', h: '-ndo nasıl yapılır?', bas: ['Mastar', 'Kural', 'Gerundio'], s: [
          ['hablar', '-ar → -ando', '[habl]{ando}'],
          ['trabajar', '-ar → -ando', '[trabaj]{ando}'],
          ['comer', '-er → -iendo', '[com]{iendo}'],
          ['hacer', '-er → -iendo', '[hac]{iendo}'],
          ['vivir', '-ir → -iendo', '[viv]{iendo}'],
          ['escribir', '-ir → -iendo', '[escrib]{iendo}']
        ] },
        { t: 'tablo', h: 'estar çekimi', bas: ['Kişi', 'estar', 'Örnek'], s: [
          ['yo', '{estoy}', 'estoy cocinando'],
          ['tú', '{estás}', 'estás estudiando'],
          ['él / ella / usted', '{está}', 'está durmiendo'],
          ['nosotros', '{estamos}', 'estamos esperando'],
          ['vosotros', '{estáis}', 'estáis jugando'],
          ['ellos / ustedes', '{están}', 'están viendo la tele']
        ] },
        { t: 'tablo', h: 'Düzensiz -ndo biçimleri', bas: ['Mastar', 'Gerundio', 'Neden?'], s: [
          ['leer', '[le]{yendo}', 'iki ünlü arasında i → y'],
          ['oír', '[o]{yendo}', 'i → y'],
          ['ir', '{yendo}', 'tamamen düzensiz'],
          ['dormir', '[durm]{iendo}', 'o → u'],
          ['morir', '[mur]{iendo}', 'o → u'],
          ['pedir', '[pid]{iendo}', 'e → i'],
          ['decir', '[dic]{iendo}', 'e → i'],
          ['venir', '[vin]{iendo}', 'e → i'],
          ['seguir', '[sigu]{iendo}', 'e → i']
        ] },
        { t: 'ipucu', h: 'Her "-iyor" estar + -ndo değildir', m: 'Türkçede alışkanlıklar için de -iyor deriz: "Her gün koşuyorum". İspanyolcada alışkanlıklar ve genel durumlar <b>düz şimdiki zamanla</b> söylenir: <i>Corro todos los días. Trabajo en un banco.</i> estar + -ndo yalnızca "tam şu an" ya da "bu sıralar" vurgusu içindir.' },
        { t: 'ipucu', h: 'Gelecek için kullanılmaz', m: 'İngilizcedeki gibi yakın gelecek için kullanılmaz. "Yarın geliyorum" = <i>Mañana vengo</i> ya da <i>Mañana voy a venir</i>. <i>Mañana estoy viniendo</i> yanlıştır.' },
        { t: 'metin', h: 'Zamirlerin yeri', m: 'Dönüşlü ve nesne zamirleri <b>estar</b>\'ın önüne gelir ya da -ndo biçimine yapışır: <i>Me estoy duchando</i> = <i>Estoy duchándome</i>. Yapışınca vurgunun yeri değişmesin diye vurgu işareti eklenir: duch<b>á</b>ndome.' },
        { t: 'metin', h: 'Bu günlerde: geçici durumlar', m: 'Şu dakika yapmasan bile "bu sıralar" anlamında da kullanılır: <i>Estoy leyendo un libro muy bueno</i> (Bu aralar çok güzel bir kitap okuyorum). <i>Este mes estoy trabajando mucho</i> (Bu ay çok çalışıyorum).' },
        { t: 'diyalog', h: 'Telefonda', l: [
          ['Marta', 'Hola, ¿qué {estás} [hac]{iendo}?', 'Selam, ne yapıyorsun?'],
          ['Pablo', '{Estoy} [cocin]{ando}. ¿Y tú?', 'Yemek pişiriyorum. Ya sen?'],
          ['Marta', '{Estoy} [esper]{ando} el autobús. {Está} [llov]{iendo} mucho.', 'Otobüs bekliyorum. Çok yağmur yağıyor.'],
          ['Pablo', '¿Y los niños?', 'Ya çocuklar?'],
          ['Marta', '{Están} [jug]{ando} en casa de la abuela.', 'Büyükannelerinin evinde oynuyorlar.']
        ] },
        { t: 'ornek', l: [
          ['{Estoy} [estudi]{ando} español.', 'İspanyolca [çalış]{ıyor}um.'],
          ['¿Qué {estás} [hac]{iendo}?', 'Ne [yap]{ıyor}sun?'],
          ['{Está} [llov]{iendo}.', 'Yağmur [yağ]{ıyor}.'],
          ['Los niños {están} [durm]{iendo}.', 'Çocuklar [uyu]{yor}.'],
          ['{Estamos} [vi]{endo} una película.', 'Film [izl]{iyor}uz.'],
          ['Mi madre {está} [le]{yendo} el periódico.', 'Annem gazete [oku]{yor}.'],
          ['{Me estoy} [duch]{ando}, te llamo luego.', 'Duş [al]{ıyor}um, sonra ararım.'],
          ['Este año {estoy} [trabaj]{ando} mucho.', 'Bu yıl çok [çalış]{ıyor}um.']
        ] },
        { t: 'ozet', l: [
          '<b>estar</b> (çekimli) + <b>-ndo</b>: tam şu anda olan iş.',
          '-ar → <b>-ando</b>; -er / -ir → <b>-iendo</b>.',
          'Düzensizler: leyendo, oyendo, yendo, durmiendo, pidiendo, diciendo, viniendo.',
          'Alışkanlıklar düz şimdiki zamanla söylenir: <i>Trabajo aquí.</i>',
          'Gelecek anlamında kullanılmaz.'
        ] }
      ],
      test: [
        { s: 'comer → gerundio', o: ['comando', 'comiendo', 'comido'], d: 1, a: '-er fiillerinde -iendo: comiendo.' },
        { s: 'leer → gerundio', o: ['leiendo', 'leyendo', 'leendo'], d: 1, a: 'İki ünlü arasında i, y olur: leyendo.' },
        { s: '"Ne yapıyorsun?" (şu an)', o: ['¿Qué estás haciendo?', '¿Qué estás hacer?', '¿Qué eres haciendo?'], d: 0, a: 'estar + -ndo: estás haciendo.' },
        { s: 'Nosotros ___ trabajando.', o: ['estamos', 'somos', 'estáis'], d: 0, a: 'nosotros için estar: estamos.' },
        { s: 'dormir → gerundio', o: ['dormiendo', 'durmiendo', 'dormando'], d: 1, a: '-ir fiilinde o → u: durmiendo.' },
        { s: '"Her gün koşuyorum." (alışkanlık)', o: ['Estoy corriendo todos los días.', 'Corro todos los días.'], d: 1, a: 'Alışkanlıklar düz şimdiki zamanla söylenir.' },
        { s: '"Duş alıyorum." Hangisi doğru?', o: ['Estoy duchándome.', 'Estoy duchandome me.', 'Me estoy duchar.'], d: 0, a: 'Zamir -ndo\'ya yapışır ve vurgu işareti alır: duchándome (ya da me estoy duchando).' },
        { s: '"Yarın geliyorum." Hangisi doğru?', o: ['Mañana estoy viniendo.', 'Mañana vengo.'], d: 1, a: 'estar + -ndo gelecek için kullanılmaz.' }
      ]
    },
    {
      id: 'es-a2-03', seviye: 'A2', sure: 9,
      baslik: 'Yakın geçmiş: he comido',
      kisa: 'he comido, has visto, ya, todavía no',
      bolumler: [
        { t: 'metin', m: 'Bu geçmiş zaman (pretérito perfecto), <b>hâlâ içinde olduğumuz</b> bir zaman diliminde (bugün, bu hafta, bu yıl) olan olaylar ve <b>hayat deneyimleri</b> ("hiç … -dın mı?") için kullanılır. Yapısı: <b>haber</b> fiilinin şimdiki zamanı + fiilin <b>-do</b> ile biten biçimi (participio): <i>He comido</i> (Yedim).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede tek ek (<b>-dı</b>) yeter. İspanyolcada iki parçalı bir yapı var: yardımcı fiil <b>haber</b> + <b>-ado / -ido</b>.', l: [
          ['[konuş]{tu}', '{ha} [habl]{ado}'],
          ['[ye]{dim}', '{he} [com]{ido}'],
          ['[yaşa]{dık}', '{hemos} [viv]{ido}'],
          ['[çalış]{tılar}', '{han} [trabaj]{ado}']
        ] },
        { t: 'tablo', h: 'haber + participio', bas: ['Kişi', 'haber', 'Participio'], s: [
          ['yo', '{he}', '[habl]{ado}'],
          ['tú', '{has}', '[com]{ido}'],
          ['él / ella / usted', '{ha}', '[viv]{ido}'],
          ['nosotros', '{hemos}', '[trabaj]{ado}'],
          ['vosotros', '{habéis}', '[sal]{ido}'],
          ['ellos / ustedes', '{han}', '[termin]{ado}']
        ] },
        { t: 'metin', h: 'Participio nasıl yapılır?', m: '-ar fiillerinde <b>-ado</b>, -er ve -ir fiillerinde <b>-ido</b>: <i>hablar → hablado, comer → comido, vivir → vivido</i>. <i>ir</i> fiili de düzenlidir: <i>ido</i>; <i>ser</i> → <i>sido</i>, <i>estar</i> → <i>estado</i>.' },
        { t: 'tablo', h: 'Düzensiz participio\'lar', bas: ['Mastar', 'Participio', 'Türkçe'], s: [
          ['hacer', '{hecho}', 'yapmak'],
          ['decir', '{dicho}', 'söylemek'],
          ['ver', '{visto}', 'görmek'],
          ['escribir', '{escrito}', 'yazmak'],
          ['poner', '{puesto}', 'koymak'],
          ['volver', '{vuelto}', 'dönmek'],
          ['abrir', '{abierto}', 'açmak'],
          ['romper', '{roto}', 'kırmak'],
          ['morir', '{muerto}', 'ölmek']
        ] },
        { t: 'tablo', h: 'Zaman işaretleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['hoy', 'bugün'],
          ['esta mañana', 'bu sabah'],
          ['esta semana', 'bu hafta'],
          ['este mes / este año', 'bu ay / bu yıl'],
          ['ya', 'zaten, çoktan'],
          ['todavía no / aún no', 'henüz … -medi'],
          ['alguna vez', 'hiç (soruda)'],
          ['nunca', 'hiç (olumsuz)'],
          ['últimamente', 'son zamanlarda']
        ] },
        { t: 'ipucu', h: 'İki parça hiç ayrılmaz', m: '<b>haber</b> ile participio arasına hiçbir şey girmez. Zamirler ve <b>no</b> en öne gelir: <i>No lo he visto</i> (Onu görmedim). <i>He no visto</i> ya da <i>He lo visto</i> yanlıştır.' },
        { t: 'ipucu', h: 'Participio değişmez', m: 'Bu yapıda participio hep <b>-o</b> ile biter; öznenin cinsiyeti ya da sayısı önemli değildir: <i>Ella ha llegado. Ellos han llegado.</i>' },
        { t: 'ipucu', h: 'haber ≠ tener', m: '"Sahip olmak" için <b>tener</b> kullanılır; <b>haber</b> burada yalnızca yardımcı fiildir: <i>Tengo un coche</i> (Arabam var) ama <i>He comprado un coche</i> (Araba aldım).' },
        { t: 'metin', h: 'İspanya ve Latin Amerika', m: 'İspanya\'da bugün olan şeyler için bu zaman çok yaygındır: <i>Hoy he desayunado tarde</i>. Latin Amerika\'da aynı cümle çoğunlukla bir sonraki dersin konusu olan basit geçmişle söylenir: <i>Hoy desayuné tarde</i>. Bu uygulamada İspanya kullanımı esas alınır.' },
        { t: 'diyalog', h: 'Hiç … -dın mı?', l: [
          ['Lucía', '¿{Has} [est]{ado} alguna vez en México?', 'Hiç Meksika\'da bulundun mu?'],
          ['Tomás', 'No, nunca. Pero {he} [viaj]{ado} mucho por España.', 'Hayır, hiç. Ama İspanya\'yı çok gezdim.'],
          ['Lucía', '¿Y {has} {visto} la Alhambra?', 'Peki Elhamra\'yı gördün mü?'],
          ['Tomás', 'Sí, la {he} {visto} dos veces. ¡Es preciosa!', 'Evet, iki kez gördüm. Çok güzel!'],
          ['Lucía', 'Yo todavía no {he} {ido} a Granada.', 'Ben henüz Granada\'ya gitmedim.']
        ] },
        { t: 'ornek', l: [
          ['Hoy {he} [trabaj]{ado} mucho.', 'Bugün çok [çalış]{tım}.'],
          ['¿{Has} [com]{ido} ya?', 'Yemeğini [ye]{din} mi?'],
          ['Esta semana {hemos} [lleg]{ado} tarde.', 'Bu hafta geç [kal]{dık}.'],
          ['Todavía no {he} [termin]{ado}.', 'Henüz [bitir]{medim}.'],
          ['¿Alguna vez {has} [prob]{ado} la paella?', 'Hiç paella [tat]{tın} mı?'],
          ['Nunca {he} {visto} el mar.', 'Denizi hiç [gör]{medim}.'],
          ['Ya {he} {hecho} los deberes.', 'Ödevlerimi çoktan [yap]{tım}.'],
          ['¿Qué {has} {dicho}?', 'Ne [de]{din}?']
        ] },
        { t: 'ozet', l: [
          '<b>haber</b> (he, has, ha, hemos, habéis, han) + <b>-ado / -ido</b>.',
          'Bugün, bu hafta, bu yıl ve hayat deneyimi için kullanılır.',
          'Düzensizler: hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto.',
          'İki parça ayrılmaz; zamir ve <b>no</b> en başa gelir.',
          '<i>ya</i> = çoktan, <i>todavía no</i> = henüz … -medi, <i>alguna vez</i> = hiç.'
        ] }
      ],
      test: [
        { s: 'Yo ___ comido.', o: ['he', 'ha', 'has'], d: 0, a: 'yo için haber: he.' },
        { s: 'hacer → participio', o: ['hacido', 'hecho', 'haciendo'], d: 1, a: 'hacer düzensizdir: hecho.' },
        { s: '"Bugün çalıştım."', o: ['Hoy he trabajado.', 'Hoy he trabajando.', 'Hoy tengo trabajado.'], d: 0, a: 'haber + participio: he trabajado.' },
        { s: '"Onu görmedim."', o: ['He no lo visto.', 'No lo he visto.', 'No he lo visto.'], d: 1, a: 'no ve zamir haber\'in önüne gelir.' },
        { s: 'ver → participio', o: ['vido', 'visto', 'veído'], d: 1, a: 'ver düzensizdir: visto.' },
        { s: '¿___ estado alguna vez en Madrid?', o: ['Has', 'Ha', 'He'], d: 0, a: 'tú için has.' },
        { s: '"Henüz bitirmedim."', o: ['Ya he terminado.', 'Todavía no he terminado.'], d: 1, a: 'todavía no = henüz … -medi; ya = çoktan.' },
        { s: 'Ellas han ___ tarde. (llegar)', o: ['llegadas', 'llegado', 'llegando'], d: 1, a: 'Bu yapıda participio hep -o ile biter.' }
      ]
    },
    {
      id: 'es-a2-04', seviye: 'A2', sure: 9,
      baslik: 'Geçmiş zaman 1: düzenli fiiller',
      kisa: 'hablé, comiste, vivió',
      bolumler: [
        { t: 'metin', m: 'Bu geçmiş zaman (pretérito indefinido), <b>bitmiş bir zamanda</b> (dün, geçen hafta, 2015\'te) olup bitmiş olayları anlatır. Hikâye anlatırken en çok kullanılan geçmiş zamandır: <i>Ayer comí paella</i> (Dün paella yedim).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-dı</b> geçmişi gibi: tek kelimede kök + ek. Kişi de aynı ekin içinde gösterilir.', l: [
          ['[konuş]{tum}', '[habl]{é}'],
          ['[ye]{din}', '[com]{iste}'],
          ['[yaşa]{dı}', '[viv]{ió}'],
          ['[çalış]{tık}', '[trabaj]{amos}'],
          ['[yaz]{dılar}', '[escrib]{ieron}']
        ] },
        { t: 'tablo', h: 'Ekler', bas: ['Kişi', '-ar (hablar)', '-er (comer)', '-ir (vivir)'], s: [
          ['yo', '[habl]{é}', '[com]{í}', '[viv]{í}'],
          ['tú', '[habl]{aste}', '[com]{iste}', '[viv]{iste}'],
          ['él / ella / usted', '[habl]{ó}', '[com]{ió}', '[viv]{ió}'],
          ['nosotros', '[habl]{amos}', '[com]{imos}', '[viv]{imos}'],
          ['vosotros', '[habl]{asteis}', '[com]{isteis}', '[viv]{isteis}'],
          ['ellos / ustedes', '[habl]{aron}', '[com]{ieron}', '[viv]{ieron}']
        ] },
        { t: 'ipucu', h: 'Vurgu işareti anlamı değiştirir', m: '<i>hablo</i> (konuşurum) ↔ <i>habló</i> (konuştu). Tek fark son hecedeki vurgu: ha-<b>BLÓ</b>. Yazarken işareti unutma, konuşurken son heceyi vurgula.' },
        { t: 'ipucu', h: 'nosotros: bağlamdan anlaşılır', m: '-ar ve -ir fiillerinde nosotros biçimi şimdiki zamanla aynıdır: <i>hablamos</i> = konuşuruz / konuştuk. Farkı zaman kelimesi gösterir: <i>Ayer hablamos</i> (Dün konuştuk).' },
        { t: 'tablo', h: 'Yazımı değişenler (yalnızca yo)', bas: ['Mastar', 'yo', 'Neden?'], s: [
          ['buscar', '[bus]{qué}', 'c → qu (k sesi korunur)'],
          ['tocar', '[to]{qué}', 'c → qu'],
          ['llegar', '[lle]{gué}', 'g → gu (g sesi korunur)'],
          ['pagar', '[pa]{gué}', 'g → gu'],
          ['jugar', '[ju]{gué}', 'g → gu'],
          ['empezar', '[empe]{cé}', 'z → c']
        ] },
        { t: 'tablo', h: 'leer, oír, creer: i → y', bas: ['Mastar', 'él / ella', 'ellos / ellas'], s: [
          ['leer', '[le]{yó}', '[le]{yeron}'],
          ['oír', '[o]{yó}', '[o]{yeron}'],
          ['creer', '[cre]{yó}', '[cre]{yeron}'],
          ['caer', '[ca]{yó}', '[ca]{yeron}']
        ] },
        { t: 'tablo', h: 'Zaman işaretleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['ayer', 'dün'],
          ['anteayer', 'evvelsi gün'],
          ['anoche', 'dün gece'],
          ['el lunes pasado', 'geçen pazartesi'],
          ['la semana pasada', 'geçen hafta'],
          ['el año pasado', 'geçen yıl'],
          ['hace dos días', 'iki gün önce'],
          ['en 2019', '2019\'da']
        ] },
        { t: 'metin', h: 'he comido mu, comí mi?', m: 'Önceki dersteki <i>he comido</i> "bugün, bu hafta" gibi henüz bitmemiş zaman dilimleri içindir. <i>Comí</i> ise "dün, geçen yıl" gibi kapanmış zamanlar için: <i>Hoy he comido pescado, pero ayer comí carne</i> (Bugün balık yedim ama dün et yedim).' },
        { t: 'diyalog', h: 'Hafta sonu nasıldı?', l: [
          ['Sara', '¿Qué tal el fin de semana?', 'Hafta sonu nasıldı?'],
          ['Diego', 'Muy bien. El sábado [visit]{é} a mis abuelos.', 'Çok iyi. Cumartesi dedemle ninemi ziyaret ettim.'],
          ['Sara', '¿Y el domingo?', 'Ya pazar?'],
          ['Diego', '[Ju]{gué} al fútbol y por la noche [cen]{amos} en un restaurante.', 'Futbol oynadım, akşam da bir restoranda yemek yedik.'],
          ['Sara', '¿Y [gan]{aste}?', 'Kazandın mı?'],
          ['Diego', 'No, [perd]{imos} tres a uno.', 'Hayır, üç bir kaybettik.']
        ] },
        { t: 'ornek', l: [
          ['Ayer [habl]{é} con mi madre.', 'Dün annemle [konuş]{tum}.'],
          ['¿A qué hora [lleg]{aste}?', 'Saat kaçta [gel]{din}?'],
          ['Mi hermano [viv]{ió} en Londres dos años.', 'Ağabeyim iki yıl Londra\'da [yaşa]{dı}.'],
          ['El año pasado [estudi]{amos} inglés.', 'Geçen yıl İngilizce [çalış]{tık}.'],
          ['[Compr]{aron} una casa en 2020.', '2020\'de bir ev [al]{dılar}.'],
          ['Anoche no [dorm]{í} bien.', 'Dün gece iyi [uyu]{madım}.'],
          ['[Le]{yó} el libro en un día.', 'Kitabı bir günde [oku]{du}.'],
          ['[Empe]{cé} a trabajar a las ocho.', 'Saat sekizde çalışmaya [başla]{dım}.']
        ] },
        { t: 'ozet', l: [
          'Bitmiş zamanlar (ayer, el año pasado, en 2019) için kullanılır.',
          '-ar: <b>-é, -aste, -ó, -amos, -asteis, -aron</b>.',
          '-er / -ir: <b>-í, -iste, -ió, -imos, -isteis, -ieron</b>.',
          'Vurgu işaretine dikkat: <i>hablo</i> ≠ <i>habló</i>.',
          'yo biçiminde yazım değişir: busqué, llegué, empecé.'
        ] }
      ],
      test: [
        { s: 'Ayer yo ___ con Ana. (hablar)', o: ['hablo', 'hablé', 'he hablado'], d: 1, a: 'ayer bitmiş bir zaman: hablé.' },
        { s: 'Ella ___ en Madrid. (vivir)', o: ['vivió', 'vivó', 'viví'], d: 0, a: '-ir fiillerinde él / ella eki -ió: vivió.' },
        { s: '"habló" ne demek?', o: ['konuşurum', 'konuştu', 'konuşacak'], d: 1, a: 'Son hecedeki vurgu geçmişi gösterir: habló = konuştu.' },
        { s: 'buscar → yo (geçmiş)', o: ['buscé', 'busqué', 'buscó'], d: 1, a: 'k sesini korumak için c → qu: busqué.' },
        { s: 'Ellos ___ mucho. (comer)', o: ['comieron', 'comeron', 'comiron'], d: 0, a: '-er fiillerinde ellos eki -ieron.' },
        { s: 'leer → él (geçmiş)', o: ['leió', 'leyó', 'leó'], d: 1, a: 'İki ünlü arasında i, y olur: leyó.' },
        { s: '"Geçen yıl İngilizce çalıştık."', o: ['El año pasado hemos estudiado inglés.', 'El año pasado estudiamos inglés.'], d: 1, a: 'Kapanmış zaman (el año pasado): estudiamos.' },
        { s: 'Tú ___ tarde. (llegar)', o: ['llegaste', 'llegó', 'llegué'], d: 0, a: 'tú için -aste: llegaste.' }
      ]
    },
    {
      id: 'es-a2-05', seviye: 'A2', sure: 10,
      baslik: 'Geçmiş zaman 2: düzensiz fiiller',
      kisa: 'fui, tuve, hice, estuve, dije',
      bolumler: [
        { t: 'metin', m: 'En sık kullanılan fiillerin çoğu bu geçmiş zamanda düzensizdir. İyi haber: bu fiiller kendi aralarında <b>aynı ek grubunu</b> kullanır ve <b>vurgu işareti almaz</b>: <i>tuve, estuve, hice, pude</i>. Önce kökü öğren, ekler hep aynı.' },
        { t: 'tablo', h: 'ser ve ir: aynı biçim', bas: ['Kişi', 'ser / ir', 'Örnek'], s: [
          ['yo', '{fui}', 'Fui al cine. (Sinemaya gittim.)'],
          ['tú', '{fuiste}', '¿Fuiste tú? (Sen miydin?)'],
          ['él / ella / usted', '{fue}', 'Fue increíble. (İnanılmazdı.)'],
          ['nosotros', '{fuimos}', 'Fuimos a la playa. (Plaja gittik.)'],
          ['vosotros', '{fuisteis}', '¿Fuisteis a la fiesta? (Partiye gittiniz mi?)'],
          ['ellos / ustedes', '{fueron}', 'Fueron muy amables. (Çok naziktiler.)']
        ] },
        { t: 'ipucu', h: 'fui: gittim mi, oldum mu?', m: 'ser ve ir bu zamanda tamamen aynıdır; anlam cümleden çıkar. Arkasından <b>a + yer</b> geliyorsa "gitmek": <i>Fui a Roma</i> (Roma\'ya gittim). Arkasından sıfat ya da isim geliyorsa "olmak": <i>Fue un día largo</i> (Uzun bir gündü).' },
        { t: 'tablo', h: 'Özel kökler', bas: ['Mastar', 'Kök', 'yo', 'él / ella'], s: [
          ['tener', '[tuv]-', '[tuv]{e}', '[tuv]{o}'],
          ['estar', '[estuv]-', '[estuv]{e}', '[estuv]{o}'],
          ['poder', '[pud]-', '[pud]{e}', '[pud]{o}'],
          ['poner', '[pus]-', '[pus]{e}', '[pus]{o}'],
          ['saber', '[sup]-', '[sup]{e}', '[sup]{o}'],
          ['querer', '[quis]-', '[quis]{e}', '[quis]{o}'],
          ['venir', '[vin]-', '[vin]{e}', '[vin]{o}'],
          ['hacer', '[hic]-', '[hic]{e}', '[hiz]{o}'],
          ['decir', '[dij]-', '[dij]{e}', '[dij]{o}'],
          ['traer', '[traj]-', '[traj]{e}', '[traj]{o}']
        ] },
        { t: 'tablo', h: 'Ortak ekler', bas: ['Kişi', 'Ek', 'tener ile'], s: [
          ['yo', '{-e}', '[tuv]{e}'],
          ['tú', '{-iste}', '[tuv]{iste}'],
          ['él / ella / usted', '{-o}', '[tuv]{o}'],
          ['nosotros', '{-imos}', '[tuv]{imos}'],
          ['vosotros', '{-isteis}', '[tuv]{isteis}'],
          ['ellos / ustedes', '{-ieron}', '[tuv]{ieron}']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede kök hiç değişmez, yalnızca ek gelir. Bu İspanyolca fiillerde ise kök değişir; ek yine sonda kişiyi gösterir.', l: [
          ['[yap]{tım}', '[hic]{e}'],
          ['[ol]{du} (sahip)', '[tuv]{o}'],
          ['[gel]{dik}', '[vin]{imos}'],
          ['[söyle]{diler}', '[dij]{eron}']
        ] },
        { t: 'ipucu', h: 'j ile bitenler: -eron', m: 'Kökü <b>j</b> ile biten decir, traer, conducir gibi fiillerde ellos eki <b>-eron</b> olur: <i>dijeron, trajeron, condujeron</i>. <i>dijieron</i> yanlıştır.' },
        { t: 'ipucu', h: 'hizo', m: 'hacer fiilinde él / ella biçimi <b>hizo</b> yazılır (c → z), çünkü <i>hico</i> "hiko" diye okunurdu.' },
        { t: 'tablo', h: 'dar ve ver: kısa ve işaretsiz', bas: ['Kişi', 'dar (vermek)', 'ver (görmek)'], s: [
          ['yo', '{di}', '{vi}'],
          ['tú', '{diste}', '{viste}'],
          ['él / ella / usted', '{dio}', '{vio}'],
          ['nosotros', '{dimos}', '{vimos}'],
          ['vosotros', '{disteis}', '{visteis}'],
          ['ellos / ustedes', '{dieron}', '{vieron}']
        ] },
        { t: 'tablo', h: '-ir fiillerinde kök değişimi (yalnızca 3. kişiler)', bas: ['Mastar', 'él / ella', 'ellos / ellas'], s: [
          ['pedir', '[pid]{ió}', '[pid]{ieron}'],
          ['repetir', '[repit]{ió}', '[repit]{ieron}'],
          ['preferir', '[prefir]{ió}', '[prefir]{ieron}'],
          ['sentir', '[sint]{ió}', '[sint]{ieron}'],
          ['dormir', '[durm]{ió}', '[durm]{ieron}'],
          ['morir', '[mur]{ió}', '[mur]{ieron}']
        ] },
        { t: 'ipucu', h: 'Sadece él ve ellos', m: 'Bu e → i ve o → u değişimi yalnızca <b>él / ella / usted</b> ve <b>ellos / ellas / ustedes</b> biçimlerinde olur. Diğerleri düzenlidir: <i>pedí, pediste, pedimos; dormí, dormiste</i>.' },
        { t: 'diyalog', h: 'Tatil dönüşü', l: [
          ['Elena', '¿Adónde {fuiste} de vacaciones?', 'Tatile nereye gittin?'],
          ['Javier', '{Fui} a Sevilla con mi familia. [Estuv]{imos} una semana.', 'Ailemle Sevilla\'ya gittim. Bir hafta kaldık.'],
          ['Elena', '¿Qué tal {fue}?', 'Nasıldı?'],
          ['Javier', 'Genial, pero [hiz]{o} mucho calor. No [pud]{e} dormir bien.', 'Harikaydı ama hava çok sıcaktı. İyi uyuyamadım.'],
          ['Elena', '¿Y qué [hic]{isteis}?', 'Ne yaptınız?'],
          ['Javier', '{Vimos} la catedral y {fuimos} a un espectáculo de flamenco.', 'Katedrali gördük ve bir flamenko gösterisine gittik.']
        ] },
        { t: 'ornek', l: [
          ['Ayer {fui} al médico.', 'Dün doktora [git]{tim}.'],
          ['{Fue} un viaje increíble.', 'İnanılmaz bir yolculuk{tu}.'],
          ['No [pud]{e} venir a la fiesta.', 'Partiye [gel]{emedim}.'],
          ['¿Qué [hic]{iste} el sábado?', 'Cumartesi ne [yap]{tın}?'],
          ['[Tuv]{e} que trabajar.', 'Çalışmak [zorunda kal]{dım}.'],
          ['Me [dij]{eron} la verdad.', 'Bana gerçeği [söyle]{diler}.'],
          ['[Estuv]{imos} en casa todo el día.', 'Bütün gün evde{ydik}.'],
          ['El niño [durm]{ió} diez horas.', 'Çocuk on saat [uyu]{du}.']
        ] },
        { t: 'ozet', l: [
          'ser ve ir aynı: <b>fui, fuiste, fue, fuimos, fuisteis, fueron</b>.',
          'Özel kökler: tuv-, estuv-, pud-, pus-, sup-, quis-, vin-, hic-, dij-, traj-.',
          'Ortak ekler: <b>-e, -iste, -o, -imos, -isteis, -ieron</b> (vurgu işareti yok).',
          'j ile bitenlerde ellos: <i>dijeron, trajeron</i>.',
          '-ir kök değişimi yalnızca él ve ellos\'ta: <i>pidió, durmió</i>.'
        ] }
      ],
      test: [
        { s: '"Sinemaya gittim."', o: ['Fui al cine.', 'Iba al cine.', 'Fue al cine.'], d: 0, a: 'ir → yo: fui. (fue = gitti.)' },
        { s: 'tener → yo (geçmiş)', o: ['tení', 'tuve', 'tuvé'], d: 1, a: 'Kök tuv- + -e; vurgu işareti yok: tuve.' },
        { s: 'hacer → él (geçmiş)', o: ['hizo', 'hico', 'hació'], d: 0, a: 'Okunuşu korumak için c → z: hizo.' },
        { s: 'Ellos me ___ la verdad. (decir)', o: ['dijieron', 'dijeron', 'decieron'], d: 1, a: 'Kökü j ile bitenlerde -eron: dijeron.' },
        { s: 'pedir → ella (geçmiş)', o: ['pedió', 'pidió', 'pidio'], d: 1, a: '3. kişide e → i: pidió.' },
        { s: '"Fue un día largo." Burada fue hangi fiil?', o: ['ir (gitmek)', 'ser (olmak)'], d: 1, a: 'Arkasında yer değil isim var: ser (Uzun bir gündü).' },
        { s: 'Nosotros ___ en casa. (estar)', o: ['estuvimos', 'estamos', 'estábamos'], d: 0, a: 'Kök estuv- + -imos: estuvimos.' },
        { s: 'ver → yo (geçmiş)', o: ['ví', 'vi', 'veí'], d: 1, a: 'Tek heceli olduğu için vurgu işareti almaz: vi.' }
      ]
    },
    {
      id: 'es-a2-06', seviye: 'A2', sure: 9,
      baslik: 'Eskiden: imperfecto',
      kisa: 'hablaba, comía, era, iba',
      bolumler: [
        { t: 'metin', m: 'Bu geçmiş zaman (pretérito imperfecto), geçmişteki <b>alışkanlıkları</b> (eskiden …-erdi), <b>tasvirleri</b> (nasıldı, neler vardı) ve bir olayın <b>arka planını</b> anlatır. Başı sonu belli olmayan, süregiden geçmiştir: <i>De niño jugaba al fútbol</i> (Çocukken futbol oynardım).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-(e)rdi</b> (eskiden yapardım) ve <b>-iyordu</b> (o sırada yapıyordum) biçimlerinin karşılığıdır.', l: [
          ['[oyna]{rdım}', '[jug]{aba}'],
          ['[ye]{rdin}', '[com]{ías}'],
          ['[yaşa]{rdık}', '[viv]{íamos}'],
          ['[çalış]{ıyordu}', '[trabaj]{aba}']
        ] },
        { t: 'tablo', h: 'Ekler', bas: ['Kişi', '-ar (hablar)', '-er / -ir (comer, vivir)'], s: [
          ['yo', '[habl]{aba}', '[com]{ía}'],
          ['tú', '[habl]{abas}', '[com]{ías}'],
          ['él / ella / usted', '[habl]{aba}', '[com]{ía}'],
          ['nosotros', '[habl]{ábamos}', '[com]{íamos}'],
          ['vosotros', '[habl]{abais}', '[com]{íais}'],
          ['ellos / ustedes', '[habl]{aban}', '[com]{ían}']
        ] },
        { t: 'ipucu', h: 'yo = él', m: 'Bu zamanda <b>yo</b> ve <b>él / ella</b> biçimi aynıdır: <i>hablaba</i> = konuşurdum / konuşurdu. Karışıklık olursa zamiri söyle: <i>Yo hablaba, ella escuchaba.</i>' },
        { t: 'tablo', h: 'Yalnızca üç düzensiz fiil', bas: ['Kişi', 'ser', 'ir', 'ver'], s: [
          ['yo', '{era}', '{iba}', '{veía}'],
          ['tú', '{eras}', '{ibas}', '{veías}'],
          ['él / ella / usted', '{era}', '{iba}', '{veía}'],
          ['nosotros', '{éramos}', '{íbamos}', '{veíamos}'],
          ['vosotros', '{erais}', '{ibais}', '{veíais}'],
          ['ellos / ustedes', '{eran}', '{iban}', '{veían}']
        ] },
        { t: 'metin', h: 'Ne zaman kullanılır?', m: '1) <b>Alışkanlık:</b> <i>Todos los veranos íbamos al pueblo</i> (Her yaz köye giderdik). 2) <b>Tasvir:</b> <i>La casa era grande y tenía un jardín</i> (Ev büyüktü, bir bahçesi vardı). 3) <b>Saat ve yaş:</b> <i>Eran las diez. Tenía doce años.</i> 4) <b>Arka plan:</b> <i>Llovía y hacía frío</i> (Yağmur yağıyordu ve hava soğuktu).' },
        { t: 'tablo', h: 'Zaman işaretleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['antes', 'eskiden'],
          ['de niño / de niña', 'çocukken'],
          ['cuando era pequeño', 'küçükken'],
          ['siempre', 'her zaman'],
          ['todos los días', 'her gün'],
          ['a menudo', 'sık sık'],
          ['a veces', 'bazen'],
          ['en aquella época', 'o zamanlar']
        ] },
        { t: 'ipucu', h: 'solía + mastar', m: '"Eskiden … -erdim" demenin bir yolu da <b>soler</b> fiilinin bu zamandaki biçimidir: <i>Solía correr por las mañanas</i> = <i>Corría por las mañanas</i> (Sabahları koşardım).' },
        { t: 'ipucu', h: 'Saat ve yaş hep imperfecto', m: 'Geçmişte saat ve yaş söylerken <b>era / eran</b> ve <b>tenía</b> kullanılır: <i>Era la una. Eran las tres.</i> <i>Cuando tenía veinte años…</i> (Yirmi yaşındayken…).' },
        { t: 'ipucu', h: 'había: vardı', m: '<i>hay</i> (var) fiilinin bu zamandaki biçimi <b>había</b>\'dır ve tekil-çoğul değişmez: <i>Había mucha gente</i> (Çok insan vardı), <i>No había coches</i> (Araba yoktu).' },
        { t: 'diyalog', h: 'Çocukluk', l: [
          ['Abuela', 'Cuando yo {era} pequeña, no {había} televisión.', 'Ben küçükken televizyon yoktu.'],
          ['Nieto', '¿Y qué [hac]{íais} por las tardes?', 'Peki öğleden sonraları ne yapardınız?'],
          ['Abuela', '[Jug]{ábamos} en la calle y [le]{íamos} mucho.', 'Sokakta oynardık ve çok okurduk.'],
          ['Nieto', '¿[Ten]{ías} muchos amigos?', 'Çok arkadaşın var mıydı?'],
          ['Abuela', 'Sí, y todos los domingos {íbamos} al río.', 'Evet, her pazar da dereye giderdik.']
        ] },
        { t: 'ornek', l: [
          ['De niño [viv]{ía} en un pueblo.', 'Çocukken bir köyde [yaşa]{rdım}.'],
          ['Antes [trabaj]{aba} en un hotel.', 'Eskiden bir otelde [çalış]{ırdım}.'],
          ['Mi abuelo {era} muy alto.', 'Dedem çok uzun boylu{ydu}.'],
          ['Todos los veranos {íbamos} a la playa.', 'Her yaz plaja [gid]{erdik}.'],
          ['{Eran} las once de la noche.', 'Saat gece on bir{di}.'],
          ['[Hac]{ía} mucho frío.', 'Hava çok soğuk{tu}.'],
          ['Cuando [ten]{ía} diez años, [toc]{aba} el piano.', 'On yaşındayken piyano [çal]{ardım}.'],
          ['Siempre {veíamos} la tele juntos.', 'Hep birlikte televizyon [izl]{erdik}.']
        ] },
        { t: 'ozet', l: [
          'Alışkanlık, tasvir, saat / yaş ve arka plan için kullanılır.',
          '-ar: <b>-aba, -abas, -aba, -ábamos, -abais, -aban</b>.',
          '-er / -ir: <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>.',
          'Yalnızca üç düzensiz: <b>era, iba, veía</b>.',
          'Türkçe karşılığı çoğunlukla <b>-erdi</b> ya da <b>-iyordu</b>.'
        ] }
      ],
      test: [
        { s: 'De niño yo ___ al fútbol. (jugar)', o: ['jugué', 'jugaba', 'juego'], d: 1, a: 'Geçmişteki alışkanlık: jugaba.' },
        { s: 'ser → nosotros (imperfecto)', o: ['éramos', 'fuimos', 'seríamos'], d: 0, a: 'ser düzensizdir: éramos.' },
        { s: 'comer → ellos (imperfecto)', o: ['comían', 'comaban', 'comieron'], d: 0, a: '-er fiillerinde -ían.' },
        { s: '"Saat ondu."', o: ['Fueron las diez.', 'Eran las diez.', 'Son las diez.'], d: 1, a: 'Geçmişte saat: eran.' },
        { s: 'ir → yo (imperfecto)', o: ['iba', 'fui', 'ía'], d: 0, a: 'ir düzensizdir: iba.' },
        { s: '"Eskiden bir otelde çalışırdım."', o: ['Antes trabajé en un hotel.', 'Antes trabajaba en un hotel.'], d: 1, a: 'Eskiden süregelen durum: trabajaba.' },
        { s: '"Solía correr." ne demek?', o: ['Koşardım.', 'Koşacağım.', 'Koştum.'], d: 0, a: 'soler (imperfecto) + mastar: eskiden yapardım.' },
        { s: 'Hangisi bu zamanda düzensiz DEĞİL?', o: ['ser', 'ir', 'tener', 'ver'], d: 2, a: 'Yalnızca ser, ir ve ver düzensizdir; tener → tenía.' }
      ]
    },
    {
      id: 'es-a2-07', seviye: 'A2', sure: 10,
      baslik: 'Hangi geçmiş zaman?',
      kisa: 'he comido · comí · comía',
      bolumler: [
        { t: 'metin', m: 'Artık üç geçmiş zamanı biliyorsun. Hangisini seçeceğin, olayın <b>ne zaman</b> olduğuna ve onu <b>nasıl gördüğüne</b> bağlı. Türkçede de benzer bir seçim yaparız: <i>gittim, gidiyordum, giderdim</i>.' },
        { t: 'tablo', h: 'Üç zaman yan yana', bas: ['Zaman', 'Ne zaman?', 'Örnek', 'Türkçe'], s: [
          ['Perfecto', 'bugün, bu hafta; hayat deneyimi', 'Hoy {he comido} paella.', 'Bugün paella yedim.'],
          ['Indefinido', 'dün, geçen yıl: bitmiş zaman', 'Ayer {comí} paella.', 'Dün paella yedim.'],
          ['Imperfecto', 'eskiden, her zaman; tasvir', 'Antes {comía} paella.', 'Eskiden paella yerdim.']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki geçmiş biçimleri kabaca şöyle eşleşir:', l: [
          ['dün [konuş]{tum}', 'ayer [habl]{é}'],
          ['bugün [konuş]{tum}', 'hoy {he} [habl]{ado}'],
          ['o sırada [konuş]{uyordum}', 'en ese momento [habl]{aba}'],
          ['eskiden [konuş]{urdum}', 'antes [habl]{aba}']
        ] },
        { t: 'metin', h: 'Olay ve arka plan', m: 'Hikâye anlatırken arka plan (hava, ortam, o sırada ne oluyordu) <b>imperfecto</b> ile, araya giren olay <b>indefinido</b> ile söylenir: <i>Estaba en casa cuando <b>sonó</b> el teléfono</i> (Evdeydim, telefon çaldı). Türkçede de aynı mantık var: "evde<b>ydim</b>, telefon <b>çaldı</b>".' },
        { t: 'tablo', h: 'Arka plan + olay', bas: ['Arka plan (imperfecto)', 'Olay (indefinido)', 'Türkçe'], s: [
          ['{Dormía}…', '…cuando {sonó} la alarma.', 'Uyuyordum, alarm çaldı.'],
          ['{Llovía}…', '…y {decidimos} quedarnos en casa.', 'Yağmur yağıyordu, evde kalmaya karar verdik.'],
          ['{Estaba} en la ducha…', '…cuando {llegaste}.', 'Duştaydım, sen geldin.'],
          ['{Íbamos} por la calle…', '…y {vimos} a Juan.', 'Sokakta yürüyorduk, Juan\'ı gördük.']
        ] },
        { t: 'ipucu', h: 'Süre belliyse indefinido', m: 'Bir durum ne kadar uzun olursa olsun, başı sonu belli ve bitmişse indefinido kullanılır: <i>Viví diez años en Madrid</i> (Madrid\'de on yıl yaşadım; artık yaşamıyorum). <i>Vivía en Madrid</i> ise "o zamanlar Madrid\'de yaşıyordum" demektir.' },
        { t: 'ipucu', h: 'Bir kez mi, her zaman mı?', m: '<i>El sábado fui al cine</i> (Cumartesi sinemaya gittim: bir kez). <i>Los sábados iba al cine</i> (Cumartesileri sinemaya giderdim: alışkanlık).' },
        { t: 'ipucu', h: 'Ya perfecto?', m: 'Zaman dilimi hâlâ sürüyorsa (<i>hoy, esta semana, este año</i>) ya da "hiç, şimdiye kadar" anlamı varsa perfecto: <i>Este año he viajado mucho. ¿Has estado en Perú?</i>' },
        { t: 'tablo', h: 'İşaret kelimeleri', bas: ['Perfecto', 'Indefinido', 'Imperfecto'], s: [
          ['hoy', 'ayer', 'antes'],
          ['esta semana', 'la semana pasada', 'siempre'],
          ['este año', 'el año pasado', 'todos los días'],
          ['ya / todavía no', 'hace dos años', 'de niño'],
          ['alguna vez / nunca', 'en 2010', 'normalmente']
        ] },
        { t: 'diyalog', h: 'Bir hikâye', l: [
          ['Laura', '¿Qué te {pasó} ayer?', 'Dün sana ne oldu?'],
          ['Raúl', '{Iba} en bici al trabajo. {Llovía} mucho…', 'Bisikletle işe gidiyordum. Çok yağmur yağıyordu…'],
          ['Laura', '¿Y?', 'Eee?'],
          ['Raúl', 'Un coche {frenó} delante de mí y me {caí}.', 'Önümde bir araba fren yaptı ve düştüm.'],
          ['Laura', '¡Qué horror! ¿Y hoy cómo estás?', 'Ne korkunç! Peki bugün nasılsın?'],
          ['Raúl', 'Mejor. Hoy {he ido} al médico y no es nada.', 'Daha iyi. Bugün doktora gittim, bir şey yokmuş.']
        ] },
        { t: 'ornek', l: [
          ['Hoy {he desayunado} tarde.', 'Bugün geç kahvaltı [yap]{tım}.'],
          ['Ayer {desayuné} en un bar.', 'Dün bir kafede kahvaltı [yap]{tım}.'],
          ['Antes {desayunaba} en casa.', 'Eskiden evde kahvaltı [yap]{ardım}.'],
          ['{Estaba} cansado y {me acosté} pronto.', 'Yorgun{dum}, erkenden [yat]{tım}.'],
          ['Cuando {era} joven, {vivía} en París.', 'Gençken Paris\'te [yaşı]{yordum}.'],
          ['{Viví} en París tres años.', 'Paris\'te üç yıl [yaşa]{dım}.'],
          ['{Hacía} sol, así que {fuimos} a la playa.', 'Hava güneşli{ydi}, o yüzden plaja [git]{tik}.'],
          ['¿{Has visto} esta película alguna vez?', 'Bu filmi hiç [gör]{dün} mü?']
        ] },
        { t: 'ozet', l: [
          '<b>Perfecto:</b> bugün, bu hafta, hayat deneyimi (<i>he comido</i>).',
          '<b>Indefinido:</b> bitmiş zaman, tek olay (<i>comí</i>).',
          '<b>Imperfecto:</b> alışkanlık, tasvir, arka plan (<i>comía</i>).',
          'Hikâyede: arka plan imperfecto + araya giren olay indefinido.',
          'Süre belli ve bitmişse indefinido: <i>viví diez años</i>.'
        ] }
      ],
      test: [
        { s: 'Ayer ___ al médico. (ir)', o: ['he ido', 'fui', 'iba'], d: 1, a: 'ayer bitmiş zaman, tek olay: fui.' },
        { s: 'Hoy ___ mucho. (trabajar)', o: ['he trabajado', 'trabajaba', 'trabajé'], d: 0, a: 'hoy henüz bitmemiş zaman dilimi: he trabajado (İspanya kullanımı).' },
        { s: 'De pequeño ___ en un pueblo. (vivir)', o: ['viví', 'vivía', 'he vivido'], d: 1, a: 'Çocukluktaki süregiden durum: vivía.' },
        { s: '___ en la ducha cuando sonó el teléfono. (estar)', o: ['Estuve', 'Estaba', 'He estado'], d: 1, a: 'Arka plan: estaba.' },
        { s: 'Estaba en la ducha cuando ___ el teléfono. (sonar)', o: ['sonaba', 'sonó', 'ha sonado'], d: 1, a: 'Araya giren olay: sonó.' },
        { s: '"Madrid\'de on yıl yaşadım (artık yaşamıyorum)."', o: ['Viví diez años en Madrid.', 'Vivía diez años en Madrid.'], d: 0, a: 'Süre belli ve bitmiş: viví.' },
        { s: '"Cumartesileri sinemaya giderdim."', o: ['Los sábados fui al cine.', 'Los sábados iba al cine.'], d: 1, a: 'Alışkanlık: iba.' },
        { s: '¿___ alguna vez en Perú? (estar)', o: ['Estuviste', 'Has estado', 'Estabas'], d: 1, a: 'Hayat deneyimi (alguna vez): has estado.' }
      ]
    },
    {
      id: 'es-a2-08', seviye: 'A2', sure: 9,
      baslik: 'Nesne zamirleri 1: lo, la, los, las',
      kisa: 'lo veo, la compro, no los conozco',
      bolumler: [
        { t: 'metin', m: 'Bir ismi tekrar etmemek için <b>doğrudan nesne zamirleri</b> kullanılır: "Kitabı aldım. <b>Onu</b> okudum." Bu zamirler eylemden doğrudan etkilenen kişinin ya da şeyin yerini tutar ve <b>çekimli fiilin önüne</b> gelir: <i>¿El libro? <b>Lo</b> leí.</i>' },
        { t: 'tablo', h: 'Zamirler', bas: ['Kişi', 'Zamir', 'Türkçe'], s: [
          ['yo', '{me}', 'beni'],
          ['tú', '{te}', 'seni'],
          ['él / usted (eril)', '{lo}', 'onu / sizi'],
          ['ella / usted (dişil)', '{la}', 'onu / sizi'],
          ['nosotros', '{nos}', 'bizi'],
          ['vosotros', '{os}', 'sizi'],
          ['ellos / ustedes (eril)', '{los}', 'onları / sizi'],
          ['ellas / ustedes (dişil)', '{las}', 'onları / sizi']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede "onu" hep aynıdır. İspanyolcada zamir, yerini tuttuğu ismin <b>cinsiyetine ve sayısına</b> uyar. Sıra da farklı: zamir fiilden <b>önce</b> gelir.', l: [
          ['{Onu} okuyorum. (kitabı)', '{Lo} leo. (el libro)'],
          ['{Onu} yiyorum. (pizzayı)', '{La} como. (la pizza)'],
          ['{Onları} aldım. (biletleri)', '{Los} compré. (los billetes)'],
          ['{Onları} bulamıyorum. (anahtarları)', 'No {las} encuentro. (las llaves)']
        ] },
        { t: 'metin', h: 'Zamirin yeri', m: '1) <b>Çekimli fiilin önü:</b> <i>La veo.</i> 2) <b>Mastar ya da -ndo varsa</b> ya önüne ya sonuna (bitişik): <i>La voy a ver = Voy a verla; La estoy viendo = Estoy viéndola</i>. 3) <b>Olumlu emirde</b> sonuna: <i>¡Cómpralo!</i> 4) <b>haber ile</b> önüne: <i>Lo he visto.</i>' },
        { t: 'tablo', h: 'Aynı cümle, iki doğru sıra', bas: ['Önde', 'Sonda (bitişik)', 'Türkçe'], s: [
          ['{Lo} voy a comprar.', 'Voy a comprar{lo}.', 'Onu satın alacağım.'],
          ['{La} quiero ver.', 'Quiero ver{la}.', 'Onu görmek istiyorum.'],
          ['{Los} estoy leyendo.', 'Estoy leyéndo{los}.', 'Onları okuyorum.'],
          ['¿{Me} puedes ayudar?', '¿Puedes ayudar{me}?', 'Bana yardım edebilir misin?']
        ] },
        { t: 'ipucu', h: 'lo: "bunu, bu durumu"', m: '<b>lo</b> bir fikrin ya da bütün bir cümlenin yerini de tutar: <i>¿Sabes dónde está Ana? — No <b>lo</b> sé.</i> (Bilmiyorum.) <i>Ya <b>lo</b> sé</i> (Biliyorum zaten).' },
        { t: 'ipucu', h: 'ayudar, llamar, esperar: doğrudan nesne', m: 'Türkçede "bana yardım et, seni bekliyorum" deriz; İspanyolcada <i>ayudar, llamar, esperar, invitar</i> doğrudan nesne alır: <i>Te ayudo. La llamo. Los espero.</i>' },
        { t: 'ipucu', h: 'İspanya\'da le', m: 'İspanya\'da erkek <b>kişiler</b> için lo yerine <b>le</b> de duyarsın: <i>Lo vi ayer</i> yerine <i>Le vi ayer</i> (Onu dün gördüm). Bu kabul edilen bir kullanımdır, ama eşyalar için her zaman lo: <i>El coche lo vendí.</i>' },
        { t: 'ipucu', h: 'İsim öne alınırsa zamir de gelir', m: 'Nesne cümlenin başına alınırsa zamir de söylenir: <i>El café <b>lo</b> tomo sin azúcar</i> (Kahveyi şekersiz içerim). Türkçede böyle bir tekrar yoktur.' },
        { t: 'diyalog', h: 'Mağazada', l: [
          ['Vendedora', '¿Le gusta esta chaqueta?', 'Bu ceketi beğendiniz mi?'],
          ['Cliente', 'Sí, mucho. ¿{La} tiene en azul?', 'Evet, çok. Mavisi var mı?'],
          ['Vendedora', 'Sí, aquí {la} tiene. ¿{La} quiere probar?', 'Evet, buyurun. Denemek ister misiniz?'],
          ['Cliente', 'Sí, {la} pruebo ahora.', 'Evet, şimdi deniyorum.'],
          ['Cliente', 'Me queda bien. {La} compro.', 'Üstüme oldu. Alıyorum.']
        ] },
        { t: 'ornek', l: [
          ['¿Conoces a Marta? — Sí, {la} conozco.', 'Marta\'yı tanıyor musun? — Evet, {onu} tanıyorum.'],
          ['¿Mis gafas? No {las} encuentro.', 'Gözlüğüm mü? {Onu} bulamıyorum.'],
          ['¿El pan? {Lo} compro yo.', 'Ekmek mi? {Onu} ben alırım.'],
          ['{Te} quiero.', '{Seni} seviyorum.'],
          ['¿{Me} oyes?', '{Beni} duyuyor musun?'],
          ['Voy a llamar{te} mañana.', '{Seni} yarın arayacağım.'],
          ['Este libro {lo} he leído dos veces.', 'Bu kitabı iki kez okudum.'],
          ['No {lo} sé.', 'Bilmiyorum.']
        ] },
        { t: 'ozet', l: [
          '<b>me, te, lo / la, nos, os, los / las</b>: beni, seni, onu…',
          'lo / la / los / las ismin cinsiyetine ve sayısına uyar.',
          'Çekimli fiilin önüne gelir: <i>La veo.</i>',
          'Mastar ve -ndo ile sona da yapışabilir: <i>voy a verla</i>.',
          'lo bir fikrin yerini tutar: <i>No lo sé.</i>'
        ] }
      ],
      test: [
        { s: '¿La pizza? ___ como ahora.', o: ['Lo', 'La', 'Las'], d: 1, a: 'pizza dişil tekil: la.' },
        { s: '¿Los billetes? Ya ___ compré.', o: ['los', 'les', 'las'], d: 0, a: 'billetes eril çoğul: los.' },
        { s: '"Onu görmek istiyorum." (Ana\'yı)', o: ['Quiero verla.', 'Quiero la ver.', 'La quiero verla.'], d: 0, a: 'Zamir mastara bitişir: verla (ya da La quiero ver).' },
        { s: '"Bilmiyorum."', o: ['No sé lo.', 'No lo sé.', 'Lo no sé.'], d: 1, a: 'no önce, zamir fiilden önce: No lo sé.' },
        { s: '"Seni seviyorum."', o: ['Te quiero.', 'Quiero te.', 'Ti quiero.'], d: 0, a: 'te çekimli fiilin önüne gelir.' },
        { s: '¿Las llaves? No ___ encuentro.', o: ['los', 'las', 'la'], d: 1, a: 'llaves dişil çoğul: las.' },
        { s: '"Onları okuyorum." (los libros)', o: ['Estoy leyéndolos.', 'Estoy los leyendo.', 'Estoy leyendolos los.'], d: 0, a: 'Zamir -ndo\'ya yapışır, vurgu işareti gelir: leyéndolos (ya da Los estoy leyendo).' },
        { s: '"Onu gördüm." (el coche)', o: ['Lo he visto.', 'He lo visto.', 'He visto lo.'], d: 0, a: 'haber ile zamir öne gelir: Lo he visto.' }
      ]
    },
    {
      id: 'es-a2-09', seviye: 'A2', sure: 10,
      baslik: 'Nesne zamirleri 2: le, les ve se lo',
      kisa: 'le doy, les escribo, se lo digo',
      bolumler: [
        { t: 'metin', m: '<b>Dolaylı nesne</b>, eylemin <b>kime</b> ya da <b>kimin için</b> yapıldığını söyler: "Ana\'ya bir hediye verdim." Zamirleri <b>me, te, le, nos, os, les</b>\'tir ve yine çekimli fiilin önüne gelir: <i><b>Le</b> di un regalo</i> (Ona bir hediye verdim).' },
        { t: 'tablo', h: 'Zamirler', bas: ['Kişi', 'Dolaylı', 'Türkçe'], s: [
          ['yo', '{me}', 'bana'],
          ['tú', '{te}', 'sana'],
          ['él / ella / usted', '{le}', 'ona / size'],
          ['nosotros', '{nos}', 'bize'],
          ['vosotros', '{os}', 'size'],
          ['ellos / ellas / ustedes', '{les}', 'onlara / size']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-e / -a</b> hali (yönelme) çoğunlukla dolaylı nesneye karşılık gelir. İspanyolcada zamir yine fiilin önündedir.', l: [
          ['{Bana} kitap veriyor.', '{Me} da un libro.'],
          ['{Ona} mektup yazdım.', '{Le} escribí una carta.'],
          ['{Onlara} gerçeği söyledi.', '{Les} dijo la verdad.'],
          ['{Size} bir şey sorabilir miyim?', '¿{Le} puedo preguntar algo?']
        ] },
        { t: 'metin', h: 'Tekrar eden zamir', m: 'İspanyolcada kişinin adı söylense bile zamir çoğunlukla yine kullanılır: <i><b>Le</b> doy el libro <b>a Juan</b></i> (Kitabı Juan\'a veriyorum). Bu tekrar yanlış değil, tam tersine çok doğaldır. A1\'deki <i>A mí me gusta</i> yapısı da aynı mantıkla kurulur.' },
        { t: 'metin', h: 'İki zamir bir arada', m: 'Bir cümlede hem dolaylı hem doğrudan zamir varsa sıra hep aynıdır: önce <b>kime</b>, sonra <b>neyi</b>: <i><b>Me lo</b> das</i> (Onu bana verirsin). Türkçede "onu bana" deriz; İspanyolcada "bana onu".' },
        { t: 'tablo', h: 'le / les → se', bas: ['Yanlış', 'Doğru', 'Türkçe'], s: [
          ['le lo doy', '{se} lo doy', 'onu ona veriyorum'],
          ['les la envío', '{se} la envío', 'onu onlara gönderiyorum'],
          ['le los compro', '{se} los compro', 'onları ona alıyorum']
        ] },
        { t: 'ipucu', h: 'le lo olmaz', m: '<b>le</b> ya da <b>les</b>, lo / la / los / las ile yan yana gelince <b>se</b> olur. Bu se dönüşlü değildir, sadece söyleyiş kolaylığı içindir: <i>¿El regalo? <b>Se lo</b> di ayer</i> (Hediye mi? Dün ona verdim).' },
        { t: 'tablo', h: 'Bütün birleşimler', bas: ['Kime', '+ lo / la', 'Örnek'], s: [
          ['bana', '{me} lo', 'Me lo dices. (Onu bana söylüyorsun.)'],
          ['sana', '{te} lo', 'Te lo explico. (Onu sana açıklıyorum.)'],
          ['ona / size', '{se} lo', 'Se lo doy. (Onu ona veriyorum.)'],
          ['bize', '{nos} lo', 'Nos lo enseña. (Onu bize öğretiyor.)'],
          ['onlara / size', '{se} lo', 'Se lo envío. (Onu onlara gönderiyorum.)']
        ] },
        { t: 'ipucu', h: 'Mastar ve emirde sona yapışır', m: '<i>Voy a dár<b>selo</b></i> (Onu ona vereceğim), <i>¡Dí<b>melo</b>!</i> (Onu bana söyle!). Hece sayısı arttığı için vurgunun yerini korumak üzere vurgu işareti eklenir: <i>da-me-lo → dámelo</i>.' },
        { t: 'diyalog', h: 'Doğum günü hediyesi', l: [
          ['Carmen', 'Mañana es el cumpleaños de Pedro. ¿Qué {le} compramos?', 'Yarın Pedro\'nun doğum günü. Ona ne alalım?'],
          ['Iván', '{Le} gusta mucho leer. ¿{Le} regalamos un libro?', 'Okumayı çok seviyor. Ona bir kitap hediye edelim mi?'],
          ['Carmen', 'Buena idea. ¿Y quién {se lo} da?', 'İyi fikir. Peki kitabı ona kim verecek?'],
          ['Iván', 'Yo {se lo} doy en la fiesta.', 'Ben partide veririm.'],
          ['Carmen', 'Perfecto. Luego {me lo} cuentas todo.', 'Harika. Sonra bana her şeyi anlatırsın.']
        ] },
        { t: 'ornek', l: [
          ['¿{Me} pasas la sal?', '{Bana} tuzu uzatır mısın?'],
          ['{Le} escribí un correo a mi jefe.', 'Patronum{a} bir e-posta yazdım.'],
          ['{Les} explico los ejercicios a los alumnos.', 'Öğrenciler{e} alıştırmaları açıklıyorum.'],
          ['¿El dinero? Ya {te lo} di.', 'Para mı? {Onu sana} çoktan verdim.'],
          ['¿Las fotos? {Se las} envío ahora.', 'Fotoğraflar mı? {Onları ona} şimdi gönderiyorum.'],
          ['Dí{melo}, por favor.', '{Onu bana} söyle, lütfen.'],
          ['Voy a dár{selo} mañana.', '{Onu ona} yarın vereceğim.'],
          ['¿Qué {le} pasa a tu hermano?', 'Kardeşin{e} ne oluyor?']
        ] },
        { t: 'ozet', l: [
          'Dolaylı zamirler: <b>me, te, le, nos, os, les</b> (bana, sana, ona…).',
          'Kişi adı söylense de zamir kalır: <i>Le doy el libro a Juan.</i>',
          'İki zamirde sıra: önce kime, sonra neyi: <i>me lo, te la</i>.',
          'le / les + lo / la → <b>se lo, se la</b>.',
          'Mastar ve emirde sona yapışır: <i>dámelo, dárselo</i>.'
        ] }
      ],
      test: [
        { s: '___ doy el libro a Juan.', o: ['Lo', 'Le', 'Les'], d: 1, a: 'Kime (a Juan): dolaylı zamir le.' },
        { s: '¿El regalo? ___ lo di ayer. (a ella)', o: ['Le', 'Se', 'La'], d: 1, a: 'le + lo yan yana gelince se lo olur.' },
        { s: '"Onu bana söyle."', o: ['Dímelo.', 'Dílome.', 'Me lo di.'], d: 0, a: 'Önce kime (me), sonra neyi (lo): dímelo.' },
        { s: 'A mis padres ___ escribo cada semana.', o: ['le', 'les', 'los'], d: 1, a: 'Kime (anneme babama, çoğul): les.' },
        { s: '"Onu sana açıklıyorum."', o: ['Lo te explico.', 'Te lo explico.', 'Te le explico.'], d: 1, a: 'Önce kime (te), sonra neyi (lo).' },
        { s: '¿Las fotos? ___ envío ahora. (a ellos)', o: ['Les las', 'Se las', 'Se los'], d: 1, a: 'les + las → se las; fotos dişil: las.' },
        { s: '"¿Me pasas la sal?" ne demek?', o: ['Tuzu bana uzatır mısın?', 'Tuz geçti mi?', 'Tuzu sana uzatayım mı?'], d: 0, a: 'me = bana; pasar = uzatmak.' },
        { s: '"Onu ona vereceğim."', o: ['Voy a dárselo.', 'Voy a dárlelo.', 'Voy a lo dar.'], d: 0, a: 'le + lo → se lo; mastara yapışır: dárselo.' }
      ]
    },
    {
      id: 'es-a2-10', seviye: 'A2', sure: 10,
      baslik: 'Emir kipi',
      kisa: '¡Mira!, ¡Ven!, ¡Siéntese!, ¡No toques!',
      bolumler: [
        { t: 'metin', m: 'Emir kipi talimat, tarif, yol tarifi ve rica için kullanılır: <i>Gira a la derecha</i> (Sağa dön). İspanyolcada <b>kime</b> söylediğine göre biçim değişir: samimi <b>tú</b>, kibar <b>usted</b>, çoğulda <b>vosotros / ustedes</b>.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede emir için fiilin <b>kökü</b> yeter: bak, ye, yaz. İspanyolcada tú emri, şimdiki zamandaki <b>él</b> biçimine benzer; kibar emir ise farklı bir ünlüyle biter.', l: [
          ['[bak]', '[mir]{a}'],
          ['[ye]', '[com]{e}'],
          ['[yaz]', '[escrib]{e}'],
          ['[bak]{ın} (kibar)', '[mir]{e} (usted)']
        ] },
        { t: 'tablo', h: 'tú ile olumlu emir', bas: ['Mastar', 'tú', 'Kural'], s: [
          ['hablar', '[habl]{a}', 'él biçimiyle aynı'],
          ['comer', '[com]{e}', 'él biçimiyle aynı'],
          ['escribir', '[escrib]{e}', 'él biçimiyle aynı'],
          ['cerrar', '[cierr]{a}', 'kök değişimi korunur'],
          ['dormir', '[duerm]{e}', 'kök değişimi korunur']
        ] },
        { t: 'tablo', h: 'Sekiz düzensiz tú emri', bas: ['Mastar', 'tú', 'Türkçe'], s: [
          ['venir', '{ven}', 'gel'],
          ['tener', '{ten}', 'tut, al'],
          ['poner', '{pon}', 'koy'],
          ['salir', '{sal}', 'çık'],
          ['hacer', '{haz}', 'yap'],
          ['decir', '{di}', 'söyle'],
          ['ir', '{ve}', 'git'],
          ['ser', '{sé}', 'ol']
        ] },
        { t: 'metin', h: 'Kibar emir: usted ve ustedes', m: 'Fiilin <b>yo</b> biçimini al, sonundaki -o\'yu at, "karşıt" ünlüyü ekle: -ar fiillerinde <b>-e</b>, -er / -ir fiillerinde <b>-a</b>. <i>hablo → hable, como → coma, tengo → tenga, vengo → venga</i>. ustedes için sonuna <b>-n</b> eklenir: <i>hablen, coman</i>.' },
        { t: 'tablo', h: 'usted / ustedes', bas: ['Mastar', 'yo', 'usted', 'ustedes'], s: [
          ['hablar', 'hablo', '[habl]{e}', '[habl]{en}'],
          ['comer', 'como', '[com]{a}', '[com]{an}'],
          ['abrir', 'abro', '[abr]{a}', '[abr]{an}'],
          ['tener', 'tengo', '[teng]{a}', '[teng]{an}'],
          ['hacer', 'hago', '[hag]{a}', '[hag]{an}'],
          ['venir', 'vengo', '[veng]{a}', '[veng]{an}'],
          ['ir', 'voy', '{vaya}', '{vayan}']
        ] },
        { t: 'metin', h: 'Olumsuz emir', m: 'Olumsuz emirde <b>no</b> + kibar biçim kullanılır; tú için sonuna <b>-s</b> eklenir: <i>no hable → no hable<b>s</b></i> (konuşma), <i>no coma → no coma<b>s</b></i> (yeme), <i>no vaya → no vaya<b>s</b></i> (gitme).' },
        { t: 'tablo', h: 'Olumlu ve olumsuz (tú)', bas: ['Olumlu', 'Olumsuz', 'Türkçe'], s: [
          ['habla', 'no {hables}', 'konuş / konuşma'],
          ['come', 'no {comas}', 'ye / yeme'],
          ['ven', 'no {vengas}', 'gel / gelme'],
          ['haz', 'no {hagas}', 'yap / yapma'],
          ['ve', 'no {vayas}', 'git / gitme'],
          ['toca', 'no {toques}', 'dokun / dokunma']
        ] },
        { t: 'ipucu', h: 'Zamir: olumluda sona, olumsuzda öne', m: 'Olumlu emirde zamir fiile yapışır: <i>¡Siénta<b>te</b>!</i> (Otur!), <i>¡Cóme<b>lo</b>!</i> (Ye onu!). Olumsuzda öne gelir: <i>¡No <b>te</b> sientes!</i>, <i>¡No <b>lo</b> comas!</i> Yapışınca vurgu işareti eklenebilir.' },
        { t: 'ipucu', h: 'Sık duyulan kalıplar', m: '<i>¡Oye!</i> (Baksana!), <i>¡Mira!</i> (Bak!), <i>¡Perdone!</i> (Affedersiniz!), <i>¡No te preocupes!</i> (Merak etme!), <i>¡Dime!</i> (Söyle; telefonda "Efendim"), <i>¡Venga!</i> (Hadi!).' },
        { t: 'diyalog', h: 'Yol tarifi', l: [
          ['Turista', 'Perdone, ¿dónde está el museo?', 'Affedersiniz, müze nerede?'],
          ['Señora', '{Siga} todo recto y {gire} a la izquierda.', 'Dümdüz gidin ve sola dönün.'],
          ['Turista', '¿Está lejos?', 'Uzak mı?'],
          ['Señora', 'No, cinco minutos. {Cruce} la plaza y allí está.', 'Hayır, beş dakika. Meydanı geçin, işte orada.'],
          ['Turista', 'Muchas gracias.', 'Çok teşekkürler.'],
          ['Señora', 'De nada. ¡Y no {olvide} visitar la catedral!', 'Rica ederim. Katedrali gezmeyi de unutmayın!']
        ] },
        { t: 'ornek', l: [
          ['{Abre} la ventana, por favor.', 'Pencereyi [aç], lütfen.'],
          ['{Ven} aquí.', 'Buraya [gel].'],
          ['{Pon} la mesa.', 'Sofrayı [kur].'],
          ['{Haz} los deberes.', 'Ödevlerini [yap].'],
          ['{Hable} más despacio, por favor.', 'Daha yavaş [konuş]{un}, lütfen.'],
          ['No {toques} eso.', 'Ona [dokun]{ma}.'],
          ['No {llegues} tarde.', 'Geç [kal]{ma}.'],
          ['{Siéntense}, por favor.', '[Otur]{un}, lütfen.']
        ] },
        { t: 'ozet', l: [
          'tú olumlu: él biçimi (<i>habla, come</i>); düzensizler: ven, ten, pon, sal, haz, di, ve, sé.',
          'usted: yo biçiminden, karşıt ünlüyle (<i>hable, coma, tenga</i>); ustedes: + n.',
          'Olumsuz tú: kibar biçim + s (<i>no hables, no comas</i>).',
          'Zamir olumluda sona (<i>siéntate</i>), olumsuzda öne (<i>no te sientes</i>).'
        ] }
      ],
      test: [
        { s: '"Gel!" (tú)', o: ['Viene.', 'Ven.', 'Venga.'], d: 1, a: 'venir düzensizdir: ven. (Venga, usted biçimidir.)' },
        { s: '"Yap!" (tú)', o: ['Hace.', 'Haz.', 'Haga.'], d: 1, a: 'hacer düzensizdir: haz.' },
        { s: '"Pencereyi açın!" (usted)', o: ['Abre la ventana.', 'Abra la ventana.', 'Abrir la ventana.'], d: 1, a: 'abro → abra (usted).' },
        { s: '"Konuşma!" (tú)', o: ['No habla.', 'No hables.', 'No hablas.'], d: 1, a: 'Olumsuz tú: kibar biçim + s: no hables. (No hablas = konuşmuyorsun.)' },
        { s: '"Otur!" (tú)', o: ['Siéntate.', 'Te sienta.', 'Siéntase.'], d: 0, a: 'Olumlu emirde zamir sona yapışır: siéntate.' },
        { s: '"Onu yeme!" (tú)', o: ['No lo comas.', 'No cómelo.', 'No comas lo.'], d: 0, a: 'Olumsuzda zamir öne gelir: no lo comas.' },
        { s: 'ir → usted emri', o: ['Va.', 'Vaya.', 'Ve.'], d: 1, a: 'ir düzensizdir: vaya (usted), ve (tú).' },
        { s: '"Merak etme!"', o: ['¡No te preocupes!', '¡No preocúpate!', '¡Te no preocupes!'], d: 0, a: 'Olumsuz emir: no + zamir + preocupes.' }
      ]
    },
    {
      id: 'es-a2-11', seviye: 'A2', sure: 9,
      baslik: 'Gelecek zaman: hablaré, tendré',
      kisa: 'hablaré, comeré, tendré, haré',
      bolumler: [
        { t: 'metin', m: 'Gelecekteki olaylar, tahminler ve sözler için kullanılır. Kurallı ve kolaydır: ek, <b>mastarın tamamına</b> eklenir. Bütün fiil grupları (-ar, -er, -ir) <b>aynı ekleri</b> alır: <i>hablaré, comeré, viviré</i>.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede <b>-ecek / -acak</b> kökün sonuna gelir. İspanyolcada ek mastarın sonuna gelir.', l: [
          ['[konuş]{acağım}', '[hablar]{é}'],
          ['[ye]{yeceksin}', '[comer]{ás}'],
          ['[yaşa]{yacak}', '[vivir]{á}'],
          ['[gör]{eceğiz}', '[ver]{emos}']
        ] },
        { t: 'tablo', h: 'Ekler (bütün fiiller)', bas: ['Kişi', 'Ek', 'hablar', 'comer', 'vivir'], s: [
          ['yo', '{-é}', '[hablar]{é}', '[comer]{é}', '[vivir]{é}'],
          ['tú', '{-ás}', '[hablar]{ás}', '[comer]{ás}', '[vivir]{ás}'],
          ['él / ella / usted', '{-á}', '[hablar]{á}', '[comer]{á}', '[vivir]{á}'],
          ['nosotros', '{-emos}', '[hablar]{emos}', '[comer]{emos}', '[vivir]{emos}'],
          ['vosotros', '{-éis}', '[hablar]{éis}', '[comer]{éis}', '[vivir]{éis}'],
          ['ellos / ustedes', '{-án}', '[hablar]{án}', '[comer]{án}', '[vivir]{án}']
        ] },
        { t: 'tablo', h: 'Düzensiz kökler (ekler aynı)', bas: ['Mastar', 'Kök', 'yo'], s: [
          ['tener', '[tendr]-', '[tendr]{é}'],
          ['salir', '[saldr]-', '[saldr]{é}'],
          ['venir', '[vendr]-', '[vendr]{é}'],
          ['poner', '[pondr]-', '[pondr]{é}'],
          ['poder', '[podr]-', '[podr]{é}'],
          ['saber', '[sabr]-', '[sabr]{é}'],
          ['querer', '[querr]-', '[querr]{é}'],
          ['hacer', '[har]-', '[har]{é}'],
          ['decir', '[dir]-', '[dir]{é}'],
          ['haber', '[habr]-', '[habr]{á} (hay → habrá)']
        ] },
        { t: 'ipucu', h: 'hay → habrá', m: '"Var" anlamındaki <b>hay</b>, gelecekte <b>habrá</b> olur ve tekil-çoğul değişmez: <i>Mañana habrá mucha gente</i> (Yarın çok kalabalık olacak).' },
        { t: 'metin', h: 'ir a + mastar ile farkı', m: 'Konuşmada yakın gelecek ve planlar için çoğunlukla A1\'deki <b>ir a + mastar</b> kullanılır: <i>Esta tarde voy a estudiar</i>. Gelecek zaman ise uzak gelecek, tahmin ve sözler için yaygındır: <i>Algún día viviré en España</i> (Bir gün İspanya\'da yaşayacağım). <i>Te llamaré</i> (Seni arayacağım: söz).' },
        { t: 'ipucu', h: 'Tahmin: "-dır herhalde"', m: 'Gelecek zaman, şimdiki zaman hakkında tahmin de bildirir: <i>¿Qué hora es? — Serán las ocho</i> (Saat sekiz falandır). <i>Estará en casa</i> (Evdedir herhalde).' },
        { t: 'tablo', h: 'Zaman işaretleri', bas: ['İspanyolca', 'Türkçe'], s: [
          ['mañana', 'yarın'],
          ['pasado mañana', 'öbür gün'],
          ['la semana que viene', 'gelecek hafta'],
          ['el año que viene', 'gelecek yıl'],
          ['dentro de dos días', 'iki gün sonra'],
          ['pronto', 'yakında'],
          ['algún día', 'bir gün'],
          ['en el futuro', 'gelecekte']
        ] },
        { t: 'diyalog', h: 'Hava durumu ve planlar', l: [
          ['Presentadora', 'Mañana [har]{á} sol en el sur.', 'Yarın güneyde hava güneşli olacak.'],
          ['Presentadora', 'En el norte [llover]{á} y [habr]{á} viento.', 'Kuzeyde yağmur yağacak ve rüzgâr olacak.'],
          ['Hija', 'Mamá, ¿[ir]{emos} a la playa el sábado?', 'Anne, cumartesi plaja gidecek miyiz?'],
          ['Madre', 'Si hace buen tiempo, sí. Ya [ver]{emos}.', 'Hava güzel olursa evet. Bakarız.'],
          ['Hija', '¡Yo [har]{é} los bocadillos!', 'Sandviçleri ben yapacağım!']
        ] },
        { t: 'ornek', l: [
          ['Mañana [trabajar]{é} en casa.', 'Yarın evde [çalış]{acağım}.'],
          ['¿[Vendr]{ás} a la fiesta?', 'Partiye [gel]{ecek} misin?'],
          ['El año que viene [viajar]{emos} a Perú.', 'Gelecek yıl Peru\'ya [gid]{eceğiz}.'],
          ['Te [llamar]{é} esta noche.', 'Bu akşam seni [ara]{yacağım}.'],
          ['Mañana [habr]{á} tormenta.', 'Yarın fırtına [ol]{acak}.'],
          ['¿Qué [har]{ás} después de clase?', 'Dersten sonra ne [yap]{acaksın}?'],
          ['¿Dónde está Ana? — [Estar]{á} en casa.', 'Ana nerede? — Evde{dir} herhalde.'],
          ['Algún día [hablar]{é} español perfectamente.', 'Bir gün İspanyolcayı mükemmel [konuş]{acağım}.']
        ] },
        { t: 'ozet', l: [
          'Ek mastarın sonuna gelir: hablar<b>é</b>, comer<b>ás</b>, vivir<b>á</b>.',
          'Ekler bütün fiillerde aynı: <b>-é, -ás, -á, -emos, -éis, -án</b>.',
          'Düzensiz kökler: tendr-, saldr-, vendr-, pondr-, podr-, sabr-, querr-, har-, dir-.',
          'hay → <b>habrá</b>.',
          'Tahmin de bildirir: <i>Serán las ocho.</i>'
        ] }
      ],
      test: [
        { s: 'Mañana yo ___ en casa. (estar)', o: ['estaré', 'estoy', 'estré'], d: 0, a: 'estar + é: estaré.' },
        { s: 'tener → yo (gelecek)', o: ['teneré', 'tendré', 'tenré'], d: 1, a: 'Düzensiz kök tendr-: tendré.' },
        { s: 'hacer → tú (gelecek)', o: ['harás', 'hacerás', 'haces'], d: 0, a: 'Düzensiz kök har-: harás.' },
        { s: 'Mañana ___ mucha gente. (hay)', o: ['habrá', 'hayrá', 'hay será'], d: 0, a: 'hay → habrá.' },
        { s: '"Bu akşam seni arayacağım."', o: ['Te llamaré esta noche.', 'Te llamaría esta noche.', 'Te llamar esta noche.'], d: 0, a: 'llamar + é: llamaré. (llamaría = arardım.)' },
        { s: '"¿Qué hora es? — Serán las ocho." Cevap ne demek?', o: ['Saat sekiz falandır.', 'Saat sekizdi.', 'Saat sekiz değil.'], d: 0, a: 'Burada gelecek zaman tahmin bildirir.' },
        { s: 'decir → nosotros (gelecek)', o: ['diremos', 'deciremos', 'dicemos'], d: 0, a: 'Düzensiz kök dir-: diremos.' },
        { s: 'salir → ellos (gelecek)', o: ['salirán', 'saldrán', 'salrán'], d: 1, a: 'Düzensiz kök saldr-: saldrán.' }
      ]
    },
    {
      id: 'es-a2-12', seviye: 'A2', sure: 9,
      baslik: 'Kibar dil: me gustaría, podría, debería',
      kisa: 'me gustaría, ¿podría…?, deberías',
      bolumler: [
        { t: 'metin', m: 'Bu biçim (condicional), Türkçedeki <b>-(e)rdi</b> ve <b>-(e)bilir misiniz</b> kibarlığına benzer. Üç işte çok kullanılır: <b>kibar rica</b> (<i>¿Podría ayudarme?</i>), <b>dilek</b> (<i>Me gustaría viajar</i>), <b>tavsiye</b> (<i>Deberías descansar</i>).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede "isterdim, yapardım" biçimleri kökün sonuna gelen ekle yapılır. İspanyolcada ek, gelecek zamandaki gibi mastarın sonuna gelir.', l: [
          ['[iste]{rdim}', 'me [gustar]{ía}'],
          ['[yap]{ardım}', '[har]{ía}'],
          ['[yardım ed]{ebilir} misiniz?', '¿[podr]{ía} ayudarme?'],
          ['[dinlen]{melisin}', '[deber]{ías} descansar']
        ] },
        { t: 'tablo', h: 'Ekler: mastar + -ía', bas: ['Kişi', 'Ek', 'hablar', 'poder'], s: [
          ['yo', '{-ía}', '[hablar]{ía}', '[podr]{ía}'],
          ['tú', '{-ías}', '[hablar]{ías}', '[podr]{ías}'],
          ['él / ella / usted', '{-ía}', '[hablar]{ía}', '[podr]{ía}'],
          ['nosotros', '{-íamos}', '[hablar]{íamos}', '[podr]{íamos}'],
          ['vosotros', '{-íais}', '[hablar]{íais}', '[podr]{íais}'],
          ['ellos / ustedes', '{-ían}', '[hablar]{ían}', '[podr]{ían}']
        ] },
        { t: 'ipucu', h: 'Gelecek zamanla aynı kökler', m: 'Gelecek zamandaki düzensiz kökler burada da geçerlidir: <i>tendría, saldría, vendría, pondría, podría, sabría, querría, haría, diría, habría</i>. <i>hacía</i> (yapardı, imperfecto) ile <i>haría</i>\'yı karıştırma.' },
        { t: 'tablo', h: 'Kibar rica kalıpları', bas: ['İspanyolca', 'Türkçe'], s: [
          ['¿{Podría} ayudarme?', 'Bana yardım edebilir misiniz?'],
          ['¿{Podrías} repetir?', 'Tekrar edebilir misin?'],
          ['¿Le {importaría} cerrar la puerta?', 'Kapıyı kapatır mısınız? (Sakıncası olur mu?)'],
          ['{Querría} un café, por favor.', 'Bir kahve rica ediyorum.'],
          ['¿{Sería} posible cambiar la fecha?', 'Tarihi değiştirmek mümkün olur mu?']
        ] },
        { t: 'tablo', h: 'Dilek ve tavsiye', bas: ['İspanyolca', 'Türkçe'], s: [
          ['Me {gustaría} visitar Japón.', 'Japonya\'yı ziyaret etmek isterdim.'],
          ['Nos {encantaría} ir.', 'Gitmeye bayılırdık.'],
          ['{Deberías} dormir más.', 'Daha çok uyumalısın.'],
          ['Yo que tú, {hablaría} con él.', 'Senin yerinde olsam onunla konuşurdum.'],
          ['{Sería} mejor esperar.', 'Beklemek daha iyi olur.']
        ] },
        { t: 'ipucu', h: 'Yo que tú…', m: '"Senin yerinde olsam" demenin en kolay yolu: <b>Yo que tú</b> + condicional: <i>Yo que tú, no iría</i> (Senin yerinde olsam gitmezdim).' },
        { t: 'ipucu', h: 'quiero mu, querría mı?', m: '<i>Quiero un café</i> doğrudur ama biraz sert durabilir. Kafede, otelde ya da resmî ortamda <i>Querría…</i>, <i>Me gustaría…</i> ya da İspanya\'da çok duyulan <i>¿Me pone…?</i> daha kibar duyulur.' },
        { t: 'metin', h: 'deber, tener que, hay que', m: 'A1\'deki <b>tener que</b> (zorunda olmak) kesin bir zorunluluk bildirir: <i>Tengo que trabajar</i>. <b>deber</b> (-meli) ahlaki görev ya da güçlü tavsiyedir: <i>Debes estudiar</i>. <b>deberías</b> ise en yumuşak tavsiyedir: <i>Deberías estudiar</i> (Çalışsan iyi olur). <b>hay que</b> kişisiz genel kuraldır: <i>Hay que reciclar</i> (Geri dönüştürmek gerekir).' },
        { t: 'diyalog', h: 'Otel resepsiyonunda', l: [
          ['Cliente', 'Buenas tardes. Me {gustaría} reservar una habitación.', 'İyi günler. Bir oda ayırtmak istiyorum.'],
          ['Recepcionista', 'Claro. ¿Para cuántas noches?', 'Tabii. Kaç gece için?'],
          ['Cliente', 'Dos noches. ¿{Sería} posible una habitación con vistas al mar?', 'İki gece. Deniz manzaralı bir oda mümkün olur mu?'],
          ['Recepcionista', 'Sí. ¿Me {podría} dar su pasaporte?', 'Evet. Pasaportunuzu verebilir misiniz?'],
          ['Cliente', 'Aquí tiene. ¿A qué hora {debería} dejar la habitación?', 'Buyurun. Odayı saat kaçta boşaltmam gerekir?']
        ] },
        { t: 'ornek', l: [
          ['Me [gustar]{ía} aprender a bailar.', 'Dans etmeyi öğrenmek [iste]{rdim}.'],
          ['¿[Podr]{ía} abrir la ventana?', 'Pencereyi [aç]{abilir} misiniz?'],
          ['[Deber]{ías} ir al médico.', 'Doktora [git]{melisin}.'],
          ['Yo que tú, no lo [comprar]{ía}.', 'Senin yerinde olsam onu [al]{mazdım}.'],
          ['[Ser]{ía} genial vernos pronto.', 'Yakında görüşmek harika [ol]{urdu}.'],
          ['¿Te [importar]{ía} ayudarme?', 'Bana yardım etmenin sakıncası [ol]{ur} mu?'],
          ['Con más dinero, [viajar]{íamos} más.', 'Daha çok paramız olsa daha çok [gez]{erdik}.'],
          ['¿Qué [har]{ías} tú?', 'Sen ne [yap]{ardın}?']
        ] },
        { t: 'ozet', l: [
          'Mastar + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>.',
          'Düzensiz kökler gelecek zamandakilerle aynı: podr-, tendr-, har-, dir-…',
          'Kibar rica: <i>¿Podría…?</i>, <i>¿Le importaría…?</i>',
          'Dilek: <i>Me gustaría…</i>; tavsiye: <i>Deberías…</i>, <i>Yo que tú…</i>',
          'tener que (zorunda), deber (-meli), hay que (genel kural).'
        ] }
      ],
      test: [
        { s: '"Seyahat etmek isterdim."', o: ['Me gustaría viajar.', 'Me gusta viajar.', 'Me gustará viajar.'], d: 0, a: 'Dilek: me gustaría.' },
        { s: 'poder → usted (condicional)', o: ['podería', 'podría', 'pudería'], d: 1, a: 'Düzensiz kök podr-: podría.' },
        { s: '"Daha çok uyumalısın." (tavsiye)', o: ['Deberías dormir más.', 'Debes de dormir más.', 'Deberás dormir más.'], d: 0, a: 'Yumuşak tavsiye: deberías.' },
        { s: 'hacer → yo (condicional)', o: ['hacería', 'haría', 'hacía'], d: 1, a: 'Kök har-: haría. (hacía imperfecto biçimidir.)' },
        { s: '"Senin yerinde olsam gitmezdim."', o: ['Yo que tú, no iría.', 'Yo que tú, no voy.', 'Yo como tú, no iría.'], d: 0, a: 'Yo que tú + condicional.' },
        { s: '"¿Le importaría cerrar la puerta?" ne demek?', o: ['Kapıyı kapatır mısınız?', 'Kapı önemli mi?', 'Kapıyı kapattınız mı?'], d: 0, a: 'Kibar rica kalıbı.' },
        { s: 'Nosotros ___ más con más dinero. (viajar)', o: ['viajaríamos', 'viajaremos', 'viajábamos'], d: 0, a: 'Varsayım: viajaríamos (gezerdik).' },
        { s: 'Hangisi en kibar?', o: ['Quiero un café.', 'Dame un café.', 'Me gustaría un café.'], d: 2, a: 'Me gustaría… en kibar ricadır.' }
      ]
    },
    {
      id: 'es-a2-13', seviye: 'A2', sure: 9,
      baslik: 'Fiil kalıpları: acabar de, volver a…',
      kisa: 'acabo de llegar, vuelvo a intentarlo',
      bolumler: [
        { t: 'metin', m: 'İspanyolcada bazı fiiller başka bir fiille birleşip <b>zamanı, başlangıcı, tekrarı ya da bitişi</b> anlatır. Kalıp hep aynıdır: <b>çekimli fiil + (edat) + mastar</b>. Yalnızca birinci fiil çekilir. Türkçede bu anlamları çoğunlukla ayrı kelimeler ya da ekler verir.' },
        { t: 'tablo', h: 'Kalıplar', bas: ['Kalıp', 'Anlamı', 'Örnek'], s: [
          ['{acabar de} + mastar', 'az önce, yeni …-dı', '{Acabo de} llegar.'],
          ['{empezar a} + mastar', '…-meye başlamak', '{Empecé a} trabajar.'],
          ['{volver a} + mastar', 'tekrar, yine …-mak', '{Vuelvo a} llamar.'],
          ['{dejar de} + mastar', '…-meyi bırakmak', '{Dejé de} fumar.'],
          ['{seguir} + -ndo', 'hâlâ, …-meye devam etmek', '{Sigo} viviendo aquí.'],
          ['{soler} + mastar', 'genellikle …-mek', '{Suelo} cenar tarde.'],
          ['{ponerse a} + mastar', 'birden …-meye koyulmak', '{Se puso a} llorar.']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede bu anlamlar fiile eklenen yardımcı kelimelerle ya da eklerle verilir; İspanyolcada fiilin önüne gelen kalıpla.', l: [
          ['{Yeni} [gel]dim.', '{Acabo de} [llegar].'],
          ['Yağmur [yağ]{maya başladı}.', '{Empezó a} [llover].'],
          ['{Tekrar} [ara]yacağım.', '{Voy a volver a} [llamar].'],
          ['Sigara{yı bıraktım}.', '{Dejé de} [fumar].'],
          ['{Hâlâ} burada [yaşı]yorum.', '{Sigo} [viv]{iendo} aquí.']
        ] },
        { t: 'ipucu', h: 'acabar de: şimdiki zamanla geçmiş', m: '<i>Acabo de comer</i> = Az önce yedim / Yeni yedim. Fiil şimdiki zamanda olsa da anlamı geçmiştir. Geçmişte: <i>Acababa de salir cuando llamaste</i> (Sen aradığında daha yeni çıkmıştım).' },
        { t: 'ipucu', h: 'volver a = otra vez', m: '<i>Vuelvo a leer el libro</i> = <i>Leo el libro otra vez</i> (Kitabı tekrar okuyorum). <b>volver a</b> çok doğaldır ve sık kullanılır. Dikkat: <i>volver</i> tek başına "geri dönmek" demektir: <i>Vuelvo a casa</i> (Eve dönüyorum).' },
        { t: 'ipucu', h: 'seguir: kök ve yazım değişir', m: '<b>seguir</b> hem e → i değişir hem de yazımı değişir: <i>sigo, sigues, sigue, seguimos, seguís, siguen</i>. "Devam etmek, hâlâ": <i>¿Sigues trabajando en el banco?</i> (Hâlâ bankada mı çalışıyorsun?)' },
        { t: 'ipucu', h: 'dejar tek başına', m: '<b>dejar</b> tek başına "bırakmak, izin vermek" demektir: <i>Déjame en paz</i> (Beni rahat bırak). <i>No dejes de visitar el museo</i> ise "Müzeyi gezmeden dönme, mutlaka gez" anlamına gelir.' },
        { t: 'metin', h: 'Bütün zamanlarda', m: 'Bu kalıplarda yalnızca ilk fiil çekildiği için her zamanda kullanılabilirler: <i>Empezó a llover</i> (indefinido), <i>Ha empezado a llover</i> (perfecto), <i>Empezará a llover</i> (gelecek), <i>Va a empezar a llover</i> (ir a).' },
        { t: 'diyalog', h: 'Eski arkadaşlar', l: [
          ['Pilar', '¡Hola, Andrés! ¿{Sigues} viviendo en Valencia?', 'Selam Andrés! Hâlâ Valensiya\'da mı yaşıyorsun?'],
          ['Andrés', 'No, {acabo de} mudarme a Madrid.', 'Hayır, yeni Madrid\'e taşındım.'],
          ['Pilar', '¿Y {sigues} fumando?', 'Peki hâlâ sigara içiyor musun?'],
          ['Andrés', 'No, {dejé de} fumar hace un año. Y {empecé a} correr.', 'Hayır, bir yıl önce bıraktım. Bir de koşmaya başladım.'],
          ['Pilar', '¡Qué bien! Tenemos que {volver a} vernos pronto.', 'Ne güzel! Yakında yine görüşmeliyiz.']
        ] },
        { t: 'ornek', l: [
          ['{Acabo de} [terminar] el examen.', 'Sınavı {az önce} bitirdim.'],
          ['{Ha empezado a} [nevar].', 'Kar [yağ]{maya başladı}.'],
          ['¿Puedes {volver a} [explicarlo]?', '{Tekrar} açıklayabilir misin?'],
          ['Mi padre {dejó de} [trabajar] el año pasado.', 'Babam geçen yıl [çalış]{mayı bıraktı}.'],
          ['{Seguimos} [esperando] el autobús.', '{Hâlâ} otobüsü bekliyoruz.'],
          ['Los domingos {suelo} [levantarme] tarde.', 'Pazarları {genellikle} geç kalkarım.'],
          ['Cuando lo vio, {se puso a} [reír].', 'Onu görünce [gül]{meye başladı}.'],
          ['No {vuelvas a} [hacerlo].', 'Bunu {bir daha} yapma.']
        ] },
        { t: 'ozet', l: [
          '<b>acabar de</b> + mastar: az önce, yeni …-dı.',
          '<b>empezar a</b> + mastar: …-meye başlamak.',
          '<b>volver a</b> + mastar: tekrar …-mak.',
          '<b>dejar de</b> + mastar: …-meyi bırakmak.',
          '<b>seguir</b> + -ndo: hâlâ; <b>soler</b> + mastar: genellikle.'
        ] }
      ],
      test: [
        { s: '"Az önce geldim."', o: ['Acabo de llegar.', 'Acabo llegar.', 'Termino de llegar.'], d: 0, a: 'acabar de + mastar: az önce.' },
        { s: '"Yağmur yağmaya başladı."', o: ['Empezó llover.', 'Empezó a llover.', 'Empezó de llover.'], d: 1, a: 'empezar a + mastar.' },
        { s: '"Sigarayı bıraktım."', o: ['Dejé de fumar.', 'Dejé fumar.', 'Dejé a fumar.'], d: 0, a: 'dejar de + mastar.' },
        { s: '"Hâlâ burada çalışıyorum."', o: ['Sigo trabajando aquí.', 'Sigo trabajar aquí.', 'Sigo a trabajar aquí.'], d: 0, a: 'seguir + -ndo: sigo trabajando.' },
        { s: '"Vuelvo a llamar." ne demek?', o: ['Geri dönüp arıyorum.', 'Tekrar arıyorum.', 'Aramayı bırakıyorum.'], d: 1, a: 'volver a + mastar: tekrar.' },
        { s: 'seguir → yo', o: ['sego', 'sigo', 'siguo'], d: 1, a: 'e → i ve gu → g: sigo.' },
        { s: '"Genellikle geç yatarım."', o: ['Suelo acostarme tarde.', 'Suelo de acostarme tarde.', 'Soy acostarme tarde.'], d: 0, a: 'soler + mastar (edat yok).' },
        { s: '"No vuelvas a hacerlo." ne demek?', o: ['Bunu bir daha yapma.', 'Geri dönüp yapma.', 'Bunu yapmaya dönme.'], d: 0, a: 'no volver a = bir daha …-me.' }
      ]
    },
    {
      id: 'es-a2-14', seviye: 'A2', sure: 9,
      baslik: 'Olumsuz ve belirsiz kelimeler',
      kisa: 'algo / nada, alguien / nadie, nunca',
      bolumler: [
        { t: 'metin', m: '"Bir şey / hiçbir şey", "biri / kimse", "her zaman / hiç" gibi kelimeler çift hâlinde öğrenilir. En önemli kural: olumsuz kelime fiilden <b>sonra</b> gelirse fiilin önüne <b>no</b> da gelir: <i><b>No</b> veo <b>nada</b></i> (Hiçbir şey görmüyorum).' },
        { t: 'tablo', h: 'Çiftler', bas: ['Olumlu', 'Olumsuz', 'Türkçe'], s: [
          ['{algo}', '{nada}', 'bir şey / hiçbir şey'],
          ['{alguien}', '{nadie}', 'biri / hiç kimse'],
          ['{algún} / {alguna}', '{ningún} / {ninguna}', 'bir, herhangi bir / hiçbir'],
          ['{siempre}', '{nunca} / {jamás}', 'her zaman / hiç, asla'],
          ['{también}', '{tampoco}', '-de, -da / -de değil'],
          ['{o} … {o}', '{ni} … {ni}', 'ya … ya / ne … ne']
        ] },
        { t: 'kiyas', h: 'Türkçe de çift olumsuz kullanır', m: 'İyi haber: Türkçede de "hiç kimse, hiçbir şey" ile fiil olumsuz olur: <i>Kimse<b>yi</b> gör<b>mü</b>yorum</i>. İspanyolcada da aynısı: <i><b>No</b> veo a <b>nadie</b></i>. İngilizcedeki "tek olumsuz" kuralı burada yoktur.', l: [
          ['{Hiçbir şey} [iste]{mi}yorum.', '{No} quiero {nada}.'],
          ['{Kimse} [gel]{me}di.', '{No} vino {nadie}.'],
          ['{Hiç} et [ye]{mem}.', '{No} como carne {nunca}.'],
          ['Ben {de} [bil]{mi}yorum.', 'Yo {tampoco} lo sé.']
        ] },
        { t: 'metin', h: 'İki sıra da doğru', m: 'Olumsuz kelime fiilden <b>önce</b> gelirse <b>no</b> kullanılmaz: <i><b>Nadie</b> vino</i> = <i><b>No</b> vino <b>nadie</b></i> (Kimse gelmedi). <i><b>Nunca</b> como carne</i> = <i><b>No</b> como carne <b>nunca</b></i> (Hiç et yemem).' },
        { t: 'ipucu', h: 'algún / ningún', m: '<b>alguno</b> ve <b>ninguno</b> eril tekil isimden önce -o\'yu kaybeder: <i>algún libro, ningún problema</i>. Dişilde değişmez: <i>alguna vez, ninguna casa</i>. Olumsuz <i>ninguno</i> neredeyse hep tekildir: <i>No tengo ningún amigo aquí</i> (Burada hiç arkadaşım yok).' },
        { t: 'ipucu', h: 'Kişilerde a', m: '<b>alguien</b> ve <b>nadie</b> nesne olunca önüne <b>a</b> gelir: <i>¿Conoces <b>a</b> alguien en Madrid?</i> (Madrid\'de birini tanıyor musun?) <i>No veo <b>a</b> nadie.</i> (Kimseyi görmüyorum.)' },
        { t: 'ipucu', h: '¿Algo más?', m: 'Dükkânda sık duyulur: <i>¿Algo más?</i> (Başka bir şey?) — <i>Nada más, gracias</i> (Başka bir şey yok, teşekkürler). <i>De nada</i> (Rica ederim) de aynı nada\'dan gelir.' },
        { t: 'tablo', h: 'Soru ve cevap', bas: ['Soru', 'Olumsuz cevap', 'Türkçe'], s: [
          ['¿Quieres {algo}?', 'No, no quiero {nada}.', 'Bir şey ister misin? — Hayır, hiçbir şey istemiyorum.'],
          ['¿Ha llamado {alguien}?', 'No, no ha llamado {nadie}.', 'Biri aradı mı? — Hayır, kimse aramadı.'],
          ['¿Tienes {alguna} pregunta?', 'No, no tengo {ninguna}.', 'Bir sorun var mı? — Hayır, hiç yok.'],
          ['¿Vas {siempre} en metro?', 'No, {nunca} voy en metro.', 'Hep metroyla mı gidiyorsun? — Hayır, hiç metroyla gitmem.']
        ] },
        { t: 'diyalog', h: 'Kayıp cüzdan', l: [
          ['Policía', '¿Vio {algo} raro?', 'Tuhaf bir şey gördünüz mü?'],
          ['Señor', 'No, no vi {nada}.', 'Hayır, hiçbir şey görmedim.'],
          ['Policía', '¿Había {alguien} en la calle?', 'Sokakta biri var mıydı?'],
          ['Señor', 'No, no había {nadie}. {Nunca} pasa nadie por allí.', 'Hayır, kimse yoktu. Oradan hiç kimse geçmez.'],
          ['Policía', '¿Tiene {alguna} pregunta?', 'Bir sorunuz var mı?'],
          ['Señor', 'No, {ninguna}. Gracias.', 'Hayır, yok. Teşekkürler.']
        ] },
        { t: 'ornek', l: [
          ['¿Quieres {algo} de beber?', 'İçecek {bir şey} ister misin?'],
          ['No hay {nadie} en casa.', 'Evde {kimse} yok.'],
          ['{Nunca} he estado en Cuba.', 'Küba\'da {hiç} bulunmadım.'],
          ['{Alguien} ha dejado la puerta abierta.', '{Biri} kapıyı açık bırakmış.'],
          ['No tengo {ningún} problema.', '{Hiçbir} sorunum yok.'],
          ['—No me gusta el café. —A mí {tampoco}.', '—Kahveyi sevmem. —Ben {de} sevmem.'],
          ['¿Hay {algún} museo por aquí?', 'Buralarda {bir} müze var mı?'],
          ['No conozco a {nadie} aquí.', 'Burada {kimseyi} tanımıyorum.']
        ] },
        { t: 'ozet', l: [
          'algo / nada, alguien / nadie, algún / ningún, siempre / nunca, también / tampoco.',
          'Olumsuz kelime fiilden sonra gelirse fiilin önüne <b>no</b>: <i>No veo nada.</i>',
          'Fiilden önce gelirse no gerekmez: <i>Nadie vino.</i>',
          'algún / ningún eril tekil isimden önce kısalır.',
          'Kişiler nesne olunca <b>a</b>: <i>No veo a nadie.</i>'
        ] }
      ],
      test: [
        { s: '"Hiçbir şey görmüyorum."', o: ['Veo nada.', 'No veo nada.', 'No veo algo.'], d: 1, a: 'Olumsuz kelime fiilden sonra: önüne no gelir.' },
        { s: '"Kimse gelmedi."', o: ['Nadie vino.', 'Nadie no vino.', 'No nadie vino.'], d: 0, a: 'nadie fiilden önce: no gerekmez. (No vino nadie de doğrudur.)' },
        { s: 'No tengo ___ problema.', o: ['ninguno', 'ningún', 'ninguna'], d: 1, a: 'Eril tekil isimden önce kısalır: ningún.' },
        { s: '—No me gusta. —A mí ___.', o: ['también', 'tampoco', 'nunca'], d: 1, a: 'Olumsuza katılmak: tampoco (ben de değil).' },
        { s: '¿Conoces ___ alguien aquí?', o: ['a', 'de', 'en'], d: 0, a: 'Kişi nesne olunca a gelir.' },
        { s: '"Hiç et yemem."', o: ['Nunca como carne.', 'No nunca como carne.', 'Como nunca carne.'], d: 0, a: 'nunca fiilden önce gelince no kullanılmaz.' },
        { s: '¿Quieres ___ más? — No, nada más.', o: ['nada', 'algo', 'alguien'], d: 1, a: 'Olumlu soruda algo: ¿Algo más?' },
        { s: '"Burada hiç arkadaşım yok."', o: ['No tengo ningún amigo aquí.', 'No tengo algún amigo aquí.', 'Tengo ningún amigo aquí.'], d: 0, a: 'no + ningún: çift olumsuz.' }
      ]
    },
    {
      id: 'es-a2-15', seviye: 'A2', sure: 10,
      baslik: 'Zaman ilişkileri: hace, desde, antes de…',
      kisa: 'hace dos años, desde hace, antes de comer',
      bolumler: [
        { t: 'metin', m: 'Bu derste olayları zamana bağlayan kalıpları öğreniyorsun: "iki yıl önce", "-den beri", "-ince", "-meden önce", "-dikten sonra", "-iken". Hepsi günlük konuşmada sürekli kullanılır.' },
        { t: 'tablo', h: 'Kalıplar', bas: ['Kalıp', 'Anlamı', 'Örnek'], s: [
          ['{hace} + süre', '… önce', 'Llegué {hace} dos días.'],
          ['{desde} + başlangıç', '…-den beri', 'Vivo aquí {desde} 2020.'],
          ['{desde hace} + süre', '…-dır', 'Estudio español {desde hace} un año.'],
          ['{hace} + süre + {que}', '…-dır (cümle başında)', '{Hace} un año {que} estudio español.'],
          ['{cuando} + fiil', '…-ince, …-dığında', '{Cuando} llego, ceno.'],
          ['{antes de} + mastar', '…-meden önce', '{Antes de} salir, cierro la puerta.'],
          ['{después de} + mastar', '…-dikten sonra', '{Después de} comer, descanso.'],
          ['{al} + mastar', '…-ince, …-dığı anda', '{Al} llegar, te llamo.'],
          ['{mientras}', '…-iken', 'Canto {mientras} cocino.']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede bu anlamlar fiile gelen eklerle verilir; İspanyolcada fiilin <b>önüne</b> gelen kelimelerle.', l: [
          ['[ye]{meden önce}', '{antes de} [comer]'],
          ['[ye]{dikten sonra}', '{después de} [comer]'],
          ['[var]{ınca}', '{al} [llegar]'],
          ['[pişir]{irken}', '{mientras} [cocino]'],
          ['iki yıl {önce}', '{hace} dos años']
        ] },
        { t: 'ipucu', h: 'hace: "önce" ama başta gelir', m: 'Türkçede "iki yıl önce" deriz; İspanyolcada <b>hace</b> sürenin önüne gelir: <i>hace dos años</i>. Fiil geçmiş zamandadır: <i>La conocí hace tres años</i> (Onunla üç yıl önce tanıştım).' },
        { t: 'ipucu', h: '"-dır": şimdiki zamanla', m: 'Hâlâ süren bir durum için İspanyolcada <b>şimdiki zaman</b> kullanılır: <i>Vivo en Madrid desde hace cinco años</i> (Beş yıldır Madrid\'de yaşıyorum). Türkçedeki gibi: yaşı<b>yor</b>um. Burada geçmiş zaman kullanma.' },
        { t: 'ipucu', h: 'antes de / después de + mastar', m: 'Bu kalıplardan sonra fiil <b>çekilmez</b>, mastar kalır: <i>Después de cenar, veo la tele</i>. Zamir varsa mastara yapışır: <i>Antes de acostar<b>me</b>, leo</i> (Yatmadan önce okurum).' },
        { t: 'metin', h: 'cuando ile zaman', m: '<i>cuando</i> + şimdiki zaman genel bir durumu, + geçmiş zaman bir olayı anlatır: <i>Cuando llueve, me quedo en casa</i> (Yağmur yağınca evde kalırım). <i>Cuando llegué, ya no había nadie</i> (Vardığımda kimse kalmamıştı). Gelecekten söz ederken <i>cuando</i>\'dan sonra farklı bir biçim (subjuntivo) gelir; bu B1 konusudur. Şimdilik <b>al + mastar</b> kullanabilirsin: <i>Al llegar, te llamo</i> (Varınca seni ararım).' },
        { t: 'tablo', h: 'Süre sormak', bas: ['Soru', 'Cevap', 'Türkçe'], s: [
          ['¿Cuánto tiempo {hace} que vives aquí?', '{Hace} tres años.', 'Ne zamandır burada yaşıyorsun? — Üç yıldır.'],
          ['¿{Desde} cuándo trabajas aquí?', '{Desde} marzo.', 'Ne zamandan beri burada çalışıyorsun? — Marttan beri.'],
          ['¿Cuándo llegaste?', '{Hace} una hora.', 'Ne zaman geldin? — Bir saat önce.']
        ] },
        { t: 'diyalog', h: 'Tanışma', l: [
          ['Nuria', '¿Cuánto tiempo {hace} que estudias español?', 'Ne zamandır İspanyolca çalışıyorsun?'],
          ['Kemal', 'Estudio {desde hace} un año. Empecé {hace} doce meses.', 'Bir yıldır çalışıyorum. On iki ay önce başladım.'],
          ['Nuria', '¡Hablas muy bien! ¿Cuándo estudias?', 'Çok iyi konuşuyorsun! Ne zaman çalışıyorsun?'],
          ['Kemal', 'Por la noche, {después de} cenar. Y {antes de} dormir, repaso las palabras.', 'Akşamları, yemekten sonra. Uyumadan önce de kelimeleri tekrar ediyorum.'],
          ['Nuria', '¿Y hablas español {cuando} viajas?', 'Peki seyahat ettiğinde İspanyolca konuşuyor musun?'],
          ['Kemal', 'Sí, siempre que puedo.', 'Evet, ne zaman fırsat bulsam.']
        ] },
        { t: 'ornek', l: [
          ['Me casé {hace} diez años.', 'On yıl {önce} evlendim.'],
          ['Trabajo aquí {desde} enero.', 'Ocak{tan beri} burada çalışıyorum.'],
          ['Te espero {desde hace} una hora.', 'Bir saat{tir} seni bekliyorum.'],
          ['{Antes de} salir, apaga la luz.', '[Çık]{madan önce} ışığı kapat.'],
          ['{Después de} ducharme, desayuno.', 'Duş [al]{dıktan sonra} kahvaltı ederim.'],
          ['{Al} entrar, vi a mis amigos.', 'İçeri [gir]{ince} arkadaşlarımı gördüm.'],
          ['{Cuando} era niño, vivía en Esmirna.', 'Çocuk{ken} İzmir\'de yaşıyordum.'],
          ['Escucho música {mientras} trabajo.', '[Çalış]{ırken} müzik dinlerim.']
        ] },
        { t: 'ozet', l: [
          '<b>hace</b> + süre = … önce (geçmiş zamanla).',
          '<b>desde</b> + başlangıç, <b>desde hace</b> + süre = …-den beri, …-dır (şimdiki zamanla).',
          '<b>antes de / después de</b> + mastar = …-meden önce / …-dikten sonra.',
          '<b>al</b> + mastar = …-ince; <b>mientras</b> = …-iken.',
          '<b>cuando</b>: genel durum ve geçmiş olaylar için.'
        ] }
      ],
      test: [
        { s: '"İki yıl önce"', o: ['dos años hace', 'hace dos años', 'antes dos años'], d: 1, a: 'hace sürenin önüne gelir: hace dos años.' },
        { s: '"Beş yıldır burada yaşıyorum."', o: ['Vivo aquí desde hace cinco años.', 'Viví aquí desde hace cinco años.', 'Vivo aquí hace cinco años antes.'], d: 0, a: 'Süren durum: şimdiki zaman + desde hace.' },
        { s: '"Yemekten sonra"', o: ['después de comer', 'después comer', 'después de como'], d: 0, a: 'después de + mastar.' },
        { s: '"Uyumadan önce okurum."', o: ['Antes de dormir, leo.', 'Antes dormir, leo.', 'Antes de duermo, leo.'], d: 0, a: 'antes de + mastar.' },
        { s: '"Al llegar" ne demek?', o: ['varınca', 'varmadan önce', 'varmak için'], d: 0, a: 'al + mastar: …-ince.' },
        { s: 'Trabajo aquí ___ marzo.', o: ['desde', 'hace', 'desde hace'], d: 0, a: 'Başlangıç noktası (mart): desde.' },
        { s: 'Te espero ___ una hora.', o: ['desde', 'desde hace', 'hace que'], d: 1, a: 'Süre (bir saat): desde hace.' },
        { s: '"Çalışırken müzik dinlerim."', o: ['Escucho música mientras trabajo.', 'Escucho música cuando trabajar.', 'Escucho música mientras trabajar.'], d: 0, a: 'mientras + çekimli fiil.' }
      ]
    },
    {
      id: 'es-a2-16', seviye: 'A2', sure: 9,
      baslik: 'İlgi zamiri: que, donde, lo que',
      kisa: 'el libro que leo, la ciudad donde vivo',
      bolumler: [
        { t: 'metin', m: 'Bir ismi bir cümleyle anlatmak için ilgi zamiri kullanılır: "<b>okuduğum</b> kitap", "<b>yaşadığım</b> şehir", "İspanyolca <b>konuşan</b> kadın". İspanyolcada en sık kullanılan ilgi zamiri <b>que</b>\'dir; hem kişiler hem şeyler için geçerlidir.' },
        { t: 'kiyas', h: 'Sıra tam tersi', m: 'Türkçede niteleyen kısım ismin <b>önüne</b> gelir ve fiil ek alır (-dığı, -en). İspanyolcada isim <b>önce</b> gelir, arkasından <b>que</b> + normal bir cümle gelir; fiil hiç değişmez.', l: [
          ['[oku]{duğum} kitap', 'el libro {que} [leo]'],
          ['[yaşa]{dığım} şehir', 'la ciudad {donde} [vivo]'],
          ['İspanyolca [konuş]{an} kadın', 'la mujer {que} [habla] español'],
          ['[iste]{diğim} şey', '{lo que} [quiero]']
        ] },
        { t: 'tablo', h: 'que: kişi ve şey', bas: ['İspanyolca', 'Türkçe'], s: [
          ['el chico {que} vive aquí', 'burada yaşayan çocuk'],
          ['la película {que} vimos', 'izlediğimiz film'],
          ['los amigos {que} tengo en Madrid', 'Madrid\'deki arkadaşlarım'],
          ['el tren {que} sale a las ocho', 'sekizde kalkan tren']
        ] },
        { t: 'metin', h: 'donde: yer için', m: 'Bir yeri anlatırken <b>donde</b> kullanılır: <i>el restaurante donde comimos</i> (yemek yediğimiz restoran). Soru olmadığı için vurgu işareti yoktur: <i>¿dónde?</i> (nerede?) ↔ <i>donde</i> (…-dığı yer).' },
        { t: 'metin', h: 'lo que: "…-dığım şey"', m: 'Belli bir isim yoksa, "şey" anlamı için <b>lo que</b> kullanılır: <i>No entiendo <b>lo que</b> dices</i> (Söylediğin şeyi anlamıyorum). <i><b>Lo que</b> más me gusta es viajar</i> (En sevdiğim şey seyahat etmek).' },
        { t: 'ipucu', h: 'que ≠ qué', m: 'Soru kelimesi <b>qué</b> (ne?, hangi?) vurgu işareti alır; ilgi zamiri <b>que</b> almaz: <i>¿Qué libro lees?</i> (Hangi kitabı okuyorsun?) ↔ <i>el libro que leo</i> (okuduğum kitap).' },
        { t: 'ipucu', h: 'que hiç atlanmaz', m: 'İngilizcede bazen atlanır ("the book I read"); İspanyolcada <b>que</b> her zaman söylenir: <i>el libro <b>que</b> leí</i>. <i>el libro leí</i> yanlıştır.' },
        { t: 'ipucu', h: 'Edatla: en el que, con la que', m: 'Edatlı yapılarda <b>el que / la que</b> kullanılır: <i>la chica con la que hablé</i> (konuştuğum kız), <i>la casa en la que vivo</i> = <i>la casa donde vivo</i>. Bu yapıyı şimdilik tanıman yeterli.' },
        { t: 'diyalog', h: 'Fotoğraflara bakarken', l: [
          ['Inés', '¿Quién es el chico {que} está a tu lado?', 'Yanındaki çocuk kim?'],
          ['Óscar', 'Es Mateo, el amigo {que} conocí en Granada.', 'Mateo, Granada\'da tanıştığım arkadaş.'],
          ['Inés', '¿Y esa es la casa {donde} vivías?', 'Bu da yaşadığın ev mi?'],
          ['Óscar', 'Sí. {Lo que} más echo de menos es la terraza.', 'Evet. En çok özlediğim şey teras.'],
          ['Inés', '¡Qué bonita! Es justo {lo que} quiero para mí.', 'Ne güzel! Tam da kendime istediğim şey.']
        ] },
        { t: 'ornek', l: [
          ['El libro {que} me regalaste es muy bueno.', 'Bana hediye et{tiğin} kitap çok güzel.'],
          ['La mujer {que} habla con Ana es mi tía.', 'Ana\'yla konuş{an} kadın teyzem.'],
          ['Este es el barrio {donde} crecí.', 'Bu, büyü{düğüm} mahalle.'],
          ['No entiendo {lo que} dices.', 'Söyle{diğin} şeyi anlamıyorum.'],
          ['¿Tienes el número {que} te di?', 'Sana ver{diğim} numara sende mi?'],
          ['El autobús {que} va al centro es el 27.', 'Merkeze gid{en} otobüs 27 numara.'],
          ['Es {lo que} siempre digo.', 'Hep söyle{diğim} şey bu.'],
          ['La ciudad {donde} nací es pequeña.', 'Doğ{duğum} şehir küçük.']
        ] },
        { t: 'ozet', l: [
          '<b>que</b>: kişi ve şey için (-en, -dığı): <i>el libro que leo</i>.',
          '<b>donde</b>: yer için: <i>la ciudad donde vivo</i>.',
          '<b>lo que</b>: "…-dığım şey": <i>lo que quiero</i>.',
          'İsim önce, que sonra gelir; fiil normal çekilir.',
          'que hiç atlanmaz; soru kelimesi qué ile karıştırma.'
        ] }
      ],
      test: [
        { s: '"okuduğum kitap"', o: ['el libro que leo', 'el libro leo', 'que libro leo'], d: 0, a: 'İsim + que + normal cümle.' },
        { s: '"yaşadığım şehir"', o: ['la ciudad donde vivo', 'la ciudad dónde vivo', 'la ciudad que vivo'], d: 0, a: 'Yer için donde (vurgu işaretsiz).' },
        { s: '"Söylediğin şeyi anlamıyorum."', o: ['No entiendo que dices.', 'No entiendo lo que dices.', 'No entiendo qué lo dices.'], d: 1, a: '"…-dığın şey": lo que.' },
        { s: '"İspanyolca konuşan kadın"', o: ['la mujer que habla español', 'la mujer habla español', 'la mujer quien hablando español'], d: 0, a: 'que + çekimli fiil: que habla.' },
        { s: 'el tren ___ sale a las ocho', o: ['que', 'qué', 'lo que'], d: 0, a: 'İsimden sonra ilgi zamiri: que.' },
        { s: '"En sevdiğim şey seyahat etmek."', o: ['Lo que más me gusta es viajar.', 'Que más me gusta es viajar.', 'El que más me gusta es viajar.'], d: 0, a: 'Belli bir isim yok: lo que.' },
        { s: 'el restaurante ___ comimos', o: ['donde', 'dónde', 'qué'], d: 0, a: 'Yer: donde.' },
        { s: '"Hangi kitabı okuyorsun?"', o: ['¿Qué libro lees?', '¿Que libro lees?', '¿Lo que libro lees?'], d: 0, a: 'Soru kelimesi vurgu işareti alır: qué.' }
      ]
    },
    {
      id: "es-b1-01", seviye: "B1", sure: 12,
      baslik: "Geçmişi anlatmak: üç zaman bir arada",
      kisa: "conocí / conocía · estaba hablando · de repente",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 21) üç geçmiş zamanın ne zaman kullanıldığını gördün: <i>he comido</i>, <i>comí</i>, <i>comía</i>. B1'de bu üç zamanı bir hikâyede <b>birlikte</b> kullanmayı öğreniyorsun. Ayrıca bazı fiillerin indefinido ve imperfecto'da <b>anlamının değiştiğini</b> göreceksin: <i>conocí</i> (tanıştım) ↔ <i>conocía</i> (tanıyordum)." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçe de hikâye anlatırken iki katman kullanır: sahneyi kuran <b>-yordu / -ırdı</b> ve olayı ilerleten <b>-dı</b>. İspanyolcada sahne imperfecto, olay indefinido ile anlatılır.", l: [
          ["Hava [karar]{ıyordu}, sokak boş{tu}.", "{Anochecía} y la calle {estaba} vacía."],
          ["Birden bir ses [duy]{dum}.", "De repente {oí} un ruido."],
          ["[Kork]{tum} ve [koş]{tum}.", "{Me asusté} y {corrí}."],
          ["Meğer kedi{ymiş}!", "¡{Era} el gato!"]
        ] },
        { t: "tablo", h: "Bir hikâyenin katmanları", bas: ["Katman", "Zaman", "Ne anlatır?", "Örnek"], s: [
          ["Sahne", "imperfecto", "hava, saat, yer, kişilerin hâli", "{Eran} las diez. {Llovía}."],
          ["Olay", "indefinido", "olan, biten, araya giren şey", "{Sonó} el teléfono."],
          ["Bugünle bağ", "perfecto", "bugün, bu hafta, hayatta", "Hoy {he visto} a Ana."]
        ] },
        { t: "metin", h: "Hikâye bağlaçları", m: "Olayları sıralamak için şu kelimeler çok kullanılır: <i>al principio</i> (başta), <i>de repente</i> / <i>de pronto</i> (birden), <i>en ese momento</i> (o anda), <i>entonces</i> (bunun üzerine), <i>luego</i> / <i>después</i> (sonra), <i>al final</i> (sonunda). <i>de repente</i>'den sonra neredeyse her zaman indefinido gelir: <i>De repente <b>se fue</b> la luz</i> (Birden elektrik gitti). <i>mientras</i> (…-ken) ise çoğunlukla imperfecto alır: <i>Mientras yo <b>cocinaba</b>, él <b>ponía</b> la mesa</i>." },
        { t: "tablo", h: "Anlamı değişen fiiller", bas: ["Fiil", "indefinido", "imperfecto"], s: [
          ["conocer", "{conocí} a Ana: Ana'yla tanıştım", "{conocía} a Ana: Ana'yı tanıyordum"],
          ["saber", "{supe} la verdad: gerçeği öğrendim", "{sabía} la verdad: gerçeği biliyordum"],
          ["querer", "{quise} llamar: aramaya çalıştım", "{quería} llamar: aramak istiyordum"],
          ["no querer", "{no quise} ir: gitmeyi reddettim", "{no quería} ir: gitmek istemiyordum"],
          ["poder", "{pude} entrar: girebildim (başardım)", "{podía} entrar: girebiliyordum (iznim vardı)"],
          ["tener", "{tuve} un hijo: çocuğum oldu", "{tenía} dos hijos: iki çocuğum vardı"]
        ] },
        { t: "ipucu", h: "Tanışmak mı, tanımak mı?", m: "<i>Conocí a mi mujer en 2015</i> = Eşimle 2015'te tanıştım (ilk karşılaşma). <i>Ya conocía Madrid</i> = Madrid'i zaten biliyordum (önceden beri). Türkçede biri <b>tanışmak</b>, öteki <b>tanımak</b>; İspanyolcada aynı fiil, fark zamanla verilir." },
        { t: "metin", h: "estaba + -ndo mu, estuve + -ndo mu?", m: "A2'de (Ders 16) <i>estoy comiendo</i> yapısını öğrendin. Geçmişte iki biçimi var. <b>estaba + -ndo</b> o anda süren bir işi anlatır ve genellikle bir olay onu keser: <i>Estaba duchándome cuando llamaste</i> (Sen aradığında duş alıyordum). <b>estuve + -ndo</b> ise belli bir süre boyunca yapılıp bitmiş işi vurgular: <i>Estuve estudiando toda la tarde</i> (Bütün öğleden sonra ders çalıştım)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Ayer {he ido} al cine.", "Ayer {fui} al cine.", "ayer bitmiş zaman: indefinido"],
          ["Cuando {fui} niño, vivía en Ankara.", "Cuando {era} niño, vivía en Ankara.", "çocukluk bir dönem: imperfecto"],
          ["{Llovió} y de repente {salía} el sol.", "{Llovía} y de repente {salió} el sol.", "sahne imperfecto, olay indefinido"],
          ["{Sabía} la noticia ayer por la tarde.", "{Supe} la noticia ayer por la tarde.", "öğrenme anı: supe"],
          ["{Estuve} durmiendo cuando sonó el móvil.", "{Estaba} durmiendo cuando sonó el móvil.", "kesilen süreç: estaba + -ndo"]
        ] },
        { t: "ipucu", h: "İspanya'da perfecto daha geniş", m: "İspanya'da bugünle bağlantılı her şey için perfecto kullanılır: <i>Esta mañana he desayunado tarde</i>. Latin Amerika'nın çoğunda aynı cümlede indefinido duyarsın: <i>Esta mañana desayuné tarde</i>. İkisi de doğru; bu derslerde İspanya kullanımı esas alınıyor." },
        { t: "diyalog", h: "Kötü bir gün", l: [
          ["Marta", "¿Qué tal ayer? {Parecías} cansada.", "Dün nasıldı? Yorgun görünüyordun."],
          ["Lucía", "Fatal. {Estaba} preparando la cena cuando {se fue} la luz.", "Berbat. Akşam yemeğini hazırlıyordum, elektrikler gitti."],
          ["Marta", "¿Y qué {hiciste}?", "Peki ne yaptın?"],
          ["Lucía", "Al principio {esperé}, pero la luz no {volvía}. Al final {pedimos} una pizza.", "Başta bekledim ama elektrik gelmiyordu. Sonunda pizza söyledik."],
          ["Marta", "¿Y {supiste} qué {pasó}?", "Ne olduğunu öğrendin mi?"],
          ["Lucía", "Sí, hoy lo {he leído} en el periódico: una avería en todo el barrio.", "Evet, bugün gazetede okudum: bütün mahallede bir arıza varmış."]
        ] },
        { t: "ornek", l: [
          ["{Conocí} a mi mejor amigo en la universidad.", "En yakın arkadaşımla üniversitede [tanış]{tım}."],
          ["Cuando {llegué}, todos {estaban} durmiendo.", "Vardığımda herkes [uyu]{yordu}."],
          ["{Estaba} leyendo cuando {oí} el ruido.", "Sesi duyduğumda kitap [oku]{yordum}."],
          ["{Quise} abrir la puerta, pero no {pude}.", "Kapıyı açmaya [çalış]{tım} ama [açama]{dım}."],
          ["No {sabía} que {estabas} en Madrid.", "Madrid'de olduğunu [bil]{miyordum}."],
          ["De repente {empezó} a llover y {nos fuimos} a casa.", "Birden yağmur [başla]{dı}, eve [git]{tik}."],
          ["{Estuve} trabajando en Londres dos años.", "İki yıl Londra'da [çalış]{tım}."],
          ["Este año {he viajado} mucho, pero el año pasado no {viajé} nada.", "Bu yıl çok [gez]{dim} ama geçen yıl hiç [gez]{medim}."]
        ] },
        { t: "ozet", l: [
          "Hikâyede sahne <b>imperfecto</b>, olay <b>indefinido</b>: <i>Llovía y de repente salió el sol</i>.",
          "Bugünle bağlantılı olaylar için İspanya'da <b>perfecto</b>: <i>Hoy he visto a Ana</i>.",
          "Anlamı değişen fiiller: <i>conocí</i> (tanıştım) / <i>conocía</i> (tanıyordum), <i>supe</i> (öğrendim) / <i>sabía</i> (biliyordum), <i>quise</i> / <i>quería</i>, <i>pude</i> / <i>podía</i>.",
          "<b>estaba + -ndo</b>: kesilen süreç; <b>estuve + -ndo</b>: belli süre yapılıp biten iş.",
          "Bağlaçlar: <i>al principio, de repente, en ese momento, entonces, al final</i>; <i>mientras</i> + imperfecto."
        ] }
      ],
      test: [
        { s: "Cuando ___ pequeño, jugaba mucho al fútbol. (ser)", o: ["fui", "era", "he sido"], d: 1, a: "Çocukluk bir dönem, sahneyi kurar: imperfecto → era." },
        { s: "___ a mi novia en una fiesta en 2019. (conocer)", o: ["Conocía", "Conocí", "He conocido"], d: 1, a: "İlk tanışma anı, bitmiş zaman (2019): conocí." },
        { s: "Ya ___ la noticia cuando me llamaste. (saber)", o: ["supe", "sabía", "he sabido"], d: 1, a: "Önceden beri bilinen durum: sabía." },
        { s: "“Quise abrir la puerta” ne demek?", o: ["Kapıyı açmaya çalıştım.", "Kapıyı açmak istiyordum.", "Kapıyı açabildim."], d: 0, a: "quise: bir kez denedim; quería: istiyordum." },
        { s: "___ la cena cuando se fue la luz. (preparar)", o: ["Estuve preparando", "Estaba preparando", "Preparé"], d: 1, a: "Bir olayla kesilen süreç: estaba + -ndo." },
        { s: "Ayer ___ cinco horas seguidas. (estudiar)", o: ["estuve estudiando", "estaba estudiando", "he estado estudiando"], d: 0, a: "Belli bir süre (cinco horas) yapılıp biten iş: estuve + -ndo. ayer ile perfecto kullanılmaz." },
        { s: "Llovía mucho y de repente ___ el sol. (salir)", o: ["salía", "salió", "ha salido"], d: 1, a: "de repente + araya giren olay: indefinido → salió." },
        { s: "Hangisi İspanya'da en doğal? “Bu sabah geç kahvaltı yaptım.”", o: ["Esta mañana he desayunado tarde.", "Esta mañana desayunaba tarde.", "Esta mañana había desayunado tarde."], d: 0, a: "İspanya'da hâlâ süren zaman dilimi (esta mañana) için perfecto." },
        { s: "“No quise ir a la fiesta.” ne anlatır?", o: ["Partiye gitmeyi reddettim.", "Partiye gitmek istemiyordum ama belki gittim.", "Partiye gidemedim."], d: 0, a: "no quise: kesin ret; gitmedim." },
        { s: "Mientras yo ___, mi hermano ponía la mesa. (cocinar)", o: ["cociné", "cocinaba", "he cocinado"], d: 1, a: "mientras + aynı anda süren iki iş: imperfecto." }
      ]
    },
    {
      id: "es-b1-02", seviye: "B1", sure: 12,
      baslik: "Geçmişin geçmişi: había comido",
      kisa: "había comido, habías visto · ya había salido",
      bolumler: [
        { t: "metin", m: "Geçmişteki bir andan <b>daha önce</b> olmuş bir şeyi anlatmak için <b>pluscuamperfecto</b> kullanılır: <i>Cuando llegué, el tren ya <b>había salido</b></i> (Vardığımda tren çoktan kalkmıştı). Türkçedeki <b>-mıştı / -mişti</b> ile neredeyse birebir aynıdır." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede iki ek birleşir: gel-<b>miş</b>-<b>ti</b>. İspanyolcada haber fiilinin imperfecto'su (<i>había</i>) ve ortaç (<i>-ado / -ido</i>) kullanılır. A2'de (Ders 17) öğrendiğin <i>he comido</i> yapısının geçmişteki hâlidir.", l: [
          ["[ye]{miştim}", "{había} [com]{ido}"],
          ["[gör]{müştün}", "{habías} visto"],
          ["[çık]{mıştı}", "{había} [sal]{ido}"],
          ["[bitir]{miştik}", "{habíamos} [termin]{ado}"]
        ] },
        { t: "tablo", h: "Kurulum: había + ortaç", bas: ["Kişi", "haber", "Örnek", "Türkçe"], s: [
          ["yo", "{había}", "había [habl]{ado}", "konuşmuştum"],
          ["tú", "{habías}", "habías [com]{ido}", "yemiştin"],
          ["él / ella / usted", "{había}", "había [viv]{ido}", "yaşamıştı"],
          ["nosotros", "{habíamos}", "habíamos [lleg]{ado}", "varmıştık"],
          ["vosotros", "{habíais}", "habíais [sal]{ido}", "çıkmıştınız"],
          ["ellos / ustedes", "{habían}", "habían [termin]{ado}", "bitirmişlerdi"]
        ] },
        { t: "tablo", h: "Düzensiz ortaçlar (hatırlatma)", bas: ["Mastar", "Ortaç", "Örnek"], s: [
          ["hacer", "{hecho}", "había hecho"],
          ["decir", "{dicho}", "había dicho"],
          ["ver", "{visto}", "había visto"],
          ["escribir", "{escrito}", "había escrito"],
          ["poner", "{puesto}", "había puesto"],
          ["volver", "{vuelto}", "había vuelto"],
          ["abrir", "{abierto}", "había abierto"],
          ["romper", "{roto}", "había roto"]
        ] },
        { t: "metin", h: "Ne zaman kullanılır?", m: "1) <b>Önce olan olay:</b> iki geçmiş olaydan hangisinin önce olduğunu gösterir: <i>Cuando llamé, ya se había ido</i> (Aradığımda çoktan gitmişti). 2) <b>Açıklama:</b> geçmişteki bir durumun sebebini anlatır: <i>Estaba cansado porque no había dormido</i> (Yorgundum çünkü uyumamıştım). 3) <b>İlk kez:</b> <i>Nunca había visto el mar</i> (Daha önce hiç deniz görmemiştim)." },
        { t: "tablo", h: "Önce ve sonra", bas: ["Önce (pluscuamperfecto)", "Sonra (indefinido)", "Türkçe"], s: [
          ["El tren ya {había salido}…", "…cuando {llegué} a la estación.", "İstasyona vardığımda tren çoktan kalkmıştı."],
          ["{Había estudiado} mucho…", "…y {aprobé} el examen.", "Çok çalışmıştım ve sınavı geçtim."],
          ["Nadie me {había dicho} nada…", "…y me {sorprendí}.", "Kimse bana bir şey söylememişti, şaşırdım."]
        ] },
        { t: "ipucu", h: "ya, todavía no, nunca", m: "Bu zamanla çok kullanılan kelimeler: <i>ya</i> (çoktan), <i>todavía no</i> (henüz … değil), <i>nunca</i> (daha önce hiç), <i>antes</i> (önceden). <i>Cuando llegamos, la película todavía no había empezado</i> (Vardığımızda film henüz başlamamıştı)." },
        { t: "ipucu", h: "Zamirler había'dan önce", m: "Dönüşlü ve nesne zamirleri <i>había</i>'nın önüne gelir; <i>había</i> ile ortaç arasına hiçbir şey girmez: <i>Ya <b>me</b> había duchado</i> (Çoktan duş almıştım). <i>No <b>lo</b> había visto nunca</i> (Onu hiç görmemiştim)." },
        { t: "ipucu", h: "Sıra belliyse gerekmez", m: "Olaylar anlatıldığı sırayla olduysa pluscuamperfecto gerekmez: <i>Me levanté, desayuné y salí</i> (Kalktım, kahvaltı yaptım ve çıktım). Sadece <b>geriye dönüp</b> daha önceki bir olayı anlatırken kullanılır. Sıra <i>después de</i> ile zaten belliyse indefinido yeter: <i>Salí después de comer</i> (Yemekten sonra çıktım)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Cuando llegué, el tren ya {salió}.", "Cuando llegué, el tren ya {había salido}.", "tren daha önce kalkmış: -mıştı"],
          ["Ya {había me} duchado.", "Ya {me había} duchado.", "zamir había'dan önce gelir"],
          ["Nunca {había veído} el mar.", "Nunca {había visto} el mar.", "ver → visto (düzensiz)"],
          ["Estaba cansado porque no {dormía}.", "Estaba cansado porque no {había dormido}.", "sebep daha önce: uyumamıştım"]
        ] },
        { t: "diyalog", h: "Kaçırılan uçak", l: [
          ["Pablo", "¿Por qué no {viniste} a la reunión?", "Toplantıya neden gelmedin?"],
          ["Elena", "{Perdí} el avión. Cuando {llegué} al aeropuerto, ya {habían cerrado} la puerta.", "Uçağı kaçırdım. Havalimanına vardığımda kapıyı çoktan kapatmışlardı."],
          ["Pablo", "¿No {habías salido} pronto de casa?", "Evden erken çıkmamış mıydın?"],
          ["Elena", "Sí, pero {había olvidado} el pasaporte y {tuve} que volver.", "Evet ama pasaportu unutmuştum ve geri dönmek zorunda kaldım."],
          ["Pablo", "¡Qué mala suerte! ¿Te {había pasado} antes?", "Ne şanssızlık! Daha önce başına gelmiş miydi?"],
          ["Elena", "Nunca. Es la primera vez.", "Hiç. İlk kez oluyor."]
        ] },
        { t: "ornek", l: [
          ["Cuando llegué a casa, mis hijos ya {se habían dormido}.", "Eve vardığımda çocuklarım çoktan [uyu]{muşlardı}."],
          ["Nunca {había estado} en Sevilla.", "Sevilla'ya daha önce hiç [git]{memiştim}."],
          ["Me dijo que {había perdido} las llaves.", "Bana anahtarları [kaybet]{tiğini} söyledi."],
          ["{Habíamos reservado} mesa, pero no había sitio.", "Masa [ayırt]{mıştık} ama yer yoktu."],
          ["El examen fue fácil porque {había estudiado} mucho.", "Sınav kolaydı çünkü çok [çalış]{mıştım}."],
          ["¿{Habías visto} esta película antes?", "Bu filmi daha önce [gör]{müş müydün}?"],
          ["Cuando empezó a llover, ya {habíamos vuelto}.", "Yağmur başladığında çoktan [dön]{müştük}."],
          ["Nunca {había comido} algo tan rico.", "Hiç bu kadar lezzetli bir şey [ye]{memiştim}."]
        ] },
        { t: "ozet", l: [
          "Kurulum: <b>había, habías, había, habíamos, habíais, habían</b> + ortaç (<i>-ado / -ido</i>).",
          "Türkçedeki <b>-mıştı</b>: <i>había comido</i> = yemiştim.",
          "Geçmişteki bir olaydan <b>daha önce</b> olanı anlatır: <i>Cuando llegué, ya había salido</i>.",
          "Sebep ve “daha önce hiç”: <i>no había dormido</i>, <i>nunca había visto</i>.",
          "Zamirler <i>había</i>'dan önce: <i>me había duchado</i>; olaylar sırayla anlatılıyorsa gerekmez."
        ] }
      ],
      test: [
        { s: "Cuando llegamos, la película ya ___. (empezar)", o: ["empezó", "había empezado", "ha empezado"], d: 1, a: "Film bizden önce başlamıştı: había empezado." },
        { s: "yo había, tú ___", o: ["habías", "hubiste", "has"], d: 0, a: "había, habías, había, habíamos, habíais, habían." },
        { s: "“Daha önce hiç deniz görmemiştim.”", o: ["Nunca he visto el mar.", "Nunca había visto el mar.", "Nunca había veído el mar."], d: 1, a: "-mıştı: había + düzensiz ortaç visto. he visto = hiç görmedim (bugüne kadar)." },
        { s: "Estaba cansado porque no ___ bien. (dormir)", o: ["dormí", "había dormido", "dormiría"], d: 1, a: "Yorgunluğun sebebi daha önce olmuş: había dormido." },
        { s: "“Çoktan duş almıştım.”", o: ["Ya me había duchado.", "Ya había me duchado.", "Ya había duchádome."], d: 0, a: "Zamir había'dan önce gelir." },
        { s: "romper → pluscuamperfecto (yo)", o: ["había rompido", "había roto", "había rompiendo"], d: 1, a: "romper'in ortacı düzensizdir: roto." },
        { s: "“Me levanté, desayuné y salí.” Burada pluscuamperfecto gerekir mi?", o: ["Hayır, olaylar sırayla anlatılıyor.", "Evet, hepsi geçmişte.", "Evet, çünkü üç fiil var."], d: 0, a: "Sıra bozulmuyorsa indefinido yeter." },
        { s: "Me dijo que ___ las llaves. (perder)", o: ["había perdido", "pierda", "habrá perdido"], d: 0, a: "Kaybetme, söylemeden önce olmuş: había perdido." },
        { s: "“¿Habías estado en Perú antes?” Türkçesi?", o: ["Daha önce Peru'da bulunmuş muydun?", "Peru'ya gidecek misin?", "Şu an Peru'da mısın?"], d: 0, a: "había + ortaç = -mıştı; soruda -mış mıydın." },
        { s: "Hangisi Türkçedeki “-mıştı”ya karşılık gelir?", o: ["había hablado", "he hablado", "hablaba"], d: 0, a: "he hablado: konuştum (bugünle bağlı); hablaba: konuşurdum / konuşuyordum." }
      ]
    },
    {
      id: "es-b1-03", seviye: "B1", sure: 12,
      baslik: "Gelecek zaman ve tahmin: estará, habrá llegado",
      kisa: "estará en casa · ¿quién será? · habrá llegado",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 25) gelecek zamanı (<i>hablaré, tendré</i>) ve onun bir tahmin kullanımını (<i>Serán las ocho</i>) gördün. B1'de tahmini daha ayrıntılı kullanıyorsun ve yeni bir biçim öğreniyorsun: <b>futuro perfecto</b> (<i>habrá llegado</i>). Böylece hem şimdiki durum hem de az önce olmuş şeyler hakkında tahmin yürütebilirsin." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede tahmin için çoğunlukla <b>-dır</b> ve <b>-mıştır</b> kullanılır: <i>evdedir</i> (herhalde evde), <i>çıkmıştır</i> (herhalde çıktı). İspanyolcada birincisi futuro, ikincisi futuro perfecto ile söylenir.", l: [
          ["Evde{dir} herhalde.", "{Estará} en casa."],
          ["Saat sekiz {falandır}.", "{Serán} las ocho."],
          ["[Çık]{mıştır} herhalde.", "{Habrá salido}."],
          ["Trafiğe [takıl]{mıştır}.", "Se {habrá quedado} en un atasco."]
        ] },
        { t: "tablo", h: "Hatırlatma: gelecek zaman ekleri", bas: ["Kişi", "Ek", "Örnek"], s: [
          ["yo", "{-é}", "[estar]{é}"],
          ["tú", "{-ás}", "[estar]{ás}"],
          ["él / ella / usted", "{-á}", "[estar]{á}"],
          ["nosotros", "{-emos}", "[estar]{emos}"],
          ["vosotros", "{-éis}", "[estar]{éis}"],
          ["ellos / ustedes", "{-án}", "[estar]{án}"]
        ] },
        { t: "metin", h: "Şimdiki durum hakkında tahmin", m: "Emin olmadığın bir şeyi söylerken şimdiki zaman yerine futuro kullanılır: <i>¿Dónde está Juan? — <b>Estará</b> en el trabajo</i> (İştedir herhalde). Soru biçimi ise “acaba” anlamı taşır: <i>¿Quién <b>será</b> a estas horas?</i> (Bu saatte kim acaba?), <i>¿Qué hora <b>será</b>?</i> (Saat kaç acaba?)" },
        { t: "tablo", h: "Ne kadar eminsin?", bas: ["Cümle", "Derece", "Türkçe"], s: [
          ["Juan {está} en casa.", "eminim", "Juan evde."],
          ["Juan {debe de estar} en casa.", "güçlü tahmin", "Juan evde olmalı."],
          ["Juan {estará} en casa.", "tahmin", "Juan evdedir herhalde."],
          ["{A lo mejor} {está} en casa.", "olasılık", "Belki evdedir."]
        ] },
        { t: "metin", h: "Yeni biçim: futuro perfecto", m: "<b>habré, habrás, habrá, habremos, habréis, habrán</b> + ortaç. İki işi vardır. 1) <b>Az önce olmuş bir şey hakkında tahmin:</b> <i>Ana no contesta. <b>Habrá salido</b></i> (Ana cevap vermiyor. Çıkmıştır herhalde). 2) <b>Gelecekte bir andan önce bitmiş olacak iş:</b> <i>A las diez ya <b>habré terminado</b></i> (Saat onda çoktan bitirmiş olacağım)." },
        { t: "tablo", h: "futuro perfecto", bas: ["Kişi", "haber", "Örnek", "Türkçe"], s: [
          ["yo", "{habré}", "habré [termin]{ado}", "bitirmiş olacağım"],
          ["tú", "{habrás}", "habrás [olvid]{ado}", "unutmuşsundur"],
          ["él / ella / usted", "{habrá}", "habrá [sal]{ido}", "çıkmıştır"],
          ["nosotros", "{habremos}", "habremos [lleg]{ado}", "varmış olacağız"],
          ["vosotros", "{habréis}", "habréis [com]{ido}", "yemişsinizdir"],
          ["ellos / ustedes", "{habrán}", "habrán [perd]{ido}", "kaçırmışlardır"]
        ] },
        { t: "tablo", h: "Bilgi ve tahmin yan yana", bas: ["Kesin bilgi", "Tahmin", "Türkçe"], s: [
          ["{Está} cansado.", "{Estará} cansado.", "Yorgundur herhalde."],
          ["{Ha salido}.", "{Habrá salido}.", "Çıkmıştır herhalde."],
          ["{Son} las tres.", "{Serán} las tres.", "Saat üç falandır."],
          ["{Tiene} 40 años.", "{Tendrá} 40 años.", "40 yaşındadır herhalde."]
        ] },
        { t: "ipucu", h: "Kural: bir adım ileri", m: "Tahminde zaman bir adım “ileri” kayar: şimdiki zaman → futuro (<i>está → estará</i>), perfecto → futuro perfecto (<i>ha salido → habrá salido</i>). Türkçede ikisi de <b>-dır</b> ile söylenir: <i>yorgundur, çıkmıştır</i>." },
        { t: "ipucu", h: "habrá: iki farklı iş", m: "A2'deki <i>habrá</i> (olacak, var olacak) ile futuro perfecto'daki <i>habrá</i> aynı kelimedir ama işleri farklıdır: <i>Habrá mucha gente</i> (Çok kalabalık olacak) ↔ <i>Habrá llegado</i> (Varmıştır). Arkasından ortaç geliyorsa futuro perfecto'dur." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["¿Qué hora es? — {Será} las ocho.", "¿Qué hora es? — {Serán} las ocho.", "las ocho çoğul: serán"],
          ["Ana no contesta. {Estará salido}.", "Ana no contesta. {Habrá salido}.", "yardımcı fiil haber"],
          ["Ya {habrá salir}.", "Ya {habrá salido}.", "haber + ortaç (-ido)"],
          ["A lo mejor {esté} en casa.", "A lo mejor {está} en casa.", "a lo mejor + indicativo"]
        ] },
        { t: "diyalog", h: "Kim acaba?", l: [
          ["Carlos", "Llaman a la puerta. ¿Quién {será}?", "Kapı çalıyor. Kim acaba?"],
          ["Sara", "{Será} el cartero. Siempre viene a esta hora.", "Postacıdır. Hep bu saatte gelir."],
          ["Carlos", "No, el cartero ya {habrá pasado}. Son las doce.", "Hayır, postacı çoktan geçmiştir. Saat on iki."],
          ["Sara", "Entonces {será} tu madre. {Habrá salido} pronto del trabajo.", "O zaman annendir. İşten erken çıkmıştır."],
          ["Carlos", "¡Es verdad! Hoy tenía la tarde libre.", "Doğru! Bugün öğleden sonrası boştu."]
        ] },
        { t: "ornek", l: [
          ["No encuentro mis gafas. — Las {habrás dejado} en el coche.", "Gözlüğümü bulamıyorum. — Arabada [bırak]{mışsındır}."],
          ["Marta no ha venido. {Estará} enferma.", "Marta gelmedi. Hasta{dır} herhalde."],
          ["¿Cuántos años {tendrá} el profesor?", "Öğretmen kaç yaşında acaba?"],
          ["Para el viernes ya {habremos terminado} el proyecto.", "Cumaya kadar projeyi çoktan [bitir]{miş olacağız}."],
          ["Hay mucho tráfico. {Llegarán} tarde.", "Trafik çok. Geç [kal]{acaklar}."],
          ["¿Por qué no contesta? — {Estará} durmiendo.", "Neden açmıyor? — [Uyu]{yordur}."],
          ["Ya {habrán cenado}; son las once.", "Akşam yemeğini çoktan [ye]{mişlerdir}; saat on bir."],
          ["A las ocho ya {habré hecho} la cena.", "Saat sekizde akşam yemeğini çoktan [yap]{mış olacağım}."]
        ] },
        { t: "ozet", l: [
          "Şimdiki durum hakkında tahmin: futuro (<i>estará en casa</i> = evdedir herhalde).",
          "Soru biçimi “acaba”: <i>¿Quién será?</i>",
          "Futuro perfecto: <b>habré, habrás, habrá…</b> + ortaç.",
          "Az önce olmuş şeye tahmin: <i>Habrá salido</i> (çıkmıştır); gelecekte bitmiş iş: <i>A las diez habré terminado</i>.",
          "Diğer tahmin yolları: <i>deber de</i> + mastar, <i>a lo mejor</i> + indicativo."
        ] }
      ],
      test: [
        { s: "¿Dónde está Luis? — No sé, ___ en la oficina. (estar, tahmin)", o: ["está", "estará", "estuvo"], d: 1, a: "Emin değilsen şimdiki zaman yerine futuro: estará." },
        { s: "“Saat on falandır.”", o: ["Serán las diez.", "Será las diez.", "Son las diez."], d: 0, a: "las diez çoğul: serán. Son las diez kesin bilgidir." },
        { s: "Ana no contesta. ___ (salir, tahmin: çıkmıştır)", o: ["Saldrá.", "Habrá salido.", "Había salido."], d: 1, a: "Az önce olmuş şeye tahmin: futuro perfecto." },
        { s: "Mañana a las ocho ya ___ el trabajo. (terminar, nosotros)", o: ["habremos terminado", "habíamos terminado", "terminábamos"], d: 0, a: "Gelecekteki bir andan önce bitmiş olacak iş: futuro perfecto." },
        { s: "Kapı çalıyor: “¿Quién será?” ne demek?", o: ["Kim acaba?", "Kim olacak?", "Kimdi?"], d: 0, a: "Futuro soruda “acaba” anlamı verir." },
        { s: "A lo mejor ___ en casa. (estar)", o: ["está", "esté", "estaría"], d: 0, a: "a lo mejor + indicativo." },
        { s: "Hangisi “çıkmıştır (herhalde)” demek?", o: ["Habrá salido.", "Ha salido.", "Había salido."], d: 0, a: "ha salido kesin bilgi; había salido -mıştı." },
        { s: "tener → futuro (él)", o: ["tenerá", "tendrá", "tiendrá"], d: 1, a: "Düzensiz kök tendr-." },
        { s: "“Juan debe de estar en casa.” ne anlatır?", o: ["Güçlü tahmin: evde olmalı.", "Zorunluluk: evde durmak zorunda.", "Kesin bilgi: evde."], d: 0, a: "deber de + mastar tahmin bildirir." },
        { s: "Tahminde perfecto neye dönüşür? (ha salido → ?)", o: ["habrá salido", "saldrá", "había salido"], d: 0, a: "Bir adım ileri: perfecto → futuro perfecto." }
      ]
    },
    {
      id: "es-b1-04", seviye: "B1", sure: 12,
      baslik: "Condicional: dijo que vendría, sería genial",
      kisa: "vendría · serían las diez · ¿qué harías?",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 26) condicional'ın biçimlerini ve kibar kullanımlarını öğrendin: <i>me gustaría, ¿podría…?, deberías, Yo que tú…</i>. B1'de üç yeni iş öğreniyorsun: 1) geçmişten bakınca gelecek (<i>Dijo que <b>vendría</b></i>), 2) geçmiş hakkında tahmin (<i><b>Serían</b> las diez</i>), 3) hayal ve varsayım (<i>¿Qué <b>harías</b> tú?</i>)." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu üç işi farklı ekler yapar: geçmişteki gelecek için <b>-eceğini</b>, geçmiş tahmin için <b>-dı herhalde</b>, hayal için <b>-ırdı</b>. İspanyolcada üçü de condicional'dır.", l: [
          ["[Gel]{eceğini} söyledi.", "Dijo que {vendría}."],
          ["Saat on{du} herhalde.", "{Serían} las diez."],
          ["Sen ne [yap]{ardın}?", "¿Qué {harías} tú?"],
          ["Bu harika [ol]{urdu}.", "{Sería} genial."]
        ] },
        { t: "tablo", h: "Hatırlatma: kök ve ekler", bas: ["Mastar", "Kök", "Biçim (yo / él)"], s: [
          ["hablar", "[hablar]-", "[hablar]{ía}"],
          ["ser", "[ser]-", "[ser]{ía}"],
          ["venir", "{vendr}-", "[vendr]{ía}"],
          ["tener", "{tendr}-", "[tendr]{ía}"],
          ["hacer", "{har}-", "[har]{ía}"],
          ["decir", "{dir}-", "[dir]{ía}"],
          ["poder", "{podr}-", "[podr]{ía}"],
          ["haber", "{habr}-", "[habr]{ía}"]
        ] },
        { t: "metin", h: "1) Geçmişteki gelecek", m: "Geçmişte söylenen ya da düşünülen bir şey o andan sonra olacaksa condicional kullanılır. Şimdiki zamanda <i>Dice que <b>vendrá</b></i> (Geleceğini söylüyor) dersin; geçmişte bu cümle <i>Dijo que <b>vendría</b></i> (Geleceğini söyledi) olur. Yani futuro, geçmişten bakınca condicional'a döner. Bu kural 49. dersteki dolaylı anlatımın da temelidir." },
        { t: "tablo", h: "Şimdi ve geçmişte", bas: ["Şimdi (futuro)", "Geçmişte (condicional)", "Türkçe"], s: [
          ["Dice que {llegará} tarde.", "Dijo que {llegaría} tarde.", "Geç kalacağını söyledi."],
          ["Creo que {lloverá}.", "Creía que {llovería}.", "Yağmur yağacağını sanıyordum."],
          ["Sé que {aprobarás}.", "Sabía que {aprobarías}.", "Geçeceğini biliyordum."],
          ["Prometo que {volveré}.", "Prometí que {volvería}.", "Döneceğime söz verdim."]
        ] },
        { t: "metin", h: "2) Geçmiş hakkında tahmin", m: "33. derste şimdiki durum hakkında tahmin için futuro kullandın (<i>Serán las diez</i> = saat ondur herhalde). Geçmiş hakkında tahmin için condicional kullanılır: <i>¿Qué hora era cuando llegaste? — <b>Serían</b> las diez</i> (Saat ondu herhalde). Bu da “bir adım ileri” kuralıdır: imperfecto ya da indefinido → condicional." },
        { t: "tablo", h: "Tahminde zaman kayması", bas: ["Kesin bilgi", "Tahmin", "Türkçe"], s: [
          ["{Son} las diez.", "{Serán} las diez.", "Saat ondur herhalde."],
          ["{Eran} las diez.", "{Serían} las diez.", "Saat ondu herhalde."],
          ["{Tenía} 20 años.", "{Tendría} 20 años.", "20 yaşındaydı herhalde."],
          ["No {oyó} el teléfono.", "No {oiría} el teléfono.", "Telefonu duymadı herhalde."]
        ] },
        { t: "metin", h: "3) Hayal ve varsayım", m: "Gerçek olmayan ya da olması zor durumları anlatırken: <i>Con más tiempo, <b>aprendería</b> chino</i> (Daha çok vaktim olsa Çince öğrenirdim). <i>¿Qué <b>harías</b> con un millón de euros?</i> (Bir milyon avroyla ne yapardın?) <i>Yo no <b>viviría</b> en una ciudad tan grande</i> (Ben bu kadar büyük bir şehirde yaşamazdım). “Eğer … olsaydı” kısmı (<i>si tuviera…</i>) 47. derste geliyor." },
        { t: "ipucu", h: "Türkçedeki “-ardım” tuzağı", m: "Türkçede <i>oynardım</i> hem “eskiden oynardım” (alışkanlık) hem de “oynardım ama…” (hayal) demektir. İspanyolcada bu iki anlam ayrılır: alışkanlık <b>imperfecto</b> (<i>De niño jugaba al fútbol</i>), hayal <b>condicional</b> (<i>Jugaría, pero estoy cansado</i> = Oynardım ama yorgunum)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Cuando era niño, {jugaría} en la calle.", "Cuando era niño, {jugaba} en la calle.", "alışkanlık: imperfecto"],
          ["Creía que el examen {será} fácil.", "Creía que el examen {sería} fácil.", "geçmişteki düşünce: condicional"],
          ["{Podería} ayudarte.", "{Podría} ayudarte.", "poder → podr-"],
          ["Con más gente, {habería} más ruido.", "Con más gente, {habría} más ruido.", "haber → habr-"]
        ] },
        { t: "diyalog", h: "Gelmeyen arkadaş", l: [
          ["Ana", "¿No {iba} a venir Pedro?", "Pedro gelmeyecek miydi?"],
          ["Luis", "Sí, me dijo que {llegaría} a las ocho.", "Evet, saat sekizde geleceğini söyledi."],
          ["Ana", "Ya son las nueve…", "Saat dokuz oldu bile…"],
          ["Luis", "{Habrá} mucho tráfico. O se le {habrá olvidado}.", "Trafik yoğundur. Ya da unutmuştur."],
          ["Ana", "Yo que tú, lo {llamaría}.", "Senin yerinde olsam onu arardım."],
          ["Luis", "Lo llamé hace media hora y no contestó. {Estaría} conduciendo.", "Yarım saat önce aradım, açmadı. Araba kullanıyordu herhalde."]
        ] },
        { t: "ornek", l: [
          ["Me prometió que me {ayudaría}.", "Bana yardım [ed]{eceğine} söz verdi."],
          ["Pensaba que {sería} más difícil.", "Daha zor [ol]{acağını} düşünüyordum."],
          ["¿Qué hora era? — {Serían} las tres.", "Saat kaçtı? — Üçtü herhalde."],
          ["No vino a clase; {estaría} enfermo.", "Derse gelmedi; hasta{ydı} herhalde."],
          ["Con más dinero, {viajaríamos} por todo el mundo.", "Daha çok paramız olsa bütün dünyayı [gez]{erdik}."],
          ["Yo no {haría} eso nunca.", "Ben bunu asla [yap]{mazdım}."],
          ["Sabía que {ganaríais} el partido.", "Maçı [kazan]{acağınızı} biliyordum."],
          ["{Sería} genial verte el sábado.", "Cumartesi seni görmek harika [ol]{urdu}."]
        ] },
        { t: "ozet", l: [
          "Biçimler: gelecek zaman kökü + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b> (A2, Ders 26).",
          "Geçmişteki gelecek: <i>Dice que vendrá → Dijo que vendría</i>.",
          "Geçmiş hakkında tahmin: <i>Serían las diez</i> (saat ondu herhalde).",
          "Hayal ve varsayım: <i>¿Qué harías tú?</i>, <i>Yo no viviría allí</i>.",
          "Türkçedeki “-ardım”: alışkanlıksa imperfecto (<i>jugaba</i>), hayalse condicional (<i>jugaría</i>)."
        ] }
      ],
      test: [
        { s: "Pensaba que el examen ___ fácil, pero fue difícil. (ser)", o: ["será", "sería", "es"], d: 1, a: "Geçmişteki düşünce, o andan sonrası için: sería." },
        { s: "“Saat ikiydi herhalde.”", o: ["Serán las dos.", "Serían las dos.", "Eran las dos."], d: 1, a: "Geçmiş hakkında tahmin: condicional. Serán şimdiki tahmin, eran kesin bilgidir." },
        { s: "De niño, ___ al fútbol todos los días. (jugar)", o: ["jugaría", "jugaba", "jugaré"], d: 1, a: "Geçmişteki alışkanlık: imperfecto. “Oynardım” tuzağına dikkat." },
        { s: "¿Qué ___ tú en mi lugar? (hacer)", o: ["harías", "hacías", "harás"], d: 0, a: "Hayal ve varsayım: condicional; hacer → har-." },
        { s: "poder → condicional (yo)", o: ["podería", "podría", "pudería"], d: 1, a: "Düzensiz kök podr-." },
        { s: "Me prometió que me ___ ayer, pero no lo hizo. (llamar)", o: ["llamaría", "llamará", "llama"], d: 0, a: "Söz geçmişte, arama da geçmişte kaldı: condicional." },
        { s: "“Daha çok vaktim olsa Çince öğrenirdim.”", o: ["Con más tiempo, aprendería chino.", "Con más tiempo, aprendía chino.", "Con más tiempo, aprenderé chino."], d: 0, a: "Hayal: condicional." },
        { s: "Anoche no contestó al teléfono; ___ dormido. (estar, tahmin)", o: ["estaría", "estará", "está"], d: 0, a: "Geçmiş hakkında tahmin: estaría (uyuyordu herhalde)." },
        { s: "“Yo que tú, no lo compraría.” Türkçesi?", o: ["Senin yerinde olsam onu almazdım.", "Sen almadan önce ben aldım.", "Ben de almayacağım."], d: 0, a: "Yo que tú + condicional: senin yerinde olsam…" },
        { s: "haber → condicional (él)", o: ["habería", "habría", "hubiera"], d: 1, a: "Düzensiz kök habr-: habría." }
      ]
    },
    {
      id: "es-b1-05", seviye: "B1", sure: 12,
      baslik: "Subjuntivo 1: biçimler ve istek (quiero que…, ojalá)",
      kisa: "hable, coma, viva · quiero que vengas · ojalá",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 24) kibar emri ve olumsuz emri öğrenirken aslında subjuntivo'yu kullandın: <i>hable</i>, <i>no hables</i>. Bu biçimlerin adı <b>subjuntivo</b>dur (istek-dilek kipi). Indicativo bir şeyi gerçek olarak söyler; subjuntivo ise istenen, umulan, henüz gerçekleşmemiş bir şeyi anlatır. B1'in en önemli konusu budur. Bu derste biçimleri ve en sık kullanımı olan <b>istek</b> cümlelerini öğreniyorsun." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede başkasından bir şey isterken fiil <b>-mesini, -masını</b> alır: “Gelmeni istiyorum.” İspanyolcada iki ayrı cümle <b>que</b> ile bağlanır ve ikinci fiil subjuntivo olur. Dilek bildiren <b>-sin, -se</b> eklerinin karşılığı da subjuntivo'dur.", l: [
          ["[Gel]{meni} istiyorum.", "Quiero que {vengas}."],
          ["Annem erken [yat]{mamı} istiyor.", "Mi madre quiere que me {acueste} pronto."],
          ["Umarım yarın yağmur [yağ]{maz}.", "Espero que mañana no {llueva}."],
          ["İnşallah [kazan]{ırız}!", "¡Ojalá {ganemos}!"]
        ] },
        { t: "tablo", h: "Kurulum: yo biçiminden", bas: ["Fiil", "yo", "yo, tú, él", "nosotros, vosotros, ellos"], s: [
          ["hablar", "hablo", "[habl]{e}, [habl]{es}, [habl]{e}", "[habl]{emos}, [habl]{éis}, [habl]{en}"],
          ["comer", "como", "[com]{a}, [com]{as}, [com]{a}", "[com]{amos}, [com]{áis}, [com]{an}"],
          ["vivir", "vivo", "[viv]{a}, [viv]{as}, [viv]{a}", "[viv]{amos}, [viv]{áis}, [viv]{an}"],
          ["tener", "tengo", "[teng]{a}, [teng]{as}, [teng]{a}", "[teng]{amos}, [teng]{áis}, [teng]{an}"],
          ["hacer", "hago", "[hag]{a}, [hag]{as}, [hag]{a}", "[hag]{amos}, [hag]{áis}, [hag]{an}"],
          ["conocer", "conozco", "[conozc]{a}, [conozc]{as}, [conozc]{a}", "[conozc]{amos}, [conozc]{áis}, [conozc]{an}"]
        ] },
        { t: "metin", h: "Kural: karşıt ünlü", m: "A2'deki kibar emirle aynı kural: fiilin <b>yo</b> biçimini al, sondaki <b>-o</b>'yu at ve “karşıt” ünlüyü ekle. <b>-ar</b> fiillerinde <b>-e</b>, <b>-er / -ir</b> fiillerinde <b>-a</b> gelir. yo'daki düzensizlik bütün kişilere geçer: <i>digo → diga</i>, <i>salgo → salga</i>, <i>pongo → ponga</i>. Ses korunsun diye yazım değişir: <i>buscar → busque</i>, <i>llegar → llegue</i>, <i>empezar → empiece</i>." },
        { t: "tablo", h: "Kök değiştiren fiiller", bas: ["Fiil", "yo, tú, él, ellos", "nosotros, vosotros"], s: [
          ["querer (e → ie)", "[quier]{a}, [quier]{as}, [quier]{a}, [quier]{an}", "[quer]{amos}, [quer]{áis}"],
          ["poder (o → ue)", "[pued]{a}, [pued]{as}, [pued]{a}, [pued]{an}", "[pod]{amos}, [pod]{áis}"],
          ["pedir (e → i)", "[pid]{a}, [pid]{as}, [pid]{a}, [pid]{an}", "[pid]{amos}, [pid]{áis}"],
          ["dormir (o → ue / u)", "[duerm]{a}, [duerm]{as}, [duerm]{a}, [duerm]{an}", "[durm]{amos}, [durm]{áis}"],
          ["sentir (e → ie / i)", "[sient]{a}, [sient]{as}, [sient]{a}, [sient]{an}", "[sint]{amos}, [sint]{áis}"]
        ] },
        { t: "tablo", h: "yo'su -o ile bitmeyen altı fiil", bas: ["Fiil", "Subjuntivo", "Örnek"], s: [
          ["ser (soy)", "{sea}, {seas}, {seamos}", "Quiero que {seas} feliz."],
          ["estar (estoy)", "{esté}, {estés}, {estemos}", "Espero que {estés} bien."],
          ["ir (voy)", "{vaya}, {vayas}, {vayamos}", "Quiere que {vayamos} juntos."],
          ["haber (he)", "{haya}", "Ojalá {haya} sitio."],
          ["saber (sé)", "{sepa}, {sepas}, {sepamos}", "No quiero que nadie lo {sepa}."],
          ["dar (doy)", "{dé}, {des}, {demos}", "Espero que me {den} el trabajo."]
        ] },
        { t: "metin", h: "İki özne mi, tek özne mi?", m: "Subjuntivo'nun asıl şartı <b>iki farklı özne</b>dir. İsteyen ile yapan aynı kişiyse mastar kullanılır: <i>Quiero <b>ir</b></i> (Gitmek istiyorum). Farklı kişilerse <b>que + subjuntivo</b> gelir: <i>Quiero que <b>vayas</b></i> (Gitmeni istiyorum). Aynı kural <i>esperar, preferir, necesitar</i> için de geçerlidir: <i>Espero aprobar</i> (Geçmeyi umuyorum) ↔ <i>Espero que <b>apruebes</b></i> (Geçmeni umuyorum)." },
        { t: "tablo", h: "İstek bildiren kalıplar", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["querer que", "…-mesini istemek", "Quiero que me {llames}."],
          ["esperar que", "umarım …", "Espero que te {guste}."],
          ["preferir que", "…-mesini tercih etmek", "Prefiero que {vengáis} el sábado."],
          ["pedir que", "…-mesini rica etmek", "Te pido que no {llegues} tarde."],
          ["recomendar que", "…-mesini tavsiye etmek", "Te recomiendo que {pruebes} la paella."],
          ["necesitar que", "…-mesine ihtiyaç duymak", "Necesito que me {ayudes}."],
          ["es importante que", "…-mesi önemli", "Es importante que {descanses}."]
        ] },
        { t: "ipucu", h: "Ojalá: inşallah", m: "<i>ojalá</i> Arapça “Allah dilerse” sözünden gelir; Türkçedeki <b>inşallah</b> ile akrabadır. Arkasından her zaman subjuntivo gelir, <i>que</i> isteğe bağlıdır: <i>¡Ojalá (que) <b>haga</b> buen tiempo!</i> (İnşallah hava güzel olur!). Gelecekle ilgili bir dilek için şimdiki subjuntivo kullanılır." },
        { t: "ipucu", h: "Kalıplaşmış dilekler", m: "Gündelik dilde <b>que + subjuntivo</b> tek başına dilek bildirir: <i>¡Que te mejores!</i> (Geçmiş olsun!), <i>¡Que aproveche!</i> (Afiyet olsun!), <i>¡Que lo pases bien!</i> (İyi eğlenceler!), <i>¡Que tengas un buen día!</i> (İyi günler!), <i>¡Que cumplas muchos más!</i> (Nice yaşlara!)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Quiero que {vienes} mañana.", "Quiero que {vengas} mañana.", "iki özne: que + subjuntivo"],
          ["Quiero que yo {vaya}.", "Quiero {ir}.", "tek özne: mastar"],
          ["Espero que {tienes} suerte.", "Espero que {tengas} suerte.", "esperar que + subjuntivo"],
          ["¡Ojalá {llueve} mañana!", "¡Ojalá {llueva} mañana!", "ojalá her zaman subjuntivo"],
          ["Es importante que {estudias}.", "Es importante que {estudies}.", "gereklilik: subjuntivo"]
        ] },
        { t: "diyalog", h: "Tatil planı", l: [
          ["Carmen", "¿Qué quieres hacer este verano?", "Bu yaz ne yapmak istiyorsun?"],
          ["Pablo", "Quiero {ir} a la playa, pero mis padres quieren que {vaya} al pueblo.", "Sahile gitmek istiyorum ama annemler köye gitmemi istiyor."],
          ["Carmen", "¿Y no puedes hacer las dos cosas?", "İkisini birden yapamaz mısın?"],
          ["Pablo", "Ojalá {pueda}. Necesito que mi jefe me {dé} dos semanas de vacaciones.", "İnşallah yapabilirim. Patronumun bana iki hafta izin vermesi lazım."],
          ["Carmen", "Pídele que te las {dé} en agosto.", "Ondan izni ağustosta vermesini rica et."],
          ["Pablo", "Buena idea. ¡Y que {haga} buen tiempo!", "İyi fikir. Bir de inşallah hava güzel olur!"]
        ] },
        { t: "ornek", l: [
          ["Mis padres quieren que {estudie} Medicina.", "Annemler tıp [oku]{mamı} istiyor."],
          ["Espero que {tengáis} un buen viaje.", "Umarım iyi bir yolculuk [geçir]{irsiniz}."],
          ["Te pido que me {digas} la verdad.", "Bana doğruyu [söyle]{meni} rica ediyorum."],
          ["El médico me recomienda que {haga} más ejercicio.", "Doktor daha çok spor [yap]{mamı} tavsiye ediyor."],
          ["Necesito que me {ayudes} con la mudanza.", "Taşınmada bana [yardım et]{mene} ihtiyacım var."],
          ["¡Ojalá {aprobemos} el examen!", "İnşallah sınavı [geç]{eriz}!"],
          ["Prefiero que {hablemos} mañana.", "Yarın [konuş]{mamızı} tercih ederim."],
          ["No quiero que {llegues} tarde otra vez.", "Yine geç [kal]{manı} istemiyorum."]
        ] },
        { t: "ozet", l: [
          "Kurulum: yo biçiminden -o atılır, karşıt ünlü eklenir: <i>hablo → hable</i>, <i>como → coma</i>, <i>tengo → tenga</i>.",
          "Düzensiz altı fiil: <b>sea, esté, vaya, haya, sepa, dé</b>.",
          "İki farklı özne → <b>que + subjuntivo</b>; tek özne → mastar: <i>Quiero que vayas</i> / <i>Quiero ir</i>.",
          "İstek kalıpları: <i>querer, esperar, preferir, pedir, recomendar, necesitar que</i>.",
          "<b>Ojalá</b> + subjuntivo: inşallah; kalıp dilekler: <i>¡Que te mejores!</i>"
        ] }
      ],
      test: [
        { s: "hablar → subjuntivo (yo)?", o: ["hablo", "hable", "habla"], d: 1, a: "-ar fiili: -e → hable." },
        { s: "tener → subjuntivo (tú)?", o: ["tengas", "tienes", "tenes"], d: 0, a: "yo tengo → teng- + -as → tengas." },
        { s: "Quiero que mañana ___ conmigo.", o: ["vienes", "vengas", "venir"], d: 1, a: "İki özne: que + subjuntivo → vengas." },
        { s: "Quiero ___ al cine esta noche. (ben gideceğim)", o: ["ir", "que vaya", "vaya"], d: 0, a: "Tek özne: mastar → Quiero ir." },
        { s: "ser → subjuntivo (él)?", o: ["es", "sea", "esté"], d: 1, a: "Düzensiz: sea." },
        { s: "¡Ojalá ___ buen tiempo el sábado!", o: ["hace", "hará", "haga"], d: 2, a: "Ojalá + subjuntivo: haga." },
        { s: "Espero que te ___ el regalo.", o: ["gusta", "guste", "gustar"], d: 1, a: "esperar que + subjuntivo: guste." },
        { s: "dormir → subjuntivo (nosotros)?", o: ["durmamos", "duermamos", "dormamos"], d: 0, a: "nosotros'ta o → u: durmamos." },
        { s: "Arkadaşına “İyi eğlenceler!”", o: ["¡Que lo pasas bien!", "¡Que lo pases bien!", "¡Que lo pasar bien!"], d: 1, a: "Kalıp dilek: que + subjuntivo → pases." },
        { s: "buscar → subjuntivo (yo)?", o: ["busca", "busce", "busque"], d: 2, a: "Ses korunur: c → qu → busque." }
      ]
    },
    {
      id: "es-b1-06", seviye: "B1", sure: 12,
      baslik: "Subjuntivo 2: duygu, değerlendirme, şüphe ve cuando",
      kisa: "me alegra que · es normal que · no creo que · cuando llegues",
      bolumler: [
        { t: "metin", m: "Önceki derste subjuntivo'yu istek cümlelerinde kullandın. Şimdi dört yeni alan var: <b>duygu</b> (<i>me alegra que…</i>), <b>değerlendirme</b> (<i>es normal que…</i>), <b>şüphe ve inkâr</b> (<i>no creo que…</i>) ve <b>henüz olmamış zaman</b> (<i>cuando llegues…</i>). Ortak nokta şu: cümle bir şeyi bilgi olarak bildirmiyor; ona tepki veriyor, onu yorumluyor ya da ondan emin değil." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu cümlelerde çoğunlukla <b>-mesine, -diğine</b> ya da <b>-ince</b> kullanılır. İspanyolcada <b>que / cuando</b> + subjuntivo gelir.", l: [
          ["[Gel]{mene} çok sevindim.", "Me alegra mucho que {vengas}."],
          ["Geç [kal]{ması} normal.", "Es normal que {llegue} tarde."],
          ["[Bil]{diğini} sanmıyorum.", "No creo que lo {sepa}."],
          ["Eve [var]{ınca} beni ara.", "Llámame cuando {llegues} a casa."]
        ] },
        { t: "tablo", h: "Duygu: me alegra que…", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["me alegra que", "…-mesine sevinmek", "Me alegra que {estés} aquí."],
          ["me molesta que", "…-mesinden rahatsız olmak", "Me molesta que {fumen} en casa."],
          ["siento que", "…-mesine üzülmek", "Siento que no {puedas} venir."],
          ["me da miedo que", "…-mesinden korkmak", "Me da miedo que {se pierda}."],
          ["me sorprende que", "…-mesine şaşırmak", "Me sorprende que no {sepas} nadar."],
          ["no me importa que", "…-mesi umurumda değil", "No me importa que {llueva}."]
        ] },
        { t: "ipucu", h: "Bu fiiller gustar gibi", m: "<i>alegrar, molestar, sorprender, importar</i> fiilleri A1'deki <i>gustar</i> gibi kurulur: duyguyu yaşayan kişi zamirle gösterilir, fiil tekil kalır: <i>Me alegra que…, Nos molesta que…</i>. <i>Me alegro de que…</i> biçimi de aynı anlamdadır. 40. derste bu fiillere ayrıntılı döneceğiz." },
        { t: "tablo", h: "Değerlendirme: es + sıfat + que", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["es normal que", "…-mesi normal", "Es normal que {estés} nervioso."],
          ["es raro que", "…-mesi tuhaf", "Es raro que no {conteste}."],
          ["es una pena que", "…-mesi yazık", "Es una pena que te {vayas}."],
          ["es mejor que", "…-mesi daha iyi", "Es mejor que {salgamos} temprano."],
          ["es posible que", "…-mesi mümkün, belki", "Es posible que {llueva}."],
          ["está bien que", "…-mesi iyi", "Está bien que {ahorres}."]
        ] },
        { t: "metin", h: "Şüphe ve inkâr: creo que mu, no creo que mu?", m: "Bir şeye inanıyorsan bilgi verirsin: <i>Creo que <b>tiene</b> razón</i> (Bence haklı) → indicativo. Olumsuz yapınca inanmadığını söylersin ve subjuntivo gelir: <i>No creo que <b>tenga</b> razón</i> (Haklı olduğunu sanmıyorum). Aynı fark <i>pienso que / no pienso que</i>, <i>es verdad que / no es verdad que</i>, <i>estoy seguro de que / no estoy seguro de que</i> için de geçerlidir. <i>dudo que</i> (şüpheliyim) her zaman subjuntivo alır." },
        { t: "tablo", h: "İnanç ve şüphe", bas: ["Indicativo (bilgi)", "Subjuntivo (şüphe)"], s: [
          ["Creo que {viene}.", "No creo que {venga}."],
          ["Pienso que {es} verdad.", "No pienso que {sea} verdad."],
          ["Es verdad que {está} enfermo.", "No es verdad que {esté} enfermo."],
          ["Estoy seguro de que lo {sabe}.", "Dudo que lo {sepa}."]
        ] },
        { t: "metin", h: "cuando + subjuntivo: henüz olmamış zaman", m: "<i>cuando</i> (…-ince, …-dığında) gelecekteki, henüz olmamış bir olayı anlatıyorsa subjuntivo alır: <i>Cuando <b>llegues</b>, llámame</i> (Varınca beni ara). Alışkanlık ya da geçmiş anlatıyorsa indicativo kalır: <i>Cuando <b>llego</b> a casa, siempre ceno</i> (Eve gelince hep yemek yerim), <i>Cuando <b>llegué</b>, cenamos</i> (Vardığımda yemek yedik). Aynı kural <i>en cuanto, hasta que, después de que</i> için de geçerlidir. <i>antes de que</i> ise her zaman subjuntivo alır." },
        { t: "tablo", h: "Zaman bağlaçları", bas: ["Bağlaç", "Anlamı", "Gelecek (subjuntivo)"], s: [
          ["cuando", "…-ince, …-dığında", "Cuando {termine}, te llamo."],
          ["en cuanto", "…-r …-mez", "En cuanto {sepa} algo, te aviso."],
          ["hasta que", "…-ene kadar", "Espera hasta que {vuelva}."],
          ["después de que", "…-dikten sonra", "Después de que {se vayan}, limpiamos."],
          ["antes de que", "…-meden önce", "Vete antes de que {empiece} a llover."]
        ] },
        { t: "ipucu", h: "Belki: quizás, tal vez, a lo mejor", m: "<i>quizás</i> ve <i>tal vez</i> (belki) şüphe bildirir ve çoğunlukla subjuntivo alır: <i>Quizás <b>venga</b> mañana</i> (Belki yarın gelir). Ama <i>a lo mejor</i> (belki) her zaman indicativo ile kullanılır: <i>A lo mejor <b>viene</b> mañana</i>. Konuşmada en sık duyulan <i>a lo mejor</i>'dur." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Me alegra que {estás} aquí.", "Me alegra que {estés} aquí.", "duygu: subjuntivo"],
          ["No creo que {tiene} razón.", "No creo que {tenga} razón.", "inkâr: subjuntivo"],
          ["Creo que {tenga} razón.", "Creo que {tiene} razón.", "inanç: indicativo"],
          ["Cuando {llegarás}, llámame.", "Cuando {llegues}, llámame.", "cuando + gelecek: subjuntivo, futuro değil"],
          ["A lo mejor {venga} mañana.", "A lo mejor {viene} mañana.", "a lo mejor + indicativo"]
        ] },
        { t: "diyalog", h: "Yeni iş", l: [
          ["Elena", "¡Me alegra mucho que {empieces} un trabajo nuevo!", "Yeni bir işe başlamana çok sevindim!"],
          ["Andrés", "Gracias. Pero es normal que {esté} un poco nervioso, ¿no?", "Teşekkürler. Ama biraz gergin olmam normal, değil mi?"],
          ["Elena", "Claro. No creo que {tengas} problemas: eres muy bueno.", "Tabii. Sorun yaşayacağını sanmıyorum: çok iyisin."],
          ["Andrés", "Ojalá. Lo malo es que la oficina {está} lejos.", "İnşallah. İşin kötü yanı, ofis uzak."],
          ["Elena", "Bueno, cuando {cobres} el primer sueldo, te compras una moto.", "Neyse, ilk maaşını alınca bir motosiklet alırsın."],
          ["Andrés", "¡Y cuando la {tenga}, te llevo a la playa!", "Alınca da seni sahile götürürüm!"]
        ] },
        { t: "ornek", l: [
          ["Me encanta que {vengáis} a verme.", "Beni görmeye [gel]{menize} çok seviniyorum."],
          ["Es una pena que {llueva} el día de tu boda.", "Düğün gününde yağmur [yağ]{ması} çok yazık."],
          ["No creo que {sea} tan difícil.", "O kadar zor [ol]{duğunu} sanmıyorum."],
          ["Dudo que {lleguen} a tiempo.", "Zamanında [yetiş]{eceklerinden} şüpheliyim."],
          ["Cuando {seas} mayor, lo entenderás.", "[Büyü]{yünce} anlayacaksın."],
          ["En cuanto {termine} la reunión, te llamo.", "Toplantı [bit]{er bitmez} seni ararım."],
          ["Quizás {cambie} de trabajo el año que viene.", "Belki seneye iş [değiştir]{irim}."],
          ["Me sorprende que no {haya} nadie en la calle.", "Sokakta kimsenin [ol]{maması} beni şaşırtıyor."]
        ] },
        { t: "ozet", l: [
          "Duygu: <i>me alegra, me molesta, siento, me da miedo que</i> + subjuntivo.",
          "Değerlendirme: <i>es normal, es raro, es una pena, es mejor, es posible que</i> + subjuntivo.",
          "<i>Creo que</i> + indicativo; <i>no creo que, dudo que</i> + subjuntivo.",
          "<i>cuando, en cuanto, hasta que</i> + gelecek → subjuntivo; alışkanlık ve geçmiş → indicativo; <i>antes de que</i> hep subjuntivo.",
          "Belki: <i>quizás / tal vez</i> + çoğunlukla subjuntivo; <i>a lo mejor</i> + indicativo."
        ] }
      ],
      test: [
        { s: "Me alegra que ___ aquí.", o: ["estás", "estés", "estar"], d: 1, a: "Duygu: que + subjuntivo → estés." },
        { s: "Creo que Ana ___ razón.", o: ["tiene", "tenga", "tener"], d: 0, a: "Olumlu inanç: indicativo → tiene." },
        { s: "No creo que Ana ___ razón.", o: ["tiene", "tendrá", "tenga"], d: 2, a: "Olumsuz inanç: subjuntivo → tenga." },
        { s: "Cuando ___ a Madrid, llámame.", o: ["llegarás", "llegues", "llegas"], d: 1, a: "cuando + gelecek: subjuntivo. Futuro kullanılmaz." },
        { s: "Cuando ___ a casa, siempre me ducho.", o: ["llego", "llegue", "llegaré"], d: 0, a: "Alışkanlık: indicativo → llego." },
        { s: "Es normal que ___ cansado después del viaje.", o: ["estás", "estés", "eres"], d: 1, a: "Değerlendirme: es normal que + subjuntivo." },
        { s: "Dudo que ellos ___ la verdad.", o: ["saben", "sepan", "sabrán"], d: 1, a: "dudo que her zaman subjuntivo: sepan." },
        { s: "A lo mejor ___ mañana.", o: ["llueve", "llueva", "llover"], d: 0, a: "a lo mejor + indicativo: llueve." },
        { s: "Vete antes de que ___ a llover.", o: ["empieza", "empezará", "empiece"], d: 2, a: "antes de que her zaman subjuntivo: empiece." },
        { s: "“Toplantı biter bitmez seni ararım.”", o: ["En cuanto termina la reunión, te llamo.", "En cuanto termine la reunión, te llamo.", "En cuanto terminará la reunión, te llamo."], d: 1, a: "en cuanto + gelecek: subjuntivo → termine." }
      ]
    },
    {
      id: "es-b1-07", seviye: "B1", sure: 12,
      baslik: "Emir kipi 2: vosotros, nosotros ve iki zamir",
      kisa: "hablad, sentaos · hagámoslo · dímelo / no me lo digas",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 24) tú ve usted ile emir vermeyi, (Ders 23) iki zamirin sırasını öğrendin: <i>Se lo doy</i>. Şimdi bu ikisini birleştiriyoruz: emir kipinde iki zamir (<i>dímelo / no me lo digas</i>), samimi çoğul <b>vosotros</b> emri (<i>hablad, sentaos</i>) ve “hadi …-alım” anlamındaki <b>nosotros</b> emri (<i>vamos, hagámoslo</i>). Olumsuz emrin aslında subjuntivo olduğunu da artık biliyorsun." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede emir eki fiilin sonuna gelir: <b>-in, -alım</b>. İspanyolcada olumlu emirde zamirler de fiilin sonuna yapışır; olumsuzda ise öne geçer.", l: [
          ["Onu bana [söyle]!", "¡{Dímelo}!"],
          ["Onu bana [söyle]{me}!", "¡No me lo {digas}!"],
          ["[Otur]{un}! (siz, samimi)", "¡{Sentaos}!"],
          ["Hadi onu [yap]{alım}!", "¡{Hagámoslo}!"]
        ] },
        { t: "tablo", h: "vosotros emri: -r → -d", bas: ["Fiil", "Olumlu", "Olumsuz (subjuntivo)"], s: [
          ["hablar", "[habla]{d}", "no [habl]{éis}"],
          ["comer", "[come]{d}", "no [com]{áis}"],
          ["escribir", "[escribi]{d}", "no [escrib]{áis}"],
          ["venir", "[veni]{d}", "no [veng]{áis}"],
          ["ir", "[i]{d}", "no [vay]{áis}"],
          ["hacer", "[hace]{d}", "no [hag]{áis}"]
        ] },
        { t: "ipucu", h: "Dönüşlü fiillerde -d düşer", m: "Dönüşlü fiillerde <b>-d</b> düşer ve <b>-os</b> eklenir: <i>sentarse → <b>sentaos</b></i> (oturun), <i>levantarse → <b>levantaos</b></i> (kalkın), <i>callarse → <b>callaos</b></i> (susun). -ir fiillerinde i vurgulanır: <i>divertirse → <b>divertíos</b></i> (iyi eğlenin). Tek istisna <i>irse → <b>idos</b></i> (gidin). Konuşmada <i>sentaros</i> gibi mastarlı biçim çok duyulur ama standart dilde yanlıştır." },
        { t: "metin", h: "nosotros emri: hadi …-alım", m: "Kendini de içine katarak öneri yaparken subjuntivo'nun <b>nosotros</b> biçimi kullanılır: <i>¡<b>Hablemos</b>!</i> (Konuşalım!), <i>¡<b>Comamos</b> fuera!</i> (Dışarıda yiyelim!). Tek istisna <i>ir</i>: olumluda <b>¡Vamos!</b> (Gidelim, hadi!), olumsuzda <i>¡No vayamos!</i>. Konuşmada çoğunlukla <i>vamos a + mastar</i> tercih edilir: <i>¡Vamos a comer!</i>" },
        { t: "ipucu", h: "Zamir gelince -s düşer", m: "nosotros emrine <b>nos</b> eklenince sondaki -s düşer: <i>sentemos + nos → <b>sentémonos</b></i> (oturalım), <i>vamos + nos → <b>vámonos</b></i> (gidelim). <b>se</b> eklenince de -s'lerden biri düşer: <i>digamos + se + lo → <b>digámoselo</b></i> (ona söyleyelim). <i>le</i> ile düşmez: <i>pidámosle</i>." },
        { t: "tablo", h: "Emirde iki zamir", bas: ["Olumlu (sona yapışık)", "Olumsuz (önde, ayrı)", "Türkçe"], s: [
          ["{Dímelo}.", "No me lo {digas}.", "Onu bana söyle / söyleme. (tú)"],
          ["{Dáselo}.", "No se lo {des}.", "Onu ona ver / verme. (tú)"],
          ["{Explíquemelo}.", "No me lo {explique}.", "Onu bana açıklayın / açıklamayın. (usted)"],
          ["{Traédnoslo}.", "No nos lo {traigáis}.", "Onu bize getirin / getirmeyin. (vosotros)"],
          ["{Enviémoselo}.", "No se lo {enviemos}.", "Onu ona gönderelim / göndermeyelim."]
        ] },
        { t: "metin", h: "Vurgu işareti kuralı", m: "Zamir eklenince kelime uzar ama vurgu yerinde kalır; bunu göstermek için çoğunlukla vurgu işareti gerekir: <i>di → dímelo</i>, <i>da → dáselo</i>, <i>explica → explícamelo</i>. Emir tek heceliyse bir zamirde işaret gerekmez (<i>dime, dame</i>) ama iki zamirde gerekir (<i>dímelo, dámelo</i>). İki ve daha çok heceli emirlerde tek zamir bile yeter: <i>cómpralo, siéntate, llámame</i>." },
        { t: "metin", h: "Mastar ve -ndo ile iki zamir", m: "Mastar ya da -ndo biçimi varsa zamirler iki yerde durabilir: çekimli fiilin önünde ya da mastara, -ndo'ya yapışık. İkisi de doğrudur: <i><b>Te lo</b> voy a dar</i> = <i>Voy a <b>dártelo</b></i> (Onu sana vereceğim); <i><b>Me lo</b> está explicando</i> = <i>Está <b>explicándomelo</b></i> (Onu bana açıklıyor). Yapışık biçimde vurgu işaretini unutma." },
        { t: "ipucu", h: "Üçüncü kişiye emir: que + subjuntivo", m: "Türkçedeki <b>-sın</b> emrinin karşılığı <b>que + subjuntivo</b>'dur: <i>¡Que <b>pase</b>!</i> (Girsin!), <i>Que me <b>llame</b> mañana</i> (Yarın beni arasın), <i>Que <b>esperen</b> un momento</i> (Biraz beklesinler)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["¡No {dímelo}!", "¡No me lo {digas}!", "olumsuzda zamir öne, fiil subjuntivo"],
          ["¡{Sentaros}!", "¡{Sentaos}!", "dönüşlü vosotros: -d düşer, mastar değil"],
          ["{Dálelo}.", "{Dáselo}.", "le + lo → se lo"],
          ["¡{Vamosnos}!", "¡{Vámonos}!", "nos eklenince -s düşer"],
          ["Voy a {darte lo}.", "Voy a {dártelo}.", "mastara bitişik ve vurgulu yazılır"]
        ] },
        { t: "diyalog", h: "Müze gezisi", l: [
          ["Profesora", "Chicos, {sentaos} y {escuchad}, por favor.", "Çocuklar, oturun ve dinleyin lütfen."],
          ["Profesora", "Mañana vamos al museo. {Traed} agua y no {lleguéis} tarde.", "Yarın müzeye gidiyoruz. Su getirin ve geç kalmayın."],
          ["Javi", "¿Y la autorización de mis padres? ¿Se la doy a usted?", "Ailemin izin kâğıdı ne olacak? Size mi vereyim?"],
          ["Profesora", "Sí, {dámela} hoy. Y no la {olvides} en casa, ¿eh?", "Evet, bugün ver. Evde unutma ama, tamam mı?"],
          ["Lucía", "Profe, ¿podemos llevar el móvil?", "Hocam, telefon getirebilir miyiz?"],
          ["Profesora", "Sí, pero no lo {uséis} en el museo. ¡Y {seamos} puntuales!", "Evet ama müzede kullanmayın. Ve dakik olalım!"]
        ] },
        { t: "ornek", l: [
          ["¿El libro? {Préstamelo}, por favor.", "Kitap mı? Bana ödünç [ver]{sene}, lütfen."],
          ["Si ves a Marta, no se lo {digas}.", "Marta'yı görürsen ona [söyle]{me}."],
          ["{Lavaos} las manos antes de comer.", "Yemekten önce ellerinizi [yıka]{yın}."],
          ["¡{Divertíos} mucho en la fiesta!", "Partide çok iyi [eğlen]{in}!"],
          ["{Pidámosle} ayuda al vecino.", "Komşudan yardım [iste]{yelim}."],
          ["Voy a {explicártelo} otra vez.", "Onu sana bir daha [açıkla]{yacağım}."],
          ["¡Que {pase} el siguiente!", "Sıradaki [gir]{sin}!"],
          ["No {os preocupéis}: todo va a salir bien.", "Merak [et]{meyin}: her şey yolunda gidecek."]
        ] },
        { t: "ozet", l: [
          "vosotros olumlu: mastarın -r'si → <b>-d</b> (<i>hablad, comed, id</i>); olumsuz: subjuntivo (<i>no habléis</i>).",
          "Dönüşlü vosotros: -d düşer → <b>sentaos, levantaos, divertíos</b>; istisna <i>idos</i>.",
          "nosotros emri = subjuntivo: <i>hablemos, hagámoslo</i>; <b>vamos / vámonos</b>.",
          "Olumlu emirde zamirler sona yapışır (<i>dímelo</i>); olumsuzda öne geçer (<i>no me lo digas</i>).",
          "Mastar ve -ndo ile iki yer de doğru: <i>te lo voy a dar = voy a dártelo</i>; üçüncü kişiye emir: <i>que + subjuntivo</i>."
        ] }
      ],
      test: [
        { s: "hablar → vosotros olumlu emir?", o: ["hablad", "hablaros", "habláis"], d: 0, a: "-r → -d: hablad." },
        { s: "sentarse → vosotros olumlu emir?", o: ["sentados", "sentaos", "sentaros"], d: 1, a: "Dönüşlüde -d düşer: sentaos." },
        { s: "“Onu bana söyleme!” (tú)", o: ["¡No dímelo!", "¡No me lo digas!", "¡No me lo dices!"], d: 1, a: "Olumsuzda zamir öne, fiil subjuntivo: no me lo digas." },
        { s: "“Onu ona ver!” (tú; el libro, a Juan)", o: ["¡Dáselo!", "¡Dálelo!", "¡Lo le da!"], d: 0, a: "le + lo → se lo; olumluda sona yapışır: dáselo." },
        { s: "“Hadi gidelim!”", o: ["¡Vayamos nos!", "¡Vamosnos!", "¡Vámonos!"], d: 2, a: "vamos + nos → -s düşer: vámonos." },
        { s: "comer → vosotros olumsuz emir?", o: ["no comed", "no coméis", "no comáis"], d: 2, a: "Olumsuz emir subjuntivo: no comáis." },
        { s: "“Onu sana vereceğim.” Hangisi doğru?", o: ["Voy a dártelo.", "Voy a te lo dar.", "Voy te lo a dar."], d: 0, a: "Zamir mastara yapışır (dártelo) ya da en öne gelir (te lo voy a dar)." },
        { s: "ir → vosotros olumlu emir?", o: ["vayad", "id", "ved"], d: 1, a: "Kural düzenli: ir → id." },
        { s: "“Onu ona söyleyelim.”", o: ["Digámoselo.", "Digamosselo.", "Digámosele lo."], d: 0, a: "digamos + se + lo: bir -s düşer → digámoselo." },
        { s: "“(O) yarın beni arasın.”", o: ["Que me llama mañana.", "Que me llame mañana.", "Que me llamará mañana."], d: 1, a: "Üçüncü kişiye emir: que + subjuntivo → que me llame." }
      ]
    },
    {
      id: "es-b1-08", seviye: "B1", sure: 12,
      baslik: "ser ve estar ileri: anlamı değişen sıfatlar",
      kisa: "ser listo / estar listo · ser malo / estar malo · está roto",
      bolumler: [
        { t: "metin", m: "A1'de (Ders 4) ser'in kimlik ve kalıcı özellik, estar'ın konum ve geçici durum anlattığını öğrendin; anlamı değişen birkaç sıfatı da gördün. B1'de bu listeyi genişletiyoruz ve iki önemli kullanım ekliyoruz: aynı sıfatın ser ile “nasıl biri”, estar ile “şu an nasıl” anlamı vermesi (<i>es guapa / está guapa</i>) ve bir eylemin sonucunu anlatan <b>estar + ortaç</b> (<i>la puerta está abierta</i>)." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede iki ayrı kelime kullandığımız yerde İspanyolca çoğunlukla aynı sıfatı ser ya da estar ile kullanır. Anlamı fiil belirler.", l: [
          ["O çok [zeki] biri.", "{Es} muy listo."],
          ["[Hazır]{ım}, gidebiliriz.", "{Estoy} listo, podemos irnos."],
          ["Bu film çok [sıkıcı].", "Esta película {es} muy aburrida."],
          ["Çok [sıkıl]{dım}.", "{Estoy} muy aburrido."]
        ] },
        { t: "tablo", h: "Anlamı değişen sıfatlar", bas: ["Sıfat", "ser ile", "estar ile"], s: [
          ["listo", "zeki, akıllı", "hazır"],
          ["aburrido", "sıkıcı", "sıkılmış"],
          ["malo", "kötü (karakter, kalite)", "hasta; (yemek) bozuk"],
          ["rico", "zengin", "(yemek) lezzetli"],
          ["verde", "yeşil (renk)", "ham; (kişi) acemi"],
          ["despierto", "açıkgöz, uyanık", "uyanık (uyumuyor)"],
          ["cansado", "yorucu", "yorgun"],
          ["atento", "nazik, ilgili", "dikkatli, pür dikkat"],
          ["orgulloso", "kibirli", "gururlu (de: …-den)"]
        ] },
        { t: "metin", h: "Aynı sıfat, farklı bakış", m: "Anlamı değişmeyen sıfatlarda da seçim önemlidir. ser kişinin ya da şeyin <b>genel özelliğini</b>, estar <b>o anki hâlini ya da senin izlenimini</b> anlatır: <i>Ana <b>es</b> guapa</i> (Ana güzel bir kadın) ↔ <i>¡Qué guapa <b>estás</b> hoy!</i> (Bugün ne güzel olmuşsun!). <i>El café <b>es</b> caro aquí</i> (Burada kahve pahalıdır) ↔ <i>El café <b>está</b> caro este mes</i> (Kahve bu ay pahalı). <i>Mi abuelo <b>es</b> joven</i> (Dedem genç) ↔ <i>Mi abuelo <b>está</b> muy joven</i> (Dedem çok genç görünüyor)." },
        { t: "metin", h: "estar + ortaç: eylemin sonucu", m: "Bir eylem bittikten sonra kalan durumu anlatmak için <b>estar + ortaç</b> kullanılır; ortaç sıfat gibi uyum yapar: <i>La puerta <b>está abierta</b></i> (Kapı açık), <i>Las tiendas <b>están cerradas</b></i> (Dükkânlar kapalı), <i>El vaso <b>está roto</b></i> (Bardak kırık). Eylemin kendisi başka bir yapıyla anlatılır: <i>Alguien <b>ha roto</b> el vaso</i> (Biri bardağı kırmış). <b>ser + ortaç</b> (edilgen çatı) 48. dersin konusu." },
        { t: "tablo", h: "Eylem ve sonuç", bas: ["Eylem", "Sonuç (estar + ortaç)", "Türkçe"], s: [
          ["Abro la ventana.", "La ventana {está abierta}.", "Pencere açık."],
          ["Han pintado la casa.", "La casa {está pintada}.", "Ev boyanmış, boyalı."],
          ["Me he sentado.", "{Estoy sentado}.", "Oturuyorum (oturmuş durumdayım)."],
          ["Se ha muerto la planta.", "La planta {está muerta}.", "Bitki ölmüş."],
          ["He terminado el informe.", "El informe {está terminado}.", "Rapor bitti, hazır."]
        ] },
        { t: "ipucu", h: "Oturuyorum: estoy sentado", m: "Türkçedeki “oturuyorum, ayaktayım, uzanıyorum” gibi duruş bildiren cümleler İspanyolcada <b>-ndo</b> ile değil, <b>estar + ortaç</b> ile kurulur: <i>Estoy sentado</i> (Oturuyorum), <i>Están tumbados en la playa</i> (Sahilde uzanıyorlar). Ayakta durmak için <i>estar de pie</i> denir. <i>Estoy sentándome</i> ise “şu an oturmakta olduğum an” demektir ve nadir kullanılır." },
        { t: "ipucu", h: "Etkinlik ser, ölüm estar", m: "A1'den hatırla: bir etkinliğin yeri ser ile söylenir: <i>La fiesta <b>es</b> en mi casa</i>. Ölüm bir sonuç olarak görüldüğü için estar kullanılır: <i>El pez <b>está</b> muerto</i> (Balık ölmüş). Medenî durumda ikisi de doğrudur: <i>Soy / Estoy casado</i> (Evliyim)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["La tienda {es} cerrada.", "La tienda {está} cerrada.", "sonuç durumu: estar + ortaç"],
          ["{Soy} aburrido, vamos a salir.", "{Estoy} aburrido, vamos a salir.", "sıkılmış: estar; soy aburrido = sıkıcıyım"],
          ["La sopa {es} muy rica hoy.", "La sopa {está} muy rica hoy.", "o anki tat: estar"],
          ["Mi hermano {está} muy listo: siempre saca dieces.", "Mi hermano {es} muy listo: siempre saca dieces.", "zeki: ser; estar listo = hazır"],
          ["{Estoy sentándome} en el sofá.", "{Estoy sentado} en el sofá.", "duruş: estar + ortaç"]
        ] },
        { t: "diyalog", h: "Hasta arkadaş", l: [
          ["Sara", "¿Qué te pasa? {Estás} muy pálido.", "Neyin var? Çok solgunsun."],
          ["Iván", "{Estoy} malo desde ayer. Creo que la comida del restaurante {estaba} mala.", "Dünden beri hastayım. Galiba restoranın yemeği bozuktu."],
          ["Sara", "¡Qué raro! Ese restaurante {es} muy bueno.", "Ne tuhaf! O restoran çok iyidir."],
          ["Iván", "Sí, pero el pescado no {estaba} fresco.", "Evet ama balık taze değildi."],
          ["Sara", "Bueno, la farmacia {está} abierta hasta las diez. ¿Te traigo algo?", "Neyse, eczane ona kadar açık. Sana bir şey getireyim mi?"],
          ["Iván", "Sí, gracias. {Eres} muy atenta.", "Evet, teşekkürler. Çok naziksin."]
        ] },
        { t: "ornek", l: [
          ["¿{Estás} lista? El taxi ya {está} abajo.", "[Hazır] mısın? Taksi geldi, aşağıda."],
          ["Este trabajo {es} muy cansado, pero me gusta.", "Bu iş çok [yorucu] ama seviyorum."],
          ["Los niños {están} aburridos porque llueve.", "Yağmur yağdığı için çocuklar [sıkıl]{dı}."],
          ["Estas manzanas todavía {están} verdes.", "Bu elmalar daha [ham]."],
          ["Mi abuela {es} muy despierta para su edad.", "Babaannem yaşına göre çok [açıkgöz]."],
          ["Todas las ventanas {están} cerradas.", "Bütün pencereler [kapalı]."],
          ["{Estamos} muy orgullosos de ti.", "Seninle çok [gurur duy]{uyoruz}."],
          ["El concierto {es} en el estadio.", "Konser stadyumda [ol]{acak}."]
        ] },
        { t: "ozet", l: [
          "Anlamı değişen sıfatlar: <i>listo</i> (zeki / hazır), <i>aburrido</i> (sıkıcı / sıkılmış), <i>malo</i> (kötü / hasta), <i>rico</i> (zengin / lezzetli).",
          "<b>ser</b> genel özellik; <b>estar</b> o anki hâl ve izlenim: <i>es guapa / está guapa</i>.",
          "<b>estar + ortaç</b>: eylemin sonucu; ortaç uyum yapar: <i>las tiendas están cerradas</i>.",
          "Duruş bildiren durumlar: <i>estoy sentado, están tumbados, está de pie</i>.",
          "Etkinliğin yeri ser ile (<i>la fiesta es en mi casa</i>); ölüm estar ile (<i>está muerto</i>)."
        ] }
      ],
      test: [
        { s: "“Hazırım, gidebiliriz.”", o: ["Soy listo, podemos irnos.", "Estoy listo, podemos irnos.", "Estoy listando, podemos irnos."], d: 1, a: "estar listo = hazır olmak." },
        { s: "Mi hermana ___ muy lista: habla cinco idiomas.", o: ["es", "está", "esté"], d: 0, a: "Zeki: ser lista." },
        { s: "Esta película ___ aburrida; vámonos.", o: ["es", "está", "estamos"], d: 0, a: "Sıkıcı film: ser aburrida." },
        { s: "La farmacia ___ cerrada ahora.", o: ["es", "está", "son"], d: 1, a: "Sonuç durumu: estar + ortaç." },
        { s: "No voy a la fiesta: ___ malo.", o: ["soy", "estoy", "es"], d: 1, a: "Hasta olmak: estar malo. Soy malo = kötü biriyim." },
        { s: "¡Qué rica ___ la paella!", o: ["es", "está", "son"], d: 1, a: "Yemeğin o anki tadı: estar rica." },
        { s: "“Oturuyorum.” (oturmuş durumdayım)", o: ["Estoy sentado.", "Estoy sentando.", "Soy sentado."], d: 0, a: "Duruş: estar + ortaç." },
        { s: "Las ventanas están ___.", o: ["abierto", "abiertas", "abiertos"], d: 1, a: "Ortaç uyum yapar: ventanas → abiertas." },
        { s: "“Bu elmalar daha ham.”", o: ["Estas manzanas todavía son verdes.", "Estas manzanas todavía están verdes.", "Estas manzanas todavía tienen verdes."], d: 1, a: "Ham: estar verde. ser verde = yeşil renkte olmak." },
        { s: "La boda ___ en un hotel del centro.", o: ["es", "está", "hay"], d: 0, a: "Etkinliğin yapıldığı yer: ser." }
      ]
    },
    {
      id: "es-b1-09", seviye: "B1", sure: 12,
      baslik: "Fiil öbekleri 2: llevar + -ndo, estar a punto de…",
      kisa: "llevo dos años estudiando · estoy a punto de salir · voy entendiendo",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 27) <i>acabar de, empezar a, volver a, dejar de, seguir + -ndo, soler</i> gibi kalıpları öğrendin. B1'de eylemin süresini, eşiğini ve gelişimini anlatan yeni kalıplar ekliyoruz: <b>llevar + -ndo</b> (…-dır yapıyorum), <b>estar a punto de</b> (…-mek üzere), <b>ir + -ndo</b> (gitgide), <b>terminar de</b>, <b>tardar en</b>, <b>seguir sin</b> ve tahmin bildiren <b>deber de</b>. Kural yine aynı: yalnızca ilk fiil çekilir." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede süre ve eşik çoğunlukla eklerle verilir: <b>-dır, -mek üzere</b>. İspanyolcada bir yardımcı fiil öbeği kullanılır.", l: [
          ["İki yıl{dır} İspanyolca [çalış]{ıyorum}.", "{Llevo} dos años {estudiando} español."],
          ["[Çık]{mak üzereyim}.", "{Estoy a punto de} salir."],
          ["Yavaş yavaş [anla]{maya başlıyorum}.", "{Voy entendiendo} poco a poco."],
          ["Üç ay{dır} sigara [iç]{miyorum}.", "{Llevo} tres meses {sin fumar}."]
        ] },
        { t: "tablo", h: "Yeni kalıplar", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["{llevar} + süre + -ndo", "…-dır …-yor", "{Llevo} un año {viviendo} aquí."],
          ["{llevar} + süre + sin + mastar", "…-dır …-mıyor", "{Llevo} dos días {sin dormir}."],
          ["{estar a punto de} + mastar", "…-mek üzere", "El tren {está a punto de} salir."],
          ["{ir} + -ndo", "gitgide, yavaş yavaş", "{Voy mejorando}."],
          ["{terminar de} + mastar", "…-meyi bitirmek", "¿{Has terminado de} comer?"],
          ["{tardar} + süre + {en} + mastar", "…-mesi … sürmek", "{Tardo} veinte minutos {en} llegar."],
          ["{seguir sin} + mastar", "hâlâ …-medi", "{Sigo sin} entenderlo."],
          ["{echarse a} + mastar", "birden …-meye başlamak", "{Se echó a} llorar."]
        ] },
        { t: "metin", h: "llevar + -ndo ve desde hace", m: "A2'de (Ders 29) süreyi <i>desde hace</i> ile anlattın: <i>Estudio español <b>desde hace</b> dos años</i>. <b>llevar + -ndo</b> aynı anlamı daha doğal verir: <i><b>Llevo</b> dos años <b>estudiando</b> español</i>. Soru: <i>¿Cuánto tiempo <b>llevas</b> esperando?</i> (Ne zamandır bekliyorsun?). Geçmişte <i>llevaba</i> kullanılır: <i>Llevaba una hora esperando cuando llegó</i> (O geldiğinde bir saattir bekliyordum)." },
        { t: "ipucu", h: "llevar + yer: …-dır burada", m: "Fiil açıkça belli olduğunda <i>-ndo</i> düşebilir: <i>¿Cuánto tiempo <b>llevas</b> en Madrid?</i> (Ne zamandır Madrid'desin?), <i><b>Llevo</b> tres años en esta empresa</i> (Üç yıldır bu şirketteyim). Bu kullanım çok yaygındır." },
        { t: "metin", h: "ir + -ndo: gitgide", m: "<b>ir + -ndo</b> yavaş yavaş ilerleyen bir değişimi anlatır: <i>El enfermo <b>va mejorando</b></i> (Hasta gitgide iyileşiyor), <i><b>Voy acostumbrándome</b> al horario</i> (Saatlere yavaş yavaş alışıyorum). <i>poco a poco</i> (yavaş yavaş) ile sık kullanılır. A2'deki <b>seguir + -ndo</b> ise değişim değil devam anlatır: <i>Sigue lloviendo</i> (Hâlâ yağmur yağıyor)." },
        { t: "ipucu", h: "acabar de mı, terminar de mı?", m: "<i>acabar de</i> + mastar (A2) “az önce” demektir: <i>Acabo de comer</i> (Az önce yedim). <i>terminar de</i> ise bir işi sonuna kadar bitirmeyi anlatır: <i>Termino de comer y salgo</i> (Yemeğimi bitirip çıkıyorum). Olumsuz <i>no terminar de</i> “tam olarak …-mamak” anlamına da gelir: <i>No termino de entenderlo</i> (Tam anlayamıyorum)." },
        { t: "metin", h: "deber mi, deber de mi?", m: "<b>deber + mastar</b> zorunluluk ve tavsiye bildirir: <i><b>Debes</b> descansar</i> (Dinlenmelisin). <b>deber de + mastar</b> ise tahmindir: <i><b>Debe de</b> tener cuarenta años</i> (Kırk yaşında olmalı, herhalde). Konuşmada tahmin için de çoğu zaman yalnız <i>deber</i> duyulur ama özenli dilde ayrım korunur. 33. dersteki tahmin bildiren gelecek zamanla karşılaştır: <i>Tendrá cuarenta años</i>." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["{Estoy} dos años estudiando español.", "{Llevo} dos años estudiando español.", "süre: llevar + -ndo"],
          ["Llevo tres meses {no fumando}.", "Llevo tres meses {sin fumar}.", "olumsuz süre: llevar + sin + mastar"],
          ["Tardo una hora {para} llegar.", "Tardo una hora {en} llegar.", "tardar en + mastar"],
          ["El tren está a punto {a} salir.", "El tren está a punto {de} salir.", "estar a punto de"],
          ["{Acabo} de leer el libro ayer.", "{Terminé} de leer el libro ayer.", "acabo de = az önce; ayer ile çelişir"]
        ] },
        { t: "diyalog", h: "Bekleyiş", l: [
          ["Nuria", "¿Dónde estás? {Llevo} media hora {esperándote}.", "Neredesin? Yarım saattir seni bekliyorum."],
          ["Marcos", "Perdona, {estoy a punto de} llegar. El autobús {ha tardado} mucho {en} venir.", "Kusura bakma, varmak üzereyim. Otobüsün gelmesi çok uzun sürdü."],
          ["Nuria", "Siempre dices lo mismo. ¿Ya {has terminado de} trabajar?", "Hep aynı şeyi söylüyorsun. İşini bitirdin mi?"],
          ["Marcos", "Sí, pero {sigo sin} encontrar las llaves de casa.", "Evet ama evin anahtarlarını hâlâ bulamadım."],
          ["Nuria", "¡No me digas! {Debes de} tenerlas en la mochila.", "Deme! Sırt çantandadır herhalde."],
          ["Marcos", "Ah, sí... ¡aquí están! Te veo en cinco minutos.", "Ah, evet... işte buradalar! Beş dakikaya oradayım."]
        ] },
        { t: "ornek", l: [
          ["¿Cuánto tiempo {llevas trabajando} aquí?", "Ne zamandır burada [çalış]{ıyorsun}?"],
          ["{Llevo} una semana {sin ver} a mis padres.", "Bir haftadır annemleri [gör]{medim}."],
          ["La película {está a punto de} empezar.", "Film [başla]{mak üzere}."],
          ["Mi español {va mejorando} poco a poco.", "İspanyolcam yavaş yavaş [geliş]{iyor}."],
          ["{Tardé} dos horas {en} hacer los deberes.", "Ödevleri [yap]{mam} iki saat sürdü."],
          ["Cuando {terminé de} cenar, me fui a la cama.", "Yemeğimi [bitir]{ince} yattım."],
          ["Al oír la noticia, {se echó a} reír.", "Haberi duyunca birden [gül]{meye başladı}."],
          ["No contesta; {debe de} estar dormido.", "Cevap vermiyor; [uyu]{yordur} herhalde."]
        ] },
        { t: "ozet", l: [
          "<b>llevar</b> + süre + -ndo: …-dır …-yor; olumsuz: <b>llevar</b> + süre + <b>sin</b> + mastar.",
          "<b>estar a punto de</b> + mastar: …-mek üzere.",
          "<b>ir + -ndo</b>: gitgide; <b>seguir + -ndo</b>: hâlâ; <b>seguir sin</b> + mastar: hâlâ …-medi.",
          "<b>tardar</b> + süre + <b>en</b>: …-mesi … sürmek; <b>terminar de</b>: bitirmek; <b>echarse a</b>: birden başlamak.",
          "<b>deber</b> + mastar: zorunluluk; <b>deber de</b> + mastar: tahmin."
        ] }
      ],
      test: [
        { s: "“İki yıldır İspanyolca öğreniyorum.”", o: ["Estoy dos años aprendiendo español.", "Llevo dos años aprendiendo español.", "Tengo dos años aprendiendo español."], d: 1, a: "Süre: llevar + -ndo." },
        { s: "Llevo una semana ___ café. (içmiyorum)", o: ["no tomando", "sin tomar", "sin tomando"], d: 1, a: "llevar + süre + sin + mastar." },
        { s: "El avión está a punto ___ despegar.", o: ["a", "de", "para"], d: 1, a: "estar a punto de + mastar." },
        { s: "Tardo media hora ___ llegar al trabajo.", o: ["en", "para", "de"], d: 0, a: "tardar en + mastar." },
        { s: "“Gitgide iyileşiyor.”", o: ["Va mejorando.", "Acaba de mejorar.", "Deja de mejorar."], d: 0, a: "Gitgide değişim: ir + -ndo." },
        { s: "“Hâlâ anlamadım.”", o: ["Sigo sin entender.", "Sigo no entendiendo.", "Llevo entender."], d: 0, a: "seguir sin + mastar." },
        { s: "No contesta; ___ estar en el metro. (herhalde)", o: ["acaba de", "debe de", "vuelve a"], d: 1, a: "Tahmin: deber de + mastar." },
        { s: "Termino ___ cenar y te llamo.", o: ["de", "a", "en"], d: 0, a: "terminar de + mastar." },
        { s: "“Ne zamandır bekliyorsun?”", o: ["¿Cuánto tiempo eres esperando?", "¿Cuánto tiempo llevas esperando?", "¿Cuánto tiempo estás esperado?"], d: 1, a: "Süre sorusu: ¿Cuánto tiempo llevas + -ndo?" },
        { s: "Al ver el regalo, ___ a llorar de alegría.", o: ["se echó", "acabó", "llevó"], d: 0, a: "Birden başlamak: echarse a + mastar." }
      ]
    },
    {
      id: "es-b1-10", seviye: "B1", sure: 12,
      baslik: "gustar gibi fiiller: me duele, me queda, me apetece",
      kisa: "me interesa · me duele la cabeza · te queda bien · me cae bien · me gusta que…",
      bolumler: [
        { t: "metin", m: "A1'de (Ders 11) <i>gustar</i> ve <i>encantar</i> fiillerini öğrendin: sevilen şey özne, seven kişi zamirdir. İspanyolcada aynı kalıpla çalışan çok sayıda fiil var: <i>interesar, importar, molestar, preocupar, doler, quedar, faltar, sobrar, apetecer, caer bien</i>. B1'de bu fiillerin anlamlarını, <b>a + kişi</b> ile vurguyu ve arkadan cümle geldiğinde kullanılan <b>que + subjuntivo</b>'yu öğreniyorsun." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede de bu fiillerin çoğu aynı mantıkla kurulur: “Başım ağrıyor” derken ağrıyan baş, “Bu ceket sana yakışıyor” derken yakışan ceket öznedir. Kişi Türkçede iyelik ekiyle ya da -e hâliyle, İspanyolcada zamirle gösterilir.", l: [
          ["[Baş]{ım} ağrıyor.", "{Me} duele la cabeza."],
          ["Bu ceket sana çok [yakış]{ıyor}.", "Esta chaqueta {te} queda muy bien."],
          ["İki euro{m} kaldı.", "{Me} quedan dos euros."],
          ["Canım dondurma [çek]{iyor}.", "{Me} apetece un helado."]
        ] },
        { t: "tablo", h: "gustar gibi çalışan fiiller", bas: ["Fiil", "Anlamı", "Örnek"], s: [
          ["interesar", "ilgisini çekmek", "{Me interesa} la historia."],
          ["importar", "umurunda olmak, önemli olmak", "No {me importa} el precio."],
          ["molestar", "rahatsız etmek", "¿{Te molesta} la música?"],
          ["preocupar", "endişelendirmek", "{Nos preocupa} el examen."],
          ["doler", "ağrımak", "{Le duelen} los pies."],
          ["faltar", "eksik olmak", "{Me falta} tiempo."],
          ["sobrar", "artmak, fazla olmak", "{Nos sobra} comida."],
          ["apetecer", "canı çekmek (İspanya)", "¿{Te apetece} un café?"],
          ["quedar", "kalmak; yakışmak", "{Me quedan} diez euros. · {Te queda} bien."],
          ["caer bien / mal", "(biri) sempatik gelmek / gelmemek", "Tu hermano {me cae} muy bien."]
        ] },
        { t: "ipucu", h: "Tekil mi, çoğul mu?", m: "Fiil, sevilen ya da ağrıyan şeye göre çekilir; kişiye göre değil: <i>Me <b>duele</b> la espalda</i> (Sırtım ağrıyor) ↔ <i>Me <b>duelen</b> las piernas</i> (Bacaklarım ağrıyor). Vücut parçalarında iyelik sıfatı değil artikel kullanılır: <i>Me duele <b>la</b> cabeza</i>; <i>mi cabeza</i> denmez." },
        { t: "metin", h: "a + kişi: vurgu ve açıklık", m: "Kişiyi vurgulamak ya da netleştirmek için başa <b>a + kişi</b> eklenir; zamir yine kalır: <i><b>A mí</b> me interesa, pero <b>a mi novio</b> no</i> (Benim ilgimi çekiyor ama sevgilimin değil). Özellikle <i>le / les</i> kimi kastettiğini netleştirmek için çok kullanılır: <i><b>A Ana</b> le duele la muela</i> (Ana'nın dişi ağrıyor). Kısa cevaplar da bu yolla verilir: <i>—Me encanta. —<b>A mí también</b>.</i> / <i>—No me gusta. —<b>A mí sí</b>.</i>" },
        { t: "metin", h: "Arkadan cümle gelirse: que + subjuntivo", m: "Bu fiillerden sonra fiil gelirse iki durum var. Aynı kişi yapıyorsa mastar: <i>Me gusta <b>cocinar</b></i> (Yemek yapmayı severim). Başka biri yapıyorsa <b>que + subjuntivo</b> (36. dersteki duygu kuralı): <i>Me gusta que <b>cocines</b> tú</i> (Senin yemek yapman hoşuma gidiyor), <i>Me molesta que la gente <b>grite</b></i> (İnsanların bağırması beni rahatsız ediyor), <i>¿Te importa que <b>abra</b> la ventana?</i> (Pencereyi açmamın sakıncası var mı?)." },
        { t: "tablo", h: "parecer: düşünce ve değerlendirme", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["me parece que + indicativo", "bence, bana öyle geliyor ki", "Me parece que {tiene} razón."],
          ["no me parece que + subjuntivo", "sanmıyorum", "No me parece que {sea} buena idea."],
          ["me parece bien / mal que + subjuntivo", "…-mesini doğru / yanlış buluyorum", "Me parece bien que {vengas}."],
          ["¿Qué te parece…?", "… hakkında ne düşünüyorsun?", "¿Qué te {parece} el plan?"]
        ] },
        { t: "ipucu", h: "quedar'ın üç anlamı", m: "<i>quedar</i> bu kalıpta üç farklı anlam taşır: <b>kalmak</b> (<i>Nos quedan dos días</i>: İki günümüz kaldı), <b>yakışmak, olmak</b> (<i>Esa camisa te queda grande</i>: O gömlek sana büyük geliyor) ve <b>uzak / yakın olmak</b> (<i>La estación me queda lejos</i>: İstasyon bana uzak). Zamirsiz <i>quedar</i> “buluşmak” demektir: <i>¿Quedamos a las seis?</i> (Altıda buluşalım mı?)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Yo {duelo} la cabeza.", "{Me duele} la cabeza.", "ağrıyan şey özne: me duele"],
          ["Me {duele} los ojos.", "Me {duelen} los ojos.", "çoğul özne: duelen"],
          ["Me duele {mi} cabeza.", "Me duele {la} cabeza.", "vücut parçasında artikel"],
          ["Me molesta que {haces} ruido.", "Me molesta que {hagas} ruido.", "duygu + que: subjuntivo"],
          ["{A Ana duele} la espalda.", "{A Ana le duele} la espalda.", "a + kişi varken de zamir kalır"]
        ] },
        { t: "diyalog", h: "Mağazada", l: [
          ["Dependienta", "¿Qué tal le {quedan} los pantalones?", "Pantolon nasıl oldu?"],
          ["Óscar", "Me {quedan} un poco largos. Y la camisa me {queda} pequeña.", "Biraz uzun geldi. Gömlek de küçük geldi."],
          ["Dependienta", "¿Le {apetece} probar una talla más?", "Bir beden büyüğünü denemek ister misiniz?"],
          ["Óscar", "Sí, gracias. Es que a mí me {importa} mucho ir cómodo.", "Evet, teşekkürler. Benim için rahat olmak çok önemli."],
          ["Dependienta", "Claro. ¿Le {parece} bien este color?", "Tabii. Bu renk sizce iyi mi?"],
          ["Óscar", "Perfecto. Ahora solo me {falta} encontrar unos zapatos.", "Mükemmel. Şimdi bir tek ayakkabı bulmam kaldı."]
        ] },
        { t: "ornek", l: [
          ["{Me interesan} mucho las culturas asiáticas.", "Asya kültürleri çok [ilgimi çek]{iyor}."],
          ["¿{Os apetece} ir al cine esta noche?", "Bu akşam sinemaya [git]{meye} ne dersiniz?"],
          ["A mi abuela {le duelen} las rodillas.", "Babaannemin dizleri [ağrı]{yor}."],
          ["{Nos faltan} dos sillas para la cena.", "Akşam yemeği için iki sandalye{miz} eksik."],
          ["Esa chaqueta {te queda} genial.", "O ceket sana harika [yakış]{ıyor}."],
          ["Tu jefe {me cae} muy bien.", "Patronun bana çok sempatik [gel]{iyor}."],
          ["No {me importa} que llegues tarde.", "Geç [kal]{man} umurumda değil."],
          ["¿Qué {te parece} si cenamos fuera?", "Dışarıda yemek [ye]{sek} ne dersin?"]
        ] },
        { t: "ozet", l: [
          "<i>interesar, importar, molestar, preocupar, doler, faltar, sobrar, apetecer, quedar, caer bien</i>: gustar gibi kurulur.",
          "Fiil şeye göre çekilir: <i>me duele / me duelen</i>; vücut parçasında artikel: <i>la cabeza</i>.",
          "Vurgu ve açıklık için <b>a + kişi</b>; zamir yine kalır: <i>A Ana le duele</i>.",
          "Aynı kişi → mastar (<i>me gusta cocinar</i>); başka kişi → <b>que + subjuntivo</b> (<i>me gusta que cocines</i>).",
          "<i>me parece que</i> + indicativo; <i>no me parece que, me parece bien que</i> + subjuntivo."
        ] }
      ],
      test: [
        { s: "Me ___ la cabeza.", o: ["duele", "duelen", "duelo"], d: 0, a: "Tekil özne (la cabeza): duele." },
        { s: "Me ___ los pies.", o: ["duele", "duelen", "dolen"], d: 1, a: "Çoğul özne: duelen." },
        { s: "“Canım kahve çekiyor.”", o: ["Yo apetezco un café.", "Me apetece un café.", "Me apetezco un café."], d: 1, a: "apetecer gustar gibi: me apetece." },
        { s: "“Bu ceket sana yakışıyor.”", o: ["Esta chaqueta te queda bien.", "Esta chaqueta quedas bien.", "Te quedas bien esta chaqueta."], d: 0, a: "quedar bien: yakışmak; şey özne." },
        { s: "A Pedro ___ interesa la política.", o: ["se", "le", "lo"], d: 1, a: "a + kişi varken de zamir kalır: A Pedro le interesa." },
        { s: "Me molesta que la gente ___ en el cine.", o: ["habla", "hable", "hablar"], d: 1, a: "Başka kişi: que + subjuntivo." },
        { s: "Me gusta ___ los domingos. (ben)", o: ["que cocine", "cocinar", "cocino"], d: 1, a: "Aynı kişi: mastar." },
        { s: "“Bana öyle geliyor ki haklı.”", o: ["Me parece que tiene razón.", "Me parece que tenga razón.", "Parezco que tiene razón."], d: 0, a: "me parece que + indicativo." },
        { s: "“İki günümüz kaldı.”", o: ["Nos quedan dos días.", "Quedamos dos días.", "Nos queda dos días."], d: 0, a: "quedar: kalmak; çoğul özne → quedan." },
        { s: "—Me encanta este grupo. —¡A mí ___! (ben de)", o: ["también", "tampoco", "sí"], d: 0, a: "Olumluya katılmak: a mí también." }
      ]
    },
    {
      id: "es-b1-11", seviye: "B1", sure: 12,
      baslik: "Zamirle anlamı değişen fiiller ve “olmak” fiilleri",
      kisa: "ir / irse · acordar / acordarse · ponerse nervioso · hacerse rico",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 15) dönüşlü fiilleri öğrendin: <i>me levanto, te duchas</i>. Bazı fiiller ise zamir alınca <b>anlam değiştirir</b>: <i>ir</i> (gitmek) ↔ <i>irse</i> (ayrılmak, çıkıp gitmek), <i>acordar</i> (kararlaştırmak) ↔ <i>acordarse</i> (hatırlamak). Bu derste en sık kullanılan çiftleri ve Türkçedeki “olmak, -leşmek” anlamını veren dört fiili öğreniyorsun: <b>ponerse, volverse, hacerse, quedarse</b>." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede de bir ek fiilin anlamını değiştirir: “görmek / görünmek”, “bulmak / bulunmak”. İspanyolcada bu işi dönüşlü zamir yapar.", l: [
          ["Okula [gid]{iyorum}.", "{Voy} al colegio."],
          ["Ben [kalk]{ıyorum}, hoşça kal!", "¡{Me voy}, adiós!"],
          ["Toplantı tarihini [kararlaştır]{dık}.", "{Acordamos} la fecha de la reunión."],
          ["Adını [hatırla]{mıyorum}.", "No {me acuerdo} de su nombre."]
        ] },
        { t: "tablo", h: "Anlamı değişen çiftler", bas: ["Zamirsiz", "Zamirli", "Örnek"], s: [
          ["ir: gitmek", "irse: ayrılmak, çıkıp gitmek", "Ya {me voy}."],
          ["quedar: buluşmak", "quedarse: (bir yerde) kalmak", "Hoy {me quedo} en casa."],
          ["acordar: kararlaştırmak", "acordarse de: hatırlamak", "¿{Te acuerdas de} mí?"],
          ["parecer: gibi görünmek", "parecerse a: benzemek", "{Me parezco a} mi madre."],
          ["llevar: taşımak, götürmek", "llevarse bien / mal: iyi / kötü anlaşmak", "{Nos llevamos} muy bien."],
          ["dormir: uyumak", "dormirse: uyuyakalmak, uykuya dalmak", "{Me dormí} en el sofá."],
          ["negar: inkâr etmek", "negarse a: reddetmek", "{Se negó a} pagar."],
          ["despedir: işten çıkarmak", "despedirse de: vedalaşmak", "{Me despedí de} todos."]
        ] },
        { t: "ipucu", h: "Edatı unutma", m: "Zamirli biçimlerin çoğu bir edatla birlikte gelir: <i>acordarse <b>de</b></i>, <i>parecerse <b>a</b></i>, <i>negarse <b>a</b></i>, <i>despedirse <b>de</b></i>. Bunları edatıyla birlikte ezberle: <i>Me acuerdo <b>de</b> ti</i> (Seni hatırlıyorum); <i>Me acuerdo ti</i> yanlıştır." },
        { t: "metin", h: "comerse, beberse: tamamen", m: "Bazı fiillerde zamir anlamı değiştirmez, <b>tamamlanma ve vurgu</b> katar: <i>Comí pasta</i> (Makarna yedim) ↔ <i><b>Me comí</b> toda la pasta</i> (Makarnanın hepsini yiyip bitirdim). Aynı şekilde <i>beberse</i> (içip bitirmek), <i>leerse</i> (okuyup bitirmek), <i>saberse</i> (ezbere bilmek): <i>Me sé la canción de memoria</i> (Şarkıyı ezbere biliyorum)." },
        { t: "metin", h: "Türkçedeki “olmak”: dört fiil", m: "Türkçede “sinirli oldu, zengin oldu, deli oldu, işsiz kaldı” cümlelerinin çoğunda “olmak” kullanılır. İspanyolca değişimin türüne göre farklı fiiller seçer: ani ve geçici değişim <b>ponerse</b>, köklü değişim <b>volverse</b>, emekle gelen değişim <b>hacerse</b>, bir olayın sonucu <b>quedarse</b>. İsimle bir şeye dönüşmek için <b>convertirse en</b>." },
        { t: "tablo", h: "Değişim fiilleri", bas: ["Fiil", "Ne tür değişim?", "Örnek"], s: [
          ["ponerse + sıfat", "ani, geçici (duygu, renk, sağlık)", "{Se puso} nervioso. (Gerildi.)"],
          ["volverse + sıfat", "köklü, çoğunlukla beklenmedik (karakter)", "{Se ha vuelto} muy egoísta. (Çok bencil oldu.)"],
          ["hacerse + sıfat / isim", "emekle ya da zamanla (meslek, din, zenginlik)", "{Se hizo} rico. (Zengin oldu.)"],
          ["quedarse + sıfat", "bir olayın sonucu kalan durum", "{Se quedó} sin trabajo. (İşsiz kaldı.)"],
          ["convertirse en + isim", "bir şeye dönüşmek", "{Se convirtió en} una estrella. (Yıldız oldu.)"]
        ] },
        { t: "ipucu", h: "Kalıplaşmış kullanımlar", m: "Bazı sözler kalıplaşmıştır: <i>ponerse rojo</i> (kızarmak), <i>ponerse enfermo</i> (hastalanmak), <i>volverse loco</i> (çıldırmak), <i>hacerse mayor</i> (büyümek, yaşlanmak), <i>quedarse embarazada</i> (hamile kalmak), <i>quedarse dormido</i> (uyuyakalmak). Mesleğe ulaşmak için <i>llegar a ser</i> da kullanılır: <i>Llegó a ser director</i> (Sonunda müdür oldu)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["No {acuerdo} de su nombre.", "No {me acuerdo} de su nombre.", "hatırlamak: acordarse de"],
          ["{Me parezco} mi padre.", "{Me parezco a} mi padre.", "parecerse a: edat şart"],
          ["Ayer {fui} de la fiesta a las doce.", "Ayer {me fui} de la fiesta a las doce.", "bir yerden ayrılmak: irse"],
          ["{Se hizo} rojo de vergüenza.", "{Se puso} rojo de vergüenza.", "ani, geçici değişim: ponerse"],
          ["{Se puso} médico en 2010.", "{Se hizo} médico en 2010.", "meslek, emek: hacerse"]
        ] },
        { t: "diyalog", h: "Eski komşu", l: [
          ["Rosa", "¿{Te acuerdas de} Luis, el vecino del tercero?", "Üçüncü kattaki komşu Luis'i hatırlıyor musun?"],
          ["Tomás", "¡Claro! {Se parecía} mucho a su padre.", "Tabii! Babasına çok benzerdi."],
          ["Rosa", "Pues {se ha hecho} rico con una empresa de aplicaciones.", "İşte, bir uygulama şirketiyle zengin olmuş."],
          ["Tomás", "¡No me digas! ¿Y {se ha vuelto} creído?", "Deme! Peki kendini beğenmiş biri mi oldu?"],
          ["Rosa", "No, sigue igual. Ayer {se puso} muy contento al verme.", "Hayır, hâlâ aynı. Dün beni görünce çok sevindi."],
          ["Tomás", "Me alegro. Siempre {nos llevamos} bien con él.", "Sevindim. Onunla hep iyi anlaştık."]
        ] },
        { t: "ornek", l: [
          ["Es tarde; {me voy} a casa.", "Geç oldu; ben eve [gid]{iyorum}."],
          ["{Me quedé} en casa todo el fin de semana.", "Bütün hafta sonu evde [kal]{dım}."],
          ["No {me acuerdo de} dónde dejé las llaves.", "Anahtarları nereye bıraktığımı [hatırla]{mıyorum}."],
          ["Mi hermana {se parece} mucho a mi abuela.", "Kız kardeşim babaanneme çok [benz]{iyor}."],
          ["{Me dormí} y llegué tarde al trabajo.", "[Uyuyakal]{dım} ve işe geç kaldım."],
          ["Cuando vio el precio, {se puso} pálido.", "Fiyatı görünce rengi [at]{tı}."],
          ["Con los años, {se ha vuelto} más tranquilo.", "Yıllar içinde daha sakin biri [ol]{du}."],
          ["{Se quedó} sin batería en mitad del viaje.", "Yolculuğun ortasında şarjsız [kal]{dı}."]
        ] },
        { t: "ozet", l: [
          "Zamirle anlam değişir: <i>ir / irse, quedar / quedarse, acordar / acordarse, parecer / parecerse</i>.",
          "Edatıyla ezberle: <i>acordarse de, parecerse a, negarse a, despedirse de</i>.",
          "<i>comerse, beberse, saberse</i>: tamamlanma ve vurgu.",
          "Ani, geçici değişim <b>ponerse</b>; köklü <b>volverse</b>; emekle <b>hacerse</b>; sonuç <b>quedarse</b>.",
          "İsimle dönüşüm: <b>convertirse en</b>; mesleğe ulaşmak: <i>hacerse, llegar a ser</i>."
        ] }
      ],
      test: [
        { s: "“Adını hatırlamıyorum.”", o: ["No acuerdo su nombre.", "No me acuerdo de su nombre.", "No me acuerdo su nombre."], d: 1, a: "acordarse de: hatırlamak." },
        { s: "“Annene çok benziyorsun.”", o: ["Te pareces mucho a tu madre.", "Pareces mucho tu madre.", "Te pareces mucho tu madre."], d: 0, a: "parecerse a: benzemek." },
        { s: "“Geç oldu, ben gidiyorum.”", o: ["Es tarde, voy.", "Es tarde, me voy.", "Es tarde, me ir."], d: 1, a: "Ayrılmak: irse → me voy." },
        { s: "Al ver al profesor, el niño ___ rojo.", o: ["se puso", "se hizo", "se volvió"], d: 0, a: "Ani, geçici değişim: ponerse." },
        { s: "Con la fama, ___ muy arrogante.", o: ["se puso", "se ha vuelto", "se ha quedado"], d: 1, a: "Köklü karakter değişimi: volverse." },
        { s: "Después de muchos años de trabajo, ___ rico.", o: ["se puso", "se hizo", "se quedó"], d: 1, a: "Emekle gelen değişim: hacerse." },
        { s: "Mi abuelo ___ ciego a los ochenta años.", o: ["se quedó", "se puso", "se hizo"], d: 0, a: "Bir olayın sonucu kalan durum: quedarse." },
        { s: "“Kanepede uyuyakaldım.”", o: ["Dormí en el sofá.", "Me dormí en el sofá.", "Me dormé en el sofá."], d: 1, a: "Uykuya dalmak: dormirse." },
        { s: "Hangisi “hepsini yiyip bitirdi” vurgusunu verir?", o: ["Comió la tarta.", "Se comió toda la tarta.", "Come tarta."], d: 1, a: "Tamamlanma vurgusu: comerse." },
        { s: "La oruga ___ una mariposa.", o: ["se convirtió en", "se puso", "se hizo en"], d: 0, a: "İsme dönüşmek: convertirse en." }
      ]
    },
    {
      id: "es-b1-12", seviye: "B1", sure: 12,
      baslik: "İlgi zamirleri 2: el que, quien, cuyo ve subjuntivo",
      kisa: "la casa en la que vivo · la persona con quien hablé · cuyo · busco un piso que tenga…",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 30) <i>que, donde, lo que</i> ile isimleri nitelemeyi öğrendin ve <i>en el que</i> yapısını tanıdın. B1'de edatlı ilgi zamirlerini (<b>el que, la que, quien</b>), sahiplik bildiren <b>cuyo</b>'yu ve ilgi cümlesinde <b>subjuntivo</b>'nun ne zaman geldiğini öğreniyorsun: <i>Tengo un piso que <b>tiene</b> terraza</i> ↔ <i>Busco un piso que <b>tenga</b> terraza</i>." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede edat ve sahiplik fiile ve isme ek olarak gelir: “birlikte çalıştığım kişi”, “babası doktor olan çocuk”. İspanyolcada edat ilgi zamirinin önüne geçer; sahiplik için cuyo kullanılır.", l: [
          ["[Yaşa]{dığım} ev", "la casa {en la que} vivo"],
          ["Birlikte [çalış]{tığım} kişi", "la persona {con quien} trabajo"],
          ["Babası doktor [ol]{an} çocuk", "el niño {cuyo} padre es médico"],
          ["Terası [ol]{an} bir daire arıyorum.", "Busco un piso que {tenga} terraza."]
        ] },
        { t: "tablo", h: "Edat + ilgi zamiri", bas: ["Yapı", "Örnek", "Türkçe"], s: [
          ["en el que / en la que", "el barrio {en el que} crecí", "büyüdüğüm mahalle"],
          ["con el que / con la que", "la amiga {con la que} viajé", "birlikte seyahat ettiğim arkadaş"],
          ["de los que / de las que", "los libros {de los que} te hablé", "sana bahsettiğim kitaplar"],
          ["para el que / para la que", "la empresa {para la que} trabajo", "çalıştığım şirket"],
          ["a quien / a quienes", "el chico {a quien} conociste", "tanıştığın çocuk"],
          ["con quien / con quienes", "la persona {con quien} hablé", "konuştuğum kişi"]
        ] },
        { t: "ipucu", h: "Artikel ismin cinsine uyar", m: "Edatlı yapıda artikel, nitelenen isimle uyum yapar: <i>el barrio en <b>el</b> que…</i>, <i>la ciudad en <b>la</b> que…</i>, <i>los amigos con <b>los</b> que…</i>, <i>las calles por <b>las</b> que…</i>. Kişilerde <i>el que</i> yerine <b>quien / quienes</b> de kullanılabilir: <i>la persona con quien hablé = la persona con la que hablé</i>." },
        { t: "metin", h: "Edat başa gelir", m: "Türkçede edat anlamı fiile eklenir (“konuştuğum kişi”); İspanyolcada edat ilgi zamirinin <b>önüne</b> geçer ve asla cümlenin sonunda kalmaz: <i>la chica <b>con</b> la que salgo</i> (çıktığım kız). <i>la chica que salgo con</i> İspanyolcada mümkün değildir." },
        { t: "metin", h: "cuyo: sahiplik", m: "<b>cuyo</b> “…-ın …-sı olan” anlamı verir. Sahip olunan şeyle uyum yapar, sahiple değil: <i>el escritor <b>cuya</b> novela leí</i> (romanını okuduğum yazar), <i>la vecina <b>cuyos</b> hijos estudian aquí</i> (çocukları burada okuyan komşu). Konuşmada daha az, yazı dilinde sık kullanılır." },
        { t: "tablo", h: "cuyo, cuya, cuyos, cuyas", bas: ["Sahip olunan", "Biçim", "Örnek"], s: [
          ["eril tekil", "{cuyo}", "el hombre {cuyo} coche robaron"],
          ["dişil tekil", "{cuya}", "el país {cuya} capital es Ankara"],
          ["eril çoğul", "{cuyos}", "la profesora {cuyos} alumnos aprobaron"],
          ["dişil çoğul", "{cuyas}", "el pueblo {cuyas} casas son blancas"]
        ] },
        { t: "metin", h: "Bilinen mi, aranan mı?", m: "İlgi cümlesindeki fiil, nitelenen şeyin <b>var olduğu biliniyorsa</b> indicativo olur: <i>Tengo un compañero que <b>habla</b> chino</i> (Çince konuşan bir iş arkadaşım var). Aranan, istenen ya da var olup olmadığı bilinmeyen bir şeyse <b>subjuntivo</b> gelir: <i>Busco a alguien que <b>hable</b> chino</i> (Çince konuşan birini arıyorum). Yokluk bildirirken de subjuntivo: <i>No hay nadie que <b>sepa</b> la respuesta</i> (Cevabı bilen kimse yok)." },
        { t: "tablo", h: "Bilinen ve aranan", bas: ["Indicativo (bilinen)", "Subjuntivo (aranan, olmayan)"], s: [
          ["Vivo en un piso que {tiene} jardín.", "Quiero un piso que {tenga} jardín."],
          ["Conozco a alguien que {sabe} cocinar.", "¿Conoces a alguien que {sepa} cocinar?"],
          ["Hay un bar que {abre} hasta tarde.", "No hay ningún bar que {abra} hasta tarde."],
          ["Te doy el libro que {quieres}. (belli kitap)", "Te doy el libro que {quieras}. (hangisini istersen)"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["la casa {que} vivo", "la casa {en la que} vivo", "edat ilgi zamirinin önüne gelir"],
          ["el amigo {con que} viajé", "el amigo {con el que} viajé", "edattan sonra el que / quien"],
          ["el hombre {cuya} hijo es piloto", "el hombre {cuyo} hijo es piloto", "cuyo sahip olunanla uyar: hijo → cuyo"],
          ["Busco un hotel que {está} cerca de la playa.", "Busco un hotel que {esté} cerca de la playa.", "aranan şey: subjuntivo"],
          ["No hay nadie que {sabe} hacerlo.", "No hay nadie que {sepa} hacerlo.", "yokluk: subjuntivo"]
        ] },
        { t: "diyalog", h: "Ev arayışı", l: [
          ["Agente", "¿Qué tipo de piso busca?", "Nasıl bir daire arıyorsunuz?"],
          ["Irene", "Busco un piso que {tenga} dos habitaciones y que no {sea} muy caro.", "İki odalı ve çok pahalı olmayan bir daire arıyorum."],
          ["Agente", "Tengo uno {en el que} vivió un pintor famoso.", "Ünlü bir ressamın yaşadığı bir dairem var."],
          ["Irene", "¿El pintor {cuyos} cuadros están en el museo?", "Tabloları müzede olan ressam mı?"],
          ["Agente", "Ese mismo. El barrio {en el que} está es muy tranquilo.", "Ta kendisi. Bulunduğu mahalle çok sakin."],
          ["Irene", "Perfecto. Mi marido, {con quien} lo voy a compartir, quiere verlo mañana.", "Harika. Daireyi paylaşacağım eşim yarın görmek istiyor."]
        ] },
        { t: "ornek", l: [
          ["Esta es la empresa {para la que} trabajo.", "Bu, [çalış]{tığım} şirket."],
          ["La chica {con la que} salgo es de Sevilla.", "[Çık]{tığım} kız Sevillalı."],
          ["Te presento a Marta, {de quien} te hablé.", "Sana Marta'yı tanıştırayım, [bahset]{tiğim} kişi."],
          ["Es un autor {cuyas} novelas me encantan.", "Romanlarına [bayıl]{dığım} bir yazar."],
          ["Necesito un abogado que {hable} inglés.", "İngilizce [konuş]{an} bir avukata ihtiyacım var."],
          ["No conozco a nadie que {viva} en Bilbao.", "Bilbao'da [yaşa]{yan} kimseyi tanımıyorum."],
          ["Puedes invitar a quien {quieras}.", "Kimi [iste]{rsen} davet edebilirsin."],
          ["El hotel {en el que} nos alojamos tenía piscina.", "[Kal]{dığımız} otelin havuzu vardı."]
        ] },
        { t: "ozet", l: [
          "Edat ilgi zamirinin önüne gelir: <i>la casa en la que vivo, la amiga con la que viajé</i>.",
          "Artikel isimle uyar: <i>el que, la que, los que, las que</i>; kişilerde <i>quien / quienes</i> da olur.",
          "<b>cuyo / cuya / cuyos / cuyas</b>: sahiplik; sahip olunanla uyar.",
          "Bilinen şey → indicativo (<i>tengo un piso que tiene</i>); aranan ya da olmayan → subjuntivo (<i>busco un piso que tenga</i>).",
          "<i>a quien quieras, lo que quieras</i>: “kimi / ne istersen”."
        ] }
      ],
      test: [
        { s: "Esta es la ciudad ___ nací.", o: ["que", "en la que", "en el que"], d: 1, a: "ciudad dişil + edat: en la que (ya da donde)." },
        { s: "El chico ___ hablé es mi primo.", o: ["con quien", "con que", "quien con"], d: 0, a: "Edat başa: con quien / con el que." },
        { s: "La escritora ___ libros leímos vino a la escuela.", o: ["cuya", "cuyos", "que sus"], d: 1, a: "cuyo sahip olunanla uyar: libros → cuyos." },
        { s: "Busco un trabajo que ___ cerca de casa.", o: ["está", "esté", "estar"], d: 1, a: "Aranan şey: subjuntivo." },
        { s: "Tengo un vecino que ___ cinco idiomas.", o: ["habla", "hable", "hablar"], d: 0, a: "Bilinen kişi: indicativo." },
        { s: "No hay nadie que ___ la respuesta.", o: ["sabe", "sepa", "sabrá"], d: 1, a: "Yokluk: subjuntivo." },
        { s: "Los amigos ___ fui de vacaciones son de Málaga.", o: ["con los que", "con que", "que con"], d: 0, a: "Çoğul eril + edat: con los que." },
        { s: "el país ___ capital es Lima", o: ["cuyo", "cuya", "que su"], d: 1, a: "capital dişil: cuya." },
        { s: "¿Hay algún restaurante que ___ abierto ahora?", o: ["está", "esté", "estar"], d: 1, a: "Varlığı bilinmeyen şey soruluyor: subjuntivo." },
        { s: "la empresa ___ trabajo", o: ["para la que", "que para", "para que"], d: 0, a: "Edat başa + artikel uyumu: para la que. (para que = …-sin diye)" }
      ]
    },
    {
      id: "es-b1-13", seviye: "B1", sure: 12,
      baslik: "Belgisiz kelimeler 2: cualquier, cada, otro, todo, demasiado",
      kisa: "cualquier día · cada semana · otro café · todo el día / todos los días · varios",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 28) <i>algo / nada, alguien / nadie, algún / ningún</i> çiftlerini öğrendin. B1'de miktar ve seçim bildiren başka belgisiz kelimeleri ekliyoruz: <b>cualquier(a)</b> (herhangi), <b>cada</b> (her), <b>otro</b> (başka), <b>todo</b> (bütün, her), <b>demasiado</b> (fazla), <b>bastante</b> (epey, yeterince), <b>varios</b> (birkaç) ve <b>mismo</b> (aynı). Türkçe konuşanların en çok yanıldığı iki nokta: <i>un otro</i> ✗ ve <i>todo el día / todos los días</i> farkı." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçedeki “her, herhangi, başka, bütün” İspanyolcada çoğu zaman sıfat gibi davranır ve isimle uyum yapar.", l: [
          ["[Herhangi] bir gün gel.", "Ven {cualquier} día."],
          ["[Her] hafta annemi ararım.", "Llamo a mi madre {cada} semana."],
          ["[Başka] bir kahve ister misin?", "¿Quieres {otro} café?"],
          ["[Bütün] gün çalıştım.", "Trabajé {todo el} día."]
        ] },
        { t: "tablo", h: "Biçim ve uyum", bas: ["Kelime", "Biçimler", "Örnek"], s: [
          ["cualquier(a)", "cualquier + isim; isimsiz: cualquiera", "{cualquier} libro · {cualquiera} de ellos"],
          ["cada", "değişmez, hep tekil", "{cada} día, {cada} persona"],
          ["otro", "otro, otra, otros, otras", "{otra} vez, {otros} amigos"],
          ["todo", "todo, toda, todos, todas + artikel", "{toda la} noche, {todos los} lunes"],
          ["demasiado", "isimden önce uyar; zarfken değişmez", "{demasiada} gente · Hablas {demasiado}."],
          ["bastante", "bastante, bastantes", "{bastantes} problemas · {bastante} caro"],
          ["varios", "varios, varias (hep çoğul)", "{varias} veces"],
          ["mismo", "mismo, misma, mismos, mismas", "el {mismo} día"]
        ] },
        { t: "ipucu", h: "un otro ✗", m: "Türkçedeki “bir başka” ve İngilizcedeki “another” yüzünden en sık yapılan hata: <i>otro</i>'nun önüne <b>un / una gelmez</b>: <i>otro café</i> (bir kahve daha, başka bir kahve), <i>otra cosa</i> (başka bir şey). Belirli artikel ise gelebilir: <i>el otro día</i> (geçen gün), <i>la otra mano</i> (öbür el)." },
        { t: "metin", h: "todo el día mı, todos los días mı?", m: "<b>todo el / toda la</b> + tekil isim “bütün, … boyunca” demektir: <i>todo el día</i> (bütün gün), <i>toda la semana</i> (bütün hafta). <b>todos los / todas las</b> + çoğul isim ise “her” demektir: <i>todos los días</i> (her gün), <i>todas las semanas</i> (her hafta). <i>todos los días</i> ile <i>cada día</i> çok yakındır; <i>cada</i> her birini tek tek vurgular: <i>Cada día aprendo algo nuevo</i> (Her gün yeni bir şey öğreniyorum)." },
        { t: "tablo", h: "todo: dört kullanım", bas: ["Yapı", "Anlamı", "Örnek"], s: [
          ["todo el + tekil", "bütün", "{todo el} año (bütün yıl)"],
          ["todos los + çoğul", "her", "{todos los} años (her yıl)"],
          ["todo (zamir)", "her şey", "{Todo} está bien."],
          ["todos (zamir)", "herkes", "{Todos} lo saben."]
        ] },
        { t: "metin", h: "cualquier mi, cualquiera mı?", m: "İsimden önce <b>cualquier</b> (kısaltılmış) kullanılır: <i>cualquier persona</i> (herhangi biri), <i>en cualquier momento</i> (her an). İsim yoksa ya da isimden sonra gelirse <b>cualquiera</b>: <i>Cualquiera puede hacerlo</i> (Bunu herkes yapabilir), <i>un día cualquiera</i> (sıradan bir gün). Olumsuz cümlede “herhangi biri” için <i>nadie</i> tercih edilir: <i>No conozco a nadie</i>." },
        { t: "ipucu", h: "demasiado, bastante: sıfat mı, zarf mı?", m: "İsimden önce sıfattır ve uyum yapar: <i>demasiad<b>os</b> coches</i> (çok fazla araba), <i>bastant<b>es</b> errores</i> (epey hata). Sıfatın ya da fiilin yanında zarftır ve değişmez: <i>demasiado caras</i> (fazla pahalı), <i>bastante bien</i> (epey iyi), <i>Comes demasiado</i> (Çok fazla yiyorsun). <i>demasiado</i> “gereğinden fazla” demektir; “çok güzel” için <i>muy</i> kullanılır." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["¿Quieres {un otro} café?", "¿Quieres {otro} café?", "otro önüne un gelmez"],
          ["Trabajo {todos los día}.", "Trabajo {todos los días}.", "her: todos los + çoğul"],
          ["{Cualquiera} persona puede venir.", "{Cualquier} persona puede venir.", "isimden önce: cualquier"],
          ["Hay {demasiado} coches.", "Hay {demasiados} coches.", "isimden önce sıfat: uyum yapar"],
          ["{Cada los} días voy al gimnasio.", "{Cada} día voy al gimnasio.", "cada artikel almaz, hep tekil"]
        ] },
        { t: "diyalog", h: "Kafede", l: [
          ["Camarero", "¿Desean algo más?", "Başka bir şey ister misiniz?"],
          ["Alba", "Sí, {otro} café, por favor. Hoy he trabajado {todo el} día.", "Evet, bir kahve daha lütfen. Bugün bütün gün çalıştım."],
          ["Jorge", "Tú trabajas {demasiado}. ¿Vienes aquí {todos los} días?", "Sen çok fazla çalışıyorsun. Buraya her gün mü geliyorsun?"],
          ["Alba", "Casi {todas las} mañanas. Es {bastante} tranquilo y el café es bueno.", "Hemen her sabah. Epey sakin ve kahvesi güzel."],
          ["Jorge", "Pues un día de estos vengo contigo. {Cualquier} día me viene bien.", "O zaman bu günlerde seninle gelirim. Herhangi bir gün bana uyar."],
          ["Alba", "Perfecto. {Varios} compañeros vienen también los viernes.", "Harika. Cuma günleri birkaç iş arkadaşım da geliyor."]
        ] },
        { t: "ornek", l: [
          ["Puedes llamarme a {cualquier} hora.", "Beni [herhangi] bir saatte arayabilirsin."],
          ["{Cada} alumno tiene su propio ordenador.", "[Her] öğrencinin kendi bilgisayarı var."],
          ["Lo hablamos {otro} día.", "Bunu [başka] bir gün konuşuruz."],
          ["Ha llovido {toda la} semana.", "[Bütün] hafta yağmur yağdı."],
          ["{Todos} mis amigos viven en Madrid.", "[Bütün] arkadaşlarım Madrid'de yaşıyor."],
          ["Este restaurante es {demasiado} caro para nosotros.", "Bu restoran bizim için [fazla] pahalı."],
          ["He leído {varios} libros de este autor.", "Bu yazarın [birkaç] kitabını okudum."],
          ["Llevamos la {misma} camiseta.", "[Aynı] tişörtü giymişiz."]
        ] },
        { t: "ozet", l: [
          "<b>cualquier</b> + isim, isimsiz <b>cualquiera</b>: herhangi.",
          "<b>cada</b>: değişmez, tekil isimle: <i>cada día</i>.",
          "<b>otro</b> önüne <i>un</i> gelmez: <i>otro café, otra vez</i>.",
          "<b>todo el</b> + tekil = bütün; <b>todos los</b> + çoğul = her.",
          "<b>demasiado, bastante</b>: isimden önce uyar (<i>demasiados coches</i>), zarfken değişmez (<i>demasiado caro</i>)."
        ] }
      ],
      test: [
        { s: "¿Quieres ___ cerveza?", o: ["una otra", "otra", "otro"], d: 1, a: "otro önüne una gelmez; cerveza dişil: otra." },
        { s: "“Her gün spor yapıyorum.”", o: ["Hago deporte todo el día.", "Hago deporte todos los días.", "Hago deporte todos días."], d: 1, a: "Her: todos los + çoğul." },
        { s: "“Bütün gün çalıştım.”", o: ["Trabajé todo el día.", "Trabajé todos los días.", "Trabajé cada día."], d: 0, a: "Bütün: todo el + tekil." },
        { s: "Puedes venir ___ día.", o: ["cualquiera", "cualquier", "cualesquiera"], d: 1, a: "İsimden önce: cualquier." },
        { s: "Esto lo puede hacer ___.", o: ["cualquier", "cualquiera", "cada"], d: 1, a: "İsimsiz: cualquiera." },
        { s: "Hay ___ gente en la playa.", o: ["demasiado", "demasiada", "demasiados"], d: 1, a: "gente dişil tekil: demasiada." },
        { s: "Este coche es ___ caro.", o: ["demasiado", "demasiados", "demasiada"], d: 0, a: "Sıfatın önünde zarf: değişmez." },
        { s: "___ persona tiene su opinión.", o: ["Cada", "Todas", "Varias"], d: 0, a: "Her biri: cada + tekil." },
        { s: "He estado en México ___ veces.", o: ["varios", "varias", "cada"], d: 1, a: "veces dişil çoğul: varias." },
        { s: "“Geçen gün Ana'yı gördüm.”", o: ["Vi a Ana el otro día.", "Vi a Ana un otro día.", "Vi a Ana otro el día."], d: 0, a: "el otro día = geçen gün." }
      ]
    },
    {
      id: "es-b1-14", seviye: "B1", sure: 12,
      baslik: "por mu, para mı? Bütün kullanımlar",
      kisa: "por la mañana · por 20 euros · para el lunes · para mí · por si acaso",
      bolumler: [
        { t: "metin", m: "A1'de (Ders 14) temel kuralı öğrendin: <b>para</b> ileriye bakar (amaç, hedef, alıcı), <b>por</b> geriye ya da çevreye bakar (sebep, süre, araç). B1'de bu iki edatın bütün önemli kullanımlarını ve sık kalıpları görüyorsun. Türkçede ikisi de çoğu zaman “için” diye çevrilir; doğru seçimi anlam belirler." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçe “için” hem amaç hem sebep bildirir: “Sınavı geçmek için çalıştım” (amaç) ↔ “Sınavı geçtiğim için kutladım” (sebep). İspanyolca bu ikisini ayırır: amaç <b>para</b>, sebep <b>por</b>.", l: [
          ["Öğrenmek [için] çalışıyorum.", "Estudio {para} aprender."],
          ["Yardımın [için] teşekkürler.", "Gracias {por} tu ayuda."],
          ["Bu hediye senin [için].", "Este regalo es {para} ti."],
          ["Senin [yerine] ben giderim.", "Voy yo {por} ti."]
        ] },
        { t: "tablo", h: "para: ileriye", bas: ["Kullanım", "Örnek", "Türkçe"], s: [
          ["amaç (+ mastar)", "Ahorro {para} comprar un coche.", "Araba almak için para biriktiriyorum."],
          ["alıcı", "Estas flores son {para} tu madre.", "Bu çiçekler annen için."],
          ["yön, hedef", "Salgo {para} Madrid mañana.", "Yarın Madrid'e doğru yola çıkıyorum."],
          ["son tarih", "Necesito el informe {para} el lunes.", "Raporu pazartesiye kadar istiyorum."],
          ["görüş", "{Para} mí, es la mejor película.", "Bence en iyi film bu."],
          ["karşılaştırma", "Habla muy bien {para} su edad.", "Yaşına göre çok iyi konuşuyor."],
          ["kullanım amacı", "una taza {para} el café", "kahve fincanı"]
        ] },
        { t: "tablo", h: "por: sebep, yol, karşılık", bas: ["Kullanım", "Örnek", "Türkçe"], s: [
          ["sebep", "Lo hice {por} amor.", "Bunu aşkım yüzünden yaptım."],
          ["içinden, boyunca (yer)", "Paseamos {por} el parque.", "Parkta dolaştık."],
          ["zaman dilimi", "Trabajo {por} la mañana.", "Sabahları çalışırım."],
          ["süre", "Viví en Roma {por} dos años.", "İki yıl Roma'da yaşadım."],
          ["araç", "Te llamo {por} teléfono.", "Seni telefonla ararım."],
          ["karşılık, fiyat", "Lo compré {por} veinte euros.", "Onu yirmi euroya aldım."],
          ["yerine, adına", "Firmo yo {por} ti.", "Senin yerine ben imzalarım."],
          ["oran", "cien kilómetros {por} hora", "saatte yüz kilometre"],
          ["edilgende yapan", "escrito {por} Cervantes", "Cervantes tarafından yazılmış"]
        ] },
        { t: "ipucu", h: "Aynı cümle, iki anlam", m: "<i>Lo hago <b>para</b> ti</i> = Senin için (sana vermek, seni sevindirmek amacıyla) yapıyorum. <i>Lo hago <b>por</b> ti</i> = Senin hatırın için, senin yüzünden ya da senin yerine yapıyorum. <i>Trabajo <b>para</b> una empresa</i> = Bir şirkette çalışıyorum (işverenim). <i>Trabajo <b>por</b> mi hermano</i> = Kardeşimin yerine çalışıyorum." },
        { t: "tablo", h: "Sık kalıplar", bas: ["Kalıp", "Anlamı"], s: [
          ["por fin", "sonunda"],
          ["por cierto", "bu arada"],
          ["por si acaso", "ne olur ne olmaz"],
          ["por lo menos", "en azından"],
          ["por eso", "bu yüzden"],
          ["por supuesto", "elbette"],
          ["para siempre", "sonsuza kadar"],
          ["no estar para bromas", "şaka kaldıracak hâlde olmamak"]
        ] },
        { t: "ipucu", h: "¿Por qué? ¿Para qué?", m: "<i>¿Por qué?</i> sebebi sorar (Neden?): <i>—¿Por qué estudias español? —Porque me gusta.</i> <i>¿Para qué?</i> amacı sorar (Ne için?): <i>—¿Para qué estudias español? —Para trabajar en España.</i> Cevapta <i>porque</i> sebep, <i>para</i> amaç bildirir." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Gracias {para} todo.", "Gracias {por} todo.", "teşekkürün sebebi: por"],
          ["Estudio {por} aprobar.", "Estudio {para} aprobar.", "amaç: para"],
          ["Lo compré {para} diez euros.", "Lo compré {por} diez euros.", "fiyat, karşılık: por"],
          ["Tengo que terminarlo {por} el viernes.", "Tengo que terminarlo {para} el viernes.", "son tarih: para"],
          ["{Por} mí, es demasiado caro.", "{Para} mí, es demasiado caro.", "görüş: para mí"]
        ] },
        { t: "diyalog", h: "Doğum günü hediyesi", l: [
          ["Clara", "¿{Para} quién es ese paquete?", "O paket kimin için?"],
          ["Hugo", "Es {para} mi hermana. Mañana cumple treinta años.", "Kız kardeşim için. Yarın otuz yaşına giriyor."],
          ["Clara", "¡Qué bonito! ¿Cuánto pagaste {por} él?", "Ne güzel! Ona ne kadar ödedin?"],
          ["Hugo", "Cuarenta euros. Lo pedí {por} internet y llegó justo a tiempo.", "Kırk euro. İnternetten sipariş ettim, tam zamanında geldi."],
          ["Clara", "{Por} cierto, ¿vas a la fiesta {por} la tarde o {por} la noche?", "Bu arada, partiye öğleden sonra mı gideceksin, akşam mı?"],
          ["Hugo", "{Por} la noche. Y llevo un paraguas {por} si acaso.", "Akşam. Ne olur ne olmaz diye bir şemsiye de götürüyorum."]
        ] },
        { t: "ornek", l: [
          ["He venido {para} hablar contigo.", "Seninle konuşmak [için] geldim."],
          ["Te lo digo {por} tu bien.", "Bunu senin iyiliğin [için] söylüyorum."],
          ["El tren {para} Valencia sale a las nueve.", "Valensiya'ya [gid]{en} tren dokuzda kalkıyor."],
          ["Caminamos {por} la playa al atardecer.", "Gün batımında sahil boyunca [yürü]{dük}."],
          ["{Para} ser extranjero, habla muy bien.", "Yabancı [ol]{masına göre} çok iyi konuşuyor."],
          ["Me lo cambiaron {por} uno nuevo.", "Onu yenisiyle [değiştir]{diler}."],
          ["Este libro fue escrito {por} una periodista.", "Bu kitap bir gazeteci tarafından [yaz]{ıldı}."],
          ["{Por} fin ha llegado el verano.", "[Sonunda] yaz geldi."]
        ] },
        { t: "ozet", l: [
          "<b>para</b>: amaç, alıcı, yön, son tarih, görüş (<i>para mí</i>), karşılaştırma (<i>para su edad</i>).",
          "<b>por</b>: sebep, yer boyunca, zaman dilimi, süre, araç, fiyat, yerine, oran, edilgende yapan.",
          "<i>¿Por qué?</i> sebep, <i>¿Para qué?</i> amaç sorar.",
          "<i>lo hago para ti</i> (sana yönelik) ↔ <i>lo hago por ti</i> (senin hatırın için, yerine).",
          "Kalıplar: <i>por fin, por cierto, por si acaso, por lo menos, por eso, para siempre</i>."
        ] }
      ],
      test: [
        { s: "Gracias ___ tu ayuda.", o: ["por", "para", "de"], d: 0, a: "Teşekkürün sebebi: por." },
        { s: "Estudio mucho ___ aprobar el examen.", o: ["por", "para", "a"], d: 1, a: "Amaç: para + mastar." },
        { s: "Pagué veinte euros ___ la entrada.", o: ["por", "para", "de"], d: 0, a: "Karşılık, fiyat: por." },
        { s: "Necesito el informe ___ el viernes.", o: ["por", "para", "hasta"], d: 1, a: "Son tarih: para." },
        { s: "Paseamos ___ el centro de la ciudad.", o: ["por", "para", "a"], d: 0, a: "İçinden, boyunca: por." },
        { s: "___ mí, el español es más fácil que el inglés.", o: ["Por", "Para", "De"], d: 1, a: "Görüş: para mí." },
        { s: "Te llamo ___ teléfono esta noche.", o: ["por", "para", "con"], d: 0, a: "Araç: por teléfono." },
        { s: "Este regalo es ___ ti.", o: ["por", "para", "con"], d: 1, a: "Alıcı: para." },
        { s: "Cevaba bak: —¿___ estudias japonés? —Para trabajar en Tokio.", o: ["Por qué", "Para qué", "Qué"], d: 1, a: "Amaç sorusu: ¿Para qué?" },
        { s: "“Ne olur ne olmaz diye şemsiye alıyorum.”", o: ["Llevo un paraguas por si acaso.", "Llevo un paraguas para si acaso.", "Llevo un paraguas por acaso."], d: 0, a: "Kalıp: por si acaso." }
      ]
    },
    {
      id: "es-b1-15", seviye: "B1", sure: 12,
      baslik: "Sebep, sonuç ve amaç: como, ya que, así que, para que",
      kisa: "como llovía · ya que estás aquí · así que · para que lo sepas · debido a",
      bolumler: [
        { t: "metin", m: "A1'de (Ders 6) <i>¿Por qué?</i> sorusuna <i>porque</i> ile cevap verdin, Ders 14'te amacı <i>para</i> ile kurdun; Ders 44'te de <i>por eso</i> (bu yüzden) kalıbını gördün. B1'de sebebi, sonucu ve amacı daha zengin bağlaçlarla kuruyorsun: cümle başında sebep (<b>como</b>), bilinen sebep (<b>ya que, puesto que</b>), sonuç (<b>así que, por lo tanto</b>) ve başka biri için amaç (<b>para que + subjuntivo</b>)." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede sebep çoğunlukla fiile eklenir (<b>-dığı için, -dığından</b>), amaç <b>-mek için, -sin diye</b> ile verilir. İspanyolcada bunlar cümlenin başına gelen ayrı bağlaçlardır.", l: [
          ["Yağmur [yağ]{dığı için} evde kaldık.", "{Como} llovía, nos quedamos en casa."],
          ["{Madem} buradasın, bana yardım et.", "{Ya que} estás aquí, ayúdame."],
          ["Yorgunum, {o yüzden} çıkmıyorum.", "Estoy cansado, {así que} no salgo."],
          ["Beni [anla]{man için} yavaş konuşuyorum.", "Hablo despacio {para que} me {entiendas}."]
        ] },
        { t: "tablo", h: "Sebep bağlaçları", bas: ["Bağlaç", "Yeri ve tonu", "Örnek"], s: [
          ["porque", "ana cümleden sonra; en yaygın", "No salgo {porque} estoy cansado."],
          ["como", "hep cümle başında", "{Como} estoy cansado, no salgo."],
          ["ya que", "bilinen sebep: madem, …-diğine göre", "{Ya que} lo sabes, dímelo."],
          ["puesto que", "ya que gibi; daha resmî", "{Puesto que} es tarde, cerramos la tienda."],
          ["debido a + isim", "…nedeniyle; haber ve duyuru dili", "El vuelo se retrasa {debido a} la niebla."]
        ] },
        { t: "ipucu", h: "como: hep başta", m: "<i>como</i> sebep anlamında yalnızca cümlenin <b>başında</b> kullanılır: <i><b>Como</b> no tenía dinero, no fui</i> (Param olmadığı için gitmedim). Sona koyamazsın: <i>No fui como no tenía dinero</i> yanlıştır; sonda <i>porque</i> gerekir. Cümle başında sebep verirken de <i>porque</i> yerine <i>como</i> daha doğaldır." },
        { t: "metin", h: "Sonuç: así que, por eso, por lo tanto", m: "Sonucu bağlamak için konuşmada en sık <b>así que</b> ve <b>por eso</b> (bu yüzden) kullanılır: <i>Perdí el autobús, <b>así que</b> llegué tarde</i> (Otobüsü kaçırdım, o yüzden geç kaldım). Yazıda ve resmî dilde <b>por lo tanto</b> ve <b>por consiguiente</b> (dolayısıyla) tercih edilir: <i>Los precios han subido; <b>por lo tanto</b>, vendemos menos</i> (Fiyatlar arttı; dolayısıyla daha az satıyoruz). <i>Así que</i> konuşmada bir çıkarım sorusunu da başlatır: <i>¿<b>Así que</b> te vas a Japón?</i> (Demek Japonya'ya gidiyorsun?)" },
        { t: "tablo", h: "Amaç: hangi kalıp?", bas: ["Durum", "Kalıp", "Örnek"], s: [
          ["aynı özne", "para + mastar", "Ahorro {para comprar} un coche."],
          ["farklı özne", "para que + subjuntivo", "Ahorro {para que} mis hijos {estudien}."],
          ["hareket fiilinden sonra", "a + mastar", "Vengo {a ayudarte}."],
          ["resmî dil", "a fin de (que)", "Se cerró la calle {a fin de evitar} accidentes."]
        ] },
        { t: "ipucu", h: "para que'den sonra hep subjuntivo", m: "Amaç henüz gerçekleşmemiş bir şeydir; bu yüzden <i>para que</i>'den sonra <b>her zaman</b> subjuntivo gelir (35. dersteki iki özne kuralı): <i>Te llamo para que <b>vengas</b></i>; <i>para que vienes</i> denmez. Kalıplaşmış bir kullanım: <i><b>Para que lo sepas</b>, mañana no vengo</i> (Haberin olsun, yarın gelmiyorum)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["No fui {como} no tenía dinero.", "No fui {porque} no tenía dinero.", "sonda sebep: porque; como hep başta"],
          ["Te llamo para que {vienes}.", "Te llamo para que {vengas}.", "para que + subjuntivo"],
          ["Estudio para que {apruebe}.", "Estudio para {aprobar}.", "aynı özne: para + mastar"],
          ["El vuelo se retrasa {debido} la niebla.", "El vuelo se retrasa {debido a} la niebla.", "isimden önce: debido a"]
        ] },
        { t: "diyalog", h: "Grev günü", l: [
          ["Lucía", "Hola, Pablo. {Como} no contestabas, te he escrito un mensaje.", "Merhaba Pablo. Cevap vermediğin için sana mesaj attım."],
          ["Pablo", "Perdona, estaba en una reunión, {así que} tenía el móvil apagado.", "Kusura bakma, toplantıdaydım, o yüzden telefonum kapalıydı."],
          ["Lucía", "Te quería avisar: mañana no hay clase {debido a} la huelga.", "Haber vermek istedim: grev nedeniyle yarın ders yok."],
          ["Pablo", "¡Qué bien! {Ya que} no hay clase, ¿quedamos para estudiar juntos?", "Ne güzel! Madem ders yok, birlikte çalışmak için buluşalım mı?"],
          ["Lucía", "Vale. Te paso mis apuntes {para que} los {revises} antes.", "Olur. Önceden göz atman için notlarımı sana gönderiyorum."],
          ["Pablo", "Genial. Y yo llevo café {para} no {dormirme}.", "Harika. Ben de uyumamak için kahve getiririm."]
        ] },
        { t: "ornek", l: [
          ["{Como} era tarde, cogimos un taxi.", "Geç [ol]{duğu için} taksiye bindik."],
          ["{Ya que} vas al súper, compra pan.", "{Madem} markete gidiyorsun, ekmek al."],
          ["{Puesto que} nadie tiene preguntas, terminamos aquí.", "Kimsenin sorusu [ol]{madığına göre} burada bitiriyoruz."],
          ["Ha nevado mucho; {por lo tanto}, no hay clases.", "Çok kar yağdı; {dolayısıyla} ders yok."],
          ["No me encontraba bien, {así que} me fui a casa.", "Kendimi iyi hissetmiyordum, {o yüzden} eve gittim."],
          ["Te dejo las llaves {para que} {puedas} entrar.", "[Gir]{ebilmen için} anahtarları sana bırakıyorum."],
          ["He venido {a despedirme}.", "Veda [et]{meye} geldim."],
          ["¿{Así que} te mudas a Madrid?", "{Demek} Madrid'e taşınıyorsun?"]
        ] },
        { t: "ozet", l: [
          "Sebep: <b>porque</b> (sonra), <b>como</b> (hep başta), <b>ya que / puesto que</b> (bilinen sebep: madem).",
          "<b>debido a + isim</b>: …nedeniyle (haber ve duyuru dili).",
          "Sonuç: <b>así que, por eso</b> (konuşma), <b>por lo tanto</b> (yazı).",
          "Amaç: aynı özne <b>para + mastar</b>, farklı özne <b>para que + subjuntivo</b>.",
          "Hareket fiilinden sonra amaç: <b>a + mastar</b> (<i>vengo a ayudarte</i>)."
        ] }
      ],
      test: [
        { s: "___ no tenía hambre, no cené.", o: ["Como", "Así que", "Para que"], d: 0, a: "Cümle başında sebep: como." },
        { s: "Te llamo para que ___ a la fiesta. (venir)", o: ["vienes", "vengas", "venir"], d: 1, a: "Farklı özne: para que + subjuntivo." },
        { s: "Ahorro dinero para ___ un piso. (yo comprar)", o: ["comprar", "que compre", "compro"], d: 0, a: "Aynı özne: para + mastar." },
        { s: "Estaba lloviendo, ___ cogimos un taxi.", o: ["así que", "como", "para que"], d: 0, a: "Sonuç: así que." },
        { s: "El tren llegó tarde ___ la nieve.", o: ["debido a", "porque", "ya que"], d: 0, a: "İsimden önce: debido a." },
        { s: "“Madem buradasın, bana yardım et.”", o: ["Ya que estás aquí, ayúdame.", "Para que estés aquí, ayúdame.", "Así que estás aquí, ayúdame."], d: 0, a: "Bilinen sebep: ya que (madem)." },
        { s: "Hangisi yazı dilinde “dolayısıyla” demektir?", o: ["por lo tanto", "como", "para que"], d: 0, a: "Resmî sonuç: por lo tanto." },
        { s: "He venido ___ ayudarte.", o: ["a", "para que", "como"], d: 0, a: "Hareket fiili + a + mastar." },
        { s: "Os lo explico otra vez para que lo ___. (entender)", o: ["entendéis", "entendáis", "entender"], d: 1, a: "para que + subjuntivo: entendáis." },
        { s: "“Demek Japonya'ya gidiyorsun?”", o: ["¿Así que te vas a Japón?", "¿Como te vas a Japón?", "¿Ya que te vas a Japón?"], d: 0, a: "Sohbette çıkarım: ¿Así que…?" }
      ]
    },
    {
      id: "es-b1-16", seviye: "B1", sure: 12,
      baslik: "Zıtlık ve ödün: aunque, sin embargo, a pesar de, sino",
      kisa: "aunque llueve · aunque llueva · sin embargo · a pesar de que · no es rojo sino azul",
      bolumler: [
        { t: "metin", m: "A1'den beri “ama” için <i>pero</i> kullanıyorsun. B1'de zıtlığın türünü gösteren kalıpları öğreniyorsun: <b>aunque</b> (…-masına rağmen, …-se bile), <b>sin embargo</b> (yine de, buna rağmen), <b>a pesar de (que)</b> (…-e rağmen) ve düzeltme bildiren <b>sino</b> (… değil, …). En önemli nokta: <i>aunque</i>'den sonra gerçek bilgi için indicativo, varsayım için subjuntivo gelir." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede <b>-masına rağmen</b> gerçek bir durumu, <b>-se bile</b> ise varsayımı anlatır. İspanyolcada ikisi de <i>aunque</i> ile kurulur; farkı fiilin kipi gösterir.", l: [
          ["Yağmur [yağ]{masına rağmen} çıkıyorum.", "{Aunque} {llueve}, salgo."],
          ["Yağmur [yağ]{sa bile} çıkacağım.", "{Aunque} {llueva}, saldré."],
          ["Pahalı. {Yine de} alacağım.", "Es caro. {Sin embargo}, lo voy a comprar."],
          ["Kırmızı {değil}, mavi.", "No es rojo, {sino} azul."]
        ] },
        { t: "tablo", h: "aunque + indicativo mu, subjuntivo mu?", bas: ["Kip", "Ne anlatır?", "Örnek"], s: [
          ["indicativo", "bilinen, gerçek bilgi: …-masına rağmen", "Aunque {está} cansado, sigue trabajando."],
          ["subjuntivo", "varsayım, olabilir: …-se bile", "Aunque {esté} cansado, seguirá trabajando."],
          ["subjuntivo", "karşıdakinin söylediğini önemsememe", "—Es muy caro. —Aunque {sea} caro, lo quiero."]
        ] },
        { t: "ipucu", h: "aunque = gerçi", m: "İkinci cümlenin başında gelen <i>aunque</i> <i>pero</i>'ya yakındır, “gerçi” anlamı taşır ve indicativo alır: <i>Me gusta el piso, <b>aunque</b> es un poco oscuro</i> (Daireyi beğeniyorum, gerçi biraz karanlık)." },
        { t: "metin", h: "sin embargo: yine de", m: "<b>sin embargo</b> (yine de, buna rağmen) iki ayrı cümleyi bağlar; çoğunlukla nokta ya da noktalı virgülden sonra gelir ve ardından virgül alır: <i>Estudió mucho. <b>Sin embargo</b>, suspendió</i> (Çok çalıştı. Yine de kaldı). <i>pero</i>'dan daha güçlü ve daha resmîdir. Yazıdaki eş anlamlısı <b>no obstante</b>, konuşmadaki yakını <b>aun así</b> (öyle bile olsa) ifadesidir." },
        { t: "tablo", h: "a pesar de: isim, mastar, cümle", bas: ["Kalıp", "Ardından", "Örnek"], s: [
          ["a pesar de", "isim", "Salimos {a pesar de} la lluvia."],
          ["a pesar de", "mastar (aynı özne)", "{A pesar de} estar cansada, vino a la fiesta."],
          ["a pesar de que", "çekimli fiil", "{A pesar de que} hacía frío, nos bañamos."]
        ] },
        { t: "metin", h: "pero mu, sino mu?", m: "<b>sino</b>, olumsuz bir cümleden sonra yanlış bilgiyi düzeltir (… değil, …): <i>No es español, <b>sino</b> mexicano</i> (İspanyol değil, Meksikalı). <i>pero</i> ise düzeltmez, ek bilgi verir: <i>No es español, <b>pero</b> habla muy bien</i> (İspanyol değil ama çok iyi konuşuyor). Ardından çekimli fiil gelirse <b>sino que</b> kullanılır: <i>No lo compró, <b>sino que</b> lo alquiló</i> (Onu satın almadı, kiraladı). Kalıp: <i>no solo… sino también</i> (sadece… değil, … da)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Mañana iré a la playa aunque {llueve}.", "Mañana iré a la playa aunque {llueva}.", "gelecek, varsayım: subjuntivo"],
          ["No es caro, {pero} barato.", "No es caro, {sino} barato.", "düzeltme: sino"],
          ["{A pesar} hacía frío, salimos.", "{A pesar de que} hacía frío, salimos.", "çekimli fiilden önce: a pesar de que"],
          ["No lo compró, {sino} lo alquiló.", "No lo compró, {sino que} lo alquiló.", "çekimli fiilden önce: sino que"]
        ] },
        { t: "diyalog", h: "Yeni daire", l: [
          ["Carmen", "¿Qué tal el piso nuevo?", "Yeni daire nasıl?"],
          ["Andrés", "Me encanta, {aunque} es un poco pequeño.", "Bayıldım, gerçi biraz küçük."],
          ["Carmen", "¿Y el barrio? Dicen que es muy ruidoso.", "Peki mahalle? Çok gürültülü olduğunu söylüyorlar."],
          ["Andrés", "{Aunque} {sea} ruidoso, está muy bien comunicado.", "Gürültülü olsa bile ulaşımı çok iyi."],
          ["Carmen", "¿Lo has comprado?", "Satın mı aldın?"],
          ["Andrés", "No lo he comprado, {sino que} lo he alquilado. {A pesar de} los precios, he tenido suerte.", "Satın almadım, kiraladım. Fiyatlara rağmen şanslıydım."]
        ] },
        { t: "ornek", l: [
          ["{Aunque} {está} lloviendo, vamos a dar un paseo.", "Yağmur [yağ]{masına rağmen} yürüyüşe çıkacağız."],
          ["{Aunque} me lo {pidas} de rodillas, no lo haré.", "Diz çökerek [iste]{sen bile} yapmayacağım."],
          ["Hacía mucho frío. {Sin embargo}, nadie llevaba abrigo.", "Hava çok soğuktu. {Yine de} kimse palto giymiyordu."],
          ["{A pesar de} su edad, corre maratones.", "Yaşına [rağmen] maraton koşuyor."],
          ["{A pesar de que} {había} estudiado, suspendió.", "Çalışmış [ol]{masına rağmen} sınavda kaldı."],
          ["No quiero té, {sino} café.", "Çay {değil}, kahve istiyorum."],
          ["{No solo} habla inglés, {sino también} chino.", "{Sadece} İngilizce değil, Çince {de} konuşuyor."],
          ["El hotel era caro; {no obstante}, merecía la pena.", "Otel pahalıydı; {buna rağmen} değdi."]
        ] },
        { t: "ozet", l: [
          "<b>aunque + indicativo</b>: gerçek bilgi (…-masına rağmen); <b>aunque + subjuntivo</b>: varsayım (…-se bile) ya da önemsenmeyen bilgi.",
          "<b>sin embargo / no obstante</b>: yine de; ayrı bir cümleyi bağlar.",
          "<b>a pesar de</b> + isim ya da mastar; <b>a pesar de que</b> + çekimli fiil.",
          "<b>sino</b>: olumsuzdan sonra düzeltme (… değil, …); çekimli fiilden önce <b>sino que</b>.",
          "<i>no solo… sino también</i>: sadece… değil, … da."
        ] }
      ],
      test: [
        { s: "“Yağmur yağsa bile yarın gideceğim.”", o: ["Aunque llueva, mañana iré.", "Aunque llueve, mañana iré.", "Sino llueve, mañana iré."], d: 0, a: "Varsayım: aunque + subjuntivo." },
        { s: "Aunque ___ cansado, siempre me ayuda. (bilinen gerçek)", o: ["está", "esté", "estar"], d: 0, a: "Gerçek bilgi: aunque + indicativo." },
        { s: "No es alemán, ___ austriaco.", o: ["pero", "sino", "aunque"], d: 1, a: "Olumsuzdan sonra düzeltme: sino." },
        { s: "Salimos ___ la lluvia.", o: ["a pesar de", "aunque", "sin embargo"], d: 0, a: "İsimden önce: a pesar de." },
        { s: "No lo vendió, ___ lo regaló.", o: ["sino", "sino que", "pero que"], d: 1, a: "Çekimli fiilden önce: sino que." },
        { s: "Estudió mucho. ___, no aprobó.", o: ["Sin embargo", "Sino", "A pesar de"], d: 0, a: "Ayrı cümleyi bağlayan zıtlık: sin embargo." },
        { s: "___ hacía calor, llevaba chaqueta.", o: ["A pesar de que", "A pesar", "Sino que"], d: 0, a: "Çekimli fiilden önce: a pesar de que." },
        { s: "Es caro, ___ es muy bueno.", o: ["pero", "sino", "sino que"], d: 0, a: "Olumlu cümleden sonra sino olmaz: pero." },
        { s: "“Sadece İngilizce değil, Fransızca da konuşuyor.”", o: ["No solo habla inglés, sino también francés.", "No solo habla inglés, pero también francés.", "No solo habla inglés, aunque también francés."], d: 0, a: "Kalıp: no solo… sino también." },
        { s: "Me gusta este barrio, ___ es un poco caro. (gerçi)", o: ["aunque", "sino", "a pesar de"], d: 0, a: "“Gerçi”: aunque + indicativo." }
      ]
    },
    {
      id: "es-b1-17", seviye: "B1", sure: 12,
      baslik: "Koşul cümleleri: si llueve… ve si tuviera…",
      kisa: "si llueve, no salgo · si tienes tiempo, llámame · si tuviera dinero, viajaría · si yo fuera tú",
      bolumler: [
        { t: "metin", m: "A2'de futuro (Ders 25) ve emir kipi (Ders 24) ile basit koşul cümleleri kurdun: <i>Si hace buen tiempo, iremos a la playa</i>. B1'de koşulun iki türünü ayırıyorsun: <b>gerçek, olası</b> koşul (<i>si + presente</i>) ve <b>hayalî</b> koşul (<i>si + imperfecto de subjuntivo → condicional</i>). İkinci tür için yeni bir biçim öğreneceksin: <i>tuviera, fuera, pudiera</i>. Böylece Ders 34'teki hayal cümlelerinin (<i>viajaría</i>) “eğer” kısmı tamamlanıyor." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede olası koşul <b>-rsa</b> (yağarsa), hayalî koşul <b>-sa</b> (olsa) ile verilir. İspanyolcada <i>si</i> değişmez; farkı fiilin zamanı ve kipi gösterir.", l: [
          ["Yağmur [yağ]{arsa} evde kalırız.", "{Si} {llueve}, nos quedamos en casa."],
          ["Vaktin [ol]{ursa} beni ara.", "{Si} {tienes} tiempo, llámame."],
          ["Param [ol]{sa} dünyayı gezerdim.", "{Si} {tuviera} dinero, viajaría por el mundo."],
          ["Senin yerinde [ol]{sam} kabul ederdim.", "{Si} {fuera} tú, aceptaría."]
        ] },
        { t: "tablo", h: "İki tür koşul", bas: ["Tür", "si + …", "Ana cümle", "Örnek"], s: [
          ["gerçek, olası", "presente", "presente, futuro ya da emir", "Si {estudias}, {aprobarás}."],
          ["hayalî (şimdi ya da gelecek)", "imperfecto de subjuntivo", "condicional", "Si {estudiaras}, {aprobarías}."]
        ] },
        { t: "metin", h: "1) Gerçek koşul: si + presente", m: "Koşulun gerçekleşmesi mümkünse <i>si</i>'den sonra <b>presente</b> gelir; ana cümle presente (genel gerçek), futuro (gelecek) ya da emir olabilir: <i>Si <b>calientas</b> el hielo, se derrite</i> (Buzu ısıtırsan erir), <i>Si <b>llegas</b> pronto, <b>cenaremos</b> juntos</i> (Erken gelirsen birlikte yemek yeriz), <i>Si <b>ves</b> a Juan, <b>salúdalo</b> de mi parte</i> (Juan'ı görürsen benden selam söyle)." },
        { t: "ipucu", h: "si'den sonra futuro yok", m: "Türkçe düşününce “Yarın yağmur yağacaksa…” diye <i>si lloverá</i> demek isteyebilirsin; ama koşul bildiren <i>si</i>'den sonra <b>futuro</b>, <b>condicional</b> ve <b>presente de subjuntivo</b> gelmez: <i>Si <b>llueve</b> mañana…</i> “-ip -mediği” anlamındaki <i>si</i> ise farklıdır ve futuro alabilir: <i>No sé si <b>vendrá</b></i> (Gelip gelmeyeceğini bilmiyorum; 49. ders)." },
        { t: "tablo", h: "Yeni biçim: imperfecto de subjuntivo", bas: ["Mastar", "ellos (indefinido)", "yo / él", "nosotros"], s: [
          ["hablar", "[habla]{ron}", "[habla]{ra}", "[hablá]{ramos}"],
          ["comer", "[comie]{ron}", "[comie]{ra}", "[comié]{ramos}"],
          ["tener", "[tuvie]{ron}", "[tuvie]{ra}", "[tuvié]{ramos}"],
          ["ser / ir", "[fue]{ron}", "[fue]{ra}", "[fué]{ramos}"],
          ["poder", "[pudie]{ron}", "[pudie]{ra}", "[pudié]{ramos}"],
          ["hacer", "[hicie]{ron}", "[hicie]{ra}", "[hicié]{ramos}"]
        ] },
        { t: "metin", h: "Kurulum", m: "Kural basit: indefinido'nun <b>ellos</b> biçimini al, <b>-ron</b>'u at, yerine <b>-ra, -ras, -ra, -ramos, -rais, -ran</b> ekle. Böylece indefinido'daki bütün düzensizlikler buraya da taşınır: <i>dijeron → dijera</i>, <i>estuvieron → estuviera</i>, <i>quisieron → quisiera</i>. <b>nosotros</b> biçiminde vurgu işareti vardır: <i>habláramos, tuviéramos</i>. İspanya'da aynı anlamda <b>-se</b> biçimi de duyulur: <i>tuviese, hablase</i>." },
        { t: "metin", h: "2) Hayalî koşul: si + imperfecto de subjuntivo", m: "Koşul şu an gerçek değilse ya da gerçekleşme ihtimali zayıfsa <b>si + imperfecto de subjuntivo</b>, ana cümlede <b>condicional</b> kullanılır: <i>Si <b>tuviera</b> tiempo, <b>aprendería</b> a tocar el piano</i> (Vaktim olsa piyano çalmayı öğrenirdim; ama yok), <i>Si <b>ganara</b> la lotería, <b>dejaría</b> de trabajar</i> (Piyangoyu kazansam çalışmayı bırakırdım; ihtimal zayıf). Tavsiye kalıbı <i>Si <b>yo fuera</b> tú…</i> (Senin yerinde olsam…), Ders 34'teki <i>Yo que tú…</i> ile aynı anlamdadır." },
        { t: "ipucu", h: "Aynı koşul, iki bakış", m: "Hangi türü seçeceğine konuşanın ihtimale bakışı karar verir: <i>Si <b>tengo</b> tiempo, te <b>ayudaré</b></i> (Vaktim olursa yardım ederim; olabilir) ↔ <i>Si <b>tuviera</b> tiempo, te <b>ayudaría</b></i> (Vaktim olsa yardım ederdim; ama yok). Geçmişteki hayalî koşul (<i>si hubiera sabido…</i>: bilseydim) B2 konusudur." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Si {lloverá} mañana, no saldremos.", "Si {llueve} mañana, no saldremos.", "koşul si'sinden sonra futuro olmaz"],
          ["Si {tendría} dinero, compraría una casa.", "Si {tuviera} dinero, compraría una casa.", "si'den sonra condicional olmaz"],
          ["Si {tenga} tiempo, te llamo.", "Si {tengo} tiempo, te llamo.", "si + presente de subjuntivo olmaz"],
          ["Si tuviera tiempo, te {ayudaré}.", "Si tuviera tiempo, te {ayudaría}.", "hayalî koşul + condicional"]
        ] },
        { t: "diyalog", h: "Piyango", l: [
          ["Marta", "¿Qué {harías} si te {tocara} la lotería?", "Piyango sana çıksa ne yapardın?"],
          ["Iván", "Si me {tocara}, {dejaría} de trabajar y {viajaría} por todo el mundo.", "Bana çıksa çalışmayı bırakır, bütün dünyayı gezerdim."],
          ["Marta", "Yo no. Si {fuera} millonaria, {abriría} un restaurante.", "Ben öyle yapmazdım. Milyoner olsam bir restoran açardım."],
          ["Iván", "¡Pues si {abres} un restaurante, yo {seré} tu primer cliente!", "O zaman restoran açarsan ilk müşterin ben olurum!"],
          ["Marta", "Trato hecho. Y si {necesitas} trabajo, {llámame}.", "Anlaştık. İşe ihtiyacın olursa da beni ara."]
        ] },
        { t: "ornek", l: [
          ["Si {calientas} el agua a cien grados, {hierve}.", "Suyu yüz dereceye [ısıt]{ırsan} kaynar."],
          ["Si {tienes} frío, {cierra} la ventana.", "[Üşü]{yorsan} pencereyi kapat."],
          ["Si {terminamos} pronto, {iremos} al cine.", "Erken [bitir]{irsek} sinemaya gideriz."],
          ["Si {pudiera}, {viviría} en la playa.", "Mümkün [ol]{sa} sahilde yaşardım."],
          ["Si {hablara} chino, {trabajaría} en Pekín.", "Çince [bil]{sem} Pekin'de çalışırdım."],
          ["Si yo {fuera} tú, no {diría} nada.", "Senin yerinde [ol]{sam} hiçbir şey söylemezdim."],
          ["¿Qué {harías} si {vieras} un fantasma?", "Bir hayalet [gör]{sen} ne yapardın?"],
          ["No sé {si} {vendrá}.", "[Gel]{ip gelmeyeceğini} bilmiyorum."]
        ] },
        { t: "ozet", l: [
          "Gerçek, olası koşul: <b>si + presente</b> → presente, futuro ya da emir.",
          "Hayalî koşul: <b>si + imperfecto de subjuntivo</b> → <b>condicional</b>.",
          "Yeni biçim: indefinido <i>ellos</i> − <i>-ron</i> + <b>-ra</b>: <i>tuvieron → tuviera</i>, <i>fueron → fuera</i>.",
          "Koşul <i>si</i>'sinden sonra futuro, condicional ve presente de subjuntivo gelmez.",
          "Tavsiye: <i>Si yo fuera tú…</i> = <i>Yo que tú…</i>"
        ] }
      ],
      test: [
        { s: "Si ___ tiempo mañana, te llamo. (tener)", o: ["tengo", "tendré", "tenga"], d: 0, a: "Olası koşul: si + presente." },
        { s: "Si ___ dinero, me compraría un barco. (tener)", o: ["tendría", "tuviera", "tengo"], d: 1, a: "Hayalî koşul: si + imperfecto de subjuntivo." },
        { s: "Si tuviera tiempo, ___ más. (leer)", o: ["leeré", "leería", "leo"], d: 1, a: "Hayalî koşulun ana cümlesi: condicional." },
        { s: "hacer → imperfecto de subjuntivo (yo)", o: ["haciera", "hiciera", "hiziera"], d: 1, a: "hicieron → hiciera." },
        { s: "ser / ir → imperfecto de subjuntivo (tú)", o: ["fueras", "ibas", "seras"], d: 0, a: "fueron → fueras." },
        { s: "“Senin yerinde olsam gitmezdim.”", o: ["Si yo fuera tú, no iría.", "Si soy tú, no iré.", "Si sería tú, no iría."], d: 0, a: "Si yo fuera tú + condicional." },
        { s: "Si ___ a Ana, dale recuerdos. (ver)", o: ["ves", "verás", "veas"], d: 0, a: "Olası koşul + emir: si ves." },
        { s: "decir → imperfecto de subjuntivo (nosotros)", o: ["dijéramos", "diciéramos", "dijiéramos"], d: 0, a: "dijeron → dijéramos (vurgu işaretli)." },
        { s: "“Gelip gelmeyeceğini bilmiyorum.”", o: ["No sé si vendrá.", "No sé si venga.", "No sé si viniera."], d: 0, a: "“-ip -mediği” anlamındaki si'den sonra futuro olabilir." },
        { s: "Hangisi gerçekleşmesi zayıf bir ihtimali anlatır?", o: ["Si me tocara la lotería, viajaría.", "Si me toca la lotería, viajaré.", "Si me tocó la lotería, viajé."], d: 0, a: "Zayıf ihtimal, hayal: si + imperfecto de subjuntivo." }
      ]
    },
    {
      id: "es-b1-18", seviye: "B1", sure: 12,
      baslik: "Edilgen ve kişisiz yapılar: se vende, se dice, ser + ortaç",
      kisa: "se vende piso · se venden pisos · aquí se come bien · fue construido · está cerrado",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 15) <i>se</i>'yi dönüşlü fiillerde gördün: <i>se levanta</i> (kalkıyor). İspanyolcada <i>se</i>'nin iki önemli görevi daha var: yapanı belirtmeden <b>edilgen</b> cümle kurmak (<i>se vende piso</i>: satılık daire) ve herkes için geçerli <b>kişisiz</b> cümle kurmak (<i>aquí se come bien</i>: burada iyi yemek yenir). Ayrıca yazı dilindeki <b>ser + ortaç</b> edilgenini ve Ders 38'de gördüğün <b>estar + ortaç</b> ile farkını öğreneceksin." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede edilgen ve kişisiz anlam fiile eklenen <b>-ıl / -ın</b> ile verilir: satılır, konuşulur, yenir. İspanyolcada çoğunlukla fiilin önüne <b>se</b> gelir; fiil, cümledeki isme göre tekil ya da çoğul olur.", l: [
          ["[Sat]{ılık} daire.", "{Se vende} piso."],
          ["Burada İngilizce [konuş]{ulur}.", "Aquí {se habla} inglés."],
          ["Bu ülkede çok balık [ye]{nir}.", "En este país {se come} mucho pescado."],
          ["Köprü 1890'da [yap]{ıldı}.", "El puente {fue construido} en 1890."]
        ] },
        { t: "tablo", h: "se + fiil: tekil mi, çoğul mu?", bas: ["Cümledeki isim", "Fiil", "Örnek"], s: [
          ["tekil isim", "3. tekil", "{Se vende} piso."],
          ["çoğul isim", "3. çoğul", "{Se venden} pisos."],
          ["mastar", "3. tekil", "{Se prohíbe} fumar."],
          ["isim yok (genel)", "3. tekil", "Aquí {se vive} bien."]
        ] },
        { t: "metin", h: "Edilgen se", m: "Yapanın önemli olmadığı ya da bilinmediği durumlarda en doğal edilgen <b>se + 3. kişi</b> fiildir; tabelalarda, ilanlarda ve tariflerde her yerde karşına çıkar: <i><b>Se alquila</b> habitación</i> (Kiralık oda), <i><b>Se necesitan</b> camareros</i> (Garson aranıyor), <i><b>Se añaden</b> dos huevos</i> (İki yumurta eklenir). Fiil cümledeki <b>isme</b> uyar: tekil isim → tekil fiil, çoğul isim → çoğul fiil." },
        { t: "metin", h: "Kişisiz se: insanlar, herkes", m: "Belli bir isim yoksa <i>se</i> “insanlar, herkes” anlamı verir ve fiil hep tekildir: <i>En España <b>se cena</b> tarde</i> (İspanya'da akşam yemeği geç yenir), <i>¿Cómo <b>se dice</b> “gracias” en turco?</i> (Türkçede “gracias” nasıl denir?), <i>Aquí <b>se está</b> muy bien</i> (Burası çok rahat). Konuşmada aynı anlam <b>3. çoğul</b> ile de verilir: <i><b>Dicen</b> que va a llover</i> (Yağmur yağacakmış)." },
        { t: "tablo", h: "ser + ortaç, estar + ortaç, se", bas: ["Kalıp", "Ne anlatır?", "Örnek"], s: [
          ["ser + ortaç (+ por)", "eylem: yapıldı (haber, yazı)", "El museo {fue inaugurado} por el rey."],
          ["estar + ortaç", "sonuç durumu: açık, kapalı, bitmiş", "El museo {está cerrado} los lunes."],
          ["se + fiil", "eylem; yapan söylenmez (konuşma)", "El museo {se inauguró} en 2010."]
        ] },
        { t: "ipucu", h: "Ortaç sıfat gibi uyum yapar", m: "<i>ser</i> ve <i>estar</i> ile kullanılan ortaç sıfat gibi davranır ve özneye <b>cinsiyet ve sayı</b> bakımından uyar: <i>La casa fue <b>construida</b></i>, <i>Los libros fueron <b>publicados</b></i>, <i>Las tiendas están <b>cerradas</b></i>. <i>haber</i> ile ise (<i>he cerrado</i>) ortaç hiç değişmez." },
        { t: "ipucu", h: "ser + ortaç konuşmada az", m: "Günlük konuşmada <i>ser + ortaç</i> pek kullanılmaz; İspanyolca bunun yerine <i>se</i>'li yapıyı ya da etken cümleyi tercih eder: <i><b>Construyeron</b> el puente en 1890</i> (Köprüyü 1890'da yaptılar). Haberlerde, tarih anlatımında ve resmî yazılarda ise sık görülür." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["{Se vende} pisos.", "{Se venden} pisos.", "çoğul isim: çoğul fiil"],
          ["Aquí {se hablan} inglés.", "Aquí {se habla} inglés.", "tekil isim: tekil fiil"],
          ["Las puertas fueron {abierto}.", "Las puertas fueron {abiertas}.", "ser + ortaç: cinsiyet ve sayı uyumu"],
          ["La tienda {es} cerrada hoy.", "La tienda {está} cerrada hoy.", "sonuç durumu: estar + ortaç"],
          ["En España {se cenan} tarde.", "En España {se cena} tarde.", "kişisiz se: fiil hep tekil"]
        ] },
        { t: "diyalog", h: "İlan panosu", l: [
          ["Sara", "Mira este anuncio: “{Se alquila} piso céntrico”.", "Şu ilana bak: “Merkezde kiralık daire”."],
          ["Tomás", "¿{Se aceptan} mascotas?", "Evcil hayvan kabul ediliyor mu?"],
          ["Sara", "Aquí pone que no {se permiten} animales.", "Burada hayvanlara izin verilmediği yazıyor."],
          ["Tomás", "Vaya. ¿Y cómo {se llega} al centro desde allí?", "Hay aksi. Peki oradan merkeze nasıl gidiliyor?"],
          ["Sara", "En metro. El edificio {fue reformado} el año pasado y {está} muy bien {cuidado}.", "Metroyla. Bina geçen yıl yenilendi ve çok bakımlı."],
          ["Tomás", "Además, {se dice} que en ese barrio {se vive} muy bien.", "Üstelik o mahallede çok iyi yaşandığı söylenir."]
        ] },
        { t: "ornek", l: [
          ["{Se busca} profesor de inglés.", "İngilizce öğretmeni [ara]{nıyor}."],
          ["En verano {se venden} muchos helados.", "Yazın çok dondurma [sat]{ılır}."],
          ["¿Cómo {se escribe} tu nombre?", "Adın nasıl [yaz]{ılıyor}?"],
          ["Aquí no {se puede} aparcar.", "Buraya park [edil]{mez}."],
          ["{Se dice} que el jefe se va a jubilar.", "Patronun emekli olacağı [söylen]{iyor}."],
          ["El Quijote {fue escrito} por Cervantes.", "Don Kişot, Cervantes tarafından [yaz]{ıldı}."],
          ["La cena ya {está preparada}.", "Akşam yemeği [hazır]."],
          ["{Se tarda} una hora en llegar.", "Oraya varmak bir saat [sür]{üyor}."]
        ] },
        { t: "ozet", l: [
          "<b>se + 3. kişi fiil</b>: yapanı belirtmeyen edilgen (<i>se vende piso, se venden pisos</i>); fiil isme uyar.",
          "Kişisiz <b>se</b>: insanlar, herkes; fiil hep tekil (<i>se cena tarde, se dice que…</i>).",
          "<b>ser + ortaç (+ por)</b>: yazı ve haber dilinde edilgen (<i>fue construido</i>).",
          "<b>estar + ortaç</b>: eylemin sonucu, durum (<i>está cerrado</i>).",
          "<i>ser</i> ve <i>estar</i> ile ortaç sıfat gibi uyum yapar: <i>cerrada, cerrados</i>."
        ] }
      ],
      test: [
        { s: "___ pisos en el centro.", o: ["Se vende", "Se venden", "Se vendan"], d: 1, a: "Çoğul isim: se venden." },
        { s: "Aquí ___ inglés.", o: ["se habla", "se hablan", "habla se"], d: 0, a: "Tekil isim: se habla." },
        { s: "En España ___ muy tarde. (cenar, genel)", o: ["se cena", "se cenan", "cenan se"], d: 0, a: "Kişisiz se: fiil tekil." },
        { s: "La catedral fue ___ en el siglo XIII. (construir)", o: ["construido", "construida", "construidas"], d: 1, a: "ser + ortaç özneye uyar: la catedral → construida." },
        { s: "El banco ___ cerrado los domingos. (durum)", o: ["es", "está", "se"], d: 1, a: "Sonuç durumu: estar + ortaç." },
        { s: "“Türkçede ‘gracias’ nasıl denir?”", o: ["¿Cómo se dice “gracias” en turco?", "¿Cómo dice “gracias” en turco?", "¿Cómo se dicen “gracias” en turco?"], d: 0, a: "Kişisiz se: ¿Cómo se dice…?" },
        { s: "Este libro ___ por una periodista en 2010.", o: ["fue escrito", "está escrito", "se escribió"], d: 0, a: "Yapan (por) ve geçmişteki eylem: ser + ortaç." },
        { s: "Bir tabelada “Kiralık oda” nasıl yazılır?", o: ["Se alquila habitación.", "Se alquilan habitación.", "Alquila se habitación."], d: 0, a: "Tekil isim: se alquila." },
        { s: "“Yağmur yağacakmış.” (konuşma)", o: ["Dicen que va a llover.", "Dice que va a llover.", "Se dicen que va a llover."], d: 0, a: "Kişisiz anlam: 3. çoğul dicen (ya da se dice)." },
        { s: "Las ventanas están ___. (abrir)", o: ["abierto", "abiertas", "abiertos"], d: 1, a: "estar + ortaç: las ventanas → abiertas." }
      ]
    },
    {
      id: "es-b1-19", seviye: "B1", sure: 12,
      baslik: "Dolaylı anlatım: dice que, dijo que, me preguntó si",
      kisa: "dice que viene · dijo que estaba cansado · me preguntó si · me pidió que lo ayudara",
      bolumler: [
        { t: "metin", m: "Ders 34'te dolaylı anlatımın ilk adımını attın: <i>Dice que vendrá → Dijo que vendría</i>. Bu derste bütün sistemi görüyorsun: bir cümleyi aktarırken <b>zamanlar nasıl kayar</b>, <b>sorular</b> nasıl aktarılır (<i>me preguntó si…</i>) ve <b>emir ve ricalar</b> neden subjuntivo alır (<i>me pidió que…</i>). Ayrıca zaman ve yer kelimelerinin nasıl değiştiğini (<i>mañana → al día siguiente</i>) öğreneceksin. Ders 47'deki imperfecto de subjuntivo burada da işine yarayacak." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede aktarma çoğunlukla <b>-dığını, -eceğini söyledi</b> ya da <b>-mış</b> ile yapılır. İspanyolcada <b>que</b> ile bağlanan ikinci cümle, aktarma fiili geçmişteyse zamanını “bir adım geriye” kaydırır.", l: [
          ["Yorgun [ol]{duğunu} söylüyor.", "{Dice que} {está} cansado."],
          ["Yorgun [ol]{duğunu} söyledi.", "{Dijo que} {estaba} cansado."],
          ["Gelip [gel]{meyeceğimi} sordu.", "Me {preguntó si} {iría}."],
          ["Ona yardım [et]{memi} istedi.", "Me {pidió que} lo {ayudara}."]
        ] },
        { t: "tablo", h: "Aktarma fiili geçmişteyse", bas: ["Doğrudan", "Dolaylı (dijo que…)", "Türkçe"], s: [
          ["“{Estoy} cansado.”", "Dijo que {estaba} cansado.", "Yorgun olduğunu söyledi."],
          ["“{He terminado}.”", "Dijo que {había terminado}.", "Bitirdiğini söyledi."],
          ["“{Terminé} ayer.”", "Dijo que {había terminado} el día anterior.", "Bir önceki gün bitirdiğini söyledi."],
          ["“{Iré} mañana.”", "Dijo que {iría} al día siguiente.", "Ertesi gün gideceğini söyledi."],
          ["“{Voy a} llamar.”", "Dijo que {iba a} llamar.", "Arayacağını söyledi."],
          ["“{Estaba} en casa.”", "Dijo que {estaba} en casa.", "Evde olduğunu söyledi."]
        ] },
        { t: "ipucu", h: "Kayma her zaman zorunlu mu?", m: "Aktarma fiili şimdiki zamandaysa (<i>dice</i>) zaman hiç kaymaz: <i>Dice que <b>está</b> cansado</i>. Geçmişteyse kayar; ama söylenen şey hâlâ geçerliyse konuşmada şimdiki zaman kalabilir: <i>Me dijo que <b>es</b> de Sevilla</i> (Sevillalı olduğunu söyledi; hâlâ öyle). İndefinido da konuşmada çoğu zaman olduğu gibi kalır: <i>Dijo que <b>terminó</b> ayer</i>." },
        { t: "tablo", h: "Soruları aktarmak", bas: ["Doğrudan", "Dolaylı", "Türkçe"], s: [
          ["“¿{Tienes} coche?”", "Me preguntó {si} {tenía} coche.", "Arabam olup olmadığını sordu."],
          ["“¿Dónde {vives}?”", "Me preguntó {dónde} {vivía}.", "Nerede oturduğumu sordu."],
          ["“¿Qué {quieres}?”", "Me preguntó {qué} {quería}.", "Ne istediğimi sordu."],
          ["“¿Cuándo {llegarás}?”", "Me preguntó {cuándo} {llegaría}.", "Ne zaman varacağımı sordu."]
        ] },
        { t: "metin", h: "Sorular: si ve soru kelimesi", m: "Evet/hayır soruları <b>si</b> (…-ip …-mediğini) ile aktarılır: <i>Me preguntó <b>si</b> tenía coche</i>. Soru kelimeli sorularda kelime aynen kalır ve <b>vurgu işaretini korur</b>: <i>Me preguntó <b>dónde</b> vivía</i>, <i>Quiere saber <b>cuándo</b> llegamos</i>. Soru işaretleri kalkar. Bu <i>si</i> koşul bildirmez; bu yüzden ardından futuro da gelebilir (47. ders): <i>No sé si <b>vendrá</b></i>." },
        { t: "metin", h: "Emir ve rica: que + subjuntivo", m: "Emir, rica ve tavsiyeler aktarılırken <b>que + subjuntivo</b> kullanılır (35. dersteki istek kuralı). Aktarma fiili şimdiki zamandaysa presente de subjuntivo, geçmişteyse <b>imperfecto de subjuntivo</b> gelir: <i>“Llámame.” → Me dice que lo <b>llame</b></i> (Onu aramamı söylüyor) / <i>Me dijo que lo <b>llamara</b></i> (Onu aramamı söyledi). Rica için <b>pedir</b>, tavsiye için <b>aconsejar</b> ve <b>recomendar</b> kullanılır: <i>Me <b>pidió</b> que lo <b>ayudara</b></i> (Ona yardım etmemi rica etti)." },
        { t: "tablo", h: "Zaman ve yer kelimeleri", bas: ["Doğrudan", "Dolaylı (geçmişte)"], s: [
          ["hoy", "aquel día, ese día"],
          ["ayer", "el día anterior"],
          ["mañana", "al día siguiente"],
          ["ahora", "entonces, en ese momento"],
          ["aquí", "allí"],
          ["este, esta", "ese, esa"]
        ] },
        { t: "ipucu", h: "Hep decir deme", m: "Aktarma fiili cümleye anlam katar: <i>explicar</i> (açıklamak), <i>contar</i> (anlatmak), <i>comentar</i> (söz etmek), <i>añadir</i> (eklemek), <i>prometer</i> (söz vermek), <i>advertir</i> (uyarmak), <i>quejarse de</i> (şikâyet etmek). Örnek: <i>Me <b>prometió</b> que volvería</i> (Döneceğine söz verdi)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["Me pidió que lo {ayudo}.", "Me pidió que lo {ayudara}.", "rica aktarma: que + subjuntivo"],
          ["Me preguntó {que} tenía coche.", "Me preguntó {si} tenía coche.", "evet/hayır sorusu: si"],
          ["Me preguntó {donde} vivía.", "Me preguntó {dónde} vivía.", "soru kelimesi vurgusunu korur"],
          ["Ayer me dijo que {está} enferma, pero hoy ya está bien.", "Ayer me dijo que {estaba} enferma, pero hoy ya está bien.", "artık geçerli değil: zaman kayar"]
        ] },
        { t: "diyalog", h: "Telefondan sonra", l: [
          ["Elena", "¿Quién era?", "Kimdi?"],
          ["Raúl", "Era Javier. {Dice que} {llega} el sábado.", "Javier'di. Cumartesi geleceğini söylüyor."],
          ["Elena", "¿Y qué más te {dijo}?", "Başka ne dedi?"],
          ["Raúl", "Me {preguntó si} {podíamos} recogerlo en el aeropuerto.", "Onu havalimanından alıp alamayacağımızı sordu."],
          ["Elena", "¿Y le {dijiste} que sí?", "Sen de evet dedin mi?"],
          ["Raúl", "Claro. También me {pidió que} le {reserváramos} mesa en su restaurante favorito.", "Tabii. En sevdiği restoranda ona masa ayırtmamızı da rica etti."]
        ] },
        { t: "ornek", l: [
          ["Ana {dice que} {tiene} un trabajo nuevo.", "Ana yeni bir işi [ol]{duğunu} söylüyor."],
          ["Me {dijo que} {había perdido} el tren.", "Treni [kaçır]{dığını} söyledi."],
          ["Nos {explicó que} la tienda {cerraba} a las ocho.", "Dükkânın sekizde [kapan]{dığını} açıkladı."],
          ["Me {prometió que} {volvería} pronto.", "Yakında [dön]{eceğine} söz verdi."],
          ["Le {pregunté si} {quería} venir.", "Ona gelmek [iste]{yip istemediğini} sordum."],
          ["Quieren {saber cuándo} {empieza} el curso.", "Kursun ne zaman [başla]{dığını} öğrenmek istiyorlar."],
          ["El médico me {aconsejó que} {durmiera} más.", "Doktor daha çok [uyu]{mamı} tavsiye etti."],
          ["Mi madre me {dice que} {lleve} paraguas.", "Annem şemsiye [al]{mamı} söylüyor."]
        ] },
        { t: "ozet", l: [
          "Aktarma fiili şimdiki zamandaysa zaman değişmez: <i>Dice que <b>está</b> cansado</i>.",
          "Geçmişteyse bir adım geri: presente → imperfecto, perfecto ve indefinido → pluscuamperfecto, futuro → condicional.",
          "Sorular: evet/hayır <b>si</b> ile; soru kelimesi vurgusunu korur (<i>me preguntó dónde vivía</i>).",
          "Emir ve rica: <b>que + subjuntivo</b>; geçmişte imperfecto de subjuntivo (<i>me pidió que lo ayudara</i>).",
          "Zaman kelimeleri: <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>."
        ] }
      ],
      test: [
        { s: "Zaman kayması: “Estoy cansado.” → Dijo que ___ cansado.", o: ["estaba", "esté", "estuviera"], d: 0, a: "Geçmiş aktarma: presente → imperfecto." },
        { s: "Geçmişte aktarılınca futuro “iré” ne olur?", o: ["iría", "iba", "fuera"], d: 0, a: "futuro → condicional." },
        { s: "“¿Tienes hambre?” → Me preguntó ___ tenía hambre.", o: ["si", "que", "qué"], d: 0, a: "Evet/hayır sorusu: si." },
        { s: "“¿Dónde trabajas?” → Me preguntó ___ trabajaba.", o: ["dónde", "donde", "si dónde"], d: 0, a: "Soru kelimesi vurgusunu korur: dónde." },
        { s: "“Ayúdame.” → Me pidió que lo ___.", o: ["ayudara", "ayudaba", "ayudaré"], d: 0, a: "Geçmişte rica: que + imperfecto de subjuntivo." },
        { s: "“Cierra la puerta.” → Mi madre me dice que ___ la puerta.", o: ["cierre", "cierro", "cerrara"], d: 0, a: "Şimdiki aktarma fiili + emir: presente de subjuntivo." },
        { s: "Zaman kayması: “He perdido las llaves.” → Dijo que ___ las llaves.", o: ["había perdido", "ha perdido", "perdiera"], d: 0, a: "Geçmiş aktarma: perfecto → pluscuamperfecto." },
        { s: "Geçmişte aktarılınca “mañana” ne olur?", o: ["al día siguiente", "el día anterior", "aquel día"], d: 0, a: "mañana → al día siguiente." },
        { s: "“Volveré pronto.” → Me prometió que ___ pronto.", o: ["volvería", "volviera", "vuelva"], d: 0, a: "Söz (futuro) → condicional." },
        { s: "“Vivo en Madrid.” → Dice que ___ en Madrid.", o: ["vive", "vivía", "viviera"], d: 0, a: "Aktarma fiili şimdiki zaman: zaman değişmez." }
      ]
    }
  ],
  // Sıradaki dersler (listede "yakında" olarak görünür)
  plan: []
};
