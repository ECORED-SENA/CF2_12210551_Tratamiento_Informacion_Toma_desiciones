<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Acciones de mejoramiento
    p La mejora continua es un esfuerzo por mejorar todos los elementos de una organización, como procesos, herramientas, productos, servicios, y se basa en la creencia de que un flujo constante de mejoras ejecutadas con diligencia tendrá resultados transformadores.
    p <strong>Lo importante en el proceso de mejora continua es que sea frecuente y constante, con el fin de lograr el éxito y la transformación en los entornos laborales, para esto se relacionan los elementos clave a considerar: </strong>
    .row.mt-4
      .col-lg-12
        .tarjeta.tarjeta--azul.p-4.mb-5.bgaq1
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img1.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white La transparencia del desempeño comienza con hacer públicos los objetivos y distribuirlos en cascada (por lo general, una combinación equilibrada de métricas financieras y operativas) de una manera que se adapte a las personas en todos los niveles de la organización. El progreso hacia los objetivos debe ser rastreado de manera transparente para dar a la primera línea y a la gerencia una visibilidad clara de lo que funciona y lo que necesita mejorar.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img2.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white Al instituir un sistema fácil de entender para realizar un seguimiento de la utilización general y centrar la creatividad en encontrar nuevas formas de hacer que los activos sean más eficientes y productivos, lo que lleva a un aumento de la productividad del 20% en menos de dos meses.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img3.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white El intercambio de conocimientos es fundamental para escalar las mejores prácticas entre las organizaciones. 
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img4.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white La participación de los empleados es necesaria en las organizaciones de mejora continua. Los empleados de primera línea están más cerca del trabajo y, por lo tanto, suelen tener los conocimientos más completos sobre cómo se puede hacer mejor su trabajo. Captar las perspectivas es fundamental.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img5.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white A través de conversaciones con la gerencia de primera línea los líderes descubrieron problemas que debían abordarse: incorporación insuficiente, movilidad ascendente limitada y tareas administrativas onerosas que les impedían liderar los equipos de manera efectiva.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row
                  .col-lg-4
                    img(src='@/assets/curso/tema3/img6.png' alt='AvatarTop')
                  .col-lg-1
                  .col-lg-7.mt-5
                    p.text-white El núcleo de una mentalidad de mejora continua es la creencia de que un flujo constante de mejoras ejecutadas con diligencia tendrá resultados transformadores, por esto la mejora continua ha ayudado a las empresas de todas las industrias a proporcionar un mayor valor a los clientes y la efectividad en los procesos. 
    p <strong> A continuación se presentan los componentes para realizar un buen plan de mejora: </strong>
    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZhwkNEQWqx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Correctivas
    p Un plan de acción correctiva logra resultados específicos para la resolución de acciones indeseables, en estos se registra lo que debe hacer y las partes participantes que deben corregir la acción no deseada. Las empresas utilizan estos planes cuando un problema identificado tiene el potencial de afectar negativamente el sistema de gestión de calidad, cuando se implementan correctamente estos planes pueden ayudar a mejorar las operaciones comerciales y abordar problemas relacionados con el trabajo.
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img7.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Los planes de acción correctiva son importantes, ya que proporcionan documentación para las acciones correctivas de una empresa comenzando con la investigación y terminando con la revisión. Las empresas que utilizan esta planificación tienen un sistema sobre el qué reflexionar para gestionar y desarrollar soluciones. 
    .row.justify-content-center.mt-4
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-4
          .row.justify-content-center
            .col-lg-10.mt-4
              p <strong> Algunos beneficios de usar planes de acción correctiva incluyen:</strong>
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul--color
                  li 
                    i.fas.fa-check
                    p.mb-0 Mejorar los procesos o métodos de trabajo.

                  li 
                    i.fas.fa-check
                    p.mb-0 Optimización del flujo de trabajo.

                  li 
                    i.fas.fa-check
                    p.mb-0 Aumento de la eficiencia y la eficacia.

                  li 
                    i.fas.fa-check
                    p.mb-0 Encontrar formas rentables de corregir errores.
                  li 
                    i.fas.fa-check
                    p.mb-0 Elementos de un plan de acción correctivo.
                  li 
                    i.fas.fa-check
                    p Encontrar las causas raíces de una situación a mejorar, con el fin de implementar controles correctivos.
    p.mt-4 <strong> Los siguientes son los elementos clave de un plan de acción correctiva:</strong>
    .row.mt-5.justify-content-center
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="96%" numero="")

            p <strong>Definir el problema</strong> es el primer elemento de un plan de acción correctivo y parte de la identificación del problema, partiendo del análisis de:  
            .col-sm.mb-5.mb-sm-0
              ul.lista-ul--color
                li.mb-0 
                  i.fas.fa-check.color1
                  p.mb-0 Quejas de clientes.
                li.mb-0
                  i.fas.fa-check.color1
                  p.mb-0 Incidentes de seguridad.
                li.mb-0  
                  i.fas.fa-check.color1
                  p.mb-0 Resultados de la auditoría.
                li.mb-0  
                  i.fas.fa-check.color1
                  p.mb-0 Informes de no conformidades.
                li.mb-0  
                  i.fas.fa-check.color1
                  p.mb-0 Fechas de vencimiento.
          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="80%" numero="")

            p <strong>La evaluación de riesgos</strong>  ayuda a estimar el nivel de riesgo de acciones particulares. Al crear un plan de acción correctivo las organizaciones usan su matriz de evaluación de riesgos para determinar la cantidad de riesgo para que puedan eliminar las acciones de alto riesgo. Revisar los riesgos también es útil al concluir el proceso de acción correctiva, ya que permite a las empresas determinar si las acciones ayudaron a resolver el problema o si deben comenzar el proceso nuevamente.
          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="63%" numero="")

            p <strong>Causa principal:</strong>   para ayudar a encontrar una posible solución hay que encontrar la causa raíz del problema. Para este análisis hay una variedad de métodos y técnicas, como por ejemplo, el análisis de los cinco porqués, en el que se hace la pregunta "¿por qué?" para determinar qué está causando un problema. Para la queja del cliente sobre un artículo roto, la empresa podría analizar el porqué y descubrir que el cliente recibió un artículo roto porque la caja se cayó durante el envío.
          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="46%" numero="")

            p <strong>Elementos de acción</strong>   sobre cómo la organización planea corregir el problema definido. Incluye detalles para ayudar a explicar qué hacer, cómo delinear el plan de corrección seleccionado. 
          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="29%" numero="")

            p <strong>Partes interesadas,</strong>  durante la etapa de planificación de la acción correctiva se debe determinar quiénes son las partes interesadas. A menudo, estos son los clientes o empleados que se ven afectados. Las empresas a menudo se comunican con las partes interesadas lo antes posible para informarles qué soluciones planean implementar y cómo subsanar la situación.
          .tarjeta.color-acento-botones.p-3.color2(x="48%" y="12%" numero="")

            p <strong>Métricas para completar</strong>   los planes de acción correctiva y son la línea de base que la empresa debe alcanzar para considerar el problema resuelto, por ejemplo, la empresa que experimenta un cliente molesto por su artículo roto puede buscar tener un cliente satisfecho como su métrica de finalización.





    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Preventivas
    p Cuando se detecta un problema potencial en un negocio se puede emitir una solicitud de acción preventiva que alerte a la empresa sobre los problemas antes de que ocurran. Se puede utilizar una solicitud de acción preventiva para evitar un accidente o un problema de personal en cualquier oficina o negocio de producción, dicha solicitud no está diseñada para corregir el problema, en cambio, se utiliza para documentar posibles responsabilidades y controles a implementar.
    p <strong> Se deben considerar los siguientes aspectos al momento de realizar un plan de acciones preventivas: </strong>
    .row.mt-4
      .col-lg-8
        .tarjeta.tarjeta--azul.p-4.mb-5.bgc
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p Se utilizan varios <strong>métodos</strong> para realizar el seguimiento, cuando recibe una solicitud de acción preventiva se puede detener la producción y buscar el origen del problema potencial, hablar con las partes involucradas o mantener la vigilancia para reconocer el problema cuando surja. Se visualiza los peores escenarios y alerta a los líderes de la empresa para encontrar el origen del problema y detenerlo antes de que ocurra. Las ejecuciones de prueba de las líneas de producción pueden revelar el problema. Las encuestas a los clientes o la supervisión constante de las facturas pueden producir inconsistencias que no había notado antes de recibir una solicitud, las revisiones periódicas de los empleados y una cultura de comunicación abierta alientan a los empleados a asumir la responsabilidad de informar los posibles problemas a medida que los ven.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p Una solicitud de <strong>acción de prevención</strong> se ocupa de problemas que aún no han ocurrido, como tal, es un intento positivo y deliberado de prevenir problemas y ejecutar un plan para mitigar los riesgos. Los puntos débiles en los sistemas o en una línea de productos se destacan y abordan.

            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p Una solicitud de acción preventiva puede ser <strong>iniciada por la gerencia,</strong> el personal o consultores externos que revisan los procesos comerciales. Una auditoría interna de las prácticas comerciales y de producción a menudo revela problemas potenciales que deberían conducir al desarrollo de una solicitud de acción preventiva. Si bien un plan se usa idealmente para prevenir un accidente o problema, también podría resultar en un ahorro de tiempo o dinero, también puede servir como una señal de alerta para evitar problemas que podrían dañar la reputación o generar problemas de incumplimiento.

            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                p Debe existir <strong>una cadena de mando para tratar y realizar un seguimiento de las solicitudes de medidas preventivas.</strong> Un oficial de control de calidad o el gerente de recursos humanos son los más adecuados para monitorear el progreso de cada informe y hacer un seguimiento de la respuesta de la empresa. Una vez que se aborda un plan se deben conservar copias y registrar los resultados. El originador de la solicitud puede o no estar involucrado en la investigación subsiguiente; pero debe ser informado de los resultados. Algunas empresas ofrecen recompensas a los empleados que inician resultados positivos a partir de las solicitudes de acciones preventivas, y se anima a los empleados a informar sobre posibles problemas cada vez que los vean.

      .col-lg-4.mt-5
        img(src='@/assets/curso/tema3/img9.svg' alt='AvatarTop')

</template>

<script>
export default {
  name: 'Tema3',
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
.slyder-a__bullets__item--active
  background-color:#13B770!important
  border-color:#13B770!important
.slyder-a__bullets__item
  background-color:#EECF52
  border-color:#EECF52
.img-infografica__item__dot, .img-infografica-b__item__dot
  width: 50px
  padding-top: 300%
  color: white
  @media screen and ( max-width: 420px)
    width: 42px
    padding-top: 200%
.cajon.color-acento-contenido
  background-color: #E5FFF4
.img-infografica__item__dot, .img-infografica-b__item__dot
  opacity: 0
</style>
