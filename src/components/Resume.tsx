import { Mail, Phone, MapPin, Linkedin, Printer, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/jennifer-weaver.jpg";

const boards = [
  { org: "Promise2Live.org", role: "Board Member" },
  { org: "Utah Women's Leadership Project", role: "Public Relations Committee" },
  { org: "Utah State Bar", role: "AI Committee" },
  { org: "Utah State Bar", role: "Innovation in Law Practice Committee" },
];

const competencies = [
  "Strategic & Crisis Communications",
  "Public Relations",
  "Executive Leadership",
  "Social Media Strategy",
  "Writing & Copy Editing",
  "Content Creation",
  "Digital Marketing",
  "Corporate Communications",
  "Google Analytics",
  "Google Search Ads",
  "Stakeholder Journey Mapping",
  "AI Certified",
  "Video Landing Pages",
  "Project Management",
  "Media Relations",
  "Traditional Advertising",
];

type Role = {
  org: string;
  title: string;
  dates: string;
  summary?: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    org: "Utah State Bar",
    title: "Communications Director",
    dates: "May 2024 – Present",
    summary:
      "Lead strategic planning and execution of public relations, media relations, and overall communications, including the bi-monthly eBulletin and contributions to the Utah Bar Journal. Leverage Adobe Creative Suite to create compelling visual content advancing the Bar's mission to improve the lives of the people of Utah.",
    bullets: [
      "Created the brand style guide and the writing style guide for the Bar.",
      "Photography and video recording of all Bar events and supported organizations.",
      "Train Section Law leaders on marketing and communications.",
      "Create and manage all social media accounts: FB/IG, X, LinkedIn, YouTube, and BlueSky.",
      "Serve on the Innovation in Law Practice Committee, AI Standing Committee, Government Relations Committee, and the Utah Bar Journal.",
      "Website administration including blogs, webpages, and graphics.",
      "Wrote and redesigned the eBulletin distributed to 27K legal professionals twice a month.",
      "Communications planning and strategy for the Bar, including legislative liaison.",
      "Designed and wrote a 28-page Year in Review report for FY2023-24 and FY2024-25.",
      "Delivered Journalism 101 training for the Court Reporting program for Utah journalists.",
      "Project management and marketing for exclusive Bar partners: Decisis and ALPS.",
      "Design flyers, programs, and HTML coding for ClearVantage communications.",
    ],
  },
  {
    org: "State of Utah — Department of Government Operations",
    title: "Communications Director",
    dates: "October 2022 – September 2023",
    summary:
      "Conceived and implemented a comprehensive communications strategy, elevating internal and external awareness, and streamlined communication processes through standard operating procedures adopted across departments.",
    bullets: [
      "Addressed public information issues and fielded government records requests, per Utah Code 63G-2.",
      "Forged alliances with media outlets, political figures, and governmental bodies while skillfully navigating public engagements.",
      "Served on boards and committees focused on organizational change, leading a communications team representative of all nine divisions.",
      "Championed the agency's mission and collaborated with legal teams to ensure legislative adherence and proactive education.",
      "Administered the agency's website and intranet, increasing engagement and user satisfaction.",
      "Curated multimedia content reaching 1.5K recipients with a 65% open rate while managing the organization's media assets.",
      "Authored comprehensive reports and managed social media accounts, achieving 35% follower growth and 50% engagement increase.",
    ],
  },
  {
    org: "Cholangiocarcinoma Foundation",
    title: "Director of Communications",
    dates: "June 2021 – October 2022",
    summary:
      "Steered and fortified the Foundation's brand across all platforms and media. Implemented data-driven strategies and managed a 100% compliant communications budget while leading a team of communication, marketing, and design professionals.",
    bullets: [
      "Oversaw a full-funnel content calendar and SEO-focused strategy with backlinking and targeted keywords for SERP ranking; produced monthly articles and press releases.",
      "Drove a multi-channel communications strategy across web, social, and PR — including a weekly podcast, Cholangio Heroes.",
      "Curated print, video, audio, and digital materials supporting fundraising, advocacy, and research.",
      "Cultivated relationships with media, influencers, community leaders, and key stakeholders in the cholangiocarcinoma community.",
      "Orchestrated the Foundation's presence at industry events, medical meetings, and conferences.",
    ],
  },
  {
    org: "KUTV 2News",
    title: "Executive Producer of Digital News",
    dates: "November 2017 – April 2021",
    summary:
      "Fostered strategic content syndication partnerships with West Region stations of Sinclair Broadcast Group, CBS, and AP. Led and mentored a team of six in producing top-tier digital and broadcast content.",
    bullets: [
      "Spearheaded a digital content strategy for KUTV.com and 2News app, achieving a 271% surge in page and screen views over three years.",
      "Copy-edited and authored up to 30 online stories daily and produced three shows for Amazon Alexa.",
      "Commanded KUTV's social media across Facebook, Twitter, Instagram, YouTube, Reddit, Pinterest, and LinkedIn — 150% growth in three years.",
      "Curated and disseminated the Daily News Alert email via SecondStreet, engaging ~100K subscribers.",
      "Produced the Take2 podcast averaging 100+ downloads per episode.",
    ],
  },
  {
    org: "ForeverGreen International",
    title: "Communications & Marketing Manager",
    dates: "May 2017 – November 2017",
    bullets: [
      "Authored corporate press releases and crafted engaging video scripts for company updates.",
      "Managed email marketing using Campaigner and Campaign Monitor; led daily social content creation.",
      "Conducted virtual training sessions and led high-quality live streaming events.",
      "Led branding initiatives, product copy, and compliant packaging and labeling.",
    ],
  },
  {
    org: "BlendFresh",
    title: "Communications & Marketing Manager",
    dates: "April 2016 – March 2017",
    bullets: [
      "Delivered video, graphics, and print using Adobe Premiere, InDesign, Illustrator, and Photoshop.",
      "Managed WordPress site with SEO via Yoast; ran MailChimp email campaigns.",
      "Produced whiteboard animations using RawShorts and VideoScribe.",
      "Led event marketing at TechMunch, Everything Food Conference, and FitCon.",
    ],
  },
  {
    org: "Nu Skin Enterprises, Inc.",
    title: "Associate Manager, Corporate Communications",
    dates: "May 2014 – January 2016",
    bullets: [
      "Led PR initiatives: FAQ sheets, PIPs, media outreach, press releases, and CSR quarterly and annual reports.",
      "Administered website using Adobe CQ4 and managed crisis communications and social channels.",
      "Streamlined content production via editorial calendar using Shoutlet and Adobe Suite.",
      "Submitted award applications championing the company and its products.",
      "Orchestrated major events including the global convention, Sub-for-Santa, and an annual day of service.",
    ],
  },
];

const earlier = [
  { org: "KSTU FOX 13", title: "Assignment Manager", dates: "Nov 2011 – Apr 2014" },
  { org: "The Spectrum & Cedar City Daily News", title: "Bureau Chief", dates: "Oct 2001 – 2011" },
];

const certifications = [
  "University of Utah Professional Education — Digital Marketing Science (Google Analytics, Google Search Ads, HubSpot Email Marketing)",
  "AI Learning Company — Certified AI Specialist",
  "World Tech Academy — WordPress",
  "Salt Lake Community College — Website Development & Design",
  "Tech-Moms Graduate + AI Chat Bot Creation",
];

const Resume = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Floating actions */}
      <div className="no-print fixed right-6 top-6 z-50 hidden gap-2 sm:flex">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/80 px-4 py-2 text-xs font-medium text-foreground backdrop-blur transition-colors hover:bg-foreground hover:text-background"
          aria-label="Print resume"
        >
          <Printer className="h-3.5 w-3.5" />
          Print / Save PDF
        </button>
      </div>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-24">
        {/* Header */}
        <header className="relative">
          <div className="grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">Curriculum Vitæ — 2026</p>
              <h1 className="display text-5xl font-light leading-[0.95] sm:text-7xl md:text-8xl">
                Jennifer K.
                <br />
                <span className="italic font-normal">Weaver</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="relative mx-auto aspect-[4/5] w-48 overflow-hidden rounded-sm shadow-[var(--shadow-page)] sm:w-56 md:w-full md:max-w-[220px]">
                <img
                  src={portrait}
                  alt="Portrait of Jennifer K. Weaver"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> South Jordan, UT
            </span>
            <a href="tel:3853293558" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Phone className="h-3.5 w-3.5" /> 385.329.3558
            </a>
            <a href="mailto:jnnfrwvr@yahoo.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
              <Mail className="h-3.5 w-3.5" /> jnnfrwvr@yahoo.com
            </a>
            <a
              href="https://www.linkedin.com/in/jennifer-weaver-mpa"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="h-3.5 w-3.5" /> linkedin.com/in/jennifer-weaver-mpa
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          <div className="rule mt-12" />
        </header>

        {/* Tagline / Summary */}
        <section className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Discipline</p>
            <h2 className="display mt-3 text-2xl font-normal leading-tight">
              Strategic
              <br />
              Communications
              <span className="text-accent"> &</span>
              <br />
              Digital Marketing
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed text-foreground/85 sm:text-lg">
              Senior strategic communications and marketing leader with a background in both the public and private
              sectors. Recognized for expertise in <span className="marker-highlight">multimedia content development</span>{" "}
              spanning print, television, and digital platforms. Award-winning journalist adept at leveraging platforms
              from social media to email marketing to maximize outreach. Proficient in web development and design with a
              keen eye for translating brand values across channels — including Google Search Ads. Proven track record in
              leading communications strategies, media relations, and driving brand awareness. Certified in{" "}
              <span className="marker-highlight">AI and Digital Marketing Science.</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Technical proficiency in Adobe Creative Suite, Google Workspace, Office 365, Canva, WordPress, Asana, and
              Slack.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mt-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Section 01</p>
              <h3 className="display mt-3 text-3xl font-normal">Core Competencies</h3>
            </div>
            <div className="md:col-span-8">
              <ul className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-foreground/15 px-3.5 py-1.5 text-xs text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="rule mt-20" />

        {/* Career */}
        <section className="mt-20">
          <div className="mb-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Section 02</p>
              <h3 className="display mt-3 text-3xl font-normal">
                Career
                <br />
                <span className="italic">Highlights</span>
              </h3>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm text-muted-foreground">
                Two decades of leading communications, journalism, and digital marketing across government, nonprofit,
                broadcast, and corporate organizations.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {roles.map((role, i) => (
              <article key={role.org} className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="display text-5xl font-light text-foreground/20">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{role.dates}</p>
                  <h4 className="display mt-3 text-xl font-normal leading-snug text-foreground">
                    {role.org}
                  </h4>
                  <p className="mt-1 text-sm italic text-accent">{role.title}</p>
                </div>
                <div className="md:col-span-8">
                  {role.summary && (
                    <p className="mb-5 text-base leading-relaxed text-foreground/85">{role.summary}</p>
                  )}
                  <ul className="space-y-2.5">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                        <span className="mt-2 inline-block h-px w-3 flex-shrink-0 bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Earlier */}
          <div className="mt-16 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Earlier Experience</p>
            </div>
            <div className="md:col-span-8 space-y-3">
              {earlier.map((e) => (
                <div key={e.org} className="flex flex-wrap items-baseline justify-between gap-2 border-b border-foreground/10 pb-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.org}</p>
                    <p className="text-sm italic text-muted-foreground">{e.title}</p>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="rule mt-20" />

        {/* Education */}
        <section className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Section 03</p>
            <h3 className="display mt-3 text-3xl font-normal">Education</h3>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div>
              <p className="display text-xl">University of Phoenix</p>
              <p className="text-sm text-muted-foreground">
                Master of Management, Public Administration <span className="text-accent">— Honors, 3.88 GPA</span>
              </p>
            </div>
            <div>
              <p className="display text-xl">University of Utah</p>
              <p className="text-sm text-muted-foreground">
                B.S., Human Development & Family Studies
              </p>
            </div>
          </div>
        </section>

        <div className="rule mt-20" />

        {/* Certifications */}
        <section className="mt-20 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Section 04</p>
            <h3 className="display mt-3 text-3xl font-normal">Certifications</h3>
          </div>
          <div className="md:col-span-8">
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                  <span className="mt-2 inline-block h-px w-3 flex-shrink-0 bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/15 pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Jennifer K. Weaver</p>
          <p className="italic">Last updated 2026</p>
        </footer>
      </article>
    </main>
  );
};

export default Resume;
