import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "1",
          title: "Music",
          image:
            "https://scontent.ftun10-1.fna.fbcdn.net/v/t1.6435-9/131663543_4190274704332871_6073556359850676348_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=gqPBgHX7GlEAX92ihUp&_nc_ht=scontent.ftun10-1.fna&oh=ee671c82a2514c54fc9ec4143bac8eda&oe=60DB1454",
          description: "I like amazing music",
        },
        {
          id: "2",
          title: "Eating",
          image:
            "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/woman-eating-yogurt-1296x728-header.jpg?w=1155&h=1528",
          description: "I love tasty food",
        },
        {
          id: "3",
          title: "Sport",
          image:
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          description: "I am a BIG fan of sports",
        },
      ],
    };
  },        
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (id) => {
        return state.memories.find((memory) => memory.id === id);
      };
    },
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString,
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory);
    },
  },
});
export default store;
