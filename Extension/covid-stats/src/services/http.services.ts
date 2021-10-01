interface httpRequest {
    url: string;
}

const httpService = async <T>(httpRequest: httpRequest): Promise<T> => {
    let data = {} as T;

    try {
        const response = await fetch(httpRequest.url);
        if (response.ok) {
            data = (await response.json()) as T;
        } else {
            throw new Error('Opps');
        }
    } catch (e) {
        console.log(e);
    }

    return data;
};

export default httpService;
