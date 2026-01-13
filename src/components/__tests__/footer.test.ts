import Footer from "../Footer.astro"
import { renderAstroComponent } from "../../test/helpers/render"

test("Footer with date", async () => {
    const result = await renderAstroComponent(Footer)
    expect(result).toContain("©")
    expect(result).toContain(new Date().getFullYear().toString())
})