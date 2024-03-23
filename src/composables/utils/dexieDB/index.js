import Dexie from 'dexie';
import {createMinutes} from '@/composables/mixins';
import { version } from "../../../../package.json";


export const db = new Dexie('myDatabase');


db.version(Math.ceil(parseFloat(version))).stores({
    mytokenLists: '++id, name, symbol,icon,icon_dominant_color,token_networks,is_enabled,expiration', // Primary key and indexed props
});



export const addToken = async(tokenLists) => {


    // try {
    //       // Fetch all entries from the mytokenLists table
    //       const tokenEntries = await db.mytokenLists.toArray();

    //       // Extract the id property from each entry
    //       const tokenIds = tokenEntries.map(entry => entry.id);
    //       console.log(tokenIds)

    //       if(tokenIds.length < 1){
    //         // tokenLists = JSON.parse(JSON.stringify(tokenLists));
    //         await db.mytokenLists.add({ ...tokenLists, expiration: createMinutes() });
    //         console.log('Added token to Dexie DB');
    //       }
      
    // } catch (error) {
    //     console.error('Error adding/updating token to Dexie DB:', error);
    //     throw error;
    // }


};





// how to get the stored data
export const getStoredData = async (alldata) => {
    // try {
    //     // Open the database
    //     await db.open();

    //     // Fetch all records from the 'mytokenLists' table
    //     const data = await db.data.toArray();

    //     // Return the fetched data
    //     return data;
    // } catch (error) {
    //     console.error('Error fetching stored data:', error);
    //     throw error;
    // }
};
