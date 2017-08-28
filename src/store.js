const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch() {    // 取得本地缓存中对应的值
        return JSON.parse(window.localStorage.getItem( STORAGE_KEY ) || '[]' )
    },
    save(items) {   // 设置本地缓存，以key-value的形式
        window.localStorage.setItem( STORAGE_KEY,JSON.stringify(items) )
    }
}
