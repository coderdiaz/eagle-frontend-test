## MiAguila Frontend Test

### Ciclo inicial
Como primer instancia dentro del desarrollo del proyecto, he decidido utilizar Next.js como herramienta de trabajo, ya que me permite agregarle velocidad al desarrollo del proyecto. Además de eso, le he añadido la potencia de TalwindCSS para un prototipado mucho más ágil y TypeScript para tener un menor porcentaje de error al momento de desarrollar el producto.

### Como iniciar
1. Instala las dependencias.
```bash
yarn install
```

2. Inicia el proyecto en modo de desarrollo.
```bash
yarn dev
```

3. Visita el sitio en `https//localhost:3000`.

### Hook de inactividad
He creado un hook en React que me permite gestionar de forma individual el status de inactividad de un usuario, con el cuál puede determinar las acciones a ejecutar una vez concluido el tiempo de inactividad.

Este escucha los distintos eventos existentes en el browser, que nos permiten saber si el usuario se encuentra activo frente a su computadora, y por lo tanto, agregarle un aspecto de seguridad en el manejo de las sesiones.

### Como se compone
Este proyecto se compone de páginas, componentes y hooks, algunos propios, otros externos para agilizar el proyecto. 

Sin embargo, en cada una de las etapas de desarrollo he evaluado la mejor forma de solucionarlo de manera parcial.

Por ejemplo, para tema de las tareas, hay algo que se puede mejorar en el tema de la gestión del componente y su estado, sin embargo, de acuerdo a la manera en la que la prueba se desarrolla es una implementación suficiente.

También, se agrego abstracción a través de cada uno de los componentes para aislar funcionalidad y objetivo en concreto brindando un mejor mantenimiento al proyecto.

### Sesiones
Las sesiones, se están manejando a través de dos líbrerias `js-cookie` y `nookies`, las cuáles me permiten gestionar la sesión a través de Next.

Puedes usuar cualquier correo y contraseña para acceder al panel de control.