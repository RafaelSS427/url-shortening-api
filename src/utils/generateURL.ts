
export const generateURL = () => {
    const randomString = (Math.random() + 1).toString(36).substring(2, 8)
    return `https://rel.ink/${randomString}`
}