<template>
    <div class="firstLog my-auto">
        <logIn class="logIn"/>
        <signUp class="signUp"/>
    </div>
</template>

<script>

import logIn from '@/pages/logIn'
import signUp from '@/pages/signUp'

export default {
  setup() {

  },
  components: { logIn, signUp}
}
</script>