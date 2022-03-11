let species = {
    alligator: "鳄鱼",
    anteater: "食蚁兽",
    bear: "大熊",
    bird: "鸟",
    bull: "牛",
    cat: "猫",
    chicken: "鸡",
    cow: "奶牛",
    cub: "小熊",
    deer: "鹿",
    dog: "狗",
    duck: "鸭",
    eagle: "老鹰",
    elephant: "大象",
    frog: "青蛙",
    goat: "山羊",
    gorilla: "猩猩",
    hamster: "仓鼠",
    hippo: "河马",
    horse: "马",
    kangaroo: "袋鼠",
    koala: "考拉",
    lion: "狮子",
    monkey: "猴子",
    mouse: "老鼠",
    octopus: "章鱼",
    ostrich: "鸵鸟",
    penguin: "企鹅",
    pig: "猪",
    rabbit: "兔子",
    rhino: "犀牛",
    sheep: "绵羊",
    squirrel: "松鼠",
    tiger: "老虎",
    wolf: "狼",
}

let personalities = {
    peppy: "元气",
    normal: "普通",
    snooty: "成熟",
    uchi: "大姐姐",
    smug: "自恋",
    jock: "运动",
    lazy: "悠闲",
    cranky: "暴躁"
}
import list from "./listdata.json"
export default {
    title: "Nookie",
    list: list,
    searchByKey: true,
    chances: 8,
    properties: {
        species: {
            text:"种族",
            type: "string",
            parseText: (input) => {
                return species[input]
            }
        },
        personality: {
            text:"性格",
            type: "string",
            parseText: (input) => {
                return personalities[input]
            }
        },
        birthmonth: {
            text:"生日月份",
            type: "number",
            parseText: (input) => {
                return input.toString() + "月"
            }
        },
        birthdate: {
            text:"生日日期",
            type: "number",
            parseText: (input) => {
                return input.toString() + "日"
            }
        }
    }
}