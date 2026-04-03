import { useState } from "react";
import logo from "@/assets/kill-switch-logo.png";
import { ThemeProvider } from "@/components/kill-switch/ThemeProvider";
import { Masthead } from "@/components/kill-switch/Masthead";
import { PostCard, CardStack } from "@/components/kill-switch/PostCard";
import { TagList } from "@/components/kill-switch/TagList";
import { CodeBlock, Kw, Str, Fn, Cm } from "@/components/kill-switch/CodeBlock";
import { Callout } from "@/components/kill-switch/Callout";
import { PullQuote } from "@/components/kill-switch/PullQuote";
import { KsFooter } from "@/components/kill-switch/KsFooter";
import { PostHeader } from "@/components/kill-switch/PostHeader";
import { KsFigure } from "@/components/kill-switch/KsFigure";
import { PostNav } from "@/components/kill-switch/PostNav";
import { KsPagination } from "@/components/kill-switch/KsPagination";
import { KsButton } from "@/components/kill-switch/KsButton";
import { KsTable, TdMono, TdChip } from "@/components/kill-switch/KsTable";

const NAV_LINKS = [
  { label: "Switches", href: "#" },
  { label: "Tags", href: "#" },
  { label: "About", href: "#" },
];

const FOOTER_LINKS = [
  { label: "RSS", href: "#" },
  { label: "Tags", href: "#" },
  { label: "About", href: "#" },
];

const TAGS = [
  { label: "Design" },
  { label: "Infrastructure" },
  { label: "Opinion" },
  { label: "Code" },
  { label: "Privacy" },
  { label: "Travel" },
];

const Index = () => {
  const [page, setPage] = useState(1);

  return (
    <ThemeProvider>
      <div className="ks-page">
        {/* Page Header */}
        <div className="ks-page-header">
          <img src={logo} alt="Kill Switch logo" style={{ height: 80, width: 80, borderRadius: 10, objectFit: "cover", marginBottom: 16 }} />
          <span className="ks-badge">Design System Showcase</span>
          <h1 className="ks-page-title">Kill <em>Switch</em></h1>
          <p className="ks-page-subtitle">// sage &amp; forest · sharp edges · serif + mono system</p>
        </div>

        {/* 01 — Masthead */}
        <section className="ks-section">
          <div className="ks-section-label">01 // Masthead</div>
          <h2 className="ks-section-heading">Header &amp; Mode Toggle</h2>
          <Masthead links={NAV_LINKS} />
        </section>

        {/* 02 — Typography */}
        <section className="ks-section">
          <div className="ks-section-label">02 // Typography</div>
          <h2 className="ks-section-heading">Type Scale &amp; Specimens</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: "var(--content-width)" }}>
            <div className="ks-display" style={{ marginBottom: 32 }}>Kill the <em>noise.</em></div>
            <h1 className="ks-h1" style={{ marginBottom: 24 }}>Ideas that flip your perspective</h1>
            <h2 className="ks-h2" style={{ marginBottom: 20 }}>The tyranny of twelve-column grids</h2>
            <h3 className="ks-h3" style={{ marginBottom: 16 }}>Why I stopped using frameworks</h3>
            <h4 className="ks-h4" style={{ marginBottom: 16 }}>A note on readability</h4>
            <p className="ks-body" style={{ marginBottom: 16, maxWidth: "var(--content-width)" }}>
              The best interfaces disappear. They don't demand attention — they channel it.
              Every pixel that isn't serving the reader is working against them.
            </p>
            <p className="ks-caption" style={{ marginBottom: 12 }}>2026.02.20 // 8 min read</p>
            <p className="ks-code">const toggle = () =&gt; setDark(!dark);</p>
          </div>
        </section>

        {/* 03 — Spacing */}
        <section className="ks-section">
          <div className="ks-section-label">03 // Spacing</div>
          <h2 className="ks-section-heading">4px Base Unit Scale</h2>
          <div className="ks-spacing-demo">
            {[
              ["xs", "4px"], ["sm", "8px"], ["md", "16px"], ["lg", "24px"],
              ["xl", "40px"], ["2xl", "64px"], ["3xl", "96px"],
            ].map(([name, size]) => (
              <div key={name} className="ks-spacing-bar">
                <div className="ks-spacing-block" style={{ width: size }} />
                <span className="ks-spacing-label">{name} — {size}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 04 — Post Cards */}
        <section className="ks-section">
          <div className="ks-section-label">04 // Switches</div>
          <h2 className="ks-section-heading">Index Page Entries</h2>
          <CardStack>
            <PostCard
              date={"02.18\n2026"}
              tags={["Design", "Code"]}
              title="The tyranny of twelve-column grids"
              excerpt="We've been building websites on twelve columns for fifteen years. It made sense when responsive design was new. It doesn't anymore."
            />
            <PostCard
              date={"02.12\n2026"}
              tags={["Infrastructure", "Privacy", "Code"]}
              title="Self-hosting isn't about saving money"
              excerpt="Every time I spin up a new service on my NAS I'm reminded that the point was never the price. It's the quiet satisfaction of owning your stack."
            />
            <PostCard
              date={"02.04\n2026"}
              tags={["Opinion"]}
              title="Dark mode is a design decision, not a feature"
              excerpt="If your dark mode is an inverted afterthought, you've told your users exactly how much you care about half their experience."
            />
          </CardStack>
        </section>

        {/* 05 — Tags */}
        <section className="ks-section">
          <div className="ks-section-label">05 // Tags</div>
          <h2 className="ks-section-heading">Flat Taxonomy</h2>
          <TagList tags={TAGS} />
        </section>

        {/* 06 — Code Block */}
        <section className="ks-section">
          <div className="ks-section-label">06 // Code Block</div>
          <h2 className="ks-section-heading">Syntax Highlighting</h2>
          <CodeBlock language="JavaScript">
            <Cm>{"// Reads stored preference, falls back to OS setting"}</Cm>{"\n"}
            <Kw>const</Kw> <Fn>useTheme</Fn> = () =&gt; {"{"}{"\n"}
            {"  "}<Kw>const</Kw> stored = localStorage.<Fn>getItem</Fn>(<Str>'theme'</Str>);{"\n"}
            {"  "}<Kw>const</Kw> preferred = window.<Fn>matchMedia</Fn>({"\n"}
            {"    "}<Str>'(prefers-color-scheme: dark)'</Str>{"\n"}
            {"  "}).matches ? <Str>'dark'</Str> : <Str>'light'</Str>;{"\n"}
            {"\n"}
            {"  "}<Kw>return</Kw> stored || preferred;{"\n"}
            {"}"};
          </CodeBlock>
        </section>

        {/* 07 — Callouts */}
        <section className="ks-section">
          <div className="ks-section-label">07 // Callouts</div>
          <h2 className="ks-section-heading">Aside Blocks</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Callout variant="note">
              <p>The content column is sacred. Nothing structural should interrupt the reading flow while scrolling.</p>
            </Callout>
            <Callout variant="warning">
              <p>Color is never the sole indicator of meaning. Always pair signal colors with text labels or icons.</p>
            </Callout>
            <Callout variant="tip">
              <p>Use <code>prefers-reduced-motion</code> to respect user preferences before adding any animation.</p>
            </Callout>
          </div>
        </section>

        {/* 08 — Pull Quote */}
        <section className="ks-section">
          <div className="ks-section-label">08 // Pull Quote</div>
          <h2 className="ks-section-heading">Italic Serif Voice</h2>
          <PullQuote
            quote="The best interfaces disappear. They don't demand your attention — they channel it."
            cite={'— "Kill the noise," 2026.02'}
          />
        </section>

        {/* 09 — Post Header */}
        <section className="ks-section">
          <div className="ks-section-label">09 // Post Header</div>
          <h2 className="ks-section-heading">Single Switch — Hero Area</h2>
          <PostHeader
            tag="Design"
            title="The tyranny of twelve-column grids"
            subtitle="We've been building websites on twelve columns for fifteen years. It made sense when responsive design was new. It doesn't anymore."
            meta={
              <>
                <time dateTime="2026-02-18">2026.02.18</time>
                <span className="ks-post-header-meta-sep">//</span>
                <span>8 min read</span>
                <span className="ks-post-header-meta-sep">//</span>
                <a className="ks-tag" href="#" style={{ margin: 0 }}>Design</a>
                <a className="ks-tag" href="#" style={{ margin: 0 }}>Opinion</a>
              </>
            }
          />
        </section>

        {/* 10 — Figure */}
        <section className="ks-section">
          <div className="ks-section-label">10 // Figure</div>
          <h2 className="ks-section-heading">Image &amp; Caption</h2>
          <KsFigure
            caption={<><strong>Fig. 1 —</strong> A twelve-column layout applied to a 320px viewport. The grid isn't wrong; the assumption is.</>}
          />
        </section>

        {/* 11 — Prose */}
        <section className="ks-section">
          <div className="ks-section-label">11 // Prose</div>
          <h2 className="ks-section-heading">Article Body Styles</h2>
          <article className="ks-prose">
            <h2>The case against default everything</h2>
            <p>Most websites look identical not because designers lack taste, but because they inherit defaults without questioning them. The browser reset, the twelve-column grid, the same three sans-serif fonts — these choices compound into a visual monoculture.</p>
            <h3>What defaults are actually for</h3>
            <p>Defaults exist to handle the <strong>unconfigured case</strong>. They're a starting point, not a destination. When a framework ships with Inter at 16px on a white background, it's saying: "this works for everyone." Which also means it's <em>optimised for no one.</em></p>
            <h4>A practical approach</h4>
            <p>Start by auditing what you've inherited. List every default you haven't consciously chosen. Then ask: does this serve <a href="#">the reader</a>, or does it just avoid a decision?</p>
            <ul>
              <li>Question every inherited default before shipping</li>
              <li>Measure reading comfort, not just visual aesthetics</li>
              <li>Prefer contrast that serves hierarchy, not decoration</li>
            </ul>
            <ol>
              <li>Audit your current type stack and measure line length</li>
              <li>Test your color palette for WCAG AA compliance</li>
              <li>Reduce animation to what earns its place</li>
            </ol>
            <blockquote>
              <p>Defaults are the path of least resistance. They're also the path of least distinction.</p>
            </blockquote>
            <p>The goal isn't to be different for difference's sake. It's to make every decision consciously. The <code>font-size</code> you choose, the leading, the measure — these aren't decorative choices. They're the infrastructure of thought.</p>
            <hr />
            <p>Next time you open a new project, resist the first impulse. The default is waiting. So is something better.</p>
          </article>
        </section>

        {/* 12 — Post Navigation */}
        <section className="ks-section">
          <div className="ks-section-label">12 // Post Navigation</div>
          <h2 className="ks-section-heading">Prev / Next Switch</h2>
          <PostNav
            prev={{ title: "Self-hosting isn't about saving money" }}
            next={{ title: "Dark mode is a design decision, not a feature" }}
          />
        </section>

        {/* 13 — Pagination */}
        <section className="ks-section">
          <div className="ks-section-label">13 // Pagination</div>
          <h2 className="ks-section-heading">Index Page — Page Control</h2>
          <KsPagination current={page} total={8} onPageChange={setPage} />
        </section>

        {/* 14 — Inline Elements */}
        <section className="ks-section">
          <div className="ks-section-label">14 // Inline Elements</div>
          <h2 className="ks-section-heading">Keyboard, Mark, Abbr &amp; More</h2>
          <div className="ks-body" style={{ maxWidth: "var(--content-width)", lineHeight: 2.2 }}>
            <p>Press <kbd>⌘</kbd> + <kbd>K</kbd> to open the command palette.</p>
            <p style={{ marginTop: "0.5em" }}>This paragraph contains a <mark>highlighted passage</mark> for editorial emphasis.</p>
            <p style={{ marginTop: "0.5em" }}>The <abbr title="World Wide Web Consortium">W3C</abbr> publishes accessibility guidelines for the web.</p>
            <p style={{ marginTop: "0.5em" }}>This feature is <s>deprecated</s> and will be removed in v3.</p>
            <p style={{ marginTop: "0.5em" }}>Water is H<sub>2</sub>O. E = mc<sup>2</sup> is Einstein's mass–energy equivalence.</p>
          </div>
        </section>

        {/* 15 — Table */}
        <section className="ks-section">
          <div className="ks-section-label">15 // Tables</div>
          <h2 className="ks-section-heading">Data &amp; Comparison</h2>
          <KsTable>
            <thead>
              <tr>
                <th>Font</th>
                <th>Category</th>
                <th>Use</th>
                <th>Weight range</th>
                <th>Variable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Fraunces</strong></td>
                <td>Optical serif</td>
                <td>Display, H1, H2</td>
                <td><TdMono>100–900</TdMono></td>
                <td><TdChip>Yes</TdChip></td>
              </tr>
              <tr>
                <td><strong>Lora</strong></td>
                <td>Reading serif</td>
                <td>Body prose</td>
                <td><TdMono>400–700</TdMono></td>
                <td><TdChip>Yes</TdChip></td>
              </tr>
              <tr>
                <td><strong>Space Mono</strong></td>
                <td>Monospace</td>
                <td>UI labels, captions</td>
                <td><TdMono>400, 700</TdMono></td>
                <td><TdChip dim>No</TdChip></td>
              </tr>
              <tr>
                <td><strong>JetBrains Mono</strong></td>
                <td>Code monospace</td>
                <td>Code blocks, inline code</td>
                <td><TdMono>100–800</TdMono></td>
                <td><TdChip>Yes</TdChip></td>
              </tr>
            </tbody>
          </KsTable>
        </section>

        {/* 16 — Buttons */}
        <section className="ks-section">
          <div className="ks-section-label">16 // Buttons</div>
          <h2 className="ks-section-heading">Call-to-action Variants</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <KsButton variant="primary">Subscribe</KsButton>
            <KsButton variant="secondary">Read more</KsButton>
            <KsButton as="a" href="#" variant="ghost">View all switches</KsButton>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginTop: 16 }}>
            <KsButton variant="primary" size="sm">Subscribe</KsButton>
            <KsButton variant="secondary" size="sm">Read more</KsButton>
            <KsButton as="a" href="#" variant="ghost" size="sm">View all switches</KsButton>
          </div>
        </section>

        {/* Footer */}
        <section className="ks-section">
          <div className="ks-section-label">17 // Footer</div>
          <h2 className="ks-section-heading">Minimal, Structured</h2>
          <KsFooter links={FOOTER_LINKS} />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Index;
