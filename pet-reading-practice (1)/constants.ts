
import { Test, TestType } from './types';

export const TESTS_DATA: Test[] = [
  {
    id: 1,
    title: 'Department Stores – B1 English Reading Test',
    type: TestType.MATCHING,
    instructions: 'The people below all want to find a department store to visit in their city. There are descriptions of eight department stores. Decide which department store would be the most suitable for the people below.',
    questions: [
      { id: 1, text: "Jasmine would like to find a store where they can eat outside, and her dad wants somewhere known for its good-quality suits. They also want to buy a necklace for Jasmine’s mum." },
      { id: 2, text: "Peter wants to buy some special sweets for his grandma’s birthday, and his older sister, Nell, wants to see the latest women’s fashions. They also need to buy new tennis T-shirts, without spending a lot." },
      { id: 3, text: "Maria wants a store selling clothes that use materials produced without damaging the environment. Her mum would like somewhere that has great customer service and is beautiful inside." },
      { id: 4, text: "John enjoys cooking, and wants to buy some unusual ingredients. His parents like stores that have been in the same buildings since they were young, and that have great toys for John’s young sister." },
      { id: 5, text: "Samuel and Mark want to visit a store with a good selection of chess sets. They’d like to have some delicious ice creams and buy something made in the store to eat later." },
    ],
    passages: [
      { id: 'A', title: "Hallwick’s", text: "People often visit Hallwick’s just for the displays of lights that make it so attractive to shop here. And it was the first to sell clothes made of pure, natural cotton, grown in conditions that avoid creating pollution. The assistants are polite and will help with any questions about goods." },
      { id: 'B', title: "Crozier’s", text: "This store is in a beautiful new building. One floor is full of toys and board games like chess, and downstairs there’s a huge variety of cakes, sweets and also fresh food that’s perfect for making a meal! The roof garden is popular here in summer, and the friendly staff serve delicious lunches." },
      { id: 'C', title: "Stafford’s", text: "This store is popular for its range of good-quality sportswear at very reasonable prices, which is hard to find elsewhere. And on the ground floor, you’ll find displays of their famous handmade candies – great for celebrations! And Stafford’s is always the first to offer new designs in men’s and women’s clothing, too!" },
      { id: 'D', title: "Barton’s", text: "Barton’s has been here since it opened in 1930, and still has its huge glass door and beautiful windows. The first floor is fantastic for children, as it’s packed with things to play with – at reasonable prices. And downstairs, you’ll find a huge selection of amazing fresh food rarely found elsewhere." },
      { id: 'E', title: "Dawson's", text: "Famous for our exclusive menswear collection, especially our tailored suits, Dawson’s also features a rooftop restaurant with stunning city views. Our ground-floor jewellery department has a wide selection of beautiful necklaces and watches." },
      { id: 'F', title: "Miller's", text: "A modern store focused on technology and home goods. Find the latest gadgets and kitchen appliances. We have a small cafe on the second floor." },
      { id: 'G', title: "Franklin's", text: "The city's biggest bookstore, with four floors of books on every subject. We also have a dedicated section for educational toys and games for young children." },
      { id: 'H', title: "The Emporium", text: "Visit The Emporium for luxury beauty products and perfumes. We offer free makeovers and beauty consultations. Our fashion department focuses on high-end designer brands." },
    ],
    answers: ['E', 'C', 'A', 'D', 'B']
  },
  {
    id: 2,
    title: 'Local activities – B1 English Reading Test',
    type: TestType.MATCHING,
    instructions: 'The people below all want to do a local activity. There are eight activities in the local area. Decide which activity would be the most suitable for the people below.',
    questions: [
      { id: 1, text: "Susie has a teenage son who is very keen to get into acting and learning how best to perform on stage. Because of other activities he cannot do Saturdays or Sundays." },
      { id: 2, text: "Gareth is 21 and on summer vacation before going back to university. He is looking for voluntary work that will help him gain experience in working with customers." },
      { id: 3, text: "Marcia would like to take her children to the park one day next week. She would like to show them the importance of doing something for local people." },
      { id: 4, text: "Ella is a new mum with a three-month-old baby and is looking for exercise to help her relax. She is free on Monday and Tuesday and loves getting a bargain!" },
      { id: 5, text: "Jacob is looking for somewhere to take his son for something to eat at lunchtime any day this week. He would like to go somewhere that is outside to get some fresh air." },
    ],
    passages: [
      { id: 'A', title: "Friends of Hamley Park", text: "Come along to ‘Friends of Hamley Park’ for our monthly litter pick. Join our friendly team of adults and children every Sunday to help us keep our lovely local park tidy and something to be proud of. We provide all the tools and equipment you’ll need. Just come along on the day and we’ll find something for you to do." },
      { id: 'B', title: "Yoga sessions", text: "Yoga sessions with Petra aimed at your level. I know how important it can be for you mums to get out of the house and do some exercise. My fun weekly ‘Mum and Child’ yoga classes start on Monday 18 June. Buy five sessions and get one free." },
      { id: 'C', title: "Broadchester Park", text: "You are invited to come along for our weekly picnic in Broadchester Park. Open to all, young and old, it’s held every Tuesday throughout the summer at 12.00. Please note there will be a charge for food which will be supplied by the café." },
      { id: 'D', title: "Poetry competition", text: "Come and see the winners of this poetry competition. The theme was the natural world and the poets will be performing their work in the beautiful surroundings of Kimberley Park. Entry costs £2. Children under 11 are free." },
      { id: 'E', title: "Storytelling", text: "Storytelling has become popular lately, especially for those who want to tell their story on stage in front of a live audience. Join our one-day event on Wednesday – we’ll be looking at how to feel confident and keep your audience interested." },
      { id: 'F', title: "Time to relax", text: "A new six-week yoga course for beginners. Help yourself become more focused, reduce your stress levels, sleep better and improve your mental health. I will be running these courses in the local community centre on Wednesday and Thursday mornings from 11.00 till 12.00. Childcare is available for babies and young children." },
      { id: 'G', title: "The community café", text: "Our community café is looking for young volunteer waiters and waitresses to help us throughout the summer period. You’ll learn skills that will be useful when you start your job search. We’re looking for anyone who is at least 18 and would like you to be available for at least two days per week." },
      { id: 'H', title: "Creswell Youth Centre", text: "Are you interested in developing your acting skills? Creswell Youth Centre is offering young people aged from 7 to 19 the chance to join us for our next show. No experience is required as we can offer a role to all abilities. You will need to be available at weekends throughout the summer." },
    ],
    answers: ['E', 'G', 'A', 'B', 'C']
  },
  {
    id: 3,
    title: 'Robert Taylor talks about his new art show – B1 English Reading Test',
    type: TestType.MULTIPLE_CHOICE,
    instructions: 'Read the text and for each question, choose the correct answer.',
    passage: `
Like all children, I was always getting myself and the kitchen table in a mess when I first took an interest in painting. Unlike many kids, who give up activities like art for other subjects when they go through school, I continued painting throughout my childhood. Now, after years of enjoyment, I’ve finally taken the scary decision to show off some of my favourite pieces of work by holding an exhibition at Glebe Street library. Inviting people to see my work is a new idea and one which I’m looking forward to.

I’ve never had any formal art training. When I was trying to decide what I should study at university, art as a subject never entered my head. I always thought my parents wanted me to follow a subject that would be useful when I was looking for a job, so I ended up taking a business course. Looking back, my parents would probably have supported me whatever my decision, but I decided to do what I thought was best for everyone.

And during my time at university, I rarely did much in the way of painting. It wouldn’t have been easy to paint anyway as I lived in university accommodation and had very little space. I kept an interest in art though and visited local exhibitions whenever I could, but that was about it. It was later in my thirties while I was working that I discovered my love of the activity again. Since then I’ve made a point of spending at least one evening a week painting.

However, my works have only ever been seen by trusted friends and relatives. They’ve always given me plenty of support and encouraged me to continue with my art. But I’ve always wondered what people who I didn’t know would think, people who could give me an honest opinion of my ability. The library have been very helpful and offered me a room for the show. They’ve asked me to supply questionnaires about the event and I’ve included a section for visitors· comments about the works. I’m very much looking forward to reading these opinions.`,
    questions: [
      { 
        id: 1, 
        text: 'What does Robert say about art?',
        options: [
          { id: 'A', text: 'Children usually continue doing it at school.' },
          { id: 'B', text: 'He had to give it up to do other subjects.' },
          { id: 'C', text: 'The thought of showing off his work is a little frightening.' },
          { id: 'D', text: 'He has often thought about letting people see his work.' },
        ],
      },
      {
        id: 2,
        text: 'When deciding what to study at university',
        options: [
          { id: 'A', text: 'Robert didn’t consider doing art.' },
          { id: 'B', text: 'his parents didn’t want him to study art.' },
          { id: 'C', text: 'he thought he would need a job while he was studying.' },
          { id: 'D', text: 'Robert understood correctly what his parents wanted him to do.' },
        ]
      },
      {
        id: 3,
        text: 'What happened while Robert was at university?',
        options: [
          { id: 'A', text: 'He didn’t do any painting.' },
          { id: 'B', text: 'He discovered his love of painting again.' },
          { id: 'C', text: 'He was still keen on art.' },
          { id: 'D', text: 'He painted at least one evening a week.' },
        ]
      },
      {
        id: 4,
        text: 'Robert is holding the exhibition because',
        options: [
          { id: 'A', text: 'his friends and relatives encouraged him to do this.' },
          { id: 'B', text: 'the library asked him to.' },
          { id: 'C', text: 'he is interested in getting opinions from friends and relatives.' },
          { id: 'D', text: 'he wants to know what strangers think of his work.' },
        ]
      },
      {
        id: 5,
        text: 'What would be a good introduction to this article?',
        options: [
          { id: 'A', text: 'Robert Taylor tells us how a love of art can lead to a change of career.' },
          { id: 'B', text: 'If your child shows an interest in art, Robert Taylor will explain how to support this activity.' },
          { id: 'C', text: 'After years in the shadows, Robert Taylor is about to face the public with his works.' },
          { id: 'D', text: 'If you’re keen on developing your artistic skills, Robert Taylor explains how to get support from friends and relatives.' },
        ]
      },
    ],
    answers: ['C', 'A', 'C', 'D', 'C']
  }
];
