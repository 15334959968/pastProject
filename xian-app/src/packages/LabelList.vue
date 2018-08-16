<template>
  <section class="xa-label-list">
    <template v-for="(item, index) in list" :key="index">
      <mu-select
          full-width
          :key="index"
          :label="item.label"
          v-model="item.value"
          v-if="item.inputType = 'select'">
        <mu-option
            :key="subItem.value"
            :label="subItem.label || subItem.value"
            :value="subItem.value"
            v-for="subItem of (item.option || [])">
        </mu-option>
      </mu-select>

      <mu-date-input
          v-model="item.value"
          :label="item.label"
          label-float
          full-width
          v-if="item.inputType = 'date'">
      </mu-date-input>

      <mu-text-field
          multi-line
          :key="index"
          :label="item.label"
          :placeholder="item.placeholder"
          :icon="item.icon"
          v-model="item.value"
          v-else-if="item.inputType === 'textarea'">
      </mu-text-field>

      <mu-text-field
          :key="index"
          :type="item.type || 'text'"
          :label="item.label"
          :placeholder="item.placeholder"
          :icon="item.icon"
          v-model="item.value"
          v-else>
      </mu-text-field>
    </template>
  </section>
</template>

<script>
export default {
  name: 'label-list',
  props: {
    list: {
      type: [Object, Array],
      default: () => ([])
    }
  }
};
</script>
