 <template lang="">
    <base-layout :page-title="loaddedMemory ? loaddedMemory.title : 'Loading...' " page-default-back-link="/memories">
<div v-if="!loaddedMemory">Data not found</div>
<div v-else  class="ion-padding">
    <ion-img :src="loaddedMemory.image" :alt="loaddedMemory.title"></ion-img>
        <h2 class="ion-text-center"> {{ loaddedMemory.title }}</h2>

    <p class="ion-text-center"> {{ loaddedMemory.description }}</p>

</div>

</base-layout>

</template>
<script>
import { IonImg } from "@ionic/vue";
export default {
  components: { IonImg },
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loaddedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  //   watch: {
  //     $route(currentRoute) {
  //       this.memoryId = currentRoute.params.id;
  //       console.log(currentRoute.params.id);
  //     },
  //   },
  mounted() {
    this.memoryId = this.$route.params.id;
  },
};
</script>
<style lang="">
</style>