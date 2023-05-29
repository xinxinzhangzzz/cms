import router from "./router";
import { cacheKeys } from "./type/cacheKeys";
import { local } from "./utils/cache";

router.beforeEach((to, from) => {
	console.log(to,"to")
	console.log(from,"from")
	const token = local.getCache(cacheKeys.TOKEN)

	if(to.path === "/main" && !token) return "/login"
})