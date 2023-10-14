import ActiveBasket from "../../utils/images/AppbarIcons/ActiveBasket.png"
import InactiveBasket from "../../utils/images/AppbarIcons/InactiveBasket.png"
import DarkBasket from "../../utils/images/AppbarIcons/DarkBasket.png"
import ActiveHeart from "../../utils/images/AppbarIcons/ActiveHeart.png"
import InactiveHeart from "../../utils/images/AppbarIcons/InactiveHeart.png"
import DarkHeart from "../../utils/images/AppbarIcons/DarkHeart.png"
import ActiveHome from "../../utils/images/AppbarIcons/ActiveHome.png"
import InactiveHome from "../../utils/images/AppbarIcons/InactiveHome.png"
import DarkHome from "../../utils/images/AppbarIcons/DarkHome.png"
import ActiveProfile from "../../utils/images/AppbarIcons/ActiveProfile.png"
import InactiveProfile from "../../utils/images/AppbarIcons/InactiveProfile.png"
import DarkProfile from "../../utils/images/AppbarIcons/DarkProfile.png"
import ActiveSearch from "../../utils/images/AppbarIcons/ActiveSearch.png"
import InactiveSearch from "../../utils/images/AppbarIcons/InactiveSearch.png"
import DarkSearch from "../../utils/images/AppbarIcons/DarkSearch.png"

const imagePaths = {
    Home: {
      inactive: InactiveHome,
      active: ActiveHome,
      dark: DarkHome,
    },
    Cart: {
      inactive: InactiveBasket,
      active: ActiveBasket,
      dark: DarkBasket,
    },
    Search: {
      inactive: InactiveSearch,
      active: ActiveSearch,
      dark: DarkSearch,
    },
    Wishlist: {
      inactive: InactiveHeart,
      active: ActiveHeart,
      dark: DarkHeart,
    },
    Account: {
      inactive: InactiveProfile,
      active: ActiveProfile,
      dark: DarkProfile,
    },
}

export default imagePaths;