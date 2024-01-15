export const debounce = (func, ms = 300) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        setTimeout(() =>  {func.apply(this, args)}, ms);
    }
}