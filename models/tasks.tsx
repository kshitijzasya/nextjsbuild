interface tasks {
    task: string
}

interface LiveInterface {
    top: string[],
    list: string[]
}

interface EditorInterface {
    updateTop: Function,
    updatelist: Function
}

export type {
    tasks,
    EditorInterface,
    LiveInterface
}

