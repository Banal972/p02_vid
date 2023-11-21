/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret,faMagnifyingGlass,faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

/* add icons to the library */
library.add(faUserSecret,faGithub,faMagnifyingGlass,faHome)


export default FontAwesomeIcon;