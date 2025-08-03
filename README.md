# Generador de Planetas de Ciencia Ficción 🪐

Una aplicación web interactiva creada con **React**, **TypeScript** y **Material-UI (MUI)** para generar aleatoriamente nombres, tipos y descripciones de planetas ficticios. El proyecto está diseñado para ser visualmente atractivo, fácil de usar y está soportado por pipelines de CI/CD que aseguran la calidad del código de forma automatizada.

## Características Principales

-   **Interfaz Moderna**: Construido con React y Vite para una experiencia de usuario rápida y fluida.
-   **Diseño Profesional**: Utiliza componentes de Material-UI para una apariencia limpia y profesional, con un tema oscuro por defecto para una ambientación cósmica.
-   **Generación Aleatoria**: Cada clic en el botón produce un nuevo planeta con un nombre, tipo y descripción únicos.
-   **Calidad de Código Asegurada**: El código es verificado automáticamente a través de pipelines de CI/CD que ejecutan tareas de linting, pruebas y construcción.
-   **Pruebas Unitarias**: Configurado con Vitest y React Testing Library para garantizar la fiabilidad de los componentes.

## Tecnologías Utilizadas

-   **Frontend**: React, TypeScript, Vite
-   **Librería de UI**: Material-UI (MUI)
-   **Pruebas**: Vitest, React Testing Library
-   **Calidad de Código**: ESLint
-   **CI/CD**: GitHub Actions

## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/LuzuJ/Generador-De-Planetas.git
    cd generador-de-planetas
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    cd src
    npm run dev
    ```
    Abre tu navegador en la URL que te indique la terminal (usualmente `http://localhost:5173`).

## Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

-   `npm run dev`: Inicia la aplicación en modo de desarrollo con recarga en vivo.
-   `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
-   `npm run lint`: Analiza el código fuente con ESLint para encontrar errores y problemas de estilo.
-   `npm run test`: Ejecuta las pruebas automatizadas con Vitest.

## Pipelines de CI/CD

Este proyecto utiliza **GitHub Actions** para la Integración Continua. El sistema está configurado con tres flujos de trabajo independientes que se activan en cada `push` o `pull request` a la rama `main`:

-   **`lint.yml`**: Verifica la calidad y el formato del código.
-   **`test.yml`**: Ejecuta todas las pruebas unitarias para asegurar que no haya regresiones.
-   **`build.yml`**: Compila el proyecto para producción para garantizar que es desplegable.

## Autores
* Jonathan Luzuriaga  
* Joel Ximenez  
* Carlos Villarreal