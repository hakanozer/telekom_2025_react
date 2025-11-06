export const likeStoreAddRemove = (id: string) => {
    const stLikes = likesArrControl()
    let arr:string[] = []
    if (stLikes) {
        // var kontrol yap
        const index = arr.findIndex(item => item === id)
        if (index === -1) {
            // daha önce yok ekle
            arr.push(id)
        }else {
            // daha önce var çıkar
            arr.splice(index,1)
        }
    }else {
        // yok, ilk giriş
        arr = [id]
    }
    const stArr = JSON.stringify(arr)
    localStorage.setItem('likes', stArr)
}

export const likesControl = (id: string) => {
    const arr = likesArrControl()
    if (arr) {
        const index = arr.findIndex(item => item === id)
        return index > -1
    }
    return false
}

const likesArrControl = () =>  {
    let stLikes = localStorage.getItem('likes')
    let arr:string[] | null = []
    if (stLikes) {
        try {
            arr = JSON.parse(stLikes) as string[]
        } catch (error) {
            localStorage.removeItem('likes')
            arr = null
        }
    }
    return arr;
}