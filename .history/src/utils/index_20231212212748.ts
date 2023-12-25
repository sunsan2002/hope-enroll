/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 21:08:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-12 21:27:48
 * @FilePath: \hopeEnroll\hope_enroll\src\utils\index.ts
 * @Description: 基础配置
 */
export function localGet<T>(key: string, defaultValue: T | null = null): T | null {
    const value = window.localStorage.getItem(key);

    try {
        return value ? JSON.parse(value) : defaultValue;
    } catch (error) {
        return defaultValue;
    }
}

export function localSet<T>(key: string, value: T): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key: string): void {
    window.localStorage.removeItem(key);
}



