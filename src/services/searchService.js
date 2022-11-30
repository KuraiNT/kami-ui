import * as request from '~/utils/request';

export const search = async (keyw) => {
    try {
        const res = await request.get('/search', {
            params: {
                keyw,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
