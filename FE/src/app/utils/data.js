import { Pencil1Icon, VideoIcon } from "@radix-ui/react-icons";


export const sideBarOptions = [
  { label: 'Movies Details', href:'/dashboard/movies-details', icon:<VideoIcon className="w-6 h-6 mr-2" /> },
  { label: 'Comments Details', href:'/dashboard/comments-details', icon:<Pencil1Icon className="w-6 h-6 mr-2" /> },
];

export const navbarOptions = [
  { label: 'Profile', href: '/' },
  { label: 'Logout', href: '/logout' },
];

const movieData = [
  {
    movie_name: "Kalki-3",
    is_admin: true,
    description: "dgdggdd",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
  },
  {
    movie_name: "Movie-2",
    is_admin: false,
    description: "Description for movie 2",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7072/1713534317072-v",
  },
  {
    movie_name: "Movie-3",
    is_admin: true,
    description: "Description for movie 3",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5728/1710949835728-v",
  },
  {
    movie_name: "Movie-4",
    is_admin: false,
    description: "Description for movie 4",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5862/1713424885862-v",
  },
  {
    movie_name: "Movie-5",
    is_admin: true,
    description: "Description for movie 5",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v",
  },
  {
    movie_name: "Movie-6",
    is_admin: false,
    description: "Description for movie 6",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2876/862876-v",
  },
  {
    movie_name: "Movie-7",
    is_admin: true,
    description: "Description for movie 7",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7527/267527-v",
  },
  {
    movie_name: "Movie-8",
    is_admin: false,
    description: "Description for movie 8",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9886/1489886-v-85d3732e3fe7",
  },
  {
    movie_name: "Movie-9",
    is_admin: true,
    description: "Description for movie 9",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4296/674296-v",
  },
  {
    movie_name: "Movie-10",
    is_admin: false,
    description: "Description for movie 10",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7030/1607030-v-924e1d5a7914",
  },
  {
    movie_name: "Movie-11",
    is_admin: true,
    description: "Description for movie 11",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9946/1279946-v-e840df4196c6",
  },
  {
    movie_name: "Movie-12",
    is_admin: false,
    description: "Description for movie 12",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5596/675596-v",
  },
  {
    movie_name: "Movie-13",
    is_admin: true,
    description: "Description for movie 13",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7487/1557487-v-7443ca868089",
  },
  {
    movie_name: "Movie-14",
    is_admin: false,
    description: "Description for movie 14",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2448/1462448-v-f21a9b6d25d3",
  },
  {
    movie_name: "Movie-15",
    is_admin: true,
    description: "Description for movie 15",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7517/1097517-v-6eb5ec07c99b",
  },
  {
    movie_name: "Movie-16",
    is_admin: false,
    description: "Description for movie 16",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7011/1657011-v-d6e556230ba6",
  },
  {
    movie_name: "Movie-17",
    is_admin: true,
    description: "Description for movie 17",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4168/1524168-v-aa781d26b891",
  },
  {
    movie_name: "Movie-18",
    is_admin: false,
    description: "Description for movie 18",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5181/875181-v",
  },
  {
    movie_name: "Movie-19",
    is_admin: true,
    description: "Description for movie 19",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5514/675514-v",
  },
  {
    movie_name: "Movie-20",
    is_admin: false,
    description: "Description for movie 20",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/88/1650088-v-c469bd343897",
  },
];


const movieDataDes = [
  {
    movie_name: "Kalki-3",
    description: "In a dystopian future where civilization teeters on the brink of collapse, 'Kalki-3' emerges as a beacon of hope amidst the encroaching darkness. The film takes viewers on an epic journey through a world torn apart by war and divided by ancient prophecies. At the heart of the story lies Kalki, a reincarnated hero destined to restore balance and usher in a new era of peace. Armed with mysterious powers and guided by visions of a forgotten past, Kalki embarks on a perilous quest to confront the forces threatening to plunge humanity into eternal chaos. As he navigates treacherous landscapes and encounters allies and adversaries alike, Kalki's journey becomes a crucible of sacrifice and redemption. Themes of destiny, sacrifice, and the resilience of the human spirit resonate throughout the narrative, offering a profound exploration of what it means to be a hero in a world on the brink of annihilation.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v"
  },
  {
    movie_name: "Movie-2",
    description: "'Movie-2' dives deep into the lives intertwining in a bustling metropolis, where dreams and desires collide. Through a tapestry of interconnected stories, the film explores the pursuit of passion amidst the chaos of urban life. From aspiring artists seeking validation to musicians chasing their big break, each character navigates a journey filled with highs and lows. Themes of resilience and the human spirit shine through, as friendships are forged and tested against the backdrop of a city that never sleeps. 'Movie-2' celebrates the triumphs and trials of everyday heroes, offering a poignant reflection on the power of dreams and the bonds that unite us all. With a vibrant cast and a dynamic soundtrack, the film captures the essence of life in a bustling city, where every corner holds a new story and every dream has the potential to change lives.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7072/1713534317072-v"
  },
  {
    movie_name: "Movie-3",
    description: "'Movie-3' embarks on an epic fantasy odyssey where a young hero and their companions embark on a quest to save their realm from ancient malevolence. Set in a realm of magic and mythical creatures, the journey is fraught with peril and filled with moments of courage and camaraderie. As they traverse enchanted landscapes and confront formidable adversaries, bonds are forged that defy time and adversity. 'Movie-3' delves into themes of bravery, sacrifice, and the enduring power of friendship, weaving a tale that resonates with audiences of all ages. With stunning visuals and an immersive world, the film invites viewers on an unforgettable adventure through realms where legends are born and destinies are forged. 'Movie-3' is a testament to the power of myth and the resilience of the human spirit, offering a captivating journey into a world where heroes rise and darkness falls.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5728/1710949835728-v"
  },
  {
    movie_name: "Movie-4",
    description: "'Movie-4' unfolds amidst the tumultuous backdrop of political upheaval and personal intrigue, where characters navigate a web of love, loyalty, and betrayal. Against a historical canvas, the drama explores the complexities of human nature and the choices that shape destinies. From ambitious leaders to passionate rebels, each character's journey intertwines with others in a gripping narrative of ambition and consequence. As alliances shift and loyalties are tested, 'Movie-4' unveils the price of power and the sacrifices made in its pursuit. With captivating performances and intricate storytelling, the film offers a compelling portrait of a society in flux, where every decision carries weight and every heart holds secrets. 'Movie-4' is a masterful exploration of power dynamics and personal sacrifice, set against the backdrop of a world on the brink of transformation.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5862/1713424885862-v"
  },
  {
    movie_name: "Movie-5",
    description: "'Movie-5' is a heartwarming animated adventure that follows a band of misfit heroes on a quest to protect their kingdom from encroaching darkness. Filled with humor and heart, the film celebrates the power of unity and courage in the face of adversity. From unlikely friendships to daring escapades, each character brings a unique strength to the group's quest. As they journey through enchanted forests and treacherous terrain, bonds are forged that transcend differences and ignite the spirit of heroism. 'Movie-5' is a testament to the resilience of the human spirit and the transformative power of friendship, offering audiences of all ages an unforgettable tale of bravery and camaraderie. With stunning animation and a captivating soundtrack, the film invites viewers into a world where magic thrives and heroes are born.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v"
  },
  {
    movie_name: "Movie-6",
    description: "'Movie-6' is a pulse-pounding thriller that follows a seasoned detective as he races against time to unravel a series of baffling murders. Set against the backdrop of a city gripped by fear, the detective's pursuit of justice takes him on a harrowing journey through dark alleys and hidden secrets. As clues emerge and suspects multiply, he confronts his own demons while chasing a cunning adversary bent on evading capture. 'Movie-6' is a gripping tale of suspense and intrigue, where every twist and turn leads deeper into a labyrinth of deception and danger. With riveting performances and a gripping narrative, the film keeps audiences on the edge of their seats until the final, shocking reveal. 'Movie-6' is a masterclass in suspense, blending heart-pounding action with psychological depth.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2876/862876-v"
  },
  {
    movie_name: "Movie-7",
    description: "'Movie-7' is a sweeping historical epic that chronicles the life of a legendary ruler and his conquests that shaped a kingdom's destiny. From battles on distant shores to the intrigues of courtly politics, the film immerses viewers in a world of grandeur and ambition. Against a backdrop of turbulent times, the ruler's quest for power is intertwined with personal sacrifices and profound choices. 'Movie-7' portrays the triumphs and tragedies of leadership, offering a nuanced exploration of legacy and the price of ambition. With breathtaking cinematography and epic storytelling, the film captures the essence of an era defined by heroism and the pursuit of greatness. 'Movie-7' is a testament to the enduring allure of history and the indomitable spirit of those who shape it.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7527/267527-v"
  },
  {
    movie_name: "Movie-8",
    description: "'Movie-8' is a poignant drama that explores the complexities of love and identity amidst cultural divides. Set in a sprawling metropolis, the film follows the intertwined lives of characters navigating the collision of tradition and modernity. From forbidden romances to familial expectations, each story unravels layers of emotion and resilience. 'Movie-8' delves into themes of acceptance and self-discovery, offering a heartfelt exploration of the human experience. With stellar performances and a rich tapestry of storytelling, the film invites viewers on a journey of introspection and connection. 'Movie-8' is a celebration of love in all its forms, from the bonds that bind us to the choices that define us.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9886/1489886-v-85d3732e3fe7"
  },
  {
    movie_name: "Movie-9",
    description: "'Movie-9' is a riveting courtroom drama that unravels the truth behind a high-profile case with far-reaching implications. As lawyers on opposing sides clash in a battle of wits and ethics, the stakes escalate with each revelation. 'Movie-9' explores themes of justice and morality, challenging viewers to question their assumptions and beliefs. With gripping performances and a taut script, the film keeps audiences on the edge of their seats until the final verdict. 'Movie-9' is a thought-provoking exploration of the legal system and the complexities of truth, offering a compelling glimpse into the human condition.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4296/674296-v"
  },
  {
    movie_name: "Movie-10",
    description: "'Movie-10' is an exhilarating sports drama that follows a team of underdogs as they defy the odds to pursue their championship dreams. Set against the backdrop of a competitive season, the film captures the highs and lows of athletic pursuit. From training montages to game-day thrills, each moment is infused with passion and determination. 'Movie-10' celebrates the spirit of resilience and teamwork, offering an inspiring tale of perseverance against adversity. With thrilling sports action and heartfelt performances, the film invites viewers to cheer for the underdogs and believe in the power of dreams. 'Movie-10' is a testament to the triumph of the human spirit, both on and off the field.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7030/1607030-v-924e1d5a7914"
  },
  {
    movie_name: "Movie-11",
    description: "'Movie-11' is a mesmerizing romantic saga that unfolds against the backdrop of a picturesque countryside. As two souls navigate the complexities of love and longing, their journey is marked by tender moments and profound discoveries. 'Movie-11' delves into themes of fate and serendipity, weaving a tale of connection that transcends time. With breathtaking vistas and soul-stirring music, the film captures the beauty of nature and the depth of human emotion. 'Movie-11' is a celebration of love in its purest form, reminding viewers of the transformative power of heartfelt connections. With enchanting performances and a timeless narrative, the film invites audiences to believe in the magic of love.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/9946/1279946-v-e840df4196c6"
  },
  {
    movie_name: "Movie-12",
    description: "'Movie-12' is a gripping thriller that plunges viewers into a world of espionage and intrigue. As covert agents race against time to thwart a deadly conspiracy, the stakes escalate with each twist and turn. 'Movie-12' explores themes of deception and betrayal, challenging viewers to unravel the truth amidst a web of lies. With pulse-pounding action sequences and heart-stopping suspense, the film keeps audiences on the edge of their seats until the final, shocking reveal. 'Movie-12' is a masterclass in espionage thrillers, blending intricate plotting with adrenaline-fueled thrills.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5596/675596-v"
  },
  {
    movie_name: "Movie-13",
    description: "'Movie-13' is an enchanting fantasy adventure that transports viewers to a world of magic and wonder. As a young hero embarks on a quest to save their kingdom from an ancient curse, they discover courage and friendship along the way. 'Movie-13' explores themes of destiny and bravery, weaving a tale of heroism that captivates the imagination. With stunning visuals and whimsical creatures, the film invites audiences on a journey through enchanted forests and mystical realms. 'Movie-13' is a celebration of the power of belief and the triumph of good over evil, offering an unforgettable adventure for audiences of all ages.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7487/1557487-v-7443ca868089"
  },
  {
    movie_name: "Movie-14",
    description: "'Movie-14' is a riveting crime thriller that unravels the mystery behind a series of puzzling heists. As detectives follow clues and chase leads, they uncover a web of deception that leads to unexpected revelations. 'Movie-14' delves into themes of justice and morality, challenging viewers to question their assumptions and beliefs. With gripping suspense and unexpected twists, the film keeps audiences guessing until the final, thrilling conclusion. 'Movie-14' is a masterclass in crime drama, blending intricate plotting with compelling characters.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2448/1462448-v-f21a9b6d25d3"
  },
  {
    movie_name: "Movie-15",
    description: "'Movie-15' is a heartwarming family drama that explores the bonds of love and forgiveness across generations. Set against the backdrop of a picturesque countryside, the film follows a family as they navigate personal struggles and collective triumphs. From heartfelt reunions to unexpected challenges, each moment is infused with warmth and resilience. 'Movie-15' celebrates the resilience of the human spirit and the power of forgiveness, offering a poignant reflection on the ties that bind us. With heartfelt performances and a touching narrative, the film invites viewers on a journey of discovery and connection. 'Movie-15' is a testament to the enduring strength of family and the lessons learned through life's trials.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7517/1097517-v-6eb5ec07c99b"
  },
  {
    movie_name: "Movie-16",
    description: "'Movie-16' is a thrilling action-packed adventure that follows a team of daring explorers as they uncover ancient mysteries in a remote jungle. From treacherous terrain to hidden temples, each discovery brings them closer to uncovering the truth behind a legendary artifact. 'Movie-16' delves into themes of discovery and courage, weaving a tale of adventure that captivates the imagination. With breathtaking landscapes and pulse-pounding action sequences, the film invites viewers on a journey through history and myth. 'Movie-16' is a celebration of exploration and the indomitable spirit of those who dare to seek the unknown.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/7011/1657011-v-d6e556230ba6"
  },
  {
    movie_name: "Movie-17",
    description: "'Movie-17' is an inspiring biographical drama that chronicles the life of a trailblazing visionary who defied conventions to change the world. From humble beginnings to global recognition, the film traces their journey through triumphs and setbacks. 'Movie-17' explores themes of innovation and perseverance, offering a glimpse into the personal sacrifices made in pursuit of a dream. With stirring performances and a compelling narrative, the film celebrates the power of determination and the impact of visionary leadership. 'Movie-17' is a tribute to courage and conviction, reminding viewers of the transformative power of one individual's passion.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/4168/1524168-v-aa781d26b891"
  },
  {
    movie_name: "Movie-18",
    description: "'Movie-18' is a poignant coming-of-age drama that follows a young protagonist as they navigate the complexities of adolescence and identity. Set against the backdrop of a changing world, the film explores themes of self-discovery and acceptance. From first loves to personal triumphs, each experience shapes the protagonist's journey of growth and understanding. 'Movie-18' celebrates the power of resilience and the beauty of embracing one's true self, offering a heartfelt exploration of identity and belonging. With authentic performances and a relatable narrative, the film invites viewers on a journey of introspection and empathy. 'Movie-18' is a testament to the universal search for identity and the courage to embrace who we are.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5181/875181-v"
  },
  {
    movie_name: "Movie-19",
    description: "'Movie-19' is a riveting political thriller that unravels the intricacies of power and corruption within the corridors of government. As politicians maneuver for influence and survival, alliances are forged and broken in a high-stakes game of deception. 'Movie-19' delves into themes of ambition and betrayal, offering a gripping portrayal of the lengths to which individuals will go to protect their interests. With nuanced performances and a taut script, the film keeps audiences on the edge of their seats as secrets unravel and loyalties are tested. 'Movie-19' is a masterclass in political intrigue, blending suspense with insightful commentary on the nature of power.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/5514/675514-v"
  },
  {
    movie_name: "Movie-20",
    description: "'Movie-20' is an emotional drama that follows a group of friends as they navigate life's challenges and celebrate the bonds that unite them. Set against the backdrop of a vibrant city, the film explores themes of friendship and resilience. From shared dreams to personal triumphs, each character's journey intertwines with others in a tapestry of love and loyalty. 'Movie-20' celebrates the power of friendship and the resilience of the human spirit, offering a heartfelt exploration of the bonds that shape our lives. With authentic performances and a touching narrative, the film invites viewers on a journey of laughter, tears, and unforgettable moments. 'Movie-20' is a tribute to the enduring power of friendship and the joy found in shared experiences.",
    image_url: "https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/88/1650088-v-c469bd343897"
  }
]



const CommentsData = [
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "A gripping storyline with unforgettable characters!",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Visually stunning, and emotionally impactful.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "An absolute thrill ride from start to finish!",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Heartwarming and beautifully crafted.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Incredible performances that will stay with you.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "A must-watch for its clever plot twists.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Perfect blend of action and drama.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Captivating and thought-provoking.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Immersive world-building at its best.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Humorous yet profound storytelling.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "A cinematic masterpiece that defies expectations.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Breathtaking cinematography and special effects.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Delivers on both spectacle and substance.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Engaging and filled with suspense.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "An instant classic with an unexpected ending.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Touching and deeply moving.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Keeps you on the edge of your seat throughout.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "A testament to the power of storytelling.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Epic and unforgettable.",
    movie_id: "6686c38472458ed22b8d0d4c"
  },
  {
    user_id: "6686a65aeb4806f257223a61",
    comment: "Leaves you wanting more with every scene.",
    movie_id: "6686c38472458ed22b8d0d4c"
  }
];



export { movieData,CommentsData,movieDataDes };
