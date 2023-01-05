import Alphatablet from '../images/Alphatablet.jpeg'
import Numbers from '../images/Numbers.jpg'
import Lion from '../images/Lion.jpeg'
import Hippo from '../images/Hippo.jpeg'
import Chair from '../images/Chair.jpeg'
import Train from '../images/Train.jpeg'
import IceCream from '../images/IceCream.webp'
import Rabbit from '../images/Rabbit.jpeg'
import WhiteBoard from '../images/WhiteBoard.jpeg'
import BeQuiet from '../images/BeQuiet.png'
import Eye from '../images/Eye.jpeg'

const questionSchool1_4 = [
    {
        questionText: "Знает ли ребенок английский алфавит ?",
        answerOptions: [
            {answerText: 'Да', isCorrect: true},
            {answerText: 'Нет', isCorrect: false},
            {answerText: 'Знает только русский', isCorrect: false},
            {answerText: 'И русский, и английский', isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Знает ли ребенок цифры на английском языке ?",
        answerOptions: [
            {answerText: 'Да (от 0-10)', isCorrect: true},
            {answerText: 'Да (от 0-100)', isCorrect: true},
            {answerText: 'Не знает цифры', isCorrect: false},
            {answerText: 'Знает (1-2 цифры)', isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Умеет ли Ваш ребенок читать на английском языке ?",
        answerOptions: [
            {answerText: 'Да', isCorrect: true},
            {answerText: 'С трудом читает', isCorrect: true},
            {answerText: 'Нет', isCorrect: false},
            {answerText: 'На русском бы научился...', isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Занимались ли Вы дополнительно английским языком ?",
        answerOptions: [
            {answerText: 'Да (с репетитором)', isCorrect: true},
            {answerText: 'Да (доп. кружки)', isCorrect: true},
            {answerText: 'Нет', isCorrect: false},
            {answerText: 'Дома сами занимаемся', isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Правильный ли на картинке английский алфавит ?",
        answerOptions: [
            {answerText: 'Нет', isCorrect: true},
            {answerText: 'Да', isCorrect: false},
            {answerText: 'Тут меньше букв', isCorrect: false},
            {answerText: 'Тут больше букв', isCorrect: false},
        ],
        img: Alphatablet,
        alt: 'Английский алфавит',
    },
    {
        questionText: "Какие 3 цифры изображены на картинке ?",
        answerOptions: [
            {answerText: 'Eight, Three, One', isCorrect: false},
            {answerText: 'Nine, Eight, Two', isCorrect: false},
            {answerText: 'Four, Three, Nine', isCorrect: false},
            {answerText: 'Three, Five, Eight', isCorrect: true},
        ],
        img: Numbers,
        alt: '3 цифры (3,5,8)',
    },
    {
        questionText: "Кто изображен на картинке ?",
        answerOptions: [
            {answerText: 'Elephant', isCorrect: false},
            {answerText: 'Parrot', isCorrect: false},
            {answerText: 'Lion', isCorrect: true},
            {answerText: 'Girl', isCorrect: false},
        ],
        img: Lion,
        alt: 'Лев',
    },
    {
        questionText: "Кто изображен на картинке ?",
        answerOptions: [
            {answerText: 'Boy', isCorrect: false},
            {answerText: 'Hippo', isCorrect: true},
            {answerText: 'Bee', isCorrect: false},
            {answerText: 'Flower', isCorrect: false},
        ],
        img: Hippo,
        alt: 'Гиппопотам',
    },
    {
        questionText: "Что изображено на картинке ?",
        answerOptions: [
            {answerText: 'Chair', isCorrect: true},
            {answerText: 'Desk', isCorrect: false},
            {answerText: 'Book', isCorrect: false},
            {answerText: 'Door', isCorrect: false},
        ],
        img: Chair,
        alt: 'Стул',
    },
    {
        questionText: "Что изображено на картинке ?",
        answerOptions: [
            {answerText: 'Train', isCorrect: true},
            {answerText: 'Plane', isCorrect: false},
            {answerText: 'Bike', isCorrect: false},
            {answerText: 'Guitar', isCorrect: false},
        ],
        img: Train,
        alt: 'Поезд',
    },
    {
        questionText: "Что изображено на картинке ?",
        answerOptions: [
            {answerText: 'Ice cream', isCorrect: true},
            {answerText: 'Chips', isCorrect: false},
            {answerText: 'Salad', isCorrect: false},
            {answerText: 'Burger', isCorrect: false},
            {answerText: 'Pizza', isCorrect: false},
        ],
        img: IceCream,
        alt: 'Мороженное',
    },
    {
        questionText: "Какое животное изображено на картинке ?",
        answerOptions: [
            {answerText: 'Fish', isCorrect: false},
            {answerText: 'Goat', isCorrect: false},
            {answerText: 'Horse', isCorrect: false},
            {answerText: 'Panda', isCorrect: false},
            {answerText: 'Rabbit', isCorrect: true},
        ],
        img: Rabbit,
        alt: 'Кролик',
    },
    {
        questionText: "Какое действие изображено на картинке ?",
        answerOptions: [
            {answerText: 'Open the door', isCorrect: false},
            {answerText: 'Close the window', isCorrect: false},
            {answerText: 'Write on the board', isCorrect: true},
            {answerText: 'Stand Up', isCorrect: false},
            {answerText: 'Sit down', isCorrect: false},
            {answerText: 'Be quiet', isCorrect: false},
        ],
        img: WhiteBoard,
        alt: 'Писать на доске',
    },
    {
        questionText: "Какое действие изображено на картинке ?",
        answerOptions: [
            {answerText: 'Open the door', isCorrect: false},
            {answerText: 'Close the window', isCorrect: false},
            {answerText: 'Write on the board', isCorrect: false},
            {answerText: 'Stand Up', isCorrect: false},
            {answerText: 'Sit down', isCorrect: false},
            {answerText: 'Be quiet', isCorrect: true},
        ],
        img: BeQuiet,
        alt: 'Соблюдать тишину',
    },
    {
        questionText: "Какая часть тела изображена на картинке ?",
        answerOptions: [
            {answerText: 'Ear', isCorrect: false},
            {answerText: 'Mouth', isCorrect: false},
            {answerText: 'Nose', isCorrect: false},
            {answerText: 'Eye', isCorrect: true},
        ],
        img: Eye,
        alt: 'Глаз',
    },
    {
        questionText: "Какое из этих слов лишнее? ( I, You, We, He, My, She )",
        answerOptions: [
            {answerText: 'My', isCorrect: true},
            {answerText: 'She', isCorrect: false},
            {answerText: 'You', isCorrect: false},
            {answerText: 'We', isCorrect: false},
            {answerText: 'I', isCorrect: false},
            {answerText: 'He', isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Какое из этих слов лишнее? ( Red, Grey, Blue, Brave, Black )",
        answerOptions: [
            {answerText: 'Red', isCorrect: false},
            {answerText: 'Grey', isCorrect: false},
            {answerText: 'Blue', isCorrect: false},
            {answerText: 'Brave', isCorrect: true},
            {answerText: 'Black', isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Какое из этих слов лишнее? ( Can, Jump, Sing, Swim, Run, Skate )",
        answerOptions: [
            {answerText: 'Skate', isCorrect: false},
            {answerText: 'Swim', isCorrect: false},
            {answerText: 'Run', isCorrect: false},
            {answerText: 'Jump', isCorrect: false},
            {answerText: 'Sing', isCorrect: false},
            {answerText: 'Can', isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильно составленное предложение из слов? ( duck, can’t, a , sing )",
        answerOptions: [
            {answerText: `A can't duck sing`, isCorrect: false},
            {answerText: `A duck can't sing`, isCorrect: true},
            {answerText: `A sing can't duck`, isCorrect: false},
            {answerText: `A sing duck can't`, isCorrect: false},
            {answerText: `A duck sing can't`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильно составленное предложение из слов? ( isn’t, Ann’s, black, cat )",
        answerOptions: [
            {answerText: `Ann's cat black isn't`, isCorrect: false},
            {answerText: `Isn't Ann's black cat`, isCorrect: false},
            {answerText: `Black Ann's isn't cat`, isCorrect: false},
            {answerText: `Ann's black cat isn't`, isCorrect: false},
            {answerText: `Ann’s cat isn’t black`, isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильно составленное предложение из слов? ( dogs, run, can )",
        answerOptions: [
            {answerText: `Dogs run can`, isCorrect: false},
            {answerText: `Dogs can run`, isCorrect: true},
            {answerText: `Can dogs run`, isCorrect: false},
            {answerText: `Run can dogs`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильно составленное предложение из слов? ( likes, Lulu, juice, an, orange )",
        answerOptions: [
            {answerText: `Likes Lulu an orange juice`, isCorrect: false},
            {answerText: `Lulu likes an juice orange`, isCorrect: false},
            {answerText: `Lulu likes an orange juice`, isCorrect: true},
            {answerText: `An orange juice likes Lulu`, isCorrect: false},
            {answerText: `Orange juice likes an Lulu`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильно составленное предложение из слов? ( a, funny, she, got, rabbit, has )",
        answerOptions: [
            {answerText: `She got has a funny rabbit`, isCorrect: false},
            {answerText: `She has got funny a rabbit`, isCorrect: false},
            {answerText: `She has a got funny rabbit`, isCorrect: false},
            {answerText: `She has got a funny rabbit`, isCorrect: true},
            {answerText: `A funny rabbit she has got`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( My name ......... Kate )",
        answerOptions: [
            {answerText: `am`, isCorrect: false},
            {answerText: `is`, isCorrect: true},
            {answerText: `are`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( I ......... a teacher )",
        answerOptions: [
            {answerText: `am`, isCorrect: true},
            {answerText: `is`, isCorrect: false},
            {answerText: `are`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( It ......... a doll )",
        answerOptions: [
            {answerText: `am`, isCorrect: false},
            {answerText: `is`, isCorrect: true},
            {answerText: `are`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( We ......... sisters )",
        answerOptions: [
            {answerText: `am`, isCorrect: false},
            {answerText: `is`, isCorrect: false},
            {answerText: `are`, isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( She ......... my mum )",
        answerOptions: [
            {answerText: `am`, isCorrect: false},
            {answerText: `is`, isCorrect: true},
            {answerText: `are`, isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Выбери правильную форму глагола 'to be' ( They ......... happy )",
        answerOptions: [
            {answerText: `am`, isCorrect: false},
            {answerText: `is`, isCorrect: false},
            {answerText: `are`, isCorrect: true},
        ],
        img: '',
        alt: '',
    },
]
export default questionSchool1_4