


const products = [
  {
    "id": 1,
    "img": "/assets/novels/love/1.png",
    "title": "Jannat Ke Pattay",
    "des": "Haya’s journey takes her through love, faith, mystery, and self-discovery. A captivating story filled with unexpected twists and emotional moments.",
    "writer": 'Nimra Ahmed',
    "cat": "Love",
    "price": 1200
  },
  {
    "id": 2,
    "img": "/assets/novels/crime/1.png",
    "title": "Purani Haweli",
    "des": ": A mysterious story filled with secrets, emotions, and unexpected twists. An intriguing journey through an old mansion where every corner hides a new mystery.",
    "cat": "Crime",
    "price": 950,
    "writer": 'Nimra Ahmed',

  },
  {
    "id": 3,
    "img": "/assets/novels/islamic/1.png",
    "title": "Allah k wali",
    "des": "A heart-touching story of faith, love, and spiritual growth. It explores the journey of finding peace and strength through trust in Allah.",
    "cat": "Islamic",
    "price": 900,
    "writer": 'Khan Asif'
  },
  {
    "id": 4,
    "img": "/assets/novels/history/1.png",
    "title": "Or talwaar toot gaye",
    "des": "A historical novel depicting the struggle, courage, and sacrifices of Muslims during a turbulent period of history. It combines historical events with emotional characters and a powerful narrative.",
    "cat": "History",
    "price": 2000,
    "Writer": "Naseem Hijazi"
  },
  {
    "id": 5,
    "img": "/assets/novels/motivatinal/1.png",
    "title": "Unchi Uraan",
    "des": "A motivational book about personal growth, ambition, and building a successful mindset. It encourages readers to dream bigger, overcome limitations, and work toward their goals.",
    "cat": "Motivational",
    "writer": 'Qasim Ali Shah',
    "price": 700
  },
  {
    "id": 6,
    "img": "/assets/novels/love/2.png",
    "title": "Mata-e-Jaan Hai Tu",
    "des": "A heartfelt story of love, relationships, sacrifice, and family bonds. It follows a young couple whose love is tested by family conflicts and unexpected turns of fate.",
    "cat": "Love",
    "price": 1200,
    "writer": 'Farhat Ishtiaq'
  },
  {
    "id": 7,
    "img": "/assets/novels/crime/2.png",
    "title": "Sarsarahat",
    "des": "A thrilling mystery-horror novel filled with suspense, supernatural powers, black magic, and dark forces. The story explores greed, revenge, and the frightening consequences of human desires.",
    "cat": "Crime",
    "price": 900,
    "writer": 'Muhammad Farooq Anjum'
  },
  {
    "id": 8,
    "img": "/assets/novels/islamic/3.png",
    "title": "Seerat-un-Nabiﷺ",
    "des": "The life, character, teachings, and struggles of Prophet Muhammad ﷺ, presented through a detailed account of his blessed Seerah. A comprehensive Islamic work based on historical sources and scholarly research.",
    "cat": "Islamic",
    "price": 1200,
    "writer": "Dr. Israr Ahmed "
  },
  {
    "id": 9,
    "img": "/assets/novels/history/2.png",
    "title": "Dastan-e-Iman Faroshon Ki",
    "des": ": A historical novel depicting courage, faith, sacrifice, and the struggle of Muslims during a turbulent period of history. The story highlights the challenges faced by people who remain committed to their beliefs in difficult times.",
    "cat": "History",
    "price": 1000,
    "writer": 'Naseem Hijazi'
  },
  {
    "id": 10,
    "img": "/assets/novels/motivatinal/2.png",
    "title": "Zaat Ke Khaali Pan Ka Madawa",
    "des": "A thoughtful book about overcoming emotional emptiness, pain, and self-doubt while finding hope and inner healing. It guides readers toward emotional and spiritual well-being through faith and self-reflection",
    "cat": "Motivational",
    "price": 1000,
    "writer": 'Yasmin Mogahed'
  },
  {
    "id": 11,
    "img": "/assets/novels/love/3.png",
    "title": "Kabhi Ishq Ho To Pata Chale",
    "des": "A romantic story about the sacrifices, struggles, and emotional challenges that come with true love. It also highlights patience, relationships, and the beautiful moments that make love meaningful.",
    "cat": "Love",
    "price": 600,
    "writer": 'Nayab Jilani'
  },
  {
    "id": 12,
    "img": "/assets/novels/crime/3.png",
    "title": "Dasht-e-Junoon",
    "des": "A gripping story of revenge, mystery, relationships, and supernatural elements. The novel blends romance and suspense with a mysterious haunted setting and unexpected twists.",
    "cat": "Crime",
    "price": 2200,
    "writer": 'Amna Riaz'

  },
  {
    "id": 13,
    "img": "/assets/novels/islamic/4.png",
    "title": "Munh Wal Kaaba Shareef",
    "des": "A spiritual travelogue describing the author’s journey toward the sacred lands and his experiences in Makkah and Madinah. It beautifully captures the emotions, observations, and spiritual feelings connected with visiting the holy places",
    "cat": "Islamic",
    "price": 350,
    "writer": 'Mustansar Hussain Tarar'

  },
  {
    "id": 14,
    "img": "/assets/novels/history/3.png",
   "cat": "History",
    "price": 750,
    "title": "Sultan Muhammad Fatih",
  "des": "An inspiring biography of the Ottoman Sultan Muhammad al-Fatih, who conquered Constantinople in 1453. The book explores his courage, military strategy, leadership, and devotion, highlighting his lasting legacy in Islamic history.",
  "price": 800,
  "writer": "Dr. Muhammad Mustafa Safwat"
  },
  {
    "id": 15,
    "img": "/assets/novels/motivatinal/3.png",
    "title": "Mein Anmol",
    "des": "A meaningful journey of self-discovery, self-worth, and personal growth. The book encourages readers to overcome insecurity and past regrets and recognize their own value.",
    "cat": "Motivational",
    "price": 700,
    "writer": 'Nimra Ahmed'

  },
  {
    "id": 16,
    "img": "/assets/novels/love/4.png",
    "title": "Woh Jo Qarz Tha",
    "des": "A story of love, sacrifice, and emotional debts that connect people in unexpected ways. The novel explores relationships, regrets, and the consequences of choices.",
    "cat": "Love",
    "price": 900,
    "writer": 'Syeda Ghazal Zaidi'

  },
  {
    "id": 17,
    "img": "/assets/novels/crime/4.png",
    "title": "Haalim",
    "des": "A gripping story that blends time travel, politics, mystery, and suspense. Talia and Fateh’s journey explores destiny, power, self-discovery, and the consequences of human choices",
    "cat": "Crime",
    "price": 900,
    "writer": 'Nimra Ahmed'

  },
  {
    "id": 18,
    "img": "/assets/novels/islamic/5.png",
    "title": "Bahishti Zewar",
    "des": "Islam ke beliefs, عبادات aur rozmarrah dini masail ko samjhane wali comprehensive kitab. Is mein khaas taur par Islamic practices aur fiqh ke aham topics tafseel se bayan kiye gaye hain.",
    "cat": "Islamic",
    "price": 1200,
    "writer": "Maulana Ashraf Ali Thanvi"

  },
  {
    "id": 19,
    "img": "/assets/novels/history/4.png",
    "title": "Ajaibaat-e-Farang",
    "des": "A fascinating travelogue exploring England’s society, culture, lifestyle, and people through the author’s observations. It offers an interesting glimpse into Europe from an early Urdu travel writer’s perspective.",
    "cat": "History",
    "price": 1400,
    "writer": 'Yusuf Khan Kambal Posh'
  },
  {
    "id": 20,
    "img": "/assets/novels/motivatinal/4.png",
    "title": "Dil Ko Zinda Kar Dobara",
    "des": "A spiritual self-help book about healing the heart, overcoming heartbreak and disappointment, and finding peace through faith. It offers guidance on love, loss, happiness, and pain while encouraging readers to reconnect with their inner strength.",
    "cat": "Motivational",
    "price": 1300,
    "writer": "Yasmin Mogahed"

  },
  {
    "id": 21,
    "img": "/assets/novels/love/5.png",
    "cat": "Love",
    "title": "Mohabbat Subha Ka Sitara Hai",
    "des": "A heart-touching Urdu novel about love, sacrifice, family relationships, and destiny. It follows a young orphan girl as she faces life's hardships and struggles to find happiness, respect, and true love.",
    "price": 1000,
    "writer": "Umera Ahmed"

  },
  {
    "id": 22,
    "img": "/assets/novels/crime/5.png",
    "title": "Badrooh",
    "des": "A suspenseful horror novel filled with mysterious events, strange characters, and supernatural forces. The story explores the eerie world of evil spirits, creating an atmosphere of mystery, adventure, and fear.",
    "price": 500,
    "writer": "Dr. Abdul Rab Bhatti",
    "cat": "Crime"

  },
  {
    "id": 23,
    "img": "/assets/novels/islamic/6.png",
    "cat": "Islamic",
    "title": "Islami Tareekh",
    "des": "An inspiring Islamic history book that presents meaningful historical events, stories of faith, patience, sacrifice, and devotion to Islam. It offers valuable moral lessons and encourages readers to strengthen their faith and character.",
    "price": 500,
    "writer": "Abu Masood Abdul Jabbar"
  },
  {
    "id": 24,
    "img": "/assets/novels/history/5.png",
    "title": "Sultan Muhammad Fateh",
    "des": "Is kitab mein Usmani sultan Muhammad Fateh ki zindagi aur kaarnamon ka bayan hai, jinhon ne Constantinople (Istanbul) fatah kiya. Un ki bahaduri, hikmat-e-amli aur Islami tareekh mein un ke maqam ko aasan Urdu mein pesh kiya gaya hai.",
    "price": 1000,
    "writer": "Naima Sohaib",
    "cat": "History",
  },
  {
    "id": 26,
    "img": "/assets/novels/love/6.png",
    "title": "Peer-e-Kamil",
    "des": "Umera Ahmed ka mashhoor novel, jis mein Imama Hashim aur Salar Sikander ke safar ki kahani hai. Dono kirdar imaan, mohabbat, shanakht aur haqeeqat ki talash mein mushkil imtihanon se guzarte hain. Ye novel khud-shanasi aur ruhani bedari ka paigham deta hai.",
    "price": 419,
    "writer": "Umera Ahmed",
    "cat": "Love",
  },
  {
    "id": 27,
    "img": "/assets/novels/crime/6.png",
    "title": "Maqbaray ka Raaz",
    "des": "An Urdu novel by S.A. Hashmi that follows the mystery hidden inside an old tomb. Full of suspense and intrigue, it is a good read for anyone who enjoys mystery and detective stories.",
    "writer": "S.A. Hashmi",
    "cat": "Crime",
    "price": 1600
  },
  {
    "id": 28,
    "img": "/assets/novels/islamic/7.png",
    "title": "Al-Farooq",
    "des": "Allama Shibli Nomani ki mashhoor tareekhi kitab, jis mein dosray khalifa Hazrat Umar Farooq (R.A.) ki zindagi, un ke daur-e-khilafat, fatuhat aur intizami nizam ka tafseeli bayan hai. Ye Urdu mein Islami tareekh ki sab se mustanad seerat ki kitaabon mein shumar hoti hai.",
    "writer": "Shibli Nomani",
    "cat": "Islamic",
    "price": 1500
  },
  {
    "id": 29,
    "img": "/assets/novels/history/6.png",
    "title": "Hindustani Tehzeeb ki Dastan",
    "des": "A book on the story of Hindustani culture, covering its beginnings and growth, and how it shaped and was shaped by other cultures over the centuries.",
    "writer": "A.L. Hashim",
    "cat": "History",
    "price": 1800
  },

  {
    "id": 31,
    "img": "/assets/novels/love/7.png",
    "title": "Do Rahi Anjany",
    "des": "A romantic Urdu novel by Rafia Aziz about two strangers whose paths cross on an unknown journey and become lifelong companions. It is a story of love, loyalty, patience and standing firm through trials.",
    "price": 1199,
    "writer": "Rafia Aziz",
    "cat": "Love",

  },
  {
    "id": 32,
    "img": "/assets/novels/crime/7.png",
    "title": "Angaray",
    "des": "An action-packed Urdu novel about Shahzaib, a Pakistani young man raised in Denmark who becomes involved in the criminal underworld. After falling in love with Tajoor, he travels to Pakistan to start a new life, where he faces dangerous feudal lords, rivalries, and unexpected challenges.",
    "price": 1000,
    "writer": "Tahir Javed Mughal",
    "cat": "Crime",

  },
  {
    "id": 33,
    "img": "/assets/novels/islamic/8.png",
    "title": "Qisas-ul-Anbiya",
    "des": "An inspiring Islamic book that presents the stories of the Prophets, highlighting their faith, patience, struggles, and devotion to Allah. These accounts offer valuable moral lessons and guidance for strengthening one's faith and character.",
    "price": 800,
    "writer": "Qasim Ali Shah",
    "cat": "Islamic",

  },
  {
    "id": 34,
    "img": "/assets/novels/history/7.png",
    "title": "Patras Ke Mazameen",
    "des": "A classic collection of Urdu humorous essays known for its wit, satire, and elegant writing style. Through everyday situations and amusing observations, Patras Bukhari highlights human nature and social habits with remarkable humor.",
    "price": 500,
    "writer": "Patras Bukhari (Syed Ahmed Shah)",
    "cat": "History",
  }


]

export default products