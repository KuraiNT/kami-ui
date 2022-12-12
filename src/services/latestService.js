import * as httpRequest from '~/utils/httpRequest';

export const latestEp = async (page, type = '1') => {
    try {
        const res = await httpRequest.get('/recent-release', {
            params: { page, type },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
