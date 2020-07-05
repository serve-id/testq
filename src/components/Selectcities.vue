<template>
  <div>
    <q-select
      clearable
      outlined
      dense
      v-model="cities.city"
      :options="citiesoptions"
      label="Select City"
      style="min-width:250px"
    />
    <q-input class="bg-amber-3 q-pa-xs" v-model="cities.others" label="If Others?" maxlength="25"/>
    <q-btn icon="save" color="green" @click="$emit('saveme')"/>
  </div>
</template>
<script>
export default {
  props: ['cities', 'citiesoptions']
}
</script>