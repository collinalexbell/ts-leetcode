import removeElement from "./remove-element"

interface Runnable {
    run: () => void
}
interface RunnableExport {
    [index: string]: Runnable
}
const tests: RunnableExport = {removeElement};
export {tests};