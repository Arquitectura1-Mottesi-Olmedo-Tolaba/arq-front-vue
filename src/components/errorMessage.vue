<template>
  <div>
    <sui-message class="negative" style="margin-bottom=2px"
      :header="this.title"
      :content="this.message"
    />
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props:['message', 'title'],
  data() {
    return { };
  }
};
</script>
