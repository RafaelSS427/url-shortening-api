const REPOSITORY_NAME = 'url-shortening-api'
const BASE_PATH = process.env.NODE_ENV === 'development' ? '/' : `/${REPOSITORY_NAME}/`;

export const getBasePath = (path: string) => {
    return `${BASE_PATH}${path}`
}