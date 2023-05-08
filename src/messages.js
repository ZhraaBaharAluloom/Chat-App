import { v4 as uuidv4 } from "uuid";

const messages = [
  {
    id: uuidv4(),
    date: "Sat Nov 09, 2990",
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png",
    username: "Zahraa",
    msgs: [
      {
        text: "Hi, Alien! I'm so fascinated by Mars and I've always wanted to visit. Can you tell me more about what it's like there?",
        send: true,
      },
      {
        text: "Hello, Zahraa! Mars is a pretty unique place. We have a lot of mountains, canyons, and dry riverbeds. Our atmosphere is much thinner than Earth's, so the sky is usually a pinkish-red color. We also have two small moons that orbit around us.",
        send: false,
      },
      {
        text: "Wow, that sounds amazing! How can I visit Mars? Is it possible for me to come there?        ",
        send: true,
      },
      {
        text: "Unfortunately, traveling to Mars is not as easy as traveling to other countries on Earth. You would need specialized equipment and a lot of training to survive in our harsh environment. Plus, the trip itself can take up to several months depending on the alignment of the planets. However, I hear that there are some companies on Earth working on developing new technology to make travel to Mars more accessible in the future.",
        send: false,
      },
      {
        text: "That's so cool! I would love to be one of the first humans to visit Mars someday. It's definitely on my bucket list!",
        send: true,
      },
      {
        text: "Well, we'd love to have you here someday! Who knows, maybe in a few decades, we'll have a whole colony of Earthlings living on Mars. Anything is possible!",
        send: false,
      },
    ],
  },
  {
    id: uuidv4(),
    profileImg:
      "https://upload.wikimedia.org/wikipedia/commons/a/ab/P_Aristotle_grey.png",
    date: "Noday Dec 09, 3000",
    username: "Aristotle",
    msgs: [
      {
        text: "Hello, my friends! How are you all doing today?",
        send: true,
      },
      {
        text: " We're doing well, Aristotle. What have you been up to lately?",
        send: false,
      },
      {
        text: "Oh, you know, just studying and researching as usual. I've been exploring some new ideas about ethics and morality.",
        send: true,
      },
      {
        text: "That sounds interesting. Can you tell us more about your latest findings?",
        send: false,
      },
      {
        text: "Well, I've been pondering the concept of the \"golden mean.\" Essentially, it's the idea that virtue lies in finding the right balance between two extremes. For example, courage is the golden mean between recklessness and cowardice. And generosity is the golden mean between stinginess and extravagance.",
        send: true,
      },
      {
        text: "That's a fascinating concept. But how do we know where that balance lies?",
        send: false,
      },
      {
        text: "It's not always easy, but it requires careful observation and reflection. We need to consider the context and circumstances of each situation. And we need to cultivate our moral character and judgment through practice and habituation.",
        send: true,
      },
      {
        text: 'That makes sense. It reminds me of something you said before, Aristotle: "Excellence is an art won by training and habituation." ',
        send: false,
      },
      {
        text: "Yes, indeed. Virtue is not just a matter of knowing what is right and wrong, but of developing the habits and dispositions to consistently act in accordance with moral principles. It's an ongoing process of self-improvement and refinement.",
        send: true,
      },
      {
        text: "Well said, Aristotle. Your insights always inspire us to think deeper about the world around us.",
        send: false,
      },
    ],
  },
];

export default messages;
