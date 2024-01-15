import {renderSpotlight} from "./modules/renderSpotlight.js";
import {profileModal} from "./modules/profileModal.js"
import {slider} from "./modules/slider.js";
import {mainRender} from "./modules/mainRender.js";
import {search} from "./modules/search.js";




async function init() {
    await mainRender();
    profileModal();
    slider();
    await search()

}

await init()




