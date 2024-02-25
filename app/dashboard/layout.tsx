import BottomNav from "../components/general/BottomNav";
import Header from "../components/general/Header";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    // get the user from api
    // and pass user object into children

    return (
        <section className="dark:bg-dark_3 bg-light_1 text-dark_1 dark:text-light_1 min-h-screen">
            <Header />
            <BottomNav />
        </section>
    )
}