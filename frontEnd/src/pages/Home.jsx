import Hero from "../components/common/Hero";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section>
            <Hero />
            <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
            </p>
        </section>
    )
}
