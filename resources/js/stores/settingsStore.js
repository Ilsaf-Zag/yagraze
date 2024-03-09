import {defineStore} from 'pinia';
import {reactive, ref} from "vue";
import axios from "axios";

export const useSettingsStore = defineStore('settings', () => {

   const settings = reactive({
       services:{},
       googleFormLink:{},
       socialMediaLinks:{},
       infoAboutDesigner:{}
   })

    axios.get('/api/settings')
        .then(({data}) => {
           if (data){
               Object.assign(settings.services,data.data.services)
               Object.assign(settings.googleFormLink,data.data.googleFormLink)
               Object.assign(settings.socialMediaLinks,data.data.socialMediaLinks)
               Object.assign(settings.infoAboutDesigner,data.data.infoAboutDesigner)
           }
        })

    return {settings}
})
