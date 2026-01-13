// Import the rendercv function and all the refactored components
#import "@preview/rendercv:0.1.0": *

// Apply the rendercv template with custom configuration
#show: rendercv.with(
  name: "Lloyd Lobo",
  footer: context { [#emph[Lloyd Lobo -- #str(here().page())\/#str(counter(page).final().first())]] },
  top-note: [ #emph[Last updated in Dec 2025] ],
  locale-catalog-language: "en",
  page-size: "us-letter",
  page-top-margin: 0.7in,
  page-bottom-margin: 0.7in,
  page-left-margin: 0.7in,
  page-right-margin: 0.7in,
  page-show-footer: true,
  page-show-top-note: true,
  colors-body: rgb(0, 0, 0),
  colors-name: rgb(0, 79, 144),
  colors-headline: rgb(0, 79, 144),
  colors-connections: rgb(0, 79, 144),
  colors-section-titles: rgb(0, 79, 144),
  colors-links: rgb(0, 79, 144),
  colors-footer: rgb(128, 128, 128),
  colors-top-note: rgb(128, 128, 128),
  typography-line-spacing: 0.6em,
  typography-alignment: "justified",
  typography-date-and-location-column-alignment: right,
  typography-font-family-body: "Source Sans 3",
  typography-font-family-name: "Source Sans 3",
  typography-font-family-headline: "Source Sans 3",
  typography-font-family-connections: "Source Sans 3",
  typography-font-family-section-titles: "Source Sans 3",
  typography-font-size-body: 9pt,
  typography-font-size-name: 18pt,
  typography-font-size-headline: 7pt,
  typography-font-size-connections: 10pt,
  typography-font-size-section-titles: 1.0em,
  typography-small-caps-name: false,
  typography-small-caps-headline: false,
  typography-small-caps-connections: false,
  typography-small-caps-section-titles: false,
  typography-bold-name: true,
  typography-bold-headline: false,
  typography-bold-connections: false,
  typography-bold-section-titles: true,
  links-underline: false,
  links-show-external-link-icon: false,
  header-alignment: center,
  header-photo-width: 3.5cm,
  header-space-below-name: 0.7cm,
  header-space-below-headline: 0.7cm,
  header-space-below-connections: 0.7cm,
  header-connections-hyperlink: true,
  header-connections-show-icons: true,
  header-connections-display-urls-instead-of-usernames: false,
  header-connections-separator: "",
  header-connections-space-between-connections: 0.5cm,
  section-titles-type: "with_partial_line",
  section-titles-line-thickness: 0.5pt,
  section-titles-space-above: 0.35cm,
  section-titles-space-below: 0.15cm,
  sections-allow-page-break: false,
  sections-space-between-text-based-entries: 0.15em,
  sections-space-between-regular-entries: 0.7em,
  entries-date-and-location-width: 4.15cm,
  entries-side-space: 0.2cm,
  entries-space-between-columns: 0.1cm,
  entries-allow-page-break: false,
  entries-short-second-row: true,
  entries-summary-space-left: 0cm,
  entries-summary-space-above: 0cm,
  entries-highlights-bullet:  "•" ,
  entries-highlights-nested-bullet:  "•" ,
  entries-highlights-space-left: 0.15cm,
  entries-highlights-space-above: 0cm,
  entries-highlights-space-between-items: 0cm,
  entries-highlights-space-between-bullet-and-text: 0.5em,
  date: datetime(
    year: 2025,
    month: 12,
    day: 31,
  ),
)


= Lloyd Lobo

#connections(
  [#link("https://lloydlobo.github.io/", icon: false, if-underline: false, if-color: false)[#connection-with-icon("link")[lloydlobo.github.io]]],
  [#link("https://linkedin.com/in/thelloydlobo", icon: false, if-underline: false, if-color: false)[#connection-with-icon("linkedin")[thelloydlobo]]],
  [#link("https://github.com/lloydlobo", icon: false, if-underline: false, if-color: false)[#connection-with-icon("github")[lloydlobo]]],
)


== Professional Summary

Full-stack developer specializing in systems programming, web development, and game development

Passionate about low-level programming, performance optimization, and delivering polished projects from concept to deployment

== Skills

#strong[Languages:] Python, Go, TypeScript, JavaScript, F\#, C\/C++, Rust, SQL

#strong[Graphics & Game Development:] Raylib, OpenGL, Blender, 3D Modeling, Ray Tracing

#strong[Web Technologies:] React, FastAPI, Web Components, HTML\/CSS\/JavaScript, HTTP Servers

#strong[Systems Programming:] X11 Protocol, Memory Management, Compiler Construction

== Projects

#regular-entry(
  [
    #strong[#link("https://github.com/lloydlobo/railsnake")[railsnake]]

    #summary[Flagship cross-platform Snake game built with Go and Raylib]

    - Developed cross-platform Snake game with 59+ iterative improvements demonstrating commitment to refinement

    - Implemented real-time game loop, collision detection, scoring system, and smooth cross-platform graphics rendering

  ],
  [
    Feb 2025 – May 2025

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/lloydlobo/BFInterpreter")[BFInterpreter]]

    #summary[Complete Turing-complete Brainfuck language interpreter with REPL interface]

    - Built complete Turing-complete Brainfuck language interpreter with REPL interface and comprehensive testing suite

    - Implemented all 8 Brainfuck operations with robust memory management and comprehensive error handling

  ],
  [
    Feb 2025 – present

  ],
)

#regular-entry(
  [
    #strong[#link("https://github.com/lloydlobo/depths")[depths]]

    #summary[3D space exploration game developed for Ludum Dare 57 game jam]

    - Developed complete 3D space exploration game for Ludum Dare 57 within 48-hour deadline constraints

    - Implemented player controls, dynamic camera systems, and interactive 3D environments with efficient asset management

  ],
  [
    Apr 2025 – May 2025

  ],
)

== Experience

#regular-entry(
  [
    #strong[Noisy Gates Studios], Recording Studio Assistant

    - Audio engineering and content creation

    - Recorded 50+ professional audio sessions...

    - Created educational content increasing online audience by 35\%...

  ],
  [
    Aug 2019 – Nov 2019

    4 months

  ],
)

#regular-entry(
  [
    #strong[Heat Master], Front-end Web Developer

    - Web development and digital marketing

    - Revamped company website using WordPress...

    - Led email marketing campaign with 5,000+ subscribers...

  ],
  [
    Jan 2016 – Jan 2018

    2 years 1 month

  ],
)

#regular-entry(
  [
    #strong[Heat Master], Product Design Engineer

    - Product design and engineering support

    - Optimized product designs using AutoCAD and SolidWorks...

    - Provided technical support for 100+ customers...

  ],
  [
    July 2014 – Jan 2016

    1 year 7 months

  ],
)

== Education

#education-entry(
  [
    #strong[SACAC], Audio Engineering & Music Production

    - Professional audio engineering training

    - Focused on digital audio workstations, live sound engineering, and music production techniques

  ],
  [
    New Delhi, IN

    Sept 2018 – May 2019

  ],
  degree-column: [
    #strong[Dipl]
  ],
)

#education-entry(
  [
    #strong[SRM University], Mechanical Engineering

    - Engineering fundamentals with computer-aided design focus

    - Core coursework in engineering mathematics, computer-aided design, and manufacturing processes

  ],
  [
    Chennai, TN, IN

    Sept 2010 – May 2014

  ],
  degree-column: [
    #strong[BTech]
  ],
)
