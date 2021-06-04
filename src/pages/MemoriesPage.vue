<template lang="">
    <base-layout page-title="All Memories">
<!-- Slot Add button -->
<template v-slot:actions-end>
 <ion-button router-link="/memories/add">
   <ion-icon slot="icon-only" :icon="add"></ion-icon>
 </ion-button>
</template>

    <!-- Memories List -->
    <ion-list>
      <ion-item v-for="memory in memories" :key="memory.id" :router-link="`/memories/${memory.id}`">
      <ion-thumbnail slot="start">
                <ion-img :src="memory.image" :alt="memory.title"></ion-img>
      </ion-thumbnail>
      <ion-label>
        {{memory.title}}
      </ion-label>
      </ion-item>
</ion-list>
</base-layout>

</template>
<script>
import {
  IonList,
  IonItem,
  IonImg,
  IonThumbnail,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
    IonButton,
    IonIcon,
  },
  data() {
    return {
      add,
    };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
<style lang="">
</style>