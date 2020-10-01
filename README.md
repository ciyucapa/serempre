## Prueba técnica para Serempre

#### Dependencias

```
"@apollo/client": "^3.2.1",
"babel-plugin-styled-components": "^1.11.1",
"formik": "^2.1.6",
"gatsby": "^2.24.66",
"gatsby-plugin-apollo": "^3.0.1",
"gatsby-plugin-styled-components": "^3.3.12",
"gatsby-source-strapi": "0.0.12",
"google-map-react": "^2.1.6",
"prop-types": "^15.7.2",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-redux": "^7.2.1",
"redux": "^4.0.5",
"redux-actions": "^2.6.5",
"redux-persist": "^5.10.0",
"redux-thunk": "^2.3.0",
"styled-components": "^5.2.0",
"yup": "^0.29.3"
```

#### Instalación del framework Gatsby

```
npm install -g gatsby-cli
```

### Strapi como servicio

Strapi es una plataforma que presta servicios de almacenamiento bajo GraphQl.

Para efectos de prueba, puede generar un live demostration de 15 minutos, en los cuales podra hacer CRUD a una coleccion.

#### NOTA

Puede probar la aplicación sin strapi, pero todo lo que haga se guardara solo en el almacenamiento local.
### Pasos con Strapi

Una vez obtenida la cuenta de strapi o el live demostration, debe crear una coleccion de nombre "tasks".

La cual debe contener los siguientes campos:

title: string
description: string
email: email
position: json

Una vez hecho esto, debe modificar los roles y permisos, para que la coleccion tasks pueda ser ejecuta por cualquier aplicación (CRUD).

Asegurese de colocar la url de strapi en los siguientes archivos.

/src/config/env.js

```
const config = {
    googleMapKey: 'KEYGOOGLEMAPS......',
    strapiUrl: 'https://api-xxxx.strapidemo.com', // <--- aquí
};

export default config;
```

/gatsby-config.js

```
module.exports = {
  plugins: [
    ...,
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: `https://api-xxxx.strapidemo.com/graphql` // <--- aquí
      }
    },
    ...,
  ],
}
```

#### Instalación

```
npm i
```

#### Correr servidor en desarrollo

```
gatsby develop
```

#### Configuración

Este proyecto puede consumir los servicios de una api GraphQl, para mayor comodidad, puede utilizar los servicios de strapi.

Recuerde agregar el archivo de configuración src/config/env.js

```
const config = {
    googleMapKey: '',
    strapiUrl: '',
};

export default config;
```

#### Pruebas unitarias

Este proyecto posee las pruebas para la función reductora de las tareas y algunos components comunes.

```
npm run test
```
