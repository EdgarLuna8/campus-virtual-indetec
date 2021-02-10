<template>
  <div :style="{'direction': $vs.rtl ? 'rtl' : 'ltr'}" class="text-center">
    <vs-dropdown>
      <!-- <a class="flex items-center" href="#"> -->
        <!-- Dropdown hover -->
        <feather-icon icon="SettingsIcon" svgClasses="h-5 w-5 cursor-pointer" />
      <!-- </a> -->

      <vs-dropdown-menu class="ml-3">
        <vs-dropdown-item>
          <feather-icon icon="EditIcon" svgClasses="h-3 w-3 hover:text-primary cursor-pointer" @click="editRecord" />
          Edición
        </vs-dropdown-item>
        
        <vs-dropdown-item>
          <feather-icon icon="TrashIcon" svgClasses="h-3 w-3 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" />
          Eliminar
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>

    <!-- <feather-icon icon="Edit3Icon" svgClasses="h-5 w-5 mr-4 hover:text-primary cursor-pointer" @click="editRecord" /> -->
    <!-- <feather-icon icon="Trash2Icon" svgClasses="h-5 w-5 hover:text-danger cursor-pointer" @click="confirmDeleteRecord" /> -->
  </div>
</template>

<script>
export default {
  name: "CellRendererActions",
  methods: {
    editRecord() {
      this.$vs.notify({
        color: "success",
        title: "User edited " + this.params.data.name,
        text: "The selected user was successfully edited",
      });
      // this.$router.push(`/apps/user/user-edit/${  268}`).catch(() => {})

      /*
              Below line will be for actual product
              Currently it's commented due to demo purpose - Above url is for demo purpose

              this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
            */
    },
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm Delete",
        text: `You are about to delete "${this.params.data.username}"`,
        accept: this.deleteRecord,
        acceptText: "Delete",
      });
    },
    deleteRecord() {
      /* Below two lines are just for demo purpose */
      this.showDeleteSuccess();

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: "danger",
        title: "User Deleted",
        text: "The selected user was successfully deleted",
      });
    },
  },
};
</script>
