import Footer from "../Footer.astro"
import { renderAstroComponentString } from "../../test/helpers/render"

test("Footer with date", async () => {
  const result = await renderAstroComponentString(Footer)
  expect(result).toContain("©")
  expect(result).toContain(new Date().getFullYear().toString())
})
