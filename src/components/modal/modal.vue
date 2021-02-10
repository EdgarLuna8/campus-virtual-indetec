<template>
  <vs-popup
    :active.sync="active_modal"
    :title="configuracion.title"
    :fullscreen="configuracion.fullscreen"
    :background-color="configuracion.background_color"
    :background-color-popup="configuracion.background_color_popup"
  >
    <slot name="modal-header" />
    <slot name="modal-body" />
    <slot name="modal-footer" />
  </vs-popup>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    configuracion: {
      type: Object,
      default: function () {
        return {
          title: "",
          fullscreen: false,
          background_color: "",
          background_color_popup: "",
          button_close_hidden: false,
          icon_pack: "material-icons",
          icon_close: "close",
        };
      },
    },
  },
  data() {
    return {
      active_modal: false,
    };
  },
  watch: {
    active: function (value) {
      this.active_modal = value;
    },
    active_modal: function (value) {
      if (!value) this.$emit("closeModal");
    },
  }
};
</script>