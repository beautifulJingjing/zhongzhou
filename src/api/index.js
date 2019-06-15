import Hashes from 'jshashes';
import axios from 'axios';

import { stringify } from '@/utils';
import store from '@/store';

const SHA1 = new Hashes.SHA1;
const accessKeyId = 'APId1482c4fc9';
const accessKeySecret = 'f96de898642941ee8401bce20a076f18';

const service = axios.create({
    timeout: 30 * 1000,
});

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use((config) => {
    if (config.url.includes('heweather')) {
        return config
    }

    if (config.url.startsWith('/yunti-api')) {
        config.headers['Content-Type'] = 'application/json'

        return config
    }

    const isFormData = config.data instanceof FormData

    const timestamp = Date.now()
    const action = isFormData ? config.data.get('action') : config.data.action
    const signature = SHA1.hex(`${accessKeySecret}_${accessKeyId}_${timestamp}_${action}`)


    if (isFormData) {
        config.data.append('timestamp', timestamp)
        config.data.append('accessKeyId', accessKeyId)
        config.data.append('signature', signature)
    }
    // 安全相关
    config.data.timestamp = timestamp
    config.data.accessKeyId = accessKeyId
    config.data.signature = signature

    //  user token
    store.state.token && (config.headers['x-sam-Token'] = store.state.token)

    if (config.method === 'post' && !isFormData) {
        config.data = stringify(config.data)
    }

    return config
}, (error) => {
    console.error(error)
})

service.interceptors.response.use((res) => {
    const { success, errorMessage } = res.data

    if (!success) {
        // Message.error(errorMessage)
        alert(errorMessage)

        res.data = null
    }

    return res.data
}, (error) => {
    // Message.error('服务君挂了，稍后重试')
    alert('服务君挂了，稍后重试')
    console.log(error)

    return null
})

export default service