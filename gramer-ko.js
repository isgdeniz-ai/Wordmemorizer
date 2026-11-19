// Word Memorizer · Korece gramer dersleri (TOPIK 1 + TOPIK 2 + TOPIK 3)
// Örneklerde {…} işaretli kısım vurgulanır. Her örnek: [korece, türkçe, okunuş]
// Her yerde: [kök] mavi, {ek} kırmızı. Tablo hücresinde '|' sonrası okunuş satırı.
// kiyas: Türkçe ile yan yana gösterim, her satır [türkçe, korece, okunuş]
// diyalog: kısa konuşma, her satır [konuşan, korece, türkçe, okunuş]
// ozet: ders sonu özeti, l: [madde, madde, …]
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
    },
    {
      id: 'ko-t2-01', seviye: 'TOPIK 2', sure: 9,
      baslik: 'Bağlaçlar: -고, -지만, -거나',
      kisa: '먹고, 비싸지만, 보거나',
      bolumler: [
        { t: 'metin', m: 'İki cümleyi birleştirmek için Korecede "ve, ama" gibi ayrı kelimeler yerine <b>birinci fiile ek</b> getirilir. Bu derste en çok kullanılan üç eki öğreniyorsun: <b>-고</b> (ve, -ip), <b>-지만</b> (ama), <b>-거나</b> (ya da). Üçü de gövdeye doğrudan eklenir; ünlü-ünsüz kuralı yoktur.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede de bağlamak için ek kullanırız: <b>-ip</b>, <b>-ir ama</b>, <b>-er ya da</b>. Korecede ek aynı yere, birinci fiilin sonuna gelir.', l: [
          ['[ye]{yip} gidiyorum', '[먹]{고} 가요', '[meok]{go} gayo'],
          ['pahalı{dır ama} güzel', '[비싸]{지만} 좋아요', '[bissa]{jiman} joayo'],
          ['[izle]{r ya da} okurum', '[보]{거나} 읽어요', '[bo]{geona} ilgeoyo']
        ] },
        { t: 'tablo', h: 'Üç ek', bas: ['Ek', 'Anlamı', 'Örnek'], s: [
          ['{-고}|{-go}', 've; -ip (sıra)', '[먹]{고} 자요|[meok]{go} jayo'],
          ['{-지만}|{-jiman}', 'ama, -se de', '[맛있]{지만} 비싸요|[masit]{jiman} bissayo'],
          ['{-거나}|{-geona}', 'ya da, veya', '[자]{거나} 쉬어요|[ja]{geona} swieoyo']
        ] },
        { t: 'tablo', h: 'Sözlük hali → bağlı biçim', bas: ['Sözlük hali', '-고', '-지만', '-거나'], s: [
          ['가다|gada', '[가]{고}|[ga]{go}', '[가]{지만}|[ga]{jiman}', '[가]{거나}|[ga]{geona}'],
          ['먹다|meokda', '[먹]{고}|[meok]{go}', '[먹]{지만}|[meok]{jiman}', '[먹]{거나}|[meok]{geona}'],
          ['크다|keuda', '[크]{고}|[keu]{go}', '[크]{지만}|[keu]{jiman}', '[크]{거나}|[keu]{geona}'],
          ['공부하다|gongbuhada', '[공부하]{고}|[gongbuha]{go}', '[공부하]{지만}|[gongbuha]{jiman}', '[공부하]{거나}|[gongbuha]{geona}'],
          ['학생이다|haksaengida', '[학생이]{고}|[haksaengi]{go}', '[학생이]{지만}|[haksaengi]{jiman}', '—']
        ] },
        { t: 'metin', h: '-고: iki kullanım', m: '1) <b>Ve:</b> İki bilgiyi yan yana koyar: <i>이 식당은 싸고 맛있어요</i> (Bu restoran ucuz ve lezzetli). 2) <b>Sıra:</b> Önce biri, sonra öteki: <i>밥을 먹고 커피를 마셔요</i> (Yemek yiyip kahve içiyorum). Türkçedeki <b>-ip</b> gibi.' },
        { t: 'ipucu', h: 'Zaman eki nereye gelir?', m: 'Sıra anlatan <b>-고</b>\'da zaman eki yalnızca son fiile gelir: <i>어제 밥을 먹고 잤어요</i> (Dün yemek yiyip uyudum). <b>-지만</b> ise kendi geçmiş ekini alabilir: <i>어제는 바빴지만 오늘은 괜찮아요</i> (Dün meşguldüm ama bugün iyiyim).' },
        { t: 'ipucu', h: 'İki ismi bağlarken', m: 'Bu ekler fiil ve sıfatlar içindir. İki <b>ismi</b> bağlarken <b>-하고</b> ya da <b>-와 / 과</b> (ve), <b>-(이)나</b> (ya da) kullanılır: <i>빵하고 우유</i> (ekmek ve süt), <i>커피나 차</i> (kahve ya da çay).' },
        { t: 'ipucu', h: 'Cümle başında "ama"', m: 'İki ayrı cümlede "ama" demek için cümle başına <b>하지만</b> ya da <b>그렇지만</b> gelir: <i>비싸요. 하지만 좋아요.</i> (Pahalı. Ama güzel.) "Ve sonra" için <b>그리고</b>: <i>밥을 먹었어요. 그리고 잤어요.</i>' },
        { t: 'diyalog', h: 'Hafta sonu planı', l: [
          ['Minsu', '주말에 뭐 해요?', 'Hafta sonu ne yapıyorsun?', 'jumare mwo haeyo?'],
          ['Jisu', '친구를 [만나]{고} 영화를 봐요.', 'Arkadaşımla buluşup film izleyeceğim.', 'chingureul [manna]{go} yeonghwareul bwayo'],
          ['Minsu', '저는 집에서 [쉬]{거나} 책을 읽어요.', 'Ben evde dinlenirim ya da kitap okurum.', 'jeoneun jibeseo [swi]{geona} chaegeul ilgeoyo'],
          ['Jisu', '같이 가요. 표가 [비싸]{지만} 영화가 재미있어요.', 'Birlikte gidelim. Bilet pahalı ama film eğlenceli.', 'gachi gayo. pyoga [bissa]{jiman} yeonghwaga jaemiisseoyo'],
          ['Minsu', '좋아요! 영화를 [보]{고} 저녁도 먹어요.', 'Olur! Film izleyip akşam yemeği de yiyelim.', 'joayo! yeonghwareul [bo]{go} jeonyeokdo meogeoyo']
        ] },
        { t: 'ornek', l: [
          ['이 가방은 [싸]{고} 예뻐요.', 'Bu çanta ucuz {ve} güzel.', 'i gabangeun [ssa]{go} yeppeoyo'],
          ['손을 [씻]{고} 밥을 먹어요.', 'Ellerimi [yıka]{yıp} yemek yiyorum.', 'soneul [ssit]{go} babeul meogeoyo'],
          ['한국어는 [어렵]{지만} 재미있어요.', 'Korece zor {ama} eğlenceli.', 'hangugeoneun [eoryeop]{jiman} jaemiisseoyo'],
          ['비가 [왔]{지만} 산책했어요.', 'Yağmur [yağ]{dı ama} yürüyüş yaptım.', 'biga [wat]{jiman} sanchaekaesseoyo'],
          ['주말에는 [청소하]{거나} 빨래해요.', 'Hafta sonları temizlik yaparım {ya da} çamaşır yıkarım.', 'jumareneun [cheongsoha]{geona} ppallaehaeyo'],
          ['어제 숙제를 [하]{고} 잤어요.', 'Dün ödevimi [yap]{ıp} uyudum.', 'eoje sukjereul [ha]{go} jasseoyo'],
          ['형은 키가 [크]{고} 동생은 작아요.', 'Ağabeyimin boyu uzun, kardeşimin {ise} kısa.', 'hyeongeun kiga [keu]{go} dongsaengeun jagayo'],
          ['아침에는 커피를 [마시]{거나} 차를 마셔요.', 'Sabahları kahve {ya da} çay içerim.', 'achimeneun keopireul [masi]{geona} chareul masyeoyo']
        ] },
        { t: 'ozet', l: [
          '<b>-고</b>: ve; -ip (önce bu, sonra o).',
          '<b>-지만</b>: ama, -se de; kendi geçmiş ekini alabilir (<i>왔지만</i>).',
          '<b>-거나</b>: ya da.',
          'Üçü de gövdeye doğrudan gelir: 먹고, 먹지만, 먹거나.',
          'İki isim: <b>-하고</b> (ve), <b>-(이)나</b> (ya da).'
        ] }
      ],
      test: [
        { s: '"Ucuz ve güzel"', o: ['싸고 예뻐요', '싸지만 예뻐요', '싸거나 예뻐요'], d: 0, a: '-고 iki bilgiyi "ve" ile bağlar.' },
        { s: '"Zor ama eğlenceli"', o: ['어렵고 재미있어요', '어렵지만 재미있어요', '어렵거나 재미있어요'], d: 1, a: '-지만 = ama.' },
        { s: '먹다 + -거나', o: ['먹거나', '먹으거나', '머거나'], d: 0, a: '-거나 gövdeye doğrudan gelir.' },
        { s: '"Ellerimi yıkayıp yemek yiyorum."', o: ['손을 씻고 밥을 먹어요.', '손을 씻지만 밥을 먹어요.'], d: 0, a: 'Sıra: -고 (-ip).' },
        { s: '"Dün meşguldüm ama bugün iyiyim."', o: ['어제는 바쁘고 오늘은 괜찮아요.', '어제는 바빴지만 오늘은 괜찮아요.'], d: 1, a: '-지만 geçmiş ekini alabilir: 바빴지만.' },
        { s: '"Kahve ya da çay" (iki isim)', o: ['커피거나 차', '커피나 차', '커피고 차'], d: 1, a: 'İki isim -(이)나 ile bağlanır.' },
        { s: '"Dün ödevimi yapıp uyudum."', o: ['어제 숙제를 했고 잤어요.', '어제 숙제를 하고 잤어요.'], d: 1, a: 'Sıra anlatan -고\'da zaman yalnızca son fiilde gösterilir.' },
        { s: '"하지만" ne demek?', o: ['ve', 'ama', 'ya da'], d: 1, a: '하지만 cümle başında "ama" demektir.' }
      ]
    },
    {
      id: 'ko-t2-02', seviye: 'TOPIK 2', sure: 8,
      baslik: 'Şu anda yapıyorum: -고 있어요',
      kisa: '먹고 있어요, 자고 있어요',
      bolumler: [
        { t: 'metin', m: 'Bir işin <b>tam şu anda</b> sürdüğünü anlatmak için fiil gövdesine <b>-고 있어요</b> eklenir: <i>밥을 먹고 있어요</i> (Yemek yiyorum, şu an). Ünlü-ünsüz kuralı yoktur; bütün fiillerde aynıdır.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana: -iyor', m: 'Türkçedeki <b>-iyor</b> ekinin tam karşılığıdır. İki dilde de ek fiilin <b>sonuna</b> gelir ve kelime sırası aynıdır.', l: [
          ['[gel]{iyor}um', '[오]{고 있어요}', '[o]{go isseoyo}'],
          ['[yi]{yor}uz', '[먹]{고 있어요}', '[meok]{go isseoyo}'],
          ['[uyu]{yor}', '[자]{고 있어요}', '[ja]{go isseoyo}'],
          ['[bekl]{iyor}lar', '[기다리]{고 있어요}', '[gidari]{go isseoyo}']
        ] },
        { t: 'tablo', h: 'Kurulum', bas: ['Sözlük hali', 'Gövde', '-고 있어요', 'Anlamı'], s: [
          ['가다|gada', '가|ga', '[가]{고 있어요}|[ga]{go isseoyo}', 'gidiyor'],
          ['먹다|meokda', '먹|meok', '[먹]{고 있어요}|[meok]{go isseoyo}', 'yiyor'],
          ['보다|boda', '보|bo', '[보]{고 있어요}|[bo]{go isseoyo}', 'izliyor'],
          ['공부하다|gongbuhada', '공부하|gongbuha', '[공부하]{고 있어요}|[gongbuha]{go isseoyo}', 'ders çalışıyor'],
          ['기다리다|gidarida', '기다리|gidari', '[기다리]{고 있어요}|[gidari]{go isseoyo}', 'bekliyor']
        ] },
        { t: 'tablo', h: 'Zaman ve olumsuzluk', bas: ['Biçim', 'Anlamı', 'Örnek'], s: [
          ['{-고 있어요}|{-go isseoyo}', '…-iyor', '지금 [자]{고 있어요}.|jigeum [ja]{go isseoyo}'],
          ['{-고 있었어요}|{-go isseosseoyo}', '…-iyordu', '그때 [자]{고 있었어요}.|geuttae [ja]{go isseosseoyo}'],
          ['안 {-고 있어요}|an {-go isseoyo}', '…-mıyor', '안 [자]{고 있어요}.|an [ja]{go isseoyo}'],
          ['{-고 계세요}|{-go gyeseyo}', '…-iyor (saygılı)', '[주무시]{고 계세요}.|[jumusi]{go gyeseyo}']
        ] },
        { t: 'ipucu', h: 'Her "-iyor", -고 있어요 değildir', m: 'Türkçede alışkanlıklar için de -iyor deriz: "Her gün koşuyorum". Korecede alışkanlıklar <b>düz şimdiki zamanla</b> söylenir: <i>매일 달려요</i>. -고 있어요 yalnızca "tam şu an" ya da "bu sıralar" vurgusu içindir: <i>요즘 한국어를 배우고 있어요</i> (Bu aralar Korece öğreniyorum).' },
        { t: 'ipucu', h: 'Giyinme fiilleri: durum', m: '<i>입다</i> (giymek), <i>신다</i> (ayakkabı giymek), <i>쓰다</i> (şapka, gözlük takmak) ile -고 있어요 hem "giyiyor" hem "giymiş, üstünde" anlamı verir: <i>파란 셔츠를 입고 있어요</i> (Mavi gömlek giymiş).' },
        { t: 'ipucu', h: 'Saygılı biçim', m: 'Yaşlılar ve büyükler için <b>-고 계세요</b> kullanılır: <i>아버지께서 신문을 읽고 계세요</i> (Babam gazete okuyor). Saygı dilini ileride ayrı bir derste göreceksin.' },
        { t: 'diyalog', h: 'Telefonda', l: [
          ['Jisu', '여보세요? 지금 뭐 [하]{고 있어요}?', 'Alo? Şu an ne yapıyorsun?', 'yeoboseyo? jigeum mwo [ha]{go isseoyo}?'],
          ['Minsu', '저녁을 [만들]{고 있어요}.', 'Akşam yemeği yapıyorum.', 'jeonyeogeul [mandeul]{go isseoyo}'],
          ['Jisu', '동생은요?', 'Ya kardeşin?', 'dongsaengeunyo?'],
          ['Minsu', '방에서 [자]{고 있어요}. 왜요?', 'Odasında uyuyor. Neden?', 'bangeseo [ja]{go isseoyo}. waeyo?'],
          ['Jisu', '저는 버스를 [기다리]{고 있어요}. 비가 많이 [오]{고 있어요}.', 'Otobüs bekliyorum. Çok yağmur yağıyor.', 'jeoneun beoseureul [gidari]{go isseoyo}. biga mani [o]{go isseoyo}']
        ] },
        { t: 'ornek', l: [
          ['지금 [공부하]{고 있어요}.', 'Şu an ders [çalış]{ıyor}um.', 'jigeum [gongbuha]{go isseoyo}'],
          ['아이들이 공원에서 [놀]{고 있어요}.', 'Çocuklar parkta [oyn]{uyor}.', 'aideuri gongwoneseo [nol]{go isseoyo}'],
          ['요즘 한국 드라마를 [보]{고 있어요}.', 'Bu aralar Kore dizisi [izl]{iyor}um.', 'yojeum hanguk deuramareul [bo]{go isseoyo}'],
          ['누구를 [기다리]{고 있어요}?', 'Kimi [bekl]{iyor}sun?', 'nugureul [gidari]{go isseoyo}?'],
          ['그때 저는 [샤워하]{고 있었어요}.', 'O sırada duş [al]{ıyordu}m.', 'geuttae jeoneun [syawoha]{go isseosseoyo}'],
          ['민수 씨는 안경을 [쓰]{고 있어요}.', 'Minsu gözlük [tak]{mış}.', 'minsu ssineun angyeongeul [sseu]{go isseoyo}'],
          ['형은 회사에서 [일하]{고 있어요}.', 'Ağabeyim şirkette [çalış]{ıyor}.', 'hyeongeun hoesaeseo [ilha]{go isseoyo}'],
          ['할아버지께서 [주무시]{고 계세요}.', 'Dedem [uyu]{yor}.', 'harabeojikkeseo [jumusi]{go gyeseyo}']
        ] },
        { t: 'ozet', l: [
          'Gövde + <b>-고 있어요</b> = …-iyor (tam şu an, bu sıralar).',
          'Ünlü-ünsüz kuralı yok: 가고 있어요, 먹고 있어요.',
          'Geçmiş: <b>-고 있었어요</b> (…-iyordu).',
          'Alışkanlıklar düz şimdiki zamanla söylenir: <i>매일 달려요</i>.',
          'Saygılı biçim: <b>-고 계세요</b>.'
        ] }
      ],
      test: [
        { s: '"Şu an yemek yiyorum."', o: ['지금 밥을 먹고 있어요.', '지금 밥을 먹어 있어요.', '지금 밥을 먹었어요.'], d: 0, a: 'Gövde + -고 있어요.' },
        { s: '자다 + -고 있어요', o: ['자고 있어요', '자으고 있어요', '잤고 있어요'], d: 0, a: 'Gövdeye doğrudan gelir: 자고 있어요.' },
        { s: '"O sırada uyuyordum."', o: ['그때 자고 있어요.', '그때 자고 있었어요.', '그때 자고 있을 거예요.'], d: 1, a: 'Geçmiş: -고 있었어요.' },
        { s: '"Her gün koşuyorum." (alışkanlık)', o: ['매일 달리고 있어요.', '매일 달려요.'], d: 1, a: 'Alışkanlık düz şimdiki zamanla söylenir.' },
        { s: '"Dedem uyuyor." (saygılı)', o: ['할아버지께서 자고 있어요.', '할아버지께서 주무시고 계세요.'], d: 1, a: 'Büyükler için 주무시다 + -고 계세요.' },
        { s: '"안경을 쓰고 있어요" ne demek?', o: ['Gözlük takmış.', 'Gözlük yazıyor.', 'Gözlük alıyor.'], d: 0, a: '쓰다 burada "takmak"; -고 있어요 durum bildirir.' },
        { s: '"Kimi bekliyorsun?"', o: ['누구를 기다리고 있어요?', '누구를 기다리고 있었어요?', '누가 기다렸어요?'], d: 0, a: '기다리다 + -고 있어요.' },
        { s: '-고 있어요 Türkçedeki hangi eke benzer?', o: ['-di', '-iyor', '-ecek'], d: 1, a: 'Şimdiki zamanın -iyor ekine.' }
      ]
    },
    {
      id: 'ko-t2-03', seviye: 'TOPIK 2', sure: 10,
      baslik: 'Sebep: -(으)니까 ve -기 때문에',
      kisa: '비가 오니까, 바쁘기 때문에',
      bolumler: [
        { t: 'metin', m: 'A1\'de sebep için <b>-아/어서</b>\'ı öğrendin. Bu derste iki sebep ekini daha görüyorsun: <b>-(으)니까</b> (…-dığı için, …-diğine göre) ve <b>-기 때문에</b> (…-dığı için, … yüzünden). Hepsi "neden"i anlatır ama kullanıldıkları yerler farklıdır.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede olduğu gibi Korecede de sebep bildiren yan cümle <b>önce</b> söylenir: "Yağmur yağ<b>dığı için</b> evde kalalım."', l: [
          ['yağmur [yağ]{dığı için}', '비가 [오]{니까}', 'biga [o]{nikka}'],
          ['[meşgul ol]{duğum için}', '[바쁘]{기 때문에}', '[bappeu]{gi ttaemune}'],
          ['[geç kal]{dığım için}', '[늦어]{서}', '[neujeo]{seo}']
        ] },
        { t: 'tablo', h: '-(으)니까 kurulumu', bas: ['Sözlük hali', 'Kural', 'Biçim', 'Anlamı'], s: [
          ['가다|gada', 'ünlü → -니까', '[가]{니까}|[ga]{nikka}', 'gittiği için'],
          ['바쁘다|bappeuda', 'ünlü → -니까', '[바쁘]{니까}|[bappeu]{nikka}', 'meşgul olduğu için'],
          ['먹다|meokda', 'ünsüz → -으니까', '[먹]{으니까}|[meog]{eunikka}', 'yediği için'],
          ['살다|salda', 'ㄹ düşer → -니까', '[사]{니까}|[sa]{nikka}', 'yaşadığı için'],
          ['덥다|deopda', 'ㅂ → 우 + 니까', '[더우]{니까}|[deou]{nikka}', 'sıcak olduğu için'],
          ['왔다 (geçmiş)|watda', 'geçmiş + -으니까', '[왔]{으니까}|[wass]{eunikka}', 'geldiği için']
        ] },
        { t: 'metin', h: '-(으)니까: emir ve teklifle', m: 'Sebepten sonra <b>emir, rica ya da teklif</b> geliyorsa yalnızca <b>-(으)니까</b> kullanılır: <i>추우니까 창문을 닫으세요</i> (Soğuk olduğu için pencereyi kapatın). <i>시간이 없으니까 택시를 탑시다</i> (Vaktimiz olmadığı için taksiye binelim). Bu cümlelerde -아/어서 ve -기 때문에 yanlıştır.' },
        { t: 'metin', h: '-기 때문에: resmî ve vurgulu', m: '<b>-기 때문에</b> sebebi daha güçlü ve resmî vurgular; yazıda ve haberlerde çok kullanılır. Gövdeye doğrudan gelir: <i>가기 때문에, 먹기 때문에</i>. İsimlerde <b>때문에</b> tek başına gelir ve "… yüzünden" demektir: <i>비 때문에</i> (yağmur yüzünden), <i>너 때문에</i> (senin yüzünden).' },
        { t: 'tablo', h: 'Üç sebep eki karşılaştırması', bas: ['', '-아/어서', '-(으)니까', '-기 때문에'], s: [
          ['Emir / teklif', '✗', '✓', '✗'],
          ['Geçmiş eki', '✗ (바빠서)', '✓ (바빴으니까)', '✓ (바빴기 때문에)'],
          ['Özür, teşekkür', '✓ (늦어서 죄송해요)', '✗ (kaba durur)', '✓ (resmî)'],
          ['Ton', 'doğal, günlük', 'karşıdakinin de bildiği sebep', 'resmî, vurgulu']
        ] },
        { t: 'ipucu', h: 'Özürde -아/어서', m: '<i>늦어서 죄송합니다</i> (Geç kaldığım için özür dilerim) kalıplaşmıştır. <i>늦으니까 죄송합니다</i> denmez; -(으)니까 burada mazeret gösteriyormuş gibi kaba duyulur.' },
        { t: 'ipucu', h: '-(으)니까: "bir de baktım ki"', m: 'Bir şey yapınca bir şeyi fark ettiysen de <b>-(으)니까</b> kullanılır: <i>집에 가니까 아무도 없었어요</i> (Eve gittiğimde kimse yoktu). Türkçedeki "…-ince bir de baktım ki" anlamı.' },
        { t: 'ipucu', h: 'İsimle iki ayrı yapı', m: '<b>-이기 때문에</b> "… olduğu için" demektir: <i>학생이기 때문에</i> (öğrenci olduğu için). <b>때문에</b> tek başına ise "… yüzünden": <i>감기 때문에 못 갔어요</i> (Grip yüzünden gidemedim).' },
        { t: 'diyalog', h: 'Plan değişikliği', l: [
          ['Jisu', '오늘 공원에 갈까요?', 'Bugün parka gidelim mi?', 'oneul gongwone galkkayo?'],
          ['Minsu', '비가 [오]{니까} 집에서 영화 봐요.', 'Yağmur yağdığı için evde film izleyelim.', 'biga [o]{nikka} jibeseo yeonghwa bwayo'],
          ['Jisu', '좋아요. 그런데 내일 [시험이]{기 때문에} 늦게까지는 못 봐요.', 'Olur. Ama yarın sınav olduğu için geç saate kadar izleyemem.', 'joayo. geureonde naeil [siheomi]{gi ttaemune} neutgekkajineun mot bwayo'],
          ['Minsu', '그럼 짧은 영화를 봐요. 피자도 시켜요.', 'O zaman kısa bir film izleyelim. Pizza da söyleyelim.', 'geureom jjalbeun yeonghwareul bwayo. pijado sikyeoyo'],
          ['Jisu', '[배고프]{니까} 빨리 시켜요!', 'Acıktığım için hemen söyleyelim!', '[baegopeu]{nikka} ppalli sikyeoyo!']
        ] },
        { t: 'ornek', l: [
          ['[추우]{니까} 창문을 닫으세요.', 'Soğuk [ol]{duğu için} pencereyi kapatın.', '[chuu]{nikka} changmuneul dadeuseyo'],
          ['시간이 [없]{으니까} 택시를 탑시다.', 'Vaktimiz [ol]{madığı için} taksiye binelim.', 'sigani [eops]{eunikka} taeksireul tapsida'],
          ['[바쁘]{기 때문에} 못 가요.', 'Meşgul [ol]{duğum için} gidemem.', '[bappeu]{gi ttaemune} mot gayo'],
          ['비 {때문에} 경기가 취소됐어요.', 'Yağmur {yüzünden} maç iptal edildi.', 'bi {ttaemune} gyeonggiga chwisodwaesseoyo'],
          ['내일 시험이 [있]{으니까} 일찍 자요.', 'Yarın sınav [ol]{duğu için} erken yatıyorum.', 'naeil siheomi [iss]{eunikka} iljjik jayo'],
          ['집에 [가]{니까} 아무도 없었어요.', 'Eve [git]{tiğimde} kimse yoktu.', 'jibe [ga]{nikka} amudo eopseosseoyo'],
          ['[늦어]{서} 죄송합니다.', 'Geç [kal]{dığım için} özür dilerim.', '[neujeo]{seo} joesonghamnida'],
          ['길이 [막히]{니까} 지하철을 타세요.', 'Yol [tıkalı ol]{duğu için} metroya binin.', 'giri [maki]{nikka} jihacheoreul taseyo']
        ] },
        { t: 'ozet', l: [
          '<b>-(으)니까</b>: ünlü / ㄹ gövde → -니까 (ㄹ düşer), ünsüz → -으니까.',
          'Emir, rica, teklif varsa yalnızca -(으)니까.',
          '<b>-기 때문에</b>: resmî, vurgulu; isimle <b>때문에</b> = … yüzünden.',
          'Özür ve teşekkürde -아/어서: <i>늦어서 죄송해요</i>.',
          '-(으)니까 "…-ince bir de baktım" anlamı da verir.'
        ] }
      ],
      test: [
        { s: '먹다 + -(으)니까', o: ['먹니까', '먹으니까', '머그니까'], d: 1, a: 'Gövde ünsüzle bitiyor: 먹으니까.' },
        { s: '"Soğuk olduğu için pencereyi kapatın."', o: ['추워서 창문을 닫으세요.', '추우니까 창문을 닫으세요.'], d: 1, a: 'Arkadan emir geliyor: -(으)니까.' },
        { s: '"Yağmur yüzünden"', o: ['비 때문에', '비기 때문에', '비니까'], d: 0, a: 'İsimden sonra 때문에 tek başına gelir.' },
        { s: '"Geç kaldığım için özür dilerim."', o: ['늦으니까 죄송합니다.', '늦어서 죄송합니다.'], d: 1, a: 'Özürde -아/어서 kullanılır.' },
        { s: '살다 + -(으)니까', o: ['살으니까', '사니까', '살니까'], d: 1, a: 'ㄹ gövdede ㄹ düşer: 사니까.' },
        { s: '"Meşgul olduğum için gidemem." (resmî)', o: ['바쁘기 때문에 못 가요.', '바쁘기 때문 못 가요.'], d: 0, a: 'Gövde + -기 때문에.' },
        { s: '"Vaktimiz olmadığı için taksiye binelim."', o: ['시간이 없어서 택시를 탑시다.', '시간이 없으니까 택시를 탑시다.', '시간이 없기 때문에 택시를 탑시다.'], d: 1, a: 'Teklif (-ㅂ시다) ile yalnızca -(으)니까.' },
        { s: '"집에 가니까 아무도 없었어요" ne demek?', o: ['Eve gittiğimde kimse yoktu.', 'Eve gideceğim için kimse yok.', 'Eve gitmezsem kimse olmaz.'], d: 0, a: '-(으)니까 burada "…-ince bir de baktım ki".' }
      ]
    },
    {
      id: 'ko-t2-04', seviye: 'TOPIK 2', sure: 9,
      baslik: 'Yapabilmek: -(으)ㄹ 수 있어요',
      kisa: '갈 수 있어요, 먹을 수 없어요',
      bolumler: [
        { t: 'metin', m: 'Bir şeyi yapabileceğini söylemek için gövdeye <b>-(으)ㄹ 수 있어요</b> (yapabilirim), yapamayacağını söylemek için <b>-(으)ㄹ 수 없어요</b> (yapamam) eklenir. <b>수</b> "imkân, yol" demektir; kelime kelime "yapacak imkân var / yok".' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede <b>-ebil-</b> eki fiilin içine girer. Korecede ayrı bir kalıp olarak sona gelir.', l: [
          ['[gid]{ebilirim}', '[가]{ㄹ 수 있어요}', '[ga]{l su isseoyo}'],
          ['[ye]{yemem}', '[먹]{을 수 없어요}', '[meog]{eul su eopseoyo}'],
          ['[yüz]{ebilir} misin?', '[수영하]{ㄹ 수 있어요}?', '[suyeongha]{l su isseoyo}?']
        ] },
        { t: 'tablo', h: 'Kurulum', bas: ['Sözlük hali', 'Kural', 'Biçim'], s: [
          ['가다|gada', 'ünlü → ㄹ', '[가]{ㄹ 수 있어요} → 갈 수 있어요|[ga]{l su isseoyo}'],
          ['보다|boda', 'ünlü → ㄹ', '[보]{ㄹ 수 있어요} → 볼 수 있어요|[bo]{l su isseoyo}'],
          ['먹다|meokda', 'ünsüz → 을', '[먹]{을 수 있어요}|[meog]{eul su isseoyo}'],
          ['읽다|ikda', 'ünsüz → 을', '[읽]{을 수 있어요}|[ilg]{eul su isseoyo}'],
          ['만들다|mandeulda', 'ㄹ gövde: olduğu gibi', '[만들] {수 있어요}|[mandeul] {su isseoyo}'],
          ['듣다|deutda', 'ㄷ → ㄹ + 을', '[들]{을 수 있어요}|[deur]{eul su isseoyo}'],
          ['돕다|dopda', 'ㅂ → 우 + ㄹ', '[도우]{ㄹ 수 있어요} → 도울 수 있어요|[dou]{l su isseoyo}']
        ] },
        { t: 'ipucu', h: 'Okunuş', m: 'Yazıda 수 olsa da ㄹ\'den sonra sert okunur: <i>갈 수 있어요</i> → "gal ssu isseoyo". 있어요 "isseoyo", 없어요 "eopseoyo" okunur.' },
        { t: 'tablo', h: 'Zaman ve olumsuzluk', bas: ['Biçim', 'Anlamı', 'Örnek'], s: [
          ['-(으)ㄹ {수 있어요}', '…-ebilirim', '[읽]{을 수 있어요}|[ilg]{eul su isseoyo}'],
          ['-(으)ㄹ {수 없어요}', '…-emem', '[읽]{을 수 없어요}|[ilg]{eul su eopseoyo}'],
          ['-(으)ㄹ {수 있었어요}', '…-ebildim', '[읽]{을 수 있었어요}|[ilg]{eul su isseosseoyo}'],
          ['-(으)ㄹ {수 없었어요}', '…-emedim', '[읽]{을 수 없었어요}|[ilg]{eul su eopseosseoyo}'],
          ['-(으)ㄹ {수 있을 거예요}', '…-ebileceğim', '[읽]{을 수 있을 거예요}|[ilg]{eul su isseul geoyeyo}']
        ] },
        { t: 'metin', h: '못 ile farkı', m: 'A1\'de <b>못</b> ile "yapamamak"ı gördün: <i>못 가요</i>. <b>-(으)ㄹ 수 없어요</b> anlamca aynıdır; biraz daha resmîdir ve "imkânı yok" vurgusu taşır: <i>오늘은 갈 수 없어요</i> (Bugün gidemem). Konuşmada ikisi de çok kullanılır.' },
        { t: 'metin', h: '-(으)ㄹ 줄 알다: nasıl yapılacağını bilmek', m: 'Öğrenilen beceriler (dil, araba, yüzme, yemek yapma) için <b>-(으)ㄹ 줄 알아요 / 몰라요</b> kullanılır: <i>운전할 줄 알아요</i> (Araba kullanmayı bilirim). <i>수영할 줄 몰라요</i> (Yüzme bilmiyorum). Durum ve imkân için ise -(으)ㄹ 수 있어요: <i>오늘은 운전할 수 없어요</i> (Bugün araba kullanamam).' },
        { t: 'tablo', h: 'İmkân mı, beceri mi?', bas: ['', '-(으)ㄹ 수 있어요', '-(으)ㄹ 줄 알아요'], s: [
          ['Anlamı', 'imkân, durum: yapabilirim', 'beceri: yapmayı bilirim'],
          ['Örnek', '오늘 {운전할 수 있어요}.|oneul unjeonhal su isseoyo', '{운전할 줄 알아요}.|unjeonhal jul arayo'],
          ['Türkçe', 'Bugün araba kullanabilirim.', 'Araba kullanmayı bilirim.']
        ] },
        { t: 'ipucu', h: 'Rica etmek', m: '<b>-(으)ㄹ 수 있어요?</b> kibar rica için de kullanılır: <i>좀 도와줄 수 있어요?</i> (Biraz yardım edebilir misin?) Daha kibarı: <i>도와주실 수 있어요?</i>' },
        { t: 'ipucu', h: 'Kurallarda yasak anlamı', m: 'Levhalarda ve duyurularda <b>-(으)ㄹ 수 없습니다</b> "…-amazsınız, yasaktır" anlamı verir: <i>여기에서 사진을 찍을 수 없습니다</i> (Burada fotoğraf çekemezsiniz).' },
        { t: 'diyalog', h: 'Yetenekler', l: [
          ['Jisu', '민수 씨, 수영{할 줄 알아요}?', 'Minsu, yüzme biliyor musun?', 'minsu ssi, suyeong[ha]{l jul arayo}?'],
          ['Minsu', '네, {할 수 있어요}. 그런데 오늘은 못 해요.', 'Evet, yapabilirim. Ama bugün yapamam.', 'ne, [ha]{l su isseoyo}. geureonde oneureun mot haeyo'],
          ['Jisu', '왜요?', 'Neden?', 'waeyo?'],
          ['Minsu', '다리를 다쳐서 수영{할 수 없어요}.', 'Bacağımı incittiğim için yüzemem.', 'darireul dachyeoseo suyeong[ha]{l su eopseoyo}'],
          ['Jisu', '그럼 같이 영화 {볼 수 있어요}?', 'O zaman birlikte film izleyebilir miyiz?', 'geureom gachi yeonghwa [bo]{l su isseoyo}?'],
          ['Minsu', '네, 영화는 {볼 수 있어요}!', 'Evet, film izleyebilirim!', 'ne, yeonghwaneun [bo]{l su isseoyo}!']
        ] },
        { t: 'ornek', l: [
          ['한국어를 [읽]{을 수 있어요}.', 'Korece [oku]{yabilirim}.', 'hangugeoreul [ilg]{eul su isseoyo}'],
          ['내일은 {갈 수 없어요}.', 'Yarın [gid]{emem}.', 'naeireun [ga]{l su eopseoyo}'],
          ['매운 음식을 [먹]{을 수 있어요}?', 'Acı yemek [yi]{yebilir} misin?', 'maeun eumsigeul [meog]{eul su isseoyo}?'],
          ['김치를 [만들] {수 있어요}.', 'Kimchi [yap]{abilirim}.', 'gimchireul [mandeul] {su isseoyo}'],
          ['너무 시끄러워서 [들]{을 수 없었어요}.', 'Çok gürültülü olduğu için [duy]{amadım}.', 'neomu sikkeureowoseo [deur]{eul su eopseosseoyo}'],
          ['좀 {도와줄 수 있어요}?', 'Biraz [yardım ed]{ebilir} misin?', 'jom [dowaju]{l su isseoyo}?'],
          ['저는 운전{할 줄 알아요}.', 'Araba kullanmayı [bil]{irim}.', 'jeoneun unjeon[ha]{l jul arayo}'],
          ['여기에서 사진을 [찍]{을 수 없습니다}.', 'Burada fotoğraf [çek]{emezsiniz}.', 'yeogieseo sajineul [jjig]{eul su eopseumnida}']
        ] },
        { t: 'ozet', l: [
          'Ünlü gövde + <b>ㄹ 수 있어요</b>; ünsüz + <b>을 수 있어요</b>; ㄹ gövde + 수 있어요.',
          'Olumsuz: <b>-(으)ㄹ 수 없어요</b> (못 + fiil ile aynı anlam).',
          'Geçmiş: 갈 수 있었어요 (gidebildim), 갈 수 없었어요 (gidemedim).',
          'Beceri için: <b>-(으)ㄹ 줄 알아요 / 몰라요</b>.',
          'Rica: <i>도와줄 수 있어요?</i>'
        ] }
      ],
      test: [
        { s: '가다 + -(으)ㄹ 수 있어요', o: ['갈 수 있어요', '가을 수 있어요', '가 수 있어요'], d: 0, a: 'Ünlü gövde: alta ㄹ gelir: 갈 수 있어요.' },
        { s: '먹다 + -(으)ㄹ 수 없어요', o: ['먹 수 없어요', '먹을 수 없어요', '멀 수 없어요'], d: 1, a: 'Ünsüz gövde: 을 eklenir.' },
        { s: '만들다 + -(으)ㄹ 수 있어요', o: ['만들을 수 있어요', '만들 수 있어요', '만드을 수 있어요'], d: 1, a: 'ㄹ ile biten gövdeye yalnızca 수 있어요 gelir.' },
        { s: '"Yarın gidemem."', o: ['내일 갈 수 있어요.', '내일 갈 수 없어요.', '내일 갔을 수 없어요.'], d: 1, a: 'Olumsuz: 수 없어요.' },
        { s: '듣다 + -(으)ㄹ 수 있어요', o: ['듣을 수 있어요', '들을 수 있어요', '들 수 있어요'], d: 1, a: 'ㄷ düzensiz: ünlüden önce ㄷ → ㄹ: 들을 수 있어요.' },
        { s: '"Araba kullanmayı bilirim." (beceri)', o: ['운전할 줄 알아요.', '운전할 줄 있어요.', '운전하는 줄 알아요.'], d: 0, a: 'Beceri: -(으)ㄹ 줄 알아요.' },
        { s: '"Gidebildim."', o: ['갈 수 있었어요.', '갈 수 있을 거예요.', '갔을 수 있어요.'], d: 0, a: 'Zaman eki 있다\'ya gelir: 있었어요.' },
        { s: '"좀 도와줄 수 있어요?" ne demek?', o: ['Biraz yardım edebilir misin?', 'Biraz yardım ettin mi?', 'Yardım etmek zorunda mısın?'], d: 0, a: '-(으)ㄹ 수 있어요? kibar rica bildirir.' }
      ]
    },
    {
      id: 'ko-t2-05', seviye: 'TOPIK 2', sure: 9,
      baslik: 'Zorunluluk: -아/어야 해요',
      kisa: '가야 해요, 먹어야 돼요, 안 가도 돼요',
      bolumler: [
        { t: 'metin', m: 'Bir şeyi yapmak zorunda olduğunu söylemek için <b>-아/어야 해요</b> ya da <b>-아/어야 돼요</b> kullanılır: <i>가야 해요</i> (Gitmem lazım, gitmeliyim). Kurulumu A1\'deki şimdiki zamana dayanır: <b>-아요 / -어요 / -해요</b> biçiminden <b>요</b> atılır, <b>야 해요</b> eklenir.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede <b>-meli</b> ya da <b>-mek zorunda</b> fiilin sonuna gelir. Korecede de ek sona gelir.', l: [
          ['[git]{meliyim}', '[가]{야 해요}', '[ga]{ya haeyo}'],
          ['[ye]{melisin}', '[먹어]{야 해요}', '[meogeo]{ya haeyo}'],
          ['[çalış]{mak zorundayım}', '[일해]{야 돼요}', '[ilhae]{ya dwaeyo}']
        ] },
        { t: 'tablo', h: 'Kurulum', bas: ['Sözlük hali', 'Şimdiki', '-아/어야 해요', 'Anlamı'], s: [
          ['가다|gada', '가요|gayo', '[가]{야 해요}|[ga]{ya haeyo}', 'gitmeli'],
          ['먹다|meokda', '먹어요|meogeoyo', '[먹어]{야 해요}|[meogeo]{ya haeyo}', 'yemeli'],
          ['읽다|ikda', '읽어요|ilgeoyo', '[읽어]{야 해요}|[ilgeo]{ya haeyo}', 'okumalı'],
          ['공부하다|gongbuhada', '공부해요|gongbuhaeyo', '[공부해]{야 해요}|[gongbuhae]{ya haeyo}', 'ders çalışmalı'],
          ['쓰다|sseuda', '써요|sseoyo', '[써]{야 해요}|[sseo]{ya haeyo}', 'yazmalı'],
          ['기다리다|gidarida', '기다려요|gidaryeoyo', '[기다려]{야 해요}|[gidaryeo]{ya haeyo}', 'beklemeli']
        ] },
        { t: 'ipucu', h: '해요 mu, 돼요 mu?', m: 'İkisi de aynı anlama gelir. <b>-아/어야 해요</b> biraz daha resmî ve yazıda yaygın; <b>-아/어야 돼요</b> konuşmada çok sık duyulur.' },
        { t: 'tablo', h: 'Zamanla birlikte', bas: ['Biçim', 'Anlamı', 'Örnek'], s: [
          ['-아/어야 {해요}', '…-meliyim', '[가]{야 해요}|[ga]{ya haeyo}'],
          ['-아/어야 {했어요}', '…-mek zorunda kaldım', '[가]{야 했어요}|[ga]{ya haesseoyo}'],
          ['-아/어야 {할 거예요}', '…-mek zorunda kalacağım', '[가]{야 할 거예요}|[ga]{ya hal geoyeyo}'],
          ['-아/어야 {돼요}?', '…-meli miyim?', '[가]{야 돼요}?|[ga]{ya dwaeyo}?']
        ] },
        { t: 'metin', h: 'Gerek yok: -지 않아도 돼요', m: '"…-mana gerek yok" demek için <b>-지 않아도 돼요</b> ya da <b>안 -아/어도 돼요</b> kullanılır: <i>오늘은 가지 않아도 돼요</i> = <i>오늘은 안 가도 돼요</i> (Bugün gitmene gerek yok). Dikkat: "gitmemelisin" anlamı taşımaz; yasak bir sonraki dersin konusu.' },
        { t: 'tablo', h: 'Dört anlamı ayır', bas: ['Korece', 'Türkçe'], s: [
          ['{가야 해요}.|gaya haeyo', 'Gitmeliyim / Gitmem lazım.'],
          ['안 {가도 돼요}.|an gado dwaeyo', 'Gitmeme gerek yok.'],
          ['가{지 않아도 돼요}.|gaji anado dwaeyo', 'Gitmeme gerek yok. (daha resmî)'],
          ['{가면 안 돼요}.|gamyeon an dwaeyo', 'Gitmemeliyim / Gitmem yasak. (sonraki ders)']
        ] },
        { t: 'ipucu', h: '"Gitmemeliyim" böyle denmez', m: '<i>안 가야 해요</i> doğal değildir. "…-memeliyim" için <b>-(으)면 안 돼요</b> (<i>가면 안 돼요</i>) ya da <b>-지 말아야 해요</b> (<i>가지 말아야 해요</i>) kullanılır.' },
        { t: 'ipucu', h: 'Saygılı biçim', m: 'Karşındaki büyük biriyse saygı eki girer: <i>이 약을 드셔야 해요</i> (Bu ilacı almanız gerekiyor). <i>드시다</i>, 먹다 ve 마시다\'nın saygılı biçimidir.' },
        { t: 'diyalog', h: 'İş yerinde', l: [
          ['Jisu', '내일 회의가 몇 시예요?', 'Yarın toplantı saat kaçta?', 'naeil hoeuiga myeot siyeyo?'],
          ['Minsu', '아홉 시예요. 여덟 시 반까지 [와]{야 해요}.', 'Saat dokuzda. Sekiz buçuğa kadar gelmeniz gerekiyor.', 'ahop siyeyo. yeodeol si bankkaji [wa]{ya haeyo}'],
          ['Jisu', '자료를 [준비해]{야 돼요}?', 'Doküman hazırlamam gerekiyor mu?', 'jaryoreul [junbihae]{ya dwaeyo}?'],
          ['Minsu', '아니요, [준비하]{지 않아도 돼요}. 제가 할게요.', 'Hayır, hazırlamanıza gerek yok. Ben yaparım.', 'aniyo, [junbiha]{ji anado dwaeyo}. jega halgeyo'],
          ['Jisu', '고마워요. 그럼 오늘은 일찍 [자]{야 해요}.', 'Teşekkürler. O zaman bugün erken yatmam lazım.', 'gomawoyo. geureom oneureun iljjik [ja]{ya haeyo}']
        ] },
        { t: 'ornek', l: [
          ['내일 일찍 [일어나]{야 해요}.', 'Yarın erken [kalk]{malıyım}.', 'naeil iljjik [ireona]{ya haeyo}'],
          ['약을 [먹어]{야 돼요}.', 'İlaç [iç]{mem lazım}.', 'yageul [meogeo]{ya dwaeyo}'],
          ['한국어를 매일 [연습해]{야 해요}.', 'Koreceyi her gün [çalış]{malısın}.', 'hangugeoreul maeil [yeonseupae]{ya haeyo}'],
          ['어제 늦게까지 [일해]{야 했어요}.', 'Dün geç saate kadar [çalış]{mak zorunda kaldım}.', 'eoje neutgekkaji [ilhae]{ya haesseoyo}'],
          ['여권이 [있어]{야 해요}?', 'Pasaport [ol]{ması gerekiyor} mu?', 'yeogwoni [isseo]{ya haeyo}?'],
          ['오늘은 [요리하]{지 않아도 돼요}.', 'Bugün yemek [yap]{mana gerek yok}.', 'oneureun [yoriha]{ji anado dwaeyo}'],
          ['주말에는 안 [일해]{도 돼요}.', 'Hafta sonu [çalış]{mam gerekmiyor}.', 'jumareneun an [ilhae]{do dwaeyo}'],
          ['표를 미리 [사]{야 해요}.', 'Bileti önceden [al]{mak gerekiyor}.', 'pyoreul miri [sa]{ya haeyo}']
        ] },
        { t: 'ozet', l: [
          '-아요 / -어요 biçiminden 요 atılır, <b>야 해요 / 야 돼요</b> eklenir: 가야 해요, 먹어야 해요.',
          '해요 ve 돼요 aynı anlamdadır; 돼요 konuşmada daha yaygındır.',
          'Geçmiş: <b>-아/어야 했어요</b> (…-mek zorunda kaldım).',
          'Gerek yok: <b>-지 않아도 돼요</b> = <b>안 -아/어도 돼요</b>.',
          '"…-memeli" için <b>-(으)면 안 돼요</b> (sonraki ders).'
        ] }
      ],
      test: [
        { s: '가다 → zorunluluk', o: ['가야 해요', '가어야 해요', '갈야 해요'], d: 0, a: '가요 → 가야 해요.' },
        { s: '먹다 → zorunluluk', o: ['먹야 해요', '먹어야 해요', '먹아야 해요'], d: 1, a: '먹어요 → 먹어야 해요.' },
        { s: '공부하다 → zorunluluk', o: ['공부하야 해요', '공부해야 해요', '공부해서 해요'], d: 1, a: '공부해요 → 공부해야 해요.' },
        { s: '"Dün çalışmak zorunda kaldım."', o: ['어제 일해야 해요.', '어제 일해야 했어요.', '어제 일했어야 해요.'], d: 1, a: 'Geçmiş, 해요\'ya gelir: 일해야 했어요.' },
        { s: '"Bugün gitmene gerek yok."', o: ['오늘은 가지 않아도 돼요.', '오늘은 가면 안 돼요.', '오늘은 가야 해요.'], d: 0, a: 'Gerek yok: -지 않아도 돼요.' },
        { s: '"안 가도 돼요" ne demek?', o: ['Gitmemelisin.', 'Gitmene gerek yok.', 'Gidemezsin.'], d: 1, a: '안 -아/어도 돼요 = gerek yok.' },
        { s: '쓰다 (yazmak) → zorunluluk', o: ['쓰어야 해요', '써야 해요', '쓰야 해요'], d: 1, a: '쓰다 → 써요 → 써야 해요.' },
        { s: '"Pasaport olması gerekiyor mu?"', o: ['여권이 있어야 해요?', '여권이 있어도 돼요?', '여권이 있으면 안 돼요?'], d: 0, a: '있다 → 있어요 → 있어야 해요?' }
      ]
    },
    {
      id: 'ko-t2-06', seviye: 'TOPIK 2', sure: 9,
      baslik: 'İzin ve yasak: -아/어도 돼요, -(으)면 안 돼요',
      kisa: '앉아도 돼요? · 찍으면 안 돼요 · 가지 마세요',
      bolumler: [
        { t: 'metin', m: 'İzin istemek, izin vermek ve yasaklamak için üç kalıp: <b>-아/어도 돼요</b> (…-ebilirsin, sakıncası yok), <b>-(으)면 안 돼요</b> (…-memelisin, yasak) ve <b>-지 마세요</b> (…-meyin).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede izin <b>-ebilir</b>, yasak <b>-memeli</b>, olumsuz emir <b>-me</b> ile verilir. Korecede de üçü fiilin sonuna gelen kalıplardır.', l: [
          ['[otur]{abilir} miyim?', '[앉아]{도 돼요}?', '[anja]{do dwaeyo}?'],
          ['[gir]{memelisin}', '[들어가]{면 안 돼요}', '[deureoga]{myeon an dwaeyo}'],
          ['[dokun]{mayın}', '[만지]{지 마세요}', '[manji]{ji maseyo}']
        ] },
        { t: 'tablo', h: 'İzin: -아/어도 돼요', bas: ['Sözlük hali', 'Şimdiki', 'İzin', 'Anlamı'], s: [
          ['앉다|anda', '앉아요|anjayo', '[앉아]{도 돼요}|[anja]{do dwaeyo}', 'oturabilirsin'],
          ['먹다|meokda', '먹어요|meogeoyo', '[먹어]{도 돼요}|[meogeo]{do dwaeyo}', 'yiyebilirsin'],
          ['들어가다|deureogada', '들어가요|deureogayo', '[들어가]{도 돼요}|[deureoga]{do dwaeyo}', 'girebilirsin'],
          ['찍다|jjikda', '찍어요|jjigeoyo', '[찍어]{도 돼요}|[jjigeo]{do dwaeyo}', '(fotoğraf) çekebilirsin'],
          ['전화하다|jeonhwahada', '전화해요|jeonhwahaeyo', '[전화해]{도 돼요}|[jeonhwahae]{do dwaeyo}', 'arayabilirsin']
        ] },
        { t: 'metin', h: 'İzin istemek', m: 'Soru tonuyla söylendiğinde kibar bir izin isteğidir: <i>여기 앉아도 돼요?</i> (Buraya oturabilir miyim?) Cevap: <i>네, 앉으세요</i> (Evet, oturun) ya da <i>아니요, 안 돼요</i> (Hayır, olmaz). Daha resmîsi: <i>앉아도 될까요?</i>' },
        { t: 'tablo', h: 'Yasak: -(으)면 안 돼요', bas: ['Sözlük hali', 'Kural', 'Yasak', 'Anlamı'], s: [
          ['가다|gada', 'ünlü → 면', '[가]{면 안 돼요}|[ga]{myeon an dwaeyo}', 'gitmemelisin'],
          ['피우다|piuda', 'ünlü → 면', '[피우]{면 안 돼요}|[piu]{myeon an dwaeyo}', '(sigara) içmemelisin'],
          ['먹다|meokda', 'ünsüz → 으면', '[먹]{으면 안 돼요}|[meog]{eumyeon an dwaeyo}', 'yememelisin'],
          ['찍다|jjikda', 'ünsüz → 으면', '[찍]{으면 안 돼요}|[jjig]{eumyeon an dwaeyo}', 'çekmemelisin'],
          ['떠들다|tteodeulda', 'ㄹ → 면', '[떠들]{면 안 돼요}|[tteodeul]{myeon an dwaeyo}', 'gürültü yapmamalısın']
        ] },
        { t: 'metin', h: 'Olumsuz emir: -지 마세요', m: 'Kibar olumsuz emir için gövdeye <b>-지 마세요</b> eklenir: <i>가지 마세요</i> (Gitmeyin), <i>걱정하지 마세요</i> (Merak etmeyin). A1\'deki -(으)세요\'nun olumsuzudur. Arkadaşa ya da çocuğa <b>-지 마</b>: <i>울지 마</i> (Ağlama).' },
        { t: 'tablo', h: 'Olumlu ve olumsuz emir', bas: ['Olumlu', 'Olumsuz', 'Türkçe'], s: [
          ['가세요|gaseyo', '[가]{지 마세요}|[ga]{ji maseyo}', 'gidin / gitmeyin'],
          ['보세요|boseyo', '[보]{지 마세요}|[bo]{ji maseyo}', 'bakın / bakmayın'],
          ['기다리세요|gidariseyo', '[기다리]{지 마세요}|[gidari]{ji maseyo}', 'bekleyin / beklemeyin'],
          ['들어가세요|deureogaseyo', '[들어가]{지 마세요}|[deureoga]{ji maseyo}', 'girin / girmeyin']
        ] },
        { t: 'ipucu', h: 'Tek başına: 돼요 / 안 돼요', m: '<b>돼요</b> tek başına "Olur", <b>안 돼요</b> "Olmaz!" demektir. Soruya kısa cevap: <i>먹어도 돼요? — 네, 돼요 / 아니요, 안 돼요.</i>' },
        { t: 'ipucu', h: 'Levhalarda', m: 'Levhalarda kısa biçimler görürsün: <i>금연</i> (sigara içilmez), <i>출입 금지</i> (girilmez), <i>촬영 금지</i> (çekim yasak). Konuşmada aynı yasak: <i>여기서 담배를 피우면 안 돼요</i>.' },
        { t: 'diyalog', h: 'Müzede', l: [
          ['Turist', '여기서 사진을 [찍어]{도 돼요}?', 'Burada fotoğraf çekebilir miyim?', 'yeogiseo sajineul [jjigeo]{do dwaeyo}?'],
          ['Görevli', '네, [찍어]{도 돼요}. 그런데 플래시를 [쓰]{면 안 돼요}.', 'Evet, çekebilirsiniz. Ama flaş kullanmamalısınız.', 'ne, [jjigeo]{do dwaeyo}. geureonde peullaesireul [sseu]{myeon an dwaeyo}'],
          ['Turist', '이 그림을 [만져]{도 돼요}?', 'Bu resme dokunabilir miyim?', 'i geurimeul [manjyeo]{do dwaeyo}?'],
          ['Görevli', '아니요, [만지]{지 마세요}.', 'Hayır, dokunmayın.', 'aniyo, [manji]{ji maseyo}'],
          ['Turist', '물은 [마셔]{도 돼요}?', 'Su içebilir miyim peki?', 'mureun [masyeo]{do dwaeyo}?'],
          ['Görevli', '네, 물은 괜찮아요.', 'Evet, su sorun değil.', 'ne, mureun gwaenchanayo']
        ] },
        { t: 'ornek', l: [
          ['창문을 [열어]{도 돼요}?', 'Pencereyi [aç]{abilir} miyim?', 'changmuneul [yeoreo]{do dwaeyo}?'],
          ['여기 [앉아]{도 돼요}.', 'Buraya [otur]{abilirsin}.', 'yeogi [anja]{do dwaeyo}'],
          ['수업 시간에 [자]{면 안 돼요}.', 'Derste [uyu]{mamalısın}.', 'sueop sigane [ja]{myeon an dwaeyo}'],
          ['여기서 담배를 [피우]{면 안 돼요}.', 'Burada sigara [iç]{mek yasak}.', 'yeogiseo dambaereul [piu]{myeon an dwaeyo}'],
          ['[걱정하]{지 마세요}.', 'Merak [et]{meyin}.', '[geokjeongha]{ji maseyo}'],
          ['[늦]{지 마세요}.', 'Geç [kal]{mayın}.', '[neut]{ji maseyo}'],
          ['지금 [전화해]{도 돼요}?', 'Şimdi [ara]{yabilir} miyim?', 'jigeum [jeonhwahae]{do dwaeyo}?'],
          ['[울]{지 마}.', '[Ağla]{ma}.', '[ul]{ji ma}']
        ] },
        { t: 'ozet', l: [
          'İzin: -아요 / -어요 biçiminden 요 atılır + <b>도 돼요</b>: 앉아도 돼요.',
          'Yasak: <b>-(으)면 안 돼요</b>: 가면 안 돼요, 먹으면 안 돼요.',
          'Kibar olumsuz emir: <b>-지 마세요</b>; samimi: <b>-지 마</b>.',
          'Kısa cevaplar: <b>돼요</b> (olur), <b>안 돼요</b> (olmaz).'
        ] }
      ],
      test: [
        { s: '"Buraya oturabilir miyim?"', o: ['여기 앉아도 돼요?', '여기 앉으면 안 돼요?', '여기 앉지 마세요?'], d: 0, a: 'İzin istemek: -아/어도 돼요?' },
        { s: '먹다 → yasak', o: ['먹면 안 돼요', '먹으면 안 돼요', '먹어면 안 돼요'], d: 1, a: 'Ünsüz gövde: -으면 안 돼요.' },
        { s: '"Merak etmeyin."', o: ['걱정해도 돼요.', '걱정하지 마세요.', '걱정하면 돼요.'], d: 1, a: 'Olumsuz emir: -지 마세요.' },
        { s: '"Burada sigara içmek yasak."', o: ['여기서 담배를 피워도 돼요.', '여기서 담배를 피우면 안 돼요.'], d: 1, a: 'Yasak: -(으)면 안 돼요.' },
        { s: '"먹어도 돼요?" sorusuna olumsuz kısa cevap', o: ['네, 돼요.', '아니요, 안 돼요.', '아니요, 못 해요.'], d: 1, a: 'Olmaz: 안 돼요.' },
        { s: '가다 → kibar olumsuz emir', o: ['가지 마세요', '안 가세요', '가면 마세요'], d: 0, a: 'Gövde + -지 마세요.' },
        { s: '"Pencereyi açabilir miyim?"', o: ['창문을 열어도 돼요?', '창문을 열면 안 돼요?', '창문을 열지 마세요?'], d: 0, a: '열다 → 열어요 → 열어도 돼요?' },
        { s: '"울지 마" kime söylenir?', o: ['Yakın arkadaşa ya da çocuğa', 'Öğretmene', 'Patrona'], d: 0, a: '-지 마 samimi biçimdir; büyüklere -지 마세요.' }
      ]
    },
    {
      id: 'ko-t2-07', seviye: 'TOPIK 2', sure: 10,
      baslik: 'Teklif ve söz: -(으)ㄹ까요?, -(으)ㅂ시다, -(으)ㄹ게요',
      kisa: '갈까요? · 갑시다 · 갈게요',
      bolumler: [
        { t: 'metin', m: 'Birlikte bir şey önermek ve söz vermek için üç biçim: <b>-(으)ㄹ까요?</b> (…-elim mi? / …-eyim mi?), <b>-(으)ㅂ시다</b> (hadi …-elim) ve <b>-(으)ㄹ게요</b> (…-rım, …-eyim: söz, karar). Üçü de gövdenin ünlüyle mi ünsüzle mi bittiğine göre değişir.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-elim mi?</b>, <b>-elim</b> ve sözdeki <b>-rım</b> ile birebir eşleşir.', l: [
          ['[gid]{elim mi}?', '[가]{ㄹ까요}? → 갈까요?', '[ga]{lkkayo}?'],
          ['[ye]{yelim}', '[먹]{읍시다}', '[meog]{eupsida}'],
          ['ben [ara]{rım}', '제가 [전화하]{ㄹ게요} → 전화할게요', 'jega [jeonhwaha]{lgeyo}']
        ] },
        { t: 'tablo', h: 'Kurulum', bas: ['Sözlük hali', '-(으)ㄹ까요?', '-(으)ㅂ시다', '-(으)ㄹ게요'], s: [
          ['가다|gada', '{갈까요}?|[ga]{lkkayo}?', '{갑시다}|[gap]{sida}', '{갈게요}|[ga]{lgeyo}'],
          ['하다|hada', '{할까요}?|[ha]{lkkayo}?', '{합시다}|[hap]{sida}', '{할게요}|[ha]{lgeyo}'],
          ['먹다|meokda', '[먹]{을까요}?|[meog]{eulkkayo}?', '[먹]{읍시다}|[meog]{eupsida}', '[먹]{을게요}|[meog]{eulgeyo}'],
          ['만들다|mandeulda', '[만들]{까요}?|[mandeul]{kkayo}?', '{만듭시다}|[mandeup]{sida}', '[만들]{게요}|[mandeul]{geyo}'],
          ['걷다|geotda', '[걸]{을까요}?|[geor]{eulkkayo}?', '[걸]{읍시다}|[geor]{eupsida}', '[걸]{을게요}|[geor]{eulgeyo}']
        ] },
        { t: 'ipucu', h: 'Okunuş', m: 'ㄹ\'den sonra gelen ㄱ sert okunur: <i>할게요</i> → "halkkeyo", <i>갈까요</i> → "galkkayo". <i>-ㅂ시다</i> ise "-psida" okunur: <i>갑시다</i> → "gapsida".' },
        { t: 'metin', h: '-(으)ㄹ까요?: üç kullanım', m: '1) <b>Teklif:</b> <i>같이 커피 마실까요?</i> (Birlikte kahve içelim mi?) 2) <b>Fikir sorma:</b> özne "ben" ise "…-eyim mi?": <i>제가 창문을 열까요?</i> (Pencereyi açayım mı?) 3) <b>Tahmin sorma:</b> <i>내일 비가 올까요?</i> (Yarın yağmur yağar mı dersin?)' },
        { t: 'metin', h: '-(으)ㅂ시다: hadi …-elim', m: 'Bir gruba teklif ya da çağrı: <i>시작합시다!</i> (Başlayalım!). Dikkat: Kendinden büyüklere ve üstlere söylenmez, emir gibi duyulur; onlara <i>같이 가요</i> (gidelim) ya da <i>가시지요</i> denir. Arkadaşlar arasında <b>-자</b>: <i>가자!</i> (Hadi gidelim!)' },
        { t: 'metin', h: '-(으)ㄹ게요: söz ve karar', m: 'Konuşanın <b>karşıdakini düşünerek</b> verdiği karar ya da söz: <i>내일 전화할게요</i> (Yarın ararım). Yalnızca "ben / biz" için kullanılır ve soru yapılmaz. Sadece plan bildiren <b>-(으)ㄹ 거예요</b>\'dan farkı budur.' },
        { t: 'tablo', h: '-(으)ㄹ게요 mu, -(으)ㄹ 거예요 mu?', bas: ['Durum', 'Korece', 'Türkçe'], s: [
          ['Arkadaşın yardım istedi', '제가 {도와줄게요}.|jega dowajulgeyo', 'Ben yardım ederim. (söz)'],
          ['Garson soruyor', '저는 비빔밥 {먹을게요}.|jeoneun bibimbap meogeulgeyo', 'Ben bibimbap alayım. (karar)'],
          ['Planını anlatıyorsun', '주말에 부산에 {갈 거예요}.|jumare busane gal geoyeyo', 'Hafta sonu Busan\'a gideceğim. (plan)'],
          ['Tahmin', '내일 비가 {올 거예요}.|naeil biga ol geoyeyo', 'Yarın yağmur yağacak.']
        ] },
        { t: 'ipucu', h: 'Cevap verirken', m: '<i>-(으)ㄹ까요?</i> sorusuna genellikle <b>-아/어요</b> ile cevap verilir: <i>커피 마실까요? — 네, 마셔요!</i> (Kahve içelim mi? — Evet, içelim!) Burada -아/어요 "…-elim" anlamı taşır.' },
        { t: 'diyalog', h: 'Buluşma ayarlamak', l: [
          ['Jisu', '토요일에 같이 영화 {볼까요}?', 'Cumartesi birlikte film izleyelim mi?', 'toyoire gachi yeonghwa [bo]{lkkayo}?'],
          ['Minsu', '좋아요. 몇 시에 {만날까요}?', 'Olur. Saat kaçta buluşalım?', 'joayo. myeot sie [manna]{lkkayo}?'],
          ['Jisu', '두 시에 극장 앞에서 만나요. 표는 제가 {살게요}.', 'Saat ikide sinemanın önünde buluşalım. Biletleri ben alırım.', 'du sie geukjang apeseo mannayo. pyoneun jega [sa]{lgeyo}'],
          ['Minsu', '그럼 팝콘은 제가 {살게요}.', 'O zaman patlamış mısırı ben alırım.', 'geureom papkoneun jega [sa]{lgeyo}'],
          ['Jisu', '좋아요! 늦지 마세요.', 'Harika! Geç kalmayın.', 'joayo! neutji maseyo'],
          ['Minsu', '네, 일찍 {갈게요}.', 'Tamam, erken gelirim.', 'ne, iljjik [ga]{lgeyo}']
        ] },
        { t: 'ornek', l: [
          ['같이 점심 [먹]{을까요}?', 'Birlikte öğle yemeği [ye]{yelim mi}?', 'gachi jeomsim [meog]{eulkkayo}?'],
          ['제가 창문을 {열까요}?', 'Pencereyi [aç]{ayım mı}?', 'jega changmuneul [yeol]{kkayo}?'],
          ['내일 비가 {올까요}?', 'Yarın yağmur [yağ]{ar mı dersin}?', 'naeil biga [o]{lkkayo}?'],
          ['자, [시작]{합시다}!', 'Hadi, [başla]{yalım}!', 'ja, [sijak]{apsida}!'],
          ['잠깐 {쉽시다}.', 'Biraz [dinlen]{elim}.', 'jamkkan [swip]{sida}'],
          ['내일 다시 {연락할게요}.', 'Yarın tekrar [haber ver]{irim}.', 'naeil dasi [yeollaka]{lgeyo}'],
          ['저는 커피 {마실게요}.', 'Ben kahve [al]{ayım}.', 'jeoneun keopi [masi]{lgeyo}'],
          ['조심해서 {갈게요}.', 'Dikkatli [gid]{erim}.', 'josimhaeseo [ga]{lgeyo}']
        ] },
        { t: 'ozet', l: [
          '<b>-(으)ㄹ까요?</b>: …-elim mi? / …-eyim mi? / …-er mi dersin?',
          '<b>-(으)ㅂ시다</b>: hadi …-elim (büyüklere söylenmez); samimi: <b>-자</b>.',
          '<b>-(으)ㄹ게요</b>: karşıdakine söz ya da karar (…-rım, …-eyim); yalnızca ben / biz.',
          '<b>-(으)ㄹ 거예요</b>: yalnızca plan ve tahmin.',
          'ㄹ gövdeler: 만들까요, 만듭시다, 만들게요.'
        ] }
      ],
      test: [
        { s: '"Birlikte gidelim mi?"', o: ['같이 갈까요?', '같이 갈게요?', '같이 갑시다?'], d: 0, a: 'Teklif sorusu: -(으)ㄹ까요?' },
        { s: '먹다 + -(으)ㅂ시다', o: ['먹읍시다', '먹습시다', '먹ㅂ시다'], d: 0, a: 'Ünsüz gövde: -읍시다.' },
        { s: '"Ben yardım ederim." (söz)', o: ['제가 도와줄게요.', '제가 도와줄까요.', '제가 도와줍시다.'], d: 0, a: 'Söz: -(으)ㄹ게요.' },
        { s: '"Pencereyi açayım mı?"', o: ['창문을 열게요?', '창문을 열까요?', '창문을 엽시다?'], d: 1, a: '"…-eyim mi?": -(으)ㄹ까요?' },
        { s: '만들다 + -(으)ㅂ시다', o: ['만들읍시다', '만듭시다', '만들자시다'], d: 1, a: 'ㄹ düşer: 만듭시다.' },
        { s: 'Öğretmene "Hadi gidelim" demek için hangisi uygun DEĞİL?', o: ['같이 가요.', '갑시다.', '가시지요.'], d: 1, a: '-(으)ㅂ시다 büyüklere emir gibi duyulur.' },
        { s: '"Hafta sonu Busan\'a gideceğim." (plan anlatıyorsun)', o: ['주말에 부산에 갈 거예요.', '주말에 부산에 갈까요.'], d: 0, a: 'Plan: -(으)ㄹ 거예요.' },
        { s: '-(으)ㄹ게요 ile hangisi yapılamaz?', o: ['Söz vermek', 'Soru sormak', 'Karar bildirmek'], d: 1, a: '-(으)ㄹ게요 soru olarak kullanılmaz.' }
      ]
    },
    {
      id: 'ko-t2-08', seviye: 'TOPIK 2', sure: 9,
      baslik: 'Deneme ve deneyim: -아/어 보다, -(으)ㄴ 적이 있다',
      kisa: '먹어 보세요 · 간 적이 있어요',
      bolumler: [
        { t: 'metin', m: '<b>-아/어 보다</b> bir şeyi "deneyip bakmak" anlamı verir: <i>먹어 보세요</i> (Bir tadın). <b>-(으)ㄴ 적이 있다 / 없다</b> ise geçmişte bir deneyimin olup olmadığını söyler: <i>한국에 간 적이 있어요</i> (Kore\'ye gitmişliğim var).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-ip bakmak</b> ve <b>hiç …-dın mı? / …-mışlığım var</b> anlamları.', l: [
          ['[ye]{yip bakın}', '[먹어] {보세요}', '[meogeo] {boseyo}'],
          ['[giy]{ip bakın}', '[입어] {보세요}', '[ibeo] {boseyo}'],
          ['hiç [git]{tin mi}?', '[가]{ㄴ 적이 있어요}? → 간 적이 있어요?', '[ga]{n jeogi isseoyo}?']
        ] },
        { t: 'tablo', h: '-아/어 보다', bas: ['Sözlük hali', '-아/어 보세요', '-아/어 봤어요', 'Anlamı'], s: [
          ['먹다|meokda', '[먹어] {보세요}|[meogeo] {boseyo}', '[먹어] {봤어요}|[meogeo] {bwasseoyo}', 'tadın / tattım'],
          ['입다|ipda', '[입어] {보세요}|[ibeo] {boseyo}', '[입어] {봤어요}|[ibeo] {bwasseoyo}', 'deneyin / denedim (giysi)'],
          ['가다|gada', '[가] {보세요}|[ga] {boseyo}', '[가] {봤어요}|[ga] {bwasseoyo}', 'gidip görün / gittim'],
          ['하다|hada', '[해] {보세요}|[hae] {boseyo}', '[해] {봤어요}|[hae] {bwasseoyo}', 'deneyin / denedim'],
          ['배우다|baeuda', '[배워] {보세요}|[baewo] {boseyo}', '[배워] {봤어요}|[baewo] {bwasseoyo}', 'öğrenmeyi deneyin / denedim']
        ] },
        { t: 'ipucu', h: '보다 ile 보다', m: 'Bu yapı 보다 (bakmak, görmek) fiilinin kendisiyle kullanılmaz: <i>봐 보세요</i> yerine yalnızca <i>보세요</i> denir.' },
        { t: 'ipucu', h: '-아/어 봤어요 da deneyimdir', m: 'Geçmiş biçim <i>-아/어 봤어요</i> deneyim bildirir: <i>김치를 먹어 봤어요</i> (Kimchi yedim, tadına baktım). Günlük konuşmada -(으)ㄴ 적이 있어요\'dan daha sık duyulur.' },
        { t: 'tablo', h: '-(으)ㄴ 적이 있다 / 없다', bas: ['Sözlük hali', 'Kural', 'Deneyim'], s: [
          ['가다|gada', 'ünlü → ㄴ', '[가]{ㄴ 적이 있어요} → 간 적이 있어요|[ga]{n jeogi isseoyo}'],
          ['보다|boda', 'ünlü → ㄴ', '[보]{ㄴ 적이 있어요} → 본 적이 있어요|[bo]{n jeogi isseoyo}'],
          ['먹다|meokda', 'ünsüz → 은', '[먹]{은 적이 있어요}|[meog]{eun jeogi isseoyo}'],
          ['살다|salda', 'ㄹ düşer → ㄴ', '[사]{ㄴ 적이 있어요} → 산 적이 있어요|[sa]{n jeogi isseoyo}'],
          ['듣다|deutda', 'ㄷ → ㄹ + 은', '[들]{은 적이 있어요}|[deur]{eun jeogi isseoyo}']
        ] },
        { t: 'metin', h: 'İkisi birlikte: -아/어 본 적이 있어요', m: 'En doğal deneyim kalıbı ikisinin birleşimidir: <i>한국 음식을 먹어 본 적이 있어요?</i> (Hiç Kore yemeği yedin mi?) <i>아니요, 먹어 본 적이 없어요</i> (Hayır, hiç yemedim).' },
        { t: 'ipucu', h: 'Sıradan işler için kullanılmaz', m: 'Her gün yaptığın sıradan şeyler için kullanılmaz: <i>밥을 먹은 적이 있어요</i> ("Yemek yemişliğim var") tuhaf duyulur. Özel, ilginç deneyimler için kullanılır.' },
        { t: 'ipucu', h: 'Kibar öneri: 한번 -아/어 보세요', m: '<i>-아/어 보세요</i> kibar bir öneri ya da tavsiyedir ve çoğunlukla <b>한번</b> (bir kere) ile söylenir: <i>이 책 한번 읽어 보세요</i> (Bu kitabı bir okuyun).' },
        { t: 'diyalog', h: 'Kore deneyimi', l: [
          ['Jisu', '한국에 [가] {본 적이 있어요}?', 'Hiç Kore\'ye gittin mi?', 'hanguge [ga] {bon jeogi isseoyo}?'],
          ['Kemal', '네, 작년에 서울에 [가] {봤어요}.', 'Evet, geçen yıl Seul\'e gittim.', 'ne, jangnyeone seoure [ga] {bwasseoyo}'],
          ['Jisu', '산낙지를 [먹어] {본 적이 있어요}?', 'Hiç canlı ahtapot yedin mi?', 'sannakjireul [meogeo] {bon jeogi isseoyo}?'],
          ['Kemal', '아니요, [먹어] {본 적이 없어요}. 무서워요!', 'Hayır, hiç yemedim. Korkunç!', 'aniyo, [meogeo] {bon jeogi eopseoyo}. museowoyo!'],
          ['Jisu', '한번 [먹어] {보세요}. 맛있어요!', 'Bir tadına bak. Lezzetli!', 'hanbeon [meogeo] {boseyo}. masisseoyo!']
        ] },
        { t: 'ornek', l: [
          ['이 옷을 [입어] {봐도 돼요}?', 'Bu giysiyi [dene]{yebilir} miyim?', 'i oseul [ibeo] {bwado dwaeyo}?'],
          ['한국 노래를 [들어] {보세요}.', 'Kore şarkılarını bir [dinle]{yin}.', 'hanguk noraereul [deureo] {boseyo}'],
          ['태권도를 [배워] {봤어요}.', 'Tekvandoyu [öğren]{meyi denedim}.', 'taegwondoreul [baewo] {bwasseoyo}'],
          ['제주도에 {간 적이 있어요}?', 'Hiç Jeju Adası\'na [git]{tin mi}?', 'jejudoe [ga]{n jeogi isseoyo}?'],
          ['그 영화를 {본 적이 없어요}.', 'O filmi hiç [izle]{medim}.', 'geu yeonghwareul [bo]{n jeogi eopseoyo}'],
          ['외국에서 {산 적이 있어요}.', 'Yurt dışında [yaşa]{mışlığım var}.', 'oegugeseo [sa]{n jeogi isseoyo}'],
          ['김치를 [만들어] {본 적이 있어요}.', 'Kimchi [yap]{mışlığım var}.', 'gimchireul [mandeureo] {bon jeogi isseoyo}'],
          ['한번 [해] {보세요}!', 'Bir [dene]{yin}!', 'hanbeon [hae] {boseyo}!']
        ] },
        { t: 'ozet', l: [
          '<b>-아/어 보다</b>: deneyip bakmak (<i>먹어 보세요</i> = tadın).',
          '<b>-(으)ㄴ 적이 있어요 / 없어요</b>: …-mışlığım var / hiç …-medim.',
          'En doğalı ikisi birlikte: <b>-아/어 본 적이 있어요</b>.',
          '보다 fiilinin kendisiyle yalnızca <i>보세요</i> denir.',
          'Sıradan günlük işler için kullanılmaz.'
        ] }
      ],
      test: [
        { s: '"Bir tadın." (öneri)', o: ['먹어 보세요.', '먹어 봤어요.', '먹은 적이 있어요.'], d: 0, a: 'Öneri: -아/어 보세요.' },
        { s: '가다 + -(으)ㄴ 적이 있어요', o: ['가은 적이 있어요', '간 적이 있어요', '갈 적이 있어요'], d: 1, a: 'Ünlü gövde: alta ㄴ gelir: 간.' },
        { s: '먹다 + -(으)ㄴ 적이 있어요', o: ['먹은 적이 있어요', '먹ㄴ 적이 있어요', '먹는 적이 있어요'], d: 0, a: 'Ünsüz gövde: 은 eklenir.' },
        { s: '"O filmi hiç izlemedim."', o: ['그 영화를 본 적이 없어요.', '그 영화를 볼 적이 없어요.', '그 영화를 봐 봤어요.'], d: 0, a: 'Deneyim yok: -(으)ㄴ 적이 없어요.' },
        { s: '"Hiç Kore yemeği yedin mi?"', o: ['한국 음식을 먹어 본 적이 있어요?', '한국 음식을 먹어 보세요?', '한국 음식을 먹을 수 있어요?'], d: 0, a: '-아/어 본 적이 있어요?' },
        { s: '살다 + -(으)ㄴ 적이 있어요', o: ['살은 적이 있어요', '산 적이 있어요', '사는 적이 있어요'], d: 1, a: 'ㄹ gövdede ㄹ düşer: 산 적이 있어요.' },
        { s: '"Bu giysiyi deneyebilir miyim?"', o: ['이 옷을 입어 봐도 돼요?', '이 옷을 입은 적이 있어요?', '이 옷을 입어야 해요?'], d: 0, a: '-아/어 보다 + -아/어도 돼요?' },
        { s: 'Hangisi tuhaf duyulur?', o: ['제주도에 간 적이 있어요.', '밥을 먹은 적이 있어요.', '번지 점프를 해 본 적이 있어요.'], d: 1, a: 'Sıradan günlük işler için kullanılmaz.' }
      ]
    },
    {
      id: 'ko-t2-09', seviye: 'TOPIK 2', sure: 9,
      baslik: 'Amaç: -(으)러 가다, -(으)려고',
      kisa: '먹으러 가요 · 배우려고 샀어요',
      bolumler: [
        { t: 'metin', m: 'Bir yere <b>ne yapmak için</b> gittiğini söylemek için <b>-(으)러 가다 / 오다</b> kullanılır: <i>밥 먹으러 가요</i> (Yemek yemeye gidiyorum). Daha genel amaç ve niyet için <b>-(으)려고</b> kullanılır: <i>한국어를 배우려고 책을 샀어요</i> (Korece öğrenmek için kitap aldım).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-meye</b> (yemeye gidiyorum) ve <b>-mek için</b> anlamları.', l: [
          ['yemek [ye]{meye} gidiyorum', '밥 [먹]{으러} 가요', 'bap [meog]{eureo} gayo'],
          ['film [izle]{meye} geldim', '영화 [보]{러} 왔어요', 'yeonghwa [bo]{reo} wasseoyo'],
          ['[öğren]{mek için} aldım', '[배우]{려고} 샀어요', '[baeu]{ryeogo} sasseoyo']
        ] },
        { t: 'tablo', h: '-(으)러 kurulumu', bas: ['Sözlük hali', 'Kural', 'Biçim', 'Örnek'], s: [
          ['보다|boda', 'ünlü → 러', '[보]{러}|[bo]{reo}', '영화 보러 가요.|yeonghwa boreo gayo'],
          ['사다|sada', 'ünlü → 러', '[사]{러}|[sa]{reo}', '옷 사러 가요.|ot sareo gayo'],
          ['먹다|meokda', 'ünsüz → 으러', '[먹]{으러}|[meog]{eureo}', '점심 먹으러 가요.|jeomsim meogeureo gayo'],
          ['찾다|chatda', 'ünsüz → 으러', '[찾]{으러}|[chaj]{eureo}', '돈 찾으러 은행에 가요.|don chajeureo eunhaenge gayo'],
          ['놀다|nolda', 'ㄹ → 러', '[놀]{러}|[nol]{leo}', '친구 집에 놀러 가요.|chingu jibe nolleo gayo']
        ] },
        { t: 'ipucu', h: 'Yalnızca hareket fiilleriyle', m: '<b>-(으)러</b>\'dan sonra yalnızca <b>가다, 오다, 다니다, 나가다, 들어오다</b> gibi hareket fiilleri gelir: <i>공부하러 도서관에 가요</i> ✓. <i>공부하러 책을 샀어요</i> ✗; burada <b>-(으)려고</b> gerekir.' },
        { t: 'tablo', h: '-(으)려고 kurulumu', bas: ['Sözlük hali', 'Kural', 'Biçim', 'Anlamı'], s: [
          ['배우다|baeuda', 'ünlü → 려고', '[배우]{려고}|[baeu]{ryeogo}', 'öğrenmek için'],
          ['만나다|mannada', 'ünlü → 려고', '[만나]{려고}|[manna]{ryeogo}', 'buluşmak için'],
          ['먹다|meokda', 'ünsüz → 으려고', '[먹]{으려고}|[meog]{euryeogo}', 'yemek için'],
          ['살다|salda', 'ㄹ → 려고', '[살]{려고}|[sal]{lyeogo}', 'yaşamak için']
        ] },
        { t: 'metin', h: '-(으)려고 해요: niyet', m: 'Cümle sonunda <b>-(으)려고 해요</b> "…-meyi düşünüyorum, …-mek niyetindeyim" anlamı verir: <i>내년에 한국에 가려고 해요</i> (Gelecek yıl Kore\'ye gitmeyi düşünüyorum). Geçmişte "…-ecektim, …-mek üzereydim": <i>전화하려고 했어요</i> (Arayacaktım).' },
        { t: 'tablo', h: '-(으)러 mu, -(으)려고 mu?', bas: ['', '-(으)러', '-(으)려고'], s: [
          ['Arkasından gelen fiil', 'yalnızca hareket (가다, 오다…)', 'her fiil'],
          ['Emir, teklif', '✓ (먹으러 가요!)', '✗'],
          ['Örnek', '책 사러 서점에 가요.|chaek sareo seojeome gayo', '책 사려고 돈을 모아요.|chaek saryeogo doneul moayo'],
          ['Türkçe', 'Kitap almaya kitapçıya gidiyorum.', 'Kitap almak için para biriktiriyorum.']
        ] },
        { t: 'ipucu', h: 'Gidilen yer: -에', m: '-(으)러 ile gidilen yer <b>-에</b> alır ve sıra esnektir: <i>도서관<b>에</b> 공부하러 가요</i> = <i>공부하러 도서관<b>에</b> 가요</i> (Kütüphaneye ders çalışmaya gidiyorum).' },
        { t: 'diyalog', h: 'Alışverişe', l: [
          ['Minsu', '어디 가요?', 'Nereye gidiyorsun?', 'eodi gayo?'],
          ['Jisu', '친구 생일 선물을 [사]{러} 백화점에 가요.', 'Arkadaşımın doğum günü hediyesini almaya büyük mağazaya gidiyorum.', 'chingu saengil seonmureul [sa]{reo} baekhwajeome gayo'],
          ['Minsu', '저도 옷을 [사]{려고} 했어요. 같이 가요!', 'Ben de kıyafet almayı düşünüyordum. Birlikte gidelim!', 'jeodo oseul [sa]{ryeogo} haesseoyo. gachi gayo!'],
          ['Jisu', '좋아요. 그리고 점심도 [먹]{으러} 가요.', 'Olur. Sonra öğle yemeği yemeye de gidelim.', 'joayo. geurigo jeomsimdo [meog]{eureo} gayo'],
          ['Minsu', '네, 맛있는 식당을 [찾]{으려고} 지금 검색하고 있어요.', 'Tamam, lezzetli bir restoran bulmak için şu an internette arıyorum.', 'ne, masinneun sikdangeul [chaj]{euryeogo} jigeum geomsaekago isseoyo']
        ] },
        { t: 'ornek', l: [
          ['도서관에 책을 [빌리]{러} 가요.', 'Kütüphaneye kitap [ödünç al]{maya} gidiyorum.', 'doseogwane chaegeul [billi]{reo} gayo'],
          ['한국어를 [배우]{러} 한국에 왔어요.', 'Korece [öğren]{meye} Kore\'ye geldim.', 'hangugeoreul [baeu]{reo} hanguge wasseoyo'],
          ['우리 집에 [놀]{러} 오세요.', 'Bize vakit [geçir]{meye} gelin.', 'uri jibe [nol]{leo} oseyo'],
          ['살을 [빼]{려고} 매일 운동해요.', 'Kilo [ver]{mek için} her gün spor yapıyorum.', 'sareul [ppae]{ryeogo} maeil undonghaeyo'],
          ['비행기 표를 [사]{려고} 돈을 모아요.', 'Uçak bileti [al]{mak için} para biriktiriyorum.', 'bihaenggi pyoreul [sa]{ryeogo} doneul moayo'],
          ['내년에 [이사하]{려고 해요}.', 'Gelecek yıl [taşın]{mayı düşünüyorum}.', 'naenyeone [isaha]{ryeogo haeyo}'],
          ['방금 [전화하]{려고 했어요}.', 'Tam şimdi [ara]{yacaktım}.', 'banggeum [jeonhwaha]{ryeogo haesseoyo}'],
          ['커피 [마시]{러} 갈까요?', 'Kahve [iç]{meye} gidelim mi?', 'keopi [masi]{reo} galkkayo?']
        ] },
        { t: 'ozet', l: [
          '<b>-(으)러 가다 / 오다</b>: …-meye gitmek / gelmek (yalnızca hareket fiilleriyle).',
          '<b>-(으)려고</b>: …-mek için (her fiille; emir ve teklifle kullanılmaz).',
          '<b>-(으)려고 해요</b>: …-meyi düşünüyorum, …-mek niyetindeyim.',
          'Ünlü / ㄹ gövde: -러, -려고; ünsüz gövde: -으러, -으려고.'
        ] }
      ],
      test: [
        { s: '먹다 + -(으)러', o: ['먹러', '먹으러', '먹어러'], d: 1, a: 'Ünsüz gövde: 으러.' },
        { s: '"Film izlemeye gidiyorum."', o: ['영화 보러 가요.', '영화 봐서 가요.', '영화 보고 싶어 가요.'], d: 0, a: '-(으)러 가다: …-meye gitmek.' },
        { s: '"Korece öğrenmek için kitap aldım."', o: ['한국어를 배우러 책을 샀어요.', '한국어를 배우려고 책을 샀어요.'], d: 1, a: '사다 hareket fiili değil: -(으)려고.' },
        { s: '놀다 + -(으)러', o: ['놀으러', '놀러', '노러'], d: 1, a: 'ㄹ gövde: yalnızca 러 gelir.' },
        { s: '"Gelecek yıl taşınmayı düşünüyorum."', o: ['내년에 이사하려고 해요.', '내년에 이사하러 해요.', '내년에 이사해야 해요.'], d: 0, a: 'Niyet: -(으)려고 해요.' },
        { s: '"Yemek yemeye gidelim mi?"', o: ['밥 먹으러 갈까요?', '밥 먹으려고 갈까요?'], d: 0, a: '-(으)려고 teklifle kullanılmaz; -(으)러 olur.' },
        { s: '"전화하려고 했어요" ne demek?', o: ['Arayacaktım.', 'Aradım.', 'Aramalıyım.'], d: 0, a: '-(으)려고 했어요: …-ecektim.' },
        { s: '-(으)러\'dan sonra hangisi gelebilir?', o: ['가요', '먹어요', '샀어요'], d: 0, a: 'Yalnızca hareket fiilleri: 가다, 오다…' }
      ]
    },
    {
      id: 'ko-t2-10', seviye: 'TOPIK 2', sure: 10,
      baslik: 'Zaman sırası: -기 전에, -(으)ㄴ 후에, -(으)면서, -(으)ㄹ 때',
      kisa: '자기 전에 · 먹은 후에 · 들으면서 · 갈 때',
      bolumler: [
        { t: 'metin', m: 'İki olayın zaman ilişkisini anlatan dört kalıp: <b>-기 전에</b> (…-meden önce), <b>-(으)ㄴ 후에</b> (…-dikten sonra), <b>-(으)면서</b> (…-erken, bir yandan) ve <b>-(으)ㄹ 때</b> (…-dığında, …-ince).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede de bu anlamlar fiile gelen eklerle verilir ve yan cümle önce gelir. İki dil burada çok benzer çalışır.', l: [
          ['[ye]{meden önce}', '[먹]{기 전에}', '[meok]{gi jeone}'],
          ['[ye]{dikten sonra}', '[먹]{은 후에}', '[meog]{eun hue}'],
          ['[ye]{rken}', '[먹]{으면서}', '[meog]{eumyeonseo}'],
          ['[ye]{diğimde}', '[먹]{을 때}', '[meog]{eul ttae}']
        ] },
        { t: 'tablo', h: 'Dört kalıp', bas: ['Kalıp', 'Anlamı', '가다', '먹다'], s: [
          ['-기 전에', '…-meden önce', '[가]{기 전에}|[ga]{gi jeone}', '[먹]{기 전에}|[meok]{gi jeone}'],
          ['-(으)ㄴ 후에', '…-dikten sonra', '{간 후에}|[ga]{n hue}', '[먹]{은 후에}|[meog]{eun hue}'],
          ['-(으)면서', '…-erken', '[가]{면서}|[ga]{myeonseo}', '[먹]{으면서}|[meog]{eumyeonseo}'],
          ['-(으)ㄹ 때', '…-dığında', '{갈 때}|[ga]{l ttae}', '[먹]{을 때}|[meog]{eul ttae}']
        ] },
        { t: 'metin', h: 'İsimle: 전에, 후에, 때', m: 'Bu kelimeler isimden sonra da gelir: <i>식사 전에</i> (yemekten önce), <i>수업 후에</i> (dersten sonra), <i>방학 때</i> (tatilde). Süreyle: <i>한 시간 전에</i> (bir saat önce), <i>삼 일 후에</i> (üç gün sonra).' },
        { t: 'ipucu', h: '-(으)ㄴ 후에 = -(으)ㄴ 다음에', m: '<b>-(으)ㄴ 다음에</b> ve <b>-(으)ㄴ 뒤에</b> aynı anlama gelir; konuşmada çok duyulur: <i>숙제를 한 다음에 놀아요</i> (Ödevimi yaptıktan sonra oynarım).' },
        { t: 'ipucu', h: '-(으)면서: aynı kişi, aynı anda', m: '<b>-(으)면서</b> aynı kişinin iki işi <b>aynı anda</b> yaptığını anlatır: <i>음악을 들으면서 공부해요</i> (Müzik dinlerken ders çalışırım). İki farklı kişi için <b>-는 동안</b> kullanılır: <i>아기가 자는 동안 청소했어요</i> (Bebek uyurken temizlik yaptım).' },
        { t: 'ipucu', h: 'Geçmişte: -았/었을 때', m: 'Geçmişte bitmiş bir durumdan söz ederken <b>-았/었을 때</b> da kullanılır: <i>한국에 갔을 때</i> (Kore\'ye gittiğimde), <i>어렸을 때</i> (= <i>어릴 때</i>, küçükken). İsimle: <i>학생 때</i> (öğrenciyken).' },
        { t: 'diyalog', h: 'Günlük düzen', l: [
          ['Jisu', '보통 아침을 [먹]{기 전에} 뭐 해요?', 'Genellikle kahvaltıdan önce ne yaparsın?', 'botong achimeul [meok]{gi jeone} mwo haeyo?'],
          ['Minsu', '운동을 해요. 그리고 {샤워한 후에} 아침을 먹어요.', 'Spor yapıyorum. Duş aldıktan sonra da kahvaltı ediyorum.', 'undongeul haeyo. geurigo [syawoha]{n hue} achimeul meogeoyo'],
          ['Jisu', '저는 뉴스를 [보]{면서} 아침을 먹어요.', 'Ben haberleri izlerken kahvaltı ederim.', 'jeoneun nyuseureul [bo]{myeonseo} achimeul meogeoyo'],
          ['Minsu', '회사에 {갈 때} 뭐 타요?', 'İşe giderken ne binersin?', 'hoesae [ga]{l ttae} mwo tayo?'],
          ['Jisu', '지하철을 타요. 지하철에서 음악을 [들]{으면서} 가요.', 'Metroya biniyorum. Metroda müzik dinleyerek gidiyorum.', 'jihacheoreul tayo. jihacheoreseo eumageul [deur]{eumyeonseo} gayo']
        ] },
        { t: 'ornek', l: [
          ['[자]{기 전에} 이를 닦아요.', '[Yat]{madan önce} dişlerimi fırçalarım.', '[ja]{gi jeone} ireul dakkayo'],
          ['수업이 {끝난 후에} 만나요.', 'Ders [bit]{tikten sonra} buluşalım.', 'sueobi [kkeunna]{n hue} mannayo'],
          ['밥을 [먹]{은 다음에} 커피를 마셔요.', 'Yemek [ye]{dikten sonra} kahve içerim.', 'babeul [meog]{eun daeume} keopireul masyeoyo'],
          ['[운전하]{면서} 전화하면 안 돼요.', 'Araba [kullan]{ırken} telefonla konuşmamalısın.', '[unjeonha]{myeonseo} jeonhwahamyeon an dwaeyo'],
          ['한국에 {갔을 때} 김치를 처음 먹었어요.', 'Kore\'ye [git]{tiğimde} kimchiyi ilk kez yedim.', 'hanguge [gass]{eul ttae} gimchireul cheoeum meogeosseoyo'],
          ['{어렸을 때} 시골에 살았어요.', '[Küçük]{ken} köyde yaşardım.', '[eoryeoss]{eul ttae} sigore sarasseoyo'],
          ['시간이 {있을 때} 전화하세요.', 'Vaktin [ol]{duğunda} arayın.', 'sigani [iss]{eul ttae} jeonhwahaseyo'],
          ['아기가 {자는 동안} 책을 읽었어요.', 'Bebek [uyu]{rken} kitap okudum.', 'agiga [ja]{neun dongan} chaegeul ilgeosseoyo']
        ] },
        { t: 'ozet', l: [
          '<b>-기 전에</b>: …-meden önce (gövdeye doğrudan).',
          '<b>-(으)ㄴ 후에 / 다음에</b>: …-dikten sonra.',
          '<b>-(으)면서</b>: …-erken (aynı kişi); farklı kişi için <b>-는 동안</b>.',
          '<b>-(으)ㄹ 때</b>: …-dığında; geçmişte <b>-았/었을 때</b>.',
          'İsimle: 식사 전에, 수업 후에, 방학 때.'
        ] }
      ],
      test: [
        { s: '"Yatmadan önce"', o: ['자기 전에', '잔 전에', '자면서'], d: 0, a: 'Gövde + -기 전에.' },
        { s: '먹다 + -(으)ㄴ 후에', o: ['먹은 후에', '먹ㄴ 후에', '먹는 후에'], d: 0, a: 'Ünsüz gövde: 은 후에.' },
        { s: '"Müzik dinlerken ders çalışırım."', o: ['음악을 들으면서 공부해요.', '음악을 듣기 전에 공부해요.', '음악을 들은 후에 공부해요.'], d: 0, a: 'Aynı anda: -(으)면서; 듣다 → 들으면서.' },
        { s: '가다 + -(으)ㄹ 때', o: ['가을 때', '갈 때', '간 때'], d: 1, a: 'Ünlü gövde: alta ㄹ: 갈 때.' },
        { s: '"Bebek uyurken temizlik yaptım." (iki farklı kişi)', o: ['아기가 자면서 청소했어요.', '아기가 자는 동안 청소했어요.'], d: 1, a: 'Farklı kişiler: -는 동안.' },
        { s: '"Dersten sonra" (isimle)', o: ['수업 후에', '수업기 후에', '수업은 후에'], d: 0, a: 'İsimden sonra doğrudan 후에.' },
        { s: '"Kore\'ye gittiğimde" (geçmiş)', o: ['한국에 갔을 때', '한국에 가을 때', '한국에 간 때'], d: 0, a: 'Geçmiş: -았/었을 때.' },
        { s: '-(으)면서 ne anlatır?', o: ['Aynı kişinin aynı anda yaptığı iki iş', 'Biri bittikten sonra öteki', 'İki farklı kişinin işi'], d: 0, a: '-(으)면서 = …-erken, aynı kişi.' }
      ]
    },
    {
      id: 'ko-t2-11', seviye: 'TOPIK 2', sure: 10,
      baslik: 'İsmi niteleme 1: 예쁜 꽃, 먹는 사람',
      kisa: '큰, 작은, 맛있는, 가는',
      bolumler: [
        { t: 'metin', m: 'Korecede isimden önce gelen niteleyici, fiilin ya da sıfatın özel bir biçimidir. Türkçedeki gibi niteleyen kısım <b>isimden önce</b> gelir: <i>예쁜 꽃</i> (güzel çiçek), <i>먹는 사람</i> (yiyen kişi). Bu derste şimdiki zaman için iki eki öğreniyorsun: sıfatlarda <b>-(으)ㄴ</b>, fiillerde <b>-는</b>.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçedeki <b>-en / -an</b> ve <b>-dığı</b> ortaçları aynı işi görür. Sıra da aynı: önce niteleyen, sonra isim.', l: [
          ['[oku]{yan} öğrenci', '[읽]{는} 학생', '[ing]{neun} haksaeng'],
          ['[sev]{diğim} yemek', '[좋아하]{는} 음식', '[joaha]{neun} eumsik'],
          ['güzel çiçek', '[예쁘]{ㄴ} 꽃 → 예쁜 꽃', '[yeppeu]{n} kkot'],
          ['küçük ev', '[작]{은} 집', '[jag]{eun} jip']
        ] },
        { t: 'tablo', h: 'Sıfatlar: -(으)ㄴ', bas: ['Sıfat', 'Kural', 'Niteleme', 'Örnek'], s: [
          ['크다|keuda', 'ünlü → ㄴ', '{큰}|[keu]{n}', '큰 가방 (büyük çanta)'],
          ['예쁘다|yeppeuda', 'ünlü → ㄴ', '{예쁜}|[yeppeu]{n}', '예쁜 꽃 (güzel çiçek)'],
          ['작다|jakda', 'ünsüz → 은', '[작]{은}|[jag]{eun}', '작은 집 (küçük ev)'],
          ['좋다|jota', 'ünsüz → 은', '[좋]{은}|[jo]{eun}', '좋은 사람 (iyi insan)'],
          ['길다|gilda', 'ㄹ düşer → ㄴ', '{긴}|[gi]{n}', '긴 머리 (uzun saç)'],
          ['춥다|chupda', 'ㅂ → 운', '[추]{운}|[chu]{un}', '추운 날 (soğuk gün)']
        ] },
        { t: 'tablo', h: 'Fiiller (şimdiki): -는', bas: ['Fiil', 'Niteleme', 'Örnek', 'Türkçe'], s: [
          ['가다|gada', '[가]{는}|[ga]{neun}', '학교에 가는 학생', 'okula giden öğrenci'],
          ['먹다|meokda', '[먹]{는}|[meong]{neun}', '밥을 먹는 사람', 'yemek yiyen kişi'],
          ['좋아하다|joahada', '[좋아하]{는}|[joaha]{neun}', '좋아하는 노래', 'sevdiğim şarkı'],
          ['살다|salda', '{사는}|[sa]{neun}', '서울에 사는 친구', 'Seul\'de yaşayan arkadaş'],
          ['만들다|mandeulda', '{만드는}|[mandeu]{neun}', '빵을 만드는 곳', 'ekmek yapılan yer']
        ] },
        { t: 'ipucu', h: '있다 / 없다 → -는', m: '<b>있다, 없다</b> ve bunlarla biten sıfatlar (<i>맛있다, 재미있다, 멋있다</i>) sıfat olsalar da <b>-는</b> alır: <i>맛있는 음식</i> (lezzetli yemek), <i>재미있는 영화</i> (eğlenceli film), <i>돈이 없는 사람</i> (parası olmayan kişi).' },
        { t: 'ipucu', h: 'ㄹ düşer', m: 'Gövde ㄹ ile bitiyorsa <b>ㄴ</b> ve <b>-는</b>\'den önce ㄹ düşer: <i>살다 → 사는, 만들다 → 만드는, 길다 → 긴, 멀다 → 먼, 알다 → 아는</i>.' },
        { t: 'metin', h: 'Uzun nitelemeler', m: 'Niteleyen kısım bütün bir cümle olabilir; yine isimden önce gelir: <i><b>매일 아침 커피를 마시는</b> 사람</i> (her sabah kahve içen kişi). Türkçeyle kelime kelime aynı sırada: "her sabah kahve içen kişi".' },
        { t: 'tablo', h: 'Sık kullanılan kalıplar', bas: ['Korece', 'Türkçe'], s: [
          ['{맛있는} 음식|masinneun eumsik', 'lezzetli yemek'],
          ['{재미있는} 영화|jaemiinneun yeonghwa', 'eğlenceli film'],
          ['{좋아하는} 가수|joahaneun gasu', 'sevdiğim şarkıcı'],
          ['{아는} 사람|aneun saram', 'tanıdık (bildiğim kişi)'],
          ['{모르는} 단어|moreuneun daneo', 'bilmediğim kelime'],
          ['{따뜻한} 물|ttatteutan mul', 'ılık su']
        ] },
        { t: 'diyalog', h: 'Arkadaşını anlatıyor', l: [
          ['Jisu', '저기 키가 {큰} 사람이 누구예요?', 'Oradaki uzun boylu kişi kim?', 'jeogi kiga [keu]{n} sarami nuguyeyo?'],
          ['Minsu', '제 친구예요. 같은 회사에서 [일하]{는} 친구예요.', 'Arkadaşım. Aynı şirkette çalışan bir arkadaş.', 'je chinguyeyo. gateun hoesaeseo [ilha]{neun} chinguyeyo'],
          ['Jisu', '어떤 사람이에요?', 'Nasıl biri?', 'eotteon saramieyo?'],
          ['Minsu', '{재미있는} 사람이에요. {맛있는} 음식도 잘 만들어요.', 'Eğlenceli biri. Lezzetli yemekler de yapar.', '[jaemii]{nneun} saramieyo. [masi]{nneun} eumsikdo jal mandeureoyo'],
          ['Jisu', '와, 저도 요리를 [잘하]{는} 사람을 좋아해요!', 'Vay, ben de yemeği iyi yapan insanları severim!', 'wa, jeodo yorireul [jalha]{neun} sarameul joahaeyo!']
        ] },
        { t: 'ornek', l: [
          ['{큰} 가방을 샀어요.', '{Büyük} bir çanta aldım.', '[keu]{n} gabangeul sasseoyo'],
          ['[작]{은} 방이 좋아요.', '{Küçük} odayı seviyorum.', '[jag]{eun} bangi joayo'],
          ['{맛있는} 식당을 알아요?', '{Lezzetli} bir restoran biliyor musun?', '[masi]{nneun} sikdangeul arayo?'],
          ['저기 [웃]{는} 사람이 누구예요?', 'Orada [gül]{en} kişi kim?', 'jeogi [un]{neun} sarami nuguyeyo?'],
          ['제가 [좋아하]{는} 음식은 비빔밥이에요.', '[Sev]{diğim} yemek bibimbap.', 'jega [joaha]{neun} eumsigeun bibimbabieyo'],
          ['서울에 {사는} 친구가 있어요.', 'Seul\'de [yaşa]{yan} bir arkadaşım var.', 'seoure [sa]{neun} chinguga isseoyo'],
          ['[모르]{는} 단어가 많아요.', '[Bil]{mediğim} çok kelime var.', '[moreu]{neun} daneoga manayo'],
          ['{추운} 날에는 집에 있어요.', '{Soğuk} günlerde evde kalırım.', '[chu]{un} nareneun jibe isseoyo']
        ] },
        { t: 'ozet', l: [
          'Niteleyici isimden önce gelir (Türkçedeki gibi).',
          'Sıfat: ünlü → <b>-ㄴ</b> (큰, 예쁜), ünsüz → <b>-은</b> (작은, 좋은).',
          'Fiil (şimdiki): <b>-는</b> (가는, 먹는, 좋아하는).',
          '있다 / 없다 ile bitenler: <b>-는</b> (맛있는, 재미있는).',
          'ㄹ düşer: 사는, 만드는, 긴; ㅂ → 운: 추운, 더운.'
        ] }
      ],
      test: [
        { s: '"Güzel çiçek"', o: ['예쁘는 꽃', '예쁜 꽃', '예쁘은 꽃'], d: 1, a: 'Sıfat, ünlü gövde: 예쁜.' },
        { s: '"Küçük ev"', o: ['작은 집', '작는 집', '작ㄴ 집'], d: 0, a: 'Sıfat, ünsüz gövde: 작은.' },
        { s: '"Lezzetli yemek"', o: ['맛있은 음식', '맛있는 음식', '맛있ㄴ 음식'], d: 1, a: '있다 ile biten sıfatlar -는 alır.' },
        { s: '"Okula giden öğrenci"', o: ['학교에 가는 학생', '학교에 간 학생', '학생 학교에 가는'], d: 0, a: 'Fiil, şimdiki: -는. (간 학생 = okula gitmiş öğrenci.)' },
        { s: '살다 → niteleme (şimdiki)', o: ['살는', '사는', '산'], d: 1, a: 'ㄹ düşer: 사는.' },
        { s: '"Sevdiğim şarkıcı" (şu an)', o: ['좋아하는 가수', '좋아한 가수', '좋은 가수'], d: 0, a: 'Şimdiki zaman: 좋아하는.' },
        { s: '춥다 → niteleme', o: ['춥은', '추운', '춥는'], d: 1, a: 'ㅂ düzensiz sıfat: 추운.' },
        { s: '"Bilmediğim kelime"', o: ['모르는 단어', '모른 단어', '몰라 단어'], d: 0, a: '모르다 + -는: 모르는.' }
      ]
    },
    {
      id: 'ko-t2-12', seviye: 'TOPIK 2', sure: 9,
      baslik: 'İsmi niteleme 2: 본 영화, 할 일',
      kisa: '본 · 보는 · 볼',
      bolumler: [
        { t: 'metin', m: 'Fiillerle ismi nitelerken zaman da gösterilir: <b>-(으)ㄴ</b> geçmiş (izlediğim, izlemiş olan), <b>-는</b> şimdiki (izlediğim, izleyen), <b>-(으)ㄹ</b> gelecek (izleyeceğim). Türkçedeki <b>-dığı</b> ve <b>-eceği</b> ortaçlarına karşılık gelir.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'İki dilde de niteleyen kısım isimden önce gelir ve zamanı ek gösterir.', l: [
          ['dün [izle]{diğim} film', '어제 {본} 영화', 'eoje [bo]{n} yeonghwa'],
          ['şu an [oku]{duğum} kitap', '지금 [읽]{는} 책', 'jigeum [ing]{neun} chaek'],
          ['yarın [yap]{acağım} iş', '내일 {할} 일', 'naeil [ha]{l} il']
        ] },
        { t: 'tablo', h: 'Fiillerde üç zaman', bas: ['Fiil', 'Geçmiş -(으)ㄴ', 'Şimdiki -는', 'Gelecek -(으)ㄹ'], s: [
          ['가다|gada', '{간}|[ga]{n}', '[가]{는}|[ga]{neun}', '{갈}|[ga]{l}'],
          ['보다|boda', '{본}|[bo]{n}', '[보]{는}|[bo]{neun}', '{볼}|[bo]{l}'],
          ['먹다|meokda', '[먹]{은}|[meog]{eun}', '[먹]{는}|[meong]{neun}', '[먹]{을}|[meog]{eul}'],
          ['읽다|ikda', '[읽]{은}|[ilg]{eun}', '[읽]{는}|[ing]{neun}', '[읽]{을}|[ilg]{eul}'],
          ['만들다|mandeulda', '{만든}|[mandeu]{n}', '{만드는}|[mandeu]{neun}', '{만들}|{mandeul}'],
          ['듣다|deutda', '[들]{은}|[deur]{eun}', '[듣]{는}|[deun]{neun}', '[들]{을}|[deur]{eul}']
        ] },
        { t: 'ipucu', h: 'Sıfatlarda geçmiş yok', m: 'Bu tablo <b>fiiller</b> içindir. Sıfatlar şimdiki zamanda -(으)ㄴ alır (<i>예쁜, 작은</i>, önceki ders). <i>먹은</i> (yediğim, geçmiş) ile <i>작은</i> (küçük, şimdiki) aynı ekle biter ama biri fiil, biri sıfattır.' },
        { t: 'metin', h: 'Gelecek -(으)ㄹ: plan ve amaç', m: '<b>-(으)ㄹ</b> henüz olmamış şeyler için: <i>내일 할 일</i> (yarın yapacağım iş), <i>먹을 것</i> (yiyecek bir şey), <i>살 집</i> (oturacağım ev). Önceki derslerdeki <i>-(으)ㄹ 때, -(으)ㄹ 수 있다, -(으)ㄹ 거예요</i> kalıplarında da bu ek vardır.' },
        { t: 'metin', h: '것: "şey"', m: 'Nitelenen isim belli değilse <b>것</b> (konuşmada <b>거</b>) kullanılır: <i>제가 산 것</i> (aldığım şey), <i>먹을 거 있어요?</i> (Yiyecek bir şey var mı?), <i>좋아하는 것</i> (sevdiğim şey).' },
        { t: 'tablo', h: 'Aynı fiil, üç zaman', bas: ['Korece', 'Türkçe'], s: [
          ['어제 {만난} 사람|eoje mannan saram', 'dün buluştuğum kişi'],
          ['지금 {만나는} 사람|jigeum mannaneun saram', 'şu an görüştüğüm kişi'],
          ['내일 {만날} 사람|naeil mannal saram', 'yarın buluşacağım kişi'],
          ['제가 {산} 것|jega san geot', 'aldığım şey'],
          ['{먹을} 거|meogeul geo', 'yiyecek bir şey']
        ] },
        { t: 'ipucu', h: 'Türkçeden fark', m: 'Türkçede "okuduğum kitap" hem şimdiki hem geçmiş olabilir. Korecede seçim yapmak gerekir: <i>읽는 책</i> (şu an / genelde okuduğum), <i>읽은 책</i> (okuyup bitirdiğim), <i>읽을 책</i> (okuyacağım).' },
        { t: 'diyalog', h: 'Kitapçıda', l: [
          ['Jisu', '이건 제가 지난주에 [읽]{은} 책이에요. 정말 재미있어요.', 'Bu, geçen hafta okuduğum kitap. Gerçekten çok eğlenceli.', 'igeon jega jinanjue [ilg]{eun} chaegieyo. jeongmal jaemiisseoyo'],
          ['Minsu', '그래요? 저는 기차에서 [읽]{을} 책을 찾고 있어요.', 'Öyle mi? Ben trende okuyacağım bir kitap arıyorum.', 'geuraeyo? jeoneun gichaeseo [ilg]{eul} chaegeul chatgo isseoyo'],
          ['Jisu', '그럼 이 책을 사세요. 요즘 사람들이 많이 [읽]{는} 책이에요.', 'O zaman bu kitabı alın. Bu aralar insanların çok okuduğu bir kitap.', 'geureom i chaegeul saseyo. yojeum saramdeuri mani [ing]{neun} chaegieyo'],
          ['Minsu', '좋아요. 그리고 기차에서 [먹]{을} 것도 사야 해요.', 'Tamam. Bir de trende yiyecek bir şey almam lazım.', 'joayo. geurigo gichaeseo [meog]{eul} geotdo saya haeyo']
        ] },
        { t: 'ornek', l: [
          ['어제 {본} 영화가 재미있었어요.', 'Dün [izle]{diğim} film eğlenceliydi.', 'eoje [bo]{n} yeonghwaga jaemiisseosseoyo'],
          ['내일 {할} 일이 많아요.', 'Yarın [yap]{acağım} çok iş var.', 'naeil [ha]{l} iri manayo'],
          ['이건 엄마가 {만든} 김치예요.', 'Bu, annemin [yap]{tığı} kimchi.', 'igeon eommaga [mandeu]{n} gimchiyeyo'],
          ['주말에 {만날} 친구가 있어요.', 'Hafta sonu [buluş]{acağım} bir arkadaşım var.', 'jumare [manna]{l} chinguga isseoyo'],
          ['제가 [찍]{은} 사진이에요.', 'Benim [çek]{tiğim} fotoğraf.', 'jega [jjig]{eun} sajinieyo'],
          ['{마실} 거 있어요?', '[İç]{ecek} bir şey var mı?', '[masi]{l} geo isseoyo?'],
          ['작년에 {산} 옷이에요.', 'Geçen yıl [al]{dığım} giysi.', 'jangnyeone [sa]{n} osieyo'],
          ['{살} 집을 찾고 있어요.', '[Otur]{acağım} bir ev arıyorum.', '{sal} jibeul chatgo isseoyo']
        ] },
        { t: 'ozet', l: [
          'Fiil + <b>-(으)ㄴ</b>: geçmiş (본, 먹은) = …-dığı (geçmişte).',
          'Fiil + <b>-는</b>: şimdiki (보는, 먹는).',
          'Fiil + <b>-(으)ㄹ</b>: gelecek (볼, 먹을) = …-eceği.',
          '<b>것 / 거</b> = "şey": 산 것, 먹을 거.',
          'ㄹ gövde: 만든, 만드는, 만들.'
        ] }
      ],
      test: [
        { s: '"Dün izlediğim film"', o: ['어제 보는 영화', '어제 본 영화', '어제 볼 영화'], d: 1, a: 'Geçmiş: 본.' },
        { s: '"Yarın yapacağım iş"', o: ['내일 할 일', '내일 한 일', '내일 하는 일'], d: 0, a: 'Gelecek: 할.' },
        { s: '먹다 → gelecek niteleme', o: ['먹을', '먹는', '먹은'], d: 0, a: 'Ünsüz gövde + 을: 먹을.' },
        { s: '"Annemin yaptığı kimchi"', o: ['엄마가 만든 김치', '엄마가 만들은 김치', '엄마가 만드른 김치'], d: 0, a: 'ㄹ düşer: 만든.' },
        { s: '"Yiyecek bir şey var mı?"', o: ['먹은 거 있어요?', '먹을 거 있어요?', '먹는 거 있어요?'], d: 1, a: 'Henüz olmamış şey: 먹을 거.' },
        { s: '읽다 → geçmiş niteleme', o: ['읽는', '읽은', '읽을'], d: 1, a: 'Geçmiş: 읽은.' },
        { s: '"Şu an okuduğum kitap"', o: ['지금 읽는 책', '지금 읽은 책', '지금 읽을 책'], d: 0, a: 'Şimdiki: 읽는.' },
        { s: '"작은" hangisidir?', o: ['Geçmiş zamanlı fiil', 'Şimdiki zamanlı sıfat', 'Gelecek zamanlı fiil'], d: 1, a: '작다 bir sıfattır; sıfatlar şimdiki zamanda -(으)ㄴ alır.' }
      ]
    },
    {
      id: 'ko-t2-13', seviye: 'TOPIK 2', sure: 12,
      baslik: 'Düzensiz fiiller: ㅂ, ㄷ, ㅡ, 르, ㄹ, ㅅ, ㅎ',
      kisa: '추워요, 들어요, 바빠요, 몰라요',
      bolumler: [
        { t: 'metin', m: 'Bazı fiil ve sıfatların gövdesi, arkasından <b>ünlüyle başlayan</b> bir ek gelince değişir (-아요 / -어요, -았어요, -(으)면, -(으)ㄴ…). Ünsüzle başlayan eklerde (-고, -지만, -기 전에) gövde hiç değişmez. Kart notlarında gördüğün "ㅂ düzensiz", "르 düzensiz" ifadelerinin hepsi bu dersin konusu.' },
        { t: 'kiyas', h: 'Türkçede de var', m: 'Türkçede de bazı kökler ünlüyle başlayan ek gelince değişir: kita<b>p</b> → kita<b>b</b>ı, gi<b>t</b> → gi<b>d</b>iyor. Korecede bu değişimler yedi düzenli grupta toplanır.', l: [
          ['[git] → [gid]{iyor}', '[듣]다 → [들]{어요}', '[deut]da → [deur]{eoyo}'],
          ['[kitap] → [kitab]{ı}', '[돕]다 → [도와]{요}', '[dop]da → [dowa]{yo}'],
          ['[ağaç] → [ağac]{ı}', '[모르]다 → [몰라]{요}', '[moreu]da → [molla]{yo}']
        ] },
        { t: 'tablo', h: '1) ㅂ düzensiz: ㅂ → 우 / 워', bas: ['Sözlük hali', '-아/어요', '-(으)면', '-(으)ㄴ'], s: [
          ['춥다 (soğuk)|chupda', '{추워요}|chuwoyo', '{추우면}|chuumyeon', '{추운}|chuun'],
          ['덥다 (sıcak)|deopda', '{더워요}|deowoyo', '{더우면}|deoumyeon', '{더운}|deoun'],
          ['어렵다 (zor)|eoryeopda', '{어려워요}|eoryeowoyo', '{어려우면}|eoryeoumyeon', '{어려운}|eoryeoun'],
          ['맵다 (acı)|maepda', '{매워요}|maewoyo', '{매우면}|maeumyeon', '{매운}|maeun'],
          ['돕다 (yardım etmek)|dopda', '{도와요}|dowayo', '{도우면}|doumyeon', '{도운}|doun']
        ] },
        { t: 'tablo', h: '2) ㄷ düzensiz: ㄷ → ㄹ', bas: ['Sözlük hali', '-아/어요', '-(으)면', 'Not'], s: [
          ['듣다 (dinlemek)|deutda', '{들어요}|deureoyo', '{들으면}|deureumyeon', 'ㄷ → ㄹ'],
          ['걷다 (yürümek)|geotda', '{걸어요}|georeoyo', '{걸으면}|georeumyeon', 'ㄷ → ㄹ'],
          ['묻다 (sormak)|mutda', '{물어요}|mureoyo', '{물으면}|mureumyeon', 'ㄷ → ㄹ'],
          ['받다 (almak)|batda', '받아요|badayo', '받으면|badeumyeon', 'düzenli!'],
          ['닫다 (kapatmak)|datda', '닫아요|dadayo', '닫으면|dadeumyeon', 'düzenli!']
        ] },
        { t: 'tablo', h: '3) ㅡ düşer', bas: ['Sözlük hali', '-아/어요', '-았/었어요', 'Neden?'], s: [
          ['쓰다 (yazmak)|sseuda', '{써요}|sseoyo', '{썼어요}|sseosseoyo', 'tek heceli → 어'],
          ['크다 (büyük)|keuda', '{커요}|keoyo', '{컸어요}|keosseoyo', 'tek heceli → 어'],
          ['바쁘다 (meşgul)|bappeuda', '{바빠요}|bappayo', '{바빴어요}|bappasseoyo', 'önceki hece ㅏ → 아'],
          ['아프다 (hasta)|apeuda', '{아파요}|apayo', '{아팠어요}|apasseoyo', 'önceki hece ㅏ → 아'],
          ['예쁘다 (güzel)|yeppeuda', '{예뻐요}|yeppeoyo', '{예뻤어요}|yeppeosseoyo', 'önceki hece ㅖ → 어']
        ] },
        { t: 'tablo', h: '4) 르 düzensiz: 르 → ㄹ라 / ㄹ러', bas: ['Sözlük hali', '-아/어요', '-았/었어요', 'Kural'], s: [
          ['모르다 (bilmemek)|moreuda', '{몰라요}|mollayo', '{몰랐어요}|mollasseoyo', 'önceki hece ㅗ → ㄹ라'],
          ['빠르다 (hızlı)|ppareuda', '{빨라요}|ppallayo', '{빨랐어요}|ppallasseoyo', 'önceki hece ㅏ → ㄹ라'],
          ['다르다 (farklı)|dareuda', '{달라요}|dallayo', '{달랐어요}|dallasseoyo', 'önceki hece ㅏ → ㄹ라'],
          ['부르다 (çağırmak)|bureuda', '{불러요}|bulleoyo', '{불렀어요}|bulleosseoyo', 'diğerleri → ㄹ러'],
          ['기르다 (yetiştirmek)|gireuda', '{길러요}|gilleoyo', '{길렀어요}|gilleosseoyo', 'diğerleri → ㄹ러']
        ] },
        { t: 'tablo', h: '5) ㄹ gövde: ㄴ, ㅂ, ㅅ önünde ㄹ düşer', bas: ['Sözlük hali', '-아/어요', 'Düşen biçimler'], s: [
          ['살다 (yaşamak)|salda', '살아요|sarayo', '{사는} 곳, {사세요}, {삽니다}|saneun got, saseyo, samnida'],
          ['만들다 (yapmak)|mandeulda', '만들어요|mandeureoyo', '{만드는}, {만드세요}, {만듭니다}|mandeuneun, mandeuseyo, mandeumnida'],
          ['알다 (bilmek)|alda', '알아요|arayo', '{아는} 사람, {아세요}?|aneun saram, aseyo?'],
          ['길다 (uzun)|gilda', '길어요|gireoyo', '{긴} 머리|gin meori']
        ] },
        { t: 'tablo', h: '6) ㅅ ve 7) ㅎ düzensiz', bas: ['Sözlük hali', 'Değişim', 'Örnek'], s: [
          ['낫다 (iyileşmek)|natda', 'ㅅ düşer', '{나아요}, {나으면}|naayo, naeumyeon'],
          ['짓다 (inşa etmek)|jitda', 'ㅅ düşer', '{지어요}, {지으면}|jieoyo, jieumyeon'],
          ['웃다 (gülmek)|utda', 'düzenli!', '웃어요|useoyo'],
          ['그렇다 (öyle)|geureota', 'ㅎ düşer, ㅓ → ㅐ', '{그래요}|geuraeyo'],
          ['어떻다 (nasıl)|eotteota', 'ㅎ düşer, ㅓ → ㅐ', '{어때요}?|eottaeyo?'],
          ['빨갛다 (kırmızı)|ppalgata', 'ㅎ düşer', '{빨개요}, {빨간}|ppalgaeyo, ppalgan'],
          ['좋다 (iyi)|jota', 'düzenli!', '좋아요|joayo']
        ] },
        { t: 'ipucu', h: 'Ünsüzle başlayan eklerde değişim yok', m: '<i>-고, -지만, -지 마세요, -기 전에, -네요</i> gibi ünsüzle başlayan eklerde gövde değişmez: <i>춥고, 듣지만, 모르기 전에</i>. Değişim yalnızca ünlüyle başlayan eklerde olur. (Tek istisna ㄹ gövde: ㄴ, ㅂ, ㅅ önünde düşer.)' },
        { t: 'ipucu', h: 'Aynı harf, ama düzenli', m: 'Aynı harfle bittiği hâlde düzenli olanlar var: <i>입다 → 입어요, 좁다 → 좁아요, 받다 → 받아요, 닫다 → 닫아요, 웃다 → 웃어요, 씻다 → 씻어요, 좋다 → 좋아요</i>. Kartlardaki "düzensiz" notları hangisinin değiştiğini gösterir.' },
        { t: 'ipucu', h: 'ㅂ → 와: yalnızca iki fiil', m: 'ㅂ düzensizlerin neredeyse hepsinde 워 olur (<i>추워요, 어려워요</i>). Yalnızca <b>돕다</b> ve <b>곱다</b> 와 alır: <i>도와요, 고와요</i>.' },
        { t: 'diyalog', h: 'Hava ve yemek', l: [
          ['Jisu', '오늘 날씨가 정말 {추워요}.', 'Bugün hava gerçekten çok soğuk.', 'oneul nalssiga jeongmal {chuwoyo}'],
          ['Minsu', '네, 그래서 {뜨거운} 국을 먹고 싶어요.', 'Evet, o yüzden sıcak bir çorba içmek istiyorum.', 'ne, geuraeseo {tteugeoun} gugeul meokgo sipeoyo'],
          ['Jisu', '김치찌개 어때요? 좀 {매워요}.', 'Kimchi çorbası nasıl? Biraz acı.', 'gimchijjigae eottaeyo? jom {maewoyo}'],
          ['Minsu', '괜찮아요. 저는 {매운} 음식을 좋아해요. 그런데 근처 식당을 {몰라요}.', 'Sorun değil. Acı yemekleri severim. Ama yakınlarda restoran bilmiyorum.', 'gwaenchanayo. jeoneun {maeun} eumsigeul joahaeyo. geureonde geuncheo sikdangeul {mollayo}'],
          ['Jisu', '제가 알아요. {가까워요}. 같이 {걸어서} 가요.', 'Ben biliyorum. Yakın. Birlikte yürüyerek gidelim.', 'jega arayo. {gakkawoyo}. gachi {georeoseo} gayo']
        ] },
        { t: 'ornek', l: [
          ['한국어가 {어려워요}?', 'Korece zor mu?', 'hangugeoga {eoryeowoyo}?'],
          ['매일 음악을 {들어요}.', 'Her gün müzik dinlerim.', 'maeil eumageul {deureoyo}'],
          ['친구에게 편지를 {썼어요}.', 'Arkadaşıma mektup yazdım.', 'chinguege pyeonjireul {sseosseoyo}'],
          ['길을 {몰라요}.', 'Yolu bilmiyorum.', 'gireul {mollayo}'],
          ['요즘 너무 {바빠요}.', 'Bu aralar çok meşgulüm.', 'yojeum neomu {bappayo}'],
          ['노래 좀 {불러} 주세요.', 'Bir şarkı söyler misiniz?', 'norae jom {bulleo} juseyo'],
          ['감기가 다 {나았어요}.', 'Soğuk algınlığım tamamen geçti.', 'gamgiga da {naasseoyo}'],
          ['이 옷 {어때요}?', 'Bu giysi nasıl?', 'i ot {eottaeyo}?']
        ] },
        { t: 'ozet', l: [
          'Değişim yalnızca <b>ünlüyle başlayan</b> eklerde olur.',
          '<b>ㅂ</b> → 우 / 워: 추워요, 추운 (돕다 → 도와요).',
          '<b>ㄷ</b> → ㄹ: 들어요, 걸어요 (받다, 닫다 düzenli).',
          '<b>ㅡ</b> düşer: 써요, 바빠요; <b>르</b> → ㄹ라 / ㄹ러: 몰라요, 불러요.',
          '<b>ㄹ</b> ㄴ, ㅂ, ㅅ önünde düşer: 사는, 만듭니다; <b>ㅅ</b> düşer: 나아요; <b>ㅎ</b> düşer: 그래요.'
        ] }
      ],
      test: [
        { s: '춥다 + -아/어요', o: ['춥어요', '추워요', '추와요'], d: 1, a: 'ㅂ düzensiz: ㅂ → 워: 추워요.' },
        { s: '듣다 + -아/어요', o: ['듣어요', '들어요', '들아요'], d: 1, a: 'ㄷ düzensiz: ㄷ → ㄹ: 들어요.' },
        { s: '쓰다 + -았/었어요', o: ['쓰었어요', '썼어요', '써었어요'], d: 1, a: 'ㅡ düşer: 썼어요.' },
        { s: '모르다 + -아/어요', o: ['모라요', '몰라요', '모르어요'], d: 1, a: '르 düzensiz: 몰라요.' },
        { s: '바쁘다 + -아/어요', o: ['바뻐요', '바빠요', '바쁘어요'], d: 1, a: 'ㅡ düşer; önceki hece ㅏ olduğu için -아요: 바빠요.' },
        { s: '살다 + -는 (niteleme)', o: ['살는', '사는', '살은'], d: 1, a: 'ㄹ, ㄴ önünde düşer: 사는.' },
        { s: 'Hangi fiil düzenlidir?', o: ['듣다', '받다', '걷다'], d: 1, a: '받다 → 받아요 (düzenli); 듣다 ve 걷다 ㄷ düzensizdir.' },
        { s: '그렇다 + -아/어요', o: ['그렇어요', '그래요', '그러어요'], d: 1, a: 'ㅎ düzensiz: 그래요.' }
      ]
    },
    {
      id: 'ko-t2-14', seviye: 'TOPIK 2', sure: 11,
      baslik: 'Saygı dili: -(으)시-, 께서, 드시다',
      kisa: '가세요, 주무세요, 계세요, 드렸어요',
      bolumler: [
        { t: 'metin', m: 'Korecede saygı dilbilgisiyle gösterilir. Yaşça ya da konumca büyük biri cümlenin <b>öznesi</b> olduğunda fiile <b>-(으)시-</b> eklenir: <i>선생님이 가<b>세</b>요</i> (Öğretmen gidiyor). Bu ek kendin için asla kullanılmaz.' },
        { t: 'kiyas', h: 'Türkçedeki saygı biçimleri', m: 'Türkçede de saygı için farklı kelime ve biçimler kullanırız: "Buyurun", "istirahat ediyor", "vefat etti". Korecede bu ayrım dilbilgisinin içine yerleşmiştir.', l: [
          ['Öğretmen [gel]{di} (saygıyla)', '선생님께서 [오]{셨어요}', 'seonsaengnimkkeseo [o]{syeosseoyo}'],
          ['Dedem [istirahat ed]{iyor}', '할아버지께서 {주무세요}', 'harabeojikkeseo {jumuseyo}'],
          ['Yemeğinizi [buyur]{un}', '진지 {드세요}', 'jinji {deuseyo}']
        ] },
        { t: 'tablo', h: '-(으)시- ile çekim', bas: ['Sözlük hali', 'Şimdiki', 'Geçmiş', 'Gelecek'], s: [
          ['가다|gada', '[가]{세요}|[ga]{seyo}', '[가]{셨어요}|[ga]{syeosseoyo}', '[가]{실 거예요}|[ga]{sil geoyeyo}'],
          ['읽다|ikda', '[읽]{으세요}|[ilg]{euseyo}', '[읽]{으셨어요}|[ilg]{eusyeosseoyo}', '[읽]{으실 거예요}|[ilg]{eusil geoyeyo}'],
          ['하다|hada', '[하]{세요}|[ha]{seyo}', '[하]{셨어요}|[ha]{syeosseoyo}', '[하]{실 거예요}|[ha]{sil geoyeyo}'],
          ['살다|salda', '{사세요}|{saseyo}', '{사셨어요}|{sasyeosseoyo}', '{사실 거예요}|{sasil geoyeyo}']
        ] },
        { t: 'ipucu', h: '-(으)세요: emir mi, saygı mı?', m: 'A1\'de <i>-(으)세요</i>\'yu kibar emir olarak öğrendin: <i>앉으세요</i> (Oturun). Aynı biçim saygılı şimdiki zamandır: <i>할머니가 앉으세요</i> (Ninem oturuyor). Hangisi olduğu bağlamdan anlaşılır.' },
        { t: 'tablo', h: 'Özel saygı fiilleri', bas: ['Normal', 'Saygılı', 'Anlamı'], s: [
          ['먹다 / 마시다|meokda / masida', '{드시다}|deusida', 'yemek / içmek'],
          ['자다|jada', '{주무시다}|jumusida', 'uyumak'],
          ['있다|itda', '{계시다}|gyesida', '(bir yerde) bulunmak'],
          ['말하다|malhada', '{말씀하시다}|malsseumhasida', 'söylemek'],
          ['아프다|apeuda', '{편찮으시다}|pyeonchaneusida', 'hasta olmak'],
          ['죽다|jukda', '{돌아가시다}|doragasida', 'vefat etmek']
        ] },
        { t: 'tablo', h: 'Saygılı ekler ve isimler', bas: ['Normal', 'Saygılı', 'Anlamı'], s: [
          ['-이 / 가|-i / ga', '{-께서}|-kkeseo', 'özne eki'],
          ['-에게 / 한테|-ege / hante', '{-께}|-kke', '-e (kime)'],
          ['나이|nai', '{연세}|yeonse', 'yaş'],
          ['이름|ireum', '{성함}|seongham', 'ad'],
          ['집|jip', '{댁}|daek', 'ev'],
          ['밥|bap', '{진지}|jinji', 'yemek']
        ] },
        { t: 'metin', h: 'Kendini alçak tutmak: 저, 저희, 드리다', m: 'Saygının öbür yüzü kendini alçak tutmaktır: <b>나</b> yerine <b>저</b> (ben), <b>우리</b> yerine <b>저희</b> (biz), büyüğe bir şey verirken <b>주다</b> yerine <b>드리다</b>: <i>선생님께 선물을 드렸어요</i> (Öğretmene hediye verdim). Büyüğe soru sormak: <b>여쭤보다</b>.' },
        { t: 'ipucu', h: 'Kendin için asla -(으)시-', m: '<i>제가 가세요</i> ✗. Saygı eki yalnızca büyük biri için: <i>어머니께서 가세요</i> ✓, <i>제가 가요</i> ✓. Kendinden küçükler için de kullanılmaz.' },
        { t: 'ipucu', h: '계시다 mı, 있으시다 mı?', m: 'Bir yerde bulunmak için <b>계시다</b>: <i>사장님은 사무실에 계세요</i> (Müdür bey ofiste). Sahip olmak için <b>있으시다</b>: <i>시간 있으세요?</i> (Vaktiniz var mı?)' },
        { t: 'diyalog', h: 'Arkadaşın ailesi', l: [
          ['Jisu', '할머니는 어디에 {사세요}?', 'Büyükannen nerede yaşıyor?', 'halmeonineun eodie {saseyo}?'],
          ['Minsu', '부산에 {사세요}. 올해 {연세}가 여든이세요.', 'Busan\'da yaşıyor. Bu yıl seksen yaşında.', 'busane {saseyo}. olhae {yeonse}ga yeodeuniseyo'],
          ['Jisu', '건강하세요?', 'Sağlığı iyi mi?', 'geonganghaseyo?'],
          ['Minsu', '네, 아직 매일 산책을 [하]{세요}. 지난주에 제가 선물을 {드렸어요}.', 'Evet, hâlâ her gün yürüyüş yapıyor. Geçen hafta ona bir hediye verdim.', 'ne, ajik maeil sanchaegeul [ha]{seyo}. jinanjue jega seonmureul {deuryeosseoyo}'],
          ['Jisu', '할머니{께서} [좋아하]{셨어요}?', 'Büyükannen beğendi mi?', 'halmeoni{kkeseo} [joaha]{syeosseoyo}?']
        ] },
        { t: 'ornek', l: [
          ['선생님{께서} [오]{셨어요}.', 'Öğretmen geldi.', 'seonsaengnim{kkeseo} [o]{syeosseoyo}'],
          ['할아버지{께서} {주무세요}.', 'Dedem uyuyor.', 'harabeoji{kkeseo} {jumuseyo}'],
          ['할아버지, 진지 {드세요}.', 'Dede, yemeğinizi buyurun.', 'harabeoji, jinji {deuseyo}'],
          ['사장님은 지금 사무실에 {계세요}.', 'Müdür bey şu an ofiste.', 'sajangnimeun jigeum samusire {gyeseyo}'],
          ['{성함}이 어떻게 되세요?', 'Adınız nedir? (çok kibar)', '{seongham}i eotteoke doeseyo?'],
          ['부모님{께} 전화를 {드렸어요}.', 'Anne babamı aradım.', 'bumonim{kke} jeonhwareul {deuryeosseoyo}'],
          ['시간 [있]{으세요}?', 'Vaktiniz var mı?', 'sigan [iss]{euseyo}?'],
          ['할머니{께서} {돌아가셨어요}.', 'Büyükannem vefat etti.', 'halmeoni{kkeseo} {doragasyeosseoyo}']
        ] },
        { t: 'ozet', l: [
          'Büyük biri özne olunca fiile <b>-(으)시-</b>: 가세요, 가셨어요, 가실 거예요.',
          'Özne eki <b>께서</b>, "-e" eki <b>께</b>.',
          'Özel fiiller: <b>드시다, 주무시다, 계시다, 말씀하시다, 돌아가시다</b>.',
          'Kendini alçak tutmak: <b>저, 저희, 드리다</b>.',
          'Kendin için asla -(으)시- kullanılmaz.'
        ] }
      ],
      test: [
        { s: '"Öğretmen geldi." (saygılı)', o: ['선생님이 왔어요.', '선생님께서 오셨어요.', '선생님께서 왔으세요.'], d: 1, a: '께서 + -(으)시- + geçmiş: 오셨어요.' },
        { s: '자다 → saygılı', o: ['자세요', '주무세요', '드세요'], d: 1, a: '자다\'nın saygılı biçimi 주무시다: 주무세요.' },
        { s: 'Büyüğe "yemek yiyin" demenin en saygılı yolu', o: ['먹으세요', '드세요', '먹어요'], d: 1, a: '먹다 / 마시다 → 드시다: 드세요.' },
        { s: '"Müdür bey ofiste."', o: ['사장님은 사무실에 있어요.', '사장님은 사무실에 계세요.', '사장님은 사무실에 있으세요.'], d: 1, a: 'Bir yerde bulunmak: 계시다.' },
        { s: '"Öğretmene hediye verdim." (en kibar)', o: ['선생님께 선물을 드렸어요.', '선생님에게 선물을 줬어요.', '선생님께서 선물을 드렸어요.'], d: 0, a: 'Kime: 께; büyüğe vermek: 드리다.' },
        { s: 'Hangisi YANLIŞ?', o: ['제가 가요.', '제가 가세요.', '어머니께서 가세요.'], d: 1, a: 'Kendin için -(으)시- kullanılmaz.' },
        { s: '"Vaktiniz var mı?" (saygılı)', o: ['시간 계세요?', '시간 있으세요?', '시간 있어?'], d: 1, a: 'Sahip olmak: 있으시다 → 있으세요.' },
        { s: '"성함" ne demek?', o: ['ad (saygılı)', 'yaş (saygılı)', 'ev (saygılı)'], d: 0, a: '이름 → 성함; yaş 연세, ev 댁.' }
      ]
    },
    {
      id: 'ko-t2-15', seviye: 'TOPIK 2', sure: 10,
      baslik: 'Arka plan ve "ama": -는데 / -(으)ㄴ데',
      kisa: '비가 오는데 · 비싼데 · 학생인데',
      bolumler: [
        { t: 'metin', m: '<b>-는데 / -(으)ㄴ데</b> Korecenin en çok kullanılan bağlaçlarından biridir. İki ana işi vardır: 1) <b>Arka plan vermek:</b> asıl söyleyeceğinden (soru, rica, öneri) önce durumu anlatır. 2) <b>Zıtlık:</b> "ama" anlamı, -지만\'den daha yumuşak.' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede bu iş çoğunlukla iki cümleyi virgülle yan yana koyarak ya da "… ama …" ile yapılır.', l: [
          ['Yağmur [yağ]{ıyor}, şemsiyen var mı?', '비가 [오]{는데} 우산 있어요?', 'biga [o]{neunde} usan isseoyo?'],
          ['Acıktım, bir şey yiyelim mi?', '{배고픈데} 뭐 먹을까요?', '{baegopeunde} mwo meogeulkkayo?'],
          ['Kardeşim uzun {ama} ben kısayım.', '동생은 키가 {큰데} 저는 작아요.', 'dongsaengeun kiga {keunde} jeoneun jagayo']
        ] },
        { t: 'tablo', h: 'Kurulum', bas: ['Tür', 'Ek', 'Örnek'], s: [
          ['Fiil (şimdiki)', '{-는데}', '[가]{는데}, [먹]{는데}|ganeunde, meongneunde'],
          ['있다 / 없다 ile bitenler', '{-는데}', '[맛있]{는데}, [없]{는데}|masinneunde, eomneunde'],
          ['Sıfat, ünlü', '{-ㄴ데}', '{예쁜데}, {바쁜데}|yeppeunde, bappeunde'],
          ['Sıfat, ünsüz', '{-은데}', '[작]{은데}, [좋]{은데}|jageunde, joeunde'],
          ['İsim + 이다', '{-인데}', '[학생]{인데}, [친구]{인데}|haksaenginde, chinguinde'],
          ['Geçmiş (hepsi)', '{-았/었는데}', '[갔]{는데}, [바빴]{는데}|ganneunde, bappanneunde']
        ] },
        { t: 'metin', h: '1) Arka plan: önce durum, sonra asıl söz', m: 'Korece konuşurken bir istekten ya da sorudan önce durumu açıklamak çok doğaldır: <i>제가 한국어를 배우는데 좀 도와줄 수 있어요?</i> (Korece öğreniyorum, biraz yardım edebilir misin?) <i>내일 시간이 있는데 같이 영화 볼까요?</i> (Yarın vaktim var, birlikte film izleyelim mi?)' },
        { t: 'metin', h: '2) Zıtlık: yumuşak "ama"', m: '<i>이 식당은 비싼데 맛없어요</i> (Bu restoran pahalı ama lezzetsiz). -지만\'e göre daha yumuşak ve konuşmaya daha yakındır.' },
        { t: 'metin', h: '3) Cümle sonunda: -는데요', m: 'Cümle sonuna gelince sözü yumuşatır ve karşıdakinden tepki bekler: <i>지금 회의 중인데요…</i> (Şu an toplantıdayım da…). Telefonda: <i>저는 민수인데요</i> (Ben Minsu, şey…). Kibarca itiraz: <i>이거 제 가방인데요</i> (Bu benim çantam ama…).' },
        { t: 'ipucu', h: 'Emir ve teklifle de olur', m: '-아/어서\'in aksine -는데\'den sonra emir ve teklif gelebilir: <i>추운데 문 좀 닫아 주세요</i> (Hava soğuk, kapıyı kapatır mısınız?).' },
        { t: 'ipucu', h: 'Cümle başında: 그런데', m: 'Aynı ekin cümle başı biçimi <b>그런데</b> (konuşmada <b>근데</b>) "ama, bu arada" demektir: <i>그런데 내일 뭐 해요?</i> (Bu arada yarın ne yapıyorsun?)' },
        { t: 'diyalog', h: 'Restoran tavsiyesi', l: [
          ['Jisu', '오늘 저녁에 친구를 [만나]{는데} 좋은 식당 알아요?', 'Bu akşam bir arkadaşla buluşacağım, iyi bir restoran biliyor musun?', 'oneul jeonyeoge chingureul [manna]{neunde} joeun sikdang arayo?'],
          ['Minsu', '학교 앞에 한식집이 [있]{는데} 정말 맛있어요.', 'Okulun önünde bir Kore lokantası var, gerçekten lezzetli.', 'hakgyo ape hansikjibi [in]{neunde} jeongmal masisseoyo'],
          ['Jisu', '비싸요?', 'Pahalı mı?', 'bissayo?'],
          ['Minsu', '조금 {비싼데} 양이 많아요.', 'Biraz pahalı ama porsiyonlar büyük.', 'jogeum {bissande} yangi manayo'],
          ['Jisu', '좋아요. 그런데 거기 몇 시까지 해요?', 'Güzel. Bu arada orası saat kaça kadar açık?', 'joayo. geureonde geogi myeot sikkaji haeyo?'],
          ['Minsu', '아마 열 시까지 [하]{는데요}… 전화해 보세요.', 'Galiba saat ona kadar açık ama… bir arayın.', 'ama yeol sikkaji [ha]{neundeyo}… jeonhwahae boseyo']
        ] },
        { t: 'ornek', l: [
          ['비가 [오]{는데} 우산 있어요?', 'Yağmur yağıyor, şemsiyen var mı?', 'biga [o]{neunde} usan isseoyo?'],
          ['{배고픈데} 뭐 먹을까요?', 'Acıktım, bir şey yiyelim mi?', '{baegopeunde} mwo meogeulkkayo?'],
          ['이 옷은 {예쁜데} 너무 비싸요.', 'Bu giysi güzel {ama} çok pahalı.', 'i oseun {yeppeunde} neomu bissayo'],
          ['어제 [전화했]{는데} 안 받았어요.', 'Dün aradım {ama} açmadın.', 'eoje [jeonhwahaen]{neunde} an badasseoyo'],
          ['저는 [학생]{인데} 할인돼요?', 'Öğrenciyim, indirim var mı?', 'jeoneun [haksaeng]{inde} harindwaeyo?'],
          ['날씨가 [좋]{은데} 산책할까요?', 'Hava güzel, yürüyüşe çıkalım mı?', 'nalssiga [jo]{eunde} sanchaekalkkayo?'],
          ['{추운데} 문 좀 닫아 주세요.', 'Hava soğuk, kapıyı kapatır mısınız?', '{chuunde} mun jom dada juseyo'],
          ['지금 {바쁜데요}…', 'Şu an meşgulüm de…', 'jigeum {bappeundeyo}…']
        ] },
        { t: 'ozet', l: [
          'Fiil: <b>-는데</b>; sıfat: <b>-(으)ㄴ데</b>; isim: <b>-인데</b>; geçmiş: <b>-았/었는데</b>.',
          '1) Arka plan: önce durum, sonra soru, rica ya da öneri.',
          '2) Zıtlık: yumuşak "ama".',
          '3) Cümle sonunda <b>-는데요</b>: sözü yumuşatır.',
          'Arkasından emir ve teklif gelebilir; cümle başında <b>그런데</b>.'
        ] }
      ],
      test: [
        { s: '가다 (fiil) → arka plan biçimi?', o: ['간데', '가는데', '가은데'], d: 1, a: 'Fiil: -는데 → 가는데.' },
        { s: '작다 (sıfat) → arka plan biçimi?', o: ['작는데', '작인데', '작은데'], d: 2, a: 'Sıfat, ünsüz gövde: -은데 → 작은데.' },
        { s: '학생이다 → arka plan biçimi?', o: ['학생인데', '학생는데', '학생은데'], d: 0, a: 'İsim + 이다: -인데 → 학생인데.' },
        { s: '맛있다 → arka plan biçimi?', o: ['맛있은데', '맛있인데', '맛있는데'], d: 2, a: '있다 / 없다 ile bitenler sıfat olsa da -는데 alır: 맛있는데.' },
        { s: '"Yağmur yağıyor, şemsiyen var mı?"', o: ['비가 오는데 우산 있어요?', '비가 와서 우산 있어요?', '비가 오지만 우산 있어요?'], d: 0, a: 'Arka plan + soru: -는데.' },
        { s: '"Dün aradım ama açmadın."', o: ['어제 전화하면 안 받았어요.', '어제 전화해서 안 받았어요.', '어제 전화했는데 안 받았어요.'], d: 2, a: 'Geçmiş: -았/었는데.' },
        { s: '"그런데" ne demek?', o: ['ama, bu arada', 'çünkü', 'sonra'], d: 0, a: '그런데 (근데) = ama, bu arada.' },
        { s: '"지금 회의 중인데요…" cümlesinin tonu nasıl?', o: ['Yumuşak, karşıdakinden anlayış bekleyen', 'Sert bir emir', 'Bir soru'], d: 0, a: 'Cümle sonundaki -는데요 sözü yumuşatır.' }
      ]
    },
    {
      id: 'ko-t2-16', seviye: 'TOPIK 2', sure: 10,
      baslik: 'Tahmin ve tepki: 것 같아요, -네요, -죠?',
      kisa: '올 것 같아요 · 맛있네요 · 춥죠?',
      bolumler: [
        { t: 'metin', m: 'Konuşmayı doğal yapan üç biçim: <b>-것 같아요</b> (galiba, sanırım), <b>-네요</b> (… -mış!, yeni fark ettiğin bir şeye tepki) ve <b>-지요? / -죠?</b> (…, değil mi?).' },
        { t: 'kiyas', h: 'Türkçeyle yan yana', m: 'Türkçede bu anlamları <b>galiba</b>, <b>-mış</b> ve <b>değil mi?</b> verir.', l: [
          ['Yağmur [yağ]{acak galiba}.', '비가 {올 것 같아요}.', 'biga {ol geot gatayo}'],
          ['Bu yemek çok lezzetli{ymiş}!', '이 음식 정말 [맛있]{네요}!', 'i eumsik jeongmal [masin]{neyo}!'],
          ['Bugün soğuk, {değil mi}?', '오늘 [춥]{죠}?', 'oneul [chup]{jyo}?']
        ] },
        { t: 'tablo', h: '것 같아요: zamana göre', bas: ['Zaman', 'Biçim', 'Örnek', 'Türkçe'], s: [
          ['Geçmiş (fiil)', '-(으)ㄴ 것 같아요', '{간 것 같아요}|gan geot gatayo', 'gitti galiba'],
          ['Şimdiki (fiil)', '-는 것 같아요', '{가는 것 같아요}|ganeun geot gatayo', 'gidiyor galiba'],
          ['Gelecek / tahmin', '-(으)ㄹ 것 같아요', '{갈 것 같아요}|gal geot gatayo', 'gidecek galiba'],
          ['Sıfat (şimdiki)', '-(으)ㄴ 것 같아요', '{바쁜 것 같아요}|bappeun geot gatayo', 'meşgul galiba'],
          ['İsim', '-인 것 같아요', '{학생인 것 같아요}|haksaengin geot gatayo', 'öğrenci galiba']
        ] },
        { t: 'ipucu', h: 'Fikri yumuşatmak', m: 'Koreliler kesin konuşmak yerine fikirlerini çoğu zaman <b>것 같아요</b> ile yumuşatır: <i>이게 더 좋은 것 같아요</i> (Bence bu daha iyi). Kendi durumları için bile: <i>배가 부른 것 같아요</i> (Doydum galiba).' },
        { t: 'ipucu', h: 'Okunuş', m: '<i>같아요</i> "gatayo" okunur. ㄹ\'den sonra 것 sertleşir: <i>올 것 같아요</i> → "ol kkeot gatayo".' },
        { t: 'metin', h: '-네요: "…-mış!"', m: 'O anda gördüğün, duyduğun, fark ettiğin bir şeye tepki: <i>와, 눈이 오네요!</i> (Vay, kar yağıyor!), <i>한국어를 잘하시네요!</i> (Koreceniz ne kadar iyiymiş!). Gövdeye doğrudan gelir: <i>춥네요, 맛있네요, 예쁘네요</i>. ㄹ gövdede ㄹ düşer: <i>살다 → 사네요</i>.' },
        { t: 'metin', h: '-지요? / -죠?: "değil mi?"', m: 'Karşıdakinin de bildiğini düşündüğün bir şeyi onaylatmak için: <i>오늘 덥지요?</i> (Bugün sıcak, değil mi?). Konuşmada çoğunlukla kısa biçim <b>-죠</b>: <i>맛있죠?</i> Soru kelimesiyle yumuşak soru: <i>이름이 뭐죠?</i> (Adınız neydi?). Düz tonla "tabii ki": <i>그럼요, 알죠</i> (Tabii, biliyorum).' },
        { t: 'tablo', h: 'Üç biçim yan yana', bas: ['Biçim', 'Ne zaman?', 'Örnek', 'Türkçe'], s: [
          ['-(으)ㄹ 것 같아요', 'tahmin, yumuşak fikir', '비가 {올 것 같아요}.|biga {ol geot gatayo}', 'Yağmur yağacak galiba.'],
          ['-네요', 'yeni fark edilen şeye tepki', '비가 {오네요}!|biga {oneyo}', 'Yağmur yağıyormuş!'],
          ['-지요? / -죠?', 'onay isteme', '비가 {오죠}?|biga {ojyo}', 'Yağmur yağıyor, değil mi?']
        ] },
        { t: 'diyalog', h: 'Yeni kafede', l: [
          ['Jisu', '와, 이 카페 정말 [예쁘]{네요}!', 'Vay, bu kafe ne kadar güzelmiş!', 'wa, i kape jeongmal [yeppeu]{neyo}!'],
          ['Minsu', '그렇죠? 커피도 [맛있]{을 것 같아요}.', 'Değil mi? Kahvesi de lezzetli olacak galiba.', 'geureochyo? keopido [masiss]{eul geot gatayo}'],
          ['Jisu', '사람이 많은데 자리가 있을까요?', 'Çok kalabalık, yer var mıdır acaba?', 'sarami maneunde jariga isseulkkayo?'],
          ['Minsu', '저기 창가에 자리가 [있]{는 것 같아요}.', 'Şurada pencere kenarında yer var galiba.', 'jeogi changgae jariga [in]{neun geot gatayo}'],
          ['Jisu', '오늘 날씨가 정말 [좋]{죠}?', 'Bugün hava gerçekten güzel, değil mi?', 'oneul nalssiga jeongmal [jo]{chyo}?']
        ] },
        { t: 'ornek', l: [
          ['내일 비가 {올 것 같아요}.', 'Yarın yağmur [yağ]{acak galiba}.', 'naeil biga {ol geot gatayo}'],
          ['민수 씨가 벌써 {간 것 같아요}.', 'Minsu çoktan [git]{ti galiba}.', 'minsu ssiga beolsseo {gan geot gatayo}'],
          ['이 옷이 더 [좋]{은 것 같아요}.', '{Bence} bu giysi daha iyi.', 'i osi deo [jo]{eun geot gatayo}'],
          ['한국어를 정말 [잘하시]{네요}!', 'Koreceniz gerçekten çok iyi{ymiş}!', 'hangugeoreul jeongmal [jalhasi]{neyo}!'],
          ['벌써 열 시{네요}.', 'Saat şimdiden on {olmuş}!', 'beolsseo yeol si{neyo}'],
          ['오늘 정말 [춥]{네요}.', 'Bugün gerçekten soğuk{muş}.', 'oneul jeongmal [chum]{neyo}'],
          ['이거 [맛있]{죠}?', 'Bu lezzetli, {değil mi}?', 'igeo [masit]{jyo}?'],
          ['그럼요, [알]{죠}.', 'Tabii ki [bil]{iyorum}.', 'geureomyo, [al]{jyo}']
        ] },
        { t: 'ozet', l: [
          '<b>것 같아요</b>: galiba, sanırım; geçmiş -(으)ㄴ, şimdiki -는, gelecek -(으)ㄹ.',
          'Fikri yumuşatmak için de: <i>이게 더 좋은 것 같아요</i>.',
          '<b>-네요</b>: yeni fark edilen şeye tepki (…-mış!).',
          '<b>-지요? / -죠?</b>: …, değil mi?; düz tonla "tabii ki".'
        ] }
      ],
      test: [
        { s: '"Yarın yağmur yağacak galiba."', o: ['내일 비가 올 것 같아요.', '내일 비가 온 것 같아요.', '내일 비가 오는 것 같아요.'], d: 0, a: 'Gelecek tahmini: -(으)ㄹ 것 같아요.' },
        { s: '"Çoktan gitti galiba."', o: ['벌써 갈 것 같아요.', '벌써 간 것 같아요.', '벌써 가는 것 같아요.'], d: 1, a: 'Geçmiş: -(으)ㄴ 것 같아요.' },
        { s: 'Kar yağdığını yeni gördün. Ne dersin?', o: ['눈이 오네요!', '눈이 올 거예요.', '눈이 왔어요?'], d: 0, a: 'Yeni fark edilen şeye tepki: -네요.' },
        { s: '"Bugün sıcak, değil mi?"', o: ['오늘 덥죠?', '오늘 덥네요?', '오늘 더울까요?'], d: 0, a: 'Onay isteme: -죠?' },
        { s: '살다 + -네요', o: ['살네요', '사네요', '살으네요'], d: 1, a: 'ㄹ gövdede ㄹ düşer: 사네요.' },
        { s: '"Bence bu daha iyi." (yumuşak)', o: ['이게 더 좋은 것 같아요.', '이게 더 좋을게요.', '이게 더 좋지 마세요.'], d: 0, a: 'Fikri yumuşatmak: 것 같아요.' },
        { s: '"Meşgul galiba." (şu an)', o: ['바쁜 것 같아요', '바쁘는 것 같아요', '바빠는 것 같아요'], d: 0, a: 'Sıfat, şimdiki: -(으)ㄴ 것 같아요.' },
        { s: '"그럼요, 알죠." ne demek?', o: ['Tabii ki biliyorum.', 'Biliyor musun?', 'Bilmiyorum galiba.'], d: 0, a: 'Düz tonla -죠: "tabii ki".' }
      ]
    },
    {
      id: "ko-t3-01", seviye: "TOPIK 3", sure: 12,
      baslik: "Düz anlatım ve yazı dili: -ㄴ다 / -는다 / -다",
      kisa: "간다, 먹는다, 예쁘다, 학생이다",
      bolumler: [
        { t: "metin", m: "Şimdiye kadar hep kibar konuşma biçimi <b>-아요 / -어요</b> ile cümle kurdun. Korecede bir de <b>düz anlatım biçimi</b> (한다체) vardır: <i>간다</i> (gidiyor), <i>먹는다</i> (yiyor), <i>예쁘다</i> (güzel). Gazeteler, kitaplar, günlükler ve TOPIK yazma bölümü (53–54. sorular) bu biçimle yazılır. Bir sonraki dersteki dolaylı anlatım da bu biçimin üzerine kurulur. <b>Kullanım alanı:</b> yazı dili (문어체); konuşmada nadiren." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede de konuşmadaki “gidiyorum” ile gazetedeki “gider, gitmektedir” farklıdır. Korecede -아요'yu bırakıp gövdeye düz anlatım eki getirirsin. Fiillerde şimdiki zaman eki vardır (<b>-ㄴ다 / -는다</b>); sıfatlar ise sözlük biçiminde kalır.", l: [
          ["Her gün okula [gid]{er}.", "매일 학교에 {간다}.", "maeil hakgyoe {ganda}"],
          ["Ekmek [yi]{yor}.", "빵을 [먹]{는다}.", "ppangeul [meong]{neunda}"],
          ["Hava soğuk{tur}.", "날씨가 [춥]{다}.", "nalssiga [chup]{da}"],
          ["O bir öğrenci{dir}.", "그는 [학생]{이다}.", "geuneun [haksaeng]{ida}"]
        ] },
        { t: "tablo", h: "Kurulum: şimdiki zaman", bas: ["Tür", "Ek", "Örnek"], s: [
          ["Fiil, ünlü gövde", "{-ㄴ다}", "{간다}, {마신다}|ganda, masinda"],
          ["Fiil, ㄹ gövde (ㄹ düşer)", "{-ㄴ다}", "{산다}, {만든다}|sanda, mandeunda"],
          ["Fiil, ünsüz gövde", "{-는다}", "[먹]{는다}, [읽]{는다}|meongneunda, ingneunda"],
          ["Sıfat", "{-다}", "[예쁘]{다}, [좋]{다}|yeppeuda, jota"],
          ["있다 / 없다", "{-다}", "[있]{다}, [재미있]{다}|itda, jaemiitda"],
          ["İsim + 이다", "{-이다} / {-다}", "[학생]{이다}, [의사]{다}|haksaengida, uisada"]
        ] },
        { t: "tablo", h: "Geçmiş ve gelecek", bas: ["Zaman", "Kurulum", "Örnek"], s: [
          ["Geçmiş (fiil)", "{-았다 / -었다}", "[갔]{다}, [먹었]{다}|gatda, meogeotda"],
          ["Geçmiş (sıfat)", "{-았다 / -었다}", "[예뻤]{다}, [좋았]{다}|yeppeotda, joatda"],
          ["Geçmiş (isim)", "{-이었다 / -였다}", "[학생]{이었다}, [의사]{였다}|haksaengieotda, uisayeotda"],
          ["Gelecek, niyet", "{-(으)ㄹ 것이다}", "{갈 것이다}, {먹을 것이다}|gal geosida, meogeul geosida"]
        ] },
        { t: "tablo", h: "Soru, emir ve öneri", bas: ["Tür", "Ek", "Örnek"], s: [
          ["Soru (samimi konuşma)", "{-니? / -냐?}", "[가]{니}?, [먹]{냐}?|gani? meongnya?"],
          ["Soru (yazı dili)", "{-는가 / -(으)ㄴ가}", "[가]{는가}, {중요한가}|ganeunga, jungyohanga"],
          ["Emir", "{-아라 / -어라}", "[가]{라}, [먹어]{라}|gara, meogeora"],
          ["Öneri", "{-자}", "[가]{자}, [먹]{자}|gaja, meokja"]
        ] },
        { t: "ipucu", h: "Bu biçimler nerede karşına çıkar?", m: "Soru, emir ve öneri biçimleri yakın arkadaşlar arasında, kitaplarda ve talimatlarda duyulur. Asıl önemi şu: sonraki derste dolaylı anlatımda <b>-냐고</b>, <b>-(으)라고</b> ve <b>-자고</b> olarak karşına çıkacaklar. Yazıda sorulan soru çoğunlukla <i>-는가 / -(으)ㄴ가</i> ile biter: <i>환경 보호는 왜 중요한가?</i> (Çevreyi korumak neden önemlidir?)" },
        { t: "ipucu", h: "Fiil mi, sıfat mı?", m: "Aynı Türkçe kelime Korecede fiil ya da sıfat olabilir; ek buna göre değişir. <i>좋아하다</i> (sevmek) fiildir: <i>좋아한다</i>. <i>좋다</i> (iyi olmak) sıfattır: <i>좋다</i>. <i>크다</i> (büyük olmak) sıfattır: <i>크다</i>; ama <i>자라다</i> (büyümek) fiildir: <i>자란다</i>." },
        { t: "ipucu", h: "Yazıda 저 değil 나", m: "Düz anlatımda kibarlık eki olmadığı için alçakgönüllü <b>저 / 제</b> yerine <b>나 / 내</b> kullanılır: <i>나는 학생이다</i> (Ben öğrenciyim), <i>내 꿈은 의사가 되는 것이다</i> (Hayalim doktor olmak)." },
        { t: "tablo", h: "Hangi biçim nerede?", bas: ["Biçim", "Nerede?", "Örnek"], s: [
          ["-아요 / -어요", "Günlük konuşma (kibar)", "밥을 먹어요.|babeul meogeoyo"],
          ["-(스)ㅂ니다", "Resmî konuşma, haber, anons", "밥을 먹습니다.|babeul meokseumnida"],
          ["-ㄴ다 / -는다", "Yazı dili: gazete, kitap, günlük, kompozisyon", "밥을 먹는다.|babeul meongneunda"]
        ] },
        { t: "ipucu", h: "TOPIK yazmada konuşma eki yok", m: "TOPIK 53–54. sorularda (kompozisyon) cümleler <b>-ㄴ다 / -는다</b> ile biter. <i>-아요 / -어요</i>, <i>-잖아요</i>, <i>-거든요</i> gibi konuşma ekleri kullanılmaz ve puan kaybettirir. Konuşmadaki <i>근데</i> yerine yazıda <i>그런데</i> ya da <i>그러나</i> yazılır." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["날씨가 [춥]{는다}.|nalssiga chumneunda", "날씨가 [춥]{다}.|nalssiga chupda", "sıfat: -는다 almaz"],
          ["나는 밥을 {먹다}.|naneun babeul meokda", "나는 밥을 [먹]{는다}.|naneun babeul meongneunda", "fiil: şimdiki zamanda -는다"],
          ["그는 {학생다}.|geuneun haksaengda", "그는 [학생]{이다}.|geuneun haksaengida", "ünsüzle biten isim: -이다"],
          ["서울에서 {살는다}.|seoureseo salneunda", "서울에서 {산다}.|seoureseo sanda", "ㄹ gövde: ㄹ düşer + -ㄴ다"]
        ] },
        { t: "diyalog", h: "Minji'nin günlüğü", m: "Günlükler düz anlatımla yazılır.", l: [
          ["Minji", "오늘은 아침 일찍 [일어났]{다}.", "Bugün sabah erkenden kalktım.", "oneureun achim iljjik ireonatda"],
          ["Minji", "날씨가 정말 [좋]{았다}.", "Hava gerçekten güzeldi.", "nalssiga jeongmal joatda"],
          ["Minji", "친구와 한강 공원에서 자전거를 [탔]{다}.", "Arkadaşımla Han Nehri parkında bisiklete bindim.", "chinguwa hangang gongwoneseo jajeongeoreul tatda"],
          ["Minji", "요즘 한국어 공부가 정말 [재미있]{다}.", "Bu aralar Korece çalışmak gerçekten eğlenceli.", "yojeum hangugeo gongbuga jeongmal jaemiitda"],
          ["Minji", "내일은 도서관에서 숙제를 {할 것이다}.", "Yarın kütüphanede ödevimi yapacağım.", "naeireun doseogwaneseo sukjereul hal geosida"]
        ] },
        { t: "ornek", l: [
          ["한국 사람들은 김치를 많이 [먹]{는다}.", "Koreliler çok kimchi [ye]{r}.", "hanguk saramdeureun gimchireul mani meongneunda"],
          ["지하철은 빠르고 {편리하다}.", "Metro hızlı ve kullanışlı{dır}.", "jihacheoreun ppareugo pyeollihada"],
          ["요즘 혼자 사는 사람이 [늘]{고 있다}.", "Bugünlerde yalnız yaşayan insanlar [art]{ıyor}.", "yojeum honja saneun sarami neulgo itda"],
          ["어제는 비가 많이 {왔다}.", "Dün çok yağmur [yağ]{dı}.", "eojeneun biga mani watda"],
          ["나는 [대학생]{이다}.", "Ben üniversite öğrencisi{yim}.", "naneun daehaksaengida"],
          ["그 영화는 정말 [재미있]{었다}.", "O film gerçekten eğlenceli{ydi}.", "geu yeonghwaneun jeongmal jaemiisseotda"],
          ["내년에 한국에 {갈 것이다}.", "Seneye Kore'ye [gid]{eceğim}.", "naenyeone hanguge gal geosida"],
          ["환경 문제는 모두의 [책임]{이다}.", "Çevre sorunu herkesin sorumluluğu{dur}.", "hwangyeong munjeneun moduui chaegimida"]
        ] },
        { t: "ozet", l: [
          "Fiil (şimdiki): ünlü ve ㄹ gövde <b>-ㄴ다</b> (간다, 산다), ünsüz gövde <b>-는다</b> (먹는다).",
          "Sıfat ve 있다 / 없다: sözlük biçimi <b>-다</b> (예쁘다, 재미있다).",
          "İsim: <b>-이다</b> (학생이다), ünlüden sonra <b>-다</b> (의사다).",
          "Geçmiş <b>-았/었다</b>, gelecek <b>-(으)ㄹ 것이다</b>; yazıda 저 yerine 나.",
          "Kullanım: yazı dili (문어체); TOPIK kompozisyonunun ve dolaylı anlatımın temeli."
        ] }
      ],
      test: [
        { s: "가다 → düz anlatım (şimdiki)?", o: ["가다", "간다", "가는다"], d: 1, a: "Ünlü gövde: -ㄴ다 → 간다." },
        { s: "먹다 → düz anlatım (şimdiki)?", o: ["먹은다", "먹다", "먹는다"], d: 2, a: "Ünsüz gövde: -는다 → 먹는다." },
        { s: "예쁘다 (sıfat) → düz anlatım?", o: ["예쁜다", "예쁘다", "예쁘는다"], d: 1, a: "Sıfatlar sözlük biçiminde kalır." },
        { s: "살다 → düz anlatım?", o: ["산다", "살는다", "살다"], d: 0, a: "ㄹ düşer, -ㄴ다 gelir → 산다." },
        { s: "“Dün çok yağmur yağdı.” (yazı dili)", o: ["어제 비가 많이 왔다.", "어제 비가 많이 온다.", "어제 비가 많이 왔어요."], d: 0, a: "Geçmiş: -았다. 왔어요 konuşma biçimidir." },
        { s: "의사이다 yazıda nasıl kısalır?", o: ["의사다", "의산다", "의사는다"], d: 0, a: "Ünlüden sonra -이다 → -다." },
        { s: "Hangisi TOPIK kompozisyonuna uygun?", o: ["환경을 보호해야 한다.", "환경을 보호해야 해요.", "환경을 보호해야 하잖아요."], d: 0, a: "Kompozisyonda düz anlatım: -ㄴ다 / -는다." },
        { s: "좋아하다 (sevmek) → düz anlatım?", o: ["좋아하다", "좋아한다", "좋아는다"], d: 1, a: "좋아하다 fiildir: 좋아한다. 좋다 ise sıfattır: 좋다." },
        { s: "“Yarın gideceğim.” (yazı dili)", o: ["내일 갈 것이다.", "내일 간다요.", "내일 가겠어요."], d: 0, a: "Yazıda gelecek: -(으)ㄹ 것이다." },
        { s: "Düz anlatımda “ben” nasıl yazılır?", o: ["나", "저", "제가"], d: 0, a: "Kibarlık eki olmadığı için alçakgönüllü 저 değil 나." }
      ]
    },
    {
      id: "ko-t3-02", seviye: "TOPIK 3", sure: 12,
      baslik: "Dolaylı anlatım 1: -다고, -냐고, -(으)라고, -자고",
      kisa: "간다고 했어요 · 가냐고 물었어요 · 가라고 했어요",
      bolumler: [
        { t: "metin", m: "Başkasının sözünü aktarmak için sözün sonuna <b>-고</b> eklenir ve arkasından <b>하다</b> (demek) ya da 말하다, 묻다 gibi bir fiil gelir. Sözün türüne göre dört kalıp vardır: <b>haber</b> (-다고), <b>soru</b> (-냐고), <b>emir</b> (-(으)라고), <b>öneri</b> (-자고). Hepsi bir önceki dersteki düz anlatım biçimine dayanır. <b>Kullanım alanı:</b> hem konuşma hem yazı." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede aktarım <b>-dığını, -mesini</b> ya da <b>diye</b> ile yapılır. Korecedeki <b>-고</b>, Türkçedeki <b>diye</b>'ye çok benzer: aktarılan sözün sonuna gelir, arkasından “dedi, sordu” gelir.", l: [
          ["Yarın [gel]{eceğini} söyledi.", "내일 {온다고} 했어요.", "naeil {ondago} haesseoyo"],
          ["Nereye [gid]{iyorsun diye} sordu.", "어디 [가]{냐고} 물었어요.", "eodi [ga]{nyago} mureosseoyo"],
          ["Erken [yat]{mamı} söyledi.", "일찍 [자]{라고} 했어요.", "iljjik [ja]{rago} haesseoyo"],
          ["Sinemaya [gid]{elim diye} teklif etti.", "영화 보러 [가]{자고} 했어요.", "yeonghwa boreo [ga]{jago} haesseoyo"]
        ] },
        { t: "tablo", h: "Dört kalıp", bas: ["Söz türü", "Kalıp", "Örnek"], s: [
          ["Haber (fiil)", "{-ㄴ다고 / -는다고}", "{간다고}, [먹]{는다고}|gandago, meongneundago"],
          ["Haber (sıfat)", "{-다고}", "[바쁘]{다고}, [좋]{다고}|bappeudago, jotago"],
          ["Haber (isim)", "{-(이)라고}", "[학생]{이라고}, [의사]{라고}|haksaengirago, uisarago"],
          ["Soru", "{-냐고}", "[가]{냐고}, [먹]{냐고}|ganyago, meongnyago"],
          ["Emir", "{-(으)라고}", "[가]{라고}, [먹]{으라고}|garago, meogeurago"],
          ["Öneri", "{-자고}", "[가]{자고}, [먹]{자고}|gajago, meokjago"]
        ] },
        { t: "tablo", h: "Geçmiş, gelecek ve isim", bas: ["Durum", "Kalıp", "Örnek"], s: [
          ["Geçmiş haber", "{-았/었다고}", "[갔]{다고}, [먹었]{다고}|gatdago, meogeotdago"],
          ["Geçmiş soru", "{-았/었냐고}", "[갔]{냐고}, [먹었]{냐고}|gannyago, meogeonnyago"],
          ["Gelecek haber", "{-(으)ㄹ 거라고}", "{갈 거라고}, {먹을 거라고}|gal georago, meogeul georago"],
          ["İsim soru", "{-(이)냐고}", "[학생]{이냐고}, [의사]{냐고}|haksaenginyago, uisanyago"]
        ] },
        { t: "metin", h: "Rica: -아/어 달라고 ve -아/어 주라고", m: "“Bana … yap” diye rica edildiyse <b>-아/어 달라고</b> kullanılır; isteyen kişi kendisi için istemiştir: <i>친구가 도와 <b>달라고</b> 했어요</i> (Arkadaşım ona yardım etmemi istedi). Rica başkası içinse <b>-아/어 주라고</b>: <i>엄마가 동생을 도와 <b>주라고</b> 했어요</i> (Annem kardeşime yardım etmemi söyledi). Tek başına 주다 da aynı şekilde <i>달라고</i> olur: <i>물을 달라고 했어요</i> (Su istedi)." },
        { t: "ipucu", h: "하다 yerine başka fiiller", m: "-고'dan sonra çoğunlukla <b>하다</b> gelir ama anlamı netleştirmek için başka fiiller de kullanılır: 말하다 (söylemek), 묻다 → 물었어요 (sormak), 듣다 → 들었어요 (duymak), 부탁하다 (rica etmek), 약속하다 (söz vermek): <i>뉴스에서 내일 비가 온다고 들었어요</i> (Haberlerde yarın yağmur yağacağını duydum). “Ne dedi?” için <i>뭐라고 했어요?</i> kalıbı kullanılır." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["Neye eklenir?", "Fiil, sıfat ve isim + 이다 (hepsi)"],
          ["Geçmiş eki", "Alır: 갔다고, 갔냐고|gatdago, gannyago"],
          ["Emir ve öneri", "Yalnızca fiillerle: -(으)라고, -자고"],
          ["Olumsuz emir", "-지 말라고: 가지 말라고 했어요|gaji mallago haesseoyo"],
          ["Olumsuz öneri", "-지 말자고: 가지 말자고 했어요|gaji maljago haesseoyo"],
          ["Kullanım", "Konuşma ve yazı (uzun biçim)"]
        ] },
        { t: "ipucu", h: "Kişiler değişir: 자기", m: "Aktarırken kişi zamirleri Türkçedeki gibi değişir. Minsu “저는 바빠요” dediyse aktarım <i>민수 씨는 바쁘다고 했어요</i> olur. Aktarılan kişinin kendisini göstermek için <b>자기</b> (kendisi) kullanılabilir: <i>민수가 자기가 하겠다고 했어요</i> (Minsu kendisinin yapacağını söyledi)." },
        { t: "ipucu", h: "Doğrudan alıntı: “…”라고", m: "Sözü olduğu gibi aktarmak istersen tırnak içine alır ve <b>-(이)라고</b> eklersin: <i>민수 씨가 “안녕하세요”라고 했어요</i>. Bu daha çok yazıda görülür; konuşmada dolaylı aktarım çok daha yaygındır." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["민수가 [바쁜]{다고} 했어요.|minsuga bappeundago haesseoyo", "민수가 [바쁘]{다고} 했어요.|minsuga bappeudago haesseoyo", "sıfat: -다고"],
          ["“숙제하세요.” → 숙제를 [하]{자고} 했어요.|sukjereul hajago haesseoyo", "“숙제하세요.” → 숙제를 [하]{라고} 했어요.|sukjereul harago haesseoyo", "emir: -(으)라고; -자고 öneridir"],
          ["“도와주세요!” → 도와 {주라고} 했어요.|dowa jurago haesseoyo", "“도와주세요!” → 도와 {달라고} 했어요.|dowa dallago haesseoyo", "isteyen kendisi için: -아/어 달라고"],
          ["어디 [가]{다고} 물었어요.|eodi gadago mureosseoyo", "어디 [가]{냐고} 물었어요.|eodi ganyago mureosseoyo", "soru: -냐고"]
        ] },
        { t: "diyalog", h: "Telefon mesajı", l: [
          ["수진", "민수 씨가 뭐라고 했어요?", "Minsu ne dedi?", "minsu ssiga mworago haesseoyo?"],
          ["지훈", "오늘 회의에 좀 [늦]{는다고} 했어요.", "Bugünkü toplantıya biraz geç kalacağını söyledi.", "oneul hoeuie jom neunneundago haesseoyo"],
          ["수진", "왜 [늦]{냐고} 물어봤어요?", "Neden geç kaldığını sordun mu?", "wae neunnyago mureobwasseoyo?"],
          ["지훈", "네, 차가 고장 [났]{다고} 했어요. 그리고 자료를 먼저 보내 {달라고} 했어요.", "Evet, arabasının bozulduğunu söyledi. Bir de belgeleri önce ona göndermemi istedi.", "ne, chaga gojang natdago haesseoyo. geurigo jaryoreul meonjeo bonae dallago haesseoyo"],
          ["수진", "알겠어요. 회의는 3시에 [시작하]{자고} 전해 주세요.", "Tamam. Toplantıya saat 3'te başlayalım diye ona iletin.", "algesseoyo. hoeuineun sesie sijakajago jeonhae juseyo"]
        ] },
        { t: "ornek", l: [
          ["일기 예보에서 내일 비가 {온다고} 했어요.", "Hava durumu yarın yağmur [yağ]{acağını} söyledi.", "ilgi yeboeseo naeil biga ondago haesseoyo"],
          ["동생이 배가 [고프]{다고} 해요.", "Kardeşim karnının aç olduğunu söylüyor.", "dongsaengi baega gopeudago haeyo"],
          ["친구가 한국에 가 [봤]{냐고} 물었어요.", "Arkadaşım Kore'ye gidip gitmediğimi sordu.", "chinguga hanguge ga bwannyago mureosseoyo"],
          ["의사가 담배를 [끊]{으라고} 했어요.", "Doktor sigarayı [bırak]{mamı} söyledi.", "uisaga dambaereul kkeuneurago haesseoyo"],
          ["엄마가 밤늦게 다니지 {말라고} 했어요.", "Annem gece geç saatlerde dışarıda dolaşmamamı söyledi.", "eommaga bamneutge daniji mallago haesseoyo"],
          ["동료가 같이 점심을 [먹]{자고} 했어요.", "İş arkadaşım birlikte öğle yemeği yiyelim dedi.", "dongnyoga gachi jeomsimeul meokjago haesseoyo"],
          ["손님이 영수증을 {달라고} 했어요.", "Müşteri fişi [ver]{memi} istedi.", "sonnimi yeongsujeungeul dallago haesseoyo"],
          ["그 사람이 [의사]{라고} 들었어요.", "O kişinin doktor olduğunu duydum.", "geu sarami uisarago deureosseoyo"]
        ] },
        { t: "ozet", l: [
          "Haber: fiil <b>-ㄴ/는다고</b>, sıfat <b>-다고</b>, isim <b>-(이)라고</b> + 하다.",
          "Soru: <b>-냐고</b> + 묻다 / 하다.",
          "Emir: <b>-(으)라고</b>; olumsuz <b>-지 말라고</b>.",
          "Öneri: <b>-자고</b>; olumsuz <b>-지 말자고</b>.",
          "Rica: kendisi için <b>-아/어 달라고</b>, başkası için <b>-아/어 주라고</b>."
        ] }
      ],
      test: [
        { s: "Minsu: “바빠요.” → 민수 씨가 ___ 했어요.", o: ["바쁜다고", "바쁘다고", "바쁘냐고"], d: 1, a: "Sıfat: -다고." },
        { s: "Minsu: “밥 먹어요.” → 민수 씨가 밥을 ___ 했어요.", o: ["먹는다고", "먹다고", "먹자고"], d: 0, a: "Fiil, ünsüz gövde: -는다고." },
        { s: "“어디 가요?” → 어디 ___ 물었어요.", o: ["간다고", "가냐고", "가자고"], d: 1, a: "Soru: -냐고." },
        { s: "“일찍 오세요.” → 일찍 ___ 했어요.", o: ["오라고", "온다고", "오자고"], d: 0, a: "Emir: -(으)라고." },
        { s: "“같이 가요!” (teklif) → 같이 ___ 했어요.", o: ["가라고", "가자고", "간다고"], d: 1, a: "Öneri: -자고." },
        { s: "“들어오지 마세요.” → 들어오지 ___ 했어요.", o: ["말라고", "마라고", "않다고"], d: 0, a: "Olumsuz emir: -지 말라고." },
        { s: "Arkadaşım: “도와주세요.” → 친구가 도와 ___ 했어요.", o: ["주라고", "달라고", "준다고"], d: 1, a: "İsteyen kendisi için istiyorsa: -아/어 달라고." },
        { s: "Sumi: “학생이에요.” → 수미 씨가 학생___ 했어요.", o: ["이라고", "이다고", "이냐고"], d: 0, a: "İsim: -(이)라고." },
        { s: "“어제 갔어요.” → 어제 ___ 했어요.", o: ["갔다고", "간다고", "갔냐고"], d: 0, a: "Geçmiş haber: -았/었다고." },
        { s: "“-고 하다”daki -고 Türkçede neye benzer?", o: ["diye", "-ken", "-ince"], d: 0, a: "Aktarılan sözün sonuna gelir, “diye” gibi." }
      ]
    },
    {
      id: "ko-t3-03", seviye: "TOPIK 3", sure: 12,
      baslik: "Dolaylı anlatım 2: -대요, -냬요, -래요, -재요",
      kisa: "간대요 · 가냬요 · 가래요 · 가재요 · -다면서요?",
      bolumler: [
        { t: "metin", m: "Günlük konuşmada <i>-다고 해요</i> gibi uzun biçimler çoğunlukla kısaltılır: <i>간다고 해요</i> → <i>간대요</i> (Gidiyormuş / gideceğini söylüyor). Kısaltma kuralı basittir: <b>-고 하-</b> düşer, kalan parçalar birleşir. <b>Kullanım alanı:</b> günlük konuşma (구어체); yazıda ve TOPIK kompozisyonunda uzun biçim kullanılır." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçedeki <b>-mış</b> eki duyulan bilgiyi aktarır: “geliyormuş, hastaymış”. Korece kısaltmalar da tam bu işi görür.", l: [
          ["Yarın [gel]{iyormuş}.", "내일 {온대요}.", "naeil {ondaeyo}"],
          ["Hava soğuk{muş}.", "날씨가 [춥]{대요}.", "nalssiga [chup]{daeyo}"],
          ["Öğretmen{miş}.", "[선생님]{이래요}.", "[seonsaengnim]{iraeyo}"],
          ["Erken gelmemizi [söylü]{yor}.", "일찍 [오]{래요}.", "iljjik [o]{raeyo}"]
        ] },
        { t: "tablo", h: "Uzun ve kısa biçim", bas: ["Uzun biçim", "Kısa biçim", "Anlamı"], s: [
          ["간다고 해요|gandago haeyo", "{간대요}|gandaeyo", "gidiyormuş"],
          ["춥다고 해요|chupdago haeyo", "[춥]{대요}|chupdaeyo", "soğukmuş"],
          ["학생이라고 해요|haksaengirago haeyo", "[학생]{이래요}|haksaengiraeyo", "öğrenciymiş"],
          ["가냐고 해요|ganyago haeyo", "[가]{냬요}|ganyaeyo", "gidecek misin diye soruyor"],
          ["가라고 해요|garago haeyo", "[가]{래요}|garaeyo", "gitmemi söylüyor"],
          ["가자고 해요|gajago haeyo", "[가]{재요}|gajaeyo", "gidelim diyor"]
        ] },
        { t: "tablo", h: "Geçmişte", bas: ["Uzun biçim", "Kısa biçim", "Anlamı"], s: [
          ["갔다고 해요|gatdago haeyo", "[갔]{대요}|gatdaeyo", "gitmiş"],
          ["간다고 했어요|gandago haesseoyo", "{간댔어요}|gandaesseoyo", "gideceğini söylemişti"],
          ["가라고 했어요|garago haesseoyo", "[가]{랬어요}|garaesseoyo", "gitmemi söylemişti"],
          ["가자고 했어요|gajago haesseoyo", "[가]{쟀어요}|gajaesseoyo", "gidelim demişti"]
        ] },
        { t: "metin", h: "Olayın zamanı mı, söylemenin zamanı mı?", m: "<i>갔대요</i>: aktarılan olay geçmişte (gitmiş). <i>간댔어요</i>: söyleme anı geçmişte (gideceğini söylemişti). Türkçede de aynı fark var: “gitmiş” ↔ “gideceğini söylemişti”." },
        { t: "metin", h: "-다면서요? “… diye duydum, doğru mu?”", m: "Duyduğun bir bilgiyi karşındakine doğrulatmak için <b>-다면서요?</b> (samimi: <b>-다며?</b>) kullanılır: <i>다음 달에 결혼<b>한다면서요</b>?</i> (Gelecek ay evleniyormuşsun, doğru mu?). İsimde <b>-(이)라면서요?</b>: <i>고향이 부산<b>이라면서요</b>?</i> (Memleketin Busan'mış, öyle mi?)" },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["Neye eklenir?", "Fiil -ㄴ/는대요, sıfat -대요, isim -(이)래요|-n/neundaeyo, -daeyo, -(i)raeyo"],
          ["Geçmiş eki", "Alır: 갔대요, 바빴대요|gatdaeyo, bappatdaeyo"],
          ["Saygı", "-(으)시- korunur: 가신대요|gasindaeyo"],
          ["Kiminle?", "Arkadaş, iş arkadaşı, aile; kibar ama samimi"],
          ["Resmî ortam", "Uzun biçim: -다고 합니다|-dago hamnida"],
          ["Kullanım", "Yalnızca konuşma (구어체)|gueoche"]
        ] },
        { t: "ipucu", h: "-대요 ile -데요 farklı", m: "<b>-대요</b> (ㅐ) başkasından duyulanı aktarır: <i>맛있대요</i> (Lezzetliymiş, öyle diyorlar). <b>-데요</b> (ㅔ) ise kendi gördüğün, yaşadığın şeyi anlatır: <i>맛있데요</i> (Tattım, lezzetliydi). İkisi neredeyse aynı okunur; -더- ile kurulan bu ikinci kalıba 38. derste döneceğiz." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["날씨가 [춥]{는대요}.|nalssiga chumneundaeyo", "날씨가 [춥]{대요}.|nalssiga chupdaeyo", "sıfat: -대요"],
          ["(öneri) 같이 [가]{래요}.|gachi garaeyo", "(öneri) 같이 [가]{재요}.|gachi gajaeyo", "öneri: -재요; -래요 emirdir"],
          ["그 사람이 [의사]{대요}.|geu sarami uisadaeyo", "그 사람이 [의사]{래요}.|geu sarami uisaraeyo", "isim: -(이)래요"],
          ["(kompozisyon) 운동이 {중요하대요}.|undongi jungyohadaeyo", "(kompozisyon) 운동이 중요하다고 한다.|undongi jungyohadago handa", "yazıda kısaltma kullanılmaz"]
        ] },
        { t: "diyalog", h: "Ofiste söylenti", l: [
          ["미나", "김 과장님이 다음 달에 회사를 {그만두신대요}.", "Kim Müdür gelecek ay işten ayrılıyormuş.", "gim gwajangnimi daeum dare hoesareul geumandusindaeyo"],
          ["준호", "정말요? 왜 {그만두신대요}?", "Gerçekten mi? Neden ayrılıyormuş?", "jeongmallyo? wae geumandusindaeyo?"],
          ["미나", "유학을 {가신대요}. 그리고 오늘 저녁에 같이 [식사하]{재요}.", "Yurt dışına okumaya gidiyormuş. Bir de bu akşam birlikte yemek yiyelim diyor.", "yuhageul gasindaeyo. geurigo oneul jeonyeoge gachi siksahajaeyo"],
          ["준호", "몇 시까지 [오]{래요}?", "Saat kaça kadar gelmemizi söylüyor?", "myeot sikkaji oraeyo?"],
          ["미나", "일곱 시까지 [오]{래요}. 그런데 준호 씨, {이사한다면서요}?", "Saat yediye kadar gelin diyor. Bu arada Junho, taşınıyormuşsun, doğru mu?", "ilgop sikkaji oraeyo. geureonde junho ssi, isahandamyeonseoyo?"],
          ["준호", "네, 회사 근처로 이사해요.", "Evet, şirketin yakınına taşınıyorum.", "ne, hoesa geuncheoro isahaeyo"]
        ] },
        { t: "ornek", l: [
          ["뉴스에서 내일 눈이 {온대요}.", "Haberlere göre yarın kar yağacakmış.", "nyuseueseo naeil nuni ondaeyo"],
          ["그 식당이 정말 [맛있]{대요}.", "O restoran gerçekten lezzetliymiş.", "geu sikdangi jeongmal masitdaeyo"],
          ["민수 씨가 어제 [아팠]{대요}.", "Minsu dün hastaymış.", "minsu ssiga eoje apatdaeyo"],
          ["선생님이 내일까지 숙제를 [내]{래요}.", "Öğretmen ödevi yarına kadar teslim etmemizi söylüyor.", "seonsaengnimi naeilkkaji sukjereul naeraeyo"],
          ["친구가 주말에 등산 [가]{재요}.", "Arkadaşım hafta sonu dağa çıkalım diyor.", "chinguga jumare deungsan gajaeyo"],
          ["엄마가 언제 [오]{냬요}.", "Annem ne zaman geleceğimi soruyor.", "eommaga eonje onyaeyo"],
          ["저 사람이 새로 온 [팀장]{이래요}.", "O kişi yeni gelen ekip lideriymiş.", "jeo sarami saero on timjangiraeyo"],
          ["한국어를 정말 {잘한다면서요}?", "Korecen çok iyiymiş, doğru mu?", "hangugeoreul jeongmal jalhandamyeonseoyo?"]
        ] },
        { t: "ozet", l: [
          "Kısaltma: <b>-다고 해요 → -대요</b>, <b>-냐고 해요 → -냬요</b>, <b>-(으)라고 해요 → -(으)래요</b>, <b>-자고 해요 → -재요</b>.",
          "Fiil <b>-ㄴ/는대요</b>, sıfat <b>-대요</b>, isim <b>-(이)래요</b>.",
          "<i>갔대요</i> (gitmiş) ↔ <i>간댔어요</i> (gideceğini söylemişti).",
          "<b>-다면서요?</b>: duyduğunu doğrulatma (…-mış, doğru mu?).",
          "Yalnızca konuşmada; yazıda uzun biçim."
        ] }
      ],
      test: [
        { s: "간다고 해요 → kısa biçim?", o: ["간대요", "간데요", "가재요"], d: 0, a: "-다고 해요 → -대요." },
        { s: "“Hava soğukmuş.” (duyulan bilgi)", o: ["날씨가 춥대요.", "날씨가 춥는대요.", "날씨가 춥재요."], d: 0, a: "Sıfat: -대요." },
        { s: "가자고 해요 → kısa biçim?", o: ["가래요", "가재요", "가냬요"], d: 1, a: "Öneri: -자고 해요 → -재요." },
        { s: "“Öğretmen yarın gelmemizi söylüyor.”", o: ["선생님이 내일 오래요.", "선생님이 내일 온대요.", "선생님이 내일 오재요."], d: 0, a: "Emir aktarma: -(으)래요. 온대요 = öğretmen gelecekmiş." },
        { s: "그 사람은 학생___. (öğrenciymiş)", o: ["이래요", "대요", "이재요"], d: 0, a: "İsim: -(이)래요." },
        { s: "“갔대요” ne demek?", o: ["Gitmiş (öyle duydum).", "Gideceğini söylemişti.", "Gidelim diyor."], d: 0, a: "Aktarılan olay geçmişte: 갔대요." },
        { s: "“Gelecek ay evleniyormuşsun, doğru mu?”", o: ["다음 달에 결혼한다면서요?", "다음 달에 결혼한대요.", "다음 달에 결혼하재요?"], d: 0, a: "Duyduğunu doğrulatma: -다면서요?" },
        { s: "Hangisi kompozisyonda (yazı dili) kullanılabilir?", o: ["전문가들은 운동이 중요하다고 한다.", "전문가들은 운동이 중요하대요.", "전문가들은 운동이 중요하다면서요?"], d: 0, a: "Yazıda kısaltma yok: -다고 한다." },
        { s: "Saygı: 사장님이 내일 출장을 ___. (gidiyormuş)", o: ["가신대요", "가신데요", "가시재요"], d: 0, a: "-(으)시- korunur: 가신대요. -데요 kendi gördüğünü, -재요 öneriyi anlatır." },
        { s: "“맛있대요” ile “맛있데요” farkı?", o: ["맛있대요: başkasından duydum; 맛있데요: kendim tattım.", "İkisi tamamen aynı.", "맛있대요 soru, 맛있데요 emirdir."], d: 0, a: "-대요 duyulan bilgi, -데요 kendi deneyimin." }
      ]
    },
    {
      id: "ko-t3-04", seviye: "TOPIK 3", sure: 12,
      baslik: "Edilgen çatı: 보이다, 열리다, -아/어지다, -되다",
      kisa: "보이다, 잡히다, 열리다, 안기다 · 만들어지다 · 취소되다",
      bolumler: [
        { t: "metin", m: "Edilgen çatı, eylemi yapanı değil eylemden etkileneni öne çıkarır: <i>문을 열었어요</i> (Kapıyı açtım) → <i>문이 <b>열렸어요</b></i> (Kapı açıldı). Korecede bunun üç yolu var: bazı fiillere gelen <b>-이-, -히-, -리-, -기-</b> ekleri, her fiille kurulabilen <b>-아/어지다</b> ve -하다 fiillerindeki <b>-되다</b>. <b>Kullanım alanı:</b> her ikisi; haber ve yazıda çok sık." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçedeki edilgen ekleri (<b>-ıl, -ın, -n</b>) gibi Korecedeki ekler de fiilin gövdesine gelir. Nesne eki -을/를 ise özne eki -이/가'ya döner.", l: [
          ["Kapı [aç]{ıldı}.", "문이 [열]{렸}어요.", "muni yeollyeosseoyo"],
          ["Dağ [gör]{ünüyor}.", "산이 [보]{여}요.", "sani boyeoyo"],
          ["Hırsız [yakala]{ndı}.", "도둑이 [잡]{혔}어요.", "dodugi japyeosseoyo"],
          ["Ses [duy]{uluyor}.", "소리가 [들]{려}요.", "soriga deullyeoyo"]
        ] },
        { t: "tablo", h: "Dört ek: -이-, -히-, -리-, -기-", bas: ["Ek", "Etken", "Edilgen"], s: [
          ["{-이-}", "보다 (görmek)|boda", "[보]{이}다 (görünmek)|boida"],
          ["{-이-}", "쓰다 (yazmak)|sseuda", "[쓰]{이}다 (yazılmak)|sseuida"],
          ["{-이-}", "놓다 (koymak)|nota", "[놓]{이}다 (konmak)|noida"],
          ["{-히-}", "잡다 (yakalamak)|japda", "[잡]{히}다 (yakalanmak)|japida"],
          ["{-히-}", "먹다 (yemek)|meokda", "[먹]{히}다 (yenmek)|meokida"],
          ["{-히-}", "닫다 (kapatmak)|datda", "[닫]{히}다 (kapanmak)|dachida"],
          ["{-리-}", "열다 (açmak)|yeolda", "[열]{리}다 (açılmak)|yeollida"],
          ["{-리-}", "듣다 (duymak)|deutda", "[들]{리}다 (duyulmak)|deullida"],
          ["{-리-}", "팔다 (satmak)|palda", "[팔]{리}다 (satılmak)|pallida"],
          ["{-기-}", "안다 (sarılmak)|anda", "[안]{기}다 (kucaklanmak)|angida"],
          ["{-기-}", "끊다 (kesmek)|kkeunta", "[끊]{기}다 (kesilmek)|kkeunkida"],
          ["{-기-}", "쫓다 (kovalamak)|jjotda", "[쫓]{기}다 (kovalanmak)|jjotgida"]
        ] },
        { t: "ipucu", h: "Hangi fiil hangi eki alır?", m: "Kesin bir kural yok ama ipucu var: <b>-리-</b> çoğunlukla ㄹ ile biten gövdelere gelir (열다, 팔다; ㄷ düzensiz 듣다 → 들리다); <b>-히-</b> ㄱ, ㄷ, ㅂ, ㅈ ile bitenlere (먹다, 닫다, 잡다, 잊다 → 잊히다); <b>-기-</b> ㄴ, ㅁ, ㅅ, ㅊ ile bitenlere (안다, 감다 → 감기다, 빼앗다 → 빼앗기다, 쫓다); <b>-이-</b> ünlü ve ㅎ ile bitenlere (보다, 쓰다, 놓다). En sık olanları kelime gibi ezberlemek en kolayı." },
        { t: "metin", h: "Cümle nasıl değişir?", m: "Etken cümlede nesne olan şey, edilgen cümlede özne olur: <i>경찰이 도둑<b>을</b> 잡았어요</i> (Polis hırsızı yakaladı) → <i>도둑<b>이</b> 경찰<b>에게</b> 잡혔어요</i> (Hırsız polis tarafından yakalandı). Eylemi yapan kişi <b>-에게 / -한테</b> (insan, hayvan) ya da <b>-에</b> (şey, sebep) ile gösterilir: <i>바람에 문이 닫혔어요</i> (Rüzgârdan kapı kapandı)." },
        { t: "metin", h: "Her fiille: -아/어지다", m: "-이/히/리/기- almayan fiillerde edilgen <b>-아/어지다</b> ile kurulur: 만들다 → <i>만들어지다</i> (yapılmak), 끄다 → <i>꺼지다</i> (sönmek), 켜다 → <i>켜지다</i> (açılmak, yanmak), 지우다 → <i>지워지다</i> (silinmek), 이루다 → <i>이루어지다</i> (gerçekleşmek)." },
        { t: "tablo", h: "-아/어지다", bas: ["Etken", "Edilgen", "Örnek"], s: [
          ["만들다|mandeulda", "[만들]{어지다}|mandeureojida", "이 차는 한국에서 만들어졌어요.|i chaneun hangugeseo mandeureojyeosseoyo"],
          ["끄다|kkeuda", "{꺼지다}|kkeojida", "갑자기 불이 꺼졌어요.|gapjagi buri kkeojyeosseoyo"],
          ["켜다|kyeoda", "[켜]{지다}|kyeojida", "휴대폰이 안 켜져요.|hyudaeponi an kyeojyeoyo"],
          ["지우다|jiuda", "[지워]{지다}|jiwojida", "파일이 지워졌어요.|pairi jiwojyeosseoyo"],
          ["이루다|iruda", "[이루어]{지다}|irueojida", "꿈이 이루어졌어요.|kkumi irueojyeosseoyo"]
        ] },
        { t: "metin", h: "-하다 fiilleri: -되다", m: "<b>-하다</b> ile biten fiillerin edilgeni çoğunlukla <b>-되다</b> olur: 사용하다 → <i>사용되다</i> (kullanılmak), 결정하다 → <i>결정되다</i> (kararlaştırılmak), 저장하다 → <i>저장되다</i> (kaydedilmek), 취소하다 → <i>취소되다</i> (iptal edilmek): <i>비 때문에 경기가 <b>취소됐어요</b></i> (Yağmur yüzünden maç iptal edildi)." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["Neye eklenir?", "Yalnızca nesne alan (geçişli) fiillere"],
          ["Nesne eki", "-을/를 → -이/가 olur|-eul/reul → -i/ga"],
          ["Eylemi yapan", "-에게 / -한테 (canlı), -에 (şey, sebep)|-ege / -hante, -e"],
          ["Geçmiş eki", "Edilgen ekten sonra gelir: 열렸어요|yeollyeosseoyo"],
          ["Kullanım", "Her ikisi; haber ve yazıda çok sık"]
        ] },
        { t: "ipucu", h: "보이다 ve 들리다: duyularla", m: "<i>보이다</i> (görünmek) ve <i>들리다</i> (duyulmak) Türkçeye çoğu zaman “görüyorum, duyuyorum” diye çevrilir: <i>여기서 바다가 보여요</i> (Buradan deniz görünüyor; denizi görüyorum). <i>잘 안 들려요</i> (İyi duyamıyorum, ses gelmiyor). Telefonda çok kullanılır: <i>제 목소리 들려요?</i> (Sesim geliyor mu?)" },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["문을 열렸어요.|muneul yeollyeosseoyo", "문이 열렸어요.|muni yeollyeosseoyo", "edilgende özne eki -이/가"],
          ["소리가 잘 안 [들어]{져}요.|soriga jal an deureojyeoyo", "소리가 잘 안 [들]{려}요.|soriga jal an deullyeoyo", "듣다'nın edilgeni 들리다"],
          ["아이가 엄마에 안겼어요.|aiga eommae angyeosseoyo", "아이가 엄마에게 안겼어요.|aiga eommaege angyeosseoyo", "canlı: -에게"],
          ["회의가 {취소했어요}.|hoeuiga chwisohaesseoyo", "회의가 {취소됐어요}.|hoeuiga chwisodwaesseoyo", "-하다 → -되다: iptal edildi"]
        ] },
        { t: "diyalog", h: "Silinen fotoğraflar", l: [
          ["지수", "어? 휴대폰이 안 [켜]{져}요.", "Aa? Telefon açılmıyor.", "eo? hyudaeponi an kyeojyeoyo"],
          ["현우", "배터리가 없는 것 같아요. 충전해 보세요.", "Şarjı bitmiş galiba. Şarj edip bir deneyin.", "baeteoriga eomneun geot gatayo. chungjeonhae boseyo"],
          ["지수", "아, 이제 [켜]{졌}어요. 그런데 사진이 다 [지워]{졌}어요!", "Ah, şimdi açıldı. Ama fotoğrafların hepsi silinmiş!", "a, ije kyeojyeosseoyo. geureonde sajini da jiwojyeosseoyo!"],
          ["현우", "걱정 마세요. 사진은 클라우드에 자동으로 [저장]{돼}요.", "Merak etmeyin. Fotoğraflar buluta otomatik kaydediliyor.", "geokjeong maseyo. sajineun keullaudeue jadongeuro jeojangdwaeyo"],
          ["지수", "정말 다행이에요. 여기 다 [보]{여}요!", "Çok şükür. Hepsi burada görünüyor!", "jeongmal dahaengieyo. yeogi da boyeoyo!"]
        ] },
        { t: "ornek", l: [
          ["창문으로 남산 타워가 [보]{여}요.", "Pencereden Namsan Kulesi [görün]{üyor}.", "changmuneuro namsan tawoga boyeoyo"],
          ["옆집에서 음악 소리가 [들]{려}요.", "Yan evden müzik sesi [duy]{uluyor}.", "yeopjibeseo eumak soriga deullyeoyo"],
          ["도둑이 경찰에게 [잡]{혔}어요.", "Hırsız polis tarafından [yakala]{ndı}.", "dodugi gyeongcharege japyeosseoyo"],
          ["바람 때문에 문이 [닫]{혔}어요.", "Rüzgâr yüzünden kapı [kapa]{ndı}.", "baram ttaemune muni dachyeosseoyo"],
          ["이 책은 전 세계에서 많이 [팔]{렸}어요.", "Bu kitap bütün dünyada çok [sat]{ıldı}.", "i chaegeun jeon segyeeseo mani pallyeosseoyo"],
          ["갑자기 전화가 [끊]{겼}어요.", "Telefon birden [kes]{ildi}.", "gapjagi jeonhwaga kkeunkyeosseoyo"],
          ["비 때문에 경기가 [취소]{됐}어요.", "Yağmur yüzünden maç iptal [edil]{di}.", "bi ttaemune gyeonggiga chwisodwaesseoyo"],
          ["이 건물은 100년 전에 [지어]{졌}어요.", "Bu bina 100 yıl önce [yap]{ıldı}.", "i geonmureun baengnyeon jeone jieojyeosseoyo"]
        ] },
        { t: "ozet", l: [
          "Edilgen: eylemden etkilenen özne olur; -을/를 → -이/가.",
          "<b>-이-</b> (보이다), <b>-히-</b> (잡히다), <b>-리-</b> (열리다), <b>-기-</b> (안기다): fiile göre ezberlenir.",
          "Bu ekleri almayan fiiller: <b>-아/어지다</b> (만들어지다, 꺼지다).",
          "-하다 fiilleri: <b>-되다</b> (사용되다, 취소되다).",
          "Eylemi yapan: canlıysa <b>-에게 / -한테</b>, şey ya da sebepse <b>-에</b>."
        ] }
      ],
      test: [
        { s: "열다 (açmak) → edilgen?", o: ["열이다", "열리다", "열히다"], d: 1, a: "ㄹ gövde çoğunlukla -리- alır: 열리다." },
        { s: "잡다 (yakalamak) → edilgen?", o: ["잡히다", "잡리다", "잡기다"], d: 0, a: "ㅂ gövde: -히- → 잡히다." },
        { s: "“Buradan deniz görünüyor.”", o: ["여기서 바다가 보여요.", "여기서 바다를 보여요.", "여기서 바다가 봐져요."], d: 0, a: "Edilgende özne eki -이/가; 보다 → 보이다." },
        { s: "듣다 (duymak) → edilgen?", o: ["듣히다", "들리다", "들어지다"], d: 1, a: "ㄷ düzensiz: 들리다." },
        { s: "Rüzgârdan kapı kapandı: 바람___ 문이 닫혔어요.", o: ["에", "에게", "을"], d: 0, a: "Sebep ya da şey: -에. Canlılar için -에게." },
        { s: "만들다 → edilgen?", o: ["만들리다", "만들어지다", "만들히다"], d: 1, a: "-이/히/리/기- almayan fiil: -아/어지다." },
        { s: "사용하다 (kullanmak) → edilgen?", o: ["사용되다", "사용해지다", "사용히다"], d: 0, a: "-하다 → -되다." },
        { s: "“Hırsız polis tarafından yakalandı.”", o: ["도둑이 경찰에게 잡혔어요.", "도둑을 경찰에게 잡혔어요.", "도둑이 경찰에게 잡았어요."], d: 0, a: "Özne -이/가, yapan kişi -에게, edilgen fiil 잡히다." },
        { s: "끄다 (söndürmek) → “Işık söndü.”", o: ["불이 꺼졌어요.", "불이 끄였어요.", "불을 꺼졌어요."], d: 0, a: "끄다 + -어지다 → 꺼지다; özne eki -이." },
        { s: "Telefonda “Sesim geliyor mu?”", o: ["제 목소리 들려요?", "제 목소리 들어요?", "제 목소리 들어져요?"], d: 0, a: "들리다: duyulmak." }
      ]
    },
    {
      id: "ko-t3-05", seviye: "TOPIK 3", sure: 12,
      baslik: "Değişim: -아/어지다 ve -게 되다",
      kisa: "추워지다, 예뻐지다 · 가게 되다, 좋아하게 되다",
      bolumler: [
        { t: "metin", m: "Ders 34'te -아/어지다'yı fiillerde edilgen olarak gördün (<i>만들어지다</i>). Aynı ek <b>sıfatlara</b> gelince “gitgide … olmak, …-laşmak” anlamı verir: <i>춥다 → <b>추워지다</b></i> (soğumak). Fiillerle kurulan <b>-게 되다</b> ise kişinin kendi kararıyla değil, koşulların sonucunda ortaya çıkan değişimi anlatır: <i>한국에 <b>살게 됐어요</b></i> (Kore'de yaşamaya başladım; işler öyle gelişti). <b>Kullanım alanı:</b> her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede durum değişimi <b>-laşmak, -leşmek</b> gibi eklerle ya da “… olmak, …-meye başlamak” ile anlatılır. Korecede sıfata -아/어지다, fiile -게 되다 gelir.", l: [
          ["Hava [soğu]{du}.", "날씨가 [추워]{졌어요}.", "nalssiga chuwojyeosseoyo"],
          ["Korece [kolay]{laştı}.", "한국어가 [쉬워]{졌어요}.", "hangugeoga swiwojyeosseoyo"],
          ["İstanbul'a [taşın]{mam gerekti}.", "이스탄불로 [이사하]{게 됐어요}.", "iseutanbullo isahage dwaesseoyo"],
          ["Kimchi'yi [sev]{meye başladım}.", "김치를 [좋아하]{게 됐어요}.", "gimchireul joahage dwaesseoyo"]
        ] },
        { t: "tablo", h: "Sıfat + -아/어지다", bas: ["Sıfat", "-아/어지다", "Anlamı"], s: [
          ["춥다|chupda", "[추워]{지다}|chuwojida", "soğumak"],
          ["덥다|deopda", "[더워]{지다}|deowojida", "ısınmak (hava)"],
          ["예쁘다|yeppeuda", "[예뻐]{지다}|yeppeojida", "güzelleşmek"],
          ["많다|manta", "[많아]{지다}|manajida", "çoğalmak"],
          ["건강하다|geonganghada", "[건강해]{지다}|geonganghaejida", "sağlığı düzelmek"],
          ["바쁘다|bappeuda", "[바빠]{지다}|bappajida", "yoğunlaşmak"],
          ["좋다|jota", "[좋아]{지다}|joajida", "iyileşmek, düzelmek"]
        ] },
        { t: "ipucu", h: "Sıfat fiile döner", m: "-아/어지다 alan sıfat artık <b>fiil</b> gibi çekilir. Bu yüzden süren değişimi <b>-고 있다</b> ile anlatabilirsin: <i>날씨가 점점 <b>추워지고 있어요</b></i> (Hava gitgide soğuyor). İsim önünde de fiil eki alır: <i>예뻐<b>진</b> 얼굴</i> (güzelleşmiş yüz). <b>점점</b> (gitgide) ve <b>갈수록</b> (gittikçe) ile çok sık kullanılır." },
        { t: "metin", h: "-게 되다: kendiliğinden gelen sonuç", m: "<b>-게 되다</b> fiil gövdesine gelir ve bir durumun dış koşullar, şans ya da zamanla öyle sonuçlandığını anlatır: <i>회사 일 때문에 부산에 <b>가게 됐어요</b></i> (İş yüzünden Busan'a gitmem gerekti). Bir şeyi yapabilir hâle gelmeyi ya da zamanla sevmeyi de anlatır: <i>이제 한국 드라마를 자막 없이 <b>보게 됐어요</b></i> (Artık Kore dizilerini altyazısız izleyebiliyorum), <i>처음에는 싫었는데 <b>좋아하게 됐어요</b></i> (Başta sevmiyordum ama sevdim). Resmî konuşmada kendi kararını alçakgönüllü söylemek için de kullanılır: <i>다음 달에 결혼하게 됐습니다</i> (Gelecek ay evleniyorum)." },
        { t: "tablo", h: "Üç değişim yolu", bas: ["Kalıp", "Neye eklenir?", "Örnek"], s: [
          ["-아/어지다", "sıfat", "날씨가 [따뜻해]{졌어요}.|nalssiga ttatteutaejyeosseoyo"],
          ["-게 되다", "fiil", "한국에서 [일하]{게 됐어요}.|hangugeseo ilhage dwaesseoyo"],
          ["N이/가 되다", "isim", "[의사]{가 됐어요}.|uisaga dwaesseoyo"]
        ] },
        { t: "ipucu", h: "좋아지다'nın iki anlamı", m: "<i>좋아지다</i> iki anlama gelir: “iyileşmek, düzelmek” (<i>날씨가 좋아졌어요</i>: Hava düzeldi) ve -이/가 ile “sevmeye başlamak” (<i>한국이 좋아졌어요</i>: Kore'yi sevmeye başladım). Nesne eki -을/를 kullanacaksan <i>좋아하게 되다</i> gerekir: <i>한국을 좋아하게 됐어요</i>." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-아/어지다", "Sıfatlarla: durum değişimi (soğumak, güzelleşmek)"],
          ["-게 되다", "Fiillerle: koşulların getirdiği sonuç, zamanla gelen yetenek ya da alışkanlık"],
          ["Zaman eki", "지다 / 되다 çekilir: 추워졌어요, 가게 될 거예요|chuwojyeosseoyo, gage doel geoyo"],
          ["Özne", "Kısıt yok; 1. kişi de olur"],
          ["Kullanım", "Her ikisi; haberlerde -게 되었다 çok sık"]
        ] },
        { t: "ipucu", h: "-아/어지다 mı, -게 되다 mı?", m: "Kısa kural: <b>sıfat → -아/어지다</b>, <b>fiil → -게 되다</b>. Fiile -아/어지다 eklenirse 34. dersteki edilgen olur: <i>만들어졌어요</i> (yapıldı). Sıfat + -게 되다 (<i>예쁘게 됐어요</i>) ise pek kullanılmaz; doğal olan <i>예뻐졌어요</i>'dur." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["날씨가 [춥]{게 됐어요}.|nalssiga chupge dwaesseoyo", "날씨가 [추워]{졌어요}.|nalssiga chuwojyeosseoyo", "sıfat: -아/어지다"],
          ["한국 음식을 [좋아]{졌어요}.|hanguk eumsigeul joajyeosseoyo", "한국 음식을 [좋아하]{게 됐어요}.|hanguk eumsigeul joahage dwaesseoyo", "-을/를 ile: 좋아하게 되다"],
          ["요즘 점점 [바쁘]{고 있어요}.|yojeum jeomjeom bappeugo isseoyo", "요즘 점점 [바빠]{지고 있어요}.|yojeum jeomjeom bappajigo isseoyo", "sıfat -고 있다 almaz; önce -아/어지다"],
          ["의사를 됐어요.|uisareul dwaesseoyo", "의사가 됐어요.|uisaga dwaesseoyo", "되다: -이/가 ile"]
        ] },
        { t: "diyalog", h: "Seul'de bir yıl", l: [
          ["민수", "서울 생활은 어때요? 한국어가 많이 [좋아]{졌네요}.", "Seul hayatı nasıl? Korecen çok gelişmiş.", "seoul saenghwareun eottaeyo? hangugeoga mani joajyeonneyo"],
          ["엘리프", "고마워요. 처음에는 힘들었는데 지금은 많이 [편해]{졌어요}.", "Teşekkürler. Başta zordu ama şimdi çok rahatladım.", "gomawoyo. cheoeumeneun himdeureonneunde jigeumeun mani pyeonhaejyeosseoyo"],
          ["민수", "매운 음식은요? 처음에는 잘 못 먹었잖아요.", "Ya acı yemekler? Başta pek yiyemiyordun ya.", "maeun eumsigeunyo? cheoeumeneun jal mot meogeotjanayo"],
          ["엘리프", "네, 그런데 이제는 김치찌개를 [좋아하]{게 됐어요}.", "Evet, ama artık kimchi güvecini seviyorum.", "ne, geureonde ijeneun gimchijjigaereul joahage dwaesseoyo"],
          ["민수", "와, 이제 진짜 한국 사람이 다 [됐]{네요}!", "Vay, artık tam bir Koreli olmuşsun!", "wa, ije jinjja hanguk sarami da dwaenneyo!"],
          ["엘리프", "하하. 그리고 다음 달부터 한국 회사에서 [일하]{게 됐어요}.", "Haha. Bir de gelecek aydan itibaren bir Kore şirketinde çalışacağım.", "haha. geurigo daeum dalbuteo hanguk hoesaeseo ilhage dwaesseoyo"]
        ] },
        { t: "ornek", l: [
          ["봄이 되니까 날씨가 [따뜻해]{졌어요}.", "Bahar gelince hava [ısın]{dı}.", "bomi doenikka nalssiga ttatteutaejyeosseoyo"],
          ["운동을 시작한 후에 [건강해]{졌어요}.", "Spora başladıktan sonra [sağlığ]{ım düzeldi}.", "undongeul sijakan hue geonganghaejyeosseoyo"],
          ["요즘 물가가 많이 [비싸]{졌어요}.", "Bu aralar fiyatlar çok [pahalı]{laştı}.", "yojeum mulgaga mani bissajyeosseoyo"],
          ["도시가 점점 [복잡해]{지고 있어요}.", "Şehir gitgide [kalabalık]{laşıyor}.", "dosiga jeomjeom bokjapaejigo isseoyo"],
          ["회사 일 때문에 런던으로 출장을 [가]{게 됐어요}.", "İş yüzünden Londra'ya iş seyahatine [git]{mem gerekti}.", "hoesa il ttaemune reondeoneuro chuljangeul gage dwaesseoyo"],
          ["친구 덕분에 등산을 [좋아하]{게 됐어요}.", "Arkadaşım sayesinde dağ yürüyüşünü [sev]{meye başladım}.", "chingu deokbune deungsaneul joahage dwaesseoyo"],
          ["이제 매운 음식도 잘 [먹]{게 됐어요}.", "Artık acı yemekleri de rahatça [yi]{yebiliyorum}.", "ije maeun eumsikdo jal meokge dwaesseoyo"],
          ["제 동생이 내년에 대학생이 [돼]{요}.", "Kardeşim seneye üniversiteli [ol]{uyor}.", "je dongsaengi naenyeone daehaksaengi dwaeyo"]
        ] },
        { t: "ozet", l: [
          "Sıfat + <b>-아/어지다</b>: durum değişimi (<i>추워지다, 예뻐지다</i>).",
          "-아/어지다 alan sıfat fiil gibi çekilir: <i>추워지고 있어요, 예뻐진 얼굴</i>.",
          "Fiil + <b>-게 되다</b>: koşulların ya da zamanın getirdiği sonuç (<i>가게 됐어요, 좋아하게 됐어요</i>).",
          "İsim + <b>-이/가 되다</b>: … olmak (<i>의사가 됐어요</i>).",
          "-을/를 alan fiil -아/어지다 ile kurulmaz: <i>김치를 좋아하게 됐어요</i>."
        ] }
      ],
      test: [
        { s: "춥다 → değişim?", o: ["춥게 되다", "추워지다", "춥어지다"], d: 1, a: "Sıfat: -아/어지다 → 추워지다." },
        { s: "“Hava ısındı.”", o: ["날씨가 따뜻해졌어요.", "날씨가 따뜻하졌어요.", "날씨가 따뜻했어졌어요."], d: 0, a: "하다 + 어지다 → 해지다: 따뜻해졌어요." },
        { s: "“İş yüzünden Busan'a gitmem gerekti.”", o: ["일 때문에 부산에 가졌어요.", "일 때문에 부산에 가게 됐어요.", "일 때문에 부산에 가 됐어요."], d: 1, a: "Koşulların getirdiği sonuç: -게 되다." },
        { s: "“Kimchi'yi sevmeye başladım.”", o: ["김치를 좋아졌어요.", "김치를 좋아하게 됐어요.", "김치를 좋아하졌어요."], d: 1, a: "-을/를 ile: 좋아하게 되다." },
        { s: "“Fiyatlar gitgide pahalılaşıyor.”", o: ["물가가 점점 비싸고 있어요.", "물가가 점점 비싸지고 있어요.", "물가가 점점 비싸게 하고 있어요."], d: 1, a: "Sıfat önce -아/어지다 alır, sonra -고 있다." },
        { s: "“Kardeşim doktor oldu.”", o: ["동생이 의사가 됐어요.", "동생이 의사를 됐어요.", "동생이 의사해졌어요."], d: 0, a: "İsim + -이/가 되다." },
        { s: "예쁘다 → “güzelleşti”?", o: ["예뻐졌어요", "예쁘졌어요", "예쁘게 졌어요"], d: 0, a: "ㅡ düşer: 예쁘 + 어지다 → 예뻐지다." },
        { s: "“Artık Koreceyi iyi konuşabiliyorum.”", o: ["이제 한국어를 잘하게 됐어요.", "이제 한국어를 잘해졌어요.", "이제 한국어가 잘하게 됐어요."], d: 0, a: "Fiil + -게 되다: yapabilir hâle gelmek." },
        { s: "-게 되다 hangi durumu anlatır?", o: ["Kişinin kesin kararını", "Koşulların ya da zamanın getirdiği sonucu", "Geçmişteki alışkanlığı"], d: 1, a: "-게 되다: kendiliğinden gelen sonuç." },
        { s: "많다 → değişim (geçmiş)?", o: ["많아졌어요", "많해졌어요", "많어졌어요"], d: 0, a: "ㅏ'lı gövde: 많 + 아지다 → 많아졌어요." }
      ]
    },
    {
      id: "ko-t3-06", seviye: "TOPIK 3", sure: 12,
      baslik: "Ettirgen çatı: 먹이다, 입히다, 웃기다, -게 하다",
      kisa: "먹이다, 입히다, 울리다, 웃기다, 재우다, 늦추다 · 가게 하다",
      bolumler: [
        { t: "metin", m: "Ettirgen çatı birine bir şey yaptırmayı ya da bir şeyi bir duruma getirmeyi anlatır: <i>아이가 밥을 먹어요</i> (Çocuk yemek yiyor) → <i>엄마가 아이에게 밥을 <b>먹여요</b></i> (Anne çocuğa yemek yediriyor). İki yol var: bazı fiillere gelen <b>-이-, -히-, -리-, -기-, -우-, -구-, -추-</b> ekleri ve her fiille kurulan <b>-게 하다</b>. Eklerin bazıları 34. dersteki edilgen eklerle aynıdır; farkı cümle yapısı gösterir. <b>Kullanım alanı:</b> her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçedeki ettirgen ekleri <b>-dır, -t, -ır</b> Korecedeki eklere çok benzer: ikisi de fiil gövdesine gelir ve yeni bir fiil yapar.", l: [
          ["Çocuğa yemek [ye]{dirdim}.", "아이에게 밥을 [먹]{였}어요.", "aiege babeul meogyeosseoyo"],
          ["Bebeği [uyu]{ttum}.", "아기를 [재]{웠}어요.", "agireul jaewosseoyo"],
          ["Arkadaşımı [gül]{dürdüm}.", "친구를 [웃]{겼}어요.", "chingureul utgyeosseoyo"],
          ["Kardeşime odayı [temizle]{ttim}.", "동생에게 방을 [청소하]{게 했}어요.", "dongsaengege bangeul cheongsohage haesseoyo"]
        ] },
        { t: "tablo", h: "Yedi ek", bas: ["Ek", "Fiil", "Ettirgen"], s: [
          ["{-이-}", "먹다 (yemek)|meokda", "[먹]{이}다 (yedirmek)|meogida"],
          ["{-이-}", "보다 (görmek)|boda", "[보]{이}다 (göstermek)|boida"],
          ["{-히-}", "입다 (giymek)|ipda", "[입]{히}다 (giydirmek)|ipida"],
          ["{-히-}", "앉다 (oturmak)|anda", "[앉]{히}다 (oturtmak)|anchida"],
          ["{-리-}", "울다 (ağlamak)|ulda", "[울]{리}다 (ağlatmak)|ullida"],
          ["{-리-}", "알다 (bilmek)|alda", "[알]{리}다 (bildirmek)|allida"],
          ["{-기-}", "웃다 (gülmek)|utda", "[웃]{기}다 (güldürmek)|utgida"],
          ["{-기-}", "벗다 (çıkarmak)|beotda", "[벗]{기}다 (soymak, çıkartmak)|beotgida"],
          ["{-우-}", "자다 (uyumak)|jada", "[재]{우}다 (uyutmak)|jaeuda"],
          ["{-우-}", "타다 (binmek)|tada", "[태]{우}다 (bindirmek)|taeuda"],
          ["{-구-}", "달다 (kızmak, metal)|dalda", "[달]{구}다 (kızdırmak; nadir)|dalguda"],
          ["{-추-}", "늦다 (gecikmek)|neutda", "[늦]{추}다 (geciktirmek)|neutchuda"],
          ["{-추-}", "낮다 (alçak olmak)|natda", "[낮]{추}다 (alçaltmak, düşürmek)|natchuda"]
        ] },
        { t: "ipucu", h: "Ünlüsü değişen fiiller", m: "-우- alan bazı fiillerde gövdenin ünlüsü de değişir: <i>자다 → <b>재우다</b></i> (uyutmak), <i>타다 → <b>태우다</b></i> (bindirmek; ayrıca yakmak), <i>서다 → <b>세우다</b></i> (durdurmak, dikmek), <i>깨다 → <b>깨우다</b></i> (uyandırmak), <i>비다 → <b>비우다</b></i> (boşaltmak). Bunları kelime gibi ezberlemek en kolayı." },
        { t: "metin", h: "보이다: görünmek mi, göstermek mi?", m: "34. dersteki <i>보이다</i> (görünmek) ettirgen olarak “göstermek” anlamına da gelir. Farkı cümle yapısı gösterir: edilgende nesne yoktur (<i>산이 <b>보여요</b></i>: Dağ görünüyor); ettirgende nesne ve <b>-에게</b> vardır (<i>친구에게 사진을 <b>보여</b> 줬어요</i>: Arkadaşıma fotoğrafı gösterdim). Aynı durum <i>읽히다</i> (okunmak / okutmak) ve <i>안기다</i> (kucaklanmak / kucağına vermek) için de geçerlidir." },
        { t: "metin", h: "-게 하다: her fiille", m: "Ettirgen eki olmayan fiillerde <b>-게 하다</b> kullanılır: <i>가다 → <b>가게 하다</b></i> (göndermek, gitmesini sağlamak), <i>쉬다 → <b>쉬게 하다</b></i> (dinlendirmek). Ekli fiillerle de kurulabilir ama anlam farklıdır: <b>ek</b> çoğunlukla <b>doğrudan</b> yapılan işi anlatır (<i>아이에게 밥을 <b>먹였어요</b></i>: Çocuğa yemeği ben yedirdim). <b>-게 하다</b> ise <b>dolaylı</b>dır: söyleyip yaptırırsın (<i>아이에게 밥을 <b>먹게 했어요</b></i>: Çocuğun yemek yemesini sağladım)." },
        { t: "tablo", h: "Doğrudan ve dolaylı", bas: ["Dil", "Doğrudan: ek", "Dolaylı: -게 하다"], s: [
          ["Korece", "아이에게 옷을 [입]{혔}어요.|aiege oseul ipyeosseoyo", "아이에게 옷을 [입]{게 했}어요.|aiege oseul ipge haesseoyo"],
          ["Türkçe", "Çocuğa elbiseyi giydirdim (kendim).", "Çocuğa elbiseyi giydirttim (o giydi)."],
          ["Korece", "아기를 [재]{웠}어요.|agireul jaewosseoyo", "아이를 일찍 [자]{게 했}어요.|aireul iljjik jage haesseoyo"],
          ["Türkçe", "Bebeği uyuttum (kucağımda).", "Çocuğun erken yatmasını sağladım."]
        ] },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["Neye eklenir?", "Ekler: belli fiiller (ezber); -게 하다: bütün fiiller"],
          ["-하다 fiilleri", "-게 하다 ya da -시키다: 공부시키다, 청소시키다|gongbusikida, cheongsosikida"],
          ["Yaptırılan kişi", "-에게 / -한테 ya da -을/를|-ege / -hante, -eul/reul"],
          ["Geçmiş eki", "Ettirgen ekten ya da 하다'dan sonra: 먹였어요, 가게 했어요|meogyeosseoyo, gage haesseoyo"],
          ["Anlam", "Ek: doğrudan; -게 하다: dolaylı, söyleyerek"],
          ["Kullanım", "Her ikisi"]
        ] },
        { t: "ipucu", h: "Türkçede de iki kat", m: "Türkçe bu farkı çift ettirgenle verir: <b>giydirdim</b> (kendim giydirdim) ↔ <b>giydirttim</b> (birine giydirttim). Korecede ikinci anlam için -게 하다 kullanılır. <i>-게 하다</i> izin anlamı da taşıyabilir: <i>엄마가 게임을 못 <b>하게 했어요</b></i> (Annem oyun oynamama izin vermedi)." },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["아이에게 밥을 [먹]{었}어요.|aiege babeul meogeosseoyo", "아이에게 밥을 [먹]{였}어요.|aiege babeul meogyeosseoyo", "yedirmek: 먹이다"],
          ["아기를 [자]{웠}어요.|agireul jawosseoyo", "아기를 [재]{웠}어요.|agireul jaewosseoyo", "자다 → 재우다 (ünlü değişir)"],
          ["회의 시간을 30분 [늦]{혔}어요.|hoeui siganeul samsipbun neuchyeosseoyo", "회의 시간을 30분 [늦]{췄}어요.|hoeui siganeul samsipbun neutchwosseoyo", "늦다 → 늦추다"],
          ["친구에게 사진을 [봤]{어요}.|chinguege sajineul bwasseoyo", "친구에게 사진을 [보여] 줬어요.|chinguege sajineul boyeo jwosseoyo", "göstermek: 보이다 / 보여 주다"],
          ["의사가 저를 [쉬]{였}어요.|uisaga jeoreul swiyeosseoyo", "의사가 저를 [쉬]{게 했}어요.|uisaga jeoreul swige haesseoyo", "쉬다'nın ettirgen eki yok: -게 하다"]
        ] },
        { t: "diyalog", h: "Telaşlı bir sabah", l: [
          ["아내", "여보, 애들 [깨]{웠}어요?", "Hayatım, çocukları uyandırdın mı?", "yeobo, aedeul kkaewosseoyo?"],
          ["남편", "네, 지금 민지한테 옷을 [입]{히}고 있어요.", "Evet, şimdi Minji'yi giydiriyorum.", "ne, jigeum minjihante oseul ipigo isseoyo"],
          ["아내", "준호는요? 아침을 [먹]{였}어요?", "Ya Junho? Kahvaltısını yedirdin mi?", "junhoneunyo? achimeul meogyeosseoyo?"],
          ["남편", "준호는 혼자 [먹]{게 했}어요. 이제 다 컸잖아요.", "Junho'ya kendi kendine yedirttim. Artık büyüdü ya.", "junhoneun honja meokge haesseoyo. ije da keotjanayo"],
          ["아내", "좋아요. 학교 앞에서 차를 잠깐 [세]{워} 주세요.", "Güzel. Okulun önünde arabayı bir dakika durdurur musun?", "joayo. hakgyo apeseo chareul jamkkan sewo juseyo"],
          ["남편", "알겠어요. 아, 선생님께 준호 생일 파티도 [알]{려} 드려야 해요.", "Tamam. Ha, öğretmene Junho'nun doğum günü partisini de haber vermemiz lazım.", "algesseoyo. a, seonsaengnimkke junho saengil patido allyeo deuryeoya haeyo"]
        ] },
        { t: "ornek", l: [
          ["엄마가 아기에게 우유를 [먹]{여}요.", "Anne bebeğe süt [iç]{iriyor}.", "eommaga agiege uyureul meogyeoyo"],
          ["그 영화가 저를 [울]{렸}어요.", "O film beni [ağla]{ttı}.", "geu yeonghwaga jeoreul ullyeosseoyo"],
          ["민수 씨는 항상 사람들을 [웃]{겨}요.", "Minsu herkesi hep [gül]{dürür}.", "minsu ssineun hangsang saramdeureul utgyeoyo"],
          ["손님을 소파에 [앉]{혀} 주세요.", "Misafiri koltuğa [otur]{tun} lütfen.", "sonnimeul sopae anchyeo juseyo"],
          ["결과가 나오면 바로 [알]{려} 드릴게요.", "Sonuç çıkınca hemen [bildir]{eceğim}.", "gyeolgwaga naomyeon baro allyeo deurilgeyo"],
          ["너무 더우니까 에어컨 온도를 좀 [낮]{춰} 주세요.", "Çok sıcak, klimanın derecesini biraz [düşür]{ün} lütfen.", "neomu deounikka eeokeon ondoreul jom natchwo juseyo"],
          ["선생님이 학생들에게 책을 [읽]{혔}어요.", "Öğretmen öğrencilere kitap [oku]{ttu}.", "seonsaengnimi haksaengdeurege chaegeul ilkyeosseoyo"],
          ["의사가 환자를 일주일 동안 [쉬]{게 했}어요.", "Doktor hastayı bir hafta [dinlen]{dirdi}.", "uisaga hwanjareul iljuil dongan swige haesseoyo"]
        ] },
        { t: "ozet", l: [
          "Ettirgen ekler: <b>-이-</b> (먹이다), <b>-히-</b> (입히다), <b>-리-</b> (울리다), <b>-기-</b> (웃기다), <b>-우-</b> (재우다), <b>-구-</b> (달구다), <b>-추-</b> (늦추다).",
          "Ek almayan fiiller: <b>-게 하다</b> (가게 하다, 쉬게 하다); -하다 fiilleri: <b>-시키다</b> da olur.",
          "Ek: doğrudan yapılan iş; -게 하다: dolaylı, söyleyerek (giydirdim ↔ giydirttim).",
          "Yaptırılan kişi <b>-에게 / -한테</b> ya da <b>-을/를</b> alır.",
          "<i>보이다</i>: nesnesiz “görünmek”, nesneli “göstermek”."
        ] }
      ],
      test: [
        { s: "먹다 → ettirgen?", o: ["먹히다", "먹이다", "먹기다"], d: 1, a: "먹이다 = yedirmek. 먹히다 edilgendir (yenmek)." },
        { s: "자다 → ettirgen (uyutmak)?", o: ["자우다", "재우다", "자이다"], d: 1, a: "Ünlü değişir: 재우다." },
        { s: "웃다 → ettirgen (güldürmek)?", o: ["웃기다", "웃히다", "웃리다"], d: 0, a: "웃기다." },
        { s: "“Arkadaşıma fotoğrafı gösterdim.”", o: ["친구에게 사진을 보여 줬어요.", "친구에게 사진을 봤어요.", "친구에게 사진이 보였어요."], d: 0, a: "Göstermek: 보이다 / 보여 주다." },
        { s: "앉다 → ettirgen (oturtmak)?", o: ["앉이다", "앉히다", "앉기다"], d: 1, a: "앉히다." },
        { s: "“Kardeşime odayı temizlettim.”", o: ["동생에게 방을 청소하게 했어요.", "동생에게 방을 청소해졌어요.", "동생에게 방을 청소였어요."], d: 0, a: "-게 하다 (ya da 청소시켰어요)." },
        { s: "늦다 → ettirgen (geciktirmek)?", o: ["늦이다", "늦추다", "늦우다"], d: 1, a: "-추-: 늦추다." },
        { s: "“O film beni ağlattı.”", o: ["그 영화가 저를 울렸어요.", "그 영화가 저를 울었어요.", "그 영화가 저를 울게 됐어요."], d: 0, a: "울다 → 울리다." },
        { s: "Hangisi dolaylı ettirgendir?", o: ["아이에게 옷을 입혔어요.", "아이에게 옷을 입게 했어요.", "아이가 옷을 입었어요."], d: 1, a: "-게 하다: söyleyerek yaptırma." },
        { s: "“Annem oyun oynamama izin vermedi.”", o: ["엄마가 게임을 못 하게 했어요.", "엄마가 게임을 못 했어요.", "엄마가 게임을 안 시켰어요."], d: 0, a: "못 하게 하다: engellemek, izin vermemek." }
      ]
    },
    {
      id: "ko-t3-07", seviye: "TOPIK 3", sure: 12,
      baslik: "Olumsuz sebep: -느라고, -는 바람에, -(으)ㄴ/는 탓에",
      kisa: "공부하느라고 · 넘어지는 바람에 · 비가 온 탓에 · 덕분에",
      bolumler: [
        { t: "metin", m: "A2'de sebebi <b>-아/어서</b> (Ders 13), <b>-(으)니까</b> ve <b>-기 때문에</b> (Ders 17) ile anlattın. Bunlar tarafsızdır. TOPIK 3'te sebebin <b>niteliğini</b> de söyleyen üç ek öğreniyorsun: kendi meşguliyetin (<b>-느라고</b>), beklenmedik bir olay (<b>-는 바람에</b>) ve suçlama tonu (<b>-(으)ㄴ/는 탓에</b>). Üçünün de sonucu çoğunlukla olumsuzdur. Olumlu sonuç için <b>덕분에</b> (sayesinde) kullanılır. <b>Kullanım alanı:</b> -느라고 ve -는 바람에 daha çok konuşma; 탓에 ve 덕분에 her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede hepsi “yüzünden, …-dığı için” diye çevrilir; farkı bağlam verir. Korecede farkı ekin kendisi taşır.", l: [
          ["Ders [çalış]{maktan} uyuyamadım.", "[공부하]{느라고} 못 잤어요.", "gongbuhaneurago mot jasseoyo"],
          ["[Düş]{tüğüm için} geç kaldım.", "[넘어지]{는 바람에} 늦었어요.", "neomeojineun barame neujeosseoyo"],
          ["Yağmur [yağ]{dığı için} maç iptal edildi.", "비가 [온] {탓에} 경기가 취소됐어요.", "biga on tase gyeonggiga chwisodwaesseoyo"],
          ["Senin {sayende} başardım.", "네 {덕분에} 성공했어요.", "ne deokbune seonggonghaesseoyo"]
        ] },
        { t: "tablo", h: "Kurulum", bas: ["Ek", "Fiil", "Sıfat", "İsim"], s: [
          ["-느라고", "[가]{느라고}|ganeurago", "—", "—"],
          ["-는 바람에", "[가]{는 바람에}|ganeun barame", "—", "—"],
          ["-(으)ㄴ/는 탓에", "[간] {탓에}, [가]{는 탓에}|gan tase, ganeun tase", "[바쁜] {탓에}|bappeun tase", "감기 {탓에}|gamgi tase"],
          ["-(으)ㄴ/는 덕분에", "[도와준] {덕분에}|dowajun deokbune", "[좋은] {덕분에}|joeun deokbune", "친구 {덕분에}|chingu deokbune"]
        ] },
        { t: "tablo", h: "Nüans tablosu: dört sebep", bas: ["Ek", "Sebep nasıl?", "Sonuç", "Kısıt"], s: [
          ["-기 때문에", "tarafsız, her türlü sebep", "olumlu ya da olumsuz", "kısıt yok; geçmiş eki alır"],
          ["-느라고", "kendi bilinçli meşguliyetin", "olumsuz (yapamadım, geç kaldım)", "yalnız fiil; aynı özne; geçmiş eki yok; emir/öneri yok"],
          ["-는 바람에", "beklenmedik, ani olay", "olumsuz", "yalnız fiil; ana cümle geçmiş; emir/öneri yok"],
          ["-(으)ㄴ/는 탓에", "suçlanan sebep", "olumsuz", "fiil, sıfat, isim; olumlu sonuçta 덕분에"]
        ] },
        { t: "ipucu", h: "-느라고: aynı özne, geçmiş eki yok", m: "-느라고'da iki cümlenin öznesi aynıdır ve sebep, kişinin isteyerek yaptığı bir iştir: <i>(제가) 드라마를 <b>보느라고</b> (제가) 숙제를 못 했어요</i> (Dizi izlemekten ödevimi yapamadım). Geçmiş eki gövdeye gelmez: <i>봤느라고</i> ✗. Ana cümlede emir ya da öneri olmaz. Konuşmada çoğunlukla <b>-느라</b> diye kısalır. Sık kalıp: <i>준비하느라 <b>수고했어요</b></i> (Hazırlıkla çok uğraştın, emeğine sağlık)." },
        { t: "ipucu", h: "-는 바람에: beklenmedik olay", m: "-는 바람에 sebebin ani ve beklenmedik olduğunu, çoğunlukla kişinin kontrolü dışında kaldığını vurgular: <i>갑자기 비가 <b>오는 바람에</b> 옷이 다 젖었어요</i> (Birden yağmur bastırınca üstüm başım ıslandı). Olay geçmişte olsa da ek her zaman <b>-는</b> biçimindedir; zaman ana cümleden anlaşılır." },
        { t: "metin", h: "-(으)ㄴ/는 탓에 ve 덕분에", m: "<b>탓</b> “suç, kabahat” demektir. <b>-(으)ㄴ/는 탓에</b> olumsuz sonucu bir sebebe yükler: <i>어제 술을 많이 <b>마신 탓에</b> 머리가 아파요</i> (Dün çok içtiğim için başım ağrıyor). Fiilde geçmiş olay için <b>-(으)ㄴ</b>, süren durum için <b>-는</b>; sıfatta <b>-(으)ㄴ</b>; isimde <b>N 탓에</b>. Olumlu sonuç için <b>덕분에</b> (sayesinde): <i>선생님 <b>덕분에</b> 시험에 합격했어요</i> (Hocam sayesinde sınavı geçtim). İkisi cümle sonunda da kullanılır: <i>다 제 <b>탓이에요</b></i> (Hepsi benim suçum)." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-느라고", "Fiil; aynı özne; geçmiş eki yok; emir/öneri yok|-neurago"],
          ["-는 바람에", "Fiil; hep -는; ana cümle geçmiş|-neun barame"],
          ["-(으)ㄴ/는 탓에", "Fiil, sıfat, isim; olumsuz sonuç|-(eu)n/neun tase"],
          ["덕분에", "Fiil, sıfat, isim; olumlu sonuç|deokbune"],
          ["Kullanım", "-느라고, -는 바람에: daha çok konuşma; 탓에, 덕분에: her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["[늦잠을 자]{느라고} 지각했어요.|neutjameul janeurago jigakaesseoyo", "[늦잠을 자]{는 바람에} 지각했어요.|neutjameul janeun barame jigakaesseoyo", "istemeden uyuyakalmak: -는 바람에"],
          ["[공부했]{느라고} 피곤해요.|gongbuhaenneurago pigonhaeyo", "[공부하]{느라고} 피곤해요.|gongbuhaneurago pigonhaeyo", "-느라고 geçmiş eki almaz"],
          ["[바쁘]{느라고} 못 갔어요.|bappeuneurago mot gasseoyo", "[바쁘]{기 때문에} 못 갔어요.|bappeugi ttaemune mot gasseoyo", "-느라고 sıfatla kullanılmaz"],
          ["친구가 [도와준] {탓에} 일찍 끝났어요.|chinguga dowajun tase iljjik kkeunnasseoyo", "친구가 [도와준] {덕분에} 일찍 끝났어요.|chinguga dowajun deokbune iljjik kkeunnasseoyo", "olumlu sonuç: 덕분에"],
          ["비가 [오]{는 바람에} 우산을 가져가세요.|biga oneun barame usaneul gajyeogaseyo", "비가 [오]{니까} 우산을 가져가세요.|biga onikka usaneul gajyeogaseyo", "-는 바람에 + emir olmaz"]
        ] },
        { t: "diyalog", h: "Kaçırılan toplantı", l: [
          ["팀장", "지훈 씨, 왜 아침 회의에 안 왔어요?", "Jihun, sabahki toplantıya neden gelmedin?", "jihun ssi, wae achim hoeuie an wasseoyo?"],
          ["지훈", "죄송합니다. 지하철이 갑자기 [멈추]{는 바람에} 늦었어요.", "Özür dilerim. Metro birden durunca geç kaldım.", "joesonghamnida. jihacheori gapjagi meomchuneun barame neujeosseoyo"],
          ["팀장", "그래요? 보고서는 다 끝났어요?", "Öyle mi? Rapor bitti mi?", "geuraeyo? bogoseoneun da kkeunnasseoyo?"],
          ["지훈", "아니요, 어제 이사 [준비하]{느라고} 다 못 썼어요.", "Hayır, dün taşınma hazırlığından hepsini yazamadım.", "aniyo, eoje isa junbihaneurago da mot sseosseoyo"],
          ["팀장", "이사요? [준비하]{느라고} 수고했어요. 내일까지 보내 주세요.", "Taşınma mı? Hazırlıkla epey uğraşmışsın. Yarına kadar gönder.", "isayo? junbihaneurago sugohaesseoyo. naeilkkaji bonae juseyo"],
          ["지훈", "감사합니다. 팀장님 {덕분에} 살았어요.", "Teşekkür ederim. Sizin sayenizde kurtuldum.", "gamsahamnida. timjangnim deokbune sarasseoyo"]
        ] },
        { t: "ornek", l: [
          ["시험 [준비하]{느라고} 요즘 친구들을 못 만났어요.", "Sınava [hazırlan]{maktan} bu aralar arkadaşlarımla görüşemedim.", "siheom junbihaneurago yojeum chingudeureul mot mannasseoyo"],
          ["아이를 [돌보]{느라고} 쉴 시간이 없어요.", "Çocuğa [bak]{maktan} dinlenecek vaktim yok.", "aireul dolboneurago swil sigani eopseoyo"],
          ["버스를 잘못 [타]{는 바람에} 약속에 늦었어요.", "Yanlış otobüse [bin]{diğim için} randevuya geç kaldım.", "beoseureul jalmot taneun barame yaksoge neujeosseoyo"],
          ["휴대폰을 [떨어뜨리]{는 바람에} 화면이 깨졌어요.", "Telefonu [düşür]{ünce} ekranı kırıldı.", "hyudaeponeul tteoreotteurineun barame hwamyeoni kkaejyeosseoyo"],
          ["날씨가 너무 [추운] {탓에} 감기에 걸렸어요.", "Hava çok [soğuk] {olduğu için} grip oldum.", "nalssiga neomu chuun tase gamgie geollyeosseoyo"],
          ["경제가 [나쁜] {탓에} 일자리가 줄었어요.", "Ekonomi [kötü] {olduğu için} iş imkânları azaldı.", "gyeongjega nappeun tase iljariga jureosseoyo"],
          ["부모님 {덕분에} 유학을 갈 수 있었어요.", "Annemle babam {sayesinde} yurt dışında okuyabildim.", "bumonim deokbune yuhageul gal su isseosseoyo"],
          ["다 제 {탓이에요}. 미안해요.", "Hepsi benim {suçum}. Özür dilerim.", "da je tasieyo. mianhaeyo"]
        ] },
        { t: "ozet", l: [
          "<b>-느라고</b>: kendi meşguliyetin yüzünden olumsuz sonuç; yalnız fiil, aynı özne, geçmiş eki yok.",
          "<b>-는 바람에</b>: beklenmedik olay yüzünden; ek hep -는, ana cümle geçmiş.",
          "<b>-(으)ㄴ/는 탓에</b>: suçlama tonu; fiil, sıfat ve isimle (<i>감기 탓에</i>).",
          "Olumlu sonuç: <b>-(으)ㄴ/는 덕분에</b>, <i>N 덕분에</i> (sayesinde).",
          "-느라고 ve -는 바람에'dan sonra emir ve öneri gelmez; tarafsız sebep için -기 때문에."
        ] }
      ],
      test: [
        { s: "“Ödevle uğraşmaktan arkadaşımla buluşamadım.”", o: ["숙제하느라고 친구를 못 만났어요.", "숙제하는 바람에 친구를 못 만났어요.", "숙제한 덕분에 친구를 못 만났어요."], d: 0, a: "Kendi meşguliyetin: -느라고." },
        { s: "“Elektrik birden kesilince asansörde kaldım.”", o: ["갑자기 정전되느라고 엘리베이터에 갇혔어요.", "갑자기 정전되는 바람에 엘리베이터에 갇혔어요.", "갑자기 정전된 덕분에 엘리베이터에 갇혔어요."], d: 1, a: "Beklenmedik olay: -는 바람에." },
        { s: "-느라고 hangisiyle kullanılmaz?", o: ["Fiil", "Sıfat", "Aynı özne"], d: 1, a: "-느라고 yalnız fiille kullanılır." },
        { s: "Hangisi doğru?", o: ["어제 일했느라고 못 갔어요.", "어제 일하느라고 못 갔어요.", "어제 일하느라고 가세요."], d: 1, a: "-느라고 geçmiş eki almaz, emirle kullanılmaz." },
        { s: "“Senin sayende başardım.”", o: ["네 탓에 성공했어요.", "네 덕분에 성공했어요.", "네 바람에 성공했어요."], d: 1, a: "Olumlu sonuç: 덕분에." },
        { s: "“Soğuk yüzünden grip oldum.” (suçlama)", o: ["추운 탓에 감기에 걸렸어요.", "춥느라고 감기에 걸렸어요.", "추운 덕분에 감기에 걸렸어요."], d: 0, a: "Olumsuz sonuç, sıfat: -(으)ㄴ 탓에." },
        { s: "비가 오___ 우산을 가져가세요.", o: ["는 바람에", "느라고", "니까"], d: 2, a: "Emir cümlesinde -는 바람에 ve -느라고 olmaz: -(으)니까." },
        { s: "“Hepsi benim suçum.”", o: ["다 제 덕분이에요.", "다 제 탓이에요.", "다 제 바람이에요."], d: 1, a: "탓 = suç, kabahat." },
        { s: "Yanlış otobüse ___ 늦었어요.", o: ["타느라고", "타는 바람에", "탄 덕분에"], d: 1, a: "İstenmeyen, beklenmedik olay: -는 바람에." },
        { s: "-는 바람에 hangi biçimde kalır?", o: ["Hep -는", "Geçmişte -(으)ㄴ", "Gelecekte -(으)ㄹ"], d: 0, a: "Olay geçmişte de olsa -는 바람에." }
      ]
    },
    {
      id: "ko-t3-08", seviye: "TOPIK 3", sure: 12,
      baslik: "Gördüğünü aktarmak: -더라고요, -던, -았/었던",
      kisa: "맛있더라고요 · 다니던 학교 · 갔던 곳 · 맛있데요",
      bolumler: [
        { t: "metin", m: "Ders 33'te <i>맛있대요</i> (lezzetliymiş, öyle diyorlar) ile <i>맛있데요</i> (tattım, lezzetliydi) farkını görmüştük. İkincisi <b>-더-</b> ekiyle kurulur: konuşan kişinin <b>kendi gözüyle görüp yaşadığı</b> geçmiş bir şeyi şimdi hatırlayarak aktarması. Bu derste en sık iki biçimi öğreniyorsun: cümle sonunda <b>-더라고요</b> ve isim önünde <b>-던</b> (A2 Ders 26'daki ortaçların devamı). <b>Kullanım alanı:</b> -더라고요 konuşma; -던 her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede kendi tanıklığını aktarırken “gittim, gördüm; …-ydı” deriz: “Gittim, kapalıydı.” Korecede bu tanıklık -더- ekiyle verilir.", l: [
          ["O lokantaya gittim, çok [lezzetli]{ydi}.", "그 식당에 가 봤는데 정말 [맛있]{더라고요}.", "geu sikdange ga bwanneunde jeongmal masitdeoragoyo"],
          ["Minsu bu aralar çok [meşgul]{dü} (gördüm).", "민수 씨가 요즘 많이 [바쁘]{더라고요}.", "minsu ssiga yojeum mani bappeudeoragoyo"],
          ["Eskiden [git]{tiğim} kafe", "[다니]{던} 카페", "danideon kape"],
          ["Yarım [kal]{an} kitap", "[읽]{던} 책", "ikdeon chaek"]
        ] },
        { t: "tablo", h: "-더라고요 kurulumu", bas: ["Tür", "Kurulum", "Örnek"], s: [
          ["Fiil", "{-더라고요}", "[잘하]{더라고요}|jalhadeoragoyo"],
          ["Sıfat", "{-더라고요}", "[비싸]{더라고요}|bissadeoragoyo"],
          ["İsim", "{-(이)더라고요}", "[학생]{이더라고요}|haksaengideoragoyo"],
          ["Bitmiş olay", "{-았/었더라고요}", "[끝났]{더라고요}|kkeunnatdeoragoyo"],
          ["Samimi", "{-더라}", "[맛있]{더라}|masitdeora"]
        ] },
        { t: "ipucu", h: "-더라고요'nun üç şartı", m: "1) Konuşan kişi olayı <b>kendisi görmüş, duymuş ya da yaşamış</b> olmalı; duyduğun bilgi için 33. dersteki <i>-대요</i> kullanılır. 2) Olay <b>geçmişte</b> gözlenmiş, şimdi aktarılıyor olmalı. 3) Özne çoğunlukla <b>ben değil</b>dir: <i>제가 열심히 공부하더라고요</i> ✗. Ama kendi duygunu ya da kendinle ilgili bir keşfi anlatabilirsin: <i>그 영화를 보니까 <b>눈물이 나더라고요</b></i> (O filmi izleyince gözlerim doldu)." },
        { t: "tablo", h: "İsim önünde: -(으)ㄴ, -던, -았/었던", bas: ["Biçim", "Anlamı", "Örnek"], s: [
          ["-(으)ㄴ (fiil)", "bitmiş eylem", "[먹]{은} 빵: yediğim (biten) ekmek|meogeun ppang"],
          ["-던 (fiil)", "geçmişte süren, tekrarlanan ya da yarım kalan eylem", "[먹]{던} 빵: yemekte olduğum (yarım) ekmek|meokdeon ppang"],
          ["-았/었던 (fiil)", "bir kez yaşanmış, bitmiş hatıra", "[갔]{던} 곳: (bir zamanlar) gittiğim yer|gatdeon got"],
          ["-던 (sıfat)", "eskiden öyleydi, artık değil", "[조용하]{던} 동네: eskiden sakin olan mahalle|joyonghadeon dongne"],
          ["-였던 / -이었던 (isim)", "eskiden …-dı", "[가수]{였던} 사람: eskiden şarkıcı olan biri|gasuyeotdeon saram"]
        ] },
        { t: "metin", h: "-던 mi, -았/었던 mi?", m: "<b>-던</b> eylemin geçmişte <b>sürdüğünü, tekrarlandığını ya da yarım kaldığını</b> anlatır: <i>제가 <b>다니던</b> 학교</i> (yıllarca gittiğim okul), <i>마시<b>던</b> 커피</i> (içmekte olduğum, bitmemiş kahve). <b>-았/었던</b> ise <b>tamamlanmış</b> ve çoğunlukla bir kez yaşanmış bir hatırayı anlatır: <i>작년에 <b>갔던</b> 식당</i> (geçen yıl gittiğim lokanta). Sıfatlarda “eskiden öyleydi” demektir: <i>작<b>던</b> 아이가 이렇게 컸네요</i> (Küçücük çocuk ne kadar büyümüş)." },
        { t: "ipucu", h: "-데요: kısa biçim", m: "<b>-데요</b>, -더라고요 ile aynı anlamı taşır ama daha kısadır: <i>그 영화 재미있<b>데요</b></i> (O film eğlenceliydi, izledim). Karşındakinin gözlemini sorarken <i>-던가요?</i> kullanılır: <i>그 식당 <b>비싸던가요</b>?</i> (O lokanta pahalı mıydı?). <i>-대요</i> ile karıştırma: ㅐ duyulan bilgi, ㅔ kendi gözlemin." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-더라고요", "Fiil, sıfat, isim; konuşanın kendi gözlemi|-deoragoyo"],
          ["Özne", "Çoğunlukla 2. ya da 3. kişi; 1. kişi yalnız duygu ve keşifte"],
          ["Bilgi kaynağı", "Kendi gözlemi: -더라고요, -데요; duyulan: -대요"],
          ["-던", "Geçmişte süren, tekrarlanan ya da yarım kalan eylem|-deon"],
          ["-았/었던", "Tamamlanmış hatıra|-atdeon / -eotdeon"],
          ["Kullanım", "-더라고요 konuşma (구어체); -던 her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["제가 어제 열심히 [공부하]{더라고요}.|jega eoje yeolsimhi gongbuhadeoragoyo", "제가 어제 열심히 [공부했]{어요}.|jega eoje yeolsimhi gongbuhaesseoyo", "kendi bilinçli eylemin: -더라고요 olmaz"],
          ["(duydum) 그 식당이 [맛있]{더라고요}.|geu sikdangi masitdeoragoyo", "(duydum) 그 식당이 [맛있]{대요}.|geu sikdangi masitdaeyo", "duyulan bilgi: -대요"],
          ["작년에 한 번 [가]{던} 식당|jangnyeone han beon gadeon sikdang", "작년에 한 번 [갔]{던} 식당|jangnyeone han beon gatdeon sikdang", "bir kez yaşanmış hatıra: -았/었던"],
          ["(yarım) [먹]{은} 빵이 식탁에 있어요.|meogeun ppangi siktage isseoyo", "(yarım) [먹]{던} 빵이 식탁에 있어요.|meokdeon ppangi siktage isseoyo", "yarım kalan: -던"]
        ] },
        { t: "diyalog", h: "Tatil dönüşü", l: [
          ["수아", "제주도 여행 어땠어요?", "Jeju gezisi nasıldı?", "jejudo yeohaeng eottaesseoyo?"],
          ["태민", "정말 좋았어요. 바다가 생각보다 훨씬 [예쁘]{더라고요}.", "Harikaydı. Deniz düşündüğümden çok daha güzeldi.", "jeongmal joasseoyo. badaga saenggakboda hwolssin yeppeudeoragoyo"],
          ["수아", "음식은요? [비싸]{던가요}?", "Ya yemekler? Pahalı mıydı?", "eumsigeunyo? bissadeongayo?"],
          ["태민", "조금 비쌌는데 정말 [맛있]{더라고요}. 특히 흑돼지가요.", "Biraz pahalıydı ama gerçekten lezzetliydi. Özellikle kara domuz.", "jogeum bissanneunde jeongmal masitdeoragoyo. teuki heukdwaejigayo"],
          ["수아", "부럽네요. 저도 예전에 [다니]{던} 회사 동료들하고 [갔]{던} 곳이에요.", "Kıskandım. Orası benim de eskiden çalıştığım şirketin arkadaşlarıyla gittiğim bir yer.", "bureomneyo. jeodo yejeone danideon hoesa dongnyodeulhago gatdeon gosieyo"],
          ["태민", "아, 그래요? 그런데 날씨는 좀 [춥]{더라고요}. 다음에는 여름에 가 보세요.", "Öyle mi? Ama hava biraz soğuktu. Bir dahakine yazın gidin.", "a, geuraeyo? geureonde nalssineun jom chupdeoragoyo. daeumeneun yeoreume ga boseyo"]
        ] },
        { t: "ornek", l: [
          ["어제 백화점에 갔는데 사람이 정말 [많]{더라고요}.", "Dün alışveriş merkezine gittim, çok [kalabalık]{tı}.", "eoje baekhwajeome ganneunde sarami jeongmal manteoragoyo"],
          ["민지 씨가 노래를 정말 [잘하]{더라고요}.", "Minji gerçekten çok güzel şarkı [söylü]{yordu} (dinledim).", "minji ssiga noraereul jeongmal jalhadeoragoyo"],
          ["시험이 생각보다 [어렵]{더라고요}.", "Sınav düşündüğümden [zor]{du}.", "siheomi saenggakboda eoryeopdeoragoyo"],
          ["이 사진은 제가 어릴 때 [살]{던} 집이에요.", "Bu fotoğraftaki, çocukken [yaşa]{dığım} ev.", "i sajineun jega eoril ttae saldeon jibieyo"],
          ["[읽]{던} 책을 어디에 뒀는지 모르겠어요.", "[Oku]{makta olduğum} kitabı nereye koyduğumu bilmiyorum.", "ikdeon chaegeul eodie dwonneunji moreugesseoyo"],
          ["작년에 [갔]{던} 카페가 문을 닫았어요.", "Geçen yıl [git]{tiğimiz} kafe kapanmış.", "jangnyeone gatdeon kapega muneul dadasseoyo"],
          ["[조용하]{던} 동네가 요즘 시끄러워졌어요.", "Eskiden [sakin] {olan} mahalle bu aralar [gürültülü]{leşti}.", "joyonghadeon dongnega yojeum sikkeureowojyeosseoyo"],
          ["친구가 결혼식에서 많이 [울]{더라고요}.", "Arkadaşım düğünde çok [ağla]{dı} (gördüm).", "chinguga gyeolhonsigeseo mani uldeoragoyo"]
        ] },
        { t: "ozet", l: [
          "<b>-더라고요</b>: kendi gözünle gördüğün geçmiş bir şeyi aktarma (<i>맛있더라고요</i>).",
          "Özne çoğunlukla başkasıdır; duyduğun bilgi için <b>-대요</b>, kendi gözlemin için <b>-데요 / -더라고요</b>.",
          "<b>-던</b>: geçmişte süren, tekrarlanan ya da yarım kalan eylem (<i>다니던 학교, 먹던 빵</i>).",
          "<b>-았/었던</b>: tamamlanmış hatıra (<i>갔던 곳</i>).",
          "Sıfat + -던: eskiden öyleydi (<i>조용하던 동네</i>)."
        ] }
      ],
      test: [
        { s: "“O lokantaya gittim, çok lezzetliydi.”", o: ["그 식당에 가 봤는데 정말 맛있더라고요.", "그 식당에 가 봤는데 정말 맛있대요.", "그 식당에 가 봤는데 정말 맛있던."], d: 0, a: "Kendi gözlemin: -더라고요." },
        { s: "Hangisi yanlıştır?", o: ["친구가 노래를 잘하더라고요.", "제가 어제 열심히 일하더라고요.", "날씨가 춥더라고요."], d: 1, a: "Kendi bilinçli eylemin için -더라고요 kullanılmaz." },
        { s: "“Eskiden gittiğim okul” (yıllarca)", o: ["다닌 학교", "다니던 학교", "다닐 학교"], d: 1, a: "Geçmişte tekrarlanan eylem: -던." },
        { s: "“Yemekte olduğum (yarım) ekmek”", o: ["먹은 빵", "먹던 빵", "먹을 빵"], d: 1, a: "Yarım kalan eylem: -던." },
        { s: "“Geçen yıl bir kez gittiğimiz kafe”", o: ["작년에 한 번 가던 카페", "작년에 한 번 갔던 카페", "작년에 한 번 가는 카페"], d: 1, a: "Tamamlanmış hatıra: -았/었던." },
        { s: "Duyduğun bilgi: “Lezzetliymiş (öyle diyorlar).”", o: ["맛있대요", "맛있데요", "맛있더라고요"], d: 0, a: "Duyulan bilgi: -대요." },
        { s: "“Eskiden sakin olan mahalle”", o: ["조용한 동네", "조용하던 동네", "조용할 동네"], d: 1, a: "Sıfat + -던: eskiden öyleydi, artık değil." },
        { s: "학생 + -더라고요?", o: ["학생더라고요", "학생이더라고요", "학생하더라고요"], d: 1, a: "İsim: -(이)더라고요." },
        { s: "“O lokanta pahalı mıydı?” (karşındaki gitmiş)", o: ["그 식당 비싸던가요?", "그 식당 비쌌대요?", "그 식당 비싸던 식당?"], d: 0, a: "Karşındakinin gözlemini sorarken: -던가요?" },
        { s: "-더라고요 hangi durumda 1. kişiyle doğaldır?", o: ["Kendi duygunu ya da keşfini anlatırken", "Kendi planını anlatırken", "Kendi bilinçli eylemini anlatırken"], d: 0, a: "Örneğin: 그 영화를 보니까 눈물이 나더라고요." }
      ]
    },
    {
      id: "ko-t3-09", seviye: "TOPIK 3", sure: 12,
      baslik: "Sonuç ve resmî sebep: -았/었더니, -더니, -(으)로 인해",
      kisa: "운동했더니 건강해졌어요 · 열심히 하더니 · 태풍으로 인해",
      bolumler: [
        { t: "metin", m: "Bir önceki derste -더- ekinin “kendi gözlemim” anlamını öğrendin. Bu ek bağlaç olarak da kullanılır: <b>-았/었더니</b> “ben … yaptım, sonra şu oldu ya da şunu fark ettim” demektir: <i>약을 <b>먹었더니</b> 괜찮아졌어요</i> (İlacı içtim, düzeldim). <b>-더니</b> ise başkasında gözlediğin bir değişimi ya da sonucu anlatır. Dersin ikinci kısmında haber ve yazı dilinde sebep bildiren <b>-(으)로 인해(서)</b> var. <b>Kullanım alanı:</b> -았/었더니 ve -더니 her ikisi; -(으)로 인해 yazı ve resmî konuşma." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu anlamı iki cümleyle ya da “…-ınca” ile kurarız: “İlacı içtim, düzeldim.” Korecede iki cümle -았/었더니 ile tek cümle olur.", l: [
          ["Her gün spor [yap]{tım}, sağlığım düzeldi.", "매일 [운동했]{더니} 건강해졌어요.", "maeil undonghaetdeoni geonganghaejyeosseoyo"],
          ["Kapıyı [aç]{ınca} kimse yoktu.", "문을 [열었]{더니} 아무도 없었어요.", "muneul yeoreotdeoni amudo eopseosseoyo"],
          ["Minsu çok [çalıştı], sonunda kazandı.", "민수 씨가 열심히 [공부하]{더니} 합격했어요.", "minsu ssiga yeolsimhi gongbuhadeoni hapgyeokaesseoyo"],
          ["Tayfun {yüzünden} uçuşlar iptal edildi.", "태풍{으로 인해} 비행기가 결항됐습니다.", "taepungeuro inhae bihaenggiga gyeolhangdwaetseumnida"]
        ] },
        { t: "tablo", h: "Üç kalıp", bas: ["Kalıp", "Özne", "Anlamı", "Örnek"], s: [
          ["-았/었더니 (1)", "ben", "yaptım → sonucu bu oldu", "[쉬었]{더니} 나아졌어요.|swieotdeoni naajyeosseoyo"],
          ["-았/었더니 (2)", "ben", "yaptım → şunu fark ettim", "[가 봤]{더니} 사람이 아무도 없었어요.|ga bwatdeoni sarami amudo eopseosseoyo"],
          ["-더니", "başkası", "gözlenen değişim ya da sonuç", "아이가 [울]{더니} 잠들었어요.|aiga uldeoni jamdeureosseoyo"],
          ["-(으)로 인해(서)", "—", "resmî sebep", "사고{로 인해} 길이 막혔습니다.|sagoro inhae giri makyeotseumnida"]
        ] },
        { t: "ipucu", h: "-았/었더니 ile -더니'nin farkı", m: "<b>-았/었더니</b>: ilk cümlenin öznesi <b>ben</b>im; kendi yaptığım bir şeyin sonucunu ya da sonra fark ettiğimi anlatırım: <i>(제가) 창문을 <b>열었더니</b> 시원해졌어요</i> (Pencereyi açtım, serinledi). <b>-더니</b> (geçmiş eki olmadan): özne <b>başkası</b>dır ve onda gözlediğim değişimi anlatırım: <i>하늘이 <b>흐리더니</b> 비가 오기 시작했어요</i> (Gökyüzü bulutluydu, sonra yağmur başladı), <i>동생이 아침에는 <b>웃더니</b> 지금은 울어요</i> (Kardeşim sabah gülüyordu, şimdi ağlıyor)." },
        { t: "metin", h: "Ana cümlede ne gelmez?", m: "Bu kalıplarda ana cümle yaşanmış ya da gözlenmiş bir sonucu anlatır; bu yüzden <b>emir, öneri ve gelecek</b> gelmez: <i>운동했더니 같이 갑시다</i> ✗. Ana cümle çoğunlukla geçmiş zaman ya da şu anki durumdur: <i>푹 잤더니 <b>피곤이 풀렸어요</b></i> (Deliksiz uyudum, yorgunluğum geçti), <i>늦게 잤더니 <b>머리가 아파요</b></i> (Geç yattım, şimdi başım ağrıyor)." },
        { t: "metin", h: "-(으)로 인해(서): resmî sebep", m: "<b>-(으)로 인해(서)</b> isimlere gelir ve haber, rapor, duyuru gibi resmî metinlerde sebep bildirir: <i>폭설<b>로 인해</b> 도로가 통제되었습니다</i> (Yoğun kar yağışı nedeniyle yollar kapatıldı). İsim nitelerken <b>-(으)로 인한</b> olur: <i>교통사고<b>로 인한</b> 피해</i> (trafik kazasından kaynaklanan zarar). Günlük konuşmada aynı anlam için <i>N 때문에</i> kullanılır. TOPIK yazma bölümünde (53–54) resmî sebep için çok işe yarar." },
        { t: "tablo", h: "Konuşma ve yazı", bas: ["Konuşma dili", "Yazı dili", "Türkçe"], s: [
          ["비 때문에 경기가 취소됐어요.|bi ttaemune gyeonggiga chwisodwaesseoyo", "폭우{로 인해} 경기가 취소되었다.|poguro inhae gyeonggiga chwisodoeeotda", "Şiddetli yağmur nedeniyle maç iptal edildi."],
          ["감기 때문에 결석한 학생이 많아요.|gamgi ttaemune gyeolseokan haksaengi manayo", "독감{으로 인해} 결석한 학생이 많다.|dokgameuro inhae gyeolseokan haksaengi manta", "Grip nedeniyle devamsız öğrenci çok."],
          ["스마트폰 때문에 생긴 문제|seumateupon ttaemune saenggin munje", "스마트폰{으로 인한} 문제|seumateuponeuro inhan munje", "Akıllı telefondan kaynaklanan sorunlar"]
        ] },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-았/었더니", "Fiil; ilk cümlenin öznesi ben; sonuç ya da fark etme|-atdeoni / -eotdeoni"],
          ["-더니", "Fiil, sıfat; özne başkası; gözlenen değişim|-deoni"],
          ["Ana cümle", "Geçmiş ya da şimdiki durum; emir, öneri, gelecek yok"],
          ["-(으)로 인해(서)", "İsim + ; resmî sebep; nitelerken -(으)로 인한|-(eu)ro inhae(seo)"],
          ["Kullanım", "-더니: her ikisi; -(으)로 인해: yazı dili (문어체)"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["(ben) 약을 [먹]{더니} 나았어요.|yageul meokdeoni naasseoyo", "(ben) 약을 [먹었]{더니} 나았어요.|yageul meogeotdeoni naasseoyo", "kendi eylemin: -았/었더니"],
          ["민수 씨가 [운동했]{더니} 살이 빠졌어요.|minsu ssiga undonghaetdeoni sari ppajyeosseoyo", "민수 씨가 [운동하]{더니} 살이 빠졌어요.|minsu ssiga undonghadeoni sari ppajyeosseoyo", "başkasının değişimi: -더니"],
          ["열심히 [공부했]{더니} 같이 놀러 갑시다.|yeolsimhi gongbuhaetdeoni gachi nolleo gapsida", "열심히 [공부했]{으니까} 같이 놀러 갑시다.|yeolsimhi gongbuhaesseunikka gachi nolleo gapsida", "-더니'den sonra öneri gelmez"],
          ["(arkadaşına) 버스{로 인해} 늦었어.|beoseuro inhae neujeosseo", "(arkadaşına) 버스 {때문에} 늦었어.|beoseu ttaemune neujeosseo", "samimi konuşmada -(으)로 인해 fazla resmî"]
        ] },
        { t: "diyalog", h: "Sağlıklı alışkanlık", l: [
          ["유나", "요즘 얼굴색이 정말 좋네요. 비결이 뭐예요?", "Bu aralar yüzünün rengi çok güzel. Sırrın ne?", "yojeum eolgulsaegi jeongmal jonneyo. bigyeori mwoyeyo?"],
          ["도윤", "매일 아침 30분씩 [걸었]{더니} 몸이 가벼워졌어요.", "Her sabah yarım saat yürüdüm, vücudum hafifledi.", "maeil achim samsipbunssik georeotdeoni momi gabyeowojyeosseoyo"],
          ["유나", "저도 해 봤는데, 사흘 [걸었]{더니} 다리가 너무 아팠어요.", "Ben de denedim ama üç gün yürüyünce bacaklarım çok ağrıdı.", "jeodo hae bwanneunde, saheul georeotdeoni dariga neomu apasseoyo"],
          ["도윤", "처음에는 다 그래요. 제 동생도 처음에 [힘들어하]{더니} 지금은 매일 뛰어요.", "Başta herkes öyle. Kardeşim de başta zorlanıyordu, şimdi her gün koşuyor.", "cheoeumeneun da geuraeyo. je dongsaengdo cheoeume himdeureohadeoni jigeumeun maeil ttwieoyo"],
          ["유나", "그런데 오늘은 미세먼지가 심하대요. 뉴스에서 “미세먼지{로 인해} 외출을 자제해 주십시오”라고 했어요.", "Ama bugün ince toz yoğunmuş. Haberlerde “İnce toz nedeniyle dışarı çıkmamaya özen gösterin” dediler.", "geureonde oneureun misemeonjiga simhadaeyo. nyuseueseo “misemeonjiro inhae oechureul jajehae jusipsio”rago haesseoyo"],
          ["도윤", "그럼 오늘은 집에서 운동해요.", "O zaman bugün evde spor yapalım.", "geureom oneureun jibeseo undonghaeyo"]
        ] },
        { t: "ornek", l: [
          ["창문을 [열었]{더니} 방이 시원해졌어요.", "Pencereyi [aç]{tım}, oda serinledi.", "changmuneul yeoreotdeoni bangi siwonhaejyeosseoyo"],
          ["오랜만에 고향에 [갔]{더니} 많이 변했더라고요.", "Uzun zaman sonra memleketime [git]{tim}, çok değişmiş.", "oraenmane gohyange gatdeoni mani byeonhaetdeoragoyo"],
          ["커피를 너무 많이 [마셨]{더니} 잠이 안 와요.", "Çok fazla kahve [iç]{tim}, uykum gelmiyor.", "keopireul neomu mani masyeotdeoni jami an wayo"],
          ["선배에게 [물어봤]{더니} 친절하게 알려 줬어요.", "Kıdemli arkadaşıma [sor]{dum}, nazikçe anlattı.", "seonbaeege mureobwatdeoni chinjeolhage allyeo jwosseoyo"],
          ["아침에는 [맑]{더니} 오후에 비가 왔어요.", "Sabah hava [açık]{tı}, öğleden sonra yağmur yağdı.", "achimeneun makdeoni ohue biga wasseoyo"],
          ["동생이 한 달 동안 열심히 [연습하]{더니} 대회에서 1등을 했어요.", "Kardeşim bir ay boyunca sıkı [çalış]{tı}, yarışmada birinci oldu.", "dongsaengi han dal dongan yeolsimhi yeonseupadeoni daehoeeseo ildeungeul haesseoyo"],
          ["폭설{로 인해} 항공편이 지연되고 있습니다.", "Yoğun kar {nedeniyle} uçuşlar gecikiyor.", "pokseollo inhae hanggongpyeoni jiyeondoego itseumnida"],
          ["환경 오염{으로 인한} 피해가 커지고 있다.", "Çevre kirliliğinden {kaynaklanan} zarar büyüyor.", "hwangyeong oyeomeuro inhan pihaega keojigo itda"]
        ] },
        { t: "ozet", l: [
          "<b>-았/었더니</b>: (ben) yaptım → sonucu bu oldu ya da şunu fark ettim.",
          "<b>-더니</b>: başkasında gözlediğim değişim ya da sonuç (<i>하늘이 흐리더니 비가 왔어요</i>).",
          "Ana cümlede emir, öneri ve gelecek gelmez.",
          "<b>-(으)로 인해(서)</b>: isimle resmî sebep; nitelerken <b>-(으)로 인한</b>.",
          "Konuşmada <i>N 때문에</i>, haber ve kompozisyonda <i>N(으)로 인해</i>."
        ] }
      ],
      test: [
        { s: "“İlacı içtim, düzeldim.”", o: ["약을 먹더니 나았어요.", "약을 먹었더니 나았어요.", "약을 먹느라고 나았어요."], d: 1, a: "Kendi eylemin ve sonucu: -았/었더니." },
        { s: "“Minsu sıkı çalıştı, sonunda kazandı.”", o: ["민수 씨가 열심히 공부했더니 합격했어요.", "민수 씨가 열심히 공부하더니 합격했어요.", "민수 씨가 열심히 공부하는 바람에 합격했어요."], d: 1, a: "Başkasının değişimi: -더니." },
        { s: "“Kapıyı açtım, kimse yoktu.”", o: ["문을 열었더니 아무도 없었어요.", "문을 열더니 아무도 없었어요.", "문을 열었더니 아무도 없을 거예요."], d: 0, a: "Fark etme: -았/었더니; ana cümle gelecek olmaz." },
        { s: "Hangisi yanlıştır?", o: ["운동했더니 건강해졌어요.", "운동했더니 같이 운동합시다.", "운동했더니 피곤해요."], d: 1, a: "-았/었더니'den sonra öneri gelmez." },
        { s: "“Gökyüzü bulutluydu, sonra yağmur başladı.”", o: ["하늘이 흐렸더니 비가 왔어요.", "하늘이 흐리더니 비가 왔어요.", "하늘이 흐린 덕분에 비가 왔어요."], d: 1, a: "Gözlenen değişim: -더니." },
        { s: "“Tayfun nedeniyle uçuşlar iptal edildi.” (haber)", o: ["태풍으로 인해 비행기가 결항됐습니다.", "태풍이니까 비행기가 결항됐습니다.", "태풍하더니 비행기가 결항됐습니다."], d: 0, a: "Resmî sebep: N(으)로 인해." },
        { s: "교통사고___ 피해 (kazadan kaynaklanan zarar)", o: ["로 인한", "로 인해", "때문이"], d: 0, a: "İsim nitelerken: -(으)로 인한." },
        { s: "-(으)로 인해 en çok nerede kullanılır?", o: ["Samimi konuşmada", "Haber ve yazı dilinde", "Çocuklarla konuşurken"], d: 1, a: "Resmî ve yazı dili (문어체)." },
        { s: "“Çok kahve içtim, uykum gelmiyor.”", o: ["커피를 많이 마셨더니 잠이 안 와요.", "커피를 많이 마시더니 잠이 안 와요.", "커피를 많이 마셨더니 잠이 안 올 거예요."], d: 0, a: "1. kişi: -았/었더니; ana cümle şimdiki durum." },
        { s: "-았/었더니'de ilk cümlenin öznesi çoğunlukla kimdir?", o: ["Ben", "Başkası", "Her zaman biz"], d: 0, a: "1. kişi: -았/었더니; başkası: -더니." }
      ]
    },
    {
      id: "ko-t3-10", seviye: "TOPIK 3", sure: 12,
      baslik: "Zıtlık ve ödün: -(으)ㄴ/는 반면에, -(으)면서도, -는데도, -더라도",
      kisa: "비싼 반면에 · 알면서도 · 비가 오는데도 · 힘들더라도",
      bolumler: [
        { t: "metin", m: "A2'de “ama” anlamını <b>-지만</b> (Ders 15) ve <b>-는데</b> (Ders 29) ile kurdun. TOPIK 3'te zıtlığın türünü gösteren dört kalıp var: iki yönü karşılaştırmak (<b>-(으)ㄴ/는 반면에</b>), bildiği hâlde yapmak (<b>-(으)면서도</b>), beklentinin tersine bir sonuç (<b>-는데도</b>) ve varsayımsal ödün (<b>-더라도</b>). <b>Kullanım alanı:</b> 반면에 daha çok yazı; diğerleri her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu anlamlar <b>-masına rağmen, -dığı hâlde, -se bile</b> ve “öte yandan” ile verilir. Korecede her biri tek bir ekle kurulur.", l: [
          ["Bu ev geniş, {öte yandan} pahalı.", "이 집은 [넓은] {반면에} 비싸요.", "i jibeun neolbeun banmyeone bissayo"],
          ["[Bil]{diği hâlde} söylemedi.", "[알]{면서도} 말하지 않았어요.", "almyeonseodo malhaji anasseoyo"],
          ["Yağmur [yağ]{masına rağmen} çıktı.", "비가 [오]{는데도} 나갔어요.", "biga oneundedo nagasseoyo"],
          ["[Zor] {olsa bile} vazgeçme.", "[힘들]{더라도} 포기하지 마세요.", "himdeuldeorado pogihaji maseyo"]
        ] },
        { t: "tablo", h: "Dört kalıp", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["-(으)ㄴ/는 반면에", "bir yandan …, öte yandan", "월급이 [많은] {반면에} 일이 힘들어요.|wolgeubi maneun banmyeone iri himdeureoyo"],
          ["-(으)면서도", "…-dığı hâlde", "[알]{면서도} 모르는 척했어요.|almyeonseodo moreuneun cheokaesseoyo"],
          ["-는데도 / -(으)ㄴ데도", "…-masına rağmen (gerçek durum)", "열심히 [공부했]{는데도} 떨어졌어요.|yeolsimhi gongbuhaenneundedo tteoreojyeosseoyo"],
          ["-더라도", "…-se bile (varsayım)", "[바쁘]{더라도} 꼭 오세요.|bappeudeorado kkok oseyo"]
        ] },
        { t: "metin", h: "-(으)ㄴ/는 반면에: iki yüz", m: "<b>-(으)ㄴ/는 반면에</b> aynı şeyin iki zıt yönünü karşılaştırır; çoğunlukla bir artı ile bir eksiyi yan yana koyar: <i>도시 생활은 <b>편리한 반면에</b> 복잡해요</i> (Şehir hayatı kullanışlı, öte yandan karmaşık). Fiilde şimdiki <b>-는</b>, geçmiş <b>-(으)ㄴ</b>; sıfatta <b>-(으)ㄴ</b>; isimde <b>N인 반면에</b>. Kompozisyonda çok kullanılır; cümle başında <i>반면에</i> “buna karşılık” demektir (48. ders)." },
        { t: "metin", h: "-(으)면서도: bildiği hâlde", m: "24. dersteki -(으)면서 (…-erken) + <b>-도</b> = <b>-(으)면서도</b>: aynı kişinin birbiriyle çelişen iki durumu ya da davranışı: <i>그는 돈이 <b>많으면서도</b> 항상 싼 옷만 입어요</i> (Çok parası olduğu hâlde hep ucuz kıyafet giyer), <i>잘못인 줄 <b>알면서도</b> 또 했어요</i> (Yanlış olduğunu bildiği hâlde yine yaptı). İki cümlenin öznesi aynıdır." },
        { t: "tablo", h: "-는데도 mu, -더라도 mu?", bas: ["Özellik", "-는데도", "-더라도"], s: [
          ["Durum", "gerçek, olmuş ya da oluyor", "varsayım, olabilir"],
          ["Türkçe", "…-masına rağmen", "…-se bile"],
          ["Ana cümle", "çoğunlukla geçmiş ya da şimdiki", "emir, öneri, gelecek de olur"],
          ["Örnek", "비가 [오]{는데도} 나갔어요.|biga oneundedo nagasseoyo", "비가 [오]{더라도} 나갈 거예요.|biga odeorado nagal geoyeyo"]
        ] },
        { t: "ipucu", h: "-는데도 불구하고: daha resmî", m: "<b>-(으)ㄴ/는데도 불구하고</b> -는데도'nun daha güçlü ve resmî biçimidir; haber ve yazıda sık görülür: <i>많은 노력을 <b>했는데도 불구하고</b> 결과가 좋지 않았다</i> (Çok çaba harcanmasına rağmen sonuç iyi olmadı). İsimle <b>N에도 불구하고</b>: <i>비<b>에도 불구하고</b> 경기가 열렸다</i> (Yağmura rağmen maç oynandı)." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-(으)ㄴ/는 반면에", "Fiil, sıfat, isim (N인 반면에); geçmiş -(으)ㄴ|-(eu)n/neun banmyeone"],
          ["-(으)면서도", "Fiil, sıfat; iki cümlede aynı özne|-(eu)myeonseodo"],
          ["-는데도", "Fiil -는데도, sıfat -(으)ㄴ데도, geçmiş -았/었는데도; gerçek durum; emir olmaz|-neundedo"],
          ["-더라도", "Fiil, sıfat, isim (N이더라도); varsayım; ana cümlede emir olur|-deorado"],
          ["Kullanım", "반면에 ve 불구하고: yazı ağırlıklı; diğerleri her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["내일 비가 [오]{는데도} 갈 거예요.|naeil biga oneundedo gal geoyeyo", "내일 비가 [오]{더라도} 갈 거예요.|naeil biga odeorado gal geoyeyo", "gelecek, varsayım: -더라도"],
          ["열심히 [공부하]{더라도} 시험에 떨어졌어요.|yeolsimhi gongbuhadeorado siheome tteoreojyeosseoyo", "열심히 [공부했]{는데도} 시험에 떨어졌어요.|yeolsimhi gongbuhaenneundedo siheome tteoreojyeosseoyo", "gerçekleşmiş durum: -는데도"],
          ["이 옷은 [싸]{는 반면에} 질이 나빠요.|i oseun ssaneun banmyeone jiri nappayo", "이 옷은 [싼] {반면에} 질이 나빠요.|i oseun ssan banmyeone jiri nappayo", "sıfat: -(으)ㄴ 반면에"],
          ["[힘든]{데도} 포기하지 마세요.|himdeundedo pogihaji maseyo", "[힘들]{더라도} 포기하지 마세요.|himdeuldeorado pogihaji maseyo", "ana cümle emir: -더라도"]
        ] },
        { t: "diyalog", h: "Yeni iş teklifi", l: [
          ["서연", "새 회사에서 연락 왔어요? 어때요?", "Yeni şirketten haber geldi mi? Nasıl?", "sae hoesaeseo yeollak wasseoyo? eottaeyo?"],
          ["준기", "월급이 [많은] {반면에} 집에서 너무 멀어요.", "Maaşı yüksek, öte yandan evime çok uzak.", "wolgeubi maneun banmyeone jibeseo neomu meoreoyo"],
          ["서연", "그래도 좋은 기회잖아요. 좀 [멀]{더라도} 가 보세요.", "Yine de iyi bir fırsat ya. Biraz uzak olsa bile bir dene.", "geuraedo joeun gihoejanayo. jom meoldeorado ga boseyo"],
          ["준기", "저도 [알]{면서도} 결정을 못 하겠어요.", "Bildiğim hâlde karar veremiyorum.", "jeodo almyeonseodo gyeoljeongeul mot hagesseoyo"],
          ["서연", "작년에도 고민을 많이 [했]{는데도} 결국 안 갔잖아요.", "Geçen yıl da çok düşünmene rağmen sonunda gitmemiştin ya.", "jangnyeonedo gomineul mani haenneundedo gyeolguk an gatjanayo"],
          ["준기", "맞아요. 이번에는 [힘들]{더라도} 도전해 볼게요.", "Haklısın. Bu sefer zor olsa bile deneyeceğim.", "majayo. ibeoneneun himdeuldeorado dojeonhae bolgeyo"]
        ] },
        { t: "ornek", l: [
          ["이 휴대폰은 디자인이 [예쁜] {반면에} 배터리가 빨리 닳아요.", "Bu telefonun tasarımı güzel, {öte yandan} şarjı çabuk bitiyor.", "i hyudaeponeun dijaini yeppeun banmyeone baeteoriga ppalli darayo"],
          ["형은 키가 [큰] {반면에} 동생은 작아요.", "Ağabey uzun boylu, {buna karşılık} küçük kardeş kısa.", "hyeongeun kiga keun banmyeone dongsaengeun jagayo"],
          ["담배가 몸에 나쁜 줄 [알]{면서도} 끊지 못해요.", "Sigaranın zararlı olduğunu [bil]{diği hâlde} bırakamıyor.", "dambaega mome nappeun jul almyeonseodo kkeunchi motaeyo"],
          ["그는 [바쁘]{면서도} 매일 운동을 해요.", "O, meşgul {olduğu hâlde} her gün spor yapıyor.", "geuneun bappeumyeonseodo maeil undongeul haeyo"],
          ["약을 [먹었]{는데도} 열이 안 내려요.", "İlacı [iç]{tiğim hâlde} ateşim düşmüyor.", "yageul meogeonneundedo yeori an naeryeoyo"],
          ["[주말인]{데도} 회사에 나가야 해요.", "Hafta sonu [ol]{masına rağmen} işe gitmem gerekiyor.", "jumarindedo hoesae nagaya haeyo"],
          ["시간이 [없]{더라도} 아침은 꼭 드세요.", "Vaktiniz [ol]{masa bile} kahvaltıyı mutlaka yapın.", "sigani eopdeorado achimeun kkok deuseyo"],
          ["태풍{에도 불구하고} 비행기가 정상 운항했다.", "Tayfun{a rağmen} uçaklar normal sefer yaptı.", "taepungedo bulguhago bihaenggiga jeongsang unhanghaetda"]
        ] },
        { t: "ozet", l: [
          "<b>-(으)ㄴ/는 반면에</b>: iki zıt yön (artı ↔ eksi); isimde <i>N인 반면에</i>.",
          "<b>-(으)면서도</b>: aynı öznenin çelişen iki durumu (bildiği hâlde).",
          "<b>-는데도</b>: gerçek durum + beklenmeyen sonuç (…-masına rağmen).",
          "<b>-더라도</b>: varsayım (…-se bile); ana cümlede emir ve öneri olabilir.",
          "Resmî: <b>-는데도 불구하고</b>, <i>N에도 불구하고</i>."
        ] }
      ],
      test: [
        { s: "“Yağmur yağmasına rağmen dışarı çıktı.”", o: ["비가 오는데도 나갔어요.", "비가 오더라도 나갔어요.", "비가 오는 반면에 나갔어요."], d: 0, a: "Gerçek durum: -는데도." },
        { s: "“Yarın yağmur yağsa bile gideceğim.”", o: ["내일 비가 오는데도 갈 거예요.", "내일 비가 오더라도 갈 거예요.", "내일 비가 오면서도 갈 거예요."], d: 1, a: "Varsayım: -더라도." },
        { s: "이 집은 넓___ 교통이 불편해요.", o: ["은 반면에", "는 반면에", "더니"], d: 0, a: "Sıfat: -(으)ㄴ 반면에." },
        { s: "“Bildiği hâlde söylemedi.”", o: ["알면서도 말하지 않았어요.", "알더라도 말하지 않았어요.", "아는 반면에 말하지 않았어요."], d: 0, a: "Aynı öznenin çelişkisi: -(으)면서도." },
        { s: "“Zor olsa bile vazgeçmeyin.”", o: ["힘든데도 포기하지 마세요.", "힘들더라도 포기하지 마세요.", "힘든 반면에 포기하지 마세요."], d: 1, a: "Emir cümlesi: -더라도." },
        { s: "열심히 공부했___ 떨어졌어요.", o: ["는데도", "더라도", "는 반면에"], d: 0, a: "Olmuş durum: -았/었는데도." },
        { s: "“Tayfuna rağmen maç oynandı.” (haber)", o: ["태풍에도 불구하고 경기가 열렸다.", "태풍더라도 경기가 열렸다.", "태풍인 반면에 경기가 열렸다."], d: 0, a: "İsimle resmî: N에도 불구하고." },
        { s: "학생___ 반면에 (isim)", o: ["인", "은", "이는"], d: 0, a: "İsim: N인 반면에." },
        { s: "-더라도'nun Türkçe karşılığı?", o: ["…-se bile", "…-dığı için", "…-dıkça"], d: 0, a: "Varsayımsal ödün: -se bile." },
        { s: "“Maaşı yüksek, öte yandan işi zor.”", o: ["월급이 많은 반면에 일이 힘들어요.", "월급이 많더라도 일이 힘들어요.", "월급이 많아서 일이 힘들어요."], d: 0, a: "İki zıt yön: -(으)ㄴ 반면에." }
      ]
    },
    {
      id: "ko-t3-11", seviye: "TOPIK 3", sure: 12,
      baslik: "Tahmin: -나 보다, -(으)ㄴ/는 모양이다, -(으)ㄹ 텐데, -아/어 보이다",
      kisa: "오나 봐요 · 바쁜 모양이에요 · 추울 텐데 · 피곤해 보여요",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 30) tahmini <b>것 같아요</b> ile yaptın; bu en genel biçimdir. TOPIK 3'te tahminin <b>dayanağını</b> da gösteren kalıplar öğreniyorsun: gördüğün bir ipucuna dayanan tahmin (<b>-나 보다</b>, <b>-(으)ㄴ/는 모양이다</b>), görünüşten izlenim (<b>-아/어 보이다</b>) ve bir tahmine dayanan endişe ya da öneri (<b>-(으)ㄹ 텐데</b>). <b>Kullanım alanı:</b> -나 보다 ve -(으)ㄹ 텐데 konuşma; 모양이다 her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu tahminler <b>galiba, -mış gibi, -dır herhalde</b> ve “… görünüyor” ile verilir.", l: [
          ["Dışarıda yağmur [yağ]{ıyor galiba}.", "밖에 비가 [오]{나 봐요}.", "bakke biga ona bwayo"],
          ["Bu aralar [meşgul] {olmalı}.", "요즘 [바쁜] {모양이에요}.", "yojeum bappeun moyangieyo"],
          ["Yorgun [görün]{üyorsun}.", "[피곤해] {보여요}.", "pigonhae boyeoyo"],
          ["Hava [soğuk]{tur}, mont giy.", "[추울] {텐데} 코트 입으세요.", "chuul tende koteu ibeuseyo"]
        ] },
        { t: "tablo", h: "Kurulum", bas: ["Kalıp", "Fiil", "Sıfat", "İsim"], s: [
          ["-나 보다 / -(으)ㄴ가 보다", "[가]{나 봐요}|gana bwayo", "[바쁜]{가 봐요}|bappeunga bwayo", "[학생인]{가 봐요}|haksaenginga bwayo"],
          ["-(으)ㄴ/는 모양이다", "[가]{는 모양이에요}|ganeun moyangieyo", "[바쁜] {모양이에요}|bappeun moyangieyo", "[학생인] {모양이에요}|haksaengin moyangieyo"],
          ["-(으)ㄹ 텐데", "[갈] {텐데}|gal tende", "[바쁠] {텐데}|bappeul tende", "[학생일] {텐데}|haksaengil tende"],
          ["-아/어 보이다", "—", "[바빠] {보여요}|bappa boyeoyo", "[학생]{처럼 보여요}|haksaengcheoreom boyeoyo"]
        ] },
        { t: "metin", h: "-나 보다: gördüğüne dayanarak", m: "<b>-나 보다</b> konuşanın gördüğü, duyduğu bir ipucuna dayanarak yaptığı tahmindir: <i>(우산이 젖어 있어요.) 비가 <b>오나 봐요</b></i> (Şemsiyeler ıslak; yağmur yağıyor galiba). Geçmişte <i>-았/었나 보다</i>: <i>민수 씨가 <b>왔나 봐요</b>. 신발이 있어요</i> (Minsu gelmiş galiba, ayakkabıları burada). <b>Kendi hakkında kullanılmaz</b>, çünkü kendi durumunu bilirsin. İstisna, kendinle ilgili yeni bir fark ediş: <i>제가 많이 <b>피곤했나 봐요</b></i> (Meğer çok yorgunmuşum)." },
        { t: "metin", h: "-(으)ㄴ/는 모양이다: biraz daha nesnel", m: "<b>-(으)ㄴ/는 모양이다</b> anlamca -나 보다'ya çok yakındır ama biraz daha nesneldir; yazıda da kullanılır: <i>사람들이 우산을 쓰고 있는 걸 보니 비가 <b>오는 모양이다</b></i> (İnsanların şemsiye açtığına bakılırsa yağmur yağıyor olmalı). Kalıp <i>-는 걸 보니</i> (…-diğine bakılırsa) ile çok sık birlikte gelir." },
        { t: "ipucu", h: "-아/어 보이다: görünüş", m: "<b>-아/어 보이다</b> sıfatlara gelir ve gözle görülen izlenimi anlatır: <i>피곤해 <b>보여요</b></i> (Yorgun görünüyorsun), <i>이 케이크 맛있어 <b>보여요</b></i> (Bu pasta lezzetli görünüyor). 34. dersteki <i>보이다</i>'nın (görünmek) devamıdır. İsimle <b>N처럼 보이다</b>: <i>학생처럼 보여요</i> (Öğrenci gibi görünüyor)." },
        { t: "metin", h: "-(으)ㄹ 텐데: tahmin + endişe", m: "<b>-(으)ㄹ 텐데</b> bir tahmini söyleyip arkasından endişe, öneri ya da dilek getirir: <i>길이 <b>막힐 텐데</b> 지하철을 타세요</i> (Yol tıkalıdır herhalde, metroya binin). Cümle sonunda <b>-(으)ㄹ 텐데요</b> yumuşak bir endişe ya da itiraz bildirir: <i>그 식당은 벌써 문을 <b>닫았을 텐데요</b></i> (O lokanta çoktan kapanmıştır ama). <i>-(으)면 좋을 텐데</i> “keşke … olsa” anlamına gelir: <i>시간이 <b>있으면 좋을 텐데</b></i> (Keşke vaktim olsa)." },
        { t: "tablo", h: "Hangisi ne zaman?", bas: ["Kalıp", "Dayanak", "Ton", "Örnek"], s: [
          ["것 같아요", "her türlü", "genel, yumuşak", "비가 올 것 같아요.|biga ol geot gatayo"],
          ["-나 보다", "gördüğün ipucu", "konuşma", "비가 오나 봐요.|biga ona bwayo"],
          ["-는 모양이다", "gördüğün ipucu", "daha nesnel, yazıda da", "비가 오는 모양이에요.|biga oneun moyangieyo"],
          ["-아/어 보이다", "görünüş (sıfat)", "izlenim", "피곤해 보여요.|pigonhae boyeoyo"],
          ["-(으)ㄹ 텐데", "tahmin, ardından öneri ya da endişe", "konuşma", "추울 텐데 코트 입으세요.|chuul tende koteu ibeuseyo"]
        ] },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-나 보다", "Fiil -나 보다; sıfat -(으)ㄴ가 보다; geçmiş -았/었나 보다; kendi hakkında kullanılmaz|-na boda"],
          ["-(으)ㄴ/는 모양이다", "Fiil -는/(으)ㄴ, sıfat -(으)ㄴ, isim N인|-(eu)n/neun moyangida"],
          ["-아/어 보이다", "Sıfat; isimde N처럼 보이다|-a/eo boida"],
          ["-(으)ㄹ 텐데", "Fiil, sıfat, isim; arkasından öneri, endişe, dilek|-(eu)l tende"],
          ["Kullanım", "-나 보다, 텐데: konuşma; 모양이다: her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["저는 배가 [고프]{나 봐요}.|jeoneun baega gopeuna bwayo", "저는 배가 [고파]{요}.|jeoneun baega gopayo", "kendi bildiğin durum: -나 보다 olmaz"],
          ["그 사람이 [학생] {보여요}.|geu sarami haksaeng boyeoyo", "그 사람이 [학생]{처럼} 보여요.|geu sarami haksaengcheoreom boyeoyo", "isimle: N처럼 보이다"],
          ["길이 [막히]{는} 텐데 지하철을 타세요.|giri makineun tende jihacheoreul taseyo", "길이 [막힐] {텐데} 지하철을 타세요.|giri makil tende jihacheoreul taseyo", "-(으)ㄹ 텐데"],
          ["(ayakkabıları burada) 민수 씨가 [오]{나 봐요}.|minsu ssiga ona bwayo", "(ayakkabıları burada) 민수 씨가 [왔]{나 봐요}.|minsu ssiga wanna bwayo", "olmuş olay: -았/었나 보다"]
        ] },
        { t: "diyalog", h: "Ofiste", l: [
          ["하은", "팀장님이 오늘 기분이 [좋으신] {모양이에요}. 계속 웃으세요.", "Müdür bugün keyifli olmalı. Sürekli gülümsüyor.", "timjangnimi oneul gibuni joeusin moyangieyo. gyesok useuseyo"],
          ["민호", "어제 계약이 [성공했]{나 봐요}.", "Dün sözleşme başarılı olmuş galiba.", "eoje gyeyagi seonggonghaenna bwayo"],
          ["하은", "그런데 민호 씨는 좀 [피곤해] {보여요}.", "Ama Minho, sen biraz yorgun görünüyorsun.", "geureonde minho ssineun jom pigonhae boyeoyo"],
          ["민호", "어제 밤늦게까지 일했어요.", "Dün gece geç saate kadar çalıştım.", "eoje bamneutgekkaji ilhaesseoyo"],
          ["하은", "오늘은 일찍 들어가세요. 내일도 [바쁠] {텐데}.", "Bugün erken çık. Yarın da yoğun olacaktır.", "oneureun iljjik deureogaseyo. naeildo bappeul tende"],
          ["민호", "고마워요. 그런데 회의가 아직 안 [끝났]{을 텐데요}.", "Sağ ol. Ama toplantı daha bitmemiştir herhalde.", "gomawoyo. geureonde hoeuiga ajik an kkeunnasseul tendeyo"]
        ] },
        { t: "ornek", l: [
          ["불이 꺼져 있네요. 아무도 [없]{나 봐요}.", "Işıklar sönük. Kimse [yok] {galiba}.", "buri kkeojyeo inneyo. amudo eomna bwayo"],
          ["민지 씨가 계속 웃는 걸 보니 좋은 일이 [있]{나 봐요}.", "Minji'nin sürekli gülümsemesine bakılırsa iyi bir şey [ol]{muş galiba}.", "minji ssiga gyesok unneun geol boni joeun iri inna bwayo"],
          ["길에 사람이 많은 걸 보니 축제가 [열리]{는 모양이에요}.", "Sokakta çok insan olduğuna bakılırsa festival [yapıl]{ıyor olmalı}.", "gire sarami maneun geol boni chukjega yeollineun moyangieyo"],
          ["두 사람이 [싸운] {모양이에요}. 서로 말을 안 해요.", "İkisi [kavga et]{miş olmalı}. Birbirleriyle konuşmuyorlar.", "du sarami ssaun moyangieyo. seoro mareul an haeyo"],
          ["이 가방은 [튼튼해] {보여요}.", "Bu çanta [sağlam] {görünüyor}.", "i gabangeun teunteunhae boyeoyo"],
          ["할머니가 나이보다 [젊어] {보이세요}.", "Büyükannem yaşından [genç] {görünüyor}.", "halmeoniga naiboda jeolmeo boiseyo"],
          ["지금 출발하면 [늦을] {텐데} 택시를 탈까요?", "Şimdi çıkarsak [geç kal]{ırız herhalde}, taksiye mi binsek?", "jigeum chulbalhamyeon neujeul tende taeksireul talkkayo?"],
          ["돈이 많으면 [좋을] {텐데}.", "Keşke çok param [ol]{sa}.", "doni maneumyeon joeul tende"]
        ] },
        { t: "ozet", l: [
          "<b>-나 보다 / -(으)ㄴ가 보다</b>: gördüğün ipucuna dayanan tahmin (galiba); kendi hakkında kullanılmaz.",
          "<b>-(으)ㄴ/는 모양이다</b>: aynı anlam, daha nesnel; <i>-는 걸 보니</i> ile sık.",
          "<b>-아/어 보이다</b>: sıfatla görünüş (yorgun görünüyor); isimde <i>N처럼 보이다</i>.",
          "<b>-(으)ㄹ 텐데</b>: tahmin + öneri, endişe; <i>-(으)면 좋을 텐데</i> = keşke.",
          "Genel ve yumuşak tahmin için yine <b>것 같아요</b>."
        ] }
      ],
      test: [
        { s: "(Şemsiyeler ıslak.) 밖에 비가 ___.", o: ["오나 봐요", "올 텐데", "와 보여요"], d: 0, a: "Görülen ipucuna dayanan tahmin: -나 보다." },
        { s: "“Yorgun görünüyorsun.”", o: ["피곤해 보여요.", "피곤할 텐데요.", "피곤해 놓았어요."], d: 0, a: "Görünüş: -아/어 보이다." },
        { s: "“Hava soğuktur herhalde, mont giy.”", o: ["추울 텐데 코트 입으세요.", "추웠나 봐서 코트 입으세요.", "추워 보여서 코트 입었어요."], d: 0, a: "Tahmin + öneri: -(으)ㄹ 텐데." },
        { s: "Hangisi yanlıştır?", o: ["저는 배가 고프나 봐요.", "민수 씨가 배가 고픈가 봐요.", "아이가 배가 고픈 모양이에요."], d: 0, a: "Kendi bildiğin durum için -나 보다 kullanılmaz." },
        { s: "(Ayakkabıları burada.) 민수 씨가 ___.", o: ["오나 봐요", "왔나 봐요", "올 텐데요"], d: 1, a: "Olmuş olay: -았/었나 보다." },
        { s: "바쁘다 + -나 보다 (sıfat)?", o: ["바쁜가 봐요", "바쁘는가 봐요", "바빠 봐요"], d: 0, a: "Sıfat: -(으)ㄴ가 보다." },
        { s: "“Öğrenci gibi görünüyor.”", o: ["학생처럼 보여요.", "학생 보여요.", "학생해 보여요."], d: 0, a: "İsim: N처럼 보이다." },
        { s: "“Keşke vaktim olsa.”", o: ["시간이 있으면 좋을 텐데.", "시간이 있나 봐요.", "시간이 있어 보여요."], d: 0, a: "Dilek: -(으)면 좋을 텐데." },
        { s: "Hangisi daha nesnel, yazıda da kullanılan tahmindir?", o: ["-나 보다", "-(으)ㄴ/는 모양이다", "-(으)ㄹ 텐데"], d: 1, a: "모양이다 her iki alanda kullanılır." },
        { s: "-아/어 보이다 neye eklenir?", o: ["Sıfatlara", "Fiillere", "İsimlere"], d: 0, a: "Görünüş bildirir: sıfat. İsimde N처럼 보이다." }
      ]
    },
    {
      id: "ko-t3-12", seviye: "TOPIK 3", sure: 12,
      baslik: "İmkânsızlık, kıl payı, pişmanlık: -(으)ㄹ 리가 없다, -(으)ㄹ 뻔하다, -(으)ㄹ 걸 그랬다",
      kisa: "그럴 리가 없어요 · 늦을 뻔했어요 · 일찍 올 걸 그랬어요",
      bolumler: [
        { t: "metin", m: "Bu derste ortaçlı üç kalıp öğreniyorsun; üçü de A2 Ders 26'daki <b>-(으)ㄹ</b> ortacına dayanır: kesin inkâr (<b>-(으)ㄹ 리가 없다</b>: …-mesi imkânsız), kıl payı kurtuluş (<b>-(으)ㄹ 뻔하다</b>: az kalsın …-yordu) ve pişmanlık (<b>-(으)ㄹ 걸 그랬다</b>: keşke …-seydim). Üçü de günlük konuşmada çok sık duyulur. <b>Kullanım alanı:</b> konuşma ağırlıklı; 리가 없다 yazıda da." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu anlamlar <b>-mesi imkânsız, az kalsın, keşke …-seydim</b> ile verilir. Korecede üçü de -(으)ㄹ ortacıyla kurulur.", l: [
          ["Onun yalan [söyle]{mesi imkânsız}.", "그 사람이 거짓말을 [할] {리가 없어요}.", "geu sarami geojinmareul hal riga eopseoyo"],
          ["Az kalsın [düş]{üyordum}.", "[넘어질] {뻔했어요}.", "neomeojil ppeonhaesseoyo"],
          ["Keşke erken [çık]{saydım}.", "일찍 [출발할] {걸 그랬어요}.", "iljjik chulbalhal geol geuraesseoyo"],
          ["Keşke o kadar [ye]{meseydim}.", "그렇게 많이 [먹지 말] {걸 그랬어요}.", "geureoke mani meokji mal geol geuraesseoyo"]
        ] },
        { t: "tablo", h: "Üç kalıp", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["-(으)ㄹ 리가 없다", "…-mesi imkânsız, olamaz", "[그럴] {리가 없어요}.|geureol riga eopseoyo"],
          ["-(으)ㄹ 뻔하다", "az kalsın …-yordu (olmadı)", "사고가 [날] {뻔했어요}.|sagoga nal ppeonhaesseoyo"],
          ["-(으)ㄹ 걸 그랬다", "keşke …-seydim", "[물어볼] {걸 그랬어요}.|mureobol geol geuraesseoyo"],
          ["-지 말 걸 그랬다", "keşke …-meseydim", "[사지 말] {걸 그랬어요}.|saji mal geol geuraesseoyo"]
        ] },
        { t: "metin", h: "-(으)ㄹ 리가 없다: kesin inkâr", m: "<b>리</b> “sebep, ihtimal” demektir; <b>-(으)ㄹ 리가 없다</b> “… olmasının hiçbir ihtimali yok” anlamına gelir. Konuşan kişi mantıklı bir gerekçeyle kesin inanır: <i>민수 씨는 성실해서 <b>늦을 리가 없어요</b></i> (Minsu çok dikkatli, geç kalması imkânsız). Geçmişte <i>-았/었을 리가 없다</i>: <i>벌써 <b>끝났을 리가 없어요</b></i> (Çoktan bitmiş olamaz). Şaşkınlık tepkisi olarak <i>그럴 리가요!</i> (Olamaz!) çok kullanılır." },
        { t: "metin", h: "-(으)ㄹ 뻔하다: kıl payı", m: "<b>-(으)ㄹ 뻔하다</b> bir şeyin <b>neredeyse olduğunu ama olmadığını</b> anlatır; hep geçmiş zamanda kullanılır: <i>미끄러워서 <b>넘어질 뻔했어요</b></i> (Kaygandı, az kalsın düşüyordum). Vurgu için <i>하마터면</i> (az kalsın) ile birlikte gelir: <i><b>하마터면</b> 비행기를 <b>놓칠 뻔했어요</b></i> (Az kalsın uçağı kaçırıyordum). Abartma için de kullanılır: <i>웃겨서 <b>죽을 뻔했어요</b></i> (Gülmekten ölecektim)." },
        { t: "metin", h: "-(으)ㄹ 걸 그랬다: pişmanlık", m: "<b>-(으)ㄹ 걸 그랬다</b> yapmadığın bir şey için pişmanlığı anlatır: <i>우산을 <b>가져올 걸 그랬어요</b></i> (Keşke şemsiye getirseydim). Yaptığın şeye pişmansan olumsuz biçim <b>-지 말 걸 그랬다</b>: <i>그 말을 <b>하지 말 걸 그랬어요</b></i> (Keşke o sözü söylemeseydim). Konuşmada kısaca <b>-(으)ㄹ걸</b> denir: <i>더 <b>공부할걸</b></i> (Keşke daha çok çalışsaydım)." },
        { t: "ipucu", h: "-(으)ㄹ걸: iki anlamı var", m: "Cümle sonundaki <b>-(으)ㄹ걸</b> düşen tonla pişmanlık (<i>더 공부할걸↘</i>: keşke daha çok çalışsaydım), yükselen tonla tahmin bildirir (<i>민수 씨는 벌써 집에 갔을걸↗</i>: Minsu çoktan eve gitmiştir bence). Yazıda bağlamdan anlaşılır; pişmanlıkta <i>그랬다</i> eklemek anlamı netleştirir." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-(으)ㄹ 리가 없다", "Fiil, sıfat, isim (N일 리가 없다); geçmiş -았/었을 리가 없다|-(eu)l riga eopda"],
          ["-(으)ㄹ 뻔하다", "Fiil; hep geçmiş: -(으)ㄹ 뻔했다; istenmeyen bir şey neredeyse oldu|-(eu)l ppeonhada"],
          ["-(으)ㄹ 걸 그랬다", "Fiil; olumsuzu -지 말 걸 그랬다; konuşanın kendi pişmanlığı|-(eu)l geol geuraetda"],
          ["Vurgu", "하마터면 … 뻔했다|hamateomyeon"],
          ["Kullanım", "Konuşma ağırlıklı; 리가 없다 yazıda da"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["어제 넘어질 [뻔해]{요}.|eoje neomeojil ppeonhaeyo", "어제 넘어질 [뻔했]{어요}.|eoje neomeojil ppeonhaesseoyo", "-(으)ㄹ 뻔하다 hep geçmiş zamanda"],
          ["(gerçekten düştüm) 계단에서 [넘어질] {뻔했어요}. 다리가 아파요.|gyedaneseo neomeojil ppeonhaesseoyo. dariga apayo", "(gerçekten düştüm) 계단에서 [넘어졌]{어요}. 다리가 아파요.|gyedaneseo neomeojyeosseoyo. dariga apayo", "뻔하다: olmadı demek; olduysa düz geçmiş"],
          ["(düz cümle) 그 사람이 [올] {리가 있어요}.|geu sarami ol riga isseoyo", "그 사람이 [올] {리가 없어요}.|geu sarami ol riga eopseoyo", "inkâr: 리가 없다"],
          ["(getirmediğine pişman) 우산을 [안 가져올] {걸 그랬어요}.|usaneul an gajyeool geol geuraesseoyo", "우산을 [가져올] {걸 그랬어요}.|usaneul gajyeool geol geuraesseoyo", "yapmadığına pişmanlık: olumlu -(으)ㄹ 걸"]
        ] },
        { t: "diyalog", h: "Havalimanında", l: [
          ["유진", "하마터면 비행기를 [놓칠] {뻔했어요}!", "Az kalsın uçağı kaçırıyordum!", "hamateomyeon bihaenggireul nochil ppeonhaesseoyo!"],
          ["상우", "왜요? 일찍 출발했잖아요.", "Neden? Erken çıkmıştın ya.", "waeyo? iljjik chulbalhaetjanayo"],
          ["유진", "여권을 집에 두고 왔어요. 다시 갔다 왔어요.", "Pasaportu evde unutmuşum. Dönüp aldım.", "yeogwoneul jibe dugo wasseoyo. dasi gatda wasseoyo"],
          ["상우", "설마요! 유진 씨가 여권을 [잊어버렸을] {리가 없어요}.", "Yok artık! Sen pasaportunu unutmuş olamazsın.", "seolmayo! yujin ssiga yeogwoneul ijeobeoryeosseul riga eopseoyo"],
          ["유진", "정말이에요. 어젯밤에 짐을 미리 [챙길] {걸 그랬어요}.", "Gerçekten. Keşke dün gece eşyalarımı önceden toplasaydım.", "jeongmarieyo. eojetbame jimeul miri chaenggil geol geuraesseoyo"],
          ["상우", "그래도 다행이에요. 저도 지난번에 길을 잃어서 [늦을] {뻔했어요}.", "Yine de iyi. Ben de geçen sefer yolu kaybedip az kalsın geç kalıyordum.", "geuraedo dahaengieyo. jeodo jinanbeone gireul ireoseo neujeul ppeonhaesseoyo"]
        ] },
        { t: "ornek", l: [
          ["착한 민수 씨가 그런 말을 [했을] {리가 없어요}.", "İyi kalpli Minsu öyle bir söz [söyle]{miş olamaz}.", "chakan minsu ssiga geureon mareul haesseul riga eopseoyo"],
          ["이 시간에 가게가 [열었을] {리가 없어요}.", "Bu saatte dükkân [açık] {olamaz}.", "i sigane gagega yeoreosseul riga eopseoyo"],
          ["지하철에서 졸아서 내릴 역을 [지나칠] {뻔했어요}.", "Metroda uyukladığım için az kalsın ineceğim durağı [kaçır]{ıyordum}.", "jihacheoreseo jorase naeril yeogeul jinachil ppeonhaesseoyo"],
          ["하마터면 지갑을 [잃어버릴] {뻔했어요}.", "Az kalsın cüzdanımı [kaybed]{iyordum}.", "hamateomyeon jigabeul ireobeoril ppeonhaesseoyo"],
          ["너무 웃겨서 [죽을] {뻔했어요}.", "Çok komikti, gülmekten [öl]{ecektim}.", "neomu utgyeoseo jugeul ppeonhaesseoyo"],
          ["시험 전에 더 [복습할] {걸 그랬어요}.", "Keşke sınavdan önce daha çok [tekrar et]{seydim}.", "siheom jeone deo bokseupal geol geuraesseoyo"],
          ["그 옷을 [사지 말] {걸 그랬어요}. 한 번도 안 입었어요.", "Keşke o elbiseyi [al]{masaydım}. Bir kez bile giymedim.", "geu oseul saji mal geol geuraesseoyo. han beondo an ibeosseoyo"],
          ["친구 말을 [들을] {걸 그랬어요}.", "Keşke arkadaşımın sözünü [dinle]{seydim}.", "chingu mareul deureul geol geuraesseoyo"]
        ] },
        { t: "ozet", l: [
          "<b>-(으)ㄹ 리가 없다</b>: …-mesi imkânsız; geçmişte <i>-았/었을 리가 없다</i>; tepki: <i>그럴 리가요!</i>",
          "<b>-(으)ㄹ 뻔하다</b>: az kalsın …-yordu (olmadı); hep geçmiş; <i>하마터면</i> ile.",
          "<b>-(으)ㄹ 걸 그랬다</b>: keşke …-seydim; olumsuz <b>-지 말 걸 그랬다</b>.",
          "Konuşmada kısa: <i>-(으)ㄹ걸</i> (düşen ton pişmanlık, yükselen ton tahmin).",
          "Üçü de -(으)ㄹ ortacına dayanır."
        ] }
      ],
      test: [
        { s: "“Minsu'nun geç kalması imkânsız.”", o: ["민수 씨가 늦을 리가 없어요.", "민수 씨가 늦을 뻔했어요.", "민수 씨가 늦을 걸 그랬어요."], d: 0, a: "Kesin inkâr: -(으)ㄹ 리가 없다." },
        { s: "“Az kalsın düşüyordum.”", o: ["넘어질 뻔했어요.", "넘어졌어요.", "넘어질 리가 없어요."], d: 0, a: "Kıl payı: -(으)ㄹ 뻔했다." },
        { s: "“Keşke şemsiye getirseydim.”", o: ["우산을 가져올 걸 그랬어요.", "우산을 가져오지 말 걸 그랬어요.", "우산을 가져올 뻔했어요."], d: 0, a: "Yapmadığına pişmanlık: -(으)ㄹ 걸 그랬다." },
        { s: "“Keşke o kadar içmeseydim.”", o: ["그렇게 많이 마실 걸 그랬어요.", "그렇게 많이 마시지 말 걸 그랬어요.", "그렇게 많이 마실 리가 없어요."], d: 1, a: "Yaptığına pişmanlık: -지 말 걸 그랬다." },
        { s: "-(으)ㄹ 뻔하다 hangi zamanda kullanılır?", o: ["Hep geçmiş", "Hep gelecek", "Hep şimdiki"], d: 0, a: "Neredeyse olmuş ama olmamış şey: -(으)ㄹ 뻔했다." },
        { s: "“Çoktan bitmiş olamaz.”", o: ["벌써 끝날 뻔했어요.", "벌써 끝났을 리가 없어요.", "벌써 끝날 걸 그랬어요."], d: 1, a: "Geçmiş inkâr: -았/었을 리가 없다." },
        { s: "하마터면 사고가 ___.", o: ["날 뻔했어요", "날 리가 없어요", "났을 걸 그랬어요"], d: 0, a: "하마터면 + -(으)ㄹ 뻔했다." },
        { s: "—Minsu sınavda kalmış. —“Olamaz!”", o: ["그럴 리가요!", "그럴 뻔했어요!", "그럴 걸 그랬어요!"], d: 0, a: "Şaşkınlık tepkisi: 그럴 리가요!" },
        { s: "“Gülmekten ölecektim.”", o: ["웃겨서 죽을 뻔했어요.", "웃겨서 죽을 리가 없어요.", "웃겨서 죽을 걸 그랬어요."], d: 0, a: "Abartma: -(으)ㄹ 뻔했다." },
        { s: "Cümle sonu -(으)ㄹ걸 düşen tonla ne anlatır?", o: ["Pişmanlık", "Emir", "Soru"], d: 0, a: "Düşen ton pişmanlık, yükselen ton tahmin." }
      ]
    },
    {
      id: "ko-t3-13", seviye: "TOPIK 3", sure: 12,
      baslik: "Zaman ilişkisi: -자마자, -다가, -았/었다가",
      kisa: "도착하자마자 · 걷다가 넘어졌어요 · 갔다가 왔어요",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 24) iki olayın zaman sırasını -기 전에, -(으)ㄴ 후에, -(으)면서 ile anlattın. TOPIK 3'te iki yeni ilişki var: bir olayın <b>hemen ardından</b> ötekinin gelmesi (<b>-자마자</b>) ve bir eylemin <b>yarıda kesilip</b> başka bir şeye geçilmesi (<b>-다가</b>). -다가'nın geçmiş biçimi <b>-았/었다가</b> ise eylem bittikten sonra çoğunlukla tersine dönen bir durumu anlatır. <b>Kullanım alanı:</b> her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bunlar zarf-fiillerle verilir: <b>-r …-mez</b> (eve gelir gelmez), <b>-ken</b> (yürürken), <b>-ip</b> (gidip geldim).", l: [
          ["Eve [gel]{ir gelmez} uyudum.", "집에 [오]{자마자} 잤어요.", "jibe ojamaja jasseoyo"],
          ["Yolda [yürü]{rken} düştüm.", "길을 [걷]{다가} 넘어졌어요.", "gireul geotdaga neomeojyeosseoyo"],
          ["TV [izle]{rken} uyuyakaldım.", "TV를 [보]{다가} 잠들었어요.", "tibireul bodaga jamdeureosseoyo"],
          ["Markete [gid]{ip} geldim.", "마트에 [갔]{다가} 왔어요.", "mateue gatdaga wasseoyo"]
        ] },
        { t: "tablo", h: "Üç kalıp", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["-자마자", "…-r …-mez", "[일어나]{자마자} 물을 마셔요.|ireonajamaja mureul masyeoyo"],
          ["-다가", "…-rken (eylem kesilir)", "[자]{다가} 깼어요.|jadaga kkaesseoyo"],
          ["-았/었다가", "…-ip (bitti), sonra tersi", "[샀]{다가} 환불했어요.|satdaga hwanbulhaesseoyo"]
        ] },
        { t: "metin", h: "-자마자: hemen ardından", m: "<b>-자마자</b> birinci olay biter bitmez ikincisinin başladığını anlatır: <i>수업이 <b>끝나자마자</b> 집에 갔어요</i> (Ders biter bitmez eve gittim). Yalnız fiillere gelir ve geçmiş eki almaz; zamanı ana cümle gösterir. İki cümlenin öznesi farklı olabilir. Ana cümlede emir de gelebilir: <i>도착하<b>자마자</b> 전화하세요</i> (Varır varmaz arayın). Benzer anlamdaki <i>-는 대로</i> daha çok gelecek ve rica için kullanılır: <i>결과가 <b>나오는 대로</b> 알려 드릴게요</i> (Sonuç çıkar çıkmaz bildiririm)." },
        { t: "metin", h: "-다가: yarıda kesilen eylem", m: "<b>-다가</b> birinci eylem sürerken durup ikinci eyleme geçildiğini anlatır: <i>공부하<b>다가</b> 잠깐 쉬었어요</i> (Ders çalışırken biraz mola verdim). Birinci eylem sırasında beklenmedik bir şey olduğunu da anlatır: <i>요리하<b>다가</b> 손을 데었어요</i> (Yemek yaparken elimi yaktım). İki cümlenin öznesi <b>aynı</b>dır. Konuşmada <b>-다</b> diye kısalır: <i>집에 가다 친구를 만났어요</i>." },
        { t: "metin", h: "-았/었다가: bitti, sonra tersine döndü", m: "<b>-았/었다가</b> birinci eylemin <b>tamamlandığını</b>, sonra çoğunlukla ters bir eylemin geldiğini anlatır: <i>창문을 <b>열었다가</b> 추워서 닫았어요</i> (Pencereyi açtım ama üşüyünce kapattım), <i>옷을 <b>샀다가</b> 환불했어요</i> (Elbiseyi aldım, sonra iade ettim). Gidip dönmek için kalıp: <i>은행에 <b>갔다가</b> 올게요</i> (Bankaya gidip geleceğim)." },
        { t: "tablo", h: "-다가 mı, -았/었다가 mı?", bas: ["Örnek", "Anlam"], s: [
          ["학교에 [가]{다가} 돌아왔어요.|hakgyoe gadaga dorawasseoyo", "Okula giderken (yolun ortasından) geri döndüm."],
          ["학교에 [갔]{다가} 돌아왔어요.|hakgyoe gatdaga dorawasseoyo", "Okula gittim (vardım), sonra geri döndüm."],
          ["버스를 [타]{다가} 내렸어요.|beoseureul tadaga naeryeosseoyo", "Otobüsle giderken yarı yolda indim."],
          ["버스를 [탔]{다가} 내렸어요.|beoseureul tatdaga naeryeosseoyo", "Otobüse bindim, sonra (vazgeçip) indim."]
        ] },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-자마자", "Fiil; geçmiş eki yok; özneler farklı olabilir; emir olur|-jamaja"],
          ["-다가", "Fiil (sıfatta durum değişimi: 춥다가 더워요); aynı özne|-daga"],
          ["-았/었다가", "Eylem bitti, sonra ters ya da başka eylem|-atdaga / -eotdaga"],
          ["Kısaltma", "-다가 → -다: 가다 만났어요|-da"],
          ["Kullanım", "Her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["집에 [왔]{자마자} 잤어요.|jibe watjamaja jasseoyo", "집에 [오]{자마자} 잤어요.|jibe ojamaja jasseoyo", "-자마자 geçmiş eki almaz"],
          ["친구가 [걷]{다가} 제가 넘어졌어요.|chinguga geotdaga jega neomeojyeosseoyo", "[걷]{다가} 넘어졌어요.|geotdaga neomeojyeosseoyo", "-다가: iki cümlede aynı özne"],
          ["(açtım, sonra kapattım) 문을 [열]{다가} 다시 닫았어요.|muneul yeoldaga dasi dadasseoyo", "(açtım, sonra kapattım) 문을 [열었]{다가} 다시 닫았어요.|muneul yeoreotdaga dasi dadasseoyo", "bitmiş eylem + ters eylem: -았/었다가"]
        ] },
        { t: "diyalog", h: "Kayıp telefon", l: [
          ["소희", "회의 [끝나]{자마자} 전화했는데 왜 안 받았어요?", "Toplantı biter bitmez aradım, neden açmadın?", "hoeui kkeunnajamaja jeonhwahaenneunde wae an badasseoyo?"],
          ["태오", "미안해요. 지하철을 [타]{다가} 휴대폰을 떨어뜨렸어요.", "Kusura bakma. Metroyla giderken telefonumu düşürdüm.", "mianhaeyo. jihacheoreul tadaga hyudaeponeul tteoreotteuryeosseoyo"],
          ["소희", "어머, 찾았어요?", "Aa, buldun mu?", "eomeo, chajasseoyo?"],
          ["태오", "네, 역무실에 [갔]{다가} 찾아서 왔어요.", "Evet, istasyon ofisine gidip telefonu bulup geldim.", "ne, yeongmusire gatdaga chajaseo wasseoyo"],
          ["소희", "다행이네요. 그럼 회의 자료는 [받]{자마자} 확인해 주세요.", "Neyse ki. O zaman toplantı belgelerini alır almaz kontrol et lütfen.", "dahaengineyo. geureom hoeui jaryoneun batjamaja hwaginhae juseyo"],
          ["태오", "네, 지금 [보]{다가} 궁금한 게 있으면 연락할게요.", "Tamam, şimdi bakarken merak ettiğim bir şey olursa yazarım.", "ne, jigeum bodaga gunggeumhan ge isseumyeon yeollakalgeyo"]
        ] },
        { t: "ornek", l: [
          ["그 소식을 [듣]{자마자} 울기 시작했어요.", "O haberi [duy]{ar duymaz} ağlamaya başladı.", "geu sosigeul deutjamaja ulgi sijakaesseoyo"],
          ["[졸업하]{자마자} 취직했어요.", "Mezun [ol]{ur olmaz} işe girdim.", "joreopajamaja chwijikaesseoyo"],
          ["[도착하]{자마자} 연락 주세요.", "[Var]{ır varmaz} haber verin.", "dochakajamaja yeollak juseyo"],
          ["책을 [읽]{다가} 잠이 들었어요.", "Kitap [oku]{rken} uyuyakaldım.", "chaegeul ikdaga jami deureosseoyo"],
          ["[운전하]{다가} 휴대폰을 보면 위험해요.", "Araba [kullan]{ırken} telefona bakmak tehlikeli.", "unjeonhadaga hyudaeponeul bomyeon wiheomhaeyo"],
          ["회사에 [다니]{다가} 대학원에 들어갔어요.", "Şirkette [çalış]{ırken} (işi bırakıp) yüksek lisansa girdim.", "hoesae danidaga daehagwone deureogasseoyo"],
          ["불을 [껐]{다가} 무서워서 다시 켰어요.", "Işığı [kapat]{tım}, korkunca yeniden açtım.", "bureul kkeotdaga museowoseo dasi kyeosseoyo"],
          ["편의점에 [갔]{다가} 올게요.", "Markete [gid]{ip} geleceğim.", "pyeonuijeome gatdaga olgeyo"]
        ] },
        { t: "ozet", l: [
          "<b>-자마자</b>: …-r …-mez; geçmiş eki yok, ana cümlede emir olabilir.",
          "<b>-다가</b>: eylem sürerken kesilir, başka eyleme geçilir ya da beklenmedik bir şey olur; aynı özne.",
          "<b>-았/었다가</b>: eylem bitti, ardından ters ya da başka bir eylem (<i>샀다가 환불했어요</i>).",
          "<i>갔다가 오다</i>: gidip gelmek.",
          "Konuşmada -다가 → <b>-다</b>."
        ] }
      ],
      test: [
        { s: "“Eve gelir gelmez uyudum.”", o: ["집에 오자마자 잤어요.", "집에 왔자마자 잤어요.", "집에 오다가 잤어요."], d: 0, a: "-자마자 geçmiş eki almaz." },
        { s: "“Yürürken düştüm.”", o: ["걷자마자 넘어졌어요.", "걷다가 넘어졌어요.", "걸었다가 넘어졌어요."], d: 1, a: "Eylem sırasında beklenmedik olay: -다가." },
        { s: "“Pencereyi açtım ama üşüyünce kapattım.”", o: ["창문을 열다가 추워서 닫았어요.", "창문을 열었다가 추워서 닫았어요.", "창문을 열자마자 추워서 닫아요."], d: 1, a: "Bitmiş eylem + ters eylem: -았/었다가." },
        { s: "“Varır varmaz arayın.”", o: ["도착하자마자 전화하세요.", "도착했자마자 전화하세요.", "도착하다가 전화하세요."], d: 0, a: "-자마자 + emir olur." },
        { s: "“Bankaya gidip geleceğim.”", o: ["은행에 가자마자 올게요.", "은행에 갔다가 올게요.", "은행에 가다가 올게요."], d: 1, a: "Gidip gelmek: 갔다가 오다." },
        { s: "-다가'da iki cümlenin öznesi?", o: ["Aynı", "Farklı", "Fark etmez"], d: 0, a: "-다가: aynı özne." },
        { s: "TV를 보___ 잠들었어요.", o: ["다가", "자마자", "았다가"], d: 0, a: "İzlerken (eylem sürerken) uyuyakaldım: -다가." },
        { s: "“Kitabı aldım, sonra iade ettim.”", o: ["책을 사다가 환불했어요.", "책을 샀다가 환불했어요.", "책을 사자마자 환불해요."], d: 1, a: "-았/었다가." },
        { s: "-자마자'nın Türkçe karşılığı?", o: ["…-r …-mez", "…-ken", "…-se bile"], d: 0, a: "-자마자: -r -mez." },
        { s: "“Okula giderken (yolda) geri döndüm.”", o: ["학교에 가다가 돌아왔어요.", "학교에 갔다가 돌아왔어요.", "학교에 가자마자 돌아왔어요."], d: 0, a: "Yarıda kesilen eylem: -다가. 갔다가 = vardıktan sonra." }
      ]
    },
    {
      id: "ko-t3-14", seviye: "TOPIK 3", sure: 12,
      baslik: "Sonucu korumak: -아/어 놓다, -아/어 두다, -(으)ㄴ 채로",
      kisa: "예약해 놓았어요 · 저장해 두세요 · 문을 연 채로 · 켜 놓고",
      bolumler: [
        { t: "metin", m: "Bu derste bir eylemin <b>sonucunun korunduğunu</b> anlatan üç kalıp öğreniyorsun: bir işi önceden yapıp hazır bırakmak (<b>-아/어 놓다</b>, <b>-아/어 두다</b>) ve bir durumu olduğu gibi bırakarak başka bir şey yapmak (<b>-(으)ㄴ 채로</b>). İlk ikisi -아/어 주다 gibi <b>-아/어</b> biçimiyle kurulur. <b>Kullanım alanı:</b> 놓다 daha çok konuşma; 두다 ve 채로 her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu anlam çoğunlukla <b>önceden, -ip bırakmak, -mış hâlde</b> ile verilir: “Bileti önceden aldım”, “Kapıyı açık bıraktım”, “Ayakkabıyla girdi”.", l: [
          ["Bileti önceden [al]{dım} (hazır).", "표를 [사] {놓았어요}.", "pyoreul sa noasseoyo"],
          ["Bu dosyayı [kaydet]{ip saklayın}.", "이 파일을 [저장해] {두세요}.", "i paireul jeojanghae duseyo"],
          ["Kapıyı açık [bırak]{tım}.", "문을 [열어] {놓았어요}.", "muneul yeoreo noasseoyo"],
          ["Ayakkabı{yla} (çıkarmadan) içeri girdi.", "신발을 [신은] {채로} 들어왔어요.", "sinbareul sineun chaero deureowasseoyo"]
        ] },
        { t: "tablo", h: "Kurulum", bas: ["Fiil", "-아/어 놓다", "-아/어 두다"], s: [
          ["사다|sada", "[사] {놓다}|sa nota", "[사] {두다}|sa duda"],
          ["열다|yeolda", "[열어] {놓다}|yeoreo nota", "[열어] {두다}|yeoreo duda"],
          ["예약하다|yeyakada", "[예약해] {놓다}|yeyakae nota", "[예약해] {두다}|yeyakae duda"],
          ["켜다|kyeoda", "[켜] {놓다}|kyeo nota", "[켜] {두다}|kyeo duda"],
          ["적다|jeokda", "[적어] {놓다}|jeogeo nota", "[적어] {두다}|jeogeo duda"]
        ] },
        { t: "metin", h: "-아/어 놓다 ve -아/어 두다", m: "İkisi de bir işi <b>önceden yapıp sonucunu hazır tutmak</b> demektir ve çoğu zaman birbirinin yerine kullanılır: <i>손님이 오기 전에 음식을 만들어 <b>놓았어요 / 두었어요</b></i> (Misafirler gelmeden yemeği yapıp hazırladım). Küçük fark: <b>-아/어 두다</b> sonucun <b>uzun süre</b> korunmasını, ileride kullanmak için saklamayı vurgular: <i>중요한 내용은 메모해 <b>두세요</b></i> (Önemli şeyleri not edip saklayın). Konuşmada <i>놓아요 → 놔요</i>, <i>놓았어요 → 놨어요</i> diye kısalır." },
        { t: "ipucu", h: "Açık bırakmak ve -아/어 있다", m: "Bu kalıp bir şeyi <b>öyle bırakmayı</b> da anlatır: <i>에어컨을 <b>켜 놓고</b> 나왔어요</i> (Klimayı açık bırakıp çıktım), <i>창문을 <b>열어 두세요</b></i> (Pencereyi açık bırakın). <i>-아/어 있다</i> (durum) ile karşılaştır: <i>문이 <b>열려 있어요</b></i> (Kapı açık; edilgen fiil + -아/어 있다) ↔ <i>문을 <b>열어 놓았어요</b></i> (Kapıyı ben açıp öyle bıraktım)." },
        { t: "metin", h: "-(으)ㄴ 채(로): olduğu gibi bırakarak", m: "<b>-(으)ㄴ 채로</b> bir eylemin sonucu sürerken (çoğunlukla olması gerekenin tersine) başka bir şey yapıldığını anlatır: <i>불을 <b>켠 채로</b> 잤어요</i> (Işık açıkken uyudum), <i>옷을 <b>입은 채로</b> 수영했어요</i> (Kıyafetlerimle yüzdüm). Hep geçmiş ortaç <b>-(으)ㄴ</b> ile kurulur; <b>로</b> düşebilir: <i>켠 채 잤어요</i>. Yazıda <i>-(으)ㄴ 채</i> sık görülür." },
        { t: "tablo", h: "Hangisi ne anlatır?", bas: ["Kalıp", "Anlam", "Örnek"], s: [
          ["-아/어 놓다", "önceden yapıp hazır bırakmak", "[청소해] {놓았어요}.|cheongsohae noasseoyo"],
          ["-아/어 두다", "yapıp ileride kullanmak üzere saklamak", "[저장해] {두세요}.|jeojanghae duseyo"],
          ["-아/어 있다", "edilgen ya da geçişsiz fiille durum", "문이 [열려] {있어요}.|muni yeollyeo isseoyo"],
          ["-(으)ㄴ 채로", "durumu bozmadan başka bir şey yapmak", "신발을 [신은] {채로}|sinbareul sineun chaero"]
        ] },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-아/어 놓다 / 두다", "Geçişli fiil (nesne alır); geçmiş: 놓았어요 / 두었어요|-a/eo nota / duda"],
          ["Kısaltma", "놓아요 → 놔요, 놓았어요 → 놨어요, 두었어요 → 뒀어요|nwayo, nwasseoyo, dwosseoyo"],
          ["-(으)ㄴ 채로", "Fiil; hep -(으)ㄴ; 로 düşebilir|-(eu)n chaero"],
          ["Anlam farkı", "놓다: hazırlık; 두다: saklama, uzun süre"],
          ["Kullanım", "놓다: konuşma ağırlıklı; 두다, 채로: her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["문이 [열어] {놓았어요}.|muni yeoreo noasseoyo", "문을 [열어] {놓았어요}.|muneul yeoreo noasseoyo", "놓다 / 두다: geçişli fiil, nesne -을/를"],
          ["불을 [켜]{는 채로} 잤어요.|bureul kyeoneun chaero jasseoyo", "불을 [켠] {채로} 잤어요.|bureul kyeon chaero jasseoyo", "채로: hep -(으)ㄴ"],
          ["손님이 오기 전에 음식을 [만들어] {있었어요}.|sonnimi ogi jeone eumsigeul mandeureo isseosseoyo", "손님이 오기 전에 음식을 [만들어] {놓았어요}.|sonnimi ogi jeone eumsigeul mandeureo noasseoyo", "hazırlık: -아/어 놓다; -아/어 있다 nesne almaz"],
          ["안경을 [쓰]{고 채로} 세수했어요.|angyeongeul sseugo chaero sesuhaesseoyo", "안경을 [쓴] {채로} 세수했어요.|angyeongeul sseun chaero sesuhaesseoyo", "-(으)ㄴ 채로"]
        ] },
        { t: "diyalog", h: "Tatile çıkmadan", l: [
          ["엄마", "비행기 표는 [예약해] {놓았어}?", "Uçak biletlerini ayırttın mı?", "bihaenggi pyoneun yeyakae noasseo?"],
          ["딸", "네, 지난주에 다 [사] {놨어요}. 호텔도 [예약해] {뒀어요}.", "Evet, geçen hafta hepsini aldım. Oteli de ayırttım.", "ne, jinanjue da sa nwasseoyo. hoteldo yeyakae dwosseoyo"],
          ["엄마", "잘했네. 창문은 다 닫았지? 지난번처럼 [열어 둔] {채로} 나가면 안 돼.", "Aferin. Pencereleri kapattın, değil mi? Geçen seferki gibi açık bırakıp çıkma.", "jalhaenne. changmuneun da datatji? jinanbeoncheoreom yeoreo dun chaero nagamyeon an dwae"],
          ["딸", "걱정 마세요. 여권 번호도 휴대폰에 [저장해] {두었어요}.", "Merak etme. Pasaport numarasını da telefona kaydettim.", "geokjeong maseyo. yeogwon beonhodo hyudaepone jeojanghae dueosseoyo"],
          ["엄마", "그래, 에어컨 [켜] {놓고} 나가지 말고.", "Tamam, klimayı da açık bırakıp çıkma.", "geurae, eeokeon kyeo noko nagaji malgo"]
        ] },
        { t: "ornek", l: [
          ["손님이 오기 전에 방을 [청소해] {놓았어요}.", "Misafirler gelmeden odayı [temizle]{yip hazırladım}.", "sonnimi ogi jeone bangeul cheongsohae noasseoyo"],
          ["시험 전에 중요한 단어를 [외워] {두세요}.", "Sınavdan önce önemli kelimeleri [ezberle]{yin}.", "siheom jeone jungyohan daneoreul oewo duseyo"],
          ["맥주를 냉장고에 [넣어] {두었어요}.", "Birayı (soğusun diye) buzdolabına [koy]{dum}.", "maekjureul naengjanggoe neoeo dueosseoyo"],
          ["회의 자료를 미리 [복사해] {놓을게요}.", "Toplantı belgelerini önceden [kopyala]{yıp hazırlarım}.", "hoeui jaryoreul miri boksahae noeulgeyo"],
          ["피곤해서 화장을 [한] {채로} 잠들었어요.", "Yorgunluktan makyajlı {hâlde} uyuyakaldım.", "pigonhaeseo hwajangeul han chaero jamdeureosseoyo"],
          ["창문을 [연] {채로} 외출했어요.", "Pencereyi açık [bırak]{arak} dışarı çıktım.", "changmuneul yeon chaero oechulhaesseoyo"],
          ["그는 아무 말도 [하지 않은] {채} 앉아 있었다.", "Hiçbir şey [söyle]{meden} oturuyordu.", "geuneun amu maldo haji aneun chae anja isseotda"],
          ["에어컨을 [켜] {놓고} 잤더니 감기에 걸렸어요.", "Klimayı açık [bırak]{ıp} uyudum, grip oldum.", "eeokeoneul kyeo noko jatdeoni gamgie geollyeosseoyo"]
        ] },
        { t: "ozet", l: [
          "<b>-아/어 놓다</b>: işi önceden yapıp hazır bırakmak (<i>사 놓았어요</i>).",
          "<b>-아/어 두다</b>: yapıp ileride kullanmak için saklamak (<i>저장해 두세요</i>); çoğu zaman 놓다 ile aynı.",
          "Bir durumu öyle bırakmak: <i>켜 놓고 나왔어요</i>; kısaltma <i>놨어요, 뒀어요</i>.",
          "<b>-(으)ㄴ 채로</b>: durumu bozmadan başka bir şey yapmak (<i>신발을 신은 채로</i>); hep -(으)ㄴ.",
          "Geçişsiz durum için <i>-아/어 있다</i>: <i>문이 열려 있어요</i>."
        ] }
      ],
      test: [
        { s: "“Bileti önceden aldım (hazır).”", o: ["표를 사 놓았어요.", "표를 산 채로 있어요.", "표가 사 있어요."], d: 0, a: "Önceden hazırlık: -아/어 놓다." },
        { s: "“Bu dosyayı kaydedip saklayın.”", o: ["이 파일을 저장해 두세요.", "이 파일을 저장한 채로 하세요.", "이 파일이 저장해 있어요."], d: 0, a: "Saklamak: -아/어 두다." },
        { s: "“Işık açıkken uyudum.”", o: ["불을 켜는 채로 잤어요.", "불을 켠 채로 잤어요.", "불을 켤 채로 잤어요."], d: 1, a: "채로: hep -(으)ㄴ." },
        { s: "놓았어요'nun konuşmadaki kısa biçimi?", o: ["놨어요", "놓어요", "놔었어요"], d: 0, a: "놓았어요 → 놨어요." },
        { s: "Hangisi doğru?", o: ["문이 열어 놓았어요.", "문을 열어 놓았어요.", "문을 열려 놓았어요."], d: 1, a: "-아/어 놓다 geçişli fiille: 문을 열어 놓다." },
        { s: "“Kapı açık (durum).”", o: ["문이 열려 있어요.", "문을 열어 있어요.", "문이 열어 두었어요."], d: 0, a: "Durum: edilgen fiil + -아/어 있다." },
        { s: "“Ayakkabıyla (çıkarmadan) içeri girdi.”", o: ["신발을 신은 채로 들어왔어요.", "신발을 신어 두고 들어왔어요.", "신발을 신자마자 들어왔어요."], d: 0, a: "Durumu bozmadan: -(으)ㄴ 채로." },
        { s: "-아/어 두다'nın -아/어 놓다'dan farkı?", o: ["Uzun süre saklamayı vurgular", "Geçmişi anlatır", "Yalnız sıfatla kullanılır"], d: 0, a: "두다: ileride kullanmak üzere saklama." },
        { s: "“Klimayı açık bırakıp çıktım.”", o: ["에어컨을 켜 놓고 나왔어요.", "에어컨을 켜자마자 나왔어요.", "에어컨이 켜 놓고 나왔어요."], d: 0, a: "Durumu öyle bırakmak: -아/어 놓다." },
        { s: "“Hiçbir şey söylemeden oturuyordu.” (yazı)", o: ["아무 말도 하지 않은 채 앉아 있었다.", "아무 말도 하지 않을 채 앉아 있었다.", "아무 말도 하지 않는 채 앉아 있었다."], d: 0, a: "-(으)ㄴ 채: geçmiş ortaç." }
      ]
    },
    {
      id: "ko-t3-15", seviye: "TOPIK 3", sure: 12,
      baslik: "Amaç: -기 위해(서), -도록, -(으)ㄹ 겸",
      kisa: "건강을 위해서 · 늦지 않도록 · 산책도 할 겸 · 밤새도록",
      bolumler: [
        { t: "metin", m: "A2'de (Ders 23) amacı <b>-(으)러</b> (gitmek ve gelmek fiilleriyle) ve <b>-(으)려고</b> ile kurdun. TOPIK 3'te üç amaç kalıbı daha var: her fiille kullanılan ve daha resmî <b>-기 위해(서)</b> (…-mek için), bir sonucun ortaya çıkması için <b>-도록</b> (…-sin diye, …-ecek şekilde) ve birden fazla amacı birleştiren <b>-(으)ㄹ 겸</b> (hem … hem … için). <b>Kullanım alanı:</b> 위해서 ve 도록 her ikisi (yazıda çok sık); 겸 konuşma ağırlıklı." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede amaç <b>-mek için</b> ve <b>-sin diye</b> ile verilir. Korecede genel “-mek için” <b>-기 위해(서)</b>, “-sin diye, -ecek şekilde” <b>-도록</b> ile kurulur.", l: [
          ["Sağlığım [için] spor yapıyorum.", "[건강]{을 위해서} 운동해요.", "geongangeul wihaeseo undonghaeyo"],
          ["Üniversiteye [gir]{mek için} çok çalışıyor.", "대학에 [가]{기 위해서} 열심히 공부해요.", "daehage gagi wihaeseo yeolsimhi gongbuhaeyo"],
          ["Geç [kal]{mayayım diye} erken çıktım.", "[늦]{지 않도록} 일찍 나왔어요.", "neutji antorok iljjik nawasseoyo"],
          ["Hem yürüyüş yapmak hem de alışveriş [et]{mek için} çıktım.", "[산책]{도 할 겸} 장도 볼 겸 나갔어요.", "sanchaekdo hal gyeom jangdo bol gyeom nagasseoyo"]
        ] },
        { t: "tablo", h: "Üç kalıp", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["-기 위해(서) / N을/를 위해(서)", "…-mek için", "살을 [빼]{기 위해서} 매일 걸어요.|sareul ppaegi wihaeseo maeil georeoyo"],
          ["-도록", "…-sin diye, …-ecek şekilde", "뒤에서도 [잘 보이]{도록} 크게 써 주세요.|dwieseodo jal boidorok keuge sseo juseyo"],
          ["-(으)ㄹ 겸", "hem … hem … için", "친구도 [만날] {겸} 서울에 갔어요.|chingudo mannal gyeom seoure gasseoyo"]
        ] },
        { t: "metin", h: "-기 위해(서): …-mek için", m: "<b>-기 위해(서)</b> her fiille kullanılır ve iki cümlenin öznesi aynıdır: <i>한국 회사에 <b>취직하기 위해서</b> 한국어를 배워요</i> (Kore şirketinde işe girmek için Korece öğreniyorum). İsimle <b>N을/를 위해(서)</b>: <i>가족<b>을 위해서</b> 일해요</i> (Ailem için çalışıyorum). -(으)려고'dan farkı: ana cümlede emir ve öneri gelebilir: <i>건강을 <b>지키기 위해서</b> 담배를 끊으세요</i> (Sağlığınızı korumak için sigarayı bırakın). İsim önünde <b>-기 위한</b> olur: <i>시험을 <b>준비하기 위한</b> 책</i> (sınava hazırlanmak için kitap). Sıfatla <b>-아/어지기 위해서</b> denir (Ders 35): <i><b>예뻐지기 위해서</b></i> (güzelleşmek için)." },
        { t: "metin", h: "-도록: sonuca yönelik amaç", m: "<b>-도록</b> bir eylemin <b>belli bir sonucu doğurması</b> için yapıldığını anlatır; çoğunlukla başkası ya da bir durum için: <i>아이가 <b>잘 수 있도록</b> 조용히 하세요</i> (Çocuk uyuyabilsin diye sessiz olun), <i>잊어버리지 <b>않도록</b> 메모했어요</i> (Unutmayayım diye not aldım). Fiil ve sıfatla kullanılır; iki cümlenin öznesi farklı olabilir. Kalıp: <b>-도록 하다</b> (…-meye dikkat etmek, …-mesini sağlamak): <i>다음부터는 늦지 <b>않도록 하겠습니다</b></i> (Bundan sonra geç kalmamaya dikkat edeceğim)." },
        { t: "metin", h: "-(으)ㄹ 겸: iki amaç bir arada", m: "<b>-(으)ㄹ 겸</b> bir eylemin birden fazla amacı olduğunu anlatır; çoğunlukla <b>-도</b> ile ikilenir: <i>운동<b>도 할 겸</b> 바람<b>도 쐴 겸</b> 공원에 갔어요</i> (Hem spor yapmak hem hava almak için parka gittim). Tek amaçla da kullanılır ama “başka amaçlar da var” imasını taşır: <i>책도 <b>살 겸</b> 서점에 들렀어요</i> (Kitap da alayım diye kitapçıya uğradım). İsimle <b>N 겸 N</b> “hem … hem …” demektir: <i>거실 <b>겸</b> 서재</i> (hem oturma odası hem çalışma odası), <i>아침 <b>겸</b> 점심</i> (kahvaltıyla öğle yemeği bir arada)." },
        { t: "ipucu", h: "-도록: …-ene kadar", m: "<b>-도록</b> bir derece ya da süre sınırını da anlatır: “…-ene kadar”: <i><b>밤새도록</b> 이야기했어요</i> (Sabaha kadar konuştuk), <i>목이 <b>아프도록</b> 노래했어요</i> (Boğazım ağrıyana kadar şarkı söyledim). Bu anlam kalıplaşmış ifadelerde sık görülür." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-기 위해(서)", "Fiil; isim N을/를 위해(서); isim önünde -기 위한; sıfatta -아/어지기 위해서; aynı özne|-gi wihae(seo)"],
          ["-도록", "Fiil ve sıfat; özneler farklı olabilir; -도록 하다: …-meye dikkat etmek|-dorok"],
          ["-(으)ㄹ 겸", "Fiil; çoğunlukla -도 … -(으)ㄹ 겸 ikilemesi; isimde N 겸 N|-(eu)l gyeom"],
          ["-(으)려고 ile farkı", "-(으)려고: ana cümlede emir ve öneri olmaz; -기 위해서 ve -도록: olur"],
          ["Kullanım", "위해서 ve 도록: yazıda çok sık; 겸: konuşma ağırlıklı"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["살을 [빼]{려고} 운동하세요.|sareul ppaeryeogo undonghaseyo", "살을 [빼]{기 위해서} 운동하세요.|sareul ppaegi wihaeseo undonghaseyo", "ana cümle emir: -(으)려고 olmaz"],
          ["[예쁘]{기 위해서} 화장해요.|yeppeugi wihaeseo hwajanghaeyo", "[예뻐지]{기 위해서} 화장해요.|yeppeojigi wihaeseo hwajanghaeyo", "sıfat: -아/어지기 위해서"],
          ["[가족] {위해서} 일해요.|gajok wihaeseo ilhaeyo", "[가족]{을 위해서} 일해요.|gajogeul wihaeseo ilhaeyo", "isim: N을/를 위해서"],
          ["산책{을 겸} 나갔어요.|sanchaegeul gyeom nagasseoyo", "[산책할] {겸} 나갔어요.|sanchaekal gyeom nagasseoyo", "겸 önünde -(으)ㄹ ortacı (ya da N 겸)"]
        ] },
        { t: "diyalog", h: "Sabah koşusu", l: [
          ["지훈", "요즘 아침마다 공원에서 뛰어요? 왜요?", "Bu aralar her sabah parkta koşuyor musun? Neden?", "yojeum achimmada gongwoneseo ttwieoyo? waeyo?"],
          ["수아", "다음 달 마라톤 대회에 [나가]{기 위해서} 연습하고 있어요.", "Gelecek ayki maraton yarışına katılmak için antrenman yapıyorum.", "daeum dal maraton daehoee nagagi wihaeseo yeonseupago isseoyo"],
          ["지훈", "대단하네요. 저는 아침에 못 일어나요.", "Harikasın. Ben sabahları kalkamıyorum.", "daedanhaneyo. jeoneun achime mot ireonayo"],
          ["수아", "저도 늦잠을 자지 [않]{도록} 알람을 세 개나 맞춰 놓아요.", "Ben de geç kalkmayayım diye tam üç alarm kuruyorum.", "jeodo neutjameul jaji antorok allameul se gaena matchwo noayo"],
          ["지훈", "그럼 저도 운동도 [할] {겸} 바람도 [쐴] {겸} 같이 뛰어도 돼요?", "O zaman hem spor yapmak hem hava almak için ben de seninle koşabilir miyim?", "geureom jeodo undongdo hal gyeom baramdo ssoel gyeom gachi ttwieodo dwaeyo?"],
          ["수아", "물론이죠. 대신 내일 늦지 [않]{도록} 일찍 자요!", "Tabii ki. Ama yarın geç kalmamak için erken yat!", "mullonijyo. daesin naeil neutji antorok iljjik jayo!"]
        ] },
        { t: "ornek", l: [
          ["[건강]{을 위해서} 매일 한 시간씩 걸어요.", "Sağlığım [için] her gün birer saat yürüyorum.", "geongangeul wihaeseo maeil han siganssik georeoyo"],
          ["장학금을 [받]{기 위해서} 밤늦게까지 공부해요.", "Burs [al]{mak için} gece geç saatlere kadar çalışıyorum.", "janghakgeumeul batgi wihaeseo bamneutgekkaji gongbuhaeyo"],
          ["이것은 외국인{을 위한} 한국어 책이에요.", "Bu, yabancılar [için] bir Korece kitabı.", "igeoseun oegugineul wihan hangugeo chaegieyo"],
          ["감기에 [걸리]{지 않도록} 옷을 따뜻하게 입으세요.", "Nezle [ol]{mamak için} sıcak giyinin.", "gamgie geolliji antorok oseul ttatteutage ibeuseyo"],
          ["모두가 [들을 수 있]{도록} 크게 말해 주세요.", "Herkes [duy]{abilsin diye} yüksek sesle konuşun.", "moduga deureul su itdorok keuge malhae juseyo"],
          ["다음부터는 실수하지 [않]{도록} 하겠습니다.", "Bundan sonra hata [yap]{mamaya} dikkat edeceğim.", "daeumbuteoneun silsuhaji antorok hagetseumnida"],
          ["책도 [빌릴] {겸} 공부도 [할] {겸} 도서관에 가요.", "Hem kitap ödünç almak hem ders çalışmak [için] kütüphaneye gidiyorum.", "chaekdo billil gyeom gongbudo hal gyeom doseogwane gayo"],
          ["어젯밤에 친구와 [밤새]{도록} 이야기했어요.", "Dün gece arkadaşımla [sabaha kadar] konuştum.", "eojetbame chinguwa bamsaedorok iyagihaesseoyo"]
        ] },
        { t: "ozet", l: [
          "<b>-기 위해(서)</b>: …-mek için (aynı özne); isimle <i>N을/를 위해(서)</i>, isim önünde <i>-기 위한</i>.",
          "Sıfatla <b>-아/어지기 위해서</b>: <i>예뻐지기 위해서</i>.",
          "<b>-도록</b>: …-sin diye, …-ecek şekilde (özneler farklı olabilir); <i>-도록 하다</i>: …-meye dikkat etmek.",
          "<b>-도록</b> “…-ene kadar” da demektir: <i>밤새도록</i>.",
          "<b>-(으)ㄹ 겸</b>: birden fazla amaç; <i>-도 … -(으)ㄹ 겸</i> ikilemesi; isimde <i>N 겸 N</i>."
        ] }
      ],
      test: [
        { s: "“Sağlığım için spor yapıyorum.”", o: ["건강을 위해서 운동해요.", "건강을 위한 운동해요.", "건강할 겸 운동해요."], d: 0, a: "İsimle amaç: N을 위해서." },
        { s: "살을 ___ 운동하세요. (빼다)", o: ["빼기 위해서", "빼려고", "빼러"], d: 0, a: "Ana cümle emir: -(으)려고 olmaz; -기 위해서." },
        { s: "아이가 깨지 ___ 조용히 하세요.", o: ["않도록", "않기 위해서", "않을 겸"], d: 0, a: "Başka biri için sonuç (farklı özne): -도록." },
        { s: "“Hem kitap ödünç almak hem ders çalışmak için kütüphaneye gidiyorum.”", o: ["책도 빌릴 겸 공부도 할 겸 도서관에 가요.", "책도 빌리도록 공부도 하도록 도서관에 가요.", "책을 빌리기 위한 공부도 할 겸 도서관에 가요."], d: 0, a: "İki amaç: -(으)ㄹ 겸 ikilemesi." },
        { s: "예쁘다 + “-mek için” → ?", o: ["예뻐지기 위해서", "예쁘기 위해서", "예쁜 위해서"], d: 0, a: "Sıfat: -아/어지기 위해서." },
        { s: "“Bundan sonra geç kalmamaya dikkat edeceğim.”", o: ["앞으로 늦지 않도록 하겠습니다.", "앞으로 늦지 않을 겸 하겠습니다.", "앞으로 늦지 않으러 하겠습니다."], d: 0, a: "-도록 하다: …-meye dikkat etmek." },
        { s: "가족___ 열심히 일해요.", o: ["을 위해서", "위해서", "을 위한"], d: 0, a: "İsim + 을/를 위해서." },
        { s: "“Sabaha kadar konuştuk.”", o: ["밤새도록 이야기했어요.", "밤새기 위해서 이야기했어요.", "밤샐 겸 이야기했어요."], d: 0, a: "-도록: …-ene kadar." },
        { s: "-(으)려고 ile -기 위해서 arasındaki fark?", o: ["-기 위해서'tan sonra emir gelebilir", "-(으)려고 daha resmîdir", "-기 위해서 yalnız geçmişte kullanılır"], d: 0, a: "-(으)려고: ana cümlede emir ve öneri olmaz." },
        { s: "외국인을 ___ 한국어 수업 (isim önünde)", o: ["위한", "위해서", "위하도록"], d: 0, a: "İsim önünde: -을/를 위한." }
      ]
    },
    {
      id: "ko-t3-16", seviye: "TOPIK 3", sure: 12,
      baslik: "Varsayım, orantı, eğilim: -(느/는)다면, -(으)ㄹ수록, -(으)ㄴ/는 편이다",
      kisa: "복권에 당첨된다면 · 내가 너라면 · 많으면 많을수록 · 갈수록 · 잘 먹는 편이에요",
      bolumler: [
        { t: "metin", m: "A1'de (Ders 13) koşulu <b>-(으)면</b> ile kurdun. TOPIK 3'te üç yeni yapı var: gerçekleşmesi zor ya da hayalî varsayım için <b>-(느/는)다면</b> (…-se, …-saydı), iki şeyin birlikte değişmesi için <b>-(으)ㄹ수록</b> (…-dıkça) ve bir eğilimi yumuşatarak anlatmak için <b>-(으)ㄴ/는 편이다</b> (… sayılır, daha çok …). -다면, Ders 31'deki düz anlatım biçimine (<i>간다, 먹는다</i>) <b>-면</b> eklenerek kurulur. <b>Kullanım alanı:</b> her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede olası koşul <b>-rsa</b>, hayalî koşul <b>-sa</b>, orantı <b>-dıkça</b> ile verilir. Korecede -(으)면 olası, <b>-다면</b> varsayımsal koşuldur.", l: [
          ["Yağmur [yağ]{arsa} evde kalırım.", "비가 [오]{면} 집에 있을 거예요.", "biga omyeon jibe isseul geoyeyo"],
          ["Piyango [çık]{sa} ne yaparsın?", "복권에 [당첨된]{다면} 뭘 하겠어요?", "bokgwone dangcheomdoendamyeon mwol hagesseoyo?"],
          ["Kore'yi [tanı]{dıkça} daha çok seviyorum.", "한국을 [알]{면 알수록} 더 좋아져요.", "hangugeul almyeon alsurok deo joajyeoyo"],
          ["Erken [yat]{an} biri sayılırım.", "저는 일찍 [자]{는 편이에요}.", "jeoneun iljjik janeun pyeonieyo"]
        ] },
        { t: "tablo", h: "-다면 nasıl kurulur?", bas: ["Düz anlatım", "-다면", "Türkçe"], s: [
          ["간다 (fiil)|ganda", "[간]{다면}|gandamyeon", "gitse"],
          ["먹는다 (fiil)|meongneunda", "[먹는]{다면}|meongneundamyeon", "yese"],
          ["비싸다 (sıfat)|bissada", "[비싸]{다면}|bissadamyeon", "pahalıysa"],
          ["학생이다 (isim)|haksaengida", "[학생이]{라면}|haksaengiramyeon", "öğrenci olsa"],
          ["갔다 (geçmiş)|gatda", "[갔]{다면}|gatdamyeon", "gitseydi"]
        ] },
        { t: "metin", h: "-(으)면 mi, -다면 mi?", m: "<b>-(으)면</b> gerçekleşmesi olası ya da her zaman geçerli koşullar içindir: <i>봄이 <b>오면</b> 꽃이 피어요</i> (Bahar gelince çiçekler açar). <b>-다면</b> ise gerçekleşmesi zor ya da hayalî varsayımlar için kullanılır; karşı tarafın söylediğine dayanan koşullarda da sık görülür: <i>다시 <b>태어난다면</b> 새가 되고 싶어요</i> (Yeniden doğsam kuş olmak isterdim), <i>그 말이 <b>사실이라면</b> 큰일이에요</i> (O söz doğruysa başımız dertte). Geçmişe dönük pişmanlıkta <b>-았/었다면</b> kullanılır: <i>조금만 일찍 <b>출발했다면</b> 늦지 않았을 거예요</i> (Biraz erken çıksaydık geç kalmazdık)." },
        { t: "ipucu", h: "내가 너라면: tavsiye", m: "Tavsiye vermenin kalıplaşmış yolu <b>내가 너라면</b> (senin yerinde olsam), kibar biçimi <b>제가 -(이)라면</b>'dir: <i><b>내가 너라면</b> 그 회사에 안 가겠어</i> (Senin yerinde olsam o şirkete gitmezdim). Ana cümlede çoğunlukla <b>-겠어요</b> ya da <b>-(으)ㄹ 거예요</b> gelir." },
        { t: "metin", h: "-(으)ㄹ수록: …-dıkça", m: "<b>-(으)ㄹ수록</b> bir şey arttıkça başka bir şeyin de arttığını ya da azaldığını anlatır: <i>한국어는 <b>배울수록</b> 재미있어요</i> (Korece öğrendikçe eğlenceli oluyor). Vurgu için çoğunlukla <b>-(으)면 -(으)ㄹ수록</b> biçiminde ikilenir: <i><b>많으면 많을수록</b> 좋아요</i> (Ne kadar çok olursa o kadar iyi). Ders 35'te gördüğün <i>갈수록</i> (gittikçe) de bu kalıptır: <i>날씨가 <b>갈수록</b> 추워져요</i>. Ana cümlede çoğunlukla <i>더</i> (daha) ya da <i>-아/어지다</i> gelir." },
        { t: "metin", h: "-(으)ㄴ/는 편이다: eğilim", m: "<b>-(으)ㄴ/는 편이다</b> bir şeyi kesin söylemeden, “genel olarak o tarafa daha yakın” diye yumuşatarak anlatır: <i>저는 매운 음식을 잘 <b>먹는 편이에요</b></i> (Acı yemekleri iyi yiyen biri sayılırım), <i>이 식당은 값이 <b>싼 편이에요</b></i> (Bu lokantanın fiyatları ucuz sayılır). Fiilde şimdiki <b>-는</b>, geçmiş <b>-(으)ㄴ</b>; sıfatta <b>-(으)ㄴ</b> kullanılır. Fiillerle çoğunlukla <i>잘, 많이, 자주, 빨리</i> gibi bir zarf gelir. Korecede kendinden söz ederken kesin konuşmamak kibarlık sayılır; bu yüzden kalıp çok sık duyulur." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-(느/는)다면", "Fiil -ㄴ/는다면, sıfat -다면, isim -(이)라면, geçmiş -았/었다면|-(neu/neun)damyeon"],
          ["-(으)ㄹ수록", "Fiil ve sıfat; vurgu: -(으)면 -(으)ㄹ수록; bitişik yazılır|-(eu)lsurok"],
          ["-(으)ㄴ/는 편이다", "Fiil -는 (geçmiş -(으)ㄴ), sıfat -(으)ㄴ; fiille zarf: 잘, 자주, 많이|-(eu)n/neun pyeonida"],
          ["-(으)면 ile farkı", "-(으)면: olası, genel koşul; -다면: varsayım, hayal"],
          ["Kullanım", "Her ikisi; 내가 너라면 konuşmada"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["복권에 [당첨되]{다면} 여행을 갈 거예요.|bokgwone dangcheomdoedamyeon yeohaengeul gal geoyeyo", "복권에 [당첨된]{다면} 여행을 갈 거예요.|bokgwone dangcheomdoendamyeon yeohaengeul gal geoyeyo", "fiil: -ㄴ/는다면"],
          ["[비싼]{수록} 좋아요.|bissansurok joayo", "[비쌀]{수록} 좋아요.|bissalsurok joayo", "-(으)ㄹ수록: ㄹ ortacı"],
          ["저는 매운 음식을 [먹은] {편이에요}.|jeoneun maeun eumsigeul meogeun pyeonieyo", "저는 매운 음식을 잘 [먹는] {편이에요}.|jeoneun maeun eumsigeul jal meongneun pyeonieyo", "şimdiki eğilim: -는 편이다 (+ zarf)"],
          ["[학생]{다면} 할인을 받을 수 있어요.|haksaengdamyeon harineul badeul su isseoyo", "[학생이]{라면} 할인을 받을 수 있어요.|haksaengiramyeon harineul badeul su isseoyo", "isim: -(이)라면"]
        ] },
        { t: "diyalog", h: "Bir yıl izin olsa", l: [
          ["민지", "만약 일 년 동안 휴가가 [생긴]{다면} 뭘 하고 싶어요?", "Bir yıllık iznin olsa ne yapmak isterdin?", "manyak il nyeon dongan hyugaga saenggindamyeon mwol hago sipeoyo?"],
          ["동현", "세계 여행을 하고 싶어요. 물론 돈이 [많]{으면 많을수록} 좋겠지만요.", "Dünyayı gezmek isterdim. Tabii param ne kadar çok olursa o kadar iyi olurdu.", "segye yeohaengeul hago sipeoyo. mullon doni maneumyeon maneulsurok jokketjimanyo"],
          ["민지", "동현 씨는 돈을 아껴 [쓰]{는 편이에요}?", "Sen parayı idareli kullanan biri misin?", "donghyeon ssineun doneul akkyeo sseuneun pyeonieyo?"],
          ["동현", "아니요, 저는 많이 [쓰]{는 편이에요}. 쓰면 [쓸]{수록} 더 쓰고 싶어져요.", "Hayır, çok harcayan biri sayılırım. Harcadıkça daha çok harcamak istiyorum.", "aniyo, jeoneun mani sseuneun pyeonieyo. sseumyeon sseulsurok deo sseugo sipeojyeoyo"],
          ["민지", "제가 [동현 씨]{라면} 지금부터 저금하겠어요.", "Senin yerinde olsam şimdiden para biriktirirdim.", "jega donghyeon ssiramyeon jigeumbuteo jeogeumhagesseoyo"],
          ["동현", "맞아요. 매달 조금씩 [모은]{다면} 정말 갈 수 있겠네요.", "Haklısın. Her ay biraz biraz biriktirirsem gerçekten gidebilirim.", "majayo. maedal jogeumssik moeundamyeon jeongmal gal su itgenneyo"]
        ] },
        { t: "ornek", l: [
          ["내가 [새]{라면} 하늘을 날아 보고 싶어요.", "Kuş [ol]{saydım} gökyüzünde uçmayı denemek isterdim.", "naega saeramyeon haneureul nara bogo sipeoyo"],
          ["그 소문이 [사실이]{라면} 정말 놀랍네요.", "O söylenti [doğru]{ysa} gerçekten şaşırtıcı.", "geu somuni sasiriramyeon jeongmal nollamneyo"],
          ["조금만 더 [노력했]{다면} 합격했을 거예요.", "Biraz daha [çaba göster]{seydin} kazanırdın.", "jogeumman deo noryeokaetdamyeon hapgyeokaesseul geoyeyo"],
          ["외국어는 [연습하]{면 할수록} 늘어요.", "Yabancı dil pratik [yap]{tıkça} gelişir.", "oegugeoneun yeonseupamyeon halsurok neureoyo"],
          ["나이가 [들]{수록} 시간이 빨리 가요.", "Yaş [ilerle]{dikçe} zaman hızlı geçiyor.", "naiga deulsurok sigani ppalli gayo"],
          ["이 동네는 [조용한] {편이에요}.", "Bu mahalle sessiz [sayılır].", "i dongneneun joyonghan pyeonieyo"],
          ["저는 친구를 자주 [만나]{는 편이에요}.", "Arkadaşlarımla sık [görüş]{en} biri sayılırım.", "jeoneun chingureul jaju mannaneun pyeonieyo"],
          ["어렸을 때는 키가 [작은] {편이었어요}.", "Çocukken boyum kısa [sayılırdı].", "eoryeosseul ttaeneun kiga jageun pyeonieosseoyo"]
        ] },
        { t: "ozet", l: [
          "<b>-(느/는)다면</b>: hayalî ya da zor varsayım; isimde <i>-(이)라면</i>, geçmişte <i>-았/었다면</i>.",
          "<b>-(으)면</b> olası koşul ↔ <b>-다면</b> varsayım; tavsiye: <i>내가 너라면</i>.",
          "<b>-(으)ㄹ수록</b>: …-dıkça; vurgu <i>-(으)면 -(으)ㄹ수록</i>; <i>갈수록</i> (gittikçe).",
          "<b>-(으)ㄴ/는 편이다</b>: eğilim, yumuşatma (… sayılır); fiille zarf kullanılır.",
          "-다면 düz anlatım biçimine, 수록 ve 편이다 ortaçlara dayanır."
        ] }
      ],
      test: [
        { s: "복권에 ___ 뭘 하고 싶어요? (당첨되다, hayal)", o: ["당첨된다면", "당첨되다면", "당첨될수록"], d: 0, a: "Fiil: -ㄴ다면." },
        { s: "“Senin yerinde olsam gitmezdim.”", o: ["내가 너라면 안 가겠어.", "내가 너면 안 갔어.", "내가 너일수록 안 가겠어."], d: 0, a: "Tavsiye kalıbı: 내가 너라면." },
        { s: "한국어는 ___ 재미있어요. (배우다)", o: ["배울수록", "배운다면", "배우는 편이"], d: 0, a: "…-dıkça: -(으)ㄹ수록." },
        { s: "많으면 ___ 좋아요.", o: ["많을수록", "많다면", "많은 편"], d: 0, a: "Vurgu: -(으)면 -(으)ㄹ수록." },
        { s: "저는 아침을 꼭 ___ 편이에요. (먹다)", o: ["먹는", "먹은", "먹을"], d: 0, a: "Şimdiki eğilim: 먹는 편이다." },
        { s: "이 가방은 값이 ___ 편이에요. (싸다)", o: ["싼", "싸는", "쌀"], d: 0, a: "Sıfat: -(으)ㄴ 편이다." },
        { s: "“Biraz erken çıksaydık geç kalmazdık.”", o: ["조금 일찍 출발했다면 늦지 않았을 거예요.", "조금 일찍 출발할수록 늦지 않았을 거예요.", "조금 일찍 출발하는 편이면 늦지 않았을 거예요."], d: 0, a: "Geçmişe dönük varsayım: -았/었다면." },
        { s: "isim + -다면: 학생 → ?", o: ["학생이라면", "학생이다면", "학생한다면"], d: 0, a: "İsim: -(이)라면." },
        { s: "Hangisi her zaman geçerli, olası bir koşuldur?", o: ["봄이 오면 꽃이 피어요.", "봄이 온다면 꽃이 피어요.", "봄이 올수록 꽃이 피어요."], d: 0, a: "Genel, olası koşul: -(으)면." },
        { s: "“Yaş ilerledikçe zaman hızlı geçiyor.”", o: ["나이가 들수록 시간이 빨리 가요.", "나이가 든다면 시간이 빨리 가요.", "나이가 드는 편이에요."], d: 0, a: "Orantı: -(으)ㄹ수록." }
      ]
    },
    {
      id: "ko-t3-17", seviye: "TOPIK 3", sure: 12,
      baslik: "Yazı dili kalıpları: -(으)ㄴ/는 셈이다, -기 마련이다, -(으)ㄹ 수밖에 없다",
      kisa: "다 끝난 셈이에요 · 실수하기 마련이에요 · 기다릴 수밖에 없어요 · 공짜인 셈",
      bolumler: [
        { t: "metin", m: "A2'de yapabilmeyi <b>-(으)ㄹ 수 있다</b> (Ders 18), sebebi <b>-기 때문에</b> (Ders 17) ile kurdun. Bu derste yorum ve genelleme yapan üç kalıp öğreniyorsun: bir durumu toparlayıp “… sayılır, … demektir” diye özetlemek (<b>-(으)ㄴ/는 셈이다</b>), bir şeyin doğası gereği olduğunu söylemek (<b>-기 마련이다</b>: …-mesi doğaldır) ve başka seçenek kalmadığını anlatmak (<b>-(으)ㄹ 수밖에 없다</b>: …-mekten başka çare yok). Üçü de TOPIK okuma ve yazma bölümlerinde çok sık çıkar. <b>Kullanım alanı:</b> 마련이다 daha çok yazı; 셈이다 ve 수밖에 없다 her ikisi." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede bu anlamlar ayrı kelimelerle verilir: <b>sayılır / demektir</b>, <b>doğaldır / -r elbet</b>, <b>-mekten başka çare yok</b>. Korecede her biri sabit bir kalıptır.", l: [
          ["İş neredeyse [bit]{ti sayılır}.", "일이 거의 [끝난] {셈이에요}.", "iri geoui kkeunnan semieyo"],
          ["İnsan [yanıl]{ır} elbet.", "사람은 [실수하]{기 마련이에요}.", "sarameun silsuhagi maryeonieyo"],
          ["[Bekle]{mekten başka çare yok}.", "[기다릴] {수밖에 없어요}.", "gidaril subakke eopseoyo"],
          ["Bu fiyata bedava [sayılır].", "이 가격이면 [공짜]{인 셈이에요}.", "i gagyeogimyeon gongjjain semieyo"]
        ] },
        { t: "tablo", h: "Üç kalıp", bas: ["Kalıp", "Anlamı", "Örnek"], s: [
          ["-(으)ㄴ/는 셈이다", "… sayılır, … demektir", "열 명 중 아홉 명이 왔으니까 거의 다 [온] {셈이에요}.|yeol myeong jung ahop myeongi wasseunikka geoui da on semieyo"],
          ["-기 마련이다", "…-mesi doğaldır, kaçınılmazdır", "시간이 지나면 [잊]{기 마련이에요}.|sigani jinamyeon itgi maryeonieyo"],
          ["-(으)ㄹ 수밖에 없다", "…-mekten başka çare yok", "버스가 없어서 [걸어갈] {수밖에 없었어요}.|beoseuga eopseoseo georeogal subakke eopseosseoyo"]
        ] },
        { t: "metin", h: "-(으)ㄴ/는 셈이다: toparlayınca", m: "<b>-(으)ㄴ/는 셈이다</b> bir durumu hesaba katınca ya da toparlayınca varılan sonucu anlatır: <i>일주일에 여섯 번 운동하니까 거의 매일 <b>하는 셈이에요</b></i> (Haftada altı kez spor yapıyorum, yani neredeyse her gün yapıyorum sayılır). Fiilde şimdiki <b>-는</b>, geçmiş <b>-(으)ㄴ</b>; sıfatta <b>-(으)ㄴ</b>; isimde <b>N인 셈이다</b>: <i>이 정도면 <b>성공인 셈이에요</b></i> (Bu kadarı başarı sayılır). Kalıp: <b>-(으)ㄴ 셈 치다</b> (…-mış saymak): <i>잃어버린 <b>셈 치고</b> 잊어버리세요</i> (Kaybetmiş say ve unut)." },
        { t: "metin", h: "-기 마련이다: doğası gereği", m: "<b>-기 마련이다</b> bir şeyin doğası, genel kural ya da deneyim gereği <b>kaçınılmaz olarak</b> olduğunu anlatır: <i>누구나 <b>실수하기 마련이에요</b></i> (Herkes hata yapar, bu doğaldır), <i>좋은 일이 있으면 나쁜 일도 <b>있기 마련이다</b></i> (İyi şeyler olursa kötüleri de olur elbet). Genel doğrular ve atasözü tadındaki cümleler için kullanılır; tek seferlik bir olay için kullanılmaz. Eş anlamlısı <b>-게 마련이다</b>: <i>시간이 지나면 <b>잊게 마련이에요</b></i>." },
        { t: "metin", h: "-(으)ㄹ 수밖에 없다: başka çare yok", m: "<b>-(으)ㄹ 수밖에 없다</b>, Ders 18'deki <i>-(으)ㄹ 수 있다</i>'ya <b>밖에</b> (…-den başka) eklenerek kurulur: “…-mekten başka yol yok, mecburen …”: <i>택시가 안 와서 <b>걸어갈 수밖에 없었어요</b></i> (Taksi gelmediği için yürümekten başka çare yoktu). Bir sonucun mantıken kaçınılmaz olduğunu da anlatır: <i>매일 연습하니까 <b>잘할 수밖에 없지요</b></i> (Her gün çalışıyor, iyi olması kaçınılmaz). Sıfatla da kullanılır: <i>재료가 비싸니까 값이 <b>비쌀 수밖에 없어요</b></i> (Malzemeler pahalı, fiyatın yüksek olması kaçınılmaz)." },
        { t: "ipucu", h: "수밖에 없다 ↔ -아/어야 하다", m: "<i>-아/어야 하다</i> (Ders 19) bir zorunluluğu, <b>-(으)ㄹ 수밖에 없다</b> ise başka seçeneğin kalmadığını, çoğunlukla isteksizce anlatır: <i>내일 시험이라서 공부<b>해야 해요</b></i> (Yarın sınav var, çalışmam lazım) ↔ <i>방법이 없어서 <b>포기할 수밖에 없었어요</b></i> (Başka yol olmadığı için vazgeçmek zorunda kaldım). <i>-(으)ㄹ 수가 없다</i> (yapamamak) ile karıştırma." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["-(으)ㄴ/는 셈이다", "Fiil -는 (geçmiş -(으)ㄴ), sıfat -(으)ㄴ, isim N인 셈이다; -(으)ㄴ 셈 치다: …-mış saymak|-(eu)n/neun semida"],
          ["-기 마련이다", "Fiil ve sıfat; genel doğrular; tek olay için değil; = -게 마련이다|-gi maryeonida"],
          ["-(으)ㄹ 수밖에 없다", "Fiil ve sıfat; geçmiş -(으)ㄹ 수밖에 없었다|-(eu)l subakke eopda"],
          ["Yapı", "수밖에 = 수 + 밖에 (…-den başka); 밖에 bitişik yazılır"],
          ["Kullanım", "마련이다: yazı ağırlıklı; 셈이다, 수밖에 없다: her ikisi"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["어제 회의에 [늦]{기 마련이었어요}.|eoje hoeuie neutgi maryeonieosseoyo", "어제 회의에 [늦었]{어요}.|eoje hoeuie neujeosseoyo", "tek olay: 마련이다 olmaz"],
          ["이 가격이면 [공짜] {셈이에요}.|i gagyeogimyeon gongjja semieyo", "이 가격이면 [공짜]{인 셈이에요}.|i gagyeogimyeon gongjjain semieyo", "isim: N인 셈이다"],
          ["버스가 없어서 [걸어갈] {수가 없었어요}.|beoseuga eopseoseo georeogal suga eopseosseoyo", "버스가 없어서 [걸어갈] {수밖에 없었어요}.|beoseuga eopseoseo georeogal subakke eopseosseoyo", "수가 없다: yapamamak; 수밖에 없다: çare yok"],
          ["시간이 지나면 [잊]{는 마련이에요}.|sigani jinamyeon inneun maryeonieyo", "시간이 지나면 [잊]{기 마련이에요}.|sigani jinamyeon itgi maryeonieyo", "-기 마련이다 (ya da -게 마련이다)"]
        ] },
        { t: "diyalog", h: "Taşınma", l: [
          ["하은", "이사 준비는 다 했어요?", "Taşınma hazırlığını bitirdin mi?", "isa junbineun da haesseoyo?"],
          ["재민", "짐은 거의 다 쌌어요. 이제 청소만 남았으니까 다 [끝난] {셈이에요}.", "Eşyaları neredeyse topladım. Artık sadece temizlik kaldı, yani bitti sayılır.", "jimeun geoui da ssasseoyo. ije cheongsoman namasseunikka da kkeunnan semieyo"],
          ["하은", "새집은 회사에서 멀다고 했죠?", "Yeni evin işyerine uzak demiştin, değil mi?", "saejibeun hoesaeseo meoldago haetjyo?"],
          ["재민", "네, 집값이 너무 올라서 멀리 [이사할] {수밖에 없었어요}.", "Evet, ev fiyatları çok arttığı için uzağa taşınmaktan başka çarem yoktu.", "ne, jipgapsi neomu ollaseo meolli isahal subakke eopseosseoyo"],
          ["하은", "처음에는 힘들어도 시간이 지나면 [익숙해지]{기 마련이에요}.", "Başta zor olsa da zamanla insan alışır, bu doğal.", "cheoeumeneun himdeureodo sigani jinamyeon iksukaejigi maryeonieyo"],
          ["재민", "맞아요. 출퇴근할 때 책을 읽으면 오히려 좋은 {셈이죠}.", "Haklısın. İşe gidip gelirken kitap okursam bu aslında iyi bir şey sayılır.", "majayo. chultoegeunhal ttae chaegeul ilgeumyeon ohiryeo joeun semijyo"]
        ] },
        { t: "ornek", l: [
          ["월급의 반을 저축하니까 반만 [받는] {셈이에요}.", "Maaşımın yarısını biriktiriyorum, yani yarısını alıyorum [sayılır].", "wolgeubui baneul jeochukanikka banman banneun semieyo"],
          ["이 정도 점수면 [합격]{인 셈이에요}.", "Bu puanla geçtin [sayılır].", "i jeongdo jeomsumyeon hapgyeogin semieyo"],
          ["[잃어버린] {셈 치고} 잊어버리세요.", "[Kaybet]{miş say} ve unut.", "ireobeorin sem chigo ijeobeoriseyo"],
          ["누구나 처음에는 [서투르]{기 마련이에요}.", "Herkes başta acemidir, bu [doğal].", "nuguna cheoeumeneun seotureugi maryeonieyo"],
          ["열심히 노력하면 좋은 결과가 [있]{기 마련이다}.", "Çok çabalarsan iyi sonuç [gelir] elbet.", "yeolsimhi noryeokamyeon joeun gyeolgwaga itgi maryeonida"],
          ["표가 다 팔려서 [포기할] {수밖에 없었어요}.", "Biletler tükendiği için vazgeçmekten [başka çare yoktu].", "pyoga da pallyeoseo pogihal subakke eopseosseoyo"],
          ["재료가 좋으니까 [맛있을] {수밖에 없지요}.", "Malzemeler iyi, lezzetli olması [kaçınılmaz].", "jaeryoga joeunikka masisseul subakke eopjiyo"],
          ["비가 많이 와서 경기가 [취소될] {수밖에 없었다}.", "Çok yağmur yağdığı için maçın iptal edilmesi [kaçınılmazdı].", "biga mani waseo gyeonggiga chwisodoel subakke eopseotda"]
        ] },
        { t: "ozet", l: [
          "<b>-(으)ㄴ/는 셈이다</b>: toparlayınca varılan sonuç (… sayılır); isimde <i>N인 셈이다</i>.",
          "<i>-(으)ㄴ 셈 치다</i>: …-mış saymak (<i>잃어버린 셈 치고</i>).",
          "<b>-기 마련이다</b>: doğası gereği, genel doğru (<i>누구나 실수하기 마련이다</i>); tek olay için kullanılmaz.",
          "<b>-(으)ㄹ 수밖에 없다</b>: başka çare yok; mantıken kaçınılmaz sonuç.",
          "<i>-(으)ㄹ 수가 없다</i> (yapamamak) ↔ <i>-(으)ㄹ 수밖에 없다</i> (yapmaktan başka çare yok)."
        ] }
      ],
      test: [
        { s: "“Bu fiyata bedava sayılır.”", o: ["이 가격이면 공짜인 셈이에요.", "이 가격이면 공짜기 마련이에요.", "이 가격이면 공짜 수밖에 없어요."], d: 0, a: "Toparlayınca varılan sonuç: N인 셈이다." },
        { s: "“Herkes hata yapar, bu doğal.” 누구나 ___.", o: ["실수하기 마련이에요", "실수하는 마련이에요", "실수한 셈 치세요"], d: 0, a: "Genel doğru: -기 마련이다." },
        { s: "버스가 끊겨서 택시를 ___. (başka çare yoktu)", o: ["탈 수밖에 없었어요", "탈 수가 없었어요", "타기 마련이었어요"], d: 0, a: "Başka çare yok: -(으)ㄹ 수밖에 없다." },
        { s: "“Taksiye binemedim.”", o: ["택시를 탈 수가 없었어요.", "택시를 탈 수밖에 없었어요.", "택시를 탄 셈이에요."], d: 0, a: "Yapamamak: -(으)ㄹ 수가 없다." },
        { s: "일주일에 여섯 번 운동하니까 거의 매일 ___.", o: ["하는 셈이에요", "하기 마련이에요", "할 수밖에 없어요"], d: 0, a: "Hesaplayınca varılan sonuç: -는 셈이다." },
        { s: "-기 마련이다 hangi cümleye uymaz?", o: ["Dün toplantıya geç kaldım.", "Zaman geçince insan unutur.", "Her başlangıç zordur."], d: 0, a: "Tek seferlik olay: 마련이다 kullanılmaz." },
        { s: "“Kaybetmiş say ve unut.”", o: ["잃어버린 셈 치고 잊어버리세요.", "잃어버리기 마련이고 잊어버리세요.", "잃어버릴 수밖에 없고 잊어버리세요."], d: 0, a: "…-mış saymak: -(으)ㄴ 셈 치다." },
        { s: "재료가 좋으니까 맛있___. (kaçınılmaz sonuç)", o: ["을 수밖에 없어요", "는 셈이에요", "기 마련이 없어요"], d: 0, a: "Mantıken kaçınılmaz: -(으)ㄹ 수밖에 없다." },
        { s: "isim + 셈이다: 성공 → ?", o: ["성공인 셈이다", "성공 셈이다", "성공이 셈이다"], d: 0, a: "İsim: N인 셈이다." },
        { s: "“İyi şeyler olursa kötüleri de olur elbet.” (yazı)", o: ["좋은 일이 있으면 나쁜 일도 있기 마련이다.", "좋은 일이 있으면 나쁜 일도 있는 셈이다.", "좋은 일이 있으면 나쁜 일도 있을 수가 없다."], d: 0, a: "Genel doğru: -기 마련이다." }
      ]
    },
    {
      id: "ko-t3-18", seviye: "TOPIK 3", sure: 12,
      baslik: "Metin bağlaçları: 그러나, 따라서, 그러므로, 반면에, 즉, 게다가",
      kisa: "그러나 · 반면에 · 따라서 · 그러므로 · 게다가 · 또한 · 즉 · 한편",
      bolumler: [
        { t: "metin", m: "A2'den beri cümleleri <b>그리고, 하지만, 그래서, 그런데</b> gibi bağlaçlarla birbirine bağlıyorsun. Bunlar konuşmada çok doğaldır; ama TOPIK yazma bölümünde ve resmî metinlerde <b>yazıya özgü</b> bağlaçlar beklenir. Bu derste cümleler arasındaki mantıksal ilişkiyi gösteren bağlaçları öğreniyorsun: zıtlık (<b>그러나, 반면에</b>), sonuç (<b>따라서, 그러므로</b>), ekleme (<b>게다가, 또한</b>) ve açıklama (<b>즉</b>). Ders 40'ta <i>-(으)ㄴ/는 반면에</i> ekini görmüştün; burada cümle başındaki <b>반면에</b>'i kullanacaksın. <b>Kullanım alanı:</b> yazı dili (문어체) ağırlıklı." },
        { t: "kiyas", h: "Türkçe mantığıyla", m: "Türkçede de konuşma ve yazı bağlaçları farklıdır: “ama” ↔ “ancak”, “o yüzden” ↔ “dolayısıyla”, “yani” ↔ “başka bir deyişle”. Korecede de aynı ayrım vardır.", l: [
          ["Pahalı. {Ancak} kalitesi iyi.", "비싸다. {그러나} 품질이 좋다.", "bissada. geureona pumjiri jota"],
          ["Nüfus azalıyor. {Dolayısıyla} okullar kapanıyor.", "인구가 줄고 있다. {따라서} 학교가 문을 닫고 있다.", "inguga julgo itda. ttaraseo hakgyoga muneul datgo itda"],
          ["Hava güzeldi. {Üstelik} rüzgâr da yoktu.", "날씨가 좋았다. {게다가} 바람도 없었다.", "nalssiga joatda. gedaga baramdo eopseotda"],
          ["Annemin kız kardeşi, {yani} teyzem geldi.", "어머니의 여동생, {즉} 이모가 오셨다.", "eomeoniui yeodongsaeng, jeuk imoga osyeotda"]
        ] },
        { t: "tablo", h: "Konuşma ve yazı bağlaçları", bas: ["İlişki", "Konuşma", "Yazı", "Türkçe"], s: [
          ["Zıtlık", "하지만, 근데|hajiman, geunde", "그러나, 반면에|geureona, banmyeone", "ancak; buna karşılık"],
          ["Sonuç", "그래서|geuraeseo", "따라서, 그러므로|ttaraseo, geureomeuro", "dolayısıyla, bu nedenle"],
          ["Ekleme", "그리고, 또|geurigo, tto", "또한, 게다가|ttohan, gedaga", "ayrıca, üstelik"],
          ["Açıklama", "그러니까|geureonikka", "즉|jeuk", "yani, başka bir deyişle"],
          ["Konu değiştirme", "그런데|geureonde", "한편|hanpyeon", "öte yandan, bu arada"]
        ] },
        { t: "metin", h: "Zıtlık: 그러나 ve 반면에", m: "<b>그러나</b> yazıda <i>하지만</i>'in karşılığıdır: <i>많은 사람이 노력했다. <b>그러나</b> 결과는 좋지 않았다</i> (Birçok kişi çaba gösterdi. Ancak sonuç iyi değildi). <b>반면에</b> (buna karşılık) ise iki şeyi <b>karşılaştırır</b>, çoğunlukla bir artıyla bir eksiyi: <i>도시는 편리하다. <b>반면에</b> 공기가 나쁘다</i> (Şehir kullanışlıdır. Buna karşılık havası kötüdür). Ders 40'taki ek biçimiyle aynı anlamdadır: <i>편리한 반면에</i>. Cümle başında kısaca <i>반면</i> diye de yazılır." },
        { t: "metin", h: "Sonuç: 따라서 ve 그러므로", m: "<b>따라서</b> ve <b>그러므로</b> “dolayısıyla, bu nedenle” demektir ve mantıksal bir sonuç bildirir: <i>운동은 건강에 좋다. <b>따라서</b> 매일 운동하는 것이 좋다</i> (Spor sağlığa iyidir. Dolayısıyla her gün spor yapmak iyidir). <i>그러므로</i> daha çok bir gerekçeden kesin bir yargıya varılırken (akıl yürütme, kanıt, tanım) kullanılır; <i>따라서</i> daha geniş ve yaygındır. Konuşmadaki <i>그래서</i> yazıda da görülür ama daha az resmîdir." },
        { t: "metin", h: "Ekleme ve açıklama: 게다가, 또한, 즉", m: "<b>게다가</b> (üstelik) aynı yöndeki ikinci bir bilgiyi ekler ve durumu güçlendirir: <i>비가 왔다. <b>게다가</b> 바람도 세게 불었다</i> (Yağmur yağdı. Üstelik rüzgâr da sert esti). İki bilgi olumlu ya da olumsuz olabilir ama aynı yöne bakmalıdır. <b>또한</b> (ayrıca) daha nötr ve resmîdir. <b>즉</b> (yani) önceki ifadeyi başka sözlerle açıklar ya da özetler: <i>2주, <b>즉</b> 14일 동안</i> (iki hafta, yani 14 gün boyunca)." },
        { t: "ipucu", h: "Yazıda kullanırken", m: "Bu bağlaçlar çoğunlukla <b>yeni bir cümlenin başında</b> gelir ve önceki cümle nokta ile biter: <i>…좋다. 그러나 …</i>. Ardından virgül koymak zorunlu değildir. TOPIK 53–54. sorularında (kompozisyon) yerinde kullanılan yazı bağlaçları metni akıcı yapar; aynı bağlacı üst üste tekrarlamamaya dikkat et." },
        { t: "tablo", h: "Kurallar", bas: ["Kural", "Açıklama"], s: [
          ["그러나 / 반면에", "Zıtlık; 반면에 iki şeyi karşılaştırır (artı ↔ eksi)|geureona / banmyeone"],
          ["따라서 / 그러므로", "Sonuç; 그러므로 akıl yürütmede, 따라서 daha yaygın|ttaraseo / geureomeuro"],
          ["게다가 / 또한", "Ekleme; 게다가 aynı yönde güçlendirir, 또한 nötr|gedaga / ttohan"],
          ["즉 / 한편", "즉: açıklama, özet (yani); 한편: konu değiştirme (öte yandan)|jeuk / hanpyeon"],
          ["Kullanım", "Yazı dili; konuşmada 하지만, 그래서, 그리고, 그러니까"]
        ] },
        { t: "tablo", h: "Tuzak: yanlış ve doğru", bas: ["✗ Yanlış", "✓ Doğru", "Neden?"], s: [
          ["(kompozisyon) 환경 오염이 심각하다. {근데} 관심이 부족하다.|hwangyeong oyeomi simgakada. geunde gwansimi bujokada", "(kompozisyon) 환경 오염이 심각하다. {그러나} 관심이 부족하다.|hwangyeong oyeomi simgakada. geureona gwansimi bujokada", "yazıda konuşma bağlacı olmaz: 그러나"],
          ["비가 왔다. {게다가} 오후에는 맑았다.|biga watda. gedaga ohueneun malgatda", "비가 왔다. {그러나} 오후에는 맑았다.|biga watda. geureona ohueneun malgatda", "게다가: aynı yön; zıtlık için 그러나"],
          ["이 식당은 맛있다. {따라서} 서비스도 좋다.|i sikdangeun masitda. ttaraseo seobiseudo jota", "이 식당은 맛있다. {게다가} 서비스도 좋다.|i sikdangeun masitda. gedaga seobiseudo jota", "sonuç değil, ekleme: 게다가"],
          ["도시는 편리하다. {즉} 공기가 나쁘다.|dosineun pyeollihada. jeuk gonggiga nappeuda", "도시는 편리하다. {반면에} 공기가 나쁘다.|dosineun pyeollihada. banmyeone gonggiga nappeuda", "karşılaştırma: 반면에; 즉 açıklama içindir"]
        ] },
        { t: "diyalog", h: "Kompozisyon düzeltme", l: [
          ["선생님", "엘리프 씨, 작문 잘 썼어요. 그런데 ‘근데’는 글에서 쓰지 마세요.", "Elif, kompozisyonu güzel yazmışsın. Ama yazıda ‘근데’ kullanma.", "ellipeu ssi, jangmun jal sseosseoyo. geureonde ‘geunde’neun geureseo sseuji maseyo"],
          ["엘리프", "아, 그럼 뭘 써야 해요?", "Aa, o zaman ne kullanmalıyım?", "a, geureom mwol sseoya haeyo?"],
          ["선생님", "앞 문장과 반대되는 내용이면 {그러나}를 쓰세요.", "Önceki cümleye zıt bir içerikse 그러나 kullan.", "ap munjanggwa bandaedoeneun naeyongimyeon geureonareul sseuseyo"],
          ["엘리프", "그리고 ‘그래서’ 대신 {따라서}를 쓰면 되죠?", "Bir de ‘그래서’ yerine 따라서 kullanabilirim, değil mi?", "geurigo ‘geuraeseo’ daesin ttaraseoreul sseumyeon doejyo?"],
          ["선생님", "맞아요. {게다가} 문장이 너무 길어요. {즉}, 한 문장에 내용이 너무 많아요.", "Doğru. Üstelik cümlelerin çok uzun. Yani bir cümlede çok fazla bilgi var.", "majayo. gedaga munjangi neomu gireoyo. jeuk, han munjange naeyongi neomu manayo"],
          ["엘리프", "알겠습니다. 그럼 짧게 나눠서 다시 쓸게요.", "Anladım. O zaman kısa cümlelere bölüp yeniden yazacağım.", "algetseumnida. geureom jjalge nanwoseo dasi sseulgeyo"]
        ] },
        { t: "ornek", l: [
          ["열심히 준비했다. {그러나} 시험에 떨어졌다.", "Çok iyi hazırlandı. {Ancak} sınavda kaldı.", "yeolsimhi junbihaetda. geureona siheome tteoreojyeotda"],
          ["인터넷 쇼핑은 편리하다. {반면에} 물건을 직접 볼 수 없다.", "İnternetten alışveriş kullanışlıdır. {Buna karşılık} ürünü kendi gözünle göremezsin.", "inteonet syopingeun pyeollihada. banmyeone mulgeoneul jikjeop bol su eopda"],
          ["이 지역은 비가 많이 온다. {따라서} 농사가 잘된다.", "Bu bölgeye çok yağmur yağar. {Dolayısıyla} tarım verimlidir.", "i jiyeogeun biga mani onda. ttaraseo nongsaga jaldoenda"],
          ["모든 사람은 죽는다. 소크라테스는 사람이다. {그러므로} 소크라테스는 죽는다.", "Bütün insanlar ölümlüdür. Sokrates bir insandır. {Öyleyse} Sokrates ölümlüdür.", "modeun sarameun jungneunda. sokeurateseuneun saramida. geureomeuro sokeurateseuneun jungneunda"],
          ["그 식당은 음식이 맛있다. {게다가} 값도 싸다.", "O lokantanın yemekleri lezzetli. {Üstelik} fiyatları da ucuz.", "geu sikdangeun eumsigi masitda. gedaga gapdo ssada"],
          ["이 제품은 가볍다. {또한} 배터리가 오래간다.", "Bu ürün hafiftir. {Ayrıca} pili uzun süre dayanır.", "i jepumeun gabyeopda. ttohan baeteoriga oraeganda"],
          ["한국의 수도, {즉} 서울에는 천만 명 가까이 산다.", "Kore'nin başkenti, {yani} Seul'de yaklaşık on milyon kişi yaşar.", "hangugui sudo, jeuk seoureneun cheonman myeong gakkai sanda"],
          ["경제가 빠르게 성장했다. {한편} 빈부 격차는 더 커졌다.", "Ekonomi hızla büyüdü. {Öte yandan} gelir uçurumu daha da açıldı.", "gyeongjega ppareuge seongjanghaetda. hanpyeon binbu gyeokchaneun deo keojyeotda"]
        ] },
        { t: "ozet", l: [
          "Zıtlık: <b>그러나</b> (ancak), <b>반면에</b> (buna karşılık; karşılaştırma).",
          "Sonuç: <b>따라서</b> (dolayısıyla), <b>그러므로</b> (öyleyse; akıl yürütme).",
          "Ekleme: <b>게다가</b> (üstelik; aynı yön), <b>또한</b> (ayrıca).",
          "Açıklama: <b>즉</b> (yani); konu değiştirme: <i>한편</i> (öte yandan).",
          "Yazıda konuşma bağlaçları (<i>근데, 그래서</i>) yerine bunlar kullanılır."
        ] }
      ],
      test: [
        { s: "Kompozisyonda “하지만”in yazı dilindeki karşılığı?", o: ["그러나", "근데", "그래서"], d: 0, a: "Yazıda zıtlık: 그러나." },
        { s: "운동은 건강에 좋다. ___ 매일 운동하는 것이 좋다.", o: ["따라서", "그러나", "반면에"], d: 0, a: "Sonuç: 따라서." },
        { s: "그 호텔은 깨끗하다. ___ 직원들도 친절하다.", o: ["게다가", "그러나", "즉"], d: 0, a: "Aynı yönde ekleme: 게다가." },
        { s: "도시 생활은 편리하다. ___ 생활비가 많이 든다.", o: ["반면에", "게다가", "즉"], d: 0, a: "Artı ↔ eksi karşılaştırma: 반면에." },
        { s: "“Kore'nin başkenti, yani Seul”", o: ["한국의 수도, 즉 서울", "한국의 수도, 게다가 서울", "한국의 수도, 따라서 서울"], d: 0, a: "Açıklama: 즉." },
        { s: "모든 새는 알을 낳는다. 닭은 새다. ___ 닭은 알을 낳는다.", o: ["그러므로", "반면에", "게다가"], d: 0, a: "Akıl yürütmede sonuç: 그러므로." },
        { s: "비가 왔다. ___ 바람도 세게 불었다.", o: ["게다가", "반면에", "그러므로"], d: 0, a: "Olumsuz + olumsuz, aynı yön: 게다가." },
        { s: "Hangisi konuşma dilidir, yazıda kullanılmaz?", o: ["근데", "그러나", "따라서"], d: 0, a: "근데 = 그런데'nin konuşma biçimi." },
        { s: "열심히 준비했다. ___ 결과는 좋지 않았다.", o: ["그러나", "따라서", "또한"], d: 0, a: "Beklentiye zıt sonuç: 그러나." },
        { s: "Yazıda konu değiştirirken hangisi kullanılır?", o: ["한편", "즉", "게다가"], d: 0, a: "한편: öte yandan, bu arada." }
      ]
    }
  ],
  plan: []
};
