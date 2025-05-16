# Preentrega 1 Backend - Palma Juan Diego

## Descripción

Este proyecto es una API de ejemplo con generación de datos mockeados, manejo de entornos, y logger con Winston.

---

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPO>
   cd preentrega1-backend3-PalmaJuanDiego
   ```

2. Instala dependencias:
   ```
   npm install
   ```

3. Configura las variables de entorno:
   - Edita los archivos en `src/config/environments/` (`development.env` y `production.env`) según tu entorno y base de datos MongoDB.

---

## Uso

### Iniciar en modo desarrollo

```
NODE_ENV=development npm start
```

### Iniciar en modo producción

```
NODE_ENV=production npm start
```

---

## Funcionalidades pedidas

### 1. Mocking de usuarios y productos

- **Ruta:** `POST /api/mocks/:users/:products`
- **Descripción:** Genera la cantidad de usuarios y productos indicados y los guarda en MongoDB.
- **Ejemplo:**  
  ```
  POST http://localhost:8080/api/mocks/10/20
  ```
  Esto crea 10 usuarios y 20 productos mockeados.

### 2. Logger con Winston

- Los logs HTTP y de error se guardan en consola y en el archivo `errors.log`.

### 3. Entornos

- El proyecto soporta entornos `development` y `production` usando variables de entorno.

---

## Notas

- Asegúrate de tener MongoDB corriendo.
- Puedes modificar los modelos de usuario y producto en `src/models/`.

---
