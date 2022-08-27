<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Confidencialidad y custodia de la información
    p Para garantizar la confidencialidad de la información es importante comprender los aspectos generales de seguridad que se deben implementar: 
    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/OC8x73OfV6s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row
      .col-lg-6
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 En las organizaciones es necesario implementar controles para garantizar la protección de la información de la empresa y de los clientes, surgiendo la necesidad de implementar una política de confidencialidad que depende del tipo de información a proteger e identificar quiénes deben tener acceso a esta; en algunas empresas existen acuerdos de no competencia que pueden ser necesarios para prohibir que los empleados trabajen en una empresa relacionada en su área durante un cierto período de tiempo, procurando proteger la información.
      .col-lg-1
      .col-lg-3
        img(src='@/assets/curso/tema2/img1.svg', alt='Texto que describa la imagen')
    .row.mt-4
      .col-lg-2
      .col-lg-3
        img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
      .col-lg-1
      .col-lg-6
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Antes de decidir si realmente se necesita una política de confidencialidad específica para los empleados deberá determinar si tiene información que en realidad es “secreta o confidencial”, puede ser difícil controlar el acceso de los empleados a la información, a menos que se cuente con una correcta clasificación de la misma, donde se identifique si es de tipo confidencial, restringida, de uso interno o pública, así se podrán implementar controles acordes con la clasificación y se designará un responsable o custodio de esta.
    .row.justify-content-center.bga
      .col-lg-6.mt-4
        p <strong>Para la clasificación de la información se debe llevar a cabo los siguientes pasos:</strong>
        .row.mb-0
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.imgtam(src='@/assets/curso/tema2/1.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-3
                  p Se debe iniciar con la creación del inventario de activos de información, conocer su formato y los medios que se usan para transmitirla a otras áreas.
                  .row.justify-content-center
                    img.waq(src='@/assets/curso/tema2/11.svg' alt='AvatarTop')
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.imgtam(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-3
                  p Luego se procede a la clasificación de la información, de acuerdo con las particularidades organizacionales se definen los criterios y los niveles de protección.
                  .row.justify-content-center
                    img.waq(src='@/assets/curso/tema2/22.svg' alt='AvatarTop')
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.imgtam(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-3
                  p Asignar una etiqueta a la información clasificada, pues es necesario que se definan las pautas a seguir para cada tipo de activo de información y poder reconocer el nivel de confidencialidad de cada activo de información.

                  .row.justify-content-center
                    img.waq(src='@/assets/curso/tema2/33.svg' alt='AvatarTop')
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img.imgtam(src='@/assets/curso/tema2/4.svg' alt='AvatarTop')
              .tarjeta.color-acento-contenido
                .p-3
                  p Dar tratamiento seguro de la información, definiendo los controles de protección de cada tipo de información según el nivel de confidencialidad.

                  .row.justify-content-center.mt-5
                    img.waq(src='@/assets/curso/tema2/44.svg' alt='AvatarTop')
    p.mt-4 La información que sea de carácter confidencial o que está tratando de mantener en secreto deberá contar con restricciones para su acceso, esto juega un papel fundamental en las decisiones para el manejo de la confidencialidad y la designación de los empleados que la deben proteger.
    p <strong> Hay algunos pasos que pueden seguir para proteger la información, se presentan como ejemplo, pudiendo usar solo aquellos que se consideren necesarios y que logren un grado de seguridad que aplique al contexto y capacidades de la empresa, estos también son la base para desarrollar la política de confidencialidad:</strong>
    .row.mt-4
      .col-lg-7
        .tarjeta.tarjeta--azul.p-4.mb-5.bgaq
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row.justify-content-center
                  img.waq(src='@/assets/curso/tema2/1.svg' alt='AvatarTop')
                .col-sm.mb-5.mb-sm-0.mt-4
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check.am
                      p.text-white.mb-0 Explicar a los empleados la necesidad de proteger ciertos tipos de información.
                    li 
                      i.fas.fa-check.am
                      p.text-white.mb-0 Definir el tipo de información que se está tratando de proteger.
                    li 
                      i.fas.fa-check.am
                      p.text-white.mb-0 Prohibir la difusión de información confidencial.
                    li 
                      i.fas.fa-check.am
                      p.text-white Instruir a los empleados sobre el tipo de situaciones en las que podrían revelar información confidencial sin darse cuenta.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row.justify-content-center
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.text-white Explicar las sanciones por violar la política de la empresa.
                    li 
                      i.fas.fa-check
                      p.text-white Hacer que los empleados firmen un acuerdo de no competencia y confidencialidad al momento de ser contratados.
                    li 
                      i.fas.fa-check
                      p.text-white Recordar a los empleados que el producto del trabajo pertenece a la empresa, no a los empleados individuales.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row.justify-content-center
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.text-white Establecer procedimientos para identificar y salvaguardar la información de propiedad de la empresa, por ejemplo, establecer contraseñas seguras para las computadoras y archivos, implementar mecanismos criptográficos, contar con <i>software</i> integral de seguridad o un programa de prevención de pérdidas de datos o DLP <i>(Data Lost Prevention)</i>.
                    li 
                      i.fas.fa-check
                      p.text-white Sensibilizar a todo el personal en la seguridad de la información de la empresa.
            .row.justify-content-center
              .col-md-11.mb-4.mb-md-0
                .row.justify-content-center
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.text-white Involucrar en las estrategias de seguridad a los agentes externos y proveedores.
                    li 
                      i.fas.fa-check
                      p.text-white Dejar claro los mecanismos legales disponibles en caso de robo de secretos o fuga de información.
                    li 
                      i.fas.fa-check
                      p.text-white Realizar monitoreo continuo de los controles implementados, gestión de datos y detectar falencias para corregirlas lo antes posible.

      .col-lg-5
        img(src='@/assets/curso/tema2/img3.png' alt='AvatarTop')
    p.mt-3 Es necesaria la creación de una política de confidencialidad donde se especifique exactamente lo que está protegiendo y lo que considera confidencial, para evitar que los empleados actuales o anteriores afirmen más tarde que no se dieron cuenta de que la información que estaban usando, compartiendo, estaba protegida.
    .row
      .col-lg-8
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Un acuerdo de no competencia o acuerdo de confidencialidad es un documento específico donde se expresan las cláusulas de prohibiciones que un empleado tiene respecto al manejo de la información y la responsabilidad que adquiere durante un período de tiempo dentro de una organización, este se utiliza para evitar que un empleado fugue o comparta la información confidencial de la empresa sin consentimiento. 

      .col-lg-1
      .col-lg-1.mt-3
        img.tc(src='@/assets/curso/tema2/img4.svg', alt='Texto que describa la imagen')
    p.mt-2 Este documento debe ser firmado desde el momento en que se realiza el contrato, y es una forma de proteger el tiempo, el dinero y los recursos de la empresa, dichos acuerdos son difíciles de hacer cumplir; pero también se debe reconocer que no todos los empleados necesitan firmar este acuerdo, pues el cargo y rol a desempeñar cuenta con el acceso a algún tipo de información confidencial, por lo que no sería necesario que el empleado firme dicho acuerdo.
    .row.bac2.justify-content-center
      .col-lg-8.mt-5
        p.text-center <strong>Para ayudar a garantizar que las cláusulas de confidencialidad o acuerdo de no competencia sea aplicable se presentan las siguientes recomendaciones:</strong>
      .row.justify-content-center
        .col-lg-6
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/img5.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="-7%" y="80%" numero="1")
              p Debe ser redactado por un profesional del derecho, pues si alguna vez se tiene que hacer cumplir este documento, los tribunales lo examinarán detalladamente.
            .tarjeta.color-acento-botones.p-3(x="6%" y="80%" numero="2")
              p Asegurar que cumpla con la ley local aplicable y que se le dé suficiente consideración al empleado por firmar el acuerdo.
            .tarjeta.color-acento-botones.p-3(x="18%" y="80%" numero="3")
              p Si el acuerdo es parte del proceso de contratación, dar el trabajo al empleado es consideración suficiente para acordar abstenerse de trabajar para la competencia más adelante.
            .tarjeta.color-acento-botones.p-3(x="31%" y="80%" numero="4")
              p Si el contrato se firma más tarde, la promesa de un aumento de sueldo o un ascenso probablemente sea suficiente para su firma.
            .tarjeta.color-acento-botones.p-3(x="45%" y="80%" numero="5")
              p Se debe estructurar lo más específico posible, en general, solo es necesario relacionar aquellas restricciones que sean razonables para proteger los intereses legítimos o "protegibles" de una empresa.
            .tarjeta.color-acento-botones.p-3(x="58%" y="80%" numero="6")
              p Definir el interés legítimo o protegible de la empresa, sea específico en términos de equipo, información, tecnología, estrategia, prospectos de ventas y otra información de propiedad pertinente. 
            .tarjeta.color-acento-botones.p-3(x="70%" y="80%" numero="7")
              p Relacionar razonablemente las restricciones en tiempo y geográficas. No deben ser  demasiado amplias para que el acuerdo sea ejecutable.
            .tarjeta.color-acento-botones.p-3(x="83%" y="80%" numero="8")
              p Estructurar el acuerdo con miras a la aplicación parcial. Incluso si un tribunal considera que las restricciones son demasiado amplias se puede incluir una cláusula que diga que si una parte del acuerdo se considera inválida, el resto aún debe aplicarse. Esto puede brindarle cierta protección, aunque no es todo lo que requiere en el acuerdo.
            .tarjeta.color-acento-botones.p-3(x="96%" y="80%" numero="9")
              p No utilizar selectivamente dichos acuerdos. Hacer que todos los empleados en situaciones similares los firmen y asegurarse de que todos los empleados cumplan con los acuerdos que firmen.

</template>

<script>
export default {
  name: 'Tema2',
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
.cajon-b.color-primario:before
  background-color: #E3FBFF
.tarjeta.color-acento-contenido
  background-color: #CCFFE9
.bgaq
  background-color: #05339E
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
.tarjeta.color-acento-contenido *
  color: #1A1A52!important
</style>
