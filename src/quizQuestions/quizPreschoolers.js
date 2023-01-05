import cat from '../images/cat.jpeg'
import redSquare from '../images/redSquare.jpeg'
import blueSky from '../images/blueSky.png'
import Bols_3 from '../images/3Bols.png'
import Mouse from '../images/Mouse.jpeg'
import Pen from '../images/Pen.jpeg'
import BackPack from '../images/BackPack.jpeg'
import Bathroom from '../images/Bathroom.png'
import Winter from '../images/Winter.jpg'

const questionPreschoolers = [
    {
        questionText: "Водили ли Вы, ранее, ребенка на занятия по английскому языку ?",
        answerOptions: [
            {answerText: 'Да (больше года)', isCorrect: true},
            {answerText: 'Нет', isCorrect: false},
            {answerText: 'Пытались но броисили..', isCorrect: false},
            {answerText: 'Совсем немного', isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Сколько слов/выражений на английком языке знает Ваш ребенок ?",
        answerOptions: [
            {answerText: 'Меньше 15', isCorrect: false},
            {answerText: 'Больше 15', isCorrect: true},
            {answerText: 'Понимает англ. речь', isCorrect: true},
            {answerText: 'Говорит на англ.яз', isCorrect: true},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Ходит ли Ваш ребенок на другие дополнительные занятия ?",
        answerOptions: [
            {answerText: 'Да (с удовольствием)', isCorrect: true},
            {answerText: 'Редко', isCorrect: true},
            {answerText: 'Нет (занимаемся дома)', isCorrect: false},
            {answerText: 'Нет', isCorrect: false},
        ],
        img: '',
        alt: '',
    },
    {
        questionText: "Каким цветом квадрат ?",
        answerOptions: [
            {answerText: 'Red [рэд]', isCorrect: true},
            {answerText: 'Blue [блу]', isCorrect: false},
            {answerText: 'White [уайт]', isCorrect: false},
            {answerText: 'Black [блэк]', isCorrect: false},
        ],
        img: redSquare,
        alt: 'Красный квадрат',
    },
    {
        questionText: "Какое домашнее животное изображено на картинке ?",
        answerOptions: [
            {answerText: 'Fish [фищь]', isCorrect: false},
            {answerText: 'Dog [дог]', isCorrect: false},
            {answerText: 'Bird [бёд]', isCorrect: false},
            {answerText: 'Cat [кэт]', isCorrect: true},
        ],
        img: cat,
        alt: 'Кошка',
    },
    {
        questionText: "Каким цветом облако на картинке ?",
        answerOptions: [
            {answerText: 'Red [рэд]', isCorrect: false},
            {answerText: 'Blue [блу]', isCorrect: true},
            {answerText: 'White [уайт]', isCorrect: false},
            {answerText: 'Black [блэк]', isCorrect: false},
        ],
        img: blueSky,
        alt: 'Голубое облако',
    },
    {
        questionText: "Сколько мячей изображено на картинке ?",
        answerOptions: [
            {answerText: 'One [уан]', isCorrect: false},
            {answerText: 'Two [ту]', isCorrect: false},
            {answerText: 'Three [фри]', isCorrect: true},
            {answerText: 'Four [фо]', isCorrect: false},
        ],
        img: Bols_3,
        alt: '3 мяча',
    },
    {
        questionText: "Какое животное изображено на картинке ?",
        answerOptions: [
            {answerText: 'Mouse [маус]', isCorrect: true},
            {answerText: 'Horse [хорс]', isCorrect: false},
            {answerText: 'Turtle [тётл]', isCorrect: false},
            {answerText: 'Cat [кэт]', isCorrect: false},
        ],
        img: Mouse,
        alt: 'Мышь',
    },
    {
        questionText: "Что изображено на картинке ?",
        answerOptions: [
            {answerText: 'Notebook [неутбук]', isCorrect: false},
            {answerText: 'Pens [пэнc]', isCorrect: true},
            {answerText: 'Scissors [сизэс]', isCorrect: false},
            {answerText: 'Paper [пейпэ]', isCorrect: false},
        ],
        img: Pen,
        alt: 'Канцелярская ручка',
    },
    {
        questionText: "Что изображено на картинке ?",
        answerOptions: [
            {answerText: 'Markers [макэрс]', isCorrect: false},
            {answerText: 'Computer [компьютэ]', isCorrect: false},
            {answerText: 'BackPack [бэкпэк]', isCorrect: true},
            {answerText: 'Book [бук]', isCorrect: false},
        ],
        img: BackPack,
        alt: 'Рюкзак',
    },
    {
        questionText: "Какая комната изображена на картинке ?",
        answerOptions: [
            {answerText: 'Living room [ливин рум]', isCorrect: false},
            {answerText: 'Dining room [дайнин рум]', isCorrect: false},
            {answerText: 'Kitchen [китчен]', isCorrect: false},
            {answerText: 'Bathroom [бафрум]', isCorrect: true},
        ],
        img: Bathroom,
        alt: 'Ванная комната',
    },
    {
        questionText: "Какое время года изображено на картинке ?",
        answerOptions: [
            {answerText: 'Spring [сприн]', isCorrect: false},
            {answerText: 'Winter [винтэ]', isCorrect: true},
            {answerText: 'Autumn [отэм]', isCorrect: false},
            {answerText: 'Summer [самэ]', isCorrect: false},
        ],
        img: Winter,
        alt: 'Зима',
    },
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
]
export default questionPreschoolers