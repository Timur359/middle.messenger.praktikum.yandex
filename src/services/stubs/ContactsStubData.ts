import { ChatModel } from "@models/ChatModel";

const stubData: ChatModel[] = [
  {
    id: 563,
    title: "Сергей",
    avatar: "",
    unread_count: 4,
    created_by: 0,
    last_message: {
      user: {
        first_name: "Сергей",
        second_name: "",
        avatar: "",
        email: "sergey@email.com",
        login: "user975",
        phone: "8(985)-111-34-16",
      },
      time: "14:15",
      content: "Привет. Как дела ?",
    },
  },
  {
    id: 153,
    title: "Дима",
    avatar: "",
    unread_count: 1,
    created_by: 0,
    last_message: {
      user: {
        first_name: "Дима",
        second_name: "Иванов",
        avatar: "",
        email: "dima@email.com",
        login: "user652",
        phone: "8(975)-555-33-11",
      },
      time: "18:11",
      content: `Привет! Как дела? Надеюсь, у тебя всё отлично. Недавно наткнулся на интересный проект, 
      который может заинтересовать тебя. Давай обсудим его в ближайшее время?`,
    },
  },
  {
    id: 7531,
    title: "Илья",
    avatar: "",
    unread_count: 3,
    created_by: 0,
    last_message: {
      user: {
        first_name: "Илья",
        second_name: "Забегалов",
        avatar: "",
        email: "ilya@email.com",
        login: "user123",
        phone: "8(923)-753-21-22",
      },
      time: "3:45",
      content: "Давай завтра",
    },
  },
  {
    id: 888,
    title: "Катя",
    avatar: "",
    unread_count: 1,
    created_by: 0,
    last_message: {
      user: {
        first_name: "Катя",
        second_name: "Иванова",
        avatar: "",
        email: "katya@email.com",
        login: "user531",
        phone: "8(923)-666-21-22",
      },
      time: "12:45",
      content: "Погуляем вечером?",
    },
  },
];

export default stubData;
