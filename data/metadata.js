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
    searchByKey: false,
    chances: 8,
    properties: {
        species: {
            type: "string",
            parseText: (input) => {
                return input
            }
        },
        personality: {
            type: "string",
            parseText: (input) => {
                return personalities[input]
            }
        },
        birthmonth: {
            type: "number",
            parseText: (input) => {
                return input.toString() + "月"
            }
        },
        birthdate: {
            type: "number",
            parseText: (input) => {
                return input.toString() + "日"
            }
        }
    }
}