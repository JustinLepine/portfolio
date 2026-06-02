const data = {
  dropdownLinks: ['About Me', 'Skills', 'Projects'],
  navOptions: [
    { id: 'about', label: 'About Me', path: '#about' },
    { id: 'story', label: 'Story', path: '#story' },
    { id: 'projects', label: 'Projects', path: '#projects' },
    { id: 'contact', label: 'Contact', path: '#contact' }
  ],
  skills: [
    { id: 1, name: 'SQL' },
    { id: 2, name: 'Javascript' },
    { id: 3, name: 'Typescript' },
    { id: 4, name: 'React' },
    { id: 5, name: 'AWS' },
    { id: 6, name: 'Docker' },
    { id: 7, name: 'Java' },
    { id: 8, name: 'SpringBoot' },
    { id: 9, name: 'Node' },
    { id: 10, name: 'REST' },
    { id: 11, name: 'Vim' },
    { id: 12, name: 'SFTP' },
    { id: 13, name: 'threeJS' },
    { id: 14, name: 'pixelart' },
    { id: 15, name: 'godot' },
    { id: 16, name: 'specdriven' },
  ],
  typewriter: {
    hero: [
      `Let's build something fun`,
      `Something that matters`,
      `Clean code, great UX`,
      `Ship it. Iterate. Repeat`,
      `Turn ideas into products`,
      `Let's collaborate`,
      `Automate the boring stuff`,
      `If it runs twice, script it`,
      `Let the machines do the work`,
    ]
  },
  timeline: [
    {
      id: 1,
      svgPath: new URL('../assets/story-svg/car.svg', import.meta.url).href,
      content: `Outside the digital world, my passion lies in the garage. I specialize in modifying 90’s Japanese cars, specifically drifting platforms like the AE86, S-Chassis, and the FD RX-7. The FD, with its twin-turbo rotary engine, was a true mechanical puzzle. Because available documentation for these specific setups was often scarce, modifying and fixing them became a deep dive into complex problem solving. It taught me that any system, no matter how intricate, can be mastered with patience and the right diagnostic approach.`,
    },
    {
      id: 2,
      svgPath: new URL('../assets/story-svg/plumbing.svg', import.meta.url).href,
      content: `Before transitioning into tech, I spent over a decade in the plumbing industry as a Purchasing Manager. I traveled throughout China and Europe to source new products and oversee quality control at the source. I managed yearly inventory and negotiated net pricing for bulk purchasing.`,
    },
    {
      id: 3,
      svgPath: new URL('../assets/story-svg/plane.svg', import.meta.url).href,
      content: `My approach to travel mirrors my approach to work: I prefer the road less traveled. I have a deep affinity for Southeast Asia, specifically seeking out remote regions and routes that fall outside the standard tourist circuit. Navigating these areas requires high levels of independence and adaptability, traits that have sharpened my ability to find solutions when traditional resources aren't available.`,
    },
    {
      id: 4,
      svgPath: new URL('../assets/story-svg/work.svg', import.meta.url).href,
      content: `In my current role as a Systems and Web Integrator, I focus on bridging the gap between partner requirements and seamless user interfaces. My primary objective is maximizing efficiency through automation. I’ve shifted my workflow toward the strategic application of AI, using it to identify repetitive patterns and deploy scripts that handle heavy lifting. By adapting to AI driven tools for troubleshooting and configuration, I’ve significantly reduced manual effort and optimized system reliability for the company.`,
    },
    {
      id: 5,
      svgPath: new URL('../assets/story-svg/code.svg', import.meta.url).href,
      content: `What drew me to software was the same logic that fueled my interest in mechanics: the challenge of taking complex, disparate parts and making them function as a unified system. I focus on the problem-solving aspect of the development cycle, utilizing a modern stack to build reliable and streamlined applications.. I treat every project as a new puzzle to solve, focusing on building tools that are as reliable as they are efficient.`,
    }
  ],
  projects: [
    {
      id: 1,
      name: 'Kana Bites',
      description: 'A Chrome extension for quick Japanese flashcard practice. Covers Hiragana, Katakana, and Kanji (JLPT N5–N1) with instant feedback, session scoring, and a stats page tracking your weakest characters.',
      tags: ['React', 'TypeScript', 'Vite', 'SCSS', 'Chrome Extension'],
      logo: new URL('../assets/kana-bites-logo.png', import.meta.url).href,
      github: 'https://github.com/JustinLepine/kana-bites',
      live: null,
    },
    {
      id: 2,
      name: 'Road Trip',
      description: 'A full-stack trip planning app for organizing road trips with friends. Create trips, manage packing lists, and drop waypoints on an interactive Google Map.',
      tags: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Docker', 'JWT', 'Drizzle ORM'],
      logo: new URL('../assets/road-trip-logo.png', import.meta.url).href,
      github: 'https://github.com/JustinLepine/road-trip',
      live: null,
    },
  ],
  about: {
    main:  [
      `A developer based in Montreal who loves turning ideas into clean, working products. I spend my days integrating systems, automating the boring stuff, and making sure things actually ship.`,
      `In the age of AI, it's easy for everything to look the same. I think that's exactly why custom, handcrafted elements matter more than ever, let's make a product feel like it was built by a human, for humans.`
    ],
    points: [
      { label: `Currently`, value: `Systems & Web Integrator @ Plusgrade` },
      { label: `Stack`, value: `TypeScript · React · Node · Java · SQL · AWS` },
      { label: `Languages`, value: `English & French` },
      { label: `When not coding`, value: `Travelling, modifying cars, fishing, cooking` },
    ]
  }
}

export default data