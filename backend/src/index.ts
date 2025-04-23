import server from "./server";
import config from "./config/config";

server.listen(config.PORT, () => {
    console.log(`Server listening from port ${config.PORT}`)
})

