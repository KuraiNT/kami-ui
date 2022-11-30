import * as httpRequest from '~/utils/httpRequest';

export const top = async () => {
    try {
        const res = await httpRequest.get('/top-airing', {
            params: {},
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
