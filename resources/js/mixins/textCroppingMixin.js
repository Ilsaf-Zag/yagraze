export function textCropping(text,count = 10)
{

    if (text.length > count) {
        return `${text.slice(0,count)}...`
    }

    return text
}
