export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
  genre: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  link: string;
}

export const AUTHOR_INFO = {
  name: 'Rajani Tewari',
  penName: 'Ms. Zen',
  tagline: 'Storyteller. Speaker. Corporate Leader.',
  image: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/57lh0cdca9o0rneel24ak1j4jf.jpg',
  email: 'rajanitewari@gmail.com',
  instagram: 'https://www.instagram.com/rajaniarvind',
  instagramHandle: '@rajaniarvind',
  facebook: 'https://www.facebook.com/rajine.tewari',
  facebookHandle: 'rajine.tewari',
  substack: 'https://substack.com/@rajanitewariauthor',
  bioParagraphs: [
    'Rajani Tewari (writing as Ms. Zen) is a storyteller, speaker, and corporate leader whose words dance on the fine line between humor and heart. With a career in people strategy and leadership, she has spent years observing the quiet threads that connect human beings — in boardrooms, in families, in friendships — and translating those observations into narratives that resonate.',
    'Her writing is marked by wit, metaphor, and emotional candor. She brings mythological echoes into contemporary life, finding Radha–Krishna’s eternal truths mirrored in modern-day relationships.',
    'When she’s not writing, Rajani can be found mentoring leaders, sharing laughter with her family, or sipping coffee while watching the small dramas of everyday life unfold.',
  ],
  quote:
    'Silent Threads: Unclaimed Yet Eternal is her first work of fiction — a celebration of bonds that defy labels, of care that outlasts love.',
};

export const BOOKS: Book[] = [
  {
    id: 'audacity-of-being-enough',
    title: 'THE AUDACITY OF BEING ENOUGH',
    description:
      'What happens when you finally get everything you thought you wanted, only to realise you’re losing yourself? Meet Jovi Mehta: corporate high-flier, accidental rebel, and reluctant role model. She’s the woman who can rescue any project, can silence any boardroom, but can never silence her own self-doubt. Armed with conviction, red lipstick, and a steel dabba, Jovi is ready to prove her worth. But at her workplace, women’s competence is measured by their clothes, late nights are praised in men, but questioned in women, and passion is politely rebranded as “aggression.” As the pressure mounts, Jovi must decide what arrival truly means: applause, titles, and endless exhaustion? Or the thunder of becoming enough on her own terms? In this witty and unflinchingly honest journey, you, along with Jovi, might just learn that the bravest thing you can do is stay, but stop shrinking.',
    imageUrl: 'https://m.media-amazon.com/images/I/715ORG797bL._SL1500_.jpg',
    amazonUrl:
      'https://www.amazon.in/AUDACITY-BEING-ENOUGH-Rajani-Tewari/dp/8199368489/ref=books_amazonstores_d_mfs_author_smart_catalog_unrecognized_0?_encoding=UTF8&pd_rd_w=ODXpo&content-id=amzn1.sym.5dfcefb1-f0e4-44ce-9893-11a4ee758e20&pf_rd_p=5dfcefb1-f0e4-44ce-9893-11a4ee758e20&pf_rd_r=525-4625172-4118258&pd_rd_wg=FbwTY&pd_rd_r=3b5b2b4a-e75d-44c6-8860-69aeb5220cee',
    genre: 'Fiction / Self-Discovery',
  },
  {
    id: 'guilt-trip',
    title: 'Guilt Trip-The Weight of Being Ladoo',
    description:
      'Bold, brilliant and ridiculously funny, Guilt Trip will make you laugh out loud, cry quietly, and nod furiously in recognition. Meet Ladoo Singh – a bright, curve-celebrating woman juggling corporate chaos, family expectations, unsolicited Rishta advice and the weight of her own insecurities. From being body-shamed at weddings to battling workplace sexism and fatphobia, Ladoo fights back with sharp wit and unapologetic sass. But behind the sarcasm is a woman reckoning with grief, motherhood, burnout, and the quiet ache of becoming everyone’s rock while forgetting herself. Told through essays, poems and diary-like reflections, Guilt Trip is the heartfelt ode to the messy, magical and maddening experience of womanhood. Tender and razor-sharp, this feminist chronicle is a rallying cry for every woman who has ever been told she’s too much – or not enough.',
    imageUrl: 'https://m.media-amazon.com/images/I/71vT6C67WIL._SL1500_.jpg',
    amazonUrl:
      'https://www.amazon.in/Guilt-Trip-Weight-Being-Ladoo-ebook/dp/B0FY34SBJK?ref_=ast_author_mpb',
    genre: 'Humor & Heart / Memoir-Essays',
  },
  {
    id: 'love-mismatched',
    title: 'Love, Mismatched-Our love story is on mute ,But the subtitles are hilarious.',
    description:
      'A tender, honest love story about choosing each other again. Berry is calm, private, and careful with words. Pea is emotional, expressive, and full of feelings. They look like the perfect couple: married, settled, raising a child, managing work, home, and relatives with quiet efficiency. No fights. No drama. No scandals. Just one problem… they no longer talk the way they used to! They face the chaos of parenting, in-laws, work stress, and family dinners, through silence and awkward small talk, but things start changing when it becomes obvious. In this warm, funny, and deeply relatable story about a marriage that hasn’t broken, but gone silent, follow Berry and Pea as they navigate the question every long marriage eventually comes to deal with: Is love about staying together, or about feeling truly seen?',
    imageUrl: 'https://m.media-amazon.com/images/I/71lA7MtbByL._SL1500_.jpg',
    amazonUrl:
      'https://www.amazon.in/Love-Mismatched-Our-story-subtitles-hilarious/dp/8199854022/ref=books_amazonstores_d_mfs_author_smart_catalog_unrecognized_5?_encoding=UTF8&pd_rd_w=ODXpo&content-id=amzn1.sym.5dfcefb1-f0e4-44ce-9893-11a4ee758e20&pf_rd_p=5dfcefb1-f0e4-44ce-9893-11a4ee758e20&pf_rd_r=525-4625172-4118258&pd_rd_wg=FbwTY&pd_rd_r=3b5b2b4a-e75d-44c6-8860-69aeb5220cee',
    genre: 'Contemporary Romance & Relationships',
  },
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Mirror Knows My Face. But Does It Know Me?',
    description:
      'On feeling complete and incomplete at the same time, and the things we carry that nobody else can see.',
    date: 'Nov 19, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-225633005',
  },
  {
    id: 'blog-2',
    title: 'We Are Raising Children. Who Is Raising Us?',
    description:
      'On modern parenting, invisible guilt, and the courage to raise a child without losing yourself.',
    date: 'Nov 18, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-225448356',
  },
  {
    id: 'blog-3',
    title: 'My Friend, My Shadow',
    description:
      'She had the perfect best friend. There was just one small problem: nobody else could see her.',
    date: 'Nov 12, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-224589200',
  },
  {
    id: 'blog-4',
    title: 'Two Idiots, One Friendship',
    description:
      "Men don't always say I love you. Sometimes they say, 'Petrol bharwa le, gareeb.'",
    date: 'Nov 05, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-223612577',
  },
  {
    id: 'blog-5',
    title: 'The Girl Crush Club',
    description:
      'On girl crushes, female friendships, and the joy of discovering that your favourite woman is wonderfully human too.',
    date: 'Nov 02, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-223149818',
  },
  {
    id: 'blog-6',
    title: 'The Girl I Wanted to Be Friends With',
    description:
      'Or, How I Accidentally Befriended My Own Fantasy',
    date: 'Oct 30, 2026',
    link: 'https://substack.com/@rajanitewariauthor/p-222804073',
  },
];
