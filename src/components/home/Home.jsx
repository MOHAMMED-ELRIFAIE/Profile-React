import React from 'react'
import { Hero } from "./Hero"
import { About } from "../pages/About"
import { Blog } from "../pages/Blog"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Portfolio } from "../pages/Portfolio"
import { Services } from "../pages/Services"
import { Testimonials } from "../pages/Testimonials"

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    )
}
