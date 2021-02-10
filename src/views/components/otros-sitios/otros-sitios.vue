<template>
  <div>
    <h4 class="text-center">Otros sitios</h4>
    <ul class="faq-topics mt-4">
      <li v-for="category in categories" :key="category.id" class="p-2 font-medium flex items-center">
        <div class="h-3 w-3 rounded-full mr-2 bg-primary"></div>
        <span class="cursor-pointer">{{ category.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Indetec",
        },
        {
          id: 2,
          name: "Biblioteca digital",
        }
      ]
    };
  }
};
</script>