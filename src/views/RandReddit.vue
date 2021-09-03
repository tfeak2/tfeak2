<template>
  <div class="content">
      <h1>Rand Reddit</h1>
    <div class="wrapper">
    <div class="settings">
        <TypeSelector @toggle-type="toggleType" :activeTypes="activeTypes" />
        <TagSelector @new-tag="newTag" @delete-tag="deleteTag" :tags="activeTags" />
    </div>
    <div class="saveslots">
      <SaveSlots @save="saveSlot" @load-slot="loadSlot" @delete-slot="deleteSlot" :slots="slots" />
    </div>
  </div>
  <Image @reload="getPost" :url="imageUrl" />
  
  </div>
</template>

<script>
import Image from "../components/Image"
import TagSelector from "../components/TagSelector"
import TypeSelector from "../components/TypeSelector"
import SaveSlots from "../components/SaveSlots"
import {reddit} from "reddit.images"

export default {
  name: 'App',
  components: {
    Image,
    TagSelector,
    TypeSelector,
    SaveSlots,
  },
  methods: {
    async getPost(){
      var subreddit = this.activeTags[Math.floor(this.random(1,this.activeTags.length+1)-1)];
      var type = this.activeTypes[Math.floor(this.random(1,this.activeTypes.length+1)-1)];
      reddit.FetchSubredditPost(subreddit, type).then((post) => {
        if(post.image.toLowerCase().endsWith("png") || post.image.toLowerCase().endsWith("jpg") || post.image.toLowerCase().endsWith("gif")){
          this.imageUrl = post.image;
          this.currentImage.image = post.image;
          this.currentImage.id = post.title;
          this.currentImage.nsfw = post.NSFW;
        }
        else{
          this.imageUrl = "https://cdn.discordapp.com/attachments/614349999769124874/883174452119085076/unknown.png";
        }
        //console.log(post.image);
      });
    },
    deleteTag(tag){
      var index = this.activeTags.indexOf(tag);
      this.activeTags.splice(index, 1);
    },
    newTag(tag){
      this.activeTags.push(tag);
    },
    random(mn, mx) { 
      return Math.random() * (mx - mn) + mn;
    },
    toggleType(type){
      
      if(this.activeTypes.includes(type)){
        var index = this.activeTypes.indexOf(type);
        this.activeTypes.splice(index, 1);
      }
      else{
        
        this.activeTypes.push(type);
      }
    },
    loadSlot(id){
      var loadSlot = [...this.slots].filter(slot => slot.id == id);
      console.log(loadSlot);
      this.imageUrl = loadSlot[0].image;
    },
    saveSlot(){
      console.log("hello");
      this.currentImage.id = this.truncateString(this.currentImage.id, 30);
      this.slots.push({...this.currentImage});
    },
    deleteSlot(id){
      var index = this.slots.map(function(e) { return e.id; }).indexOf(id);
      this.slots.splice(index, 1);
    },
    truncateString(str, num){
      if(str.length <= num){
        return str;
      }
      return str.substring(0, num) + "...";
    }
  },
  data(){
    return {
      imageUrl: String,
      currentImage: {
        id: "Click here to start",
        image: "https://cdn.discordapp.com/attachments/614349999769124874/883174452119085076/unknown.png",
        nsfw: false,
      },
      activeTags: ["dankmemes", "memes"],
      activeTypes: ["hot", "rising"],
      slots: [],
    }
  },
  created(){
    this.imageUrl = "https://cdn.discordapp.com/attachments/614349999769124874/883174452119085076/unknown.png";
  }
}
</script>

<style>


</style>
