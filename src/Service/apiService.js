import { baseUrl } from '../common/baseUrl';
class apiService {
    post = async (url, body) => {
        return new Promise(async (resolve, reject) => {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(body)
            }
            try {
                let res = await fetch(baseUrl + url, options);
                let resJson = res.json();
                if (res.ok) {
                    resolve(resJson);
                }
                else {
                    reject(resJson);
                }
            } catch (error) {
                reject(error);
            }
        })
    }
}
export default new apiService();