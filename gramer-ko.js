// Word Memorizer · Korece gramer dersleri (TOPIK 1 + TOPIK 2)
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
    }
  ],
  plan: []
};
