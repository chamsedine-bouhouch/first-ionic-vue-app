<template lang="">
       
<form class="ion-padding"  @submit.prevent="submitForm">
            <ion-list>
            <ion-item>
                <ion-label position="floating">Titre</ion-label>
                <ion-Input type="text" required v-model="title"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Image url</ion-label>
                <ion-Input type="url" required  v-model="imageUrl"/>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5" v-model="description"></ion-textarea>            
            </ion-item>
            
        </ion-list>
                        <ion-button type="submit" expand="block" fill="outline">Save</ion-button>            

</form>
</template>
<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
export default {
  emits: ["save-memory"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      title: "",
      imageUrl: "",
      description: "",
    };
  },
  methods: {
    submitForm() {
      const memoryData = {
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>
<style lang="">
</style>