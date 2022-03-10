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
                return input
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