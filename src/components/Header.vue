<template>
  <header>
    <div class="header-content">
      <div class="header-picture">
        <img :src="headerImage" alt="Header Image" />
        <p>
          <b>{{ headerText }}</b> <br />
        </p>
      </div>

      <span>Пользователь: Admin</span>
    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      headerImage: '',
      headerText: '', // динамический текст
    };
  },
  watch: {
    '$route'(to) {
      this.loadHeaderImage(to.meta.headerImage);
      this.updateHeaderText(to.meta.headerText);
    },
  },
  mounted() {
    this.loadHeaderImage(this.$route.meta.headerImage);
    this.updateHeaderText(this.$route.meta.headerText);
  },
  methods: {
    async loadHeaderImage(imagePath) {
      if (imagePath) {
        try {
          const image = await import(`@/assets/${imagePath}.png`);
          this.headerImage = image.default;
        } catch (error) {
          console.error('Ошибка при загрузке изображения:', error);
        }
      }
    },
    updateHeaderText(text) {
      if (text) {
        this.headerText = text;
      } else {
        this.headerText = 'Эта страница предназначена для того то того то'; // Текст по умолчанию
      }
    },
  },
};
</script>

<style scoped>
.header-content {
  width: 100%;
padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-picture {
display: flex;
  align-items: center;
}
img {
  width: 70px;
  height: auto;
}
</style>
