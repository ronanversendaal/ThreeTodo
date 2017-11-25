<template>
<div>
  <v-container fluid
               pa-0
               fill-height>
    <v-layout>
      <v-flex d-block>
        <v-list three-line
                subheader>
          <v-subheader>Period settings</v-subheader>
          <v-list-tile avatar
                       v-ripple>
            <v-list-tile-content>
              <v-list-tile-title>Active periods</v-list-tile-title>
              <v-list-tile-sub-title>Daylies, Monthlies, Yearlies</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar
                       v-ripple
                       three-line>
            <v-list-tile-content>
              <v-list-tile-title>Retain todo's</v-list-tile-title>
              <v-list-tile-sub-title>Whether your incomplete tasks will persist after the period expires</v-list-tile-sub-title>
            </v-list-tile-content>
              <v-list-tile-action>
                <v-switch></v-switch>
              </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>
