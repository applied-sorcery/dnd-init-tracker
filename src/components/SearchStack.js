import SearchView from "./SearchView";
import InfoView from "./InfoView";


import React from "react";
const searchStack = () =>{

        <Stack.Navigator>
          <Stack.Screen
          
          component={SearchView}
          options={{ title: 'Welcome' }}
            />
          <Stack.Screen name="Info" component={InfoView} />
        </Stack.Navigator>

};