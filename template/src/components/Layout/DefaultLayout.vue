<template>
  <div class="container-2-row-2-col">
      <div class="header-layout">
        <header-layout />
      </div>
      <div class="left-layout">
        <left-side-layout />
      </div>
      <div class="body-layout">
      <slot />
      </div>
  </div>
</template>

<script>
import HeaderLayout from '@/components/Layout/HeaderLayout'
import LeftSideLayout from '@/components/Layout/LeftSideLayout'

export default {
  name: 'DefaultLayout',
  components: {
    HeaderLayout,
    LeftSideLayout
  }
}
</script>

<style scoped>

@media all and (max-width: 1439px) {
  .container-2-row-2-col {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 20% 78%;
    grid-template-rows: 60px auto;
    grid-template-areas:
      "header header"
      "sidebar main"
  }
}

@media all and (min-width: 1440px) {
  .container-2-row-2-col {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: 20% 78%;
    grid-template-rows: 60px auto;
    grid-template-areas:
      "header header"
      "sidebar main"
  }
}

.header-layout {
  grid-area: header;
}

.left-layout {
  grid-area: sidebar;
}

.body-layout {
  grid-area: main;
}
</style>
