import { setEnv, loadEnv } from "@/utils/localStorageManager"

const env = {
  aws: {
    name: 'Aws-test(S3)',
    WEBSITE_URL: 'https://m-aws.test.yunmaowan.com',
	  SERVICE_URL: 'https://app-service.test.cloudcat.ai',
	  PAYMENT_URL: 'https://pay.test.cloudcat.ai/order-server'
  },
  test: {
	  name: 'Test(Aliyun)',
	  WEBSITE_URL: 'https://m.test.yunmaowan.com',
	  SERVICE_URL: 'https://app-service.test.nenly.cn',
	  PAYMENT_URL: 'https://ppphook.test.nenly.cn/order-server'
  },
  staging: {
	  name: 'Staging(Aliyun)',
	  WEBSITE_URL: 'https://m.stag.yunmaowan.com',
	  SERVICE_URL: 'https://app-service.stag.cloudcat.ai',
	  PAYMENT_URL: 'https://pay.stag.cloudcat.ai/order-server'
  },
  production: {
	  name: 'Production',
	  WEBSITE_URL: 'https://m.cloudcat.ai',
	  SERVICE_URL: 'https://app-service-a.prod.farmingcat.ai',
	  PAYMENT_URL: 'https://pay-a.prod.farmingcat.ai/order-server'
  }
}

class EnvManager {
	current
	selected
	constructor () {
	  if (!loadEnv()) {
	    setEnv('test')
	  }
	  this.current = env[loadEnv() || 'test']
	  this.selected = loadEnv() || 'test'
	}
	getList () {
	  return env
	}
	setEnv (key) {
	  if (!(key in env)) {
	    throw new Error('No env of key(' + key + ').')
	  }
	  setEnv(key)
	  this.current = env[key]
	  this.selected = key
	}
}

export default  new EnvManager()
