/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { 
        faUserSecret,
        faMagnifyingGlass,
        faHome,
        faPlay,
        faPlus,
        faCheck,
        faAngleLeft,
        faAngleRight,
        faPause,
        faMaximize,
        faMinimize,
        faVolumeHigh
    } 
from '@fortawesome/free-solid-svg-icons'

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

/* add icons to the library */
library.add(
    faUserSecret,
    faGithub,
    faMagnifyingGlass,
    faHome,
    faPlay,
    faPlus,
    faCheck,
    faPenToSquare,
    faAngleLeft,
    faAngleRight,
    faPause,
    faMaximize,
    faMinimize,
    faVolumeHigh
)

export default FontAwesomeIcon;