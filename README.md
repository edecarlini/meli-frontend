
# Meli Frontend

Este es el frontend del proyecto **Meli**, construido con [Next.js](https://nextjs.org/) y diseñado para ser ejecutado en un contenedor Docker, junto con una API que también se orquesta mediante Docker Compose.

## Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Variables de Entorno](#variables-de-entorno)
- [Ejecución en Desarrollo](#ejecución-en-desarrollo)
- [Ejecución con Docker Compose](#ejecución-con-docker-compose)
- [Construcción y Ejecución en Producción](#construcción-y-ejecución-en-producción)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos Previos

- [Node.js](https://nodejs.org/) v20.5.1 o superior
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/edecarlini/meli-frontend.git
   cd meli-frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Variables de Entorno

Este proyecto utiliza un archivo `.env.local` para configurar las variables de entorno necesarias. El archivo `.env.local` no está incluido en el repositorio debido a la configuración de `.gitignore`.

### Ejemplo de `.env.local`

Asegúrate de crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## Ejecución en Desarrollo

Para iniciar el entorno de desarrollo, simplemente ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Ejecución con Docker Compose

El proyecto está configurado para ejecutarse utilizando Docker Compose, que orquesta tanto el frontend como la API.

### Paso 1: Construir y Ejecutar con Docker Compose

1. Asegúrate de que tu archivo `.env.local` esté correctamente configurado.
2. Luego, construye y levanta los servicios definidos en `docker-compose.yml`:

   ```bash
   docker-compose up --build
   ```

Esto levantará tanto el frontend como la API. La aplicación estará disponible en `http://localhost:3002` y la API en `http://localhost:3001`.

### Paso 2: Detener los servicios

Para detener los servicios, puedes usar:

```bash
docker-compose down
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
