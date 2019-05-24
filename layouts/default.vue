<template>
  <div>
    <Navbar></Navbar>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class Default extends Vue { }
</script>

