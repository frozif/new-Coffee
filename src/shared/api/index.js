import ServerApi from "./serverApi"
import LocalApi from "./localApi"


const USE_LOCAL = import.meta.env.VITE_STATIC_BACKEND === 'true'


const api = USE_LOCAL ? LocalApi() : ServerApi()

export default api