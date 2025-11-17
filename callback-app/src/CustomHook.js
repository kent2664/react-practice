import { useState,useEffect } from "react";
export default function CustomHook({initValue}){
    const [value, setValue] = useState(() => {
        const item = window.localStorage.getItem("key");
        // localStorageにデータがあれば、JSONとしてパースして返す
        return item ? JSON.parse(item) : initValue;

    });

    useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // 現在の状態をJSON文字列に変換
        const valueToStore = JSON.stringify(value);
        // localStorageを更新
        window.localStorage.setItem("key",valueToStore);
      }
    } catch (error) {
      console.error("error:", error);
    }
  }, [value]);
    return [value, setValue];
}