<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Gestión documental
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es un conjunto de normas y prácticas técnicas que buscan el correcto manejo de la información de una empresa, esto se puede lograr revisando, analizando y almacenando documentación física y electrónica, con el fin de optimizar los procesos y ahorrar tiempo, espacio y gastos importantes.
    
    p.mt-4 Por esto, se hace necesaria la correcta gestión en todo lo concerniente al manejo de información, que mediante metodologías especializadas se pueden mejorar los procesos administrativos, la correcta conservación, la aplicación de estrategias para la custodia de documentos, los cumplimientos regulatorios y la organización de los archivos de forma jerárquica y categorizada. 
    p <strong>El proceso de gestión documental permite gestionar correctamente todos los documentos electrónicos y físicos, aportando acciones de mejora continua en la organización, tales como:</strong>
    .row.justify-content-center
      .col-lg-6.mt-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="5%" y="65%" numero="1")
            p <strong>Reducción de gastos:</strong> los costes se reducen en un gran porcentaje, gracias a la correcta categorización de los documentos y la automatización de las tareas manuales.
          .tarjeta.color-acento-botones.p-3(x="23%" y="42%" numero="2")
            p <strong>Automatización:</strong>  mediante la automatización de los procesos se hace más fácil la gestión, migración y conversión de la información, además se ahorra tiempo en la búsqueda o recuperación de documentos, permitiendo mayor control y eficacia en los procesos.
          .tarjeta.color-acento-botones.p-3(x="23%" y="10%" numero="3")
            p <strong>Orden y ahorro de tiempo:</strong>    cuando los documentos se clasifican y ordenan estratégicamente pueden ser bien conservados y debidamente centralizados, esto permite estandarizar los procesos, contribuyendo en el ahorro de los tiempos en los procesos y mayor orden. 
          .tarjeta.color-acento-botones.p-3(x="62%" y="40%" numero="4")
            p <strong>Uso eficiente de los recursos:</strong>    con la aplicación del sistema de gestión documental se reducen en un 50% los costes de copia, utilización de papel, fotocopiado, impresión, además de otros elementos relacionados.
          .tarjeta.color-acento-botones.p-3(x="87%" y="68%" numero="5")
            p <strong>Organización especializada:</strong>    es un proceso técnico que ayuda a mantener toda la documentación protegida, con una clasificación detallada  acorde con las necesidades de la empresa, además facilita la búsqueda y localización de documentos.
                                      
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Procesos y procedimientos para la gestión de calidad de la información
    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 Llevar a cabo todos los procesos relacionados con la calidad de la información ayudará a determinar los puntos de revisión y ejecución, que permitan gestionar la documentación de forma organizada y coherente con las necesidades previstas. <strong>Para poder realizar esta gestión es necesario seguir una serie de pasos que formaliza la normativa en el manejo de la información, que se explican en el siguiente video:</strong>
    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/3y_G7UbLbkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Almacenamiento de la información
    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 Cualquier empresa genera documentos importantes que deben almacenarse, ya sea para operaciones internas, referencia de clientes o para cumplir con las regulaciones gubernamentales. En el pasado, los archivadores solían cubrir las paredes de todas las oficinas. A medida que la tecnología ha evolucionado, también lo han hecho los métodos de gestión de documentos. 
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Comprender cómo establecer y mantener correctamente un archivo digital es fundamental para mantener los documentos seguros, accesibles y adaptables a las necesidades empresariales. Las pequeñas empresas deben considerar cuidadosamente cada categoría para garantizar que las operaciones de la empresa se optimicen, que los archivos críticos se puedan recuperar fácilmente y que estén seguros. 
    .row.mt-5
      .col-lg-8.mt-3
        p Para establecer un archivo digital es necesario escanear los documentos o importar los registros existentes a un sistema centralizado. Los sistemas de gestión de documentos están diseñados para que resulte más fácil establecer y mantener un archivo digital completo de los registros que se necesitan.
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Los registros se pueden escanear cuando se reciben, por ello se debe asignar a un empleado interno para que los escanee en lotes con una frecuencia acordada, que puede ir desde una vez al día hasta una vez al año.      
      .col-lg-3    
        img(src='@/assets/curso/tema1/img4.svg', alt='Texto que describa la imagen')
    .row.bg1.mt-2
      .col-lg-6
        img(src='@/assets/curso/tema1/img5.svg', alt='Texto que describa la imagen')

      .col-lg-5.mt-5
        .row.bg2.p-4
          p La digitalización de registros en papel comienza con un proceso conocido como digitalización de documentos, la creación de imágenes implica escanear documentos con el <i>software</i> de gestión de documentos. 
          p La mayoría de los sistemas de gestión de documentos utilizan lo que se conoce como reconocimiento óptico de caracteres para identificar e indexar automáticamente los documentos en función del contenido.

      p.mt-5 La tasa de precisión de cada programa depende de la calidad del documento que se ingresa al sistema. Si las páginas están manchadas o las imágenes están borrosas es posible que al programa le resulte más difícil reconocer la información. Si bien gran parte del proceso de digitalización se puede automatizar a través de imágenes de documentos, la precisión es esencial, por eso es necesario contar con documentos de calidad. 
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3. Instrumentos archivísticos
    p Para asegurar que los documentos se capturen correctamente se debe establecer una 
      span.t1 <strong>"tasa de confianza personalizada”</strong> 
      |  en el sistema de administración de documentos, lo que significa que el <i>software</i> solo acepta archivos que alcancen el umbral establecido, por ejemplo, si el <i>software</i> crea una imagen de un documento con una precisión del 90%; pero el índice de confianza personalizado es del 95%, ese documento no se aceptará sin una revisión y aprobación de forma manual.
    .row.justify-content-center
      .col-lg-8
        .row.mt-5.bg3
          .col-lg-1
          .col-lg-7.mt-4
            p.text-white Todos los registros que se digitalizan deben someterse a una revisión de control de calidad para garantizar su precisión, integridad y exhaustividad.
          .col-lg-1
          .col-lg-2.mt-2.mb-4
            img.tamimg(src='@/assets/curso/tema1/img6.svg', alt='Texto que describa la imagen')
    p.mt-5 Para una correcta organización y recuperación de los archivos digitales es necesario que al ser digitalizado el documento e importado los archivos digitales se codifique y categorice inmediatamente, esto con el fin de organizarse para que puedan recuperarse fácilmente. Los documentos en el archivo deben ser de fácil acceso, no debe requerir buscar en varios archivadores. 
    p En la mayoría de aplicativos de administración de documentos el primer paso es el proceso de organización, en este se identifican los documentos con palabras clave y se agregan los metadatos, para que se pueda realizar la indexación automática; sin embargo, para estar verdaderamente organizado es aconsejable detallar aún más agregando detalles que complementen la información del documento, esto puede realizarse manualmente.
    p <strong> Se entregan las siguientes recomendaciones que se deben realizar al momento de crear instrumentos archivísticos: </strong>
    .row
      .col-lg-7
        .row.mb-5
          .col-md-12.mb-5.mb-md-0
            //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            LineaTiempoD.color-acento-contenido
              p(numero="1" titulo="Organización por carpetas") De la misma manera que se organizan las carpetas físicas en un archivador, se deben organizar los archivos digitales, creando carpetas que estén claramente nombradas, de esta manera cuando abra el programa de gestión de activos podrá tener orden y una correcta clasificación de la información y de los archivos.<br><br>Se deben dividir los archivos en diferentes categorías de carpetas, por ejemplo, carpetas para clientes, proveedores, finanzas internas, impuestos, empleados y cualquier otra categoría amplia que aplique. También debe albergar subcategorías en cada categoría, por ejemplo, en la carpeta de clientes se debe tener una subcarpeta por meses del trabajo que realiza para cada cliente.
              
              p(numero="2" titulo="Almacenamiento") Para este proceso se cuenta con dos opciones, servidores locales y plataformas basadas en la nube. Los servidores locales exigen una mayor inversión inicial y recursos internos para el mantenimiento continuo; sin embargo, brindan un mayor control sobre los documentos y se encuentran bajo el paraguas de las medidas de seguridad establecidas por la empresa. Las plataformas basadas en la nube eliminan la carga del mantenimiento y, en general, pueden costar menos, pero está confiando en un tercero para que administre los datos y la información que puede ser confidencial para la organización, lo que podría crear vulnerabilidades adicionales.<br><br>Ambas opciones de almacenamiento local y en la nube son viables, con el almacenamiento basado en la nube se proporciona una copia de seguridad automática fuera del sitio, lo cual se está convirtiendo cada vez más en la opción de almacenamiento para la mayoría de las empresas. La mayoría de los sitios en la nube están certificados, son seguros y muy eficientes.
              
              p(numero="3" titulo="Seguridad") El archivo contiene todos los documentos críticos de la empresa, incluidos los más confidenciales. A medida que las violaciones de datos se vuelven más comunes, debe ser una prioridad máxima garantizar que el archivo sea lo más seguro posible.<br><br>Además, la mayoría de los sistemas de administración de documentos incluyen permisos de acceso de usuarios, que permiten a los administradores determinar qué usuarios pueden acceder, o incluso ver ciertos archivos almacenados en el archivo. Esto ayuda a mantener al mínimo las vulnerabilidades de la información confidencial.
              
              p(numero="4" titulo="Retención") Es importante comprender cuánto tiempo deben conservar ciertos documentos, esto ayuda a mejorar la seguridad y liberar espacio de almacenamiento. Algunos documentos no necesitan conservarse permanentemente, mientras que otros por su importancia o por regulaciones específicas deben ser conservados.<br><br>La mayoría de los documentos no deben almacenarse a perpetuidad, se recomienda que las pequeñas empresas conserven registros financieros durante siete años. Pero cuando se trata de documentos comerciales internos, como contratos de proveedores y registros de pedidos de clientes es normal conservarlos por más tiempo.
              p(numero="5" titulo="Sistemas") Las aplicaciones de gestión documental son solo el comienzo de la implementación de nuevas prácticas de administración de archivos, para lograr que la organización pueda realizar una adecuada gestión se debe sensibilizar, educar y capacitar a los empleados sobre la metodología que adopta la organización respecto al manejo de información.<br><br>El establecimiento de un sistema de organización de archivos concreto comienza con la descripción de prácticas de archivo donde se configuren  todos los procedimientos y consideraciones acordes con los lineamientos de la empresa, dejando por escrito estas buenas prácticas y se deben relacionar en el manual del empleado.
              p(numero="6" titulo="Funciones de colaboración") Una vez que el archivo se encuentre completamente digitalizado y organizado para que sea fácilmente accesible, el equipo encargado debe poder revisar los documentos rápidamente, sin crear ediciones contradictorias. Los mejores sistemas de gestión de documentos tienen herramientas integradas para ayudar al trabajo y gestión de forma colaborativa, donde se podrá rastrear las versiones de todo el contenido, permitiendo múltiples accesos de forma simultánea a los mismos documentos y facilitando la colaboración en la producción. <br>Para aplicaciones más complejas se crean flujos de trabajo con una estructura acorde con los procesos definidos y a través de este enrutamiento se realizarán las aprobaciones, firmas, listas de verificación, recordatorios y otras actividades de gestión documental.


      .col-lg-5
        img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
    p La tabla de retención documental también se convierte en un elemento clave en las gestiones archivísticas, en el siguiente video se presenta con detalle:
    .row.justify-content-center.mt-5
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Atención de PQRS
    .row.justify-content-center.mt-5
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Dentro del área de atención al cliente existe una división especial encargada de atender las solicitudes, quejas, reclamos y sugerencias de los clientes, y es la responsable de generar la fidelización del mercado objetivo, haciendo que las ventas generen valor agregado, conectando estrechamente al comprador con los productos y servicios que ofrecen.
    .row
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 La importancia de atender las peticiones, quejas, reclamos y sugerencias (en adelante PQRS) de los clientes, representan la continuidad y fortalecimiento de la relación comercial entre la empresa y los clientes, se deben tener presente las siguientes consideraciones para realizar este proceso con éxito:

      .col-lg-3   
        img(src='@/assets/curso/tema1/img8.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.bg1
      .col-lg-6.mt-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="5%" y="40%" numero="1")
            p El cliente es el activo más importante de una empresa y es el objeto del trabajo de los miembros de una empresa.
          .tarjeta.color-acento-botones.p-3(x="35%" y="27%" numero="2")
            p El cliente hace un favor a los integrantes de una empresa al darles la oportunidad de atender los requerimientos o necesidades.
          .tarjeta.color-acento-botones.p-3(x="50%" y="10%" numero="3")
            p El cliente trae deseos, expectativas y aspiraciones que deben ser traducidas e interpretadas por el equipo de atención al cliente, cuyo rol es convertirlas en realidad y buscar en todo momento al ser humano que hay detrás del cliente.
          .tarjeta.color-acento-botones.p-3(x="69%" y="20%" numero="4")
            p El cliente merece un servicio excelente o espectacular, por esto la empresa y los miembros del área de servicio al cliente deben anticiparse a las necesidades, deseos y expectativas de los clientes y sorprenderlos.
          .tarjeta.color-acento-botones.p-3(x="83%" y="40%" numero="5")
            p La empresa debe tomar la iniciativa para servir a los prospectos y clientes.
          .tarjeta.color-acento-botones.p-3(x="83%" y="70%" numero="6")
            p Los miembros del equipo de atención al cliente deben tener vocación de servicio y siempre se debe buscar y ofrecer a los clientes productos de la mejor calidad.
    p El servicio a los clientes es un arte que hay que aprender y se debe llegar a un acuerdo entre las diferentes áreas que integran una empresa, reconociendo que los PQRS se generan por una razón válida y, por lo general, son lo que causa cierto nivel de insatisfacción del cliente con respecto a los productos y/o servicios que compraron y que notaron en una etapa temprana o intermedia de uso del producto o servicio. Por eso es importante comprender que una queja se manifiesta como la acción directa del cliente para dar a conocer su nivel de insatisfacción parcial o total sobre el producto y/o servicio adquirido.
    .row
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Muchas empresas cuentan con excelentes vendedores que son capaces de lograr altas cuotas de ventas dentro del mercado objetivo; pero lamentablemente no ocurre lo mismo con los equipos de atención al cliente, quienes atienden deficientemente a los clientes y generan insatisfacción y alejamiento,  razón por la que  no volverían a comprar los productos y/o servicios ofrecidos por la misma empresa y que por estos motivos buscarán a la competencia que les puede entregar un alto valor agregado y una mejor atención a las solicitudes.

      .col-lg-3   
        img(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
    p.mt-5 <strong>Existen tres cualidades indispensables en el personal que debe afrontar el área de atención al cliente:</strong>          
    .row.mb-5.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-3
                  img.neg(src='@/assets/curso/1.svg', alt='Texto que describa la imagen')
                h3.text-center.mt-4.tb Asertividad
              .row.justify-content-center
                .col-lg-10
                  img.mt-4(src='@/assets/curso/avatar.svg', alt='Texto que describa la imagen')

            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-lg-4
                  img.neg2(src='@/assets/curso/1.svg', alt='Texto que describa la imagen')
              h3.text-center.mt-4 Asertividad
              p.mt-4.mb-5 es decir lo que piensa o siente a la persona adecuada en el momento adecuado, con las palabras adecuadas y en el tono adecuado.
              .row.mt-5
              .row.mt-5
              .row.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-3
                  img.neg(src='@/assets/curso/2.svg', alt='Texto que describa la imagen')
                h3.text-center.mt-4.tb Empatía
              .row.justify-content-center
                .col-lg-11
                  img.mt-4(src='@/assets/curso/avatar2.svg', alt='Texto que describa la imagen')

            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-lg-4
                  img.neg2(src='@/assets/curso/2.svg', alt='Texto que describa la imagen')
              h3.text-center.mt-4 Empatía
              p.mt-4.mb-5 un miembro del servicio al cliente debe brindar calidez, lo que resulta en una relación amistosa con el cliente que lo escucha y se preocupa por sus necesidades y deseos.
              .row.mt-5
              .row.mt-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center
                .col-lg-3
                  img.neg(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
                h3.text-center.mt-4.tb Escucha activa
              .row.justify-content-center
                .col-lg-9
                  img.mt-4(src='@/assets/curso/avatar3.svg', alt='Texto que describa la imagen')

            .tarjeta-flip__contenido.p-4.p-xl-5
              .row.justify-content-center
                .col-lg-4
                  img.neg2(src='@/assets/curso/3.svg', alt='Texto que describa la imagen')
              h3.text-center.mt-4 Escucha activa
              p.mt-4.mb-5 centrar la escucha en el mensaje y no en la persona, respondiendo claramente a dos estímulos sensoriales (lo que se ve y lo que se escucha), esto significa no tomar un lado emocional de las quejas o quejas de los clientes.
              .row.mt-5
              .row.mt-5
    
    separador
    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Informes y formatos
    p Dirigir un negocio es un gran desafío; pero está lejos de ser una misión imposible, después de todo, existen técnicas, recursos y estrategias para alcanzar el éxito, tales como administrar las finanzas, los empleados, el inventario, el <i>marketing</i> y las estrategias de ventas, todo este puede parecer mucho trabajo; pero un informe de gestión puede hacer que todo sea más fácil y seguro.
    <strong>Saber preparar un buen informe de gestión es clave y sirve como instrumento para el funcionamiento de cualquier empresa, permitiendo ver la situación del negocio con mayor precisión y ayuda a tomar decisiones más asertivas.</strong> 
    .row.justify-content-center.mt-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.aqw(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img11.svg')})`}"
          )
          .bloque-texto-g__texto.p-5.aqw2
            p.mb-0 Con el informe se pueden analizar los resultados obtenidos e identificar lo que no está funcionando para tomar acción, pues mediante este se presentan las particularidades y el desempeño de la empresa durante el período que se evalúa.
    p.mt-4 <strong>A continuación se presentan los elementos y la estructura que debe contener un buen informe de gestión: </strong>    
    .row.mt-5
      .col-lg-6.mt-5
        .tarjeta.tarjeta--azul.p-4.mb-5.bgc
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p <strong>Título:</strong>  es importante que tenga un título que permita identificar el tema de manera rápida y eficiente, dado que existen diferentes tipos de informes para varios departamentos y para varios propósitos. 
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p <strong>Contextualización:</strong>  es un elemento indispensable que permite al destinatario comprender lo que se analizará en el informe. Este texto debe ser breve y objetivo, sirviendo como introducción a las métricas, estadísticas y resultados que se presentarán.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p <strong>Objetivos:</strong> cada informe de gestión se prepara por una razón, por los cual se deben presentar de manera clara los objetivos del documento y enfocarse en lo que es realmente importante y útil para el negocio. Por lo tanto, antes de iniciar el proceso de redacción, seleccione cuidadosamente la información que se presentará para que sea consistente con el objetivo.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p <strong>Resumen:</strong>  es un texto de lectura rápida que contiene solo la información más relevante del informe, de esta manera, los gerentes y ejecutivos pueden tener una idea clara del contenido, sin tener que leerlo en su totalidad y es muy útil al momento de tomar una decisión. Un resumen bien redactado optimiza el tiempo y conduce a decisiones rápidas y seguras. Después de todo, es la información que se presenta de manera objetiva.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p <strong>Conclusión:</strong>   es el cierre del informe, en este se presentan los hallazgos, la redacción estará basada en la información presentada a lo largo del documento. No se trata de entregar opiniones personales, la conclusión se comprueba con la información real y actualizada, que ya fue presentada en el informe, por lo tanto, este espacio es muy valioso para la gestión del negocio.
              
      .col-lg-5
        img(src='@/assets/curso/tema1/img12.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.bloque-texto-g.color-acento-contenido
  background-color:#13B770
.tarjeta.color-acento-botones
  background-color: white
.cajon-b:before
  bottom: 0%
  right: 76%
.cajon-b.color-primario:before
  background-color: #E3FBFF
.linea-tiempo-d.color-acento-contenido .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #13B770!important
  color: white
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected
  .tarjeta--gris
    background-color: #E0FFF2
.tarjeta-flip.color-primario .tarjeta-flip__img
  background-color: #79DFEF
.img-infografica__item__numero, .img-infografica-b__item__numero
  left: 200%
.img-infografica__item__dot, .img-infografica-b__item__dot
  width: 57px
  padding-top: 400%
  @media screen and ( max-width: 420px)
    padding-top: 270%
    width: 42px
.img-infografica__item__numero, .img-infografica-b__item__numero
  @media screen and ( max-width: 420px)
    left: 130%
</style>
