import logo from "./logo.svg";
import logo_full from "./logo_full.svg";
import logo_full_dark from "./logo_full_dark.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import theme_icon from "./theme_icon.svg";
import send_icon from "./send_icon.svg";
import stop_icon from "./stop_icon.svg";
import mountain_img from "./mountain_img.jpg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import bin_icon from "./bin_icon.svg";
import logout_icon from "./logout_icon.svg";
import diamond_icon from "./diamond_icon.svg";
import gallery_icon from "./gallery_icon.svg";

import ai_image1 from "./ai_image1.jpg";
import ai_image2 from "./ai_image2.jpg";
import ai_image3 from "./ai_image3.jpg";
import ai_image4 from "./ai_image4.jpg";
import ai_image5 from "./ai_image5.jpg";
import ai_image6 from "./ai_image6.jpg";
import ai_image7 from "./ai_image7.jpg";
import ai_image8 from "./ai_image8.jpg";
import ai_image9 from "./ai_image9.jpg";
import ai_image10 from "./ai_image10.jpg";
import ai_image11 from "./ai_image11.jpg";


export const assets = {
    logo,
    logo_full,
    search_icon,
    user_icon,
    theme_icon,
    send_icon,
    stop_icon,
    mountain_img,
    menu_icon,
    close_icon,
    bin_icon,
    logout_icon,
    logo_full_dark,
    diamond_icon,
    gallery_icon
};

export const dummyUserData = {
    "_id": "689c6deed410acddc0d95a0e",
    "name": "DarielDev",
    "email": "admin@example.com",
    "password": "$2b$10$VESVdPDjL5LF.KCU6jKyqeXNSLASAAfpR2kkIJExtMO.PJvZJAudy",
    "credits": 200,
}

// copy for server controllers
export const dummyPlans = [
    {
        _id: "basic",
        name: "Basic",
        price: 10,
        credits: 100,
        features: ['100 text generations', '50 image generations', 'Standard support', 'Access to basic models']
    },
    {
        _id: "pro",
        name: "Pro",
        price: 20,
        credits: 500,
        features: ['500 text generations', '200 image generations', 'Priority support', 'Access to pro models', 'Faster response time']
    },
    {
        _id: "premium",
        name: "Premium",
        price: 30,
        credits: 1000,
        features: ['1000 text generations', '500 image generations', '24/7 VIP support', 'Access to premium models', 'Dedicated account manager']
    }
];


export const dummyChats = [
    {
        "_id": "689de4bbaa932dc3a8ef6cd7",
        "userId": "689c6deed410acddc0d95a0e",
        "userName": "GreatStack",
        "name": "Nuevo Chat",
        "messages": [
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "un niño corriendo sobre el agua",
                "timestamp": 1755178179612,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image11,
                "timestamp": 1755178194747,
            }
        ],
        "createdAt": "2025-08-14T13:29:31.398Z",
        "updatedAt": "2025-08-14T13:29:54.753Z",
    },
    {
        "_id": "689ccb9016a922dd57a23fce",
        "userId": "689c6deed410acddc0d95a0e",
        "name": "Nuevo Chat",
        "messages": [
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "hola ",
                "timestamp": 1755106415912,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "assistant",
                "content": "¡Hola! 😊 ¿Cómo puedo ayudarte hoy?",
                "timestamp": 1755106420723,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "Genera una imagen de un niño hablando con otros",
                "timestamp": 1755107475040,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image1,
                "timestamp": 1755107486680,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "tengo que crear una imagen realista de la selva con animales salvajes, así que crea un prompt para ello",
                "timestamp": 1755158982894,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "assistant",
                "content": "Aquí hay un prompt detallado y estructurado para generar una escena de selva altamente realista con animales salvajes:  \n\n---  \n\n**Prompt:**  \n*\"Paisaje de selva fotorrealista ultra realista e hiper detallado repleto de vida silvestre. El escenario es una selva tropical densa y vibrante bañada por la luz moteada del sol que se filtra a través del dosel espeso. Árboles antiguos imponentes con intrincados sistemas de raíces, helechos verdes exuberantes, enredaderas y flores exóticas crean un ambiente rico e inmersivo. Un arroyo cristalino serpentea por la escena, reflejando los alrededores exuberantes.  \n\nVida silvestre en su hábitat natural:  \n- Un majestuoso tigre de Bengala se agacha sobre una roca cubierta de musgo cerca del agua, con los músculos tensos mientras observa a su presa.  \n- Una familia de elefantes se mueve suavemente por la maleza, liderada por una gran matriarca con una postura protectora.  \n- Guacamayos y loros coloridos se posan en ramas altas, sus plumas brillantes contrastan con la vegetación.  \n- Un jaguar sigiloso acecha en las sombras, sus ojos dorados penetrantes.  \n- Una tropa de monos juguetones se balancea de las enredaderas, sus expresiones animadas y dinámicas.  \n- Un perezoso de movimiento lento se aferra a una rama de árbol, mezclándose con el follaje.  \n\nElementos atmosféricos:  \n- Una niebla suave persiste cerca del suelo del bosque, agregando profundidad.  \n- Libélulas y mariposas revolotean cerca del borde del agua.  \n- Cantos de pájaros distantes y hojas susurrantes crean un ambiente inmersivo.  \n\nComposición cinematográfica con iluminación equilibrada: rayos de sol que atraviesan el dosel en un efecto de rayo divino. La profundidad de campo se enfoca nítidamente en el tigre mientras difumina suavemente el fondo para mayor realismo. Fotografiado con un estilo DSLR de alta resolución para máximo detalle, calidad 8K. Ultra HD, fotografía de vida silvestre estilo National Geographic.\"*  \n\n---  \n\n### **Consejos para ajustar el Prompt:**  \n- **Para una escena más serena:** Elimina los depredadores (como el jaguar) y concéntrate en animales de pastoreo como ciervos o tapires.  \n- **Para un tono más oscuro y misterioso:** Agrega lluvia, iluminación tormentosa o un escenario al atardecer.  \n- **Para más biodiversidad:** Incluye reptiles (serpientes, ranas) o insectos (escarabajos, arañas).  \n\n¿Te gustaría alguna modificación para un estado de ánimo o estilo artístico específico (por ejemplo, pictórico, cinematográfico o inspirado en fantasía)?",
                "timestamp": 1755158995829,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "Paisaje de selva fotorrealista ultra realista e hiper detallado repleto de vida silvestre. El escenario es una selva tropical densa y vibrante bañada por la luz moteada del sol que se filtra a través del dosel espeso. Árboles antiguos imponentes con intrincados sistemas de raíces, helechos verdes exuberantes, enredaderas y flores exóticas crean un ambiente rico e inmersivo. Un arroyo cristalino serpentea por la escena, reflejando los alrededores exuberantes. Vida silvestre en su hábitat natural: Un majestuoso tigre de Bengala se agacha sobre una roca cubierta de musgo cerca del agua, con los músculos tensos mientras observa a su presa. Una familia de elefantes se mueve suavemente por la maleza, liderada por una gran matriarca con una postura protectora. Guacamayos y loros coloridos se posan en ramas altas, sus plumas brillantes contrastan con la vegetación. Un jaguar sigiloso acecha en las sombras, sus ojos dorados penetrantes. Una tropa de monos juguetones se balancea de las enredaderas, sus expresiones animadas y dinámicas. Un perezoso de movimiento lento se aferra a una rama de árbol, mezclándose con el follaje. Elementos atmosféricos: Una niebla suave persiste cerca del suelo del bosque, agregando profundidad. Libélulas y mariposas revolotean cerca del borde del agua. Cantos de pájaros distantes y hojas susurrantes crean un ambiente inmersivo. Composición cinematográfica con iluminación equilibrada: rayos de sol que atraviesan el dosel en un efecto de rayo divino. La profundidad de campo se enfoca nítidamente en el tigre mientras difumina suavemente el fondo para mayor realismo. Fotografiado con un estilo DSLR de alta resolución para máximo detalle, calidad 8K. Ultra HD, fotografía de vida silvestre estilo National Geographic.",
                "timestamp": 1755159013677,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image2,
                "timestamp": 1755159034238,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "principales tecnologías web para aprender en 2025",
                "timestamp": 1755159074583,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "assistant",
                "content": "Aquí están las principales tecnologías web para aprender en 2025 para mantenerse competitivo en la industria:\n\n### **Desarrollo Frontend**  \n1. **React.js** – Todavía la biblioteca frontend dominante con una creciente adopción de **React Server Components (RSC)** y **Next.js**.  \n2. **Next.js (v14+)** – Meta-framework para React que habilita **renderizado del lado del servidor (SSR)**, generación de sitios estáticos (SSG) y edge computing.  \n3. **Vue.js (v3.x + Vite)** – Ecosistema en crecimiento con mejor DX y rendimiento.  \n4. **Svelte & SvelteKit** – Aumentando en popularidad debido a su reactividad en tiempo de compilación y salida ligera.  \n5. **WebAssembly (WASM)** – Habilita rendimiento casi nativo para aplicaciones web (usado en Figma, Photoshop, etc.).  \n\n### **Desarrollo Backend**  \n6. **Node.js (v20+)** – Todavía liderando en desarrollo backend basado en JavaScript.  \n7. **Deno & Bun** – Alternativas más rápidas a Node.js con APIs modernas (Bun está ganando tracción por velocidad).  \n8. **Python (FastAPI, Django, Flask)** – Python sigue fuerte para backend y aplicaciones impulsadas por IA.  \n9. **Rust (Actix, Axum, Rocket)** – Desarrollo backend de alto rendimiento con garantías de seguridad.  \n10. **Go (Golang)** – Valorado para sistemas backend escalables (usado por Uber, Twitch, Docker).  \n\n### **Full-Stack & Cloud-Native**  \n11. **GraphQL (Apollo, Relay)** – Alternativa a REST para consultas API eficientes.  \n12. **Serverless (AWS Lambda, Vercel, Cloudflare Workers)** – Cambio hacia edge computing y arquitecturas serverless.  \n13. **Web3 & Blockchain (Ethereum, Solana, Web3.js, Ethers.js)** – Emergente en aplicaciones descentralizadas (dApps).  \n14. **Microservicios & Kubernetes** – Esencial para aplicaciones cloud-native escalables.  \n\n### **CSS & Estilos**  \n15. **Tailwind CSS** – Framework CSS utility-first que domina el desarrollo de UI moderno.  \n16. **CSS Modules & CSS-in-JS (Emotion, Styled Components)** – Estilos con alcance para aplicaciones basadas en componentes.  \n17. **PostCSS & CSS Moderno (Flexbox, Grid, Container Queries)** – Técnicas de estilo avanzadas.  \n\n### **Base de Datos & Gestión de Estado**  \n18. **PostgreSQL, MongoDB, & Edge Databases (PlanetScale, Neon, Supabase)** – Tendencias SQL + NoSQL.  \n19. **Prisma, DrizzleORM** – ORMs modernos para TypeScript/Node.js.  \n20. **GraphQL Client State (RTK Query, Apollo Client, URQL)** – Gestión eficiente de datos.  \n\n### **Tecnologías Emergentes y A Prueba de Futuro**  \n21. **AI & LLM Integration (OpenAI, LangChain)** – Aplicaciones web impulsadas por IA (plugins ChatGPT, copilotos).  \n22. **Progressive Web Apps (PWAs + Web APIs)** – Aplicaciones web instalables y offline-first.  \n23. **WebRTC & Real-Time (Socket.io, Liveblocks, PartyKit)** – Características de colaboración en tiempo real.  \n24. **3D & WebGL (Three.js, Babylon.js, React Three Fiber)** – Experiencias web 3D interactivas.  \n25. **Motion UI & Animation (GSAP, Framer Motion)** – Animaciones web avanzadas.  \n\n### **Herramientas Imprescindibles & DevOps**  \n- **Git, CI/CD (GitHub Actions, Vercel, Netlify)**  \n- **Docker & Kubernetes** (para contenedorización)  \n- **Testing (Vitest, Playwright, Cypress, Jest)**  \n\n### **¿Por qué aprender estas en 2025?**  \n- **Velocidad & Eficiencia**: Herramientas como **Bun, Rust, y WASM** optimizan el rendimiento.  \n- **Integración de IA**: La IA se está integrando en el desarrollo web a un ritmo rápido.  \n- **Edge Computing & Serverless**: Los proveedores cloud están impulsando implementaciones serverless/edge.  \n- **Dominio Full-Stack**: Frameworks como **Next.js, SvelteKit, y Remix** difuminan las líneas frontend/backend.  \n\nConcéntrate en **React + Next.js, Rust/Go para backend, TypeScript, e integraciones de IA** para máximas oportunidades en 2025. 🚀  \n\n¿Te gustaría una hoja de ruta personalizada basada en tus objetivos?",
                "timestamp": 1755159100513,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "escribe un código para una aplicación express básica",
                "timestamp": 1755159129597,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "assistant",
                "content": "# Aplicación Express.js Básica\n\nAquí hay una configuración simple de aplicación Express.js con algunas rutas básicas:\n\n```javascript\n// Importar módulos requeridos\nconst express = require('express');\nconst path = require('path');\n\n// Crear una aplicación Express\nconst app = express();\nconst PORT = process.env.PORT || 3000;\n\n// Middleware\napp.use(express.json()); // Para analizar application/json\napp.use(express.urlencoded({ extended: true })); // Para analizar application/x-www-form-urlencoded\n\n// Servir archivos estáticos desde el directorio 'public'\napp.use(express.static(path.join(__dirname, 'public')));\n\n// Rutas básicas\napp.get('/', (req, res) => {\n  res.send('¡Bienvenido a la Aplicación Express!');\n});\n\napp.get('/acerca', (req, res) => {\n  res.send('Página Acerca de');\n});\n\n// Ejemplo de ruta con parámetros\napp.get('/usuario/:id', (req, res) => {\n  res.send(`ID de Usuario: ${req.params.id}`);\n});\n\n// Ejemplo de ruta POST\napp.post('/api/datos', (req, res) => {\n  console.log(req.body);\n  res.json({ mensaje: 'Datos recibidos', datos: req.body });\n});\n\n// Manejador de error 404\napp.use((req, res) => {\n  res.status(404).send('404 - No Encontrado');\n});\n\n// Middleware de manejo de errores\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('¡Algo salió mal!');\n});\n\n// Iniciar el servidor\napp.listen(PORT, () => {\n  console.log(`Servidor corriendo en http://localhost:${PORT}`);\n});\n```\n\n## Instrucciones de Configuración\n\n1. Asegúrate de tener Node.js instalado\n2. Crea un nuevo directorio para tu proyecto\n3. Inicializa un nuevo proyecto Node.js:\n   ```bash\n   npm init -y\n   ```\n4. Instala Express:\n   ```bash\n   npm install express\n   ```\n5. Guarda el código anterior en un archivo llamado `app.js`\n6. Crea un directorio `public` si quieres servir archivos estáticos\n7. Inicia el servidor:\n   ```bash\n   node app.js\n   ```\n\n## Características\n- Rutas básicas ('/', '/acerca', '/usuario/:id')\n- Ruta POST para manejar datos de formularios\n- Servicio de archivos estáticos\n- Manejo de errores\n- Análisis de cuerpo JSON\n\nPuedes expandir esta configuración básica agregando más rutas, conectándote a una base de datos o agregando middleware según sea necesario.",
                "timestamp": 1755159145294,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "genera una imagen de una configuración de pc gaming en una habitación en estilo realista",
                "timestamp": 1755159264109,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image3,
                "timestamp": 1755159273878,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "qué es web3",
                "timestamp": 1755159666525,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "assistant",
                "content": "**Web3** (o **Web 3.0**) se refiere a la próxima evolución de internet, centrada en la **descentralización, tecnología blockchain y propiedad de datos del usuario**. Su objetivo es transferir el control de las grandes empresas tecnológicas a los usuarios mediante protocolos criptográficos y redes peer-to-peer.\n\n### **Características Clave de Web3:**\n1. **Descentralización**  \n   - Ninguna entidad única controla internet; en su lugar, opera en redes distribuidas (como blockchains o sistemas peer-to-peer).\n   - Contrasta con Web2 (el internet actual), dominado por plataformas centralizadas como Google, Facebook y Amazon.\n\n2. **Blockchain y Criptomonedas**  \n   - Usa blockchain (por ejemplo, Ethereum, Solana) para transacciones sin confianza y contratos inteligentes.\n   - Las criptomonedas (por ejemplo, Bitcoin, ETH) permiten la transferencia de valor sin intermediarios.\n\n3. **Propiedad del Usuario e Identidad Digital**  \n   - Los usuarios poseen sus datos (a través de soluciones de **identidad descentralizada**) y los monetizan directamente.\n   - Los NFTs (Tokens No Fungibles) permiten la propiedad de activos digitales (arte, música, tierra virtual).\n\n4. **Interoperabilidad y Apertura**  \n   - Las aplicaciones (dApps) pueden interactuar sin problemas a través de diferentes blockchains.\n   - Los protocolos de código abierto reducen la dependencia de plataformas propietarias.\n\n5. **Incentivos Tokenizados**  \n   - Los usuarios y desarrolladores son recompensados con tokens (por ejemplo, tokens de gobernanza, recompensas por staking).\n\n### **Ejemplos de Tecnologías Web3:**\n- **DeFi (Finanzas Descentralizadas)** – Servicios financieros peer-to-peer (por ejemplo, Uniswap, Aave).  \n- **NFTs y Propiedad Digital** – CryptoPunks, OpenSea y juegos blockchain.  \n- **DAOs (Organizaciones Autónomas Descentralizadas)** – Entidades gobernadas por la comunidad (por ejemplo, MakerDAO).  \n- **Almacenamiento Descentralizado** – IPFS, Filecoin (vs. almacenamiento en la nube centralizado como AWS).  \n\n### **Web3 vs. Web2 vs. Web1**\n- **Web1 (1990s-2000s):** Sitios web estáticos de solo lectura (por ejemplo, primeras páginas HTML).  \n- **Web2 (2000s-presente):** Interactivo, redes sociales, computación en la nube (Facebook, YouTube).  \n- **Web3 (emergente):** Descentralizado, propiedad del usuario, economías basadas en tokens.  \n\n### **Desafíos de Web3**\n- **Escalabilidad:** Las blockchains luchan con velocidad y costo (por ejemplo, tarifas de gas de Ethereum).  \n- **Regulación:** Los gobiernos todavía están descubriendo las leyes de criptomonedas.  \n- **Experiencia de Usuario:** Complejo para usuarios no técnicos.  \n\n¿Te gustaría profundizar en algún aspecto específico? 🚀",
                "timestamp": 1755159683847,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "Genera una imagen de naturaleza con árboles en estilo realista",
                "timestamp": 1755160243315,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image4,
                "timestamp": 1755160254161,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "una configuración de pc gaming",
                "timestamp": 1755163772103,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image6,
                "timestamp": 1755163783470,
            },
            {
                "isImage": false,
                "isPublished": false,
                "role": "user",
                "content": "una configuración de streaming con micrófono y accesorios",
                "timestamp": 1755163990514,
            },
            {
                "isImage": true,
                "isPublished": true,
                "role": "assistant",
                "content": ai_image7,
                "timestamp": 1755164001928,
            }

        ],
        "createdAt": "2025-08-13T17:29:52.421Z",
        "updatedAt": "2025-08-14T09:39:19.046Z",
        "userName": "GreatStack"
    },
    {
        "_id": Date.now(),
        "userId": "gs123456789",
        "name": "Nuevo Chat",
        "userName": "GreatStack",
        "messages": [],
        "createdAt": "2025-08-13T17:29:52.421Z",
        "updatedAt": "2025-08-14T09:39:19.046Z",
    }
]

export const dummyPublishedImages = [
    {
        "imageUrl": ai_image11,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image10,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image9,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image8,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image7,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image6,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image5,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image4,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image3,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image2,
        "userName": "GreatStack"
    },
    {
        "imageUrl": ai_image1,
        "userName": "GreatStack"
    }
]