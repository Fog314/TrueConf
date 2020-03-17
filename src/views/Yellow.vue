<template>
    <div class="light">
      <div class="red"></div>
      <div class="yellow"></div>
      <div class="green"></div>
    </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Yellow',
}
</script>
<style lang="scss" scoped>
.light{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 600px;
  border: 10px  solid black;
  border-bottom: 250px solid black;
  .red{
    height: 33%;
    background: rgb(255, 0, 0, 0.5);
    border-radius: 50%;
  }
  .yellow{
    height: 33%;
    background: rgba(238, 255, 0);
    border-radius: 50%;
  }
  .green{
    height: 33%;
    background: rgb(30, 255, 0, 0.5);
    border-radius: 50%;
  }
}
</style>