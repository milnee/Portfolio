"use client";

import { useState } from "react";

type Modal = "education" | "experience" | "projects" | "about" | "minecraft" | "fivem" | "webdev" | null;

export default function Home() {
  const [modal, setModal] = useState<Modal>(null);

  return (
    <div className="min-h-screen bg-background p-6 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <main className="relative w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 space-y-4">
            <div className="bg-card border border-card-border rounded-2xl p-5 text-center hover:border-accent transition-colors">
              <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-3xl font-bold text-background">
                MS
              </div>
              <h1 className="text-xl font-bold mb-1">Millen Singh</h1>
              <p className="text-accent font-mono text-xs mb-3">Software Developer</p>
              <button
                onClick={() => setModal("about")}
                className="text-xs text-muted hover:text-accent transition-colors underline underline-offset-4"
              >
                About Me
              </button>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-base">✉</span>
                  <div className="flex flex-col">
                    <a href="mailto:singhmillen@gmail.com" className="text-sm hover:text-accent transition-colors">singhmillen@gmail.com</a>
                    <a href="mailto:singh-m21@ulster.ac.uk" className="text-xs text-muted hover:text-accent transition-colors">singh-m21@ulster.ac.uk</a>
                  </div>
                </div>
                <a href="tel:+447404225469" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-base">📱</span>
                  <span className="text-sm group-hover:text-accent transition-colors">+44 7404225469</span>
                </a>
                <a href="https://www.google.com/maps/search/Derry+Londonderry+UK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center text-base">📍</span>
                  <span className="text-sm text-foreground group-hover:text-accent transition-colors">Derry~Londonderry, UK</span>
                </a>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Socials</h2>
              <div className="space-y-3">
                <a href="https://www.linkedin.com/in/singhmillen/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center text-white text-sm font-bold">in</span>
                  <span className="text-sm group-hover:text-accent transition-colors">LinkedIn</span>
                </a>
                <a href="https://github.com/milnee" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 bg-[#333] rounded-lg flex items-center justify-center text-white text-xs">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </span>
                  <span className="text-sm group-hover:text-accent transition-colors">GitHub</span>
                </a>
                <a href="https://twitter.com/m1lles05" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-sm font-bold">𝕏</span>
                  <span className="text-sm group-hover:text-accent transition-colors">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-3 grid grid-cols-3 gap-4 auto-rows-min">
            <button
              onClick={() => setModal("education")}
              className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors text-left group"
            >
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">🎓 Education</h2>
              <p className="font-semibold">BSc Computer Science</p>
              <p className="text-sm text-muted">Ulster University</p>
              <p className="text-xs text-accent mt-1">2024 - 2028 • 63.5% (2:1)</p>
              <p className="text-xs text-muted mt-2 group-hover:text-accent transition-colors">Click for details →</p>
            </button>

            <button
              onClick={() => setModal("experience")}
              className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors text-left group"
            >
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">💼 Experience</h2>
              <p className="font-semibold">Grow Intern</p>
              <p className="text-sm text-muted">Anywho LTD</p>
              <p className="text-xs text-accent mt-1">July 2024 - July 2025</p>
              <p className="text-xs text-muted mt-2 group-hover:text-accent transition-colors">Click for details →</p>
            </button>

            <a
              href="https://github.com/milnee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-card-border rounded-2xl p-4 hover:border-accent transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-muted"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">Contributions</span>
              </div>
              <div className="grid grid-cols-13 gap-[3px]" style={{ gridTemplateColumns: 'repeat(13, 1fr)' }}>
                {Array.from({ length: 91 }).map((_, i) => {
                  const pattern = [
                    0,0,0,0,0,0,0,0,0,0,0,0,0,
                    0,0,0,0,0,0,0,0,2,2,0,0,0,
                    0,0,0,0,0,0,0,2,3,3,2,0,0,
                    0,0,0,0,0,0,0,2,1,3,0,0,0,
                    0,0,0,0,0,0,0,0,2,0,2,0,0,
                    0,0,0,0,0,0,0,0,0,1,3,0,0,
                    0,0,0,0,0,0,0,0,0,0,0,0,0,
                  ];
                  const level = pattern[i] || 0;
                  const colors = ["bg-[#1e293b]", "bg-[#166534]", "bg-[#22c55e]", "bg-[#4ade80]"];
                  return <div key={i} className={`aspect-square rounded-sm ${colors[level]}`} />;
                })}
              </div>
            </a>

            <div className="col-span-2 bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">⚡ Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Java", "HTML", "CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-background border border-card-border rounded-lg text-sm font-mono text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">🎯 Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Team Collaboration", "Git", "Agile", "Code Review"].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-background border border-card-border rounded text-xs font-mono text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-3 bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xs font-semibold text-muted uppercase tracking-wider">🚀 Projects</h2>
                <button onClick={() => setModal("projects")} className="text-sm text-accent hover:underline">
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button onClick={() => setModal("minecraft")} className="p-4 bg-background border border-card-border rounded-xl hover:border-accent transition-colors text-left group">
                  <p className="font-medium group-hover:text-accent transition-colors">Minecraft Plugins</p>
                  <p className="text-xs text-muted mt-1">Java, MySQL, MongoDB</p>
                  <p className="text-xs text-muted/70 mt-2">Custom server plugins for gameplay enhancement</p>
                </button>
                <button onClick={() => setModal("fivem")} className="p-4 bg-background border border-card-border rounded-xl hover:border-accent transition-colors text-left group">
                  <p className="font-medium group-hover:text-accent transition-colors">FiveM Scripts</p>
                  <p className="text-xs text-muted mt-1">Lua, QBCore Framework</p>
                  <p className="text-xs text-muted/70 mt-2">Server scripts with commands & permissions</p>
                </button>
                <button onClick={() => setModal("webdev")} className="p-4 bg-background border border-card-border rounded-xl hover:border-accent transition-colors text-left group">
                  <p className="font-medium group-hover:text-accent transition-colors">Web Development</p>
                  <p className="text-xs text-muted mt-1">HTML, CSS</p>
                  <p className="text-xs text-muted/70 mt-2">Responsive websites with interactive features</p>
                </button>
              </div>
            </div>

            <div className="col-span-2 bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors">
              <h2 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">💪 Strengths</h2>
              <div className="flex flex-wrap gap-2">
                {["Problem-solving", "Adaptability", "Proactive Learning", "Attention to Detail", "Teamwork"].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-background border border-card-border rounded-lg text-sm text-muted">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-2xl p-5 hover:border-accent transition-colors flex flex-col justify-center items-center text-center">
              <p className="text-xs text-muted">Seeking Placement</p>
              <p className="text-accent font-semibold">September 2026</p>
            </div>
          </div>
        </div>

      </main>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6" onClick={() => setModal(null)}>
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className={`relative bg-card border border-card-border rounded-2xl p-8 w-full animate-fade-in max-h-[80vh] overflow-auto ${modal === "projects" ? "max-w-4xl" : "max-w-lg"}`} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors text-xl">✕</button>

            {modal === "about" && (
              <>
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <div className="space-y-4 text-foreground/80">
                  <p>Second-year Computer Science student seeking a software engineering placement for September 2026.</p>
                  <p>Strong foundation in Java, SQL and backend systems through projects and startup experience. Motivated to contribute to real-world development teams while building professional engineering skills.</p>
                  <div className="pt-4 border-t border-card-border">
                    <h3 className="font-semibold mb-2">Interests</h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li><span className="text-accent">▹</span> Analytical & Testing - Troubleshooting and resolving issues</li>
                      <li><span className="text-accent">▹</span> Game Development - Custom Minecraft plugins</li>
                      <li><span className="text-accent">▹</span> Fitness - Discipline and goal-oriented mindset</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {modal === "education" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Ulster University</h3>
                    <p className="text-accent">BSc (Hons) Computer Science with DPP</p>
                    <p className="text-sm text-muted">Derry~Londonderry Campus • 2024 – 2028</p>
                    <p className="text-accent font-mono mt-2">Overall: 63.5% (2:1)</p>
                  </div>
                  <div className="border-t border-card-border pt-4">
                    <div className="flex justify-between items-center mb-2"><p className="font-medium">Year 2 Semester 1</p><span className="text-accent text-sm">Overall: 61%</span></div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted">User Experience</span><span className="text-accent">61%</span></div>
                      <div className="flex justify-between"><span className="text-muted">OOP</span><span className="text-accent">57%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Mobile App Dev</span><span className="text-accent">64%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Professional Dev</span><span className="text-yellow-500">Awaiting</span></div>
                    </div>
                  </div>
                  <div className="border-t border-card-border pt-4">
                    <p className="font-medium mb-2">Year 2 Semester 2</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted">Cloud Computing</span><span className="text-yellow-500">Awaiting</span></div>
                      <div className="flex justify-between"><span className="text-muted">Networks & Security</span><span className="text-yellow-500">Awaiting</span></div>
                      <div className="flex justify-between"><span className="text-muted">Algorithms & Data Structures</span><span className="text-yellow-500">Awaiting</span></div>
                    </div>
                  </div>
                  <div className="border-t border-card-border pt-4">
                    <div className="flex justify-between items-center mb-2"><p className="font-medium">Year 1 Results</p><span className="text-accent text-sm">Overall: 63.5%</span></div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted">Software Development I</span><span className="text-accent">65%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Systems Analysis</span><span className="text-accent">61%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Software Development II</span><span className="text-accent">72%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Database Systems</span><span className="text-accent">73%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Hardware & OS</span><span className="text-accent">67%</span></div>
                      <div className="flex justify-between"><span className="text-muted">Mathematics</span><span className="text-accent">43%</span></div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {modal === "experience" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">Grow Intern</h3>
                      <p className="text-accent">Anywho LTD</p>
                    </div>
                    <span className="text-sm text-muted">July 2024 - July 2025</span>
                  </div>
                  <ul className="space-y-3 text-muted">
                    <li className="flex gap-2"><span className="text-accent">▹</span>Worked in a startup environment contributing to product support and platform growth</li>
                    <li className="flex gap-2"><span className="text-accent">▹</span>Communicated directly with users through Discord, Slack and social platforms to gather feedback</li>
                    <li className="flex gap-2"><span className="text-accent">▹</span>Supported open-source projects by helping build customer websites and contributing creative assets</li>
                    <li className="flex gap-2"><span className="text-accent">▹</span>Developed teamwork, communication and adaptability skills</li>
                  </ul>
                </div>
              </>
            )}

            {modal === "projects" && (
              <>
                <h2 className="text-2xl font-bold mb-6">All Projects</h2>
                <div className="grid grid-cols-3 gap-8">
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-semibold text-lg mb-1">Minecraft Plugins</h3>
                    <p className="text-accent text-sm mb-3">Java, MySQL, MongoDB</p>
                    <ul className="space-y-2 text-muted">
                      <li><span className="text-accent">▹</span> Custom server plugins</li>
                      <li><span className="text-accent">▹</span> /speed, /setspawn, /giveaways</li>
                      <li><span className="text-accent">▹</span> MySQL & MongoDB integration</li>
                      <li><span className="text-accent">▹</span> Improved server performance</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-semibold text-lg mb-1">FiveM Scripts</h3>
                    <p className="text-accent text-sm mb-3">Lua, QBCore</p>
                    <ul className="space-y-2 text-muted">
                      <li><span className="text-accent">▹</span> QBCore framework scripts</li>
                      <li><span className="text-accent">▹</span> /maxammo, /armour commands</li>
                      <li><span className="text-accent">▹</span> Permission checks</li>
                      <li><span className="text-accent">▹</span> Event handling & client-side</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-accent pl-5">
                    <h3 className="font-semibold text-lg mb-1">Web Development</h3>
                    <p className="text-accent text-sm mb-3">HTML, CSS</p>
                    <ul className="space-y-2 text-muted">
                      <li><span className="text-accent">▹</span> Responsive websites</li>
                      <li><span className="text-accent">▹</span> Navigation, forms, buttons</li>
                      <li><span className="text-accent">▹</span> CSS styling & layouts</li>
                      <li><span className="text-accent">▹</span> Improved UX design</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {modal === "minecraft" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Minecraft Plugin Development</h2>
                <p className="text-accent mb-4">Java, MySQL, MongoDB</p>
                <div className="space-y-4 text-foreground/80">
                  <p>Designed and developed custom server plugins using Java to enhance gameplay and server management for online Minecraft communities.</p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li><span className="text-accent">▹</span> Implemented commands such as /speed, /setspawn, /giveaways with configuration support via config.yml</li>
                      <li><span className="text-accent">▹</span> Integrated MySQL and MongoDB databases for persistent data storage</li>
                      <li><span className="text-accent">▹</span> Improved server stability, performance and player experience through structured code and testing</li>
                      <li><span className="text-accent">▹</span> Delivered plugins improving gameplay functionality and server management</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {modal === "fivem" && (
              <>
                <h2 className="text-2xl font-bold mb-4">FiveM Script Development</h2>
                <p className="text-accent mb-4">Lua, QBCore Framework</p>
                <div className="space-y-4 text-foreground/80">
                  <p>Developed Lua scripts using QBCore framework for FiveM servers, creating custom commands and gameplay features.</p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li><span className="text-accent">▹</span> /maxammo - refills ammunition based on player state</li>
                      <li><span className="text-accent">▹</span> /armour - grants armour to players with permission checks</li>
                      <li><span className="text-accent">▹</span> /maxarmour - grants max armour with logic to check current armour and support for targeting other players</li>
                      <li><span className="text-accent">▹</span> Gained hands-on experience with event handling and client-side interaction in QBCore framework</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {modal === "webdev" && (
              <>
                <h2 className="text-2xl font-bold mb-4">Web Development</h2>
                <p className="text-accent mb-4">HTML, CSS</p>
                <div className="space-y-4 text-foreground/80">
                  <p>Built responsive websites during A-Levels coursework, focusing on user experience and modern design principles.</p>
                  <div>
                    <h3 className="font-semibold mb-2">Key Features</h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li><span className="text-accent">▹</span> Built responsive websites using HTML and CSS</li>
                      <li><span className="text-accent">▹</span> Added interactive features: navigation menus, forms, buttons, media embedding</li>
                      <li><span className="text-accent">▹</span> Styled layouts with CSS for colours, fonts, and consistency</li>
                      <li><span className="text-accent">▹</span> Improved UX with easy navigation and clickable links</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
