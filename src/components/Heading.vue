<template>
    <div class="Heading">
        <div class="logo">
            <h1>My Track</h1>
        </div>
        <Loggedin class="my-2" />
    </div>
</template>
<script>
import Loggedin from '@/components/Loggedin'

export default {
    name: 'Heading',
    setup() {
        
    },
    components:{
        Loggedin
    }
}
</script>
