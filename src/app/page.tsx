import Image from "next/image";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-7";
import FooterSection from "@/components/footer";

export default function Home() {
    return (
        <>
            <HeroHeader />
            <HeroSection />
            <ContentSection />
            <FooterSection />
        </>
    );
}
