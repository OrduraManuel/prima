<template>
  <div class="Heading">
    <div class="logo">
      <h1>My Track</h1>
    </div>
    <Loggedin class="my-2" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Loggedin from '../components/Loggedin.vue';


@Options({
  components: {
    Loggedin,
  }
})

export default class Home extends Vue {
  name: String = 'Home';

  created() {
    /*  */
  }
  mounted() {
    /*  */
  }
  computed() {
    /*  */
  }

  setup() {
    /*  */

    return { /*  */ };
  }
}
</script>
