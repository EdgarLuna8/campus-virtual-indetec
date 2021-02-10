<template>
  <div class="flex">
    <div
      class="search-full-container w-full h-full absolute left-0 top-0"
      :class="{'flex': showFullSearch}"
      v-show="showFullSearch"
    >
      <vx-auto-suggest
        ref="navbarSearch"
        :autoFocus="showFullSearch"
        :data="data_buscador"
        search_key="title"
        background-overlay
        class="w-full"
        inputClassses="w-full vs-input-no-border vs-input-no-shdow-focus"
        icon="SearchIcon"
        placeholder="Busca en tu campus virtual..."
        @input="hnd_search_query_update"
        @selected="selected"
        @closeSearchbar="showFullSearch = false"
      >

        <!-- GROUP NAME -->
        <template v-slot:group="{ group_name }">
          <p class="font-semibold text-primary">{{ group_name | title }}</p>
        </template>

        <!-- Pages Suggestion -->
        <template v-slot:dentro_del_campus="{ suggestion }">
          <div class="flex items-end leading-none py-1">
            <feather-icon :icon="suggestion.icon" svgClasses="h-5 w-5" class="mr-4" />
            <span class="mt-1">{{ suggestion.title }}</span>
          </div>
        </template>

        <!-- Courses Suggestion -->
        <template v-slot:cursos="{ suggestion }">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div class="img-container w-8 mr-3 flex">
                <feather-icon icon="MonitorIcon" svgClasses="h-5 w-5" class="mr-4" />
              </div>
              <div class="leading-none mt-1">
                <p class="mb-1 font-semibold">{{ suggestion.name }}</p>
                <small>{{ suggestion.date }}</small>
              </div>
            </div>
          </div>
        </template>


        <!-- No Items Slot -->
        <template v-slot:noResult>
          <div class="flex items-center">
            <feather-icon icon="InfoIcon" svgClasses="h-5 w-5" class="mr-4" />
            <span>Sin resultados</span>
          </div>
        </template>
      </vx-auto-suggest>

      <div class="absolute right-0 h-full z-50">
        <feather-icon
          icon="XIcon"
          class="px-4 cursor-pointer h-full close-search-icon"
          @click="showFullSearch = false"
        />
      </div>
    </div>
    <feather-icon
      icon="SearchIcon"
      @click="showFullSearch = true"
      class="cursor-pointer navbar-fuzzy-search mr-4 ml-4"
    />

    <contactoModal :active="activeContacto" @closeContactoModal="activeContacto = false" />
  </div>
</template>

<script>
import VxAutoSuggest from "@/components/vx-auto-suggest/VxAutoSuggest.vue";

export default {
  components: {
    VxAutoSuggest,
    contactoModal: () => import("@/views/contacto/contacto.vue"),
  },
  data() {
    return {
      activeContacto: false,
      data_buscador: {
        dentro_del_campus: {
          key: "title",
          data: [
            {
              title: "Indetec",
              external_url: "https://www.indetec.gob.mx/index.php",
              icon: "AtSignIcon",
              is_bookmarked: false,
            },
            {
              title: "Inicio",
              url: "/",
              icon: "HomeIcon",
              is_bookmarked: false,
            },
            {
              title: "Nosotros",
              url: "/acerca-de",
              icon: "InfoIcon",
              is_bookmarked: false,
            },
            {
              title: "Ayuda",
              url: "/ayuda",
              icon: "HelpCircleIcon",
              is_bookmarked: false,
            },
            {
              title: "Contacto",
              url: "/contacto",
              icon: "EditIcon",
              is_bookmarked: false,
              modal: true,
            },
          ],
        },
        cursos: {
          key: "name",
          data: [
            {
              id: 1,
              name: "Vue.js",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Daniel Cristhian Vázquez Hernández",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20IMP%20Remoto.png",
            },
            {
              id: 2,
              name: "Angular",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg",
            },
            {
              id: 3,
              name: "NodeJS",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/Bienes%20OL%20sinAsesor.jpg",
            },
            {
              id: 4,
              name: "CSS",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png",
            },
            {
              id: 5,
              name: "PHP",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png",
            },
            {
              id: 6,
              name:
                "Curso Completo Power BI Desktop - Última versión de Power BI",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg",
            },
            {
              id: 7,
              name: "SQL - MySQL for Data Analytics and Business Intelligence",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/Imp_02_19.jpg",
            },
            {
              id: 8,
              name: "SCRUM Práctico en Proyectos de Software",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Bienes%20Remoto.png",
            },
            {
              id: 9,
              name: "Premiere Pro CC for Beginners: Video Editing in Premiere",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg",
            },
            {
              id: 10,
              name:
                "Adobe Lightroom CC Photo Editing: Your Lightroom Masterclass",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores eum eligendi inventore id dolor excepturi numquam, maxime ut vero officiis repellendus consectetur nemo, tenetur animi adipisci pariatur! Quas, incidunt?",
              by: "Someone",
              price: 1500,
              date: "30 de marzo de 2020",
              image:
                "http://vps.indetec.gob.mx/ActualizacionesSAACG/Pruebas/Imagenes/OL%20Seg.jpg",
            },
          ],
        },
      },
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      showFullSearch: false,
    };
  },
  methods: {
    selected(item) {
      console.log('Selected', item);
      // SI EL SELECCIONADO ES PÁGINA SINO ES CURSO
      if (item.dentro_del_campus) {
        if (item.dentro_del_campus.modal) {
          this.activeContacto = true;
        } else if (item.dentro_del_campus.external_url) {
          window.location.replace(item.dentro_del_campus.external_url);
        } else {
          if (item.dentro_del_campus) this.$router.push(item.dentro_del_campus.url).catch(() => {});
        }
      } else {
        if (item.cursos) this.$router.push('/detalle-especialidad/' + item.cursos.id).catch(() => {});
      }

      console.log('Selected', item);
      
      // if (item.pages) this.$router.push(item.pages.url).catch(() => {});
      this.showFullSearch = false;
    },
    hnd_search_query_update(query) {
      // Show overlay if any character is entered
      this.$store.commit("TOGGLE_CONTENT_OVERLAY", !!query);
    },
  },
};
</script>
