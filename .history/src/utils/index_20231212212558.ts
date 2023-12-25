/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 21:08:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-12 21:25:40
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\index.ts
 * @Description: 基础配置
 */
export function localGet (key) {
    const value = window.localStorage.getItem(key)
    // console.log(value)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    } catch (error) {
        return value
}
}

export function localSet (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export function localRemove (key) {
    window.localStorage.removeItem(key)
}



