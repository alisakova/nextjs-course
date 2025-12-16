import {BASE_API_URL} from "../../../constants/api";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

interface HandleToggleFavoriteProps {
    isFavorite: boolean
    racketId: number
}

export const handleToggleFavorite = async ({ isFavorite, racketId }: HandleToggleFavoriteProps) => {
    const cookieStore = await cookies()
    const url = `${BASE_API_URL}/product/${racketId}/favorite`

    await (isFavorite
        ? fetch(url, { credentials: 'include', method: 'DELETE', headers: { Cookie: cookieStore.toString()} })
        : fetch(url, {
            credentials: 'include',
            method: 'POST',
            headers: { Cookie: cookieStore.toString()}
        }))

    revalidatePath(`/racket/${racketId}`)
}
