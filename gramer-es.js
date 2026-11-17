// Word Memorizer · İspanyolca gramer dersleri (A1 + A2)
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
    }
  ],
  // Sıradaki dersler (listede "yakında" olarak görünür)
  plan: []
};
