<template v-slot="{ user_data }">
  <div>
    <div class="item-content">
      <!-- Item Main Info -->
      <div class="product-details p-6 mb-6">
        <div class="vx-row mt-6">
          <div class="vx-col md:w-2/5 w-full flex items-center justify-center">
            <div class="product-img-container w-3/5 mx-auto mb-10 md:mb-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWDAYamQq-wVHCNZIAdPH407zZYiuI_4kwyTv2TlOq1xR-0CWl&usqp=CAU"
                :alt="dataEspecialidad($route.params.id).nombre"
                class="responsive"
              />

              <!--
                    UnComment Below line for true flow
                    <img :src="dataEspecialidad($route.params.id).image" :alt="dataEspecialidad($route.params.id).nombre" class="responsive">

                    Remove above img tag which is for demo purpose in actual flow
              -->
            </div>
          </div>
          
          <!-- Item Content -->
          <div class="vx-col md:w-1/2">
            <div class="vx-row align-right">
              <div class="vx-col flex flex-wrap items-right"></div>
            </div>
            <h1>{{ dataEspecialidad($route.params.id).nombre }}</h1>

            <p class="my-2 mb-3 text-justify">
              <span>{{ dataEspecialidad($route.params.id).descripcion }}</span>
            </p>
            <p class="float-right mb-2">
              <span
                class="pl-3 mt-2 d-theme-border-grey-light border-t-0 border-b-0 border-r-0 cursor-pointer"
              >
                <a>
                  <feather-icon
                    icon="DownloadIcon"
                    svgClasses="stroke-current text-primary w-6 h-6"
                    class="mr-3 mt-1"
                  />Descarga el folleto informativo
                </a>
              </span>
            </p>

            <p class="clear-right">{{ dataEspecialidad($route.params.id).description }}</p>

            <div class="chat__contact flex items-center px-2 pt-4 pb-2">
              <div
                class="contact__container w-full flex items-center justify-between overflow-hidden"
              >
                <div class="contact__info flex flex-col truncate w-5/6">
                  <h5 class="font-semibold">Informes</h5>
                </div>
              </div>
            </div>

            <!-- Por si exiten varios precios dependiendo del dia, o algo asi -->
            <vs-list class="product-sales-meta-list px-0 pt-4"> </vs-list>
            <!-- Quantity -->
            <div class="vx-row">
              <div class="vx-col w-full">
                <div class="flex items-stretch mb-5">
                  <!-- Add To Cart Button -->
                  <div class="flex-1">
                    <span
                      ><span class="font-semibold">Telefono: </span
                      ><span>(33) 34353132 </span>,&nbsp;&nbsp;<span>
                        extensión </span
                      >&nbsp;&nbsp;<span> 561</span></span
                    ><br /><br />
                    <span
                      ><span class="font-semibold">Correo electrónico: </span
                      ><span>informesindetec@indetec.gob.mx</span></span
                    >
                  </div>
                  <div class="flex-1">
                    <span
                      class="pl-3 mt-2 d-theme-border-grey-light border-t-0 border-b-0 border-r-0 cursor-pointer"
                    >
                      <feather-icon
                        icon="MapPinIcon"
                        svgClasses="stroke-current text-primary w-6 h-6"
                        class="mr-3 mt-1"
                      />Plataforma Indetec
                    </span>
                  </div>
                  <div class="flex-1">
                    <span
                      class="pl-3 mt-2 d-theme-border-grey-light border-t-0 border-b-0 border-r-0 cursor-pointer"
                    >
                      <feather-icon
                        icon="CalendarIcon"
                        svgClasses="stroke-current text-primary w-6 h-6"
                        class="mr-3 mt-1"
                      /><span>Inicio:</span> <span> 10/09/2020</span>
                    </span>
                  </div>

                  <!-- Wishlist Button -->
                  <!-- <span
                class="pl-3 mt-2 d-theme-border-grey-light border-t-0 border-b-0 border-r-0 cursor-pointer"
              >
              <div class="block">
                <div class="inline-block">
                  <feather-icon
                    icon="DownloadIcon"
                    svgClasses="stroke-current text-primary w-6 h-6"
                    class="mr-3 mt-1"
                  />
                </div>
                <div class="inline-block">
                  Plataforma<br>Indetec
                </div>
              </div>

              
                
              </span>
              <span>
                <div class="block">
                <div class="inline-block">
                  <feather-icon
                    icon="CalendarIcon"
                    svgClasses="stroke-current text-primary w-6 h-6"
                    class="mr-3 mt-1"
                  />
                </div>
                <div class="inline-block">
                  Inicio:<br>10/09/2020
                </div>
              </div>
              </span> -->
                </div>
              </div>

              <vx-card>
                <div class="vx-row">
                  <div class="vx-col w-full sm:w-1/2 lg:w-1/2 text-center">
                    ¿Estás interesado en éste programa académico?
                  </div>
                  <div class="vx-col w-full sm:w-1/2 lg:w-1/2 text-center">
                    <vs-button
                      :to="'/registro/pre-registro/' + $route.params.id"
                      color="success"
                      type="filled"
                      >Solicitud de admisión</vs-button
                    >
                  </div>
                </div>
              </vx-card>
            </div>
            <!-- /Quantity -->
          </div>
        </div>
      </div>

      <!-- HORIZONTAL TABS WITH ICONS -->
      <div class="vx-row match-height">
        <div class="vx-col w-full">
          <vx-card>
            <vs-tabs alignment="fixed">
              <vs-tab label="Acerca de" icon-pack="feather" icon="icon-info">
                <div class="mt-3">
                  <acerca :acerca="acerca"></acerca>
                </div>
              </vs-tab>

              <vs-tab
                label="Plan de Estudios"
                icon-pack="feather"
                icon="icon-clipboard"
              >
                <div class="mt-3">
                  <h4 class="p-6 pl-20">Plan de Estudios</h4>
                  <programa
                    :especialidad="$route.params.id"
                  />
                </div>
              </vs-tab>

              <vs-tab
                label="Modalidades de Estudio"
                icon-pack="feather"
                icon="icon-monitor"
              >
                <div class="mt-3">
                  <h4 class="p-6 pl-20">Modalidad en línea</h4>
                  <p>
                    Para quienes no se pueden desplazar al campus Diseñada para
                    las personas que quieren crecer profesionalmente, pero que
                    no tienen el tiempo necesario para asistir a clases
                    presenciales. La educación en línea de la UNITEC es
                    reconocida con la máxima calificación de cinco estrellas por
                    parte de la calificadora internacional QS Stars. El título
                    profesional es el mismo al que obtendrías en la modalidad
                    presencial. Todos los programas tienen Reconocimiento de
                    Validez Oficial de Estudios de la SEP. Blackboard, la
                    plataforma tecnológica internacional que se utiliza en las
                    materias, es de fácil acceso, confiable y diseñada
                    exclusivamente para la educación en línea.
                  </p>
                </div>
              </vs-tab>
              <vs-tab
                label="Líneas de Investigación"
                icon-pack="feather"
                icon="icon-search"
              >
                <div class="mt-3">
                  <h4 class="p-6 pl-20">Campos de aplicación profesional</h4>
                  <p>
                    Liquorice croissant chocolate chocolate cake. Bonbon dessert
                    carrot cake fruitcake pudding sugar plum sweet gummies bear
                    claw. Gummies marshmallow chocolate cake. Jelly icing cake
                    carrot cake. Gummies marshmallow chocolate carrot cake lemon
                    drops. Soufflé gingerbread cupcake chupa chups dragée halvah
                    toffee liquorice. Jelly-o pie ice cream ice cream pudding
                    sweet.
                  </p>
                </div>
              </vs-tab>
              <vs-tab
                label="Preguntas frecuentes"
                icon-pack="feather"
                icon="icon-help-circle"
              >
                <div class="mt-3">
                  <h4 class="p-6 pl-20">Preguntas frecuentes</h4>
                  <faq
                    class="centrar w-full md:w-3/5 md:w-full lg:w-3/5 xl:w-3/5"
                    :preguntas_frec="preguntas_frec"
                  ></faq>
                </div>
              </vs-tab>
            </vs-tabs>
          </vx-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FichaInstructor from "./components/ficha-instructor.vue";
import Faq from "./components/faq.vue";
import Calificaciones from "./components/calificaciones.vue";
import Comentarios from "@/components/carousel/carousel-comments.vue";
import Programa from "./components/programa-curso.vue";
import StarRating from "vue-star-rating";
import Acerca from "./components/acercaDelCurso.vue";
import { get_data } from "@/http/oferta-academica";

export default {
  components: {
    FichaInstructor,
    Faq,
    Calificaciones,
    Comentarios,
    Programa,
    StarRating,
    Acerca,
  },
  data() {
    return {
      especialidad: '',
      acerca: {
        descripcion:
          "This course explores Javascript based front-end application development, and in particular the React library (Currently Ver. 16.3). This course will use JavaScript ES6 for developing React application. You will also get an introduction to the use of Reactstrap for Bootstrap 4-based responsive UI design. You will be introduced to various aspects of React components. You will learn about React router and its use in developing single-page applications. You will also learn about designing controlled forms. You will be introduced to the Flux architecture and Redux. You will explore various aspects of Redux and use it to develop React-Redux powered applications. You will then learn to use Fetch for client-server communication and the use of REST API on the server side. A quick tour through React animation support and testing rounds off the course. You must have preferably completed the previous course in the specialization on Bootstrap 4, or have a working knowledge of Bootstrap 4 to be able to navigate this course. Also a good working knowledge of JavaScript, especially ES 5 is strongly recommended",
        aprendizaje: [
          {
            id: 1,
            nombre:
              "Apply for high-paid jobs or work as a freelancer in one the most-demanded sectors you can find in web dev right now",
          },
          {
            id: 2,
            nombre: "Build powerful, fast, user-friendly and reactive web apps",
          },
          {
            id: 3,
            nombre:
              "Provide amazing user experiences by leveraging the power of JavaScript with ease",
          },
          {
            id: 4,
            nombre: "Learn React Hooks & Class-based Components",
          },
        ],
        requisitos: [
          {
            id: 1,
            nombre:
              "JavaScript + HTML + CSS fundamentals are absolutely required",
          },
          {
            id: 2,
            nombre:
              "You DON'T need to be a JavaScript expert to succeed in this course!",
          },
        ],
      },
      plan_estudios: [],
      detalle_programa: [
        {
          id: 1,
          tema: "Getting Started",
          num_videos: 21,
          num_minutos: 234,
          num_lecturas: 23,
          num_examenes: 2,
          subtemas: [
            {
              id: 1,
              nombre: "Introduction",
              descripcion:
                "Welcome to this course! Let me introduce myself and give you a first impression of the course content!",
              link_recurso: "",
            },
            {
              id: 2,
              nombre: "What is React",
              descripcion:
                "Let's dive into the most important question first: What is React? In this lecture, we'll take a closer look.",
              link_recurso: "",
            },
          ],
        },
        {
          id: 2,
          tema: "Segundo tema",
          num_videos: 21,
          num_minutos: 234,
          num_lecturas: 23,
          num_examenes: 2,
          subtemas: [
            {
              id: 1,
              nombre: "Introduction",
              descripcion:
                "Welcome to this course! Let me introduce myself and give you a first impression of the course content!",
              link_recurso: "",
            },
            {
              id: 2,
              nombre: "What is React",
              descripcion:
                "Let's dive into the most important question first: What is React? In this lecture, we'll take a closer look.",
              link_recurso: "",
            },
          ],
        },
      ],
      carouselItems: [
        {
          name: "Arturo Carrillo Suarez",
          description:
            "El curso es bastante bueno, la metodologia que usa me ayudo bastante y el profesor tuvo siempre la mejor disposicion para contestar y sabia mucho del tema.",
          date: "30/01/2020",
        },
        {
          name: "Arturo Carrillo Suarez",
          description:
            "El curso es bastante bueno, la metodologia que usa me ayudo bastante y el profesor tuvo siempre la mejor disposicion para contestar y sabia mucho del tema.",
          date: "30/01/2020",
        },
        {
          name: "Arturo Carrillo Suarez",
          description:
            "El curso es bastante bueno, la metodologia que usa me ayudo bastante y el profesor tuvo siempre la mejor disposicion para contestar y sabia mucho del tema.",
          date: "30/01/2020",
        },
      ],
      calificaciones: {
        num_comentarios: "256",
        porcentajes: {
          cinco: "62",
          cuatro: "49",
          tres: "35",
          dos: "11",
          una: "3",
        },
      },
      user_data: [
        {
          id: 1,
          avatar:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png",
          nombre: "Roberto Ramirez Rodriguez",
          descripcion:
            "Hola, soy Ingeniero en Sistemas, tengo 6 años dando clases en Universidades privadas, uso la metodologia más adecuada para cada alumno, siempre estoy actualizando mis clases y me actualizo en el tema. Hablo tres idiomas, y me gusta el ciclismo.",

          correo: "rober@indetec.gob.mx",
          titulo: "Profesor Titular A",
          area: "Departamento de Computación",
          califInst: "4.6",
          comentarios: "192,832",
          estudiantes: "985",
          cursos: "56",
          linkVideoIntroduccion: "linkVideoIntroduccion",
        },
        {
          id: 2,
          avatar:
            "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-04-512.png",
          nombre: "Roberto Ramirez Rodriguez",
          descripcion:
            "Hola, soy Ingeniero en Sistemas, tengo 6 años dando clases en Universidades privadas, uso la metodologia más adecuada para cada alumno, siempre estoy actualizando mis clases y me actualizo en el tema. Hablo tres idiomas, y me gusta el ciclismo.",

          correo: "rober@indetec.gob.mx",
          titulo: "Profesor Titular A",
          area: "Departamento de Computación",
          califInst: "4.6",
          comentarios: "192,832",
          estudiantes: "985",
          cursos: "56",
          linkVideoIntroduccion: "linkVideoIntroduccion",
        },
      ],
      preguntas_frec: [
        {
          id: 1,
          categoryId: 2,
          question: "What does royalty free mean?",
          ans:
            "Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses.",
        },
        {
          id: 2,
          categoryId: 2,
          question: "What do you mean by item and end product?",
          ans:
            "The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template; the end product is the finalized business card. The item is a button graphic; the end product is an app using the button graphic in the app's interface.",
        },
        {
          id: 3,
          categoryId: 2,
          question: "Am I allowed to modify the item that I purchased?",
          ans:
            "Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client.",
        },
        {
          id: 4,
          categoryId: 2,
          question: "What does non-exclusive mean?",
          ans:
            "Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item.",
        },
        {
          id: 5,
          categoryId: 3,
          question:
            "Is the Regular License the same thing as an editorial license?",
          ans:
            "No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that's sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer.",
        },
        {
          id: 6,
          categoryId: 3,
          question:
            "Which license do I need for an end product that is only accessible to paying users?",
          ans:
            "If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content.",
        },
        {
          id: 7,
          categoryId: 3,
          question: "Which license do I need to use an item in a commercial?",
          ans:
            "You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn't matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License",
        },
      ],
      item_data: {
        nombre: "Maestría en Gestión Pública",
        descripcion:
          "El programa surge con el objetivo de promover la profesionalización de los funcionarios públicos en los diferentes ámbitos de gobierno en México y en los demás países de Latinoamérica. Como consecuencia de los procesos de  transformación política  que tienen lugar en México y diversos países, se requiere de funcionarios públicos altamente capacitados y con un profundo sentido ético para realizar una gestión pública eficaz.",
        price: "5,520",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWDAYamQq-wVHCNZIAdPH407zZYiuI_4kwyTv2TlOq1xR-0CWl&usqp=CAU",
        rating: 4,
        objectID: "5546604",
      },
    };
  },
  // updated: function () {
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been re-rendered
  //     // console.log("updated");
  //     this.item_data = this.dataEspecialidad(this.$route.params.id);
  //   });
  // },
  // watch: {
  //   'this.$route.params.id': function(val) {
  //     console.log(val);
  //   }
  // },
  created: function () {
    console.log("Se crea detalle");
    this.item_data = this.dataEspecialidad(this.$route.params.id);
    // this.get_planEstudios();
  },
  computed: {
    dataEspecialidad: function () {
      return (id_especialidad) =>
        this.$store.getters["especialidades/get_EspecialidadByID"](
          id_especialidad
        );
    },
  },
  methods: {
    get_planEstudios: function () {
      get_data({ action: 1, id_plan: this.$route.params.id })
        .then((response) => {
          this.plan_estudios = response.data.materias;
          // var menu = response.data.status === 200 ? response.data.menu : [];

          // this.$store.dispatch("menu/loadMenu", { menu: menu, nivel: 2 });

          // this.$router.push(path);
        })
        .catch((err) => {
          this.$vs.notify({
            color: "danger",
            position: "top-right",
            title: "Error",
            text: err,
          });
        });
    },
  },
};
</script>

<style >
.centrar {
  margin: auto;
}
</style>