export type HttpResponse<T = any> = {
    code: number
    payload: T
}

export const serverError = (error: Error): HttpResponse => ({
    code: 500,
    payload: error.message
})

export const sucess = (data: any): HttpResponse => ({
    code: 200,
    payload: data
})