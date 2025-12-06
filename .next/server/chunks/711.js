exports.id=711,exports.ids=[711],exports.modules={352:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m,metadata:()=>d,viewport:()=>u});var r=a(7413),i=a(6162),o=a(3346),s=a.n(o);function n(e){if(!e)return new Date().toISOString();let t=new Date(e);return(/^\d{4}$/.test(e)&&t.setMonth(0,1),isNaN(t.getTime()))?new Date().toISOString():t.toISOString()}function l(e,t){let a=process.env.NEXT_PUBLIC_BASE_URL||"https://marwanchkiriba.dev";if("project"===e)return{"@context":"https://schema.org","@type":"CreativeWork",name:t.name,description:t.description,author:{"@type":"Person",name:"Marwan Chkiriba"},datePublished:n(t.year),image:t.image?[t.image]:[`${a}/og-image.png`],url:`${a}/projects/${t.slug}`,keywords:t.tech?t.tech.join(", "):""};if("blog"===e)return{"@context":"https://schema.org","@type":"BlogPosting",headline:t.title,description:t.excerpt,author:{"@type":"Person",name:"Marwan Chkiriba",url:a},publisher:{"@type":"Organization",name:"Marwan Chkiriba",logo:{"@type":"ImageObject",url:`${a}/og-image.png`}},datePublished:n(t.date),dateModified:n(t.date),url:`${a}/blog/${t.slug}`,keywords:t.tags?t.tags.join(", "):"",mainEntityOfPage:{"@type":"WebPage","@id":`${a}/blog/${t.slug}`},image:t.image?[t.image]:[`${a}/og-image.png`]};if("blog-list"===e){let e=t.posts.map((e,t)=>({"@type":"ListItem",position:t+1,url:`${a}/blog/${e.slug}`,name:e.title,description:e.excerpt}));return{"@context":"https://schema.org","@type":"CollectionPage",name:"Blog - Marwan Chkiriba",description:"Notes sur mes projets, ma stack et ma recherche de stage.",url:`${a}/blog`,mainEntity:{"@type":"ItemList",itemListElement:e}}}return"person"===e?{"@context":"https://schema.org","@type":"Person",name:t.name||"Marwan Chkiriba",url:t.url||a,sameAs:t.sameAs||["https://github.com/marwanchkiriba"],jobTitle:t.jobTitle||"D\xe9veloppeur full stack",description:t.description||"D\xe9veloppeur full stack (PHP, JavaScript/Node.js, React, SQL) en 3e ann\xe9e de BUT Informatique.",email:t.email||"marwanchkiriba9@gmail.com",image:t.image||`${a}/og-image.png`}:"website"===e?{"@context":"https://schema.org","@type":"WebSite",name:t.name||"Portfolio Marwan Chkiriba",url:t.url||a,description:t.description||"Portfolio de Marwan Chkiriba, d\xe9veloppeur full stack (BUT Informatique).",author:{"@type":"Person",name:t.authorName||"Marwan Chkiriba"},potentialAction:{"@type":"SearchAction",target:`${a}/search?q={search_term_string}`,"query-input":"required name=search_term_string"}}:void 0}a(2704);var c=a(3066);let d={title:"Marwan Chkiriba — D\xe9veloppeur Full Stack (BUT Informatique)",description:"\xc9tudiant en 3e ann\xe9e de BUT Informatique \xe0 l’IUT de Villetaneuse. D\xe9veloppement full stack (PHP, JavaScript/Node.js, React, SQL) et disponible pour un stage de 4 \xe0 6 mois d\xe8s mars 2026.",keywords:["D\xe9veloppeur full stack","BUT Informatique","Stage d\xe9veloppement","Node.js","PHP","React","PostgreSQL","MySQL","Java","JavaScript"],authors:[{name:"Marwan Chkiriba",url:"https://marwanchkiriba.dev"}],creator:"Marwan Chkiriba",publisher:"Marwan Chkiriba",formatDetection:{email:!0,address:!1,telephone:!1},metadataBase:new URL("https://marwanchkiriba.dev"),alternates:{canonical:"https://marwanchkiriba.dev"},openGraph:{type:"website",locale:"fr_FR",url:"https://marwanchkiriba.dev",siteName:"Portfolio Marwan Chkiriba",title:"Marwan Chkiriba — D\xe9veloppeur Full Stack (BUT Informatique)",description:"Portfolio de Marwan Chkiriba, d\xe9veloppeur full stack (PHP, JavaScript/Node.js, React, SQL) en 3e ann\xe9e de BUT Informatique.",images:[{url:"/og-image.png",width:1200,height:630,alt:"Portfolio Marwan Chkiriba"}]},twitter:{card:"summary_large_image",title:"Marwan Chkiriba — D\xe9veloppeur Full Stack (BUT Informatique)",description:"D\xe9veloppement full stack (PHP, JavaScript/Node.js, React, SQL) et recherche de stage d\xe8s mars 2026.",images:["/og-image.png"]},robots:{index:!0,follow:!0,googleBot:{index:!0,follow:!0,"max-snippet":-1,"max-image-preview":"large","max-video-preview":-1}}},u={width:"device-width",initialScale:1,maximumScale:5,userScalable:!0,themeColor:[{media:"(prefers-color-scheme: light)",color:"#ffffff"},{media:"(prefers-color-scheme: dark)",color:"#0a0a0a"}]};function m({children:e}){let t=l("person",{name:"Marwan Chkiriba",url:"https://marwanchkiriba.dev",email:"marwanchkiriba9@gmail.com",sameAs:["https://github.com/marwanchkiriba","https://marwanchkiriba.dev"]}),a=l("website",{name:"Portfolio Marwan Chkiriba",url:"https://marwanchkiriba.dev",description:"Portfolio de Marwan Chkiriba, d\xe9veloppeur full stack (BUT Informatique).",authorName:"Marwan Chkiriba"});return(0,r.jsx)("html",{lang:"fr",className:`${s().variable} dark`,children:(0,r.jsxs)("body",{className:"font-sans antialiased",children:[(0,r.jsx)("link",{rel:"preconnect",href:"https://pagead2.googlesyndication.com"}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(a)}}),(0,r.jsx)(i.default,{src:`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`,strategy:"lazyOnload"}),(0,r.jsx)(i.default,{id:"google-analytics",strategy:"lazyOnload",children:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}),(0,r.jsx)(c.ThemeProvider,{attribute:"class",enableSystem:!0,defaultTheme:"dark",children:e})]})})}},942:(e,t,a)=>{Promise.resolve().then(a.bind(a,3066)),Promise.resolve().then(a.t.bind(a,7429,23))},2183:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6346,23)),Promise.resolve().then(a.t.bind(a,7924,23)),Promise.resolve().then(a.t.bind(a,5656,23)),Promise.resolve().then(a.t.bind(a,99,23)),Promise.resolve().then(a.t.bind(a,8243,23)),Promise.resolve().then(a.t.bind(a,8827,23)),Promise.resolve().then(a.t.bind(a,2763,23)),Promise.resolve().then(a.t.bind(a,7173,23))},2704:()=>{},2892:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>o});var r=a(687);a(3210);var i=a(218);function o({children:e,...t}){return(0,r.jsx)(i.N,{...t,children:e})}},3066:(e,t,a)=>{"use strict";a.d(t,{ThemeProvider:()=>r});let r=(0,a(2907).registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\marwa\\Documents\\portfolio1\\components\\theme-provider.tsx","ThemeProvider")},3990:(e,t,a)=>{Promise.resolve().then(a.bind(a,2892)),Promise.resolve().then(a.t.bind(a,9167,23))},4994:(e,t,a)=>{"use strict";a.d(t,{A5:()=>i,dt:()=>r});let r=[{slug:"saas-gestion-parc-auto",name:"SaaS — Gestion de parc automobile",description:"Application SaaS full-stack pour centraliser la gestion d’un parc automobile : v\xe9hicules, suivi et organisation.",longDescription:`
**Contexte**
- Application SaaS pour centraliser la gestion d'un parc automobile (v\xe9hicules, suivi et organisation).
- Travail en TypeScript avec une architecture front/back s\xe9par\xe9e pour faciliter le d\xe9ploiement.

**Stack et r\xf4le**
- Back-end TypeScript avec Prisma et PostgreSQL pour la mod\xe9lisation et l'acc\xe8s aux donn\xe9es.
- Interface web en TypeScript/React pour suivre les v\xe9hicules et leurs op\xe9rations.
- Versionning du code sur GitHub et documentation des mod\xe8les.

**R\xe9sultats**
- Base pr\xeate pour la cr\xe9ation d'alertes (maintenance, \xe9ch\xe9ances) et l'export des donn\xe9es.
- Architecture claire qui permet d'ajouter facilement de nouvelles fonctionnalit\xe9s.
`,year:"2025",tech:["TypeScript","Prisma","PostgreSQL","React","Node.js"],link:"https://github.com/marwanchkiriba/Saas_auto",github:"https://github.com/marwanchkiriba/Saas_auto",featured:!0},{slug:"appchat-temps-reel",name:"Application de chat en temps r\xe9el",description:"Messagerie temps r\xe9el avec PHP/WebSockets et interface HTML/CSS/JS reli\xe9e \xe0 MySQL.",longDescription:`
**Objectif**
- Concevoir une messagerie simple permettant aux utilisateurs d'\xe9changer en temps r\xe9el.
- G\xe9rer l'authentification, les salons et l'affichage instantan\xe9 des messages.

**Stack et r\xf4le**
- Back-end PHP avec WebSockets pour la communication temps r\xe9el.
- Base MySQL (administr\xe9e via PHPMyAdmin) pour stocker les messages et comptes utilisateurs.
- Front-end HTML, CSS et JavaScript pour l'UI de chat et les notifications live.

**Apprentissages**
- Compr\xe9hension des WebSockets (gestion des connexions et diffusion des messages).
- Structuration d'une base MySQL pour des flux temps r\xe9el.
- Mise en place de tests manuels et de sc\xe9narios d'erreur (d\xe9connexions, rafra\xeechissement de page).
`,year:"2025",tech:["PHP","WebSockets","MySQL","HTML","CSS","JavaScript"],link:"https://github.com/marwanchkiriba/AppChat",github:"https://github.com/marwanchkiriba/AppChat",featured:!0}],i=[{slug:"stage-fullstack-2026",title:"Ce que je cherche pour mon stage full stack (mars 2026)",excerpt:"Stage de 4 \xe0 6 mois pour consolider mes comp\xe9tences front/back, API, tests et DevOps.",content:`
# Stage full stack de mars 2026

Je pr\xe9pare ma 3e ann\xe9e de BUT Informatique \xe0 l'IUT de Villetaneuse et je cherche un stage de 4 \xe0 6 mois \xe0 partir de mars 2026.

## Ce que je veux pratiquer
- D\xe9veloppement web ou mobile (front et back).
- Conception d'API, bases de donn\xe9es et tests automatis\xe9s.
- Bonne hygi\xe8ne de code (revues, CI/CD, documentation).

## Ce que j'apporte
- Solide base en PHP, Java, JavaScript/Node.js, SQL et React/Tailwind.
- Exp\xe9riences concr\xe8tes sur un SaaS de gestion de parc auto et une app de chat temps r\xe9el.
- Envie de travailler en \xe9quipe, de documenter et de livrer r\xe9guli\xe8rement.
`,date:"2025-10-01",readTime:"4 min",tags:["stage","full stack","BUT Informatique"],featured:!0},{slug:"stack-outils-but-info",title:"Stack et outils que j’utilise au quotidien",excerpt:"Panorama rapide de ma stack : PHP, Java, JavaScript/Node.js, React, SQL, Docker et outils de collaboration.",content:`
# Stack et outils

Voici les technos que j'utilise le plus pendant mes projets et mon BUT Informatique.

## Langages
- PHP, Java, JavaScript, Python.
- SQL (MySQL, PostgreSQL) pour la mod\xe9lisation et les requ\xeates.

## Front
- React, Vue.js et Tailwind CSS selon les besoins.
- Int\xe9gration HTML/CSS soign\xe9e pour des interfaces r\xe9actives.

## Back
- Node.js/Express pour les API.
- WebSockets pour le temps r\xe9el.
- Tests unitaires avec JUnit c\xf4t\xe9 Java.

## Base de donn\xe9es et outils
- MySQL, PostgreSQL, Redis, MongoDB selon les cas d'usage.
- Docker, Git/GitHub, VirtualBox, Wireshark, suite Office/365 et TeamViewer pour la collaboration.
`,date:"2025-09-15",readTime:"5 min",tags:["stack","outils","BUT Informatique"],featured:!0}]},5231:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6444,23)),Promise.resolve().then(a.t.bind(a,6042,23)),Promise.resolve().then(a.t.bind(a,8170,23)),Promise.resolve().then(a.t.bind(a,9477,23)),Promise.resolve().then(a.t.bind(a,9345,23)),Promise.resolve().then(a.t.bind(a,2089,23)),Promise.resolve().then(a.t.bind(a,6577,23)),Promise.resolve().then(a.t.bind(a,1307,23))},9563:(e,t,a)=>{"use strict";a.d(t,{U:()=>s});var r=a(687),i=a(3210),o=a(218);function s(){let{theme:e,setTheme:t,resolvedTheme:a}=(0,o.D)(),[s,n]=(0,i.useState)(!1);if(!s)return null;let l="dark"===a;return(0,r.jsx)("button",{onClick:()=>t(l?"light":"dark"),className:"group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300","aria-label":"Toggle theme",children:l?(0,r.jsx)("svg",{className:"w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 1.414zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})}):(0,r.jsx)("svg",{className:"w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300",fill:"currentColor",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})})})}}};