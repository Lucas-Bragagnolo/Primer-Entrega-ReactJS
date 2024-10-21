import CartWidget from "./CartWidget";
import BrandComponent from "./BrandComponent";
import ListMenuComponent from "./ListMenuComponent";


export default function NavBar() {
return (
    
        <nav className="navbar navbar-dark bg-dark p-4">            
            <BrandComponent />  
            <ListMenuComponent />            
            <CartWidget />                    
        </nav>
    
)
}