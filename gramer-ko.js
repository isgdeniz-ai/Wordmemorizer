// Word Memorizer · Korece gramer dersleri (TOPIK 1)
// Örneklerde {…} işaretli kısım vurgulanır. Her örnek: [korece, türkçe, okunuş]
// Her yerde: [kök] mavi, {ek} kırmızı. Tablo hücresinde '|' sonrası okunuş satırı.
// kiyas: Türkçe ile yan yana gösterim, her satır [türkçe, korece, okunuş]
window.GRAMER_PAKET = {
  dil: 'ko',
  dersler: [
    {
      id: 'ko-t1-01', seviye: 'TOPIK 1', sure: 5,
      baslik: 'Cümle dizilişi ve konu eki -은/는',
      kisa: 'Özne · nesne · yüklem · 저는, 선생님은',
      bolumler: [
        { t: 'metin', m: 'Güzel haber: Korece cümle dizilişi Türkçeyle neredeyse aynıdır. <b>Özne – nesne – yüklem</b> sırası izlenir, fiil hep <b>sonda</b> gelir ve ekler Türkçedeki gibi kelimenin arkasına eklenir.' },
        { t: 'tablo', bas: ['', 'Özne', 'Nesne', 'Yüklem'], s: [
          ['Türkçe', 'Ben', 'kahve', 'içerim.'],
          ['Korece', '[저]{는}|[jeo]{neun}', '[커피]{를}|[keopi]{reul}', '마셔요|masyeoyo']
        ] },
        { t: 'metin', h: 'Konu eki -은/는', m: '<b>-은/는</b> cümlenin <b>konusunu</b> gösterir; Türkçedeki "… ise, … -e gelince" anlamına yakındır. Kelime <b>ünsüzle</b> bitiyorsa <b>-은</b>, <b>ünlüyle</b> bitiyorsa <b>-는</b> gelir.' },
        { t: 'tablo', bas: ['Kelime', 'Son ses', 'Ek almış hali'], s: [
          ['저 (ben)|jeo', 'ünlü', '[저]{는}|[jeo]{neun}'],
          ['친구 (arkadaş)|chingu', 'ünlü', '[친구]{는}|[chingu]{neun}'],
          ['선생님 (öğretmen)|seonsaengnim', 'ünsüz ㅁ', '[선생님]{은}|[seonsaengnim]{eun}'],
          ['책 (kitap)|chaek', 'ünsüz ㄱ', '[책]{은}|[chaeg]{eun}']
        ] },
        { t: 'metin', h: 'Karşılaştırmada da kullanılır', m: '<i>저는 커피를 좋아해요. 동생<b>은</b> 차를 좋아해요.</i> — Ben kahveyi severim. Kardeşim <b>ise</b> çayı sever.' },
        { t: 'ipucu', h: 'Özne çoğu zaman düşer', m: 'Kimden söz edildiği belliyse özne söylenmez: <i>(저는) 학생이에요</i> → sadece <i>학생이에요</i> (Öğrenciyim). Türkçedeki "Ben öğrenciyim" yerine "Öğrenciyim" demek gibi.' },
        { t: 'ornek', l: [
          ['[저]{는} 학생이에요.', 'Ben öğrenciyim.', '[jeo]{neun} haksaengieyo'],
          ['[이름]{은} 뭐예요?', 'Adın ne?', '[ireum]{eun} mwoyeyo?'],
          ['[오늘]{은} 바빠요.', 'Bugün (ise) meşgulüm.', '[oneur]{eun} bappayo'],
          ['[동생]{은} 키가 커요.', 'Kardeşim uzun boylu.', '[dongsaeng]{eun} kiga keoyo']
        ] }
      ],
      test: [
        { s: '친구 (arkadaş) + konu eki', o: ['친구은', '친구는'], d: 1, a: '친구 ünlüyle bitiyor, bu yüzden -는 gelir.' },
        { s: '선생님 (öğretmen) + konu eki', o: ['선생님은', '선생님는'], d: 0, a: '선생님 ünsüz ㅁ ile bitiyor, bu yüzden -은 gelir.' },
        { s: 'Korece cümlede fiil nerede durur?', o: ['Başta', 'Ortada', 'Sonda'], d: 2, a: 'Tıpkı Türkçede olduğu gibi fiil cümlenin sonunda gelir.' },
        { s: '책 (kitap) + konu eki', o: ['책는', '책은'], d: 1, a: '책 ünsüz ㄱ ile bitiyor: 책은.' },
        { s: '"저는 학생이에요" ne demek?', o: ['Ben öğrenciyim.', 'Ben öğretmenim.', 'O öğrenci.'], d: 0, a: '저는 = ben, 학생 = öğrenci, 이에요 = -im.' }
      ]
    },
    {
      id: 'ko-t1-02', seviye: 'TOPIK 1', sure: 5,
      baslik: '"-dır" eki: -이에요/예요 ve 아니에요',
      kisa: '학생이에요, 의사예요 · 학생이 아니에요',
      bolumler: [
        { t: 'metin', m: 'Türkçedeki "-dır, -im" Korece\'de ismin arkasına eklenir. İsim <b>ünsüzle</b> bitiyorsa <b>-이에요</b>, <b>ünlüyle</b> bitiyorsa <b>-예요</b> gelir.' },
        { t: 'tablo', bas: ['İsim', 'Ek almış hali', 'Anlamı'], s: [
          ['학생 (öğrenci)|haksaeng', '[학생]{이에요}|[haksaeng]{ieyo}', 'Öğrenciyim / öğrenci'],
          ['물 (su)|mul', '[물]{이에요}|[mur]{ieyo}', 'Su(dur)'],
          ['의사 (doktor)|uisa', '[의사]{예요}|[uisa]{yeyo}', 'Doktorum / doktor'],
          ['커피 (kahve)|keopi', '[커피]{예요}|[keopi]{yeyo}', 'Kahve(dir)']
        ] },
        { t: 'metin', h: 'Olumsuz: "değil"', m: 'İsim + <b>이/가 아니에요</b>. Ünsüzden sonra <b>이</b>, ünlüden sonra <b>가</b> gelir: <i>학생<b>이</b> 아니에요</i> (öğrenci değilim), <i>의사<b>가</b> 아니에요</i> (doktor değilim).' },
        { t: 'metin', h: 'Soru', m: 'Biçim aynı kalır, yalnızca ses yükselir ve sona soru işareti gelir: <i>학생이에요?</i> (Öğrenci misin?)' },
        { t: 'ipucu', h: 'Resmî biçim', m: 'Haberlerde, sunumlarda ve kendini resmî tanıtırken <b>입니다</b> ve <b>이/가 아닙니다</b> kullanılır: <i>저는 데니즈입니다.</i> (Ben Deniz\'im.)' },
        { t: 'ornek', l: [
          ['저는 튀르키예 [사람]{이에요}.', "Ben [Türk]{'üm}.", 'jeoneun twireukiye [saram]{ieyo}'],
          ['이거 [뭐]{예요}?', 'Bu ne?', 'igeo [mwo]{yeyo}?'],
          ['저는 [학생]{이 아니에요}.', 'Ben [öğrenci] {değilim}.', 'jeoneun [haksaeng]{i anieyo}'],
          ['저는 [데니즈]{입니다}.', "Ben [Deniz]{'im}. (resmî)", 'jeoneun [denijeu]{imnida}']
        ] }
      ],
      test: [
        { s: '의사 (doktor) + "-dır"', o: ['의사이에요', '의사예요'], d: 1, a: '의사 ünlüyle bitiyor: 의사예요.' },
        { s: '학생 (öğrenci) + "-dır"', o: ['학생이에요', '학생예요'], d: 0, a: '학생 ünsüzle bitiyor: 학생이에요.' },
        { s: '"Doktor değilim."', o: ['의사가 아니에요.', '의사이 아니에요.', '의사예요 아니에요.'], d: 0, a: '의사 ünlüyle bittiği için 가 gelir: 의사가 아니에요.' },
        { s: '물 (su) + "-dır"', o: ['물예요', '물이에요'], d: 1, a: '물 ünsüz ㄹ ile bitiyor: 물이에요.' },
        { s: 'Resmî "-dır" biçimi hangisi?', o: ['입니다', '이에요', '아니에요'], d: 0, a: '입니다 resmî biçimdir; 이에요/예요 günlük kibar biçimdir.' }
      ]
    },
    {
      id: 'ko-t1-03', seviye: 'TOPIK 1', sure: 6,
      baslik: 'Özne eki -이/가 ve 있어요 / 없어요',
      kisa: 'Var, yok · 시간이 있어요',
      bolumler: [
        { t: 'metin', m: '<b>-이/가</b> özneyi işaretler: ünsüzden sonra <b>이</b>, ünlüden sonra <b>가</b>. Özellikle <b>yeni bilgiyi</b> ve "kim? ne?" sorusunun cevabını vurgular.' },
        { t: 'tablo', bas: ['Son ses', 'Örnekler'], s: [
          ['Ünsüz → 이', '[책]{이}, [사람]{이}, [시간]{이}|[chaeg]{i}, [saram]{i}, [sigan]{i}'],
          ['Ünlü → 가', '[친구]{가}, [차]{가}, [커피]{가}|[chingu]{ga}, [cha]{ga}, [keopi]{ga}']
        ] },
        { t: 'metin', h: 'Var / yok', m: '<b>있어요</b> "var, sahip olmak", <b>없어요</b> "yok, sahip olmamak" demektir. Türkçedeki "var / yok" mantığıyla birebir aynıdır: <i>시간이 있어요</i> (Vaktim var), <i>돈이 없어요</i> (Param yok).' },
        { t: 'metin', h: 'Bir şeyin yeri', m: 'Yer + <b>에</b> + 있어요: <i>화장실이 어디에 있어요?</i> (Tuvalet nerede?) — <i>은행 옆에 있어요.</i> (Bankanın yanında.)' },
        { t: 'ipucu', h: '-은/는 mü, -이/가 mı?', m: 'Konuyu tanıtırken ve karşılaştırırken <b>-은/는</b>; yeni bilgide ve 누가 (kim), 뭐가 (ne) gibi soru kelimeleriyle <b>-이/가</b>. <i>누가 왔어요?</i> (Kim geldi?) — 누구는 değil.' },
        { t: 'ipucu', h: 'Kısalan biçimler', m: '저 + 가 → <b>제가</b> (ben), 나 + 가 → <b>내가</b>, 누구 + 가 → <b>누가</b> (kim).' },
        { t: 'ornek', l: [
          ['[시간]{이} 있어요?', 'Vaktin var mı?', '[sigan]{i} isseoyo?'],
          ['[친구]{가} 많아요.', 'Arkadaşım çok.', '[chingu]{ga} manayo'],
          ['[돈]{이} 없어요.', 'Param yok.', '[don]{i} eopseoyo'],
          ['[고양이]{가} 있어요.', 'Kedim var.', '[goyangi]{ga} isseoyo'],
          ['{누가} 왔어요?', 'Kim geldi?', '{nuga} wasseoyo?']
        ] }
      ],
      test: [
        { s: '책 (kitap) + özne eki', o: ['책이', '책가'], d: 0, a: '책 ünsüzle bitiyor: 책이.' },
        { s: '친구 (arkadaş) + özne eki', o: ['친구이', '친구가'], d: 1, a: '친구 ünlüyle bitiyor: 친구가.' },
        { s: '"Param yok."', o: ['돈이 있어요.', '돈이 없어요.', '돈은 아니에요.'], d: 1, a: '없어요 "yok" demektir.' },
        { s: '저 (ben) + 가', o: ['저가', '제가'], d: 1, a: '저 + 가 kısalarak 제가 olur.' },
        { s: '"Kim geldi?"', o: ['누구는 왔어요?', '누가 왔어요?'], d: 1, a: 'Soru kelimesiyle özne eki -이/가 kullanılır; 누구 + 가 = 누가.' }
      ]
    },
    {
      id: 'ko-t1-04', seviye: 'TOPIK 1', sure: 6,
      baslik: 'Nesne eki -을/를; yer ekleri -에 ve -에서',
      kisa: '커피를 마셔요 · 학교에 가요 · 집에서 쉬어요',
      bolumler: [
        { t: 'metin', h: 'Nesne eki -을/를', m: 'Türkçedeki <b>-i</b> hâli gibi nesneyi gösterir: <i>커피<b>를</b> 마셔요</i> (Kahve içiyorum). Ünsüzden sonra <b>을</b>, ünlüden sonra <b>를</b>.' },
        { t: 'tablo', bas: ['Ek', 'Türkçe karşılığı', 'Örnek'], s: [
          ['-을/를|-eul / -reul', '-i (nesne)', '[책]{을} 읽어요 · [커피]{를} 마셔요|[chaeg]{eul} ilgeoyo · [keopi]{reul} masyeoyo'],
          ['-에|-e', '-e (yön) · -de (bulunma) · zaman', '[학교]{에} 가요 · [집]{에} 있어요 · [세 시]{에}|[hakgyo]{e} gayo · [jib]{e} isseoyo · [se si]{e}'],
          ['-에서|-eseo', '-de (eylem yeri) · -den', '[식당]{에서} 먹어요 · [한국]{에서} 왔어요|[sikdang]{eseo} meogeoyo · [hangug]{eseo} wasseoyo']
        ] },
        { t: 'metin', h: '-에: yön, bulunma, zaman', m: '<i>학교에 가요</i> (Okula gidiyorum), <i>집에 있어요</i> (Evdeyim), <i>세 시에 만나요</i> (Saat üçte buluşalım).' },
        { t: 'metin', h: '-에서: eylemin yapıldığı yer, -den', m: '<i>도서관에서 공부해요</i> (Kütüphanede ders çalışıyorum), <i>서울에서 왔어요</i> (Seul\'den geldim).' },
        { t: 'ipucu', h: 'İki türlü "-de"', m: 'Bir yerde <b>bulunmak</b> → <b>-에</b>: <i>집에 있어요</i>. Bir yerde bir şey <b>yapmak</b> → <b>-에서</b>: <i>집에서 쉬어요</i> (Evde dinleniyorum).' },
        { t: 'ipucu', h: 'Konuşmada düşer', m: 'Günlük konuşmada nesne eki çoğu zaman söylenmez: <i>커피 마셔요.</i>' },
        { t: 'ornek', l: [
          ['[물]{을} 주세요.', '[Su]{yu} verin.', '[mur]{eul} juseyo'],
          ['[영화]{를} 봐요.', 'Film izliyorum.', '[yeonghwa]{reul} bwayo'],
          ['내일 [부산]{에} 가요.', "Yarın [Busan]{'a} gidiyorum.", 'naeil [busan]{e} gayo'],
          ['[카페]{에서} 친구를 만나요.', '[Kafe]{de} arkadaşımla buluşuyorum.', '[kape]{eseo} chingureul mannayo'],
          ['[일곱 시]{에} 일어나요.', '[Saat yedi]{de} kalkarım.', '[ilgop si]{e} ireonayo']
        ] }
      ],
      test: [
        { s: '커피 (kahve) + nesne eki', o: ['커피을', '커피를'], d: 1, a: '커피 ünlüyle bitiyor: 커피를.' },
        { s: '밥 (yemek) + nesne eki', o: ['밥을', '밥를'], d: 0, a: '밥 ünsüzle bitiyor: 밥을.' },
        { s: '"Okula gidiyorum."', o: ['학교에 가요.', '학교에서 가요.', '학교를 가요.'], d: 0, a: 'Yön bildiren -e için -에 kullanılır.' },
        { s: '"Kütüphanede ders çalışıyorum."', o: ['도서관에 공부해요.', '도서관에서 공부해요.'], d: 1, a: 'Eylemin yapıldığı yer -에서 alır.' },
        { s: '"Evdeyim."', o: ['집에 있어요.', '집에서 있어요.'], d: 0, a: 'Bir yerde bulunmak -에 + 있어요 ile söylenir.' }
      ]
    },
    {
      id: 'ko-t1-05', seviye: 'TOPIK 1', sure: 7,
      baslik: 'Şimdiki zaman: -아요 / -어요 / -해요',
      kisa: '가요, 먹어요, 공부해요',
      bolumler: [
        { t: 'metin', m: 'Sözlükte fiiller <b>-다</b> ile biter: 가다, 먹다. Günlük kibar konuşmada <b>-다</b> atılır ve gövdeye <b>-아요</b>, <b>-어요</b> ya da <b>-해요</b> eklenir. Bu biçim hem şimdiki hem geniş zamanı karşılar.' },
        { t: 'tablo', h: 'Hangi ek?', bas: ['Gövdenin son ünlüsü', 'Ek', 'Örnek'], s: [
          ['ㅏ ya da ㅗ|a, o', '+ {아요}|{ayo}', '살다 → [살]{아요} · 좋다 → [좋]{아요}|salda → [sar]{ayo} · jota → [jo]{ayo}'],
          ['Diğer ünlüler', '+ {어요}|{eoyo}', '먹다 → [먹]{어요} · 읽다 → [읽]{어요}|meokda → [meog]{eoyo} · ikda → [ilg]{eoyo}'],
          ['하다 ile biten|hada', '→ {해요}|{haeyo}', '공부하다 → [공부]{해요}|gongbuhada → [gongbu]{haeyo}']
        ] },
        { t: 'tablo', h: 'Gövde ünlüyle bitince birleşir', bas: ['Sözlük hali', 'Birleşme', 'Sonuç'], s: [
          ['가다 (gitmek)|gada', '[가] + {아요}|[ga] + {ayo}', '[가]{요}|[ga]{yo}'],
          ['오다 (gelmek)|oda', '[오] + {아요}|[o] + {ayo}', '{와요}|{wayo}'],
          ['보다 (görmek)|boda', '[보] + {아요}|[bo] + {ayo}', '{봐요}|{bwayo}'],
          ['마시다 (içmek)|masida', '[마시] + {어요}|[masi] + {eoyo}', '[마]{셔요}|[ma]{syeoyo}'],
          ['주다 (vermek)|juda', '[주] + {어요}|[ju] + {eoyo}', '{줘요}|{jwoyo}'],
          ['배우다 (öğrenmek)|baeuda', '[배우] + {어요}|[baeu] + {eoyo}', '[배]{워요}|[bae]{woyo}']
        ] },
        { t: 'ipucu', h: 'Kişiye göre değişmez', m: 'Bu ek kişiye göre çekilmez: <b>가요</b> "giderim, gidersin, gider, gideriz" hepsidir. Kimin yaptığı özneden ya da bağlamdan anlaşılır.' },
        { t: 'ipucu', h: 'Soru', m: 'Aynı biçim, ses yükselir: <i>가요?</i> (Gidiyor musun?) — <i>네, 가요.</i> (Evet, gidiyorum.)' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede "-iyor" eki ünlü uyumuna göre <b>-ıyor, -uyor, -üyor</b> olur. Korecede de ek, gövdenin son ünlüsüne göre değişir. Fark: Korecede kişi eki yoktur.', l: [
          ['[yaşı]{yor}', '[살]{아요}', '[sar]{ayo}'],
          ['[yi]{yor}', '[먹]{어요}', '[meog]{eoyo}'],
          ['[çalış]{ıyor}', '[공부]{해요}', '[gongbu]{haeyo}']
        ] },
        { t: 'ornek', l: [
          ['저는 서울에 [살]{아요}.', "Seul'de [yaşı]{yorum}.", 'jeoneun seoure [sar]{ayo}'],
          ['김치를 [먹]{어요}.', 'Kimçi [yi]{yorum}.', 'gimchireul [meog]{eoyo}'],
          ['한국어를 [공부]{해요}.', 'Korece [çalış]{ıyorum}.', 'hangugeoreul [gongbu]{haeyo}'],
          ['커피를 [마]{셔요}?', 'Kahve [iç]{er misin}?', 'keopireul [ma]{syeoyo}?'],
          ['친구가 {와요}.', 'Arkadaşım [gel]{iyor}.', 'chinguga {wayo}']
        ] }
      ],
      test: [
        { s: '먹다 (yemek) →', o: ['먹아요', '먹어요', '먹해요'], d: 1, a: 'Gövdenin ünlüsü ㅓ: + 어요 → 먹어요.' },
        { s: '살다 (yaşamak) →', o: ['살아요', '살어요'], d: 0, a: 'Gövdenin ünlüsü ㅏ: + 아요 → 살아요.' },
        { s: '공부하다 (ders çalışmak) →', o: ['공부하아요', '공부해요'], d: 1, a: '하다 ile biten fiiller 해요 olur.' },
        { s: '마시다 (içmek) →', o: ['마시어요', '마셔요', '마사요'], d: 1, a: '마시 + 어요 birleşip 마셔요 olur.' },
        { s: '보다 (görmek) →', o: ['봐요', '보어요', '버요'], d: 0, a: '보 + 아요 birleşip 봐요 olur.' }
      ]
    },
    {
      id: 'ko-t1-06', seviye: 'TOPIK 1', sure: 6,
      baslik: 'Olumsuzluk: 안 ve 못',
      kisa: 'Yapmıyorum · yapamıyorum',
      bolumler: [
        { t: 'metin', m: 'Korecede iki ayrı olumsuzluk vardır. <b>안</b> "yapmıyorum" (istemiyorum ya da öyle değil), <b>못</b> "yapamıyorum" (elimde değil, beceremiyorum) demektir. İkisi de fiilin <b>hemen önüne</b> gelir.' },
        { t: 'tablo', bas: ['Olumlu', '안 (-mıyor)', '못 (-amıyor)'], s: [
          ['가요|gayo', '{안} [가요]|{an} [gayo]', '{못} [가요]|{mot} [gayo]'],
          ['먹어요|meogeoyo', '{안} [먹어요]|{an} [meogeoyo]', '{못} [먹어요]|{mon} [meogeoyo]'],
          ['자요|jayo', '{안} [자요]|{an} [jayo]', '{못} [자요]|{mot} [jayo]']
        ] },
        { t: 'metin', h: '하다 fiillerinde araya girer', m: '"İsim + 하다" biçimindeki fiillerde 안 ve 못, ismin ardına ve 하다\'nın önüne gelir: <i>공부<b>해요</b> → 공부 <b>안</b> 해요</i>.' },
        { t: 'tablo', bas: ['Olumlu', 'Olumsuz', 'Anlamı'], s: [
          ['공부해요|gongbuhaeyo', '[공부] {안} [해요]|[gongbu] {an} [haeyo]', 'Ders çalışmıyorum'],
          ['운동해요|undonghaeyo', '[운동] {안} [해요]|[undong] {an} [haeyo]', 'Spor yapmıyorum'],
          ['수영해요|suyeonghaeyo', '[수영] {못} [해요]|[suyeong] {mot}[aeyo]', 'Yüzemiyorum'],
          ['좋아해요|joahaeyo', '{안} [좋아해요]|{an} [joahaeyo]', 'Sevmiyorum']
        ] },
        { t: 'ipucu', h: 'Sıfatlar ve 좋아하다', m: 'Sıfatlarda ve 좋아하다 (sevmek) gibi tek parça fiillerde 안 en başa gelir: <i>안 바빠요</i> (meşgul değilim), <i>안 좋아해요</i>. Sıfatlarla <b>못</b> kullanılmaz.' },
        { t: 'ipucu', h: 'Özel olumsuzlar', m: 'Bazı kelimelerin kendi olumsuzu vardır: <b>있어요 → 없어요</b> (var → yok), <b>알아요 → 몰라요</b> (biliyorum → bilmiyorum), <b>이에요 → 아니에요</b> (-dır → değil).' },
        { t: 'ipucu', h: 'Okunuş', m: '<b>못</b> tek başına "mot" okunur; ardından gelen sese göre değişir: <i>못 먹어요</i> "mon meogeoyo", <i>못 해요</i> "motaeyo" diye söylenir.' },
        { t: 'ornek', l: [
          ['저는 고기를 {안} 먹어요.', 'Ben et yemiyorum.', 'jeoneun gogireul {an} meogeoyo'],
          ['오늘은 학교에 {안} 가요.', 'Bugün okula gitmiyorum.', 'oneureun hakgyoe {an} gayo'],
          ['매운 음식을 {못} 먹어요.', 'Acı yemek yiyemiyorum.', 'maeun eumsigeul {mon} meogeoyo'],
          ['수영을 {못} 해요.', 'Yüzemiyorum.', 'suyeongeul {mot}aeyo'],
          ['오늘은 {안} 바빠요.', 'Bugün meşgul değilim.', 'oneureun {an} bappayo']
        ] }
      ],
      test: [
        { s: '"Gitmiyorum."', o: ['가요 안', '안 가요', '가 안 요'], d: 1, a: '안 fiilin hemen önüne gelir: 안 가요.' },
        { s: '"Ders çalışmıyorum."', o: ['안 공부해요', '공부 안 해요'], d: 1, a: 'İsim + 하다 fiillerinde 안 araya girer: 공부 안 해요.' },
        { s: 'Yüzmeyi bilmiyorsun. Hangisini dersin?', o: ['수영 안 해요', '수영 못 해요'], d: 1, a: 'Beceremediğimiz şeyler için 못 kullanılır.' },
        { s: '있어요 (var) olumsuzu', o: ['안 있어요', '없어요', '못 있어요'], d: 1, a: '있어요 fiilinin kendi olumsuzu vardır: 없어요.' },
        { s: '"Meşgul değilim."', o: ['안 바빠요', '못 바빠요'], d: 0, a: 'Sıfatlarla 못 kullanılmaz; 안 gelir.' }
      ]
    },
    {
      id: 'ko-t1-07', seviye: 'TOPIK 1', sure: 7,
      baslik: 'Geçmiş zaman: -았어요 / -었어요',
      kisa: '갔어요, 먹었어요, 했어요',
      bolumler: [
        { t: 'metin', m: 'Geçmiş zaman, şimdiki zamandaki kuralın aynısıyla kurulur: gövdenin son ünlüsü <b>ㅏ / ㅗ</b> ise <b>-았어요</b>, diğer ünlülerde <b>-었어요</b>, 하다 fiillerinde <b>했어요</b>.' },
        { t: 'ipucu', h: 'Kolay yol', m: 'Şimdiki zamanı biliyorsan iş çok kolay: <b>요</b>\'yu at, yerine <b>ㅆ어요</b> koy. <i>가요 → 갔어요</i>, <i>먹어요 → 먹었어요</i>, <i>해요 → 했어요</i>.' },
        { t: 'tablo', bas: ['Sözlük hali', 'Şimdiki', 'Geçmiş'], s: [
          ['가다 (gitmek)|gada', '[가]{요}|[ga]{yo}', '[가]{ㅆ어요} → 갔어요|[ga]{sseoyo}'],
          ['오다 (gelmek)|oda', '[와]{요}|[wa]{yo}', '[와]{ㅆ어요} → 왔어요|[wa]{sseoyo}'],
          ['보다 (görmek)|boda', '[봐]{요}|[bwa]{yo}', '[봐]{ㅆ어요} → 봤어요|[bwa]{sseoyo}'],
          ['먹다 (yemek)|meokda', '[먹어]{요}|[meogeo]{yo}', '[먹어]{ㅆ어요} → 먹었어요|[meogeo]{sseoyo}'],
          ['마시다 (içmek)|masida', '[마셔]{요}|[masyeo]{yo}', '[마셔]{ㅆ어요} → 마셨어요|[masyeo]{sseoyo}'],
          ['하다 (yapmak)|hada', '[해]{요}|[hae]{yo}', '[해]{ㅆ어요} → 했어요|[hae]{sseoyo}']
        ] },
        { t: 'metin', h: '"-dı, -ydı": isimlerde', m: '이에요 / 예요 geçmişte <b>이었어요</b> (ünsüzden sonra) ve <b>였어요</b> (ünlüden sonra) olur.' },
        { t: 'tablo', bas: ['Şimdiki', 'Geçmiş', 'Anlamı'], s: [
          ['학생이에요|haksaengieyo', '[학생]{이었어요}|[haksaeng]{ieosseoyo}', 'Öğrenciydim'],
          ['의사예요|uisayeyo', '[의사]{였어요}|[uisa]{yeosseoyo}', 'Doktordum']
        ] },
        { t: 'tablo', h: 'Sık kullanılan zaman kelimeleri', bas: ['Korece', 'Okunuş', 'Anlamı'], s: [
          ['어제', 'eoje', 'dün'],
          ['아까', 'akka', 'az önce'],
          ['지난주', 'jinanju', 'geçen hafta'],
          ['작년', 'jangnyeon', 'geçen yıl']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede "-di" eki ünlü uyumuna göre <b>-dı, -du, -tü</b> olur. Korecede de geçmiş zaman eki gövdenin ünlüsüne göre <b>-았어요</b> ya da <b>-었어요</b> olur.', l: [
          ['[ye]{di}', '[먹]{었어요}', '[meog]{eosseoyo}'],
          ['[güzel]{di}', '[좋]{았어요}', '[jo]{asseoyo}'],
          ['[çalış]{tı}', '[공부]{했어요}', '[gongbu]{haesseoyo}']
        ] },
        { t: 'ornek', l: [
          ['어제 친구를 [만]{났어요}.', 'Dün arkadaşımla [buluş]{tum}.', 'eoje chingureul [man]{nasseoyo}'],
          ['아침을 [먹]{었어요}?', 'Kahvaltı [yap]{tın mı}?', 'achimeul [meog]{eosseoyo}?'],
          ['주말에 영화를 {봤어요}.', 'Hafta sonu film [izle]{dim}.', 'jumare yeonghwareul {bwasseoyo}'],
          ['한국어를 [공부]{했어요}.', 'Korece [çalış]{tım}.', 'hangugeoreul [gongbu]{haesseoyo}'],
          ['어제는 날씨가 [좋]{았어요}.', 'Dün hava [güzel]{di}.', 'eojeneun nalssiga [jo]{asseoyo}']
        ] }
      ],
      test: [
        { s: '가다 (gitmek) → geçmiş', o: ['갔어요', '가었어요', '갔아요'], d: 0, a: '가요 → 요 atılır, ㅆ어요 gelir: 갔어요.' },
        { s: '먹다 (yemek) → geçmiş', o: ['먹았어요', '먹었어요', '먹했어요'], d: 1, a: 'Gövde ünlüsü ㅓ olduğu için -었어요: 먹었어요.' },
        { s: '공부하다 → geçmiş', o: ['공부했어요', '공부하었어요'], d: 0, a: '하다 fiilleri geçmişte 했어요 olur.' },
        { s: '"Öğrenciydim."', o: ['학생였어요', '학생이었어요'], d: 1, a: '학생 ünsüzle bittiği için 이었어요 gelir.' },
        { s: '"어제" ne demek?', o: ['bugün', 'yarın', 'dün'], d: 2, a: '어제 = dün, 오늘 = bugün, 내일 = yarın.' }
      ]
    },
    {
      id: 'ko-t1-08', seviye: 'TOPIK 1', sure: 6,
      baslik: 'Gelecek zaman: -(으)ㄹ 거예요',
      kisa: '갈 거예요, 먹을 거예요',
      bolumler: [
        { t: 'metin', m: 'Plan ve niyet anlatmak için fiil gövdesine <b>-(으)ㄹ 거예요</b> eklenir. Gövde <b>ünlüyle</b> bitiyorsa alta <b>ㄹ</b> yazılır, <b>ünsüzle</b> bitiyorsa <b>을</b> eklenir.' },
        { t: 'tablo', bas: ['Sözlük hali', 'Gövde', 'Gelecek'], s: [
          ['가다 (gitmek)|gada', '가 (ünlü)|ga', '[가]{ㄹ 거예요} → 갈 거예요|[ga]{l geoyeyo}'],
          ['보다 (görmek)|boda', '보 (ünlü)|bo', '[보]{ㄹ 거예요} → 볼 거예요|[bo]{l geoyeyo}'],
          ['하다 (yapmak)|hada', '하 (ünlü)|ha', '[하]{ㄹ 거예요} → 할 거예요|[ha]{l geoyeyo}'],
          ['먹다 (yemek)|meokda', '먹 (ünsüz)|meok', '[먹]{을 거예요}|[meog]{eul geoyeyo}'],
          ['읽다 (okumak)|ikda', '읽 (ünsüz)|ik', '[읽]{을 거예요}|[ilg]{eul geoyeyo}']
        ] },
        { t: 'ipucu', h: 'ㄹ ile biten gövdeler', m: 'Gövde zaten ㄹ ile bitiyorsa yalnızca <b>거예요</b> eklenir: <i>살다 → 살 거예요</i> (yaşayacağım), <i>만들다 → 만들 거예요</i> (yapacağım).' },
        { t: 'ipucu', h: 'Okunuş', m: 'Yazıda 거예요 olsa da konuşmada sert okunur: "kkeoyeyo". <i>갈 거예요</i> → "gal kkeoyeyo".' },
        { t: 'metin', h: 'Tahmin için de kullanılır', m: 'Aynı biçim "herhalde, büyük ihtimalle" anlamında tahmin de bildirir: <i>내일 비가 올 거예요.</i> (Yarın yağmur yağacak.)' },
        { t: 'tablo', h: 'Sık kullanılan zaman kelimeleri', bas: ['Korece', 'Okunuş', 'Anlamı'], s: [
          ['내일', 'naeil', 'yarın'],
          ['이따가', 'ittaga', 'birazdan'],
          ['다음 주', 'daeum ju', 'gelecek hafta'],
          ['내년', 'naenyeon', 'gelecek yıl']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede gelecek zaman eki ünlüye göre <b>-ecek / -acak</b> olur. Korecede ek, gövdenin ünlüyle mi ünsüzle mi bittiğine göre değişir.', l: [
          ['[gid]{ecek}', '[가]{ㄹ 거예요}', '[ga]{l geoyeyo}'],
          ['[yap]{acak}', '[하]{ㄹ 거예요}', '[ha]{l geoyeyo}'],
          ['[yi]{yecek}', '[먹]{을 거예요}', '[meog]{eul geoyeyo}']
        ] },
        { t: 'ornek', l: [
          ['내일 뭐 {할 거예요}?', 'Yarın ne [yap]{acaksın}?', 'naeil mwo [ha]{l geoyeyo}?'],
          ['주말에 집에서 {쉴 거예요}.', 'Hafta sonu evde [dinlen]{eceğim}.', 'jumare jibeseo [swi]{l geoyeyo}'],
          ['저녁에 비빔밥을 [먹]{을 거예요}.', 'Akşam bibimbap [yi]{yeceğim}.', 'jeonyeoge bibimbabeul [meog]{eul geoyeyo}'],
          ['내년에 한국에 {갈 거예요}.', "Gelecek yıl Kore'ye [gid]{eceğim}.", 'naenyeone hanguge [ga]{l geoyeyo}'],
          ['내일은 비가 {올 거예요}.', 'Yarın yağmur [yağ]{acak}.', 'naeireun biga [o]{l geoyeyo}']
        ] }
      ],
      test: [
        { s: '가다 (gitmek) → gelecek', o: ['가을 거예요', '갈 거예요'], d: 1, a: 'Gövde ünlüyle bitiyor, alta ㄹ gelir: 갈 거예요.' },
        { s: '먹다 (yemek) → gelecek', o: ['먹을 거예요', '먹ㄹ 거예요', '먹 거예요'], d: 0, a: 'Gövde ünsüzle bitiyor: 먹을 거예요.' },
        { s: '살다 (yaşamak) → gelecek', o: ['살을 거예요', '살 거예요'], d: 1, a: 'Gövde ㄹ ile bittiği için yalnızca 거예요 eklenir.' },
        { s: '"Yarın ne yapacaksın?"', o: ['내일 뭐 했어요?', '내일 뭐 할 거예요?', '어제 뭐 할 거예요?'], d: 1, a: '내일 = yarın; 하다 → 할 거예요.' },
        { s: '"내일 비가 올 거예요" ne bildirir?', o: ['Geçmiş bir olay', 'Tahmin', 'Rica'], d: 1, a: '-(으)ㄹ 거예요 tahmin de bildirir: "Yarın yağmur yağacak."' }
      ]
    },
    {
      id: 'ko-t1-09', seviye: 'TOPIK 1', sure: 5,
      baslik: 'İstek: -고 싶어요',
      kisa: '가고 싶어요, 먹고 싶어요',
      bolumler: [
        { t: 'metin', m: '"-mek istiyorum" demek için fiil gövdesine <b>-고 싶어요</b> eklenir. En kolay eklerden biridir: gövde ünlüyle de bitse ünsüzle de bitse <b>hiç değişmez</b>.' },
        { t: 'tablo', bas: ['Sözlük hali', 'İstek', 'Anlamı'], s: [
          ['가다|gada', '[가]{고 싶어요}|[ga]{go sipeoyo}', 'Gitmek istiyorum'],
          ['먹다|meokda', '[먹]{고 싶어요}|[meok]{go sipeoyo}', 'Yemek istiyorum'],
          ['보다|boda', '[보]{고 싶어요}|[bo]{go sipeoyo}', 'Görmek istiyorum'],
          ['쉬다|swida', '[쉬]{고 싶어요}|[swi]{go sipeoyo}', 'Dinlenmek istiyorum'],
          ['배우다|baeuda', '[배우]{고 싶어요}|[baeu]{go sipeoyo}', 'Öğrenmek istiyorum']
        ] },
        { t: 'tablo', h: 'Olumsuz ve geçmiş', bas: ['Biçim', 'Örnek', 'Anlamı'], s: [
          ['Olumsuz (kısa)', '{안} [가고 싶어요]|{an} [gago sipeoyo]', 'Gitmek istemiyorum'],
          ['Olumsuz (uzun)', '[가고 싶]{지 않아요}|[gago sip]{ji anayo}', 'Gitmek istemiyorum'],
          ['Geçmiş', '[가고 싶]{었어요}|[gago sip]{eosseoyo}', 'Gitmek istiyordum']
        ] },
        { t: 'ipucu', h: 'Yalnızca "ben" ve "sen" için', m: '<b>-고 싶어요</b> kendi isteğini söylerken ya da karşındakine sorarken kullanılır. Üçüncü kişi için <b>-고 싶어해요</b> denir: <i>동생이 가고 싶어해요.</i> (Kardeşim gitmek istiyor.)' },
        { t: 'ipucu', h: '보고 싶어요', m: '<b>보고 싶어요</b> kelimesi kelimesine "görmek istiyorum" demektir ama birine söylendiğinde "<b>Seni özledim</b>" anlamına gelir.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Kuruluş aynıdır: fiil gövdesi + istek kalıbı. Türkçede "-mek / -mak" ünlüye göre değişir; Korecede <b>-고 싶어요</b> hiç değişmez.', l: [
          ['[git]{mek istiyorum}', '[가]{고 싶어요}', '[ga]{go sipeoyo}'],
          ['[ye]{mek istiyorum}', '[먹]{고 싶어요}', '[meok]{go sipeoyo}'],
          ['[oku]{mak istiyorum}', '[읽]{고 싶어요}', '[ik]{go sipeoyo}']
        ] },
        { t: 'ornek', l: [
          ['한국에 [가]{고 싶어요}.', "Kore'ye [git]{mek istiyorum}.", 'hanguge [ga]{go sipeoyo}'],
          ['뭐 [먹]{고 싶어요}?', 'Ne [ye]{mek istersin}?', 'mwo [meok]{go sipeoyo}?'],
          ['커피를 [마시]{고 싶어요}.', 'Kahve [iç]{mek istiyorum}.', 'keopireul [masi]{go sipeoyo}'],
          ['오늘은 [쉬]{고 싶어요}.', 'Bugün [dinlen]{mek istiyorum}.', 'oneureun [swi]{go sipeoyo}'],
          ['집에 [가]{고 싶지 않아요}.', 'Eve [git]{mek istemiyorum}.', 'jibe [ga]{go sipji anayo}']
        ] }
      ],
      test: [
        { s: '먹다 (yemek) + istek', o: ['먹고 싶어요', '먹으고 싶어요', '먹어 싶어요'], d: 0, a: '-고 싶어요 gövdeye doğrudan eklenir: 먹고 싶어요.' },
        { s: '"Gitmek istemiyorum."', o: ['가고 안 싶어요', '안 가고 싶어요'], d: 1, a: 'Kısa olumsuzda 안 en başa gelir: 안 가고 싶어요.' },
        { s: '"Gitmek istiyordum."', o: ['갔고 싶어요', '가고 싶었어요'], d: 1, a: 'Geçmiş zaman eki 싶다\'ya gelir: 가고 싶었어요.' },
        { s: '"Kardeşim gitmek istiyor."', o: ['동생이 가고 싶어요', '동생이 가고 싶어해요'], d: 1, a: 'Üçüncü kişinin isteği -고 싶어해요 ile söylenir.' },
        { s: 'Birine "보고 싶어요" dersen ne demiş olursun?', o: ['Seni özledim.', 'Seni görmüyorum.', 'Sana bakıyorum.'], d: 0, a: '보고 싶어요 günlük dilde "Seni özledim" anlamına gelir.' }
      ]
    },
    {
      id: 'ko-t1-10', seviye: 'TOPIK 1', sure: 7,
      baslik: 'Rica ve kibar emir: -(으)세요, -아/어 주세요',
      kisa: '앉으세요 · 도와주세요 · 가지 마세요',
      bolumler: [
        { t: 'metin', h: '-(으)세요: buyurun, lütfen …', m: 'Birine kibarca bir şey yapmasını söylerken kullanılır. Gövde <b>ünlüyle</b> bitiyorsa <b>-세요</b>, <b>ünsüzle</b> bitiyorsa <b>-으세요</b> gelir.' },
        { t: 'tablo', bas: ['Sözlük hali', 'Kibar emir', 'Anlamı'], s: [
          ['가다|gada', '[가]{세요}|[ga]{seyo}', 'Gidin'],
          ['오다|oda', '[오]{세요}|[o]{seyo}', 'Gelin'],
          ['앉다|anda', '[앉]{으세요}|[anj]{euseyo}', 'Oturun'],
          ['읽다|ikda', '[읽]{으세요}|[ilg]{euseyo}', 'Okuyun'],
          ['만들다|mandeulda', '[만드]{세요}|[mandeu]{seyo}', 'Yapın (ㄹ düşer)']
        ] },
        { t: 'metin', h: '-아/어 주세요: benim için … yapar mısınız?', m: 'Kendin için bir şey rica ederken, fiilin <b>-아요/-어요</b> biçiminden <b>요</b> atılır ve <b>주세요</b> eklenir. <b>-(으)세요</b>\'dan daha yumuşak, "lütfen" tadında bir ricadır.' },
        { t: 'tablo', bas: ['Şimdiki', 'Rica', 'Anlamı'], s: [
          ['도와요|dowayo', '[도와]{주세요}|[dowa]{juseyo}', 'Yardım edin'],
          ['기다려요|gidaryeoyo', '[기다려] {주세요}|[gidaryeo] {juseyo}', 'Bekleyin lütfen'],
          ['말해요|malhaeyo', '[말해] {주세요}|[malhae] {juseyo}', 'Söyleyin lütfen'],
          ['써요|sseoyo', '[써] {주세요}|[sseo] {juseyo}', 'Yazın lütfen']
        ] },
        { t: 'ipucu', h: 'İsim + 주세요', m: 'Bir şey isterken en pratik kalıp: <b>isim + 주세요</b>. <i>물 주세요</i> (Su verin), <i>이거 주세요</i> (Bunu verin). Araya <b>좀</b> koymak ricayı yumuşatır: <i>물 좀 주세요.</i>' },
        { t: 'tablo', h: 'Yasak: -지 마세요', bas: ['Sözlük hali', 'Yapmayın', 'Anlamı'], s: [
          ['가다|gada', '[가]{지 마세요}|[ga]{ji maseyo}', 'Gitmeyin'],
          ['먹다|meokda', '[먹]{지 마세요}|[meok]{ji maseyo}', 'Yemeyin'],
          ['걱정하다|geokjeonghada', '[걱정하]{지 마세요}|[geokjeongha]{ji maseyo}', 'Merak etmeyin']
        ] },
        { t: 'ipucu', h: 'Özel saygılı fiiller', m: 'Bazı fiillerin saygılı biçimi ayrı bir kelimedir: <b>먹다 → 드세요</b> (buyurun yiyin), <b>자다 → 주무세요</b> (uyuyun), <b>있다 → 계세요</b> (kalın). <i>안녕히 계세요</i> (Hoşça kalın) buradan gelir.' },
        { t: 'ornek', l: [
          ['여기 [앉]{으세요}.', 'Buraya [otur]{un}.', 'yeogi [anj]{euseyo}'],
          ['물 좀 {주세요}.', 'Biraz su verir misiniz?', 'mul jom {juseyo}'],
          ['천천히 [말해] {주세요}.', 'Yavaş [konuş]{ur musunuz}?', 'cheoncheonhi [malhae] {juseyo}'],
          ['잠깐만 [기다려] {주세요}.', 'Bir dakika [bekle]{yin} lütfen.', 'jamkkanman [gidaryeo] {juseyo}'],
          ['[걱정하]{지 마세요}.', 'Merak [et]{meyin}.', '[geokjeongha]{ji maseyo}']
        ] }
      ],
      test: [
        { s: '앉다 (oturmak) → kibar emir', o: ['앉세요', '앉으세요'], d: 1, a: 'Gövde ünsüzle bitiyor: 앉으세요.' },
        { s: '가다 (gitmek) → kibar emir', o: ['가세요', '가으세요'], d: 0, a: 'Gövde ünlüyle bitiyor: 가세요.' },
        { s: '"Su verin lütfen."', o: ['물 주세요', '물 가세요', '물 마세요'], d: 0, a: 'İsim + 주세요: 물 주세요.' },
        { s: '"Gitmeyin."', o: ['안 가세요', '가지 마세요'], d: 1, a: 'Yasak -지 마세요 ile kurulur: 가지 마세요.' },
        { s: '"Yardım edin!"', o: ['도와주세요', '도와지 마세요', '도우세요 안'], d: 0, a: '도와요 → 요 atılır, 주세요 eklenir: 도와주세요.' }
      ]
    },
    {
      id: 'ko-t1-11', seviye: 'TOPIK 1', sure: 8,
      baslik: 'İki sayı sistemi ve sayma sözcükleri',
      kisa: '하나, 둘 · 일, 이 · 두 개, 세 명',
      bolumler: [
        { t: 'metin', m: 'Korecede iki ayrı sayı dizisi vardır: <b>Kore kökenli</b> sayılar (하나, 둘, 셋…) ve <b>Çince kökenli</b> sayılar (일, 이, 삼…). Hangisinin kullanılacağı, neyin sayıldığına bağlıdır.' },
        { t: 'tablo', bas: ['', 'Kore kökenli', 'Çince kökenli'], s: [
          ['1', '하나|hana', '일|il'],
          ['2', '둘|dul', '이|i'],
          ['3', '셋|set', '삼|sam'],
          ['4', '넷|net', '사|sa'],
          ['5', '다섯|daseot', '오|o'],
          ['6', '여섯|yeoseot', '육|yuk'],
          ['7', '일곱|ilgop', '칠|chil'],
          ['8', '여덟|yeodeol', '팔|pal'],
          ['9', '아홉|ahop', '구|gu'],
          ['10', '열|yeol', '십|sip']
        ] },
        { t: 'tablo', h: 'Hangisi ne zaman?', bas: ['Sistem', 'Nerede kullanılır', 'Örnek'], s: [
          ['Kore kökenli', 'bir şeyleri sayma · saat · yaş', '두 개 · 세 시 · 스무 살|du gae · se si · seumu sal'],
          ['Çince kökenli', 'para · tarih · dakika · telefon · kat', '오천 원 · 십 분 · 삼 층|ocheon won · sip bun · sam cheung']
        ] },
        { t: 'ipucu', h: 'Büyük sayılar', m: 'Çince kökenli sayılar yan yana dizilir: <b>십일</b> (11), <b>이십</b> (20), <b>백</b> (100), <b>천</b> (1.000), <b>만</b> (10.000). Para hep bu sistemle söylenir: <i>오천 원</i> (5.000 won).' },
        { t: 'metin', h: 'Sayma sözcükleri', m: 'Türkçedeki "iki <b>tane</b> elma, üç <b>kişi</b>" gibi, Korecede de sayıdan sonra bir sayma sözcüğü gelir. Sıra: <b>isim + sayı + sayma sözcüğü</b>.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Mantık aynı, tek fark sıra: Korecede sayılan şey en başa gelir.', l: [
          ['[iki] {tane} elma', '사과 [두] {개}', 'sagwa [du] {gae}'],
          ['[üç] {kişi}', '[세] {명}', '[se] {myeong}'],
          ['[bir] {bardak} kahve', '커피 [한] {잔}', 'keopi [han] {jan}']
        ] },
        { t: 'tablo', bas: ['Sözcük', 'Ne sayılır', 'Örnek'], s: [
          ['{개}|gae', 'eşya, tane', '사과 [두] {개}|sagwa [du] {gae}'],
          ['{명}|myeong', 'kişi', '학생 [세] {명}|haksaeng [se] {myeong}'],
          ['{마리}|mari', 'hayvan', '고양이 [한] {마리}|goyangi [han] {mari}'],
          ['{잔}|jan', 'bardak, fincan', '커피 [한] {잔}|keopi [han] {jan}'],
          ['{병}|byeong', 'şişe', '물 [두] {병}|mul [du] {byeong}'],
          ['{권}|gwon', 'kitap', '책 [네] {권}|chaek [ne] {gwon}'],
          ['{살}|sal', 'yaş', '[스무] {살}|[seumu] {sal}'],
          ['{시}|si', 'saat', '[세] {시}|[se] {si}']
        ] },
        { t: 'tablo', h: 'Sayma sözcüğünün önünde kısalanlar', bas: ['Tek başına', 'Kısa hali', 'Örnek'], s: [
          ['하나|hana', '{한}|han', '한 개|han gae'],
          ['둘|dul', '{두}|du', '두 명|du myeong'],
          ['셋|set', '{세}|se', '세 시|se si'],
          ['넷|net', '{네}|ne', '네 잔|ne jan'],
          ['스물|seumul', '{스무}|seumu', '스무 살|seumu sal']
        ] },
        { t: 'ipucu', h: 'Saat söylerken ikisi birden', m: 'Saat Kore kökenli, dakika Çince kökenli sayıyla söylenir: <i>세 시 십 분</i> (se si sip bun) = 3:10.' },
        { t: 'ornek', l: [
          ['커피 [한] {잔} 주세요.', '[Bir] {bardak} kahve verin.', 'keopi [han] {jan} juseyo'],
          ['사과가 [두] {개} 있어요.', '[İki] {tane} elma var.', 'sagwaga [du] {gae} isseoyo'],
          ['저는 [스무] {살}이에요.', '[Yirmi] {yaş}ındayım.', 'jeoneun [seumu] {sar}ieyo'],
          ['지금 [세] {시} [십] {분}이에요.', 'Saat üçü on geçiyor.', 'jigeum [se] {si} [sip] {bun}ieyo'],
          ['이거 [오천] {원}이에요.', 'Bu [beş bin] {won}.', 'igeo [ocheon] {won}ieyo']
        ] }
      ],
      test: [
        { s: '"İki tane"', o: ['이 개', '두 개', '둘 개'], d: 1, a: 'Sayarken Kore kökenli sayı gelir ve 둘 kısalarak 두 olur: 두 개.' },
        { s: 'Yaş söylerken hangi sayılar kullanılır?', o: ['Çince kökenli', 'Kore kökenli'], d: 1, a: 'Yaş (살) Kore kökenli sayılarla söylenir: 스무 살.' },
        { s: '"5.000 won"', o: ['오천 원', '다섯천 원'], d: 0, a: 'Para Çince kökenli sayılarla söylenir: 오천 원.' },
        { s: 'Kişi sayarken hangi sözcük kullanılır?', o: ['개', '명', '마리'], d: 1, a: '명 kişi, 개 eşya, 마리 hayvan sayar.' },
        { s: '"세 시 십 분" saat kaç?', o: ['3:10', '10:03', '3:30'], d: 0, a: '세 시 = saat üç, 십 분 = on dakika.' }
      ]
    },
    {
      id: 'ko-t1-12', seviye: 'TOPIK 1', sure: 5,
      baslik: 'Ekler: -하고, -도, -만',
      kisa: 've / ile · de / da · sadece',
      bolumler: [
        { t: 'metin', m: 'Üç küçük ek, günlük konuşmada çok iş görür. Üçü de ismin <b>hemen arkasına</b>, bitişik yazılır ve son sese göre <b>değişmez</b>.' },
        { t: 'tablo', bas: ['Ek', 'Anlamı', 'Örnek'], s: [
          ['{-하고}|hago', 've · ile', '[빵]{하고} 우유|[ppang]{hago} uyu'],
          ['{-도}|do', 'de / da', '[저]{도}|[jeo]{do}'],
          ['{-만}|man', 'sadece', '[물]{만}|[mul]{man}']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', l: [
          ['[ekmek] {ve} süt', '[빵]{하고} 우유', '[ppang]{hago} uyu'],
          ['[arkadaşım]{la}', '[친구]{하고}', '[chingu]{hago}'],
          ['[ben] {de}', '[저]{도}', '[jeo]{do}'],
          ['{sadece} [su]', '[물]{만}', '[mul]{man}']
        ] },
        { t: 'metin', h: '-하고: ve, ile', m: 'İki ismi bağlar (<i>빵하고 우유</i>: ekmek ve süt) ya da "biriyle birlikte" anlamı verir (<i>친구하고 같이</i>: arkadaşımla birlikte).' },
        { t: 'ipucu', h: 'Aynı anlamdaki diğer ekler', m: 'Yazı dilinde <b>와/과</b>, samimi konuşmada <b>(이)랑</b> da aynı anlamda kullanılır: <i>빵과 우유</i>, <i>친구랑</i>.' },
        { t: 'metin', h: '-도: de / da', m: '<b>-도</b>, -은/는, -이/가 ve -을/를 eklerinin <b>yerine geçer</b>: <i>저는 → 저도</i> (<i>저는도</i> yanlıştır). -에 ve -에서 gibi yer eklerinin ise <b>üstüne</b> eklenir: <i>집에도</i> (evde de), <i>학교에서도</i> (okulda da).' },
        { t: 'metin', h: '-만: sadece', m: 'Türkçede "sadece" kelimenin önüne gelir; Korecede <b>-만</b> arkasına eklenir: <i>물만</i> (sadece su), <i>주말에만</i> (sadece hafta sonu).' },
        { t: 'ipucu', h: 'Cümleleri bağlamak', m: '-하고 yalnızca isimleri bağlar. İki cümleyi bağlamak için <b>그리고</b> (ve), iki fiili bağlamak için <b>-고</b> kullanılır: <i>먹고 마셔요</i> (yiyip içiyorum).' },
        { t: 'ornek', l: [
          ['[빵]{하고} 우유를 샀어요.', '[Ekmek] {ve} süt aldım.', '[ppang]{hago} uyureul sasseoyo'],
          ['[친구]{하고} 영화를 봤어요.', '[Arkadaşım]{la} film izledim.', '[chingu]{hago} yeonghwareul bwasseoyo'],
          ['[저]{도} 학생이에요.', '[Ben] {de} öğrenciyim.', '[jeo]{do} haksaengieyo'],
          ['[물]{만} 주세요.', '{Sadece} [su] verin.', '[mul]{man} juseyo'],
          ['[주말에]{도} 일해요.', '[Hafta sonu] {da} çalışıyorum.', '[jumare]{do} ilhaeyo']
        ] }
      ],
      test: [
        { s: '"Ben de"', o: ['저는도', '저도'], d: 1, a: '-도, -는 ekinin yerine geçer: 저도.' },
        { s: '"Sadece su"', o: ['물만', '물도', '물하고'], d: 0, a: '-만 "sadece" demektir: 물만.' },
        { s: '"Arkadaşımla"', o: ['친구하고', '친구만'], d: 0, a: '-하고 "ile" anlamı da verir: 친구하고.' },
        { s: '"Evde de"', o: ['집도에', '집에도'], d: 1, a: '-도, yer eki -에\'nin üstüne eklenir: 집에도.' },
        { s: '"커피하고 차" ne demek?', o: ['kahve ve çay', 'sadece kahve', 'kahve de'], d: 0, a: '-하고 iki ismi "ve" ile bağlar.' }
      ]
    },
    {
      id: 'ko-t1-13', seviye: 'TOPIK 1', sure: 7,
      baslik: 'Şart ve sebep: -(으)면, -아/어서',
      kisa: '가면, 먹으면 · 바빠서, 늦어서',
      bolumler: [
        { t: 'metin', h: '-(으)면: -se / -sa', m: 'Şart bildirir. Gövde <b>ünlüyle</b> ya da <b>ㄹ</b> ile bitiyorsa <b>-면</b>, diğer <b>ünsüzlerle</b> bitiyorsa <b>-으면</b> gelir.' },
        { t: 'tablo', bas: ['Sözlük hali', 'Şart', 'Anlamı'], s: [
          ['가다|gada', '[가]{면}|[ga]{myeon}', 'gidersem'],
          ['오다|oda', '[오]{면}|[o]{myeon}', 'gelirse'],
          ['먹다|meokda', '[먹]{으면}|[meog]{eumyeon}', 'yersem'],
          ['있다|itda', '[있]{으면}|[iss]{eumyeon}', 'varsa'],
          ['살다|salda', '[살]{면}|[sal]{myeon}', 'yaşarsam (ㄹ: 으 gelmez)']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'İki dilde de şart ve sebep, fiilin sonuna gelen bir ekle kurulur ve bu yan cümle <b>önce</b> söylenir.', l: [
          ['[gel]{irse}', '[오]{면}', '[o]{myeon}'],
          ['[ye]{rsem}', '[먹]{으면}', '[meog]{eumyeon}'],
          ['[geç kal]{dığım için}', '[늦어]{서}', '[neujeo]{seo}']
        ] },
        { t: 'metin', h: '-아/어서: -dığı için', m: 'Sebep bildirir. Kurması kolaydır: fiilin <b>-아요/-어요</b> biçiminden <b>요</b> atılır, <b>서</b> eklenir.' },
        { t: 'tablo', bas: ['Şimdiki', 'Sebep', 'Anlamı'], s: [
          ['바빠요|bappayo', '[바빠]{서}|[bappa]{seo}', 'meşgul olduğum için'],
          ['늦어요|neujeoyo', '[늦어]{서}|[neujeo]{seo}', 'geç kaldığım için'],
          ['피곤해요|pigonhaeyo', '[피곤해]{서}|[pigonhae]{seo}', 'yorgun olduğum için'],
          ['아파요|apayo', '[아파]{서}|[apa]{seo}', 'hasta olduğum için']
        ] },
        { t: 'ipucu', h: 'Zaman eki sona gelir', m: '<b>-서</b>\'nın önüne geçmiş zaman eki gelmez; zaman cümlenin sonunda gösterilir: <i>바빠서 못 <b>갔어요</b></i> (Meşgul olduğum için gidemedim). <i>바빴어서</i> yanlıştır.' },
        { t: 'ipucu', h: 'Sıra anlamı da var', m: '<b>-아/어서</b> art arda yapılan işleri de bağlar: <i>집에 가서 쉬어요.</i> (Eve gidip dinlenirim.)' },
        { t: 'ipucu', h: 'Emir ve teklifte kullanılmaz', m: 'Sebepten sonra emir ya da teklif geliyorsa <b>-아/어서</b> yerine <b>-(으)니까</b> kullanılır. Bu ek bir sonraki seviyenin konusu.' },
        { t: 'ornek', l: [
          ['시간이 [있]{으면} 영화를 봐요.', 'Vaktim [ol]{ursa} film izlerim.', 'sigani [iss]{eumyeon} yeonghwareul bwayo'],
          ['비가 [오]{면} 집에 있어요.', 'Yağmur [yağ]{arsa} evde kalırım.', 'biga [o]{myeon} jibe isseoyo'],
          ['[바빠]{서} 못 가요.', 'Meşgul [ol]{duğum için} gidemiyorum.', '[bappa]{seo} mot gayo'],
          ['[늦어]{서} 죄송합니다.', 'Geç [kal]{dığım için} özür dilerim.', '[neujeo]{seo} joesonghamnida'],
          ['배가 [고파]{서} 밥을 먹었어요.', 'Karnım aç [ol]{duğu için} yemek yedim.', 'baega [gopa]{seo} babeul meogeosseoyo']
        ] }
      ],
      test: [
        { s: '먹다 (yemek) + şart', o: ['먹면', '먹으면'], d: 1, a: 'Gövde ünsüzle bitiyor: 먹으면.' },
        { s: '가다 (gitmek) + şart', o: ['가면', '가으면'], d: 0, a: 'Gövde ünlüyle bitiyor: 가면.' },
        { s: '"Meşgul olduğum için"', o: ['바빠서', '바쁘면'], d: 0, a: '-아/어서 sebep bildirir: 바빠서.' },
        { s: '"Meşgul olduğum için gidemedim."', o: ['바빴어서 못 갔어요.', '바빠서 못 갔어요.'], d: 1, a: 'Geçmiş zaman eki -서\'nın önüne gelmez; cümle sonunda gösterilir.' },
        { s: '"비가 오면" ne demek?', o: ['yağmur yağarsa', 'yağmur yağdığı için', 'yağmur yağdı'], d: 0, a: '-면 şart bildirir: yağmur yağarsa.' }
      ]
    },
    {
      id: 'ko-t1-14', seviye: 'TOPIK 1', sure: 6,
      baslik: 'Karşılaştırma ve sınır: -보다, -부터, -까지',
      kisa: '-den daha · -den … -e kadar',
      bolumler: [
        { t: 'metin', m: 'Bu dersteki ekler de Türkçedeki karşılıkları gibi ismin <b>arkasına</b> gelir ve son sese göre <b>değişmez</b>.' },
        { t: 'tablo', bas: ['Ek', 'Anlamı', 'Örnek'], s: [
          ['{-보다}|boda', '-den (daha)', '[버스]{보다}|[beoseu]{boda}'],
          ['{-부터}|buteo', '-den itibaren (zaman)', '[아홉 시]{부터}|[ahop si]{buteo}'],
          ['{-까지}|kkaji', '-e kadar', '[여섯 시]{까지}|[yeoseot si]{kkaji}'],
          ['{-에서} … {-까지}|eseo … kkaji', '-den … -e kadar (yer)', '[집]{에서} [학교]{까지}|[jib]{eseo} [hakgyo]{kkaji}']
        ] },
        { t: 'kiyas', h: 'Türkçeyle yan yana', l: [
          ['[otobüs]{ten} hızlı', '[버스]{보다} 빨라요', '[beoseu]{boda} ppallayo'],
          ['[dokuz]{dan} [altı]{ya kadar}', '[아홉 시]{부터} [여섯 시]{까지}', '[ahop si]{buteo} [yeoseot si]{kkaji}'],
          ['[ev]{den} [okul]{a kadar}', '[집]{에서} [학교]{까지}', '[jib]{eseo} [hakgyo]{kkaji}']
        ] },
        { t: 'metin', h: 'Karşılaştırma: -보다', m: 'Kalıp: <b>A가 B보다 (더) …</b> = "A, B\'den (daha) …". <b>더</b> "daha" demektir ve isteğe bağlıdır. Sıra serbesttir: <i>지하철이 버스보다 빨라요</i> = <i>버스보다 지하철이 빨라요</i>.' },
        { t: 'ipucu', h: 'En: 제일 / 가장', m: '"En" demek için sıfatın önüne <b>제일</b> (konuşma dili) ya da <b>가장</b> (yazı dili) gelir: <i>제일 좋아요</i> (en iyisi), <i>가장 큰 도시</i> (en büyük şehir).' },
        { t: 'ipucu', h: '-부터 mi, -에서 mi?', m: 'Başlangıç bir <b>zaman</b> ise <b>-부터</b>, bir <b>yer</b> ise <b>-에서</b> kullanılır. Bitiş için ikisinde de <b>-까지</b>: <i>월요일부터 금요일까지</i> (pazartesiden cumaya kadar), <i>서울에서 부산까지</i> (Seul\'den Busan\'a kadar).' },
        { t: 'ornek', l: [
          ['[버스]{보다} 지하철이 빨라요.', 'Metro [otobüs]{ten} hızlı.', '[beoseu]{boda} jihacheori ppallayo'],
          ['오늘이 [어제]{보다} 더 추워요.', 'Bugün [dün]{den} daha soğuk.', 'oneuri [eoje]{boda} deo chuwoyo'],
          ['[아홉 시]{부터} [여섯 시]{까지} 일해요.', '[Dokuz]{dan} [altı]{ya kadar} çalışıyorum.', '[ahop si]{buteo} [yeoseot si]{kkaji} ilhaeyo'],
          ['[집]{에서} [학교]{까지} 멀어요.', '[Ev]{den} [okul]{a kadar} uzak.', '[jib]{eseo} [hakgyo]{kkaji} meoreoyo'],
          ['이게 {제일} 맛있어요.', '{En} lezzetlisi bu.', 'ige {jeil} masisseoyo']
        ] }
      ],
      test: [
        { s: '"Otobüsten hızlı"', o: ['버스보다 빨라요', '버스부터 빨라요'], d: 0, a: 'Karşılaştırma -보다 ile yapılır.' },
        { s: '"Saat dokuzdan itibaren"', o: ['아홉 시까지', '아홉 시부터'], d: 1, a: 'Zamanda başlangıç -부터 ile söylenir.' },
        { s: '"Okula kadar"', o: ['학교까지', '학교보다'], d: 0, a: '-까지 "-e kadar" demektir.' },
        { s: '"En" anlamını hangisi verir?', o: ['더', '제일', '보다'], d: 1, a: '제일 = en, 더 = daha.' },
        { s: '"집에서 학교까지" ne demek?', o: ['evden okula kadar', 'evde ve okulda', 'okuldan eve'], d: 0, a: '-에서 … -까지 = -den … -e kadar.' }
      ]
    }
  ],
  plan: []
};
