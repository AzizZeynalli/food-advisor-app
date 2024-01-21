import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { RecipesHeader } from "@/components/RecipesHeader";

export default function Layout({children}:any) {
    return(
        <>
            <Navigation />
            <RecipesHeader />
            {children}
            <Footer />
        </>
    )
}