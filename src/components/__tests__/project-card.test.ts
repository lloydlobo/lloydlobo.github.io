import { renderAstroComponentString } from "../../test/helpers/render"
import ProjectCard from "../ProjectCard.astro"

const testProject = {
  name: "[Test Project](https://example.com)",
  date: null,
  start_date: "2024-01-01",
  end_date: "2024-01-31",
  summary: "Test project summary for unit testing purposes",
  highlights: ["Test highlight 1", "Test highlight 2", "Test highlight 3"],
  card_direction: "right",
  keywords: ["TestKeyword1", "TestKeyword2", "TestKeyword3"],
  roles: ["Test Role"],
  entity: "Test Entity",
  type: "Test Type",
  url: "https://example.com",
  image_src: "/images/test-project.png",
  imageAlt: "test-project",
  active: false,
}

describe("ProjectCard", () => {
  test("renders with provided project data", async () => {
    const result = await renderAstroComponentString(ProjectCard, { project: testProject })
    expect(result).not.toBeNull()

    expect(result).toContain(testProject.name)
    expect(result).toContain(testProject.summary)
    expect(result).toContain(testProject.type)
    expect(result).toContain(testProject.url)
    expect(result).toContain(testProject.image_src)
    expect(result).toContain(testProject.imageAlt)

    testProject.keywords.forEach((keyword) => {
      expect(result).toContain(keyword)
    })
  })
})
