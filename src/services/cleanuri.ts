
type CleanuriResponse = { result_url: string }

const CLEANURI_URL = 'https://cleanuri.com/api/v1/shorten'
const CORS_PROXY_URL = 'https://corsproxy.io/?'

export const fetchShorten = async(value: string):Promise<string | null> => {

    const body = JSON.stringify({
        url: value
    })
    
    try {
        const res = await fetch(CORS_PROXY_URL + encodeURIComponent(CLEANURI_URL), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body
        })

        if(!res.ok){
            return null
        }

        const data:CleanuriResponse  = await res.json()

        return data.result_url
    } catch (error) {
        console.error(error)
        return null
    }
}
