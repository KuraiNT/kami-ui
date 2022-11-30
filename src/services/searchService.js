import * as httpRequest from '~/utils/httpRequest';

export const search = async (keyw) => {
    try {
        const res = await httpRequest.get('/search', {
            params: {
                keyw,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
